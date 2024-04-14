import { PropsWithChildren } from 'react';

import DevToolNotConnected from './info/DevToolNotConnected';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="w-full h-full">
      <DevToolNotConnected />
      {children}
    </div>
  );
}
