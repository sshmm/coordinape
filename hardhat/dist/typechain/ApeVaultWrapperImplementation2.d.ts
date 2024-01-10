/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from 'ethers';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';
import { TypedEventFilter, TypedEvent, TypedListener } from './commons';

interface ApeVaultWrapperImplementation2Interface
  extends ethers.utils.Interface {
  functions: {
    'init()': FunctionFragment;
    'setup()': FunctionFragment;
    'someValue()': FunctionFragment;
    'version()': FunctionFragment;
    'write()': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'init', values?: undefined): string;
  encodeFunctionData(functionFragment: 'setup', values?: undefined): string;
  encodeFunctionData(functionFragment: 'someValue', values?: undefined): string;
  encodeFunctionData(functionFragment: 'version', values?: undefined): string;
  encodeFunctionData(functionFragment: 'write', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'init', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setup', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'someValue', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'version', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'write', data: BytesLike): Result;

  events: {};
}

export class ApeVaultWrapperImplementation2 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ApeVaultWrapperImplementation2Interface;

  functions: {
    init(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setup(overrides?: CallOverrides): Promise<[boolean]>;

    someValue(overrides?: CallOverrides): Promise<[BigNumber]>;

    version(overrides?: CallOverrides): Promise<[BigNumber]>;

    write(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  init(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setup(overrides?: CallOverrides): Promise<boolean>;

  someValue(overrides?: CallOverrides): Promise<BigNumber>;

  version(overrides?: CallOverrides): Promise<BigNumber>;

  write(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    init(overrides?: CallOverrides): Promise<void>;

    setup(overrides?: CallOverrides): Promise<boolean>;

    someValue(overrides?: CallOverrides): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;

    write(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    init(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setup(overrides?: CallOverrides): Promise<BigNumber>;

    someValue(overrides?: CallOverrides): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;

    write(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    init(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setup(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    someValue(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    write(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
