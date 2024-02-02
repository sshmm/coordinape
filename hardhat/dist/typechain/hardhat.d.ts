/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "OwnableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnableUpgradeable__factory>;
    getContractFactory(
      name: "Initializable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Initializable__factory>;
    getContractFactory(
      name: "ERC721Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Upgradeable__factory>;
    getContractFactory(
      name: "ERC721EnumerableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721EnumerableUpgradeable__factory>;
    getContractFactory(
      name: "IERC721EnumerableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721EnumerableUpgradeable__factory>;
    getContractFactory(
      name: "IERC721MetadataUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721MetadataUpgradeable__factory>;
    getContractFactory(
      name: "IERC721ReceiverUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721ReceiverUpgradeable__factory>;
    getContractFactory(
      name: "IERC721Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Upgradeable__factory>;
    getContractFactory(
      name: "ContextUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ContextUpgradeable__factory>;
    getContractFactory(
      name: "ERC165Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165Upgradeable__factory>;
    getContractFactory(
      name: "IERC165Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165Upgradeable__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "IERC1822Proxiable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1822Proxiable__factory>;
    getContractFactory(
      name: "IERC1967",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1967__factory>;
    getContractFactory(
      name: "BeaconProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BeaconProxy__factory>;
    getContractFactory(
      name: "IBeacon",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBeacon__factory>;
    getContractFactory(
      name: "UpgradeableBeacon",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UpgradeableBeacon__factory>;
    getContractFactory(
      name: "ERC1967Proxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1967Proxy__factory>;
    getContractFactory(
      name: "ERC1967Upgrade",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1967Upgrade__factory>;
    getContractFactory(
      name: "Proxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Proxy__factory>;
    getContractFactory(
      name: "ITransparentUpgradeableProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITransparentUpgradeableProxy__factory>;
    getContractFactory(
      name: "TransparentUpgradeableProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TransparentUpgradeableProxy__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Permit__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ApeAllowanceModule",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ApeAllowanceModule__factory>;
    getContractFactory(
      name: "ApeDistributor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ApeDistributor__factory>;
    getContractFactory(
      name: "ApeRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ApeRegistry__factory>;
    getContractFactory(
      name: "ApeRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ApeRouter__factory>;
    getContractFactory(
      name: "FeeRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FeeRegistry__factory>;
    getContractFactory(
      name: "MockRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockRegistry__factory>;
    getContractFactory(
      name: "MockToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockToken__factory>;
    getContractFactory(
      name: "MockVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockVault__factory>;
    getContractFactory(
      name: "MockVaultFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockVaultFactory__factory>;
    getContractFactory(
      name: "TimeLock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TimeLock__factory>;
    getContractFactory(
      name: "COToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.COToken__factory>;
    getContractFactory(
      name: "TokenAccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenAccessControl__factory>;
    getContractFactory(
      name: "ApeUpgradeableBeacon",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ApeUpgradeableBeacon__factory>;
    getContractFactory(
      name: "ApeVaultWrapperImplementation",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ApeVaultWrapperImplementation__factory>;
    getContractFactory(
      name: "OwnableImplementation",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnableImplementation__factory>;
    getContractFactory(
      name: "ApeVaultFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ApeVaultFactory__factory>;
    getContractFactory(
      name: "BaseWrapperImplementation",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseWrapperImplementation__factory>;
    getContractFactory(
      name: "RegistryAPI",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RegistryAPI__factory>;
    getContractFactory(
      name: "VaultAPI",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VaultAPI__factory>;
    getContractFactory(
      name: "MockVaultFactoryBeacon",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockVaultFactoryBeacon__factory>;
    getContractFactory(
      name: "ApeVaultWrapperImplementation1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ApeVaultWrapperImplementation1__factory>;
    getContractFactory(
      name: "ApeVaultWrapperImplementation2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ApeVaultWrapperImplementation2__factory>;
    getContractFactory(
      name: "ApeVaultWrapperImplementation3",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ApeVaultWrapperImplementation3__factory>;
    getContractFactory(
      name: "VaultBeacon",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VaultBeacon__factory>;
    getContractFactory(
      name: "VaultProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VaultProxy__factory>;
    getContractFactory(
      name: "CoLinks",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CoLinks__factory>;
    getContractFactory(
      name: "CoSoul",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CoSoul__factory>;
    getContractFactory(
      name: "SoulProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SoulProxy__factory>;
    getContractFactory(
      name: "IApeVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IApeVault__factory>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
  }
}
