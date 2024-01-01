import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const ThemeContext = createContext<{
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}>({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

interface ThemeContextProps {
  children: ReactNode;
}

export function ThemeContextProvider(props: ThemeContextProps): JSX.Element {
  const { children } = props;
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const storedValue = window.localStorage.getItem("isDarkMode");
    if (!storedValue) {
      setIsDarkMode(false);
    } else {
      setIsDarkMode(storedValue === "true");
    }
  }, []);

  const toggleDarkMode = useCallback((): void => {
    window.localStorage.setItem("isDarkMode", String(!isDarkMode));
    setIsDarkMode((prev) => !prev);
  }, [isDarkMode]);

  const contextValue = useMemo(
    () => ({ isDarkMode, toggleDarkMode }),
    [isDarkMode, toggleDarkMode],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
