import React from 'react';

import { useConsole } from './ConsoleContext';
import ConsoleToolbar from './ConsoleToolbar';
import { Typography } from '../ui/typography';

export default function Console() {
  const { logs, consoleContainerRef } = useConsole();

  return (
    <div className="flex flex-col overflow-hidden">
      <ConsoleToolbar />
      <div ref={consoleContainerRef} className="overflow-y-auto flex-1">
        {logs.map((log, index) => (
          <div className="border-b border-secondary" key={index}>
            <Typography className="text-lg">{log}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
}
