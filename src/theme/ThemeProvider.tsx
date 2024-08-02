import {
  createGlobalStyle,
  ThemeContext,
  ThemeProvider,
} from "styled-components";
import { Theme } from "./types";
import { darkTheme, lightTheme } from "./tokens";
import { ReactElement, useContext, useState } from "react";

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
body {
font-family: ${(props) => props.theme.typography.fontFamily};
background-color: ${(props) => props.theme.colors.background};
color: ${(props) => props.theme.colors.textPrimary};
}
`;

const themes = {
  light: lightTheme,
  dark: darkTheme,
};

type Props = {
  children: ReactElement;
};

export const AppThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState(themes.dark);

  const toggleTheme = () => {
    setTheme((prev) => (prev === themes.dark ? themes.light : themes.dark));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle theme={theme} />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
export const useTheme = () => useContext(ThemeContext);
