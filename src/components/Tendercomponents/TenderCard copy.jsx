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
} from "@mui/material";
import { Business } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";

const getStatusColor = (status) => {
  switch (status) {
    case "Active":
      return { color: "green", bgcolor: "#d4edda" };
    case "Closing Soon":
      return { color: "orange", bgcolor: "#fff3cd" };
    case "Upcoming":
      return { color: "blue", bgcolor: "#cce5ff" };
    default:
      return { color: "grey", bgcolor: "#e2e3e5" };
  }
};

const TenderCard = ({
  tender,
  onViewDetails,
  onDownloadDocuments,
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
                <Business sx={{ fontSize: 16 }} /> {tender.location} • TND-
                {tender.id.padStart(4, "0")}-001
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <Chip
                label={tender.status}
                size="small"
                sx={{
                  ...getStatusColor(tender.status),
                  fontWeight: 600,
                  fontSize: "0.75rem",
                  height: 24,
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
            <Box sx={{ mt: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle2">Start Date:</Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    {tender.startDate}
                  </Typography>
                  <Typography variant="subtitle2">End Date:</Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    {tender.endDate}
                  </Typography>
                  <Typography variant="subtitle2">
                    Last Date to Apply:
                  </Typography>
                  <Typography variant="body2">{tender.lastDate}</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle2">Category:</Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    {tender.category}
                  </Typography>
                  <Typography variant="subtitle2">Estimated Value:</Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    {tender.estimatedValue}
                  </Typography>
                  <Typography variant="subtitle2">Participants:</Typography>
                  <Typography variant="body2">{tender.participants}</Typography>
                </Grid>
              </Grid>

              <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
                <Button
                  variant="contained"
                  onClick={() => onViewDetails(tender)}
                  sx={{
                    backgroundColor: "#bd8f59",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#a46c35",
                    },
                  }}
                >
                  View Details
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => onDownloadDocuments(tender)}
                  sx={{
                    borderColor: "#bd8f59",
                    color: "#bd8f59",
                    "&:hover": {
                      backgroundColor: "#f5f1ec",
                      borderColor: "#a46c35",
                      color: "#a46c35",
                    },
                  }}
                >
                  Download Documents ({tender.documentsCount})
                </Button>
              </Box>
            </Box>
          </Collapse>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TenderCard;
