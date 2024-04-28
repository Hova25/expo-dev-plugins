import React, { forwardRef, PropsWithChildren } from 'react';
import { LayoutComponent } from './GridLayout.util';
import { cn } from '../../../lib/utils';
import { Card, CardContent, CardHeader } from '../../ui/card';
import { Typography } from '../../ui/typography';
import { SquareX } from 'lucide-react';

type CardLayoutProps = {
  component: LayoutComponent;
};

const CardLayout = forwardRef(
  (
    {
      children,
      component,
      ...automaticProps
    }: PropsWithChildren<CardLayoutProps>,
    ref: any
  ) => {
    const { i, options: { title } = {} } = component;

    return (
      <div ref={ref} {...automaticProps}>
        <Card className={cn('rounded-md w-full h-full m-0 p-0')}>
          <CardHeader
            className={
              'rounded-t-sm py-0 px-0 bg-secondary flex flex-row items-center justify-between space-y-0'
            }
          >
            <Typography className={'text-sm ml-2'}>{title}</Typography>
            <SquareX className={'size-6 text-foreground cursor-pointer'} />
          </CardHeader>
          <CardContent className="grid gap-4 p-0">{children}</CardContent>
        </Card>
      </div>
    );
  }
);

export default CardLayout;
