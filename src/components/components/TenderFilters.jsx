import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  ToggleButton,
  ToggleButtonGroup,
  Paper,
  InputAdornment,
  Typography,
} from "@mui/material";
import {
  Search,
  ViewModule,
  ViewList,
  FilterList,
  GridView,
  Tune,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const TenderFilters = ({
  searchTerm,
  setSearchTerm,
  category,
  setCategory,
  status,
  setStatus,
  viewMode,
  setViewMode,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Paper
        sx={{
          p: 4,
          mb: 6,
          background:
            "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 249, 250, 0.9) 100%)",
          border: "2px solid rgba(189, 143, 89, 0.1)",
          borderRadius: 1,
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Header */}
        <Box sx={{ mb: 3, display: "flex", alignItems: "center", gap: 1 }}>
          <Tune sx={{ color: "#bd8f59", fontSize: 24 }} />
          <Typography variant="h6" sx={{ color: "#a46c35", fontWeight: 600 }}>
            Filter & Search
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 4,
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {/* Left side - Search and Filters */}
          <Box
            sx={{
              display: "flex",
              gap: 3,
              alignItems: "center",
              flex: 1,
              flexWrap: "wrap",
            }}
          >
            <TextField
              placeholder="Search tenders by title or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              size="medium"
              sx={{
                minWidth: 320,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(189, 143, 89, 0.2)",
                  "& fieldset": {
                    borderColor: "rgba(189, 143, 89, 0.2)",
                  },
                  "&:hover fieldset": {
                    borderColor: "#bd8f59",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#bd8f59",
                  },
                },
                "& .MuiInputBase-input": {
                  fontSize: "1rem",
                  padding: "12px 16px",
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search sx={{ fontSize: 22, color: "#bd8f59" }} />
                  </InputAdornment>
                ),
              }}
            />

            <FormControl sx={{ minWidth: 180 }}>
              <InputLabel size="medium">All Categories</InputLabel>
              <Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                label="All Categories"
                size="medium"
                sx={{
                  borderRadius: 1,
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(189, 143, 89, 0.2)",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(189, 143, 89, 0.2)",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#bd8f59",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#bd8f59",
                  },
                  "& .MuiSelect-select": {
                    fontSize: "1rem",
                    padding: "12px 16px",
                  },
                }}
              >
                <MenuItem value="">All Categories</MenuItem>
                <MenuItem value="Technology">Technology</MenuItem>
                <MenuItem value="Construction">Construction</MenuItem>
                <MenuItem value="Energy">Energy</MenuItem>
                <MenuItem value="Transportation">Transportation</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ minWidth: 160 }}>
              <InputLabel size="medium">All Status</InputLabel>
              <Select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                label="All Status"
                size="medium"
                sx={{
                  borderRadius: 1,
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(189, 143, 89, 0.2)",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(189, 143, 89, 0.2)",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#bd8f59",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#bd8f59",
                  },
                  "& .MuiSelect-select": {
                    fontSize: "1rem",
                    padding: "12px 16px",
                  },
                }}
              >
                <MenuItem value="">All Status</MenuItem>
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Closing Soon">Closing Soon</MenuItem>
                <MenuItem value="Upcoming">Upcoming</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Right side - View Mode Toggle */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="body2" sx={{ color: "#666", fontWeight: 500 }}>
              View Mode:
            </Typography>
            <ToggleButtonGroup
              value={viewMode}
              exclusive
              onChange={(_, newMode) => {
                if (newMode !== null) {
                  setViewMode(newMode);
                }
              }}
              size="medium"
              sx={{
                "& .MuiToggleButton-root": {
                  border: "1px solid rgba(189, 143, 89, 0.3)",
                  borderRadius: 1,
                  color: "#666",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(10px)",
                  minWidth: 48,
                  height: 48,
                  ml: 1,
                  "&:hover": {
                    backgroundColor: "rgba(189, 143, 89, 0.1)",
                    borderColor: "#bd8f59",
                    color: "#bd8f59",
                  },
                  "&.Mui-selected": {
                    backgroundColor: "#bd8f59",
                    color: "white",
                    borderColor: "#bd8f59",
                    "&:hover": {
                      backgroundColor: "#a46c35",
                      borderColor: "#a46c35",
                    },
                  },
                },
              }}
            >
              <ToggleButton value="list" aria-label="list view">
                <ViewList sx={{ fontSize: 20 }} />
              </ToggleButton>
              <ToggleButton value="grid" aria-label="grid view">
                <GridView sx={{ fontSize: 20 }} />
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Box>
      </Paper>
    </motion.div>
  );
};

TenderFilters.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  setStatus: PropTypes.func.isRequired,
  viewMode: PropTypes.oneOf(["grid", "list"]).isRequired,
  setViewMode: PropTypes.func.isRequired,
};

export default TenderFilters;
