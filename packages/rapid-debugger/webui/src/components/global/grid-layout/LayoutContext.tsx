import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';

import {
  ComponentName,
  DefaultComponentLayout,
  Layout,
  LayoutComponent,
} from './GridLayout.util';

const baseLayoutComponent: LayoutComponent[] = [
  { ...DefaultComponentLayout['console'] },
  { ...DefaultComponentLayout['network'] },
  { ...DefaultComponentLayout['reactQuery'] },
];
const defaultLayout: Layout = {
  lg: baseLayoutComponent,
  md: baseLayoutComponent,
  sm: baseLayoutComponent,
  xl: baseLayoutComponent,
  xs: baseLayoutComponent,
};

interface LayoutContextInterface {
  layout: Layout;
  addComponent: (name: ComponentName) => void;
}

const LayoutContextPrototype: LayoutContextInterface = {
  layout: defaultLayout,
  addComponent: Function,
};

const LayoutContext = createContext<LayoutContextInterface>(
  LayoutContextPrototype
);
LayoutContext.displayName = 'LayoutContext';

const LayoutProvider = ({ children }: PropsWithChildren) => {
  const [layout, setLayout] = useState<LayoutContextInterface['layout']>(
    LayoutContextPrototype.layout
  );

  const addComponent = (name: ComponentName) => {
    const newComponent = {
      ...DefaultComponentLayout[name],
      i: `component-${layout.xl.length}`,
    };

    setLayout((prevLayout) => ({
      lg: [...prevLayout.lg, newComponent],
      md: [...prevLayout.md, newComponent],
      sm: [...prevLayout.sm, newComponent],
      xl: [...prevLayout.xl, newComponent],
      xs: [...prevLayout.xs, newComponent],
    }));
  };

  return (
    <LayoutContext.Provider
      value={{
        layout,
        addComponent,
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
