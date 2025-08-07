import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { theme } from "../theme";
import HeroSection from "../components/Tendercomponents/HeroSection";
import AvailableTenders from "../components/Tendercomponents/AvailableTenders";

function TenderPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <HeroSection />
        <AvailableTenders />
      </div>
    </ThemeProvider>
  );
}

export default TenderPage;
