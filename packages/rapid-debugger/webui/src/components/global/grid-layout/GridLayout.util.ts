import { Layout as ReactGridLayout } from 'react-grid-layout';

export type BreakPoints = 'xl' | 'xs' | 'sm' | 'md' | 'lg';

export type BreakPointsProps<T> = { [BP in BreakPoints]: T };

export type ComponentName = 'console' | 'network' | 'reactQuery';

export interface LayoutComponent extends ReactGridLayout {
  options?: {
    componentName: ComponentName;
    title: string;
  };
}

// export type LayoutComponent = ReactGridLayout & {
//   options?: {
//     componentName: ComponentName;
//   };
// };

export type Layout = BreakPointsProps<LayoutComponent[]>;

export type SimpleGridLayoutProps = {
  layouts: Layout;
};

export const SimpleGridLayoutCols: BreakPointsProps<number> = {
  xl: 24,
  lg: 24,
  md: 24,
  sm: 24,
  xs: 24,
};

export const BreakPointValue: BreakPointsProps<number> = {
  xl: 1200,
  lg: 992,
  md: 768,
  sm: 576,
  xs: 0,
};
export const BreakPointValueString: BreakPointsProps<string> = {
  xl: '1200px',
  lg: '992px',
  md: '768px',
  sm: '576px',
  xs: '0px',
};
