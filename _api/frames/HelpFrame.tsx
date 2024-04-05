import React from 'react';

import { staticResourceIdentifier } from './_staticResourceIdentifier.ts';
import { FrameBgImage } from './layoutFragments/FrameBgImage';
import { FrameWrapper } from './layoutFragments/FrameWrapper';
import { Frame } from './router';

const imageNode = async () => {
  return (
    <FrameWrapper>
      <FrameBgImage src="help.jpg" />
      <div
        tw="w-full grow flex flex-col text-center justify-center items-center"
        style={{
          fontSize: 40,
          fontWeight: 600,
          gap: 20,
          background:
            'radial-gradient(circle at 25% 0%, #ABC3C3 0%, #939393 80%)',
        }}
      >
        <div tw="flex flex-col items-center">
          <span>Reply to any cast with</span>
          <span
            style={{
              background: '#111111',
              padding: '8px 25px',
              borderRadius: 8,
              marginTop: 8,
              color: 'white',
            }}
          >
            @givebot
          </span>
        </div>
        <div tw="flex flex-col items-center">
          <span>Or Cast with</span>
          <span
            style={{
              background: '#111111',
              padding: '8px 25px',
              borderRadius: 8,
              marginTop: 8,
              color: 'white',
            }}
          >
            @givebot @receiverName #skillTag
          </span>
        </div>
        <div tw="flex flex-col items-center">
          <span>See this info again</span>
          <span
            style={{
              background: 'white',
              padding: '8px 25px',
              borderRadius: 8,
              marginTop: 8,
              color: '#111111',
            }}
          >
            @givebot help
          </span>
        </div>
      </div>
    </FrameWrapper>
  );
};

export const HelpFrame: Frame = {
  id: 'help',
  homeFrame: true,
  imageNode: imageNode,
  resourceIdentifier: staticResourceIdentifier,
  // TODO: change this
  buttons: [
    {
      title: 'Use on Farcaster',
      action: 'link',
      target:
        'https://warpcast.com/~/compose?text=@givebot @singer did some nice work today&embeds[]=https://farcaster.xyz',
    },
  ],
};
