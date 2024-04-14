import { useReactQueryAdapter as reactQueryAdapter } from './adapters/useReactQueryAdapter';
import type { QueryClient } from '@tanstack/react-query';

type RapidDebuggerProps = {
  queryClient?: QueryClient
}

export function useRapidDebugger({queryClient}: RapidDebuggerProps) {
  if(queryClient) {
    reactQueryAdapter(queryClient);
  }
}
