import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  Chip,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  PlayArrow,
  Explore,
  TrendingUp,
  Security,
  Speed,
  ArrowForward,
  CheckCircle,
} from "@mui/icons-material";

const HeroSection = () => {
  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const features = [
    { icon: <TrendingUp />, text: "Real-time Analytics" },
    { icon: <Security />, text: "Secure Platform" },
    { icon: <Speed />, text: "Lightning Fast" },
  ];

  return (
    <Box
      sx={{
        background:
          "linear-gradient(135deg, #faf8f5 0%, #f5f1eb 50%, #f0ede8 100%)",
        display: "flex",
        alignItems: "center",
        py: 8,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorative elements */}
      <motion.div
        variants={floatingVariants}
        animate="float"
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          background:
            "linear-gradient(45deg, rgba(189, 143, 89, 0.1), rgba(164, 108, 53, 0.1))",
          zIndex: 0,
        }}
      />
      <motion.div
        variants={floatingVariants}
        animate="float"
        style={{
          position: "absolute",
          top: "60%",
          right: "10%",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background:
            "linear-gradient(45deg, rgba(189, 143, 89, 0.08), rgba(164, 108, 53, 0.08))",
          zIndex: 0,
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Grid
          container
          spacing={6}
          alignItems="center"
          justifyContent="space-around"
        >
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Typography
                variant="h1"
                sx={{
                  mb: 3,
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  background:
                    "linear-gradient(135deg, #a46c35 0%, #bd8f59 50%, #d4a574 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: 700,
                  lineHeight: 1.1,
                }}
              >
                Modern Tender Management
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  fontSize: "1.2rem",
                  color: "#666",
                  maxWidth: "500px",
                  lineHeight: 1.6,
                }}
              >
                Experience the future of tender management with our
                comprehensive platform designed for efficiency, transparency,
                and security.
              </Typography>

              {/* Feature highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          px: 2,
                          py: 1,
                          borderRadius: 2,
                          background: "rgba(255, 255, 255, 0.7)",
                          backdropFilter: "blur(10px)",
                          border: "1px solid rgba(189, 143, 89, 0.2)",
                        }}
                      >
                        <Box sx={{ color: "#bd8f59" }}>{feature.icon}</Box>
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 500, color: "#666" }}
                        >
                          {feature.text}
                        </Typography>
                      </Box>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>

              <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForward />}
                    sx={{
                      background:
                        "linear-gradient(135deg, #bd8f59 0%, #a46c35 100%)",
                      color: "white",
                      fontWeight: 600,
                      px: 4,
                      py: 1.5,
                      borderRadius: 3,
                      boxShadow: "0 8px 25px rgba(189, 143, 89, 0.3)",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: "0 12px 35px rgba(189, 143, 89, 0.4)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    View Tender
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<Explore />}
                    sx={{
                      border: "2px solid #bd8f59",
                      color: "#bd8f59",
                      fontWeight: 600,
                      px: 4,
                      py: 1.5,
                      borderRadius: 3,
                      background: "rgba(255, 255, 255, 0.8)",
                      backdropFilter: "blur(10px)",
                      "&:hover": {
                        background:
                          "linear-gradient(135deg, rgba(189, 143, 89, 0.1) 0%, rgba(164, 108, 53, 0.1) 100%)",
                        borderColor: "#a46c35",
                        color: "#a46c35",
                        transform: "translateY(-2px)",
                        boxShadow: "0 8px 25px rgba(189, 143, 89, 0.2)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    Explore Features
                  </Button>
                </motion.div>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <Card
                sx={{
                  p: 3,
                  background: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                  borderRadius: 4,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Card background decoration */}
                <Box
                  sx={{
                    position: "absolute",
                    top: -20,
                    right: -20,
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(45deg, rgba(189, 143, 89, 0.1), rgba(164, 108, 53, 0.1))",
                    zIndex: 0,
                  }}
                />

                <CardContent sx={{ position: "relative", zIndex: 1 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 3,
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{ color: "#a46c35", fontWeight: 600 }}
                      >
                        Tender Document
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        TND-2024-001
                      </Typography>
                    </Box>
                    <motion.div variants={pulseVariants} animate="pulse">
                      <Chip
                        label="75% Complete"
                        icon={<CheckCircle />}
                        sx={{
                          bgcolor: "rgba(189, 143, 89, 0.2)",
                          color: "#a46c35",
                          fontWeight: 600,
                          "& .MuiChip-icon": {
                            color: "#a46c35",
                          },
                        }}
                      />
                    </motion.div>
                  </Box>

                  <Typography variant="body2" sx={{ mb: 2, color: "#666" }}>
                    Progress Overview
                  </Typography>

                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                  >
                    <LinearProgress
                      variant="determinate"
                      value={75}
                      sx={{
                        height: 10,
                        borderRadius: 5,
                        bgcolor: "rgba(189, 143, 89, 0.2)",
                        "& .MuiLinearProgress-bar": {
                          background:
                            "linear-gradient(90deg, #bd8f59, #a46c35)",
                          borderRadius: 5,
                        },
                      }}
                    />
                  </motion.div>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mt: 2,
                    }}
                  >
                    <Typography variant="caption" color="text.secondary">
                      Started: Jan 15, 2024
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Due: Mar 30, 2024
                    </Typography>
                  </Box>

                  {/* Additional stats */}
                  <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
                    <Box sx={{ textAlign: "center", flex: 1 }}>
                      <Typography
                        variant="h6"
                        sx={{ color: "#bd8f59", fontWeight: 600 }}
                      >
                        24
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Participants
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: "center", flex: 1 }}>
                      <Typography
                        variant="h6"
                        sx={{ color: "#bd8f59", fontWeight: 600 }}
                      >
                        8
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Documents
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: "center", flex: 1 }}>
                      <Typography
                        variant="h6"
                        sx={{ color: "#bd8f59", fontWeight: 600 }}
                      >
                        15
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Days Left
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
