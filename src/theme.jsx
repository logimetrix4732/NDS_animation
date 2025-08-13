import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#bd8f59",
      light: "#d4a574",
      dark: "#a46c35",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#f5f5f5",
      light: "#ffffff",
      dark: "#e0e0e0",
      contrastText: "#333333",
    },
    background: {
      default: "#fafafa",
      paper: "#ffffff",
    },
    text: {
      primary: "#2c2c2c",
      secondary: "#666666",
    },
    gradient: {
      primary: "linear-gradient(135deg, #bd8f59 0%, #a46c35 100%)",
      secondary: "linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)",
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
      "@media (max-width:768px)": {
        fontSize: "2.5rem",
      },
    },
    h2: {
      fontFamily: "Playfair Display, serif",
      fontWeight: 600,
      fontSize: "2.75rem",
      lineHeight: 1.3,
      color: "#a46c35",
      "@media (max-width:768px)": {
        fontSize: "2rem",
      },
    },
    h3: {
      fontFamily: "Playfair Display, serif",
      fontWeight: 600,
      fontSize: "2.125rem",
      lineHeight: 1.4,
      color: "#2c2c2c",
      "@media (max-width:768px)": {
        fontSize: "1.75rem",
      },
    },
    h4: {
      fontFamily: "Playfair Display, serif",
      fontWeight: 500,
      fontSize: "1.5rem",
      lineHeight: 1.4,
      color: "#2c2c2c",
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
      fontSize: "1.125rem",
      lineHeight: 1.6,
      color: "#666666",
    },
    body2: {
      fontFamily: "Inter, sans-serif",
      fontSize: "1rem",
      lineHeight: 1.5,
      color: "#666666",
    },
  },
  shape: {
    borderRadius: 16,
  },
  shadows: [
    "none",
    "0px 2px 4px rgba(0,0,0,0.05)",
    "0px 4px 8px rgba(0,0,0,0.1)",
    "0px 8px 16px rgba(0,0,0,0.1)",
    "0px 8px 24px rgba(0,0,0,0.12)",
    "0px 12px 32px rgba(0,0,0,0.14)",
    "0px 16px 40px rgba(0,0,0,0.16)",
    "0px 20px 48px rgba(0,0,0,0.18)",
    "0px 24px 56px rgba(0,0,0,0.2)",
    "0px 32px 64px rgba(0,0,0,0.24)",
    "0px 40px 72px rgba(0,0,0,0.28)",
    "0px 48px 80px rgba(0,0,0,0.32)",
    "0px 56px 88px rgba(0,0,0,0.36)",
    "0px 64px 96px rgba(0,0,0,0.4)",
    "0px 72px 104px rgba(0,0,0,0.44)",
    "0px 80px 112px rgba(0,0,0,0.48)",
    "0px 88px 120px rgba(0,0,0,0.52)",
    "0px 96px 128px rgba(0,0,0,0.56)",
    "0px 104px 136px rgba(0,0,0,0.6)",
    "0px 112px 144px rgba(0,0,0,0.64)",
    "0px 120px 152px rgba(0,0,0,0.68)",
    "0px 128px 160px rgba(0,0,0,0.72)",
    "0px 136px 168px rgba(0,0,0,0.76)",
    "0px 144px 176px rgba(0,0,0,0.8)",
    "0px 152px 184px rgba(0,0,0,0.84)",
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          borderRadius: 12,
          padding: "12px 24px",
          fontSize: "1rem",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0px 8px 24px rgba(189, 143, 89, 0.3)",
          },
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
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0px 16px 40px rgba(0,0,0,0.16)",
          },
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
