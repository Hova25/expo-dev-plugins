import { useReactQueryAdapter } from './adapters/useReactQueryAdapter';
import type { QueryClient } from '@tanstack/react-query';

export function useRapidDebugger(queryClient: QueryClient) {
  useReactQueryAdapter(queryClient);
}
