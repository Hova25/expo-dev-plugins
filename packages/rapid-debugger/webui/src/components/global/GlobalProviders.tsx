import { PropsWithChildren } from 'react';

import { DimensionsProvider } from '../../services/contexts/DimensionsContext';
import { LayoutProvider } from '../../services/contexts/LayoutContext';
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
