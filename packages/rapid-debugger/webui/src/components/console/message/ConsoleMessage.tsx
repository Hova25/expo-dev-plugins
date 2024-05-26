import React from 'react';

import { dateToHourMilli } from '../../../lib/date.utils';
import BodyViewer from '../../ui/body-viewer';
import { Typography } from '../../ui/typography';
import { TLog } from '../ConsoleContext';

type ConsoleMessageProps = {
  log: TLog;
};

export default function ConsoleMessage({
  log: { message, receivedAt, logType },
}: ConsoleMessageProps) {
  return (
    <div className="border-b border-secondary">
      <Typography className="text-lg">
        <span className="font-bold">
          {dateToHourMilli(receivedAt)} ({logType})
        </span>{' '}
        - <BodyViewer data={message} />
      </Typography>
    </div>
  );
}
