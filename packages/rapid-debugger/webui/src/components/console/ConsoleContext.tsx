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

import {
  LOG_TYPE_VALUES,
  LogTypeValue,
} from './toolbar/ConsoleTypeToggleGroup';

export type TLog = {
  message: any;
  logType: LogTypeValue;
  receivedAt: Date;
};

interface ConsoleContextInterface {
  logs: TLog[];
  clearLogs: Function;
  consoleContainerRef: RefObject<HTMLDivElement>;
  availableLogTypes: LogTypeValue[];
  setAvailableLogTypes: (
    availableLogTypes: ConsoleContextInterface['availableLogTypes']
  ) => void;
}

const ConsoleContextPrototype: ConsoleContextInterface = {
  logs: [],
  clearLogs: Function,
  consoleContainerRef: createRef<HTMLDivElement>(),
  availableLogTypes: [],
  setAvailableLogTypes: () => {},
};

const ConsoleContext = createContext<ConsoleContextInterface>(
  ConsoleContextPrototype
);
ConsoleContext.displayName = 'ConsoleContext';

const ConsoleProvider = ({ children }: PropsWithChildren) => {
  const consoleContainerRef = useRef<HTMLDivElement>(null);
  const [logs, setLogs] = useState<ConsoleContextInterface['logs']>([]);
  const [availableLogTypes, setAvailableLogTypes] =
    useState<LogTypeValue[]>(LOG_TYPE_VALUES);

  const createLogItem = (stringMessage: string, logType: LogTypeValue) => {
    let message: any;
    try {
      message = JSON.parse(stringMessage);
    } catch (_) {
      message = stringMessage;
    }
    setLogs((oldLogs) => [
      ...oldLogs,
      {
        message,
        logType,
        receivedAt: new Date(),
      },
    ]);
  };

  useEffect(() => {
    getDevToolsPluginClientAsync('rapid-debugger').then((client) => {
      client.addMessageListener('log', (message) => {
        createLogItem(message, 'info');
      });
      client.addMessageListener('warn', (message) => {
        createLogItem(message, 'warn');
      });
      client.addMessageListener('error', (message) => {
        createLogItem(message, 'error');
      });
    });
    return () => {};
  }, []);

  const clearLogs = () => {
    setLogs((oldLogs) =>
      oldLogs.filter((log) => !availableLogTypes.includes(log.logType))
    );
  };

  return (
    <ConsoleContext.Provider
      value={{
        logs,
        clearLogs,
        consoleContainerRef,
        availableLogTypes,
        setAvailableLogTypes,
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
