import { forwardRef, PropsWithChildren } from 'react';
import { LayoutComponent } from './GridLayout.util';

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
        <div id={`${i}-card`}>{children}</div>
      </div>
    );
  }
);

export default CardLayout;
