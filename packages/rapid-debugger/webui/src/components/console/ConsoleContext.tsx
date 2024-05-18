import { getDevToolsPluginClientAsync } from 'expo/devtools';
import {
  createContext,
  createRef,
  PropsWithChildren,
  RefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

interface ConsoleContextInterface {
  logs: any[];
  clearLogs: Function;
  consoleContainerRef: RefObject<HTMLDivElement>;
}

const ConsoleContextPrototype: ConsoleContextInterface = {
  logs: [],
  clearLogs: Function,
  consoleContainerRef: createRef<HTMLDivElement>(),
};

const ConsoleContext = createContext<ConsoleContextInterface>(
  ConsoleContextPrototype
);
ConsoleContext.displayName = 'ConsoleContext';

const ConsoleProvider = ({ children }: PropsWithChildren) => {
  const consoleContainerRef = useRef<HTMLDivElement>(null);
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
        consoleContainerRef,
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
