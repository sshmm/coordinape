import { useContext, useState } from 'react';

import { CoLinks } from '@coordinape/hardhat/dist/typechain';

import { LoadingIndicator } from '../../components/LoadingIndicator';
import { isFeatureEnabled } from '../../config/features';
import { ActivityList } from '../../features/activities/ActivityList';
import { useAuthStore } from '../../features/auth';
import { CoLinksContext } from '../../features/colinks/CoLinksContext';
import { LeaderboardMostLinks } from '../../features/colinks/LeaderboardMostLinks';
import { PostForm } from '../../features/colinks/PostForm';
import { RecentCoLinkTransactions } from '../../features/colinks/RecentCoLinkTransactions';
import { RightColumnSection } from '../../features/colinks/RightColumnSection';
import { useCoLinks } from '../../features/colinks/useCoLinks';
import { QUERY_KEY_COLINKS } from '../../features/colinks/wizard/CoLinksWizard';
import { InviteCodeLink } from '../../features/invites/InviteCodeLink';
import { Award, BarChart } from '../../icons/__generated';
import { coLinksPaths } from '../../routes/paths';
import { AppLink, ContentHeader, Flex, Text } from '../../ui';
import { TwoColumnSmallRightLayout } from '../../ui/layouts';

import { CoLinksTaskCards } from './CoLinksTaskCards';

export const ActivityPage = () => {
  const { coLinks, address } = useContext(CoLinksContext);
  if (!coLinks || !address) {
    return <LoadingIndicator />;
  }

  if (!isFeatureEnabled('soulkeys')) {
    return null;
  }

  return (
    <CoLinksActivityPageContents
      coLinks={coLinks}
      currentUserAddress={address}
    />
  );
};

const CoLinksActivityPageContents = ({
  coLinks,
  currentUserAddress,
}: {
  coLinks: CoLinks;
  currentUserAddress: string;
}) => {
  const [showLoading, setShowLoading] = useState(false);

  const profileId = useAuthStore(state => state.profileId);

  const { targetBalance } = useCoLinks({
    contract: coLinks,
    address: currentUserAddress,
    target: currentUserAddress,
  });
  return (
    <TwoColumnSmallRightLayout>
      <Flex css={{ gap: '$xl' }} column>
        <ContentHeader>
          <Flex
            column
            css={{
              gap: '$md',
              flexGrow: 1,
              alignItems: 'flex-start',
            }}
          >
            <Text h2 display>
              Activity Stream
            </Text>
            {targetBalance !== undefined && targetBalance > 0 && (
              <PostForm
                showLoading={showLoading}
                onSave={() => setShowLoading(true)}
              />
            )}
          </Flex>
        </ContentHeader>
        <Flex column css={{ gap: '$1xl' }}>
          <ActivityList
            queryKey={[QUERY_KEY_COLINKS, 'activity']}
            where={{ private_stream: { _eq: true } }}
            onSettled={() => setShowLoading(false)}
          />
        </Flex>
      </Flex>
      <Flex column css={{ gap: '$lg', mr: '$xl' }}>
        <CoLinksTaskCards currentUserAddress={currentUserAddress} small />
        <RightColumnSection
          title={
            <Flex as={AppLink} to={coLinksPaths.trades}>
              <Text color={'default'} semibold>
                <BarChart /> Recent Linking Activity
              </Text>
            </Flex>
          }
        >
          <RecentCoLinkTransactions limit={5} />
        </RightColumnSection>
        {profileId && <InviteCodeLink profileId={profileId} />}
        <RightColumnSection
          title={
            <Flex as={AppLink} to={coLinksPaths.leaderboard}>
              <Text color={'default'} semibold>
                <Award /> Leaderboard
              </Text>
            </Flex>
          }
        >
          {/*TODO: this is too chunky now*/}
          <LeaderboardMostLinks limit={5} small={true} />
        </RightColumnSection>
      </Flex>
    </TwoColumnSmallRightLayout>
  );
};
