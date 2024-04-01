/* eslint-disable no-console */
import assert from 'assert';

import { CoSoul } from '@coordinape/contracts/typechain';

import { Contracts } from '../contracts';
import { provider, restoreSnapshot, takeSnapshot } from 'utils/testing';

import {
  getMintInfo,
  getOnChainPGIVE,
  getTokenId,
  mintCoSoulForAddress,
  setOnChainPGIVE,
} from './cosoul';

import { Awaited } from 'types/shim';

let contract: CoSoul;
let snapshotId: string;
let mainAccount: string;
let tokenId: Awaited<ReturnType<typeof getTokenId>>;

beforeEach(async () => {
  snapshotId = await takeSnapshot();

  mainAccount = (await provider().listAccounts())[0];
  contract = (await Contracts.fromProvider(provider())).cosoul;
});

afterEach(async () => {
  await restoreSnapshot(snapshotId);
});

test('getTokenId returns undefined if no nft exists', async () => {
  const tokenIdFetch = await getTokenId(mainAccount);
  expect(tokenIdFetch).toEqual(undefined);
});

test('getMintInfo returns mint info', async () => {
  const tx = await contract.mint();
  const data = await getMintInfo(tx.hash);
  expect(data).toEqual({
    from: '0x0000000000000000000000000000000000000000',
    to: mainAccount,
    tokenId: 1,
  });
});

test('mintCoSoulForAddress mints to a given address', async () => {
  const address = (await provider().listAccounts())[10];
  const tx = await mintCoSoulForAddress(address);

  const data = await getMintInfo(tx.hash);
  expect(data).toEqual({
    from: '0x0000000000000000000000000000000000000000',
    to: address,
    tokenId: 1,
  });
});

describe('with a minted nft', () => {
  beforeEach(async () => {
    await contract.mint();
  });

  describe('with a tokenId', () => {
    beforeEach(async () => {
      tokenId = await getTokenId(mainAccount);
    });

    test('getTokenId returns the tokenId', async () => {
      expect(tokenId).toEqual(1);
    });

    test('getOnChainPGIVE returns 0 before slot is set', async () => {
      assert(tokenId);
      expect(await getOnChainPGIVE(tokenId)).toEqual(0);
    });

    test('setOnChainPGIVE sets slot value', async () => {
      assert(tokenId);
      await setOnChainPGIVE(tokenId, 324);
      expect(await getOnChainPGIVE(tokenId)).toEqual(324);
    });
  });
});
