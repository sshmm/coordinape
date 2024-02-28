import { ComponentProps } from 'react';

import { GiveReceived } from 'features/points/GiveReceived';
import { useNavigate } from 'react-router-dom';

import { coLinksPaths } from '../../routes/paths';
import { Flex, Text } from '../../ui';
import isFeatureEnabled from 'config/features';
import { CertificateLight, Links } from 'icons/__generated';

export const CoLinksStats = ({
  links,
  score,
  size = 'xs',
  address,
  holdingCount,
}: {
  links: number;
  score: number;
  address?: string;
  size?: ComponentProps<typeof Text>['size'];
  holdingCount: number;
}) => {
  const navigate = useNavigate();
  return (
    <Flex css={{ alignItems: 'center', gap: size === 'xs' ? '$sm' : '$md' }}>
      <Text
        size={size}
        title={'Rep Score'}
        color={'secondary'}
        css={{
          gap: '$xs',
          cursor: 'pointer',
          whiteSpace: 'nowrap',
          '&:hover': {
            color: '$linkHover',
            'svg path': {
              fill: '$linkHover',
            },
          },
        }}
        onClick={e => {
          e.preventDefault();
          e.stopPropagation();
          navigate(coLinksPaths.score(address ?? ''));
        }}
      >
        <CertificateLight
          nostroke
          css={{
            path: { fill: '$secondaryText' },
          }}
        />
        <Text semibold size={size}>
          {abbreviateNumber(score)}
        </Text>
      </Text>
      <Text
        size={size}
        color={'secondary'}
        title={'Links'}
        onClick={e => {
          e.preventDefault();
          e.stopPropagation();
          navigate(coLinksPaths.holders(address ?? ''));
        }}
        css={{
          gap: size === 'xs' ? '$xs' : '$sm',
          cursor: 'pointer',
          whiteSpace: 'nowrap',
          '&:hover': {
            color: '$linkHover',
            'svg path': {
              fill: '$linkHover',
            },
          },
        }}
      >
        <Links nostroke css={{ path: { fill: '$secondaryText' } }} />
        <Text semibold size={size}>
          {abbreviateNumber(links ?? 0)}
        </Text>
      </Text>
      {isFeatureEnabled('colinks_give') && address && (
        <GiveReceived size={size} address={address} />
      )}
      {holdingCount > 0 && (
        <Text tag size="xs" color="cta">
          You Hold {holdingCount}
        </Text>
      )}
    </Flex>
  );
};

function abbreviateNumber(num: number): string {
  if (num < 1000) {
    return num.toString();
  } else if (num < 10000) {
    // Convert to thousands with one decimal place
    let abbreviated = (num / 1000).toFixed(1);
    abbreviated = abbreviated.replace(/\.0$/, '');
    return abbreviated + 'k';
  } else {
    // For 10000 and above, round down to the nearest thousand
    return Math.floor(num / 1000) + 'k';
  }
}
