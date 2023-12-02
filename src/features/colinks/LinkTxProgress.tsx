import { Flex, Text } from '../../ui';

export const LinkTxProgress = ({ message }: { message: string }) => {
  return (
    <Flex
      css={{
        display: message != '' ? 'flex' : 'none',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        width: '100%',
        p: '$md',
        justifyItems: 'space-around',
        justifyContent: 'space-around',
        alignItems: 'center',
        textAlign: 'center',
        background: '$surfaceNested',
        zIndex: 11,
        borderRadius: '$3',
        opacity: 0.9,
      }}
    >
      <Text color="complete" semibold>
        {message}
      </Text>
    </Flex>
  );
};
