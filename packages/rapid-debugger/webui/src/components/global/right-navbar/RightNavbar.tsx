import React from 'react';
import { ThemeToggle } from '../ThemeToggle';
import { Typography } from '../../ui/typography';

export default function RightNavbar() {
  return (
    <div
      className={
        'h-screen bg-secondary w-28 shadow-xl shadow-accent flex flex-col items-center py-4 gap-y-4'
      }
    >
      <Typography>RapidDebugger</Typography>
      <ThemeToggle />
    </div>
  );
}
