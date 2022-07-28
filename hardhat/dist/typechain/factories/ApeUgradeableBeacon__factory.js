"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApeUgradeableBeacon__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_apeVault",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_minDelay",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes32",
                name: "id",
                type: "bytes32",
            },
        ],
        name: "CallCancelled",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "id",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "address",
                name: "target",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "CallExecuted",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "id",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "address",
                name: "target",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "predecessor",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "delay",
                type: "uint256",
            },
        ],
        name: "CallScheduled",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address",
            },
        ],
        name: "Upgraded",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "_id",
                type: "bytes32",
            },
        ],
        name: "cancel",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_min",
                type: "uint256",
            },
        ],
        name: "changeMinDelay",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_target",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
            {
                internalType: "bytes32",
                name: "_predecessor",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "_salt",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "_delay",
                type: "uint256",
            },
        ],
        name: "execute",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "implementation",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "_id",
                type: "bytes32",
            },
        ],
        name: "isDoneCall",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "_id",
                type: "bytes32",
            },
        ],
        name: "isPendingCall",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "_id",
                type: "bytes32",
            },
        ],
        name: "isReadyCall",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "minDelay",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_target",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
            {
                internalType: "bytes32",
                name: "_predecessor",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "_salt",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "_delay",
                type: "uint256",
            },
        ],
        name: "schedule",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        name: "timestamps",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newImplementation",
                type: "address",
            },
        ],
        name: "upgradeTo",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50604051610d73380380610d7383398101604081905261002f91610150565b808261003a3361004f565b6100438161009f565b50600355506101889050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6100b28161014a60201b6106f01760201c565b6101285760405162461bcd60e51b815260206004820152603360248201527f5570677261646561626c65426561636f6e3a20696d706c656d656e746174696f60448201527f6e206973206e6f74206120636f6e747261637400000000000000000000000000606482015260840160405180910390fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b3b151590565b60008060408385031215610162578182fd5b82516001600160a01b0381168114610178578283fd5b6020939093015192949293505050565b610bdc806101976000396000f3fe608060405234801561001057600080fd5b50600436106100ba5760003560e01c80631333cdda146100bf5780632a9eda11146100e75780632c5eaf21146100fa5780633659cfe61461010f5780634c84c5a1146101225780635c60da1b14610135578063715018a61461015a5780638da5cb5b146101625780639749b3681461016a578063abeb69971461017d578063b587295814610190578063c4d252f5146101be578063c63c4e9b146101d1578063f2fde38b146101da575b600080fd5b6100d26100cd366004610a4d565b6101ed565b60405190151581526020015b60405180910390f35b6100d26100f5366004610a4d565b610221565b61010d6101083660046109b9565b610236565b005b61010d61011d366004610998565b610394565b6100d2610130366004610a4d565b6103bf565b6001546001600160a01b03165b6040516001600160a01b0390911681526020016100de565b61010d6103d4565b61014261040f565b61010d610178366004610a4d565b61041e565b61010d61018b3660046109b9565b610442565b6101b061019e366004610a4d565b60026020526000908152604090205481565b6040519081526020016100de565b61010d6101cc366004610a4d565b610581565b6101b060035481565b61010d6101e8366004610998565b610653565b600081815260026020526040812054421080159061021957506000828152600260205260409020546001105b90505b919050565b60009081526002602052604090205460011490565b3361023f61040f565b6001600160a01b03161461026e5760405162461bcd60e51b815260040161026590610b4d565b60405180910390fd5b600061027d87878787876106f6565b600081815260026020526040902054909150156102dc5760405162461bcd60e51b815260206004820181905260248201527f54696d654c6f636b3a2043616c6c20616c7265616479207363686564756c65646044820152606401610265565b60035482101561032d5760405162461bcd60e51b815260206004820152601c60248201527b54696d654c6f636b3a20496e73756666696369656e742064656c617960201b6044820152606401610265565b6103378242610b82565b60008281526002602052604090819020919091555181907f66dcc96f6c92c7919714879a908fc29b273e363ba3d409c0c6db86984ee3c48090610383908a908a908a908a908990610acd565b60405180910390a250505050505050565b3330146103b35760405162461bcd60e51b815260040161026590610b06565b6103bc81610732565b50565b60009081526002602052604090205460011090565b336103dd61040f565b6001600160a01b0316146104035760405162461bcd60e51b815260040161026590610b4d565b61040d60006107a1565b565b6000546001600160a01b031690565b33301461043d5760405162461bcd60e51b815260040161026590610b06565b600355565b3361044b61040f565b6001600160a01b0316146104715760405162461bcd60e51b815260040161026590610b4d565b600061048087878787876106f6565b905061048b816101ed565b6104ed5760405162461bcd60e51b815260206004820152602d60248201527f54696d654c6f636b3a204e6f7420726561647920666f7220657865637574696f60448201526c1b881bdc88195e1958dd5d1959609a1b6064820152608401610265565b8315806104fe57506104fe84610221565b61055a5760405162461bcd60e51b815260206004820152602760248201527f54696d654c6f636b3a205072656465636573736f722063616c6c206e6f7420656044820152661e1958dd5d195960ca1b6064820152608401610265565b600081815260026020526040902060019055610578818888886107f1565b50505050505050565b3361058a61040f565b6001600160a01b0316146105b05760405162461bcd60e51b815260040161026590610b4d565b6105b9816103bf565b6106055760405162461bcd60e51b815260206004820152601d60248201527f54696d654c6f636b3a2043616c6c206973206e6f742070656e64696e670000006044820152606401610265565b60008181526002602052604080822091909155517fab2af3494bc00bd4aa34e08bd246e5c402d3ee4856c19f5461ce47a6d57423e1906106489083815260200190565b60405180910390a150565b3361065c61040f565b6001600160a01b0316146106825760405162461bcd60e51b815260040161026590610b4d565b6001600160a01b0381166106e75760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610265565b6103bc816107a1565b3b151590565b60008585858585604051602001610711959493929190610acd565b60405160208183030381529060405280519060200120905095945050505050565b3361073b61040f565b6001600160a01b0316146107615760405162461bcd60e51b815260040161026590610b4d565b61076a816108f5565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000836001600160a01b0316838360405161080d929190610a8f565b6000604051808303816000865af19150503d806000811461084a576040519150601f19603f3d011682016040523d82523d6000602084013e61084f565b606091505b50509050806108b25760405162461bcd60e51b815260206004820152602960248201527f54696d656c6f636b3a20756e6465726c79696e67207472616e73616374696f6e604482015268081c995d995c9d195960ba1b6064820152608401610265565b847fc08872e260006100fd2e00a3ba4c617fdb250f802f99384d55c10097dc1d04878585856040516108e693929190610a9f565b60405180910390a25050505050565b803b61095f5760405162461bcd60e51b815260206004820152603360248201527f5570677261646561626c65426561636f6e3a20696d706c656d656e746174696f6044820152721b881a5cc81b9bdd08184818dbdb9d1c9858dd606a1b6064820152608401610265565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b80356001600160a01b038116811461021c57600080fd5b6000602082840312156109a9578081fd5b6109b282610981565b9392505050565b60008060008060008060a087890312156109d1578182fd5b6109da87610981565b955060208701356001600160401b03808211156109f5578384fd5b818901915089601f830112610a08578384fd5b813581811115610a16578485fd5b8a6020828501011115610a27578485fd5b979a60209290920199509697604081013597506060810135965060800135945092505050565b600060208284031215610a5e578081fd5b5035919050565b60008284528282602086013780602084860101526020601f19601f85011685010190509392505050565b6000828483379101908152919050565b6001600160a01b0384168152604060208201819052600090610ac49083018486610a65565b95945050505050565b6001600160a01b0386168152608060208201819052600090610af29083018688610a65565b604083019490945250606001529392505050565b60208082526027908201527f54696d654c6f636b3a2043616c6c6572206973206e6f7420636f6e74726163746040820152661034ba39b2b63360c91b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60008219821115610ba157634e487b7160e01b81526011600452602481fd5b50019056fea2646970667358221220a73f3b80e162adf3f2208d5e579b12a9676ebcfb4c47c409da8c854ce413747764736f6c63430008020033";
class ApeUgradeableBeacon__factory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_apeVault, _minDelay, overrides) {
        return super.deploy(_apeVault, _minDelay, overrides || {});
    }
    getDeployTransaction(_apeVault, _minDelay, overrides) {
        return super.getDeployTransaction(_apeVault, _minDelay, overrides || {});
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
exports.ApeUgradeableBeacon__factory = ApeUgradeableBeacon__factory;
ApeUgradeableBeacon__factory.bytecode = _bytecode;
ApeUgradeableBeacon__factory.abi = _abi;
