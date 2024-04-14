import React from 'react';

import { cn } from '../../lib/utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';

export default function Console() {
  return (
    <div>
      <Card className={cn('w-full h-full')}>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>You have 3 unread messages.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className=" flex items-center space-x-4 rounded-md border p-4">
            yoo
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
