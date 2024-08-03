import { Theme } from "./types";

export const sharedTokens = {
  typography: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: {
      small: "0.75em",
      normal: "0.875em",
      medium: "1em",
      large: "1.25em",
      xlarge: "1.5em",
      xxlarge: "2em",
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
    lineHeight: {
      small: "1.5",
      normal: "1.6",
      medium: "1.75",
      large: "2",
    },
  },
  breakpoints: {
    xs: "480px",
    sm: "768px",
    md: "1024px",
    lg: "1200px",
    xl: "1440px",
  },
  spacing: {
    none: "0px",
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px",
  },
  borders: {
    sizes: {
      thin: "1px",
      medium: "2px",
      thick: "4px",
    },
    radius: {
      small: "4px",
      medium: "8px",
      large: "16px",
      round: "50%",
    },
  },
};

export const lightTheme: Theme = {
  colors: {
    primary: "#1A73E8",
    primaryDark: "#174EA6",
    secondary: "#FF5722",
    secondaryDark: "#E64A19",
    background: "#FFFFFF",
    modalBackground: "rgba(0, 0, 0, 0.5)",
    surface: "#F5F5F5",
    error: "#D32F2F",
    warning: "#FFA000",
    info: "#1976D2",
    success: "#388E3C",
    textPrimary: "#212121",
    textSecondary: "#757575",
    textDisabled: "#BDBDBD",
    border: "#E0E0E0",
  },
  ...sharedTokens,
};

export const darkTheme: Theme = {
  colors: {
    primary: "#90CAF9",
    primaryDark: "#42A5F5",
    secondary: "#FF7043",
    secondaryDark: "#FF3D00",
    background: "#121212",
    modalBackground: "rgba(0, 0, 0, 0.5)",
    surface: "#212121",
    error: "#CF6679",
    warning: "#FFB300",
    info: "#64B5F6",
    success: "#81C784",
    textPrimary: "#E0E0E0",
    textSecondary: "#B0BEC5",
    textDisabled: "#757575",
    border: "#424242",
  },
  ...sharedTokens,
};
