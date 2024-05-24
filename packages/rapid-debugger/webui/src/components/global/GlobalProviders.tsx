import { PropsWithChildren } from 'react';

import { LayoutProvider } from './grid-layout/LayoutContext';
import { DimensionsProvider } from '../../services/contexts/DimensionsContext';
import { ThemeProvider } from '../../services/contexts/ThemeContext';

export default function GlobalProviders({ children }: PropsWithChildren) {
  return (
    <>
      <LayoutProvider>
        <ThemeProvider>
          <DimensionsProvider>{children}</DimensionsProvider>
        </ThemeProvider>
      </LayoutProvider>
    </>
  );
}
