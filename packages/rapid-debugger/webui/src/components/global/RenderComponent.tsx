import { ReactNode } from 'react';

import { ComponentName, LayoutComponent } from './grid-layout/GridLayout.util';
import ConsoleEntrypoint from '../console/ConsoleEntrypoint';
import Network from '../network/Network';
import ReactQuery from '../react-query/ReactQuery';

const renderComponent: { [RC in ComponentName]: ReactNode } = {
  reactQuery: <ReactQuery />,
  console: <ConsoleEntrypoint />,
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
