import assert from 'assert';

import { ethers } from 'ethers';
import { getMagicProvider } from 'features/auth/magic';
import { useSavedAuth } from 'features/auth/useSavedAuth';
import { useQuery } from 'react-query';

import { useToast } from '../../hooks';
import { useWeb3React } from '../../hooks/useWeb3React';
import { Button, Flex, Link, Panel, Text } from '../../ui';
import { switchToCorrectChain } from '../web3/chainswitch';

import { chain } from './chains';
import { MintOrBurnButton } from './MintOrBurnButton';
import { useCoSoulContracts } from './useCoSoulContracts';

const MIN_BALANCE = ethers.utils.parseEther('0.004');

export const CoSoulButton = ({ onReveal }: { onReveal(): void }) => {
  const { library, chainId, account, setProvider } = useWeb3React();
  const { savedAuth } = useSavedAuth();
  const contracts = useCoSoulContracts();
  const { showError } = useToast();

  const { data: balance } = useQuery(
    ['balanceOf', account],
    async () => {
      if (account) {
        return await library?.getBalance(account);
      }
    },
    {
      refetchInterval: 2000,
      enabled: !!account,
    }
  );

  const onCorrectChain = chainId === Number(chain.chainId);

  const safeSwitchToCorrectChain = async () => {
    try {
      if (savedAuth.connectorName == 'magic') {
        const provider = await getMagicProvider('optimism');
        await setProvider(provider, 'magic');
      } else {
        assert(library);
        await switchToCorrectChain(library);
      }
    } catch (e: any) {
      showError('Error Switching to ' + chain.chainName + ': ' + e.message);
    }
  };

  if (chain && !onCorrectChain) {
    return (
      <Button color="cta" size="large" onClick={safeSwitchToCorrectChain}>
        Switch to {chain.chainName} to Mint
      </Button>
    );
  }

  if (balance?.lt(MIN_BALANCE)) {
    return (
      <>
        <Panel css={{ gap: '$sm' }}>
          <Flex>
            <Text semibold color={'alert'}>
              Your balance is {ethers.utils.formatEther(balance).slice(0, 10)}{' '}
              ETH.
            </Text>
          </Flex>
          <Flex>
            <Text>Please deposit more ETH to your wallet.</Text>
          </Flex>
          <Button
            as={Link}
            href="https://www.optimism.io/apps/bridges"
            target={'_blank'}
            rel="noreferrer"
            css={{
              whiteSpace: 'normal',
            }}
          >
            Bridge ETH using the Optimism Bridge
          </Button>
        </Panel>
      </>
    );
  }

  if (!contracts || !account) {
    // FIXME: better loading state
    return <Text>Loading...</Text>;
  }

  return (
    <MintOrBurnButton
      contracts={contracts}
      address={account}
      onReveal={onReveal}
    />
  );
};
