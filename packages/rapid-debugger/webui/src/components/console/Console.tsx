import React from 'react';

import { useConsole } from './ConsoleContext';
import { Typography } from '../ui/typography';

export default function Console() {
  const { logs, clearLogs } = useConsole();
  return (
    <div className="flex flex-col overflow-hidden">
      <button className="bg-primary" onClick={() => clearLogs()}>
        CLEAR LOGS
      </button>
      <div className="overflow-y-auto flex-1">
        {logs.map((log, index) => (
          <div className="border-b border-secondary" key={index}>
            <Typography className="text-lg">{log}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
}
