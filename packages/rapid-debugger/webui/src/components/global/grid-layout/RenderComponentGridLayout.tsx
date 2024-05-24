import { useContext } from 'react';

import CardLayout from './CardLayout';
import { useLayoutContext } from './LayoutContext';
import SimpleGridLayout from './SimpleGridLayout';
import DimensionsContext from '../../../services/contexts/DimensionsContext';
import RenderComponent from '../RenderComponent';

export default function RenderComponentGridLayout() {
  const { layout } = useLayoutContext();
  const { breakPoint } = useContext(DimensionsContext);

  return (
    <>
      {breakPoint && (
        <SimpleGridLayout layouts={layout}>
          {layout[breakPoint]?.map((component) => (
            <CardLayout key={component.i} component={component}>
              <RenderComponent component={component} />
            </CardLayout>
          ))}
        </SimpleGridLayout>
      )}
    </>
  );
}
