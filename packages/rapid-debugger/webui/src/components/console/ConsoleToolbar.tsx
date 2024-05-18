import React, { useEffect } from 'react';

import { useConsole } from './ConsoleContext';

export default function ConsoleToolbar() {
  const { logs, clearLogs, consoleContainerRef } = useConsole();

  useEffect(() => {
    // scrollbottom no smooth
    if (consoleContainerRef.current) {
      consoleContainerRef.current.scrollTop =
        consoleContainerRef.current.scrollHeight;
    }

    //scrollbottom with smooth
    // if (consoleContainerRef.current) {
    //   consoleContainerRef.current?.scrollTo({
    //     behavior: 'smooth',
    //     top: consoleContainerRef.current.scrollHeight,
    //   });
    // }
  }, [logs.length]);
  return (
    <div>
      <button className="bg-primary" onClick={() => clearLogs()}>
        CLEAR LOGS
      </button>
    </div>
  );
}
