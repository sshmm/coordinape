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
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface ApeUpgradeableBeaconInterface extends ethers.utils.Interface {
  functions: {
    "cancel(bytes32)": FunctionFragment;
    "changeMinDelay(uint256)": FunctionFragment;
    "execute(address,bytes,bytes32,bytes32,uint256)": FunctionFragment;
    "implementation()": FunctionFragment;
    "isDoneCall(bytes32)": FunctionFragment;
    "isPendingCall(bytes32)": FunctionFragment;
    "isReadyCall(bytes32)": FunctionFragment;
    "minDelay()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "schedule(address,bytes,bytes32,bytes32,uint256)": FunctionFragment;
    "timestamps(bytes32)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "upgradeTo(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "cancel", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "changeMinDelay",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "execute",
    values: [string, BytesLike, BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "implementation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isDoneCall",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isPendingCall",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isReadyCall",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "minDelay", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "schedule",
    values: [string, BytesLike, BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "timestamps",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "upgradeTo", values: [string]): string;

  decodeFunctionResult(functionFragment: "cancel", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "changeMinDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "implementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isDoneCall", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isPendingCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isReadyCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "minDelay", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "schedule", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "timestamps", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;

  events: {
    "CallCancelled(bytes32)": EventFragment;
    "CallExecuted(bytes32,address,bytes)": EventFragment;
    "CallScheduled(bytes32,address,bytes,bytes32,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Upgraded(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CallCancelled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CallExecuted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CallScheduled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}

export class ApeUpgradeableBeacon extends BaseContract {
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

  interface: ApeUpgradeableBeaconInterface;

  functions: {
    cancel(
      _id: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    changeMinDelay(
      _min: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    execute(
      _target: string,
      _data: BytesLike,
      _predecessor: BytesLike,
      _salt: BytesLike,
      _delay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    implementation(overrides?: CallOverrides): Promise<[string]>;

    isDoneCall(_id: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;

    isPendingCall(
      _id: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isReadyCall(_id: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;

    minDelay(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    schedule(
      _target: string,
      _data: BytesLike,
      _predecessor: BytesLike,
      _salt: BytesLike,
      _delay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    timestamps(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  cancel(
    _id: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  changeMinDelay(
    _min: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  execute(
    _target: string,
    _data: BytesLike,
    _predecessor: BytesLike,
    _salt: BytesLike,
    _delay: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  implementation(overrides?: CallOverrides): Promise<string>;

  isDoneCall(_id: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  isPendingCall(_id: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  isReadyCall(_id: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  minDelay(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  schedule(
    _target: string,
    _data: BytesLike,
    _predecessor: BytesLike,
    _salt: BytesLike,
    _delay: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  timestamps(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  upgradeTo(
    newImplementation: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    cancel(_id: BytesLike, overrides?: CallOverrides): Promise<void>;

    changeMinDelay(
      _min: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    execute(
      _target: string,
      _data: BytesLike,
      _predecessor: BytesLike,
      _salt: BytesLike,
      _delay: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    implementation(overrides?: CallOverrides): Promise<string>;

    isDoneCall(_id: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    isPendingCall(_id: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    isReadyCall(_id: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    minDelay(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    schedule(
      _target: string,
      _data: BytesLike,
      _predecessor: BytesLike,
      _salt: BytesLike,
      _delay: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    timestamps(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeTo(
      newImplementation: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    CallCancelled(id?: null): TypedEventFilter<[string], { id: string }>;

    CallExecuted(
      id?: BytesLike | null,
      target?: null,
      data?: null
    ): TypedEventFilter<
      [string, string, string],
      { id: string; target: string; data: string }
    >;

    CallScheduled(
      id?: BytesLike | null,
      target?: null,
      data?: null,
      predecessor?: null,
      delay?: null
    ): TypedEventFilter<
      [string, string, string, string, BigNumber],
      {
        id: string;
        target: string;
        data: string;
        predecessor: string;
        delay: BigNumber;
      }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    Upgraded(
      implementation?: string | null
    ): TypedEventFilter<[string], { implementation: string }>;
  };

  estimateGas: {
    cancel(
      _id: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    changeMinDelay(
      _min: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    execute(
      _target: string,
      _data: BytesLike,
      _predecessor: BytesLike,
      _salt: BytesLike,
      _delay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    implementation(overrides?: CallOverrides): Promise<BigNumber>;

    isDoneCall(_id: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    isPendingCall(
      _id: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isReadyCall(_id: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    minDelay(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    schedule(
      _target: string,
      _data: BytesLike,
      _predecessor: BytesLike,
      _salt: BytesLike,
      _delay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    timestamps(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    cancel(
      _id: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    changeMinDelay(
      _min: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    execute(
      _target: string,
      _data: BytesLike,
      _predecessor: BytesLike,
      _salt: BytesLike,
      _delay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    implementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isDoneCall(
      _id: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isPendingCall(
      _id: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isReadyCall(
      _id: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    minDelay(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    schedule(
      _target: string,
      _data: BytesLike,
      _predecessor: BytesLike,
      _salt: BytesLike,
      _delay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    timestamps(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
