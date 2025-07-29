import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles"; // 👈 MUI ThemeProvider
import CssBaseline from "@mui/material/CssBaseline"; // 👈 Optional: resets browser styling
import "./index.css";
import App from "./App.jsx";
import { theme } from "./theme"; // 👈 import your theme.js

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Optional but recommended */}
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
