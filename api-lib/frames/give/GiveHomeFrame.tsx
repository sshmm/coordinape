import React from 'react';

import { Frame } from '../../../_api/frames/router.tsx';
import { OGAvatar } from '../../../_api/og/OGAvatar.tsx';
import { insertInteractionEvents } from '../../gql/mutations.ts';
import { NotFoundError } from '../../HttpError.ts';
import { FramePostInfo } from '../_getFramePostInfo.tsx';
import {
  FrameBgImage,
  IMAGE_URL_BASE,
} from '../layoutFragments/FrameBgImage.tsx';
import { FrameBody } from '../layoutFragments/FrameBody.tsx';
import { FrameBodyGradient } from '../layoutFragments/FrameBodyGradient.tsx';
import { FrameFooter } from '../layoutFragments/FrameFooter.tsx';
import { FrameHeadline } from '../layoutFragments/FrameHeadline.tsx';
import { FrameWrapper } from '../layoutFragments/FrameWrapper.tsx';
import { PersonaFourFrame } from '../personas/PersonaFourFrame.tsx';
import { PersonaOneFrame } from '../personas/PersonaOneFrame.tsx';
import { PersonaThreeFrame } from '../personas/PersonaThreeFrame.tsx';
import { PersonaTwoFrame } from '../personas/PersonaTwoFrame.tsx';
import { PersonaZeroFrame } from '../personas/PersonaZeroFrame.tsx';

import { fetchProfileInfo } from './fetchProfileInfo.tsx';
import { getContextFromParams } from './getContextFromParams.ts';
import { getLevelForViewer } from './getLevelForViewer.tsx';
import { giveResourceIdentifier } from './giveResourceIdentifier.ts';

const homeFrameImageNode = async (params: Record<string, string>) => {
  const { give } = await getContextFromParams(params);
  const { numGiveSent: giverTotalGiven } = await fetchProfileInfo(
    give.giver_profile_public.id
  );
  const { numGiveReceived: receiverTotalReceived } = await fetchProfileInfo(
    give.target_profile_public.id
  );
  const giverLevel = await getLevelForViewer(give.giver_profile_public.id);
  const randomArtNumber = (give.id % 5) + 1;

  return (
    <FrameWrapper>
      <FrameBgImage src={`frontdoor-${giverLevel}-${randomArtNumber}.jpg`} />
      <FrameBody>
        <FrameBodyGradient
          gradientStyles={{
            background:
              giverLevel == 4
                ? 'radial-gradient(circle at 25% 0%, #E31A1A 0%, #790066 80%)'
                : giverLevel == 3
                  ? 'radial-gradient(circle at 25% 0%, #3300FF 0%, #EF7200 80%)'
                  : giverLevel == 2
                    ? 'radial-gradient(circle at 25% 0%, #0DC0E7 0%, #7908D2 80%)'
                    : giverLevel == 1
                      ? 'radial-gradient(circle at 25% 0%, #04AFF9 0%, #FFB800 80%)'
                      : 'radial-gradient(circle at 25% 0%, #135A95 0%, #092031 80%)',

            opacity: 0.7,
          }}
        />
        <FrameHeadline>
          <OGAvatar avatar={give.giver_profile_public.avatar} />
          <div tw="flex items-center grow justify-center">
            +1
            <img
              alt="gem"
              src={IMAGE_URL_BASE + 'GemWhite.png'}
              style={{ width: 70, height: 70, margin: '0 20px' }}
            />
            <span>GIVE</span>
          </div>
          <OGAvatar avatar={give.target_profile_public.avatar} />
        </FrameHeadline>
        <FrameFooter>
          <div
            tw="flex w-full items-center justify-between"
            style={{ fontWeight: 400 }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontWeight: 600 }}>
                {give.giver_profile_public.name}
              </span>
              <span>
                Total Given{' '}
                <span style={{ fontWeight: 600, paddingLeft: '.5rem' }}>
                  {giverTotalGiven}
                </span>
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
              }}
            >
              <span style={{ fontWeight: 600 }}>
                {give.target_profile_public.name}
              </span>
              <span>
                Total Received{' '}
                <span style={{ fontWeight: 600, paddingLeft: '.5rem' }}>
                  {receiverTotalReceived}
                </span>
              </span>
            </div>
          </div>
        </FrameFooter>
      </FrameBody>
    </FrameWrapper>
  );
};

const onPost = async (info: FramePostInfo, params: Record<string, string>) => {
  // who are you? which frame to return
  const { give } = await getContextFromParams(params);
  if (!give || !give.target_profile_public || !give.giver_profile_public) {
    throw new NotFoundError('give not found');
  }

  // Enter the Levels persona app
  const level = await getLevelForViewer(info.profile.id);

  const relation =
    info.profile.id === give.giver_profile_public.id
      ? 'giver'
      : info.profile.id === give.target_profile_public.id
        ? 'receiver'
        : 'other';

  await insertInteractionEvents({
    event_type: 'home_frame_click',
    profile_id: info.profile.id,
    data: {
      give_bot: true,
      frame: 'give',
      profile_level: level,
      give_id: give.id,
      clicker_relation: relation,
      clicker_name: info.profile.name,
      giver_id: give.giver_profile_public.id,
      receiver_id: give.target_profile_public.id,
      giver_name: give.giver_profile_public.name,
      receiver_name: give.target_profile_public.name,
    },
  });

  // route each level to its respective Persona
  if (level === 1) {
    return PersonaOneFrame;
  } else if (level === 2) {
    return PersonaTwoFrame;
  } else if (level === 3) {
    return PersonaThreeFrame;
  } else if (level === 4) {
    return PersonaFourFrame;
  } else {
    return PersonaZeroFrame;
  }
};

export const GiveHomeFrame: Frame = {
  id: 'give',
  homeFrame: true,
  resourceIdentifier: giveResourceIdentifier,
  imageNode: homeFrameImageNode,
  buttons: [
    {
      title: 'Get GIVE • Load my Profile',
      action: 'post',
      onPost: onPost,
    },
  ],
};
