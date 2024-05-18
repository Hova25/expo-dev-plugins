import React from 'react';

import { Separator } from '../../ui/separator';
import { Typography } from '../../ui/typography';
import { ThemeToggle } from '../ThemeToggle';

export default function RightNavbar() {
  return (
    <div className="h-screen bg-secondary w-28 shadow-xl shadow-accent flex flex-col items-center py-4 gap-y-4">
      <Typography>RapidDebugger</Typography>
      <ThemeToggle />
      <Separator />
      <Typography>Components</Typography>
      <Separator />
      <Typography className="cursor-pointer">Console</Typography>
      <Typography className="cursor-pointer">Network</Typography>
      <Typography className="cursor-pointer">ReactQuery</Typography>
      <Separator />
      <Typography>Saved Components</Typography>
      <Separator />
    </div>
  );
}
