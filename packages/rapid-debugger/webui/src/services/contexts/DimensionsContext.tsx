import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';
import { BreakPoints } from '../../components/global/grid-layout/GridLayout.util';

interface Sizes {
  width: number | undefined;
  height: number | undefined;
}

type DimensionsContextInterfaceType = {
  breakPoint: BreakPoints | undefined;
};

interface DimensionsContextInterface {
  windowSize: Sizes;
  breakPoint: DimensionsContextInterfaceType['breakPoint'];
}

const DimensionsContextPrototype: DimensionsContextInterface = {
  windowSize: {
    width: undefined,
    height: undefined,
  },
  breakPoint: undefined,
};

const DimensionsContext = createContext<DimensionsContextInterface>(
  DimensionsContextPrototype
);
DimensionsContext.displayName = 'DimensionsContext';

const DimensionsProvider = ({ children }: PropsWithChildren) => {
  const [windowSize, setWindowSize] = useState<Sizes>(
    DimensionsContextPrototype.windowSize
  );
  const [breakPoint, setBreakPoint] = useState<
    DimensionsContextInterfaceType['breakPoint'] | undefined
  >(DimensionsContextPrototype.breakPoint);

  function chooseBreakPoint() {
    if (window.innerWidth >= 1200) {
      setBreakPoint('xl');
    } else if (window.innerWidth >= 992) {
      setBreakPoint('lg');
    } else if (window.innerWidth >= 768) {
      setBreakPoint('md');
    } else if (window.innerWidth >= 576) {
      setBreakPoint('sm');
    } else {
      setBreakPoint('xs');
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      chooseBreakPoint();
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <DimensionsContext.Provider
      value={{
        windowSize,
        breakPoint,
      }}
    >
      {children}
    </DimensionsContext.Provider>
  );
};

export { DimensionsProvider };
export default DimensionsContext;
