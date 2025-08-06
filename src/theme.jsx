import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#bd8f59",
      light: "#d4a574",
      dark: "#a46c35",
    },
    secondary: {
      main: "#f5f5f5",
      light: "#ffffff",
      dark: "#e0e0e0",
    },
    background: {
      default: "#fafafa",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
    h1: {
      fontFamily: "Playfair Display, serif",
      fontWeight: 700,
      fontSize: "3.5rem",
      lineHeight: 1.2,
      color: "#a46c35",
    },
    h2: {
      fontFamily: "Playfair Display, serif",
      fontWeight: 600,
      fontSize: "2.5rem",
      lineHeight: 1.3,
      color: "#a46c35",
    },
    h3: {
      fontFamily: "Playfair Display, serif",
      fontWeight: 600,
      fontSize: "2rem",
      lineHeight: 1.4,
      color: "#a46c35",
    },
    h4: {
      fontFamily: "Playfair Display, serif",
      fontWeight: 500,
      fontSize: "1.5rem",
      lineHeight: 1.4,
      color: "#333",
    },
    h5: {
      fontFamily: "Inter, sans-serif",
      fontWeight: 600,
      fontSize: "1.25rem",
      lineHeight: 1.5,
      color: "#333",
    },
    h6: {
      fontFamily: "Inter, sans-serif",
      fontWeight: 600,
      fontSize: "1.1rem",
      lineHeight: 1.5,
      color: "#333",
    },
    body1: {
      fontFamily: "Inter, sans-serif",
      fontSize: "1rem",
      lineHeight: 1.6,
      color: "#666",
    },
    body2: {
      fontFamily: "Inter, sans-serif",
      fontSize: "0.875rem",
      lineHeight: 1.5,
      color: "#666",
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: "none",
          fontWeight: 600,
          padding: "12px 24px",
          fontSize: "1rem",
        },
        contained: {
          boxShadow: "0 4px 14px 0 rgba(189, 143, 89, 0.3)",
          "&:hover": {
            boxShadow: "0 6px 20px 0 rgba(189, 143, 89, 0.4)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 12,
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(10px)",
          },
        },
      },
    },
  },
});
