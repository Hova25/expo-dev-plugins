import type { QueryClient } from '@tanstack/react-query';
import { useDevToolsPluginClient } from 'expo/devtools';

import { useConsoleAdapter } from './adapters/useConsoleAdapter';
import { useNetworkXHRAdapter } from './adapters/useNetworkXHRAdapter';

type RapidDebuggerProps = {
  queryClient?: QueryClient;
};

export function useRapidDebugger({ queryClient }: RapidDebuggerProps = {}) {
  const client = useDevToolsPluginClient('rapid-debugger');
  useConsoleAdapter(client);
  useNetworkXHRAdapter(client);
}
