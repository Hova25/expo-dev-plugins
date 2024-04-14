import { DimensionsProvider } from '../../services/contexts/DimensionsContext';
import { PropsWithChildren } from 'react';

export default function GlobalProviders({ children }: PropsWithChildren) {
  return (
    <>
      <DimensionsProvider>{children}</DimensionsProvider>
    </>
  );
}
