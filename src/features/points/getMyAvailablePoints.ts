import assert from 'assert';

import { client } from '../../lib/gql/client';

import { getAvailablePoints } from './getAvailablePoints';

export const getMyAvailablePoints = async () => {
  const { profiles_private } = await client.query(
    {
      profiles_private: [
        {},
        {
          points_balance: true,
          points_checkpointed_at: true,
        },
      ],
    },
    {
      operationName: 'getPoints',
    }
  );
  const profile = profiles_private.pop();
  assert(profile, 'profiles_private doesnt exist for current user');
  assert(profile.points_balance !== undefined);
  assert(profile.points_checkpointed_at !== undefined);

  return getAvailablePoints(
    profile.points_balance,
    profile.points_checkpointed_at
  );
};
