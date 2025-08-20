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
                Tender Details
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
