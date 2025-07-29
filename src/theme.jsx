// theme.js
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#bd8f59",
      dark: "#a46c35",
      light: "#d4a373",
    },
    secondary: {
      main: "#a46c35",
      dark: "#8b5a2b",
      light: "#bd8f59",
    },
    background: {
      default: "#fefcf8",
      paper: "#ffffff",
    },
    text: {
      primary: "#a46c35",
      secondary: "#6b5b47",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: "3.5rem",
      color: "#a46c35",
    },
    h2: {
      fontWeight: 600,
      fontSize: "2.5rem",
      color: "#a46c35",
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.5rem",
      color: "#a46c35",
    },
    body1: {
      fontSize: "1.1rem",
      lineHeight: 1.7,
      color: "#6b5b47",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 8px 32px rgba(180, 143, 89, 0.1)",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 16px 48px rgba(180, 143, 89, 0.2)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: "none",
          fontWeight: 600,
          padding: "12px 24px",
        },
      },
    },
  },
});
