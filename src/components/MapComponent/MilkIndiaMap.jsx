import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Fade,
  useTheme,
  useMediaQuery,
  Backdrop,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "../Header";
import IndiaMap from "./IndiaMap";
import CompanyPanel from "./CompanyPanel";

const theme = createTheme({
  palette: {
    primary: {
      main: "#bd8f59",
      dark: "#a46c35ff",
    },
    secondary: {
      main: "#a46c35ff",
    },
    background: {
      default: "#f8f9fa",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "#333",
          fontSize: "0.875rem",
          fontWeight: 500,
        },
      },
    },
  },
});

function MilkIndiaMap() {
  const [selectedState, setSelectedState] = useState(null);
  const [hoveredState, setHoveredState] = useState(null);
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("md"));

  const handleStateClick = (stateId) => {
    setSelectedState(stateId === selectedState ? null : stateId);
  };

  const handleStateHover = (stateId) => {
    setHoveredState(stateId);
  };

  const handleClosePanel = () => {
    setSelectedState(null);
  };

  const isPanelOpen = Boolean(selectedState);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
        <Container maxWidth="xl" sx={{ py: 3 }}>
          <Fade in timeout={800}>
            <Box>
              <Typography
                variant="h4"
                align="center"
                sx={{
                  mb: 1,
                  color: "#bd8f59",
                  fontWeight: 700,
                }}
              >
                India Dairy Network
              </Typography>
              <Typography
                variant="subtitle1"
                align="center"
                sx={{
                  mb: 4,
                  color: "#666",
                  maxWidth: "600px",
                  mx: "auto",
                }}
              >
                Explore our milk producer companies across India. Click on
                highlighted states to view detailed information.
              </Typography>
            </Box>
          </Fade>

          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                alignItems: "flex-start",
                minHeight: "600px",
              }}
            >
              {/* Map Container */}
              <Paper
                elevation={3}
                sx={{
                  flex: isMobile || !isPanelOpen ? 1 : "1 1 60%",
                  p: 3,
                  borderRadius: "16px",
                  backgroundColor: "white",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                  minHeight: "500px",
                }}
              >
                <IndiaMap
                  selectedState={selectedState}
                  onStateClick={handleStateClick}
                  onStateHover={handleStateHover}
                  hoveredState={hoveredState}
                />
              </Paper>

              {/* Desktop Company Panel */}
              {!isMobile && (
                <Box
                  sx={{
                    flex: isPanelOpen ? "1 1 40%" : "0 0 0",
                    transition: "all 0.3s ease",
                    overflow: "hidden",
                  }}
                >
                  <CompanyPanel
                    selectedState={selectedState}
                    isOpen={isPanelOpen}
                    onClose={handleClosePanel}
                  />
                </Box>
              )}
            </Box>

            {/* Mobile Company Panel */}
            {isMobile && (
              <>
                <Backdrop
                  open={isPanelOpen}
                  onClick={handleClosePanel}
                  sx={{ zIndex: 1200 }}
                />
                <CompanyPanel
                  selectedState={selectedState}
                  isOpen={isPanelOpen}
                  onClose={handleClosePanel}
                />
              </>
            )}
          </Box>

          {/* Instructions */}
          <Fade in timeout={1200}>
            <Paper
              elevation={1}
              sx={{
                mt: 4,
                p: 3,
                borderRadius: "12px",
                backgroundColor: "white",
                border: "1px solid #e0e0e0",
              }}
            >
              <Typography
                variant="h6"
                sx={{ mb: 2, color: "#bd8f59", fontWeight: 600 }}
              >
                How to Use
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box
                    sx={{
                      width: 16,
                      height: 16,
                      backgroundColor: "#bd8f59",
                      borderRadius: "4px",
                    }}
                  />
                  <Typography variant="body2" color="text.secondary">
                    Active regions - Click to view companies
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box
                    sx={{
                      width: 16,
                      height: 16,
                      backgroundColor: "#bbdefb",
                      borderRadius: "4px",
                    }}
                  />
                  <Typography variant="body2" color="text.secondary">
                    Inactive regions
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Fade>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default MilkIndiaMap;
