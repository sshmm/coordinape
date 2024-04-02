import React from 'react';

import {
  getMintInfoFromReceipt,
  mintCoSoulForAddress,
} from '../../../src/features/cosoul/api/cosoul';
import { minted } from '../../hasura/actions/_handlers/syncCoSoul';
import { OGAvatar } from '../../og/OGAvatar';
import { ErrorFrame } from '../ErrorFrame';
import { FramePostInfo } from '../getFramePostInfo';
import { getViewerFromParams } from '../getViewerFromParams';
import { FrameBgImage, IMAGE_URL_BASE } from '../layoutFragments/FrameBgImage';
import { FrameBody } from '../layoutFragments/FrameBody';
import { FrameBodyGradient } from '../layoutFragments/FrameBodyGradient';
import { FrameFooter } from '../layoutFragments/FrameFooter';
import { FrameHeadline } from '../layoutFragments/FrameHeadline';
import { FrameWrapper } from '../layoutFragments/FrameWrapper';
import { MintSuccessFrame } from '../MintSuccessFrame';
import { Frame } from '../router';
import { staticResourceIdentifier } from '../staticResourceIdentifier';

const imageNode = async (params: Record<string, string>) => {
  const { viewerProfile } = await getViewerFromParams(params);

  return (
    <FrameWrapper>
      <FrameBgImage src="persona-1.jpg" />
      <FrameBody>
        <FrameBodyGradient
          gradientStyles={{
            background:
              'radial-gradient(circle at 25% 0%, #04AFF9 0%, #FFB800 80%)',
            opacity: 0.7,
          }}
        />
        <FrameHeadline>
          <OGAvatar avatar={viewerProfile?.avatar} />
          <div tw="flex items-center grow justify-center">Level 1</div>
          <img
            alt="gem"
            src={IMAGE_URL_BASE + 'GemWhite.png'}
            style={{ width: 70, height: 70 }}
          />
        </FrameHeadline>
        <FrameFooter>
          Level up more!
          <br />
          Bring your GIVE onchain.
        </FrameFooter>
      </FrameBody>
    </FrameWrapper>
  );
};

const mintCoSoul = async (mintToAddr: string, profileId: number) => {
  try {
    const tx = await mintCoSoulForAddress(mintToAddr);
    const txReceipt = await tx.wait();
    const { tokenId } = await getMintInfoFromReceipt(txReceipt);

    await minted(mintToAddr, tx.hash, tokenId, profileId, false);
  } catch (e) {
    console.error('Error minting CoSoul', e);
    return false;
  }
  return true;
};

const onPost = async (info: FramePostInfo) => {
  const success = await mintCoSoul(info.profile.address, info.profile.id);
  if (!success) {
    return ErrorFrame('Error minting CoSoul');
  }

  return MintSuccessFrame;
};

export const PersonaOneFrame: Frame = {
  id: 'persona1',
  homeFrame: false,
  imageNode: imageNode,
  resourceIdentifier: staticResourceIdentifier,
  buttons: [
    {
      title: 'Mint CoSoul',
      action: 'post',
      onPost: onPost,
    },
    {
      title: 'Send me a CoSoul',
      action: 'link',
      target: 'https://colinks.coordinape.com',
    },
  ],
};
