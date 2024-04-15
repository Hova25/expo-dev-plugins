import * as React from 'react';

import { cn } from '../../lib/utils';

const Typography = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span ref={ref} className={cn('', className)} {...props} />
));
Typography.displayName = 'Typography';

export { Typography };
