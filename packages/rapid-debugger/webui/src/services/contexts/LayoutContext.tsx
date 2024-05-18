import React, { createContext, PropsWithChildren, useContext } from 'react';

import {
  Layout,
  LayoutComponent,
} from '../../components/global/grid-layout/GridLayout.util';

const baseLayoutComponent: LayoutComponent[] = [
  {
    i: 'a',
    x: 0,
    y: 0,
    w: 20,
    h: 10,
    options: { componentName: 'console', title: 'Console' },
    resizeHandles: ['s', 'se', 'e'],
  },
  {
    i: 'b',
    x: 0,
    y: 10,
    w: 20,
    h: 10,
    options: { componentName: 'network', title: 'Console' },
    resizeHandles: ['s', 'se', 'e'],
  },
  {
    i: 'c',
    x: 0,
    y: 20,
    w: 20,
    h: 20,
    options: { componentName: 'reactQuery', title: 'React Query' },
    resizeHandles: ['s', 'se', 'e'],
  },
];
const layout: Layout = {
  lg: baseLayoutComponent,
  md: baseLayoutComponent,
  sm: baseLayoutComponent,
  xl: baseLayoutComponent,
  xs: baseLayoutComponent,
};

interface LayoutContextInterface {
  layout: Layout;
}

const LayoutContextPrototype: LayoutContextInterface = {
  layout,
};

const LayoutContext = createContext<LayoutContextInterface>(
  LayoutContextPrototype
);
LayoutContext.displayName = 'LayoutContext';

const LayoutProvider = ({ children }: PropsWithChildren) => {
  return (
    <LayoutContext.Provider
      value={{
        layout,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

const useLayoutContext = () => {
  const context = useContext(LayoutContext);

  if (context === undefined) {
    throw new Error('useLayoutContext must be used within a LayoutProvider');
  }
  return context;
};
export { LayoutProvider, useLayoutContext };
export default LayoutContext;
