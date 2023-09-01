import assert from 'assert';
import { useState } from 'react';

import { useParams } from 'react-router-dom';

import { ActivityList } from '../../features/activities/ActivityList';
import { SingleColumnLayout } from '../../ui/layouts';
import isFeatureEnabled from 'config/features';
import { ContributionForm } from 'pages/ContributionsPage/ContributionForm';
import { ContributionHelpText } from 'pages/ContributionsPage/ContributionHelpText';
import { ContentHeader, Flex, Text } from 'ui';

export const CircleActivityPage = () => {
  const [showLoading, setShowLoading] = useState(false);
  const { circleId: circleIdS } = useParams();

  assert(circleIdS);

  const circleId = parseInt(circleIdS);

  return (
    <SingleColumnLayout>
      <ContentHeader>
        <Flex
          column
          css={{
            gap: '$sm',
            flexGrow: 1,
            width: '100%',
          }}
        >
          <Text h1>Activity</Text>
          <Text p as="p">
            The latest in your circle.
          </Text>
          <ContributionHelpText circleId={circleId} />
          {isFeatureEnabled('activity_contributions') && (
            <ContributionForm
              circleId={circleId}
              showLoading={showLoading}
              onSave={() => setShowLoading(true)}
            />
          )}
        </Flex>
      </ContentHeader>
      <ActivityList
        queryKey={['circle-activities', circleId]}
        where={{ circle_id: { _eq: circleId } }}
        onSettled={() => setShowLoading(false)}
      />
    </SingleColumnLayout>
  );
};
