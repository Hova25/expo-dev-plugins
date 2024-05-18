import { getDevToolsPluginClientAsync } from 'expo/devtools';
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';

interface ConsoleContextInterface {
  logs: any[];
  clearLogs: Function;
}

const ConsoleContextPrototype: ConsoleContextInterface = {
  logs: [],
  clearLogs: Function,
};

const ConsoleContext = createContext<ConsoleContextInterface>(
  ConsoleContextPrototype
);
ConsoleContext.displayName = 'ConsoleContext';

const ConsoleProvider = ({ children }: PropsWithChildren) => {
  const [logs, setLogs] = useState<any[]>([]);
  useEffect(() => {
    console.log('addMessageee listnerr');

    getDevToolsPluginClientAsync('rapid-debugger').then((client) => {
      client.addMessageListener('log', (message) => {
        setLogs((oldLogs) => [...oldLogs, message]);
        // createLogItem(message, 'log');
      });
      // client.addMessageListener('warn', (message) => {
      //   setLogs((oldLogs) => [...oldLogs, message]);
      //   // createLogItem(message, 'warn');
      // });
      // client.addMessageListener('error', (message) => {
      //   setLogs((oldLogs) => [...oldLogs, message]);
      //   // createLogItem(message, 'error');
      // });
    });
    return () => {};
  }, []);

  const clearLogs = () => {
    console.log('cleaaar log');
    setLogs([]);
  };

  return (
    <ConsoleContext.Provider
      value={{
        logs,
        clearLogs,
      }}
    >
      {children}
    </ConsoleContext.Provider>
  );
};

const useConsole = () => {
  const context = useContext(ConsoleContext);

  if (context === undefined)
    throw new Error('useConsole must be used within a ConsoleProvider');

  return context;
};

export { ConsoleProvider, useConsole };
export default ConsoleContext;
