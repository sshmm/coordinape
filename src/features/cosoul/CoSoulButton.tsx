import assert from 'assert';

import { ChainId } from '@decent.xyz/box-common';
import { getBalance } from '@wagmi/core';
import { ethers } from 'ethers';
import { getMagicProvider } from 'features/auth/magic';
import { useSavedAuth } from 'features/auth/useSavedAuth';
import {
  wagmiConfig,
  wagmiChain,
  defaultAvailableChains,
} from 'features/DecentSwap/config';
import { DecentSwap } from 'features/DecentSwap/DecentSwap';
import { useQuery } from 'react-query';
import { Address } from 'viem';

import { useToast } from '../../hooks';
import { useWeb3React } from '../../hooks/useWeb3React';
import { Button, Flex, Panel, Text } from '../../ui';
import { switchToCorrectChain } from '../web3/chainswitch';
import { BridgeButton } from 'components/BridgeButton';
import { OptimismBridgeButton } from 'components/OptimismBridgeButton';
import { OrBar } from 'components/OrBar';
import { IN_PREVIEW, IN_PRODUCTION } from 'config/env';
import { isFeatureEnabled } from 'config/features';

import { chain } from './chains';
import { MintOrBurnButton } from './MintOrBurnButton';
import { useCoSoulContracts } from './useCoSoulContracts';

const MIN_BALANCE = ethers.utils.parseEther('0.001');

export const CoSoulButton = ({ onReveal }: { onReveal(): void }) => {
  const { library, chainId, account, setProvider } = useWeb3React();
  const { savedAuth } = useSavedAuth();
  const contracts = useCoSoulContracts();
  const { showError } = useToast();

  const { data: balance } = useQuery(
    ['balanceOf', account],
    async () => {
      if (account) {
        return await getBalance(wagmiConfig, {
          address: account as Address,
          chainId: wagmiChain.id,
        });
      }
    },
    {
      enabled: !!account,
      refetchInterval: 4000,
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

  if ((balance?.value || 0) < MIN_BALANCE.toBigInt()) {
    return (
      <Flex column css={{ gap: '$sm' }}>
        <Text tag semibold color={'warning'}>
          Your{' '}
          {isFeatureEnabled('test_decent') || IN_PRODUCTION
            ? 'OP ETH'
            : IN_PREVIEW
              ? 'OP Sepolia ETH'
              : 'ETH'}{' '}
          balance is{' '}
          {ethers.utils.formatEther(balance?.value ?? 0).slice(0, 10)}
        </Text>
        <Panel neutral>
          <Text inline size="small" css={{ textAlign: 'center' }}>
            CoLinks is built on the Optimism blockchain (OP), and requires a
            little bit of ETH on Optimism for gas to get started. We&apos;ve
            made it easy and super cheap, especially if you&apos;re moving from
            another L2 (eg. Base, Arbitrum).
          </Text>
          <Flex column css={{ mt: '$sm' }}>
            {defaultAvailableChains.includes(chainId as ChainId) &&
            (!IN_PREVIEW || (IN_PREVIEW && isFeatureEnabled('test_decent'))) ? (
              <BridgeButton>
                <>
                  <DecentSwap></DecentSwap>
                  <OrBar>OR</OrBar>
                  <OptimismBridgeButton />
                </>
              </BridgeButton>
            ) : (
              <OptimismBridgeButton />
            )}
          </Flex>
        </Panel>
      </Flex>
    );
  }

  if (chain && !onCorrectChain) {
    return (
      <Button color="cta" size="large" onClick={safeSwitchToCorrectChain}>
        Switch to {chain.chainName} to Mint
      </Button>
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
