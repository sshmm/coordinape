"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockVault__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: 'address',
                name: '_token',
                type: 'address',
            },
            {
                internalType: 'string',
                name: '_name',
                type: 'string',
            },
            {
                internalType: 'string',
                name: '_symbol',
                type: 'string',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'owner',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'spender',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'value',
                type: 'uint256',
            },
        ],
        name: 'Approval',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'from',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'value',
                type: 'uint256',
            },
        ],
        name: 'Transfer',
        type: 'event',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'owner',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'spender',
                type: 'address',
            },
        ],
        name: 'allowance',
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
                name: 'spender',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
            },
        ],
        name: 'approve',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_apr',
                type: 'uint256',
            },
        ],
        name: 'badHarvest',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
        ],
        name: 'balanceOf',
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
        name: 'decimals',
        outputs: [
            {
                internalType: 'uint8',
                name: '',
                type: 'uint8',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'spender',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'subtractedValue',
                type: 'uint256',
            },
        ],
        name: 'decreaseAllowance',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
            },
            {
                internalType: 'address',
                name: 'recipient',
                type: 'address',
            },
        ],
        name: 'deposit',
        outputs: [
            {
                internalType: 'uint256',
                name: 'deposited',
                type: 'uint256',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
            },
        ],
        name: 'deposit',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'deposit',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'depositLimit',
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
                internalType: 'uint256',
                name: '_apr',
                type: 'uint256',
            },
        ],
        name: 'goodHarvest',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'spender',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'addedValue',
                type: 'uint256',
            },
        ],
        name: 'increaseAllowance',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'maxAvailableShares',
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
        name: 'name',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'pricePerShare',
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
        name: 'symbol',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'token',
        outputs: [
            {
                internalType: 'contract MockToken',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'totalAssets',
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
        name: 'totalSupply',
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
                name: 'to',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
            },
        ],
        name: 'transfer',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'from',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
            },
        ],
        name: 'transferFrom',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'maxShares',
                type: 'uint256',
            },
            {
                internalType: 'address',
                name: 'recipient',
                type: 'address',
            },
        ],
        name: 'withdraw',
        outputs: [
            {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'maxShares',
                type: 'uint256',
            },
        ],
        name: 'withdraw',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'withdraw',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
];
const _bytecode = '0x60806040523480156200001157600080fd5b5060405162001688380380620016888339810160408190526200003491620001ee565b8151829082906200004d90600390602085019062000095565b5080516200006390600490602084019062000095565b5050600580546001600160a01b0319166001600160a01b039590951694909417909355505060001960065550620002c7565b828054620000a39062000274565b90600052602060002090601f016020900481019282620000c7576000855562000112565b82601f10620000e257805160ff191683800117855562000112565b8280016001018555821562000112579182015b8281111562000112578251825591602001919060010190620000f5565b506200012092915062000124565b5090565b5b8082111562000120576000815560010162000125565b600082601f8301126200014c578081fd5b81516001600160401b0380821115620001695762000169620002b1565b604051601f8301601f19908116603f01168101908282118183101715620001945762000194620002b1565b81604052838152602092508683858801011115620001b0578485fd5b8491505b83821015620001d35785820183015181830184015290820190620001b4565b83821115620001e457848385830101525b9695505050505050565b60008060006060848603121562000203578283fd5b83516001600160a01b03811681146200021a578384fd5b60208501519093506001600160401b038082111562000237578384fd5b62000245878388016200013b565b935060408601519150808211156200025b578283fd5b506200026a868287016200013b565b9150509250925092565b6002810460018216806200028957607f821691505b60208210811415620002ab57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6113b180620002d76000396000f3fe608060405234801561001057600080fd5b50600436106101275760003560e01c8062f714ce1461012c57806301e1d1141461015257806306fdde031461015a578063095ea7b31461016f57806318160ddd1461019257806323b872dd1461019a5780632e1a7d4d146101ad578063313ce567146101c057806339509351146101cf5780633ccfd60b146101e25780636e553f65146101ea57806370a08231146101fd57806375de29021461021057806395d89b411461021857806399530b0614610220578063a457c2d714610228578063a9059cbb1461023b578063b6b55f251461024e578063d0e30db014610261578063dbe2129514610269578063dd62ed3e1461027e578063ecf7085814610291578063fc0c546a1461029a578063ff4cc570146102ba575b600080fd5b61013f61013a3660046110ff565b6102cd565b6040519081526020015b60405180910390f35b61013f610421565b6101626104a8565b6040516101499190611135565b61018261017d366004611086565b61053a565b6040519015158152602001610149565b60025461013f565b6101826101a836600461104b565b610552565b61013f6101bb3660046110cf565b610578565b60405160128152602001610149565b6101826101dd366004611086565b61058c565b61013f6105ae565b61013f6101f83660046110ff565b6105bc565b61013f61020b366004610fff565b6106d7565b61013f6106f2565b6101626106fd565b61013f61070c565b610182610236366004611086565b6107d1565b610182610249366004611086565b61085c565b61013f61025c3660046110cf565b61086a565b61013f610876565b61027c6102773660046110cf565b6108fd565b005b61013f61028c366004611019565b6109fb565b61013f60065481565b6005546102ad906001600160a01b031681565b6040516101499190611121565b61027c6102c83660046110cf565b610a26565b60006102d8336106d7565b83111580156102e75750600083115b6102f057600080fd5b6002546005546040516370a0823160e01b81526001600160a01b03909116906370a0823190610323903090600401611121565b60206040518083038186803b15801561033b57600080fd5b505afa15801561034f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061037391906110e7565b61037d90856112d4565b61038791906111a0565b90506103933384610af2565b60055460405163a9059cbb60e01b81526001600160a01b038481166004830152602482018490529091169063a9059cbb906044015b602060405180830381600087803b1580156103e257600080fd5b505af11580156103f6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061041a91906110af565b5092915050565b6005546040516370a0823160e01b81526000916001600160a01b0316906370a0823190610452903090600401611121565b60206040518083038186803b15801561046a57600080fd5b505afa15801561047e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104a291906110e7565b90505b90565b6060600380546104b79061130a565b80601f01602080910402602001604051908101604052809291908181526020018280546104e39061130a565b80156105305780601f1061050557610100808354040283529160200191610530565b820191906000526020600020905b81548152906001019060200180831161051357829003601f168201915b5050505050905090565b600033610548818585610c13565b5060019392505050565b600033610560858285610d2f565b61056b858585610da9565b60019150505b9392505050565b600061058482336102cd565b90505b919050565b60003361054881858561059f83836109fb565b6105a99190611188565b610c13565b60006104a26101bb336106d7565b600082600660008282546105d091906112f3565b90915550506002546105ed576105e68284610f3b565b508161069a565b6005546040516370a0823160e01b81526000916001600160a01b0316906370a082319061061e903090600401611121565b60206040518083038186803b15801561063657600080fd5b505afa15801561064a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061066e91906110e7565b610677306106d7565b61068190866112d4565b61068b91906111a0565b90506106978382610f3b565b90505b6005546040516323b872dd60e01b8152336004820152306024820152604481018590526001600160a01b03909116906323b872dd906064016103c8565b6001600160a01b031660009081526020819052604090205490565b60006104a260025490565b6060600480546104b79061130a565b600061071760025490565b61072e576107276012600a611206565b90506104a5565b6002546005546040516370a0823160e01b81526001600160a01b03909116906370a0823190610761903090600401611121565b60206040518083038186803b15801561077957600080fd5b505afa15801561078d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107b191906110e7565b6107bd6012600a611206565b6107c791906112d4565b61072791906111a0565b600033816107df82866109fb565b9050838110156108445760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b6108518286868403610c13565b506001949350505050565b600033610548818585610da9565b600061058482336105bc565b6005546040516370a0823160e01b81526000916104a2916001600160a01b03909116906370a08231906108ad903390600401611121565b60206040518083038186803b1580156108c557600080fd5b505afa1580156108d9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061025c91906110e7565b6005546040516370a0823160e01b815260009160649184916001600160a01b0316906370a0823190610933903090600401611121565b60206040518083038186803b15801561094b57600080fd5b505afa15801561095f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061098391906110e7565b61098d91906112d4565b61099791906111a0565b600554604051630852cd8d60e31b8152600481018390529192506001600160a01b0316906342966c68906024015b600060405180830381600087803b1580156109df57600080fd5b505af11580156109f3573d6000803e3d6000fd5b505050505050565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6005546040516370a0823160e01b815260009160649184916001600160a01b0316906370a0823190610a5c903090600401611121565b60206040518083038186803b158015610a7457600080fd5b505afa158015610a88573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aac91906110e7565b610ab691906112d4565b610ac091906111a0565b60055460405163140e25ad60e31b8152600481018390529192506001600160a01b03169063a0712d68906024016109c5565b6001600160a01b038216610b525760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161083b565b6001600160a01b03821660009081526020819052604090205481811015610bc65760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161083b565b6001600160a01b03831660008181526020818152604080832086860390556002805487900390555185815291929160008051602061135c83398151915291015b60405180910390a3505050565b6001600160a01b038316610c755760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161083b565b6001600160a01b038216610cd65760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161083b565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259101610c06565b6000610d3b84846109fb565b90506000198114610da35781811015610d965760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161083b565b610da38484848403610c13565b50505050565b6001600160a01b038316610e0d5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161083b565b6001600160a01b038216610e6f5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161083b565b6001600160a01b03831660009081526020819052604090205481811015610ee75760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161083b565b6001600160a01b038481166000818152602081815260408083208787039055938716808352918490208054870190559251858152909260008051602061135c833981519152910160405180910390a3610da3565b6001600160a01b038216610f915760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161083b565b8060026000828254610fa39190611188565b90915550506001600160a01b0382166000818152602081815260408083208054860190555184815260008051602061135c833981519152910160405180910390a35050565b80356001600160a01b038116811461058757600080fd5b600060208284031215611010578081fd5b61057182610fe8565b6000806040838503121561102b578081fd5b61103483610fe8565b915061104260208401610fe8565b90509250929050565b60008060006060848603121561105f578081fd5b61106884610fe8565b925061107660208501610fe8565b9150604084013590509250925092565b60008060408385031215611098578182fd5b6110a183610fe8565b946020939093013593505050565b6000602082840312156110c0578081fd5b81518015158114610571578182fd5b6000602082840312156110e0578081fd5b5035919050565b6000602082840312156110f8578081fd5b5051919050565b60008060408385031215611111578182fd5b8235915061104260208401610fe8565b6001600160a01b0391909116815260200190565b6000602080835283518082850152825b8181101561116157858101830151858201604001528201611145565b818111156111725783604083870101525b50601f01601f1916929092016040019392505050565b6000821982111561119b5761119b611345565b500190565b6000826111bb57634e487b7160e01b81526012600452602481fd5b500490565b80825b60018086116111d257506111fd565b8187048211156111e4576111e4611345565b808616156111f157918102915b9490941c9380026111c3565b94509492505050565b6000610571600019848460008261121f57506001610571565b8161122c57506000610571565b8160018114611242576002811461124c57611279565b6001915050610571565b60ff84111561125d5761125d611345565b6001841b91508482111561127357611273611345565b50610571565b5060208310610133831016604e8410600b84101617156112ac575081810a838111156112a7576112a7611345565b610571565b6112b984848460016111c0565b8086048211156112cb576112cb611345565b02949350505050565b60008160001904831182151516156112ee576112ee611345565b500290565b60008282101561130557611305611345565b500390565b60028104600182168061131e57607f821691505b6020821081141561133f57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fdfeddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220654e1e63f47c2173ebeb44ef6c16c8e21d03d45e588d328e7eadf208c74dd92864736f6c63430008020033';
class MockVault__factory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_token, _name, _symbol, overrides) {
        return super.deploy(_token, _name, _symbol, overrides || {});
    }
    getDeployTransaction(_token, _name, _symbol, overrides) {
        return super.getDeployTransaction(_token, _name, _symbol, overrides || {});
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
exports.MockVault__factory = MockVault__factory;
MockVault__factory.bytecode = _bytecode;
MockVault__factory.abi = _abi;
