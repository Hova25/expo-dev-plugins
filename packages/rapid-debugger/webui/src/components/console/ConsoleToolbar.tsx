import { Eraser } from 'lucide-react';
import React, { useEffect } from 'react';

import { useConsole } from './ConsoleContext';
import { Button } from '../ui/button';
import { EasyTooltip } from '../ui/tooltip';

export default function ConsoleToolbar() {
  const { logs, clearLogs, consoleContainerRef } = useConsole();

  useEffect(() => {
    console.log('updaaatte', logs.length);
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
    <div className="flex flex-row items-center justify-end">
      <EasyTooltip content="Clear console">
        <Button onClick={() => clearLogs()} variant="outline" size="icon">
          <Eraser className="size-6" />
        </Button>
      </EasyTooltip>
    </div>
  );
}
