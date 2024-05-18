import { useContext } from 'react';

import CardLayout from './CardLayout';
import { SimpleGridLayoutProps } from './GridLayout.util';
import SimpleGridLayout from './SimpleGridLayout';
import DimensionsContext from '../../../services/contexts/DimensionsContext';
import RenderComponent from '../RenderComponent';

export default function RenderComponentGridLayout({
  layouts,
}: SimpleGridLayoutProps) {
  const { breakPoint } = useContext(DimensionsContext);

  return (
    <>
      {breakPoint && (
        <SimpleGridLayout layouts={layouts}>
          {layouts[breakPoint]?.map((component) => (
            <CardLayout key={component.i} component={component}>
              <RenderComponent component={component} />
            </CardLayout>
          ))}
        </SimpleGridLayout>
      )}
    </>
  );
}
