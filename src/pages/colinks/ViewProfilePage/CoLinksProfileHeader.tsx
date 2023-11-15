import { Dispatch, useEffect, useState } from 'react';

import { CoLinks } from '@coordinape/hardhat/dist/typechain';
import { PostForm } from 'features/colinks/PostForm';
import { useCoLinks } from 'features/colinks/useCoLinks';
import { client } from 'lib/gql/client';
import { useQuery } from 'react-query';

import { Mutes } from '../../../features/colinks/Mutes';
import { Github, Settings, Twitter } from 'icons/__generated';
import { Avatar, Button, ContentHeader, Flex, Link, Text } from 'ui';

import { CoLinksProfile } from './ViewProfilePageContents';

export const CoLinksProfileHeader = ({
  showLoading,
  setShowLoading,
  target,
  contract,
  currentUserAddress,
  targetAddress,
}: {
  showLoading: boolean;
  setShowLoading: Dispatch<React.SetStateAction<boolean>>;
  target: CoLinksProfile;
  contract: CoLinks;
  currentUserAddress: string;
  targetAddress: string;
}) => {
  const { targetBalance, superFriend } = useCoLinks({
    contract,
    address: currentUserAddress,
    target: targetAddress,
  });

  const { profile, imMuted, mutedThem } = target;

  const isCurrentUser =
    targetAddress.toLowerCase() == currentUserAddress.toLowerCase();

  const { data: socials } = useQuery(['twitter', profile.id], async () => {
    const { twitter_accounts_by_pk: twitter, github_accounts_by_pk: github } =
      await client.query(
        {
          twitter_accounts_by_pk: [
            {
              profile_id: profile.id,
            },
            {
              username: true,
            },
          ],
          github_accounts_by_pk: [
            {
              profile_id: profile.id,
            },
            {
              username: true,
            },
          ],
        },
        {
          operationName: 'twitter_profile',
        }
      );

    return {
      twitter: twitter ? twitter.username : undefined,
      github: github ? github.username : undefined,
    };
  });

  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setShowMenu(false);
  }, [target]);

  return (
    <ContentHeader>
      <Flex column css={{ gap: '$sm', flexGrow: 1, width: '100%' }}>
        <Flex css={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Flex alignItems="center" css={{ gap: '$sm' }}>
            <Avatar
              size="large"
              name={profile.name}
              path={profile.avatar}
              margin="none"
              css={{ mr: '$sm' }}
            />
            <Flex column>
              <Text h2 display css={{ color: '$secondaryButtonText' }}>
                {profile.name}
              </Text>

              <Flex css={{ gap: '$md', mt: '$xs' }}>
                {!isCurrentUser && superFriend && (
                  <Text tag color={'alert'}>
                    You are superfriends!
                  </Text>
                )}
                {imMuted && (
                  <Text tag color={'alert'}>
                    Has you muted
                  </Text>
                )}
                {mutedThem && (
                  <Text tag color={'alert'}>
                    Muted
                  </Text>
                )}
                {socials?.github && (
                  <Link
                    href={`https://github.com/${socials?.github}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github nostroke /> {socials?.github}
                  </Link>
                )}
                {socials?.twitter && (
                  <Link
                    href={`https://twitter.com/${socials?.twitter}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Twitter nostroke /> {socials?.twitter}
                  </Link>
                )}
              </Flex>
            </Flex>
          </Flex>
          <Flex css={{ alignItems: 'center', gap: '$md' }}>
            {showMenu && (
              <Flex column>
                <Mutes
                  targetProfileId={target.profile.id}
                  targetProfileAddress={targetAddress}
                />
              </Flex>
            )}
            {!isCurrentUser && (
              <Button
                color="neutral"
                outlined
                css={{ borderRadius: 99999, aspectRatio: '1/1', padding: 0 }}
                onClick={() => setShowMenu(prevState => !prevState)}
              >
                <Settings size={'md'} css={{ ml: 4 }} />
              </Button>
            )}
          </Flex>
        </Flex>
        {isCurrentUser && targetBalance !== undefined && targetBalance > 0 && (
          <Flex css={{ maxWidth: '$readable' }}>
            <PostForm
              showLoading={showLoading}
              onSave={() => setShowLoading(true)}
            />
          </Flex>
        )}
      </Flex>
    </ContentHeader>
  );
};
