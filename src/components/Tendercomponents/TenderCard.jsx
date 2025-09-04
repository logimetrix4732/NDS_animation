import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Collapse,
  IconButton,
  Grid,
  Button,
  Divider,
} from "@mui/material";
import { Business, Download, People, Visibility } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";

const getStatusColor = (status) => {
  switch (status) {
    case "Active":
      return {
        bgcolor: "#e8f5e8",
        color: "#2e7d32",
        border: "1px solid #c8e6c9",
      };
    case "Closing Soon":
      return {
        bgcolor: "#fff3e0",
        color: "#f57c00",
        border: "1px solid #ffcc02",
      };
    case "Upcoming":
      return {
        bgcolor: "#e3f2fd",
        color: "#1976d2",
        border: "1px solid #90caf9",
      };
    default:
      return {
        bgcolor: "#f5f5f5",
        color: "#616161",
        border: "1px solid #e0e0e0",
      };
  }
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};

const formatTime = (dateString) => {
  const date = new Date(dateString + "T10:00:00");
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
};
const TenderCard = ({
  tender,
  onViewDetails,
  onDownloadDocuments,
  onViewCorrigendum,
  index,
  isOpen,
  onToggle,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -2 }}
    >
      <Card
        onClick={onToggle}
        sx={{
          height: "100%",
          border: "1px solid #e0e0e0",
          backgroundColor: "#f9f7f1",
          borderRadius: 1.5,
          boxShadow: "none",
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
            borderColor: "#bd8f59",
            cursor: "pointer",
          },
        }}
      >
        <CardContent sx={{ p: 3, display: "flex", flexDirection: "column" }}>
          {/* Header */}
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {tender.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "#666" }}>
                <Business sx={{ fontSize: 16 }} /> {tender.location} •{" "}
                {tender.referenceNo ||
                  `TND-${String(tender.id).padStart(4, "0")}-001`}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <Chip
                label={tender.status}
                size="small"
                sx={{
                  ...getStatusColor(tender.status),
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  height: 30,
                  width: 100,
                }}
              />
              <IconButton onClick={onToggle} size="small">
                <ExpandMoreIcon
                  sx={{
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "0.3s",
                  }}
                />
              </IconButton>
            </Box>
          </Box>

          {/* Description */}
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {tender.description}
          </Typography>

          {/* Accordion Content */}
          <Collapse in={isOpen}>
            {/* Two Column Layout */}
            <Box sx={{ flex: 1, mb: 3 }}>
              <Grid container spacing={3}>
                {/* Left Column - Tender Details */}
                <Grid item xs={12} md={6} sx={{ pr: { md: 50 } }}>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 600, mb: 1.5, color: "#333" }}
                  >
                    Tender Details
                  </Typography>
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        Start Date:
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {formatDate(tender.startDate)}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        Estimated Value:
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {tender.estimatedValue}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        Location:
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {tender.location}
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      mt: 2,
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <People sx={{ fontSize: 16, color: "#bd8f59" }} />
                    <Typography variant="body2" color="text.secondary">
                      {tender.participants} Participants
                    </Typography>
                  </Box>
                </Grid>

                {/* Right Column - Important Dates */}
                <Grid item xs={12} md={6}>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 600, mb: 1.5, color: "#333" }}
                  >
                    Important Dates
                  </Typography>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                  >
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        Pre Bid Meeting:
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 500, color: "#f57c00" }}
                      >
                        {formatDate(tender.startDate)}{" "}
                        {formatTime(tender.startDate)}
                      </Typography>
                    </Box>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        Last Date Submission:
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 500, color: "#f57c00" }}
                      >
                        {formatDate(tender.endDate)} 17:00
                      </Typography>
                    </Box>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        Bid Opening:
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {formatDate(tender.endDate)} 18:00
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
          <Divider sx={{ mb: 2 }} />

          {/* Action Buttons */}
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Button
              variant="contained"
              size="small"
              startIcon={<Visibility sx={{ fontSize: 16 }} />}
              onClick={(e) => onViewDetails(tender, e)}
              sx={{
                bgcolor: "#bd8f59",
                "&:hover": { bgcolor: "#a46c35" },
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 500,
                px: 2,
                py: 0.75,
                color: "#fff",
              }}
            >
              View Details
            </Button>
            <Button
              variant="outlined"
              size="small"
              startIcon={<Download sx={{ fontSize: 16 }} />}
              onClick={(e) => onDownloadDocuments(tender, e)}
              sx={{
                borderColor: "#bd8f59",
                color: "#bd8f59",
                "&:hover": {
                  borderColor: "#a46c35",
                  bgcolor: "rgba(189, 143, 89, 0.08)",
                },
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 500,
                px: 2,
                py: 0.75,
              }}
            >
              Download Documents
            </Button>
            {/* Corrigendum Button - Only show if corrigendum is Active */}
            {tender.corrigendum === "Active" && tender.CorrigendumFilePath && (
              <Button
                variant="outlined"
                size="small"
                startIcon={<Visibility sx={{ fontSize: 16 }} />}
                onClick={(e) =>
                  onViewCorrigendum && onViewCorrigendum(tender, e)
                }
                sx={{
                  borderColor: "#ff6b35",
                  color: "#ff6b35",
                  "&:hover": {
                    borderColor: "#e55a2b",
                    bgcolor: "rgba(255, 107, 53, 0.08)",
                  },
                  borderRadius: 2,
                  textTransform: "none",
                  fontWeight: 500,
                  px: 2,
                  py: 0.75,
                }}
              >
                View Corrigendum
              </Button>
            )}
            <Typography
              variant="caption"
              sx={{
                alignSelf: "center",
                ml: "auto",
                color: "#666",
                fontSize: "0.75rem",
              }}
            >
              {tender.documentsCount} Documents Available
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TenderCard;
