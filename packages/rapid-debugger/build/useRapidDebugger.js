import { useReactQueryAdapter as reactQueryAdapter } from './adapters/useReactQueryAdapter';
export function useRapidDebugger({ queryClient } = {}) {
    if (queryClient) {
        reactQueryAdapter(queryClient);
    }
}
//# sourceMappingURL=useRapidDebugger.js.map