// - React Imports
import { useMemo } from 'react';

// - Web3 Import
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import * as ethers from 'ethers';
// import { Maybe } from 'true-myth';

// - Type Imports
import { ApeVaultFactory } from '../../../hardhat/typechain/ApeVaultFactory';
import { ApeVaultWrapper } from '../../../hardhat/typechain/ApeVaultWrapper';
import { ApeVaultFactory__factory } from '../../../hardhat/typechain/factories/ApeVaultFactory__factory';
import { ApeVaultWrapper__factory } from '../../../hardhat/typechain/factories/ApeVaultWrapper__factory';
import { FeeRegistry__factory } from '../../../hardhat/typechain/factories/FeeRegistry__factory';
import { IApeVault__factory } from '../../../hardhat/typechain/factories/IApeVault__factory';
import { FeeRegistry } from '../../../hardhat/typechain/FeeRegistry';
import { IApeVault } from '../../../hardhat/typechain/IApeVault';
// import { VaultAPI } from '../../../hardhat/typechain/VaultAPI';

import addresses from './address';
import { chainIdToNetworkType, defaultNetworkId } from './networks';

export interface ContractAddresses {
  ApeVaultFactory: string;
  FeeRegistry: string;
  IApeVault: string;
  // VaultAPI: string;
  ApeVaultWrapper: string;
}

export interface Contracts {
  ApeVaultFactory: ApeVaultFactory;
  FeeRegistry: FeeRegistry;
  IApeVault: IApeVault;
  // VaultAPI: VaultAPI;
  ApeVaultWrapper: ApeVaultWrapper;
}

function useVaultContracts(): Contracts | null {
  const context = useWeb3React<Web3Provider>();
  const { library, active, chainId } = context;
  const contract = useMemo((): Contracts | null => {
    let contracts;
    let signer: ethers.VoidSigner | ethers.Signer = new ethers.VoidSigner(
      ethers.constants.AddressZero
    );
    if (!library) {
      contracts = addresses[chainIdToNetworkType(defaultNetworkId)];
    } else {
      if (!chainId) {
        console.error(`No chainid detected;`);
        return null;
      }

      contracts = addresses[chainIdToNetworkType(chainId)];
      // Temp disable because signer is used in the return statement
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      signer = library.getSigner();
    }

    if (!contracts) {
      console.error(`chain not supported`);
      return null;
    }
    return {
      ApeVaultFactory: ApeVaultFactory__factory.connect(
        contracts.ApeVaultFactory,
        signer
      ),
      ApeVaultWrapper: ApeVaultWrapper__factory.connect(
        contracts.ApeVaultWrapper,
        signer
      ),
      FeeRegistry: FeeRegistry__factory.connect(contracts.FeeRegistry, signer),
      IApeVault: IApeVault__factory.connect(contracts.IApeVault, signer),
      // VaultAPI: ApeVaultFactory__factory.connect(contracts.VaultAPI, signer),
    };
  }, [active, library, chainId]);
  return contract;
}

export { useVaultContracts };
