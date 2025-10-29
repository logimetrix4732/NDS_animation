import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  Button,
  InputAdornment,
  CircularProgress,
  alpha,
} from "@mui/material";
import {
  Refresh,
  Save,
  LocationOn,
  Business,
  Person,
} from "@mui/icons-material";

const HomeStatisticsConfig = ({
  homeStats,
  setHomeStats,
  loading,
  fetchHomeStats,
  saveHomeStats,
}) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Card sx={{ p: 1 }}>
        <CardContent sx={{ p: 4 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 4,
            }}
          >
            <Box>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                  color: "text.primary",
                }}
              >
                Home Statistics Configuration
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Update the key metrics displayed on the home page
              </Typography>
            </Box>
            <Button
              variant="outlined"
              startIcon={<Refresh />}
              onClick={fetchHomeStats}
              disabled={loading}
              sx={{
                px: 3,
                py: 1.5,
                borderWidth: 2,
                "&:hover": {
                  borderWidth: 2,
                },
              }}
            >
              Refresh Data
            </Button>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Box
                sx={{
                  p: 3,
                  bgcolor: alpha("#1976d2", 0.05),
                  borderRadius: 3,
                  border: "1px solid",
                  borderColor: alpha("#1976d2", 0.1),
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: alpha("#1976d2", 0.08),
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 24px rgba(25, 118, 210, 0.15)",
                  },
                }}
              >
                <TextField
                  fullWidth
                  label="States Covered"
                  value={homeStats.states_covered}
                  onChange={(e) =>
                    setHomeStats((prev) => ({
                      ...prev,
                      states_covered: e.target.value,
                    }))
                  }
                  placeholder="e.g., 11"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOn color="primary" sx={{ fontSize: 20 }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      bgcolor: "background.paper",
                    },
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box
                sx={{
                  p: 3,
                  bgcolor: alpha("#2e7d32", 0.05),
                  borderRadius: 3,
                  border: "1px solid",
                  borderColor: alpha("#2e7d32", 0.1),
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: alpha("#2e7d32", 0.08),
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 24px rgba(46, 125, 50, 0.15)",
                  },
                }}
              >
                <TextField
                  fullWidth
                  label="Districts Served"
                  value={homeStats.district_served}
                  onChange={(e) =>
                    setHomeStats((prev) => ({
                      ...prev,
                      district_served: e.target.value,
                    }))
                  }
                  placeholder="e.g., 200"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Business sx={{ color: "#2e7d32", fontSize: 20 }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      bgcolor: "background.paper",
                    },
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box
                sx={{
                  p: 3,
                  bgcolor: alpha("#ed6c02", 0.05),
                  borderRadius: 3,
                  border: "1px solid",
                  borderColor: alpha("#ed6c02", 0.1),
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: alpha("#ed6c02", 0.08),
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 24px rgba(237, 108, 2, 0.15)",
                  },
                }}
              >
                <TextField
                  fullWidth
                  label="Villages Reached"
                  value={homeStats.villages_reached}
                  onChange={(e) =>
                    setHomeStats((prev) => ({
                      ...prev,
                      villages_reached: e.target.value,
                    }))
                  }
                  placeholder="e.g., 36,630"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOn sx={{ color: "#ed6c02", fontSize: 20 }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      bgcolor: "background.paper",
                    },
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box
                sx={{
                  p: 3,
                  bgcolor: alpha("#9c27b0", 0.05),
                  borderRadius: 3,
                  border: "1px solid",
                  borderColor: alpha("#9c27b0", 0.1),
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: alpha("#9c27b0", 0.08),
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 24px rgba(156, 39, 176, 0.15)",
                  },
                }}
              >
                <TextField
                  fullWidth
                  label="Associated Farmers (Lac)"
                  value={homeStats.associated_farmers}
                  onChange={(e) =>
                    setHomeStats((prev) => ({
                      ...prev,
                      associated_farmers: e.target.value,
                    }))
                  }
                  placeholder="e.g., 12.3"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person sx={{ color: "#9c27b0", fontSize: 20 }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      bgcolor: "background.paper",
                    },
                  }}
                />
              </Box>
            </Grid>
          </Grid>

          <Box
            sx={{
              mt: 5,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              startIcon={loading ? <CircularProgress size={20} /> : <Save />}
              onClick={saveHomeStats}
              disabled={loading}
              size="large"
              sx={{
                px: 6,
                py: 2,
                fontSize: "1.1rem",
                fontWeight: 600,
                minWidth: 200,
                bgcolor: "primary.main",
                "&:hover": {
                  bgcolor: "primary.dark",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 24px rgba(25, 118, 210, 0.4)",
                },
              }}
            >
              {loading ? "Saving..." : "Save Statistics"}
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default HomeStatisticsConfig;
