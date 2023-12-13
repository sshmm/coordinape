import { HardhatUserConfig } from 'hardhat/config';
import 'hardhat-gas-reporter';
import '@typechain/hardhat';
import 'hardhat-deploy';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
declare const config: HardhatUserConfig;
export default config;
