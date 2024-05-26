import { useDevToolsPluginClient } from 'expo/devtools';
import { useConsoleAdapter } from './adapters/useConsoleAdapter';
import { useNetworkXHRAdapter } from './adapters/useNetworkXHRAdapter';
export function useRapidDebugger({ queryClient } = {}) {
    const client = useDevToolsPluginClient('rapid-debugger');
    useConsoleAdapter(client);
    useNetworkXHRAdapter(client);
}
//# sourceMappingURL=useRapidDebugger.js.map