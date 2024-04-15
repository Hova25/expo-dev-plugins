import React, { forwardRef, PropsWithChildren } from 'react';
import { LayoutComponent } from './GridLayout.util';
import { cn } from '../../../lib/utils';
import { Card, CardContent, CardHeader } from '../../ui/card';
import { Typography } from '../../ui/typography';

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
    const { i } = component;

    return (
      <div ref={ref} {...automaticProps}>
        <Card className={cn('rounded-md w-full h-full m-0 p-0')}>
          <CardHeader className={'rounded-t-sm py-0.5 px-2 bg-secondary'}>
            <Typography className={'text-sm'}>Title</Typography>
          </CardHeader>
          <CardContent className="grid gap-4 p-0">{children}</CardContent>
        </Card>
      </div>
    );
  }
);

export default CardLayout;
