import { PropsWithChildren } from 'react';

import GlobalProviders from './GlobalProviders';
import DevToolNotConnected from './info/DevToolNotConnected';

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <GlobalProviders>
      <div className="w-full h-full">
        <DevToolNotConnected />
        {children}
      </div>
    </GlobalProviders>
  );
}
