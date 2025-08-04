import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Fade,
  List,
  ListItem,
  Chip,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { ArrowForward, Business, LocationOn, Close } from "@mui/icons-material";
import { statesData } from "./statesData";

const CompanyPanel = ({ selectedState, isOpen, onClose }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const stateData = selectedState ? statesData[selectedState] : undefined;

  const handleReadMore = (companyId) => {
    console.log(`Read more about company: ${companyId}`);
    // Implement read more functionality
  };

  if (!isOpen || !stateData) {
    return null;
  }

  return (
    <Fade in={isOpen} timeout={300}>
      <Box
        sx={{
          position: isMobile ? "fixed" : "relative",
          top: isMobile ? 0 : "auto",
          right: 0,
          width: isMobile ? "100%" : "400px",
          height: isMobile ? "100vh" : "auto",
          maxHeight: isMobile ? "none" : "80vh",
          backgroundColor: "white",
          boxShadow: isMobile ? "none" : "0 4px 20px rgba(0,0,0,0.15)",
          borderRadius: isMobile ? 0 : "16px 0 0 16px",
          overflow: "auto",
          zIndex: isMobile ? 1300 : 1,
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            background: "linear-gradient(135deg, #bd8f59 0%, #a46c35ff 100%)",
            color: "white",
            p: 3,
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography variant="h5" fontWeight="bold">
              {stateData.name}
            </Typography>
            <IconButton onClick={onClose} sx={{ color: "white" }} size="small">
              <Close />
            </IconButton>
          </Box>
          <Chip
            icon={<Business />}
            label={`${stateData.companies.length} Companies`}
            sx={{
              backgroundColor: "rgba(255,255,255,0.2)",
              color: "white",
              "& .MuiChip-icon": { color: "white" },
            }}
          />
        </Box>

        {/* Companies List */}
        <Box sx={{ p: 2 }}>
          <Typography
            variant="h6"
            sx={{
              mb: 3,
              color: "#bd8f59",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Business /> Milk Producer Companies
          </Typography>

          <List sx={{ p: 0 }}>
            {stateData.companies.map((company) => (
              <ListItem key={company.id} sx={{ p: 0, mb: 2 }}>
                <Card
                  sx={{
                    width: "100%",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                    },
                    border: "1px solid #f0f0f0",
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}
                    >
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          backgroundColor: "#bd8f59",
                          mt: 1,
                          mr: 2,
                          flexShrink: 0,
                        }}
                      />
                      <Box sx={{ flex: 1 }}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            color: "#333",
                            mb: 1,
                            fontSize: "1.1rem",
                          }}
                        >
                          {company.name}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            mb: 2,
                            gap: 0.5,
                          }}
                        >
                          <LocationOn sx={{ fontSize: 16, color: "#666" }} />
                          <Typography variant="body2" color="text.secondary">
                            {company.location}
                          </Typography>
                        </Box>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#666",
                            lineHeight: 1.6,
                            mb: 2,
                          }}
                        >
                          {company.description}
                        </Typography>
                        <Button
                          variant="contained"
                          endIcon={<ArrowForward />}
                          onClick={() => handleReadMore(company.id)}
                          sx={{
                            background:
                              "linear-gradient(135deg, #bd8f59 0%, #a46c35ff 100%)",
                            textTransform: "none",
                            borderRadius: "8px",
                            fontWeight: 500,
                            px: 3,
                            py: 1,
                            "&:hover": {
                              background:
                                "linear-gradient(135deg, #a46c35ff 0%, #8b5a2b 100%)",
                              transform: "translateY(-2px)",
                              boxShadow: "0 4px 12px rgba(189, 143, 89, 0.4)",
                            },
                            transition: "all 0.3s ease",
                          }}
                        >
                          Read More
                        </Button>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Fade>
  );
};

export default CompanyPanel;
