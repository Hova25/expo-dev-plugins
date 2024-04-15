import { DimensionsProvider } from '../../services/contexts/DimensionsContext';
import { PropsWithChildren } from 'react';
import { ThemeProvider } from '../../services/contexts/ThemeContext';

export default function GlobalProviders({ children }: PropsWithChildren) {
  return (
    <>
      <ThemeProvider>
        <DimensionsProvider>{children}</DimensionsProvider>
      </ThemeProvider>
    </>
  );
}
