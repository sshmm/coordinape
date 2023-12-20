import assert from 'assert';
import { useContext } from 'react';

import { useQuery, useQueryClient } from 'react-query';

import { CoLinksContext } from './CoLinksContext';
import { QUERY_KEY_COLINKS_NAV } from './useCoLinksNavQuery';
import { QUERY_KEY_COLINKS } from './wizard/CoLinksWizard';

export const useCoLinks = ({
  address,
  target,
}: {
  address: string;
  target: string;
}) => {
  const { coLinksReadOnly } = useContext(CoLinksContext);

  const { data: balances, refetch } = useQuery(
    [QUERY_KEY_COLINKS, address, target],
    async () => {
      assert(coLinksReadOnly);
      // your balance of them
      const balance = (
        await coLinksReadOnly.linkBalance(target, address)
      ).toNumber();
      // their balance of you
      const targetBalance = (
        await coLinksReadOnly.linkBalance(address, target)
      ).toNumber();
      const supply = (await coLinksReadOnly.linkSupply(target)).toNumber();
      const superFriend = targetBalance > 0 && balance > 0;
      return { balance, targetBalance, supply, superFriend };
    },
    {
      enabled: !!coLinksReadOnly,
    }
  );

  const queryClient = useQueryClient();
  const refresh = () => {
    refetch();
    setTimeout(() => {
      queryClient.invalidateQueries([QUERY_KEY_COLINKS, target]);
      queryClient.invalidateQueries([QUERY_KEY_COLINKS, address]);
      // this is for the wizard, prove we bought our own key
      queryClient.invalidateQueries([QUERY_KEY_COLINKS_NAV]);
    }, 2000);
  };

  return { ...balances, refresh };
};
