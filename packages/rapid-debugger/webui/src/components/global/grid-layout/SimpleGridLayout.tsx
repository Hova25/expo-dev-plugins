import { PropsWithChildren, useContext, useMemo } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { SimpleGridLayoutCols, SimpleGridLayoutProps } from './GridLayout.util';
import DimensionsContext from '../../../services/contexts/DimensionsContext';

const ResponsiveGridLayout = WidthProvider(Responsive);

const HEIGHT_CASE = 40;

export default function SimpleGridLayout({
  children,
  layouts,
}: PropsWithChildren<SimpleGridLayoutProps>) {
  const {
    windowSize: { height = 0 },
  } = useContext(DimensionsContext);

  // const rowHeight = useMemo(() => height / HEIGHT_CASE, [height]);
  const rowHeight = useMemo(() => height / 40 - 10, [height]); // 10 = padding

  return (
    <>
      <ResponsiveGridLayout
        layouts={layouts}
        cols={SimpleGridLayoutCols}
        rowHeight={rowHeight}
        preventCollision={true}
        compactType={'horizontal'}
      >
        {children}
      </ResponsiveGridLayout>
    </>
  );
}
