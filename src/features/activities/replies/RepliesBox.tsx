import { useAuthStore } from 'features/auth';
import { order_by } from 'lib/gql/__generated__/zeus';
import { client } from 'lib/gql/client';
import { DateTime } from 'luxon';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { NavLink } from 'react-router-dom';

import { LoadingIndicator } from '../../../components/LoadingIndicator';
import { Trash2 } from '../../../icons/__generated';
import { coLinksPaths } from '../../../routes/paths';
import { Flex, HR, IconButton, MarkdownPreview } from '../../../ui';
import { ActivityAvatar } from '../ActivityAvatar';
import { ConfirmationModal } from 'components/ConfirmationModal';
import { Text } from 'ui';

import { ReplyForm } from './ReplyForm';

export const QUERY_KEY_REPLIES = 'query-key-replies';

export const RepliesBox = ({
  activityId,
  activityActorId,
}: {
  activityId: number;
  activityActorId: number;
}) => {
  const profileId = useAuthStore(state => state.profileId);

  const fetchReplies = async () => {
    const { replies } = await client.query(
      {
        replies: [
          {
            where: { activity_id: { _eq: activityId } },
            order_by: [{ created_at: order_by.asc }],
          },
          {
            id: true,
            reply: true,
            updated_at: true,
            profile_public: {
              id: true,
              name: true,
              address: true,
              avatar: true,
              cosoul: {
                id: true,
              },
            },
          },
        ],
      },
      {
        operationName: 'fetchReplies',
      }
    );
    return replies;
  };

  type Reply = Awaited<ReturnType<typeof fetchReplies>>[number];
  type ValidReply = Required<Reply> & {
    profile_public: {
      name: string;
      address: string;
    };
  };

  const queryClient = useQueryClient();

  const IsValidReply = (r: Reply): r is ValidReply => {
    return !!r.profile_public?.name && !!r.profile_public?.address;
  };
  const { data: replies } = useQuery(
    [QUERY_KEY_REPLIES, activityId],
    async () => {
      const resp = await fetchReplies();
      return resp.filter(IsValidReply);
    }
  );

  const { mutate: deleteReply } = useMutation(
    async (replyId: number) => {
      await client.mutate(
        {
          update_replies_by_pk: [
            {
              pk_columns: { id: replyId },
              _set: { deleted_at: 'now()' },
            },
            {
              id: true,
              deleted_at: true,
            },
          ],
        },
        {
          operationName: 'deleteReply',
        }
      );
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QUERY_KEY_REPLIES);
      },
    }
  );

  return (
    <>
      <HR />
      <Flex column>
        {replies === undefined && (
          <LoadingIndicator
            css={{
              position: 'absolute',
              left: `calc(50% - 28px)`,
              top: `calc(50% - 48px)`,
              zIndex: 1,
            }}
          />
        )}
        {replies !== undefined &&
          replies.map(reply => (
            <Flex key={reply.id} column>
              <Flex css={{ gap: '$md' }}>
                <ActivityAvatar profile={reply.profile_public} />
                <Flex column css={{ flex: 1 }}>
                  <Flex css={{ justifyContent: 'space-between' }}>
                    <Flex>
                      <Text
                        as={NavLink}
                        to={coLinksPaths.profile(reply.profile_public.address)}
                        css={{ textDecoration: 'none' }}
                        semibold
                      >
                        {reply.profile_public.name}
                      </Text>
                      <Text size="small" css={{ color: '$neutral', ml: '$md' }}>
                        {DateTime.fromISO(reply.updated_at).toRelative()}
                      </Text>
                    </Flex>
                    {reply.profile_public?.id === profileId && (
                      <Flex>
                        <ConfirmationModal
                          trigger={
                            <IconButton>
                              <Trash2 />
                            </IconButton>
                          }
                          action={() => deleteReply(reply.id)}
                          description="Are you sure you want to delete this reply?"
                          yesText="Yes, delete it!"
                        />
                      </Flex>
                    )}
                  </Flex>
                  <MarkdownPreview
                    key={reply.id}
                    render
                    source={reply.reply}
                    css={{ cursor: 'auto', mt: '$sm' }}
                  />
                </Flex>
              </Flex>
            </Flex>
          ))}
        <ReplyForm activityId={activityId} activityActorId={activityActorId} />
      </Flex>
    </>
  );
};
