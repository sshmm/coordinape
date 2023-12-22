import type { VercelRequest, VercelResponse } from '@vercel/node';

import { adminClient } from '../gql/adminClient';
import { errorResponse } from '../HttpError';
import { EventTriggerPayload } from '../types';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const {
      event,
    }: EventTriggerPayload<'replies', 'INSERT' | 'DELETE' | 'UPDATE'> =
      req.body;
    if (!event.data?.new && event.data?.old) {
      return handleDelete(event.data.old, res);
    } else if (event.data?.new?.deleted_at) {
      return handleDelete(event.data.new, res);
    } else if (event.data?.new) {
      return handleInsert(event.data.new, res);
    }
  } catch (e) {
    return errorResponse(res, e);
  }
}

const handleInsert = async (
  newRow: EventTriggerPayload<'replies', 'INSERT'>['event']['data']['new'],
  res: VercelResponse
) => {
  const { activity_actor_id, profile_id, created_at, id } = newRow;

  // reply was created: notify all visible users who are mentioned in the reply
  // notify the creator of the post that they have a new reply, but don't duplicate mention them
  const mentions = parseMentions(newRow.reply);
  const mentionedProfileIds = await lookupMentionedNames(mentions);
  mentionedProfileIds.map(async mentionedProfileId => {
    await createMentionedInReplyNotification({
      profile_id,
      created_at,
      id,
      mentionedProfileId,
      activity_actor_id,
    });
  });

  // no duplicate notifications if mentioned the original post creator
  // no mentions of self
  if (
    activity_actor_id === profile_id ||
    mentionedProfileIds.includes(activity_actor_id)
  ) {
    return res.status(200).json({
      message: `no notification for replies you send/mention yourself`,
    });
  }
  await createReplyNotification({
    activity_actor_id,
    profile_id,
    created_at,
    id,
  });
  res.status(200).json({
    message: `replies notification recorded`,
  });
};

const handleDelete = async (
  newRow: EventTriggerPayload<'replies', 'DELETE'>['event']['data']['old'],
  res: VercelResponse
) => {
  const { id } = newRow;
  await adminClient.mutate(
    {
      delete_notifications: [
        {
          where: {
            _or: [
              {
                reply_id: {
                  _eq: id,
                },
              },
              {
                mention_reply_id: {
                  _eq: id,
                },
              },
            ],
          },
        },
        {
          __typename: true,
        },
      ],
    },
    {
      operationName: 'delete_repliesNotification',
    }
  );

  res.status(200).json({
    message: `replies notification deleted`,
  });
};

const parseMentions = (text: string) => {
  const regex = /@\S+/g;
  const mentions = text.match(regex);

  if (!mentions) {
    return [];
  }

  return mentions.map(mention => mention.substring(1));
};

export const lookupMentionedNames = async (
  mentions: string[]
): Promise<number[]> => {
  const { profiles } = await adminClient.query(
    {
      profiles: [
        {
          where: {
            name: {
              _in: mentions,
            },
          },
        },
        {
          id: true,
        },
      ],
    },
    {
      operationName: 'getMentionedNames',
    }
  );

  // TODO: lookup private_stream_visibility
  return profiles.map(profile => profile.id);
};

const createReplyNotification = async ({
  activity_actor_id,
  profile_id,
  id,
  created_at,
}: {
  activity_actor_id: number;
  profile_id: number;
  id: number;
  created_at: number;
}) => {
  return await adminClient.mutate(
    {
      insert_notifications_one: [
        {
          object: {
            profile_id: activity_actor_id,
            actor_profile_id: profile_id,
            reply_id: id,
            created_at: created_at,
          },
        },
        {
          __typename: true,
        },
      ],
    },
    {
      operationName: 'insert_repliesNotification',
    }
  );
};

const createMentionedInReplyNotification = async ({
  activity_actor_id,
  profile_id,
  id,
  created_at,
  mentionedProfileId,
}: {
  profile_id: number;
  id: number;
  created_at: number;
  mentionedProfileId: number;
  activity_actor_id: number;
}) => {
  // you cannot mention yourself
  if (mentionedProfileId === profile_id) {
    return;
  }

  // we can see each other, or I can see the post creator AND you can see the post creator
  let okToMention: boolean;
  const { private_stream_visibility_by_pk } = await adminClient.query(
    {
      private_stream_visibility_by_pk: [
        {
          profile_id: mentionedProfileId,
          view_profile_id: profile_id,
        },
        {
          __typename: true,
        },
      ],
    },
    {
      operationName: 'getPrivateStreamVisibility',
    }
  );

  okToMention = !!private_stream_visibility_by_pk;

  if (!okToMention) {
    const { private_stream_visibility, mutes } = await adminClient.query(
      {
        // can we both see the post
        private_stream_visibility: [
          {
            where: {
              _or: [
                {
                  profile_id: { _eq: profile_id },
                  view_profile_id: { _eq: activity_actor_id },
                },
                {
                  profile_id: { _eq: mentionedProfileId },
                  view_profile_id: { _eq: activity_actor_id },
                },
              ],
            },
          },
          { __typename: true },
        ],
        // and mentioned person has not muted the mentioner
        mutes: [
          {
            where: {
              profile_id: { _eq: mentionedProfileId },
              target_profile_id: { _eq: profile_id },
            },
          },
          { __typename: true },
        ],
      },
      {
        operationName: 'getPrivateStreamVisibility',
      }
    );

    okToMention = private_stream_visibility.length === 2 && mutes.length === 0;
  }

  if (!okToMention) {
    // eslint-disable-next-line no-console
    console.log('skipped mention creation', {
      mentionedProfileId,
      profile_id,
      activity_actor_id,
    });
    return;
  }

  return await adminClient.mutate(
    {
      insert_notifications_one: [
        {
          object: {
            profile_id: mentionedProfileId,
            actor_profile_id: profile_id,
            mention_reply_id: id,
            created_at: created_at,
          },
        },
        {
          __typename: true,
        },
      ],
    },
    {
      operationName: 'insert_mentionedInReplyNotification',
    }
  );
};
