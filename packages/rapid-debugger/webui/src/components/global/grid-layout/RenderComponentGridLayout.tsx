import { useContext } from 'react';
import { SimpleGridLayoutProps } from './GridLayout.util';
import DimensionsContext from '../../../services/contexts/DimensionsContext';
import SimpleGridLayout from './SimpleGridLayout';
import CardLayout from './CardLayout';
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
