import { DeployFunction } from 'hardhat-deploy/types';
import { HardhatRuntimeEnvironment } from 'hardhat/types';

import { TEST_ENV, YEARN_REGISTRY_ADDRESS } from '../../../constants';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;
  const useProxy = !hre.network.live;
  let yRegistry: string;
  if (hre.network.name === 'hardhat' && !TEST_ENV) {
    yRegistry = (await hre.deployments.get('MockRegistry')).address;
  } else {
    yRegistry = YEARN_REGISTRY_ADDRESS;
  }
  const apeRegistry = await deploy('ApeRegistry', {
    contract: 'ApeRegistry',
    from: deployer,
    args: [0],
    log: true,
  });
  const apeVaultFactory = await deploy('ApeVaultFactory', {
    contract: 'ApeVaultFactory',
    from: deployer,
    args: [yRegistry, apeRegistry.address],
    log: true,
  });
  await deploy('ApeRouter', {
    contract: 'ApeRouter',
    from: deployer,
    args: [yRegistry, apeVaultFactory.address, 0],
    log: true,
  });
  await deploy('ApeDistributor', {
    contract: 'ApeDistributor',
    from: deployer,
    args: [],
    log: true,
  });
  await deploy('FeeRegistry', {
    contract: 'FeeRegistry',
    from: deployer,
    args: [],
    log: true,
  });
  await deploy('ApeToken', {
    contract: 'ApeToken',
    from: deployer,
    args: [],
    log: true,
  });
  return !useProxy;
};
export default func;
func.id = 'deploy_ape_protocol';
func.tags = ['DeployApe', 'Ape'];
