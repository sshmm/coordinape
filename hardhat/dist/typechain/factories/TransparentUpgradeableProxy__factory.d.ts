import { Signer, BytesLike, ContractFactory, PayableOverrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { TransparentUpgradeableProxy, TransparentUpgradeableProxyInterface } from '../TransparentUpgradeableProxy';
export declare class TransparentUpgradeableProxy__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_logic: string, admin_: string, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<TransparentUpgradeableProxy>;
    getDeployTransaction(_logic: string, admin_: string, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TransparentUpgradeableProxy;
    connect(signer: Signer): TransparentUpgradeableProxy__factory;
    static readonly bytecode = "0x608060405260405162000ebf38038062000ebf833981016040819052620000269162000457565b828162000036828260006200004d565b50620000449050826200008a565b505050620005cb565b6200005883620000e5565b600082511180620000665750805b1562000085576200008383836200012760201b620001791760201c565b505b505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f620000b562000156565b604080516001600160a01b03928316815291841660208301520160405180910390a1620000e2816200018f565b50565b620000f08162000244565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606200014f838360405180606001604052806027815260200162000e9860279139620002f8565b9392505050565b60006200018060008051602062000e7883398151915260001b6200037760201b620001a51760201c565b546001600160a01b0316905090565b6001600160a01b038116620001fa5760405162461bcd60e51b815260206004820152602660248201527f455243313936373a206e65772061646d696e20697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b806200022360008051602062000e7883398151915260001b6200037760201b620001a51760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b6200025a816200037a60201b620001a81760201c565b620002be5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608401620001f1565b80620002237f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b6200037760201b620001a51760201c565b6060600080856001600160a01b03168560405162000317919062000533565b600060405180830381855af49150503d806000811462000354576040519150601f19603f3d011682016040523d82523d6000602084013e62000359565b606091505b5090925090506200036d868383876200038d565b9695505050505050565b90565b6001600160a01b0381163b15155b919050565b60608315620003fe578251620003f657620003a8856200037a565b620003f65760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401620001f1565b50816200040a565b6200040a838362000412565b949350505050565b815115620004235781518083602001fd5b8060405162461bcd60e51b8152600401620001f1919062000551565b80516001600160a01b03811681146200038857600080fd5b6000806000606084860312156200046c578283fd5b62000477846200043f565b925062000487602085016200043f565b60408501519092506001600160401b0380821115620004a4578283fd5b818601915086601f830112620004b8578283fd5b815181811115620004cd57620004cd620005b5565b604051601f8201601f19908116603f01168101908382118183101715620004f857620004f8620005b5565b8160405282815289602084870101111562000511578586fd5b6200052483602083016020880162000586565b80955050505050509250925092565b600082516200054781846020870162000586565b9190910192915050565b60006020825282518060208401526200057281604085016020870162000586565b601f01601f19169190910160400192915050565b60005b83811015620005a357818101518382015260200162000589565b83811115620000835750506000910152565b634e487b7160e01b600052604160045260246000fd5b61089d80620005db6000396000f3fe60806040523661001357610011610017565b005b6100115b61001f6101bb565b6001600160a01b0316336001600160a01b0316141561016f5760606001600160e01b031960003516631b2ce7f360e11b8114156100655761005e6101dc565b9150610167565b6001600160e01b0319811663278f794360e11b14156100865761005e610233565b6001600160e01b031981166308f2839760e41b14156100a75761005e610279565b6001600160e01b031981166303e1469160e61b14156100c85761005e6102aa565b6001600160e01b03198116635c60da1b60e01b14156100e95761005e6102ea565b60405162461bcd60e51b815260206004820152604260248201527f5472616e73706172656e745570677261646561626c6550726f78793a2061646d60448201527f696e2063616e6e6f742066616c6c6261636b20746f2070726f78792074617267606482015261195d60f21b608482015260a4015b60405180910390fd5b815160208301f35b6101776102fe565b565b606061019e83836040518060600160405280602781526020016108416027913961030e565b9392505050565b90565b6001600160a01b0381163b15155b919050565b60006000805160206108018339815191525b546001600160a01b0316905090565b60606101e6610386565b60006101f53660048184610796565b8101906102029190610671565b905061021f81604051806020016040528060008152506000610391565b505060408051602081019091526000815290565b60606000806102453660048184610796565b810190610252919061068b565b9150915061026282826001610391565b604051806020016040528060008152509250505090565b6060610283610386565b60006102923660048184610796565b81019061029f9190610671565b905061021f816103bd565b60606102b4610386565b60006102be6101bb565b604080516001600160a01b03831660208201529192500160405160208183030381529060405291505090565b60606102f4610386565b60006102be610414565b610177610309610414565b610423565b6060600080856001600160a01b03168560405161032b9190610747565b600060405180830381855af49150503d8060008114610366576040519150601f19603f3d011682016040523d82523d6000602084013e61036b565b606091505b509150915061037c86838387610447565b9695505050505050565b341561017757600080fd5b61039a836104c3565b6000825111806103a75750805b156103b8576103b68383610179565b505b505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f6103e66101bb565b604080516001600160a01b03928316815291841660208301520160405180910390a161041181610503565b50565b600061041e61059a565b905090565b3660008037600080366000845af43d6000803e808015610442573d6000f35b3d6000fd5b606083156104b15782516104aa5761045e856101a8565b6104aa5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161015e565b50816104bb565b6104bb83836105b0565b949350505050565b6104cc816105da565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6001600160a01b0381166105685760405162461bcd60e51b815260206004820152602660248201527f455243313936373a206e65772061646d696e20697320746865207a65726f206160448201526564647265737360d01b606482015260840161015e565b806000805160206108018339815191525b80546001600160a01b0319166001600160a01b039290921691909117905550565b60006000805160206108218339815191526101cd565b8151156105c05781518083602001fd5b8060405162461bcd60e51b815260040161015e9190610763565b6105e3816101a8565b6106455760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b606482015260840161015e565b80600080516020610821833981519152610579565b80356001600160a01b03811681146101b657600080fd5b600060208284031215610682578081fd5b61019e8261065a565b6000806040838503121561069d578081fd5b6106a68361065a565b915060208301356001600160401b03808211156106c1578283fd5b818501915085601f8301126106d4578283fd5b8135818111156106e6576106e66107ea565b604051601f8201601f19908116603f0116810190838211818310171561070e5761070e6107ea565b81604052828152886020848701011115610726578586fd5b82602086016020830137856020848301015280955050505050509250929050565b600082516107598184602087016107be565b9190910192915050565b60006020825282518060208401526107828160408501602087016107be565b601f01601f19169190910160400192915050565b600080858511156107a5578182fd5b838611156107b1578182fd5b5050820193919092039150565b60005b838110156107d95781810151838201526020016107c1565b838111156103b65750506000910152565b634e487b7160e01b600052604160045260246000fdfeb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212207a3c9c3ce4115a1f06a475af97297b8f17105eccaab88e4ebe45c716da6471ba64736f6c63430008020033b53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
    } | {
        stateMutability: string;
        type: string;
        inputs?: undefined;
        anonymous?: undefined;
        name?: undefined;
    })[];
    static createInterface(): TransparentUpgradeableProxyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TransparentUpgradeableProxy;
}
