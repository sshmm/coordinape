import type { VercelRequest, VercelResponse } from '@vercel/node';

import { adminClient } from '../gql/adminClient';
import { errorResponse } from '../HttpError';
import { EventTriggerPayload } from '../types';

import { getHolderProfileId } from './linkTxInteractionEvent';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const {
      event: {
        data: {
          new: { created_at, target, holder, tx_hash },
        },
      },
    }: EventTriggerPayload<'link_tx', 'INSERT'> = req.body;

    // get the profileid from the address
    const actorProfileId = await getHolderProfileId(holder);
    const profileId = await getHolderProfileId(target);

    if (!profileId || !actorProfileId) {
      // this user doesn't use the app
      return res.status(200).json({
        message: `the user with address ${target} doesn't have a profile`,
      });
    }
    if (profileId === actorProfileId) {
      // This is a first timer! See if it was an invite!
      const { profiles_by_pk } = await adminClient.query(
        {
          profiles_by_pk: [
            {
              id: profileId,
            },
            {
              invited_by: true,
            },
          ],
        },
        {
          operationName: 'getProfileForFirstTimeLinker',
        }
      );

      if (profiles_by_pk?.invited_by) {
        await adminClient.mutate(
          {
            insert_notifications_one: [
              {
                object: {
                  actor_profile_id: actorProfileId,
                  profile_id: profiles_by_pk.invited_by,
                  invite_joined_id: actorProfileId,
                  created_at: created_at,
                },
              },
              {
                __typename: true,
              },
            ],
          },
          {
            operationName: 'insert__inviteeNotification',
          }
        );
      } else {
        return res.status(200).json({
          message: `no notification for your own buys`,
        });
      }
    }
    await adminClient.mutate(
      {
        insert_notifications_one: [
          {
            object: {
              actor_profile_id: actorProfileId,
              profile_id: profileId,
              link_tx_hash: tx_hash,
              created_at: created_at,
            },
          },
          {
            __typename: true,
          },
        ],
      },
      {
        operationName: 'insert__linkTxNotification',
      }
    );

    res.status(200).json({
      message: `link_tx notification recorded`,
    });
  } catch (e) {
    return errorResponse(res, e);
  }
}
