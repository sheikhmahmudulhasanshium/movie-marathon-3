import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store'; // Adjust the path if necessary
import { setLight, setDark, setSystem } from '../redux/themeSlice'; // Adjust the path if necessary
import { ThemeProvider as NextThemesProvider } from 'next-themes';

// Define the ThemeProviderProps interface
interface ThemeProviderProps {
  children: React.ReactNode;
  attribute?: string;
  defaultTheme?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
}

export function ThemeProvider({
  children,
  attribute = 'class',
  defaultTheme = 'light',
  enableSystem = true,
  disableTransitionOnChange = true,
}: ThemeProviderProps) {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state: RootState) => state.theme.currentTheme);

  React.useEffect(() => {
    // Sync Redux state with NextThemes
    if (currentTheme === 'light') {
      dispatch(setLight());
      document.documentElement.classList.remove('dark'); // Remove dark class
    } else if (currentTheme === 'dark') {
      dispatch(setDark());
      document.documentElement.classList.add('dark'); // Add dark class
    } else {
      dispatch(setSystem());
      // Optionally, remove or add 'dark' based on system preference
    }
  }, [currentTheme, dispatch]);

  return (
    <NextThemesProvider
      attribute={attribute}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      disableTransitionOnChange={disableTransitionOnChange}
    >
      {children}
    </NextThemesProvider>
  );
}
