import { createContext, PropsWithChildren, useContext, useEffect } from 'react';

import { useColorScheme } from '../hooks/useColorScheme';
import useLocalStorage from '../hooks/useLocalStorage';

interface ThemeContextInterface {
  theme?: ThemeMode;
  setTheme: Function;
}

const ThemeContextPrototype: ThemeContextInterface = {
  setTheme: Function,
};

type ThemeMode = 'light' | 'dark' | 'system';

const ThemeContext = createContext<ThemeContextInterface>(
  ThemeContextPrototype
);
ThemeContext.displayName = 'ThemeContext';

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const { item: theme, setItem: setTheme } =
    useLocalStorage<ThemeMode>('theme');
  const colorScheme = useColorScheme();

  useEffect(() => {
    document.body.classList.toggle(
      'dark',
      (!theme || theme === 'system' ? colorScheme : theme) === 'dark'
    );
    document.body.classList.toggle(
      'light',
      (!theme || theme === 'system' ? colorScheme : theme) === 'light'
    );
  }, [colorScheme, theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};

export { ThemeProvider, useTheme };
export default ThemeContext;
