"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeLock__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_minDelay',
                type: 'uint256',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'bytes32',
                name: 'id',
                type: 'bytes32',
            },
        ],
        name: 'CallCancelled',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'id',
                type: 'bytes32',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'target',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'bytes',
                name: 'data',
                type: 'bytes',
            },
        ],
        name: 'CallExecuted',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'id',
                type: 'bytes32',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'target',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'bytes',
                name: 'data',
                type: 'bytes',
            },
            {
                indexed: false,
                internalType: 'bytes32',
                name: 'predecessor',
                type: 'bytes32',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'delay',
                type: 'uint256',
            },
        ],
        name: 'CallScheduled',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'previousOwner',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'newOwner',
                type: 'address',
            },
        ],
        name: 'OwnershipTransferred',
        type: 'event',
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: '_id',
                type: 'bytes32',
            },
        ],
        name: 'cancel',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_min',
                type: 'uint256',
            },
        ],
        name: 'changeMinDelay',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_target',
                type: 'address',
            },
            {
                internalType: 'bytes',
                name: '_data',
                type: 'bytes',
            },
            {
                internalType: 'bytes32',
                name: '_predecessor',
                type: 'bytes32',
            },
            {
                internalType: 'bytes32',
                name: '_salt',
                type: 'bytes32',
            },
            {
                internalType: 'uint256',
                name: '_delay',
                type: 'uint256',
            },
        ],
        name: 'execute',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: '_id',
                type: 'bytes32',
            },
        ],
        name: 'isDoneCall',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: '_id',
                type: 'bytes32',
            },
        ],
        name: 'isPendingCall',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: '_id',
                type: 'bytes32',
            },
        ],
        name: 'isReadyCall',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'minDelay',
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
        inputs: [],
        name: 'owner',
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
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_target',
                type: 'address',
            },
            {
                internalType: 'bytes',
                name: '_data',
                type: 'bytes',
            },
            {
                internalType: 'bytes32',
                name: '_predecessor',
                type: 'bytes32',
            },
            {
                internalType: 'bytes32',
                name: '_salt',
                type: 'bytes32',
            },
            {
                internalType: 'uint256',
                name: '_delay',
                type: 'uint256',
            },
        ],
        name: 'schedule',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: '',
                type: 'bytes32',
            },
        ],
        name: 'timestamps',
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
                name: 'newOwner',
                type: 'address',
            },
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
];
const _bytecode = '0x608060405234801561001057600080fd5b50604051610a93380380610a9383398101604081905261002f91610090565b61003833610040565b6002556100a8565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156100a1578081fd5b5051919050565b6109dc806100b76000396000f3fe608060405234801561001057600080fd5b50600436106100a45760003560e01c80631333cdda146100a95780632a9eda11146100d15780632c5eaf21146100e45780634c84c5a1146100f9578063715018a61461010c5780638da5cb5b146101145780639749b36814610134578063abeb699714610147578063b58729581461015a578063c4d252f514610188578063c63c4e9b1461019b578063f2fde38b146101a4575b600080fd5b6100bc6100b73660046108c9565b6101b7565b60405190151581526020015b60405180910390f35b6100bc6100df3660046108c9565b6101ec565b6100f76100f2366004610835565b610202565b005b6100bc6101073660046108c9565b610335565b6100f761034b565b61011c61035f565b6040516001600160a01b0390911681526020016100c8565b6100f76101423660046108c9565b61036e565b6100f7610155366004610835565b6103d2565b61017a6101683660046108c9565b60016020526000908152604090205481565b6040519081526020016100c8565b6100f76101963660046108c9565b6104ea565b61017a60025481565b6100f76101b2366004610814565b610595565b60008181526001602052604081205442108015906101e45750600082815260016020819052604090912054115b90505b919050565b6000908152600160208190526040909120541490565b61020a61060e565b6000610219878787878761066d565b6000818152600160205260409020549091501561027d5760405162461bcd60e51b815260206004820181905260248201527f54696d654c6f636b3a2043616c6c20616c7265616479207363686564756c656460448201526064015b60405180910390fd5b6002548210156102ce5760405162461bcd60e51b815260206004820152601c60248201527b54696d654c6f636b3a20496e73756666696369656e742064656c617960201b6044820152606401610274565b6102d88242610982565b60008281526001602052604090819020919091555181907f66dcc96f6c92c7919714879a908fc29b273e363ba3d409c0c6db86984ee3c48090610324908a908a908a908a908990610949565b60405180910390a250505050505050565b6000908152600160208190526040909120541190565b61035361060e565b61035d60006106a9565b565b6000546001600160a01b031690565b3330146103cd5760405162461bcd60e51b815260206004820152602760248201527f54696d654c6f636b3a2043616c6c6572206973206e6f7420636f6e74726163746044820152661034ba39b2b63360c91b6064820152608401610274565b600255565b6103da61060e565b60006103e9878787878761066d565b90506103f4816101b7565b6104565760405162461bcd60e51b815260206004820152602d60248201527f54696d654c6f636b3a204e6f7420726561647920666f7220657865637574696f60448201526c1b881bdc88195e1958dd5d1959609a1b6064820152608401610274565b8315806104675750610467846101ec565b6104c35760405162461bcd60e51b815260206004820152602760248201527f54696d654c6f636b3a205072656465636573736f722063616c6c206e6f7420656044820152661e1958dd5d195960ca1b6064820152608401610274565b6000818152600160208190526040909120556104e1818888886106f9565b50505050505050565b6104f261060e565b6104fb81610335565b6105475760405162461bcd60e51b815260206004820152601d60248201527f54696d654c6f636b3a2043616c6c206973206e6f742070656e64696e670000006044820152606401610274565b60008181526001602052604080822091909155517fab2af3494bc00bd4aa34e08bd246e5c402d3ee4856c19f5461ce47a6d57423e19061058a9083815260200190565b60405180910390a150565b61059d61060e565b6001600160a01b0381166106025760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610274565b61060b816106a9565b50565b3361061761035f565b6001600160a01b03161461035d5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610274565b60008585858585604051602001610688959493929190610949565b60405160208183030381529060405280519060200120905095945050505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000836001600160a01b0316838360405161071592919061090b565b6000604051808303816000865af19150503d8060008114610752576040519150601f19603f3d011682016040523d82523d6000602084013e610757565b606091505b50509050806107ba5760405162461bcd60e51b815260206004820152602960248201527f54696d656c6f636b3a20756e6465726c79696e67207472616e73616374696f6e604482015268081c995d995c9d195960ba1b6064820152608401610274565b847fc08872e260006100fd2e00a3ba4c617fdb250f802f99384d55c10097dc1d04878585856040516107ee9392919061091b565b60405180910390a25050505050565b80356001600160a01b03811681146101e757600080fd5b600060208284031215610825578081fd5b61082e826107fd565b9392505050565b60008060008060008060a0878903121561084d578182fd5b610856876107fd565b955060208701356001600160401b0380821115610871578384fd5b818901915089601f830112610884578384fd5b813581811115610892578485fd5b8a60208285010111156108a3578485fd5b979a60209290920199509697604081013597506060810135965060800135945092505050565b6000602082840312156108da578081fd5b5035919050565b60008284528282602086013780602084860101526020601f19601f85011685010190509392505050565b6000828483379101908152919050565b6001600160a01b038416815260406020820181905260009061094090830184866108e1565b95945050505050565b6001600160a01b038616815260806020820181905260009061096e90830186886108e1565b604083019490945250606001529392505050565b600082198211156109a157634e487b7160e01b81526011600452602481fd5b50019056fea2646970667358221220d7812ef093089c21074ac979931c2f945a66d2c3e85eeedb3fab699007371ded64736f6c63430008020033';
class TimeLock__factory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_minDelay, overrides) {
        return super.deploy(_minDelay, overrides || {});
    }
    getDeployTransaction(_minDelay, overrides) {
        return super.getDeployTransaction(_minDelay, overrides || {});
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
exports.TimeLock__factory = TimeLock__factory;
TimeLock__factory.bytecode = _bytecode;
TimeLock__factory.abi = _abi;
