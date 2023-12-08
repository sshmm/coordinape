import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CoLinks, CoLinksInterface } from "../CoLinks";
export declare class CoLinks__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<CoLinks>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): CoLinks;
    connect(signer: Signer): CoLinks__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6110a28061007e6000396000f3fe6080604052600436106100ef5760003560e01c806306ae39e9146100f45780630f026f6d1461013f5780632267a89c1461015f5780633a910e2c1461017f5780633fb7d3d1146101955780633fc68b81146101aa5780634635256e146101c05780634c5dc5a1146101e05780634ce7957c1461020d5780635cf4ee9114610245578063715018a6146102655780638da5cb5b1461027a5780639ae717811461028f578063a4983421146102af578063a8d1b822146102cf578063bae70112146102ef578063d6e6eb9f1461030f578063f2fde38b14610325578063fbe5323414610345578063fce4dcdf14610365575b600080fd5b34801561010057600080fd5b5061012c61010f366004610ec2565b600560209081526000928352604080842090915290825290205481565b6040519081526020015b60405180910390f35b34801561014b57600080fd5b5061012c61015a366004610ef4565b610378565b34801561016b57600080fd5b5061012c61017a366004610ef4565b610422565b34801561018b57600080fd5b5061012c60045481565b6101a86101a3366004610ef4565b6104ad565b005b3480156101b657600080fd5b5061012c60035481565b3480156101cc57600080fd5b5061012c6101db366004610ef4565b6107c2565b3480156101ec57600080fd5b5061012c6101fb366004610ea8565b60066020526000908152604090205481565b34801561021957600080fd5b5060015461022d906001600160a01b031681565b6040516001600160a01b039091168152602001610136565b34801561025157600080fd5b5061012c610260366004610f35565b6107ec565b34801561027157600080fd5b506101a861092f565b34801561028657600080fd5b5061022d610943565b34801561029b57600080fd5b5061012c6102aa366004610ef4565b610952565b3480156102bb57600080fd5b506101a86102ca366004610f1d565b610980565b3480156102db57600080fd5b506101a86102ea366004610f1d565b61098d565b3480156102fb57600080fd5b506101a861030a366004610f1d565b61099a565b34801561031b57600080fd5b5061012c60025481565b34801561033157600080fd5b506101a8610340366004610ea8565b6109a7565b34801561035157600080fd5b506101a8610360366004610ea8565b610a20565b6101a8610373366004610ef4565b610a4a565b60008061038584846107c2565b90506000670de0b6b3a7640000600254836103a09190611000565b6103aa9190610fe0565b90506000670de0b6b3a7640000600354846103c59190611000565b6103cf9190610fe0565b6001600160a01b03871660009081526006602052604081205491925081156103f657506004545b80836104028688610fc8565b61040c9190610fc8565b6104169190610fc8565b98975050505050505050565b60008061042f8484610952565b90506000670de0b6b3a76400006002548361044a9190611000565b6104549190610fe0565b90506000670de0b6b3a76400006003548461046f9190611000565b6104799190610fe0565b905061048483610db7565b8161048f848661101f565b610499919061101f565b6104a3919061101f565b9695505050505050565b6001600160a01b038216600090815260066020526040902054801515806104dc57506001600160a01b03831633145b6105435760405162461bcd60e51b815260206004820152602d60248201527f4f6e6c7920746865206c696e6b7327207461726765742063616e20627579207460448201526c6865206669727374206c696e6b60981b60648201526084015b60405180910390fd5b600061054f82846107ec565b90506000670de0b6b3a76400006002548361056a9190611000565b6105749190610fe0565b90506000670de0b6b3a76400006003548461058f9190611000565b6105999190610fe0565b905083156105d85760026004546105b09190610fe0565b6105ba9083610fc8565b915060026004546105cb9190610fe0565b6105d59082610fc8565b90505b806105e38385610fc8565b6105ed9190610fc8565b3410156106335760405162461bcd60e51b8152602060048201526014602482015273125b9cdd59999a58da595b9d081c185e5b595b9d60621b604482015260640161053a565b6001600160a01b0386166000908152600560209081526040808320338452909152902054610662908690610fc8565b6001600160a01b03871660009081526005602090815260408083203384529091529020556106908585610fc8565b6001600160a01b03871660009081526006602052604090205560008051602061104d83398151915233876001888787876106ca848d610fc8565b6040516106de989796959493929190610f56565b60405180910390a16001546040516000916001600160a01b03169084908381818185875af1925050503d8060008114610733576040519150601f19603f3d011682016040523d82523d6000602084013e610738565b606091505b505090506000876001600160a01b03168360405160006040518083038185875af1925050503d8060008114610789576040519150601f19603f3d011682016040523d82523d6000602084013e61078e565b606091505b5050905081801561079c5750805b6107b85760405162461bcd60e51b815260040161053a90610f9a565b5050505050505050565b6001600160a01b0382166000908152600660205260408120546107e590836107ec565b9392505050565b600060648184156108545760188261080560018861101f565b610810906002611000565b61081b906001610fc8565b8761082760018261101f565b6108319190611000565b61083b9190611000565b6108459190611000565b61084f9190610fe0565b610857565b60005b90506000851580156108695750846001145b6108e9576018838661087c60018a61101f565b6108869190610fc8565b610891906002611000565b61089c906001610fc8565b6108a6888a610fc8565b886108b260018c61101f565b6108bc9190610fc8565b6108c69190611000565b6108d09190611000565b6108da9190611000565b6108e49190610fe0565b6108ec565b60005b905060006108fa838361101f565b905061090884613e80611000565b61091a82670de0b6b3a7640000611000565b6109249190610fe0565b979650505050505050565b610937610de2565b6109416000610e41565b565b6000546001600160a01b031690565b6001600160a01b0382166000908152600660205260408120546107e59061097a90849061101f565b836107ec565b610988610de2565b600255565b610995610de2565b600355565b6109a2610de2565b600455565b6109af610de2565b6001600160a01b038116610a145760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161053a565b610a1d81610e41565b50565b610a28610de2565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b038216600090815260066020526040902054818111610aae5760405162461bcd60e51b815260206004820152601960248201527843616e6e6f742073656c6c20746865206c617374206c696e6b60381b604482015260640161053a565b6000610ac3610abd848461101f565b846107ec565b90506000670de0b6b3a764000060025483610ade9190611000565b610ae89190610fe0565b90506000670de0b6b3a764000060035484610b039190611000565b610b0d9190610fe0565b90508315610b52576000610b2084610db7565b9050610b2d600282610fe0565b610b379084610fc8565b9250610b44600282610fe0565b610b4e9083610fc8565b9150505b6001600160a01b0386166000908152600560209081526040808320338452909152902054851115610bba5760405162461bcd60e51b8152602060048201526012602482015271496e73756666696369656e74206c696e6b7360701b604482015260640161053a565b6001600160a01b0386166000908152600560209081526040808320338452909152902054610be990869061101f565b6001600160a01b0387166000908152600560209081526040808320338452909152902055610c17858561101f565b6001600160a01b03871660009081526006602052604081209190915560008051602061104d833981519152903390889088878787610c55848d61101f565b604051610c69989796959493929190610f56565b60405180910390a160003382610c7f858761101f565b610c89919061101f565b604051600081818185875af1925050503d8060008114610cc5576040519150601f19603f3d011682016040523d82523d6000602084013e610cca565b606091505b50506001546040519192506000916001600160a01b039091169085908381818185875af1925050503d8060008114610d1e576040519150601f19603f3d011682016040523d82523d6000602084013e610d23565b606091505b505090506000886001600160a01b03168460405160006040518083038185875af1925050503d8060008114610d74576040519150601f19603f3d011682016040523d82523d6000602084013e610d79565b606091505b50509050828015610d875750815b8015610d905750805b610dac5760405162461bcd60e51b815260040161053a90610f9a565b505050505050505050565b600080610dc5600a84610fe0565b90506004548110610dda575050600454610ddd565b90505b919050565b33610deb610943565b6001600160a01b0316146109415760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161053a565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80356001600160a01b0381168114610ddd57600080fd5b600060208284031215610eb9578081fd5b6107e582610e91565b60008060408385031215610ed4578081fd5b610edd83610e91565b9150610eeb60208401610e91565b90509250929050565b60008060408385031215610f06578182fd5b610f0f83610e91565b946020939093013593505050565b600060208284031215610f2e578081fd5b5035919050565b60008060408385031215610f47578182fd5b50508035926020909101359150565b6001600160a01b03988916815296909716602087015293151560408601526060850192909252608084015260a083015260c082015260e08101919091526101000190565b602080825260149082015273556e61626c6520746f2073656e642066756e647360601b604082015260600190565b60008219821115610fdb57610fdb611036565b500190565b600082610ffb57634e487b7160e01b81526012600452602481fd5b500490565b600081600019048311821515161561101a5761101a611036565b500290565b60008282101561103157611031611036565b500390565b634e487b7160e01b600052601160045260246000fdfead9f55a41a915706e0b499306a3aabd261f9a4ba53f5a1d36981d40083063a52a2646970667358221220175b2b14ba4f9b4eab50863e320982d49e9cf632fb15d77b8cb14bd2b9fc1b7664736f6c63430008020033";
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): CoLinksInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CoLinks;
}
