import { DevToolsPluginClient } from 'expo/devtools';
import { useEffect } from 'react';

export function useConsoleAdapter(client: DevToolsPluginClient | null) {
  const originalConsoleLog = console.log;
  const originalConsoleWarn = console.warn;
  const originalConsoleError = console.error;

  useEffect(() => {
    async function setup() {
      console.log = function (...args) {
        const payload = args.length === 1 ? args[0] : JSON.stringify(args);
        client?.sendMessage('log', payload);
        originalConsoleLog.apply(console, arguments);
      };
      console.warn = function (...args) {
        const payload = args.length === 1 ? args[0] : JSON.stringify(args);
        client?.sendMessage('warn', payload);
        originalConsoleWarn.apply(console, arguments);
      };
      console.error = function (...args) {
        const payload = args.length === 1 ? args[0] : JSON.stringify(args);
        client?.sendMessage('error', payload);
        originalConsoleError.apply(console, arguments);
      };
    }

    async function teardown() {
      console.log = originalConsoleLog;
      console.warn = originalConsoleWarn;
      console.error = originalConsoleError;
    }

    setup();
    return () => {
      teardown();
    };
  }, [client]);
}
