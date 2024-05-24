import React from 'react';

import ComponentList from './ComponentList';
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
      <ComponentList />
      <Separator />
      <Typography>Saved Components</Typography>
      <Separator />
    </div>
  );
}
