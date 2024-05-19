import { PropsWithChildren } from 'react';

import { DimensionsProvider } from '../../services/contexts/DimensionsContext';
import { LayoutProvider } from '../../services/contexts/LayoutContext';
import { ThemeProvider } from '../../services/contexts/ThemeContext';
import { TooltipProvider } from '../ui/tooltip';

export default function GlobalProviders({ children }: PropsWithChildren) {
  return (
    <>
      <LayoutProvider>
        <ThemeProvider>
          <TooltipProvider>
            <DimensionsProvider>{children}</DimensionsProvider>
          </TooltipProvider>
        </ThemeProvider>
      </LayoutProvider>
    </>
  );
}
