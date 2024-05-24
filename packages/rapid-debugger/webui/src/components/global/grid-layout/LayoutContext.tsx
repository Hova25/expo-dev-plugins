import { cloneDeep } from 'lodash';
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
  lg: [...baseLayoutComponent],
  md: [...baseLayoutComponent],
  sm: [...baseLayoutComponent],
  xl: [...baseLayoutComponent],
  xs: [...baseLayoutComponent],
};

interface LayoutContextInterface {
  layout: Layout;
  addComponent: (name: ComponentName) => void;
  removeComponent: (i: string) => void;
}

const LayoutContextPrototype: LayoutContextInterface = {
  layout: defaultLayout,
  addComponent: Function,
  removeComponent: Function,
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
      lg: [...prevLayout.lg, { ...newComponent }],
      md: [...prevLayout.md, { ...newComponent }],
      sm: [...prevLayout.sm, { ...newComponent }],
      xl: [...prevLayout.xl, { ...newComponent }],
      xs: [...prevLayout.xs, { ...newComponent }],
    }));
  };

  const removeComponent = (i: string) => {
    const layoutTmp = cloneDeep(layout);
    const index = layoutTmp.xl.findIndex((component) => component.i === i);
    if (index > -1) {
      layoutTmp.xl.splice(index, 1);
      layoutTmp.lg.splice(index, 1);
      layoutTmp.md.splice(index, 1);
      layoutTmp.sm.splice(index, 1);
      layoutTmp.xs.splice(index, 1);
    }
    setLayout(layoutTmp);
  };

  return (
    <LayoutContext.Provider
      value={{
        layout,
        addComponent,
        removeComponent,
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
