import React from "react";
import {
  ThemeProvider,
  CssBaseline,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  Grow,
} from "@mui/material";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import FlagIcon from "@mui/icons-material/Flag";
import { theme } from "../../theme";

function OurFeatures5() {
  const [hoveredCard, setHoveredCard] = React.useState(null);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100%",
          background:
            "linear-gradient(135deg, #fefcf8 0%, #f8f4ed 50%, #f5f0e8 100%)",
        }}
        className="space"
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} lg={6}>
              <Grow in timeout={1000}>
                <Card
                  onMouseEnter={() => setHoveredCard("mission")}
                  onMouseLeave={() => setHoveredCard(null)}
                  sx={{
                    height: "100%",
                    background:
                      "linear-gradient(135deg, #bd8f59 0%, #a46c35 100%)",
                    color: "white",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    transform:
                      hoveredCard === "mission" ? "scale(1.02)" : "scale(1)",
                    transition: "all 0.3s ease-in-out",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      right: 0,
                      width: 200,
                      height: 200,
                      background: "rgba(255, 255, 255, 0.1)",
                      borderRadius: "50%",
                      transform: "translate(50%, -50%)",
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: 150,
                      height: 150,
                      background: "rgba(255, 255, 255, 0.05)",
                      borderRadius: "50%",
                      transform: "translate(-50%, 50%)",
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      p: 4,
                      position: "relative",
                      zIndex: 1,
                      height: "100%",
                    }}
                  >
                    <Box display="flex" alignItems="center" mb={3}>
                      <Avatar
                        sx={{
                          bgcolor: "rgba(255, 255, 255, 0.2)",
                          mr: 2,
                          width: 56,
                          height: 56,
                          transform:
                            hoveredCard === "mission"
                              ? "scale(1.1)"
                              : "scale(1)",
                          transition: "transform 0.3s ease",
                        }}
                      >
                        <TrackChangesIcon sx={{ fontSize: 28 }} />
                      </Avatar>
                      <Typography variant="h2" sx={{ color: "white" }}>
                        Our Mission
                      </Typography>
                    </Box>

                    <Typography
                      variant="body1"
                      sx={{
                        color: "rgba(255, 255, 255, 0.9)",
                        mb: 4,
                        fontSize: "1.1rem",
                        lineHeight: 1.7,
                      }}
                    >
                      Building pathways to prosperity in rural India through
                      scientific methods, fairness, empowerment, sustainability,
                      innovation, inclusion, resilience, transparency, and
                      collaboration.
                    </Typography>
                  </CardContent>
                </Card>
              </Grow>
            </Grid>
            {/* Vision Card */}
            <Grid item xs={12} md={6} lg={6}>
              <Grow in timeout={1200}>
                <Card
                  onMouseEnter={() => setHoveredCard("vision")}
                  onMouseLeave={() => setHoveredCard(null)}
                  sx={{
                    height: "100%",
                    background:
                      "linear-gradient(135deg, #a46c35 0%, #8b5a2b 100%)",
                    color: "white",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    transform:
                      hoveredCard === "vision" ? "scale(1.02)" : "scale(1)",
                    transition: "all 0.3s ease-in-out",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: 180,
                      height: 180,
                      background: "rgba(255, 255, 255, 0.08)",
                      borderRadius: "50%",
                      transform: "translate(-50%, -50%)",
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      width: 120,
                      height: 120,
                      background: "rgba(255, 255, 255, 0.05)",
                      borderRadius: "50%",
                      transform: "translate(50%, 50%)",
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      p: 4,
                      position: "relative",
                      zIndex: 1,
                      height: "100%",
                    }}
                  >
                    <Box display="flex" alignItems="center" mb={3}>
                      <Avatar
                        sx={{
                          bgcolor: "rgba(255, 255, 255, 0.2)",
                          mr: 2,
                          width: 56,
                          height: 56,
                          transform:
                            hoveredCard === "vision"
                              ? "scale(1.1)"
                              : "scale(1)",
                          transition: "transform 0.3s ease",
                        }}
                      >
                        <FlagIcon sx={{ fontSize: 28 }} />
                      </Avatar>
                      <Typography variant="h2" sx={{ color: "white" }}>
                        Our Vision
                      </Typography>
                    </Box>

                    <Typography
                      variant="body1"
                      sx={{
                        color: "rgba(255, 255, 255, 0.9)",
                        mb: 4,
                        fontSize: "1.1rem",
                        lineHeight: 1.7,
                      }}
                    >
                      Ensuring consistent and sustainable livelihoods for
                      farmers especially women even in the remotest parts of the
                      country by developing fair and transparent value chains
                      based on scientific methods while striving towards net
                      zero emissions.
                    </Typography>
                  </CardContent>
                </Card>
              </Grow>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default OurFeatures5;
