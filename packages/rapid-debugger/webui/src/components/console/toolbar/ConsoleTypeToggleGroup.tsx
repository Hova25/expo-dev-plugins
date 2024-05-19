import dynamicIconImports from 'lucide-react/dynamicIconImports';
import { lazy, Suspense } from 'react';

import { ToggleGroup, ToggleGroupItem } from '../../ui/toggle-group';
import { EasyTooltip } from '../../ui/tooltip';
import { useConsole } from '../ConsoleContext';

export const LOG_TYPE_VALUES: LogTypeValue[] = ['info', 'warn', 'error'];
export type LogTypeValue = 'info' | 'warn' | 'error';

export type TLogType = {
  value: LogTypeValue;
  tooltipText: string;
  iconName: keyof typeof dynamicIconImports;
};

const data: TLogType[] = [
  {
    value: 'info',
    tooltipText: 'Info',
    iconName: 'info',
  },
  {
    value: 'warn',
    tooltipText: 'Warning',
    iconName: 'triangle-alert',
  },
  {
    value: 'error',
    tooltipText: 'Error',
    iconName: 'shield-x',
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
      asChild
    >
      {data.map(({ value, tooltipText, iconName }) => {
        const LucideIcon = lazy(dynamicIconImports[iconName]);
        return (
          <ToggleGroupItem className="p-0 h-fit" key={value} value={value}>
            <EasyTooltip content={tooltipText}>
              <div className="h-9 px-2.5 flex items-center">
                <Suspense fallback={<div className="size-4" />}>
                  <LucideIcon className="size-4" />{' '}
                </Suspense>
              </div>
            </EasyTooltip>
          </ToggleGroupItem>
        );
      })}
    </ToggleGroup>
  );
}
