import { Signer, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { ERC721Upgradeable, ERC721UpgradeableInterface } from '../ERC721Upgradeable';
export declare class ERC721Upgradeable__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ERC721Upgradeable>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ERC721Upgradeable;
    connect(signer: Signer): ERC721Upgradeable__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506110d0806100206000396000f3fe608060405234801561001057600080fd5b50600436106100af5760003560e01c806301ffc9a7146100b457806306fdde03146100dc578063081812fc146100f1578063095ea7b31461011c57806323b872dd1461013157806342842e0e146101445780636352211e1461015757806370a082311461016a57806395d89b411461018b578063a22cb46514610193578063b88d4fde146101a6578063c87b56dd146101b9578063e985e9c5146101cc575b600080fd5b6100c76100c2366004610df6565b6101df565b60405190151581526020015b60405180910390f35b6100e4610233565b6040516100d39190610ede565b6101046100ff366004610e2e565b6102c5565b6040516001600160a01b0390911681526020016100d3565b61012f61012a366004610dcd565b6102ec565b005b61012f61013f366004610c84565b610407565b61012f610152366004610c84565b610438565b610104610165366004610e2e565b610453565b61017d610178366004610c38565b610487565b6040519081526020016100d3565b6100e461050d565b61012f6101a1366004610d93565b61051c565b61012f6101b4366004610cbf565b61052b565b6100e46101c7366004610e2e565b610563565b6100c76101da366004610c52565b6105d7565b60006001600160e01b031982166380ac58cd60e01b148061021057506001600160e01b03198216635b5e139f60e01b145b8061022b57506301ffc9a760e01b6001600160e01b03198316145b90505b919050565b60606065805461024290611033565b80601f016020809104026020016040519081016040528092919081815260200182805461026e90611033565b80156102bb5780601f10610290576101008083540402835291602001916102bb565b820191906000526020600020905b81548152906001019060200180831161029e57829003601f168201915b5050505050905090565b60006102d082610605565b506000908152606960205260409020546001600160a01b031690565b60006102f782610453565b9050806001600160a01b0316836001600160a01b0316141561036a5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b0382161480610386575061038681336101da565b6103f85760405162461bcd60e51b815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c0000006064820152608401610361565b610402838361062d565b505050565b610411338261069b565b61042d5760405162461bcd60e51b815260040161036190610ef1565b6104028383836106fa565b6104028383836040518060200160405280600081525061052b565b60008061045f8361085e565b90506001600160a01b03811661022b5760405162461bcd60e51b815260040161036190610fd5565b60006001600160a01b0382166104f15760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b6064820152608401610361565b506001600160a01b031660009081526068602052604090205490565b60606066805461024290611033565b610527338383610879565b5050565b610535338361069b565b6105515760405162461bcd60e51b815260040161036190610ef1565b61055d84848484610944565b50505050565b606061056e82610605565b600061058560408051602081019091526000815290565b905060008151116105a557604051806020016040528060008152506105d0565b806105af84610977565b6040516020016105c0929190610e72565b6040516020818303038152906040525b9392505050565b6001600160a01b039182166000908152606a6020908152604080832093909416825291909152205460ff1690565b61060e81610a21565b61062a5760405162461bcd60e51b815260040161036190610fd5565b50565b600081815260696020526040902080546001600160a01b0319166001600160a01b038416908117909155819061066282610453565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000806106a783610453565b9050806001600160a01b0316846001600160a01b031614806106ce57506106ce81856105d7565b806106f25750836001600160a01b03166106e7846102c5565b6001600160a01b0316145b949350505050565b826001600160a01b031661070d82610453565b6001600160a01b0316146107335760405162461bcd60e51b815260040161036190610f90565b6001600160a01b0382166107955760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610361565b826001600160a01b03166107a882610453565b6001600160a01b0316146107ce5760405162461bcd60e51b815260040161036190610f90565b600081815260696020908152604080832080546001600160a01b03199081169091556001600160a01b0387811680865260688552838620805460001901905590871680865283862080546001019055868652606790945282852080549092168417909155905184937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4610402565b6000908152606760205260409020546001600160a01b031690565b816001600160a01b0316836001600160a01b031614156108d75760405162461bcd60e51b815260206004820152601960248201527822a9219b99189d1030b8383937bb32903a379031b0b63632b960391b6044820152606401610361565b6001600160a01b038381166000818152606a6020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b61094f8484846106fa565b61095b84848484610a3e565b61055d5760405162461bcd60e51b815260040161036190610f3e565b6060600061098483610b4b565b60010190506000816001600160401b038111156109b157634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156109db576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a8504945084610a1457610a19565b6109e5565b509392505050565b600080610a2d8361085e565b6001600160a01b0316141592915050565b60006001600160a01b0384163b15610b4057604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610a82903390899088908890600401610ea1565b602060405180830381600087803b158015610a9c57600080fd5b505af1925050508015610acc575060408051601f3d908101601f19168201909252610ac991810190610e12565b60015b610b26573d808015610afa576040519150601f19603f3d011682016040523d82523d6000602084013e610aff565b606091505b508051610b1e5760405162461bcd60e51b815260040161036190610f3e565b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490506106f2565b506001949350505050565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b8310610b8a5772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6904ee2d6d415b85acef8160201b8310610bb4576904ee2d6d415b85acef8160201b830492506020015b662386f26fc100008310610bd257662386f26fc10000830492506010015b6305f5e1008310610bea576305f5e100830492506008015b6127108310610bfe57612710830492506004015b60648310610c10576064830492506002015b600a831061022b5760010192915050565b80356001600160a01b038116811461022e57600080fd5b600060208284031215610c49578081fd5b6105d082610c21565b60008060408385031215610c64578081fd5b610c6d83610c21565b9150610c7b60208401610c21565b90509250929050565b600080600060608486031215610c98578081fd5b610ca184610c21565b9250610caf60208501610c21565b9150604084013590509250925092565b60008060008060808587031215610cd4578081fd5b610cdd85610c21565b9350610ceb60208601610c21565b92506040850135915060608501356001600160401b0380821115610d0d578283fd5b818701915087601f830112610d20578283fd5b813581811115610d3257610d3261106e565b604051601f8201601f19908116603f01168101908382118183101715610d5a57610d5a61106e565b816040528281528a6020848701011115610d72578586fd5b82602086016020830137918201602001949094529598949750929550505050565b60008060408385031215610da5578182fd5b610dae83610c21565b915060208301358015158114610dc2578182fd5b809150509250929050565b60008060408385031215610ddf578182fd5b610de883610c21565b946020939093013593505050565b600060208284031215610e07578081fd5b81356105d081611084565b600060208284031215610e23578081fd5b81516105d081611084565b600060208284031215610e3f578081fd5b5035919050565b60008151808452610e5e816020860160208601611007565b601f01601f19169290920160200192915050565b60008351610e84818460208801611007565b835190830190610e98818360208801611007565b01949350505050565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090610ed490830184610e46565b9695505050505050565b6000602082526105d06020830184610e46565b6020808252602d908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526c1c881bdc88185c1c1c9bdd9959609a1b606082015260800190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60208082526025908201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060408201526437bbb732b960d91b606082015260800190565b602080825260189082015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b604082015260600190565b60005b8381101561102257818101518382015260200161100a565b8381111561055d5750506000910152565b60028104600182168061104757607f821691505b6020821081141561106857634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6001600160e01b03198116811461062a57600080fdfea26469706673582212209200d2e9bc9bc0fa6e21415d14fbbf00466bc69ee1f34d9fac5023a19c10282564736f6c63430008020033";
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
    static createInterface(): ERC721UpgradeableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC721Upgradeable;
}
