import React, { forwardRef, PropsWithChildren } from 'react';
import { LayoutComponent } from './GridLayout.util';
import { cn } from '../../../lib/utils';
import { Card, CardContent } from '../../ui/card';

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
        <Card className={cn('w-full h-full m-0 p-0')}>
          <CardContent className="grid gap-4 p-0">{children}</CardContent>
        </Card>
      </div>
    );
  }
);

export default CardLayout;
