import { ReactNode } from 'react';

import { ComponentName, LayoutComponent } from './grid-layout/GridLayout.util';
import Console from '../console/Console';
import Network from '../network/Network';
import ReactQuery from '../react-query/ReactQuery';

const renderComponent: { [RC in ComponentName]: ReactNode } = {
  reactQuery: <ReactQuery />,
  console: <Console />,
  network: <Network />,
};

type RenderComponentProps = {
  component: LayoutComponent;
};

export default function RenderComponent({ component }: RenderComponentProps) {
  const { options: { componentName } = {} } = component;

  if (!componentName) {
    return null;
  }
  return <>{renderComponent[componentName]}</>;
}
