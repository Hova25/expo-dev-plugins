import type { QueryClient } from '@tanstack/react-query';
import { useDevToolsPluginClient } from 'expo/devtools';

import { useConsoleAdapter as consoleAdapter } from './adapters/useConsoleAdapter';
import { useReactQueryAdapter as reactQueryAdapter } from './adapters/useReactQueryAdapter';

type RapidDebuggerProps = {
  queryClient?: QueryClient;
};

export function useRapidDebugger({ queryClient }: RapidDebuggerProps = {}) {
  const client = useDevToolsPluginClient('rapid-debugger');

  if (client) {
    consoleAdapter(client);

    if (queryClient) {
      reactQueryAdapter(queryClient, client);
    }
  }
}
