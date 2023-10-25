import { adminClient } from '../../../../api-lib/gql/adminClient';

import { KEY_HOLDER_VALUE, KEY_HOLDING_VALUE, KEYS_SCORE_MAX } from './scoring';

export const getKeysScore = async (address: string) => {
  const { my_holders, my_holdings } = await adminClient.query(
    {
      __alias: {
        my_holders: {
          key_holders_aggregate: [
            {
              where: {
                subject: {
                  _eq: address,
                },
              },
            },
            {
              aggregate: {
                sum: {
                  amount: true,
                },
              },
            },
          ],
        },
        my_holdings: {
          key_holders_aggregate: [
            {
              where: {
                address: {
                  _eq: address,
                },
              },
            },
            {
              aggregate: {
                sum: {
                  amount: true,
                },
              },
            },
          ],
        },
      },
    },
    {
      operationName: 'getKeysScore',
    }
  );

  const myHoldings = my_holdings.aggregate?.sum?.amount ?? 0;
  const myHolders = my_holders.aggregate?.sum?.amount ?? 0;

  const keyHolderScore = myHolders * KEY_HOLDER_VALUE;
  const keyHoldingScore = myHoldings * KEY_HOLDING_VALUE;

  return Math.floor(Math.min(KEYS_SCORE_MAX, keyHolderScore + keyHoldingScore));
};
