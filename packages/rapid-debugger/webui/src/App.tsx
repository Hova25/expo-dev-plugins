import React from 'react';

import './style/grid-layout/react-grid-layout.css';
import './style/grid-layout/react-resizable.css';
import AppLayout from './components/global/AppLayout';
import {
  Layout,
  LayoutComponent,
} from './components/global/grid-layout/GridLayout.util';
import RenderComponentGridLayout from './components/global/grid-layout/RenderComponentGridLayout';

const baseLayoutComponent: LayoutComponent[] = [
  { i: 'a', x: 0, y: 0, w: 20, h: 10, options: { componentName: 'console' } },
  { i: 'b', x: 0, y: 10, w: 20, h: 10, options: { componentName: 'network' } },
  {
    i: 'c',
    x: 0,
    y: 20,
    w: 20,
    h: 20,
    options: { componentName: 'reactQuery' },
  },
];
const layout: Layout = {
  lg: baseLayoutComponent,
  md: baseLayoutComponent,
  sm: baseLayoutComponent,
  xl: baseLayoutComponent,
  xs: baseLayoutComponent,
};

function App() {
  return (
    <AppLayout>
      <div className="flex row">
        <div className="flex-1 overflow-y-auto h-screen">
          <RenderComponentGridLayout layouts={layout} />
        </div>
        <div className={'h-screen bg-foreground w-28'}>dd</div>
      </div>
    </AppLayout>
  );
}

export default App;
