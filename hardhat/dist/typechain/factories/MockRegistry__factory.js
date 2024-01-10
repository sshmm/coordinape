"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockRegistry__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_token',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '_vault',
                type: 'address',
            },
        ],
        name: 'addVault',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'governance',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        name: 'latestVault',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        name: 'numVaults',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        name: 'vaults',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
];
const _bytecode = '0x608060405234801561001057600080fd5b50600080546001600160a01b031916331790556102ab806100326000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80635aa6e6751461005c5780637bbfc69e1461008c578063e177dc70146100c0578063ec3a7823146100e9578063f9c7bba5146100fe575b600080fd5b60005461006f906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b61006f61009a366004610225565b60036020908152600092835260408084209091529082529020546001600160a01b031681565b61006f6100ce3660046101d2565b6001602052600090815260409020546001600160a01b031681565b6100fc6100f73660046101f3565b61012c565b005b61011e61010c3660046101d2565b60026020526000908152604090205481565b604051908152602001610083565b6001600160a01b03828116600090815260026020818152604080842080546001845291852080546001600160a01b031916968816969096179095559190528254909290916101798361024e565b90915550506001600160a01b0392831660009081526003602090815260408083209383529290522080546001600160a01b03191691909216179055565b80356001600160a01b03811681146101cd57600080fd5b919050565b6000602082840312156101e3578081fd5b6101ec826101b6565b9392505050565b60008060408385031215610205578081fd5b61020e836101b6565b915061021c602084016101b6565b90509250929050565b60008060408385031215610237578182fd5b610240836101b6565b946020939093013593505050565b600060001982141561026e57634e487b7160e01b81526011600452602481fd5b506001019056fea26469706673582212204ece10b483ee054acbcae69499230a8d2a5c6418edcffac6dfcc93549f41a62464736f6c63430008020033';
class MockRegistry__factory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.MockRegistry__factory = MockRegistry__factory;
MockRegistry__factory.bytecode = _bytecode;
MockRegistry__factory.abi = _abi;
