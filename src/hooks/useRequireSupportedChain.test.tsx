import { render, screen } from '@testing-library/react';
import { Mock, vi } from 'vitest';

import { ToastContainer } from 'components/ToastContainer';

import useRequireSupportedChain from './useRequireSupportedChain';
// @ts-ignore
import { mockChainId, Web3ReactProvider } from './useWeb3React';

vi.mock('./useWeb3React', async importOriginal => {
  const originalModule =
    await importOriginal<typeof import('./useWeb3React')>();
  const mockChainId = vi.fn(() => 'mockme');

  return {
    __esModule: true,
    ...originalModule,
    mockChainId,
    useWeb3React: () => {
      const orig = originalModule.useWeb3React();
      return {
        ...orig,
        chainId: mockChainId(),
      };
    },
  };
});

// ???: if i use the default TestWrapper, the call to useWeb3React in
// Web3Activator gets the correct mock implementations below, but the one we
// care about in useRequireSupportedChain doesn't
const TestWrapper = ({ children }: { children: any }) => (
  <Web3ReactProvider>
    <ToastContainer />
    {children}
  </Web3ReactProvider>
);

const Harness = () => {
  useRequireSupportedChain();
  return <></>;
};

test('on valid chain, does nothing', async () => {
  (mockChainId as Mock).mockImplementation(() => 1);

  render(
    <TestWrapper>
      <Harness />
    </TestWrapper>
  );

  expect(screen.queryByText(/do not support chain/)).toBeNull();
});

test('on invalid chain, shows error', async () => {
  (mockChainId as Mock).mockImplementation(() => 12345);

  render(
    <TestWrapper>
      <Harness />
    </TestWrapper>
  );

  await screen.findByText(
    'Contract interactions do not support chain 12345. Please switch to Ethereum Mainnet.'
  );
});
