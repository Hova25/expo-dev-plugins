import React, { useMemo } from 'react';

import { useConsole } from './ConsoleContext';
import ConsoleMessage from './message/ConsoleMessage';
import ConsoleToolbar from './toolbar/ConsoleToolbar';

export default function Console() {
  const { logs, consoleContainerRef, availableLogTypes } = useConsole();

  const filtredLogs = useMemo(() => {
    return logs.filter((log) => availableLogTypes.includes(log.logType));
  }, [availableLogTypes, logs.length]);

  return (
    <div className="flex flex-col overflow-hidden">
      <ConsoleToolbar />
      <div ref={consoleContainerRef} className="overflow-y-auto flex-1">
        {filtredLogs.map((log, index) => (
          <ConsoleMessage key={log.receivedAt.getTime()} log={log} />
        ))}
      </div>
    </div>
  );
}
