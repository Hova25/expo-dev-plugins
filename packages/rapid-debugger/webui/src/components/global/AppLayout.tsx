import { PropsWithChildren } from 'react';

import DevToolNotConnected from './info/DevToolNotConnected';
import GlobalProviders from './GlobalProviders';

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
