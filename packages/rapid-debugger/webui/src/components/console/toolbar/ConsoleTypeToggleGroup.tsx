import { Info, ShieldX, TriangleAlert } from 'lucide-react';
import { ReactElement } from 'react';

import { ToggleGroup, ToggleGroupItem } from '../../ui/toggle-group';
import { EasyTooltip } from '../../ui/tooltip';
import { useConsole } from '../ConsoleContext';

export const LOG_TYPE_VALUES: LogTypeValue[] = ['info', 'warn', 'error'];
export type LogTypeValue = 'info' | 'warn' | 'error';

export type TLogType = {
  value: LogTypeValue;
  tooltipText: string;
  Icon: () => ReactElement;
};

const data: TLogType[] = [
  {
    value: 'info',
    tooltipText: 'Info',
    Icon: () => <Info className="size-4" />,
  },
  {
    value: 'warn',
    tooltipText: 'Warning',
    Icon: () => <TriangleAlert className="size-4" />,
  },
  {
    value: 'error',
    tooltipText: 'Error',
    Icon: () => <ShieldX className="text-destructive size-4" />,
  },
];

export default function ConsoleTypeToggleGroup() {
  const { availableLogTypes, setAvailableLogTypes } = useConsole();

  return (
    <ToggleGroup
      onValueChange={setAvailableLogTypes}
      type="multiple"
      defaultValue={availableLogTypes}
      size="sm"
    >
      {data.map(({ value, tooltipText, Icon }) => (
        <ToggleGroupItem key={value} value={value}>
          <EasyTooltip content={tooltipText}>
            <Icon />
          </EasyTooltip>
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
