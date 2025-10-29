import React from "react";
import {
  Drawer,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  MenuItem,
  useMediaQuery,
  Backdrop,
  CircularProgress,
  DialogContent,
  DialogActions,
} from "@mui/material";
import {
  CloudUpload as CloudUploadIcon,
  KeyboardBackspace as KeyboardBackspaceIcon,
  Close as CloseIcon,
  CalendarToday as CalendarTodayIcon,
} from "@mui/icons-material";

const AdminTenderForm = ({
  open,
  onClose,
  loading,
  formData,
  handleChange,
  handleFileChange,
  handleSubmit,
  isEditMode = false,
}) => {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  return (
    <Drawer
      anchor={isLargeScreen ? "right" : "bottom"}
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDrawer-paper": {
          width: { xs: "90%", sm: "70%", md: "30%", lg: "22%" },
          height: { xs: "auto", md: "100vh" },
          maxHeight: { xs: "90vh", md: "100vh" },
          boxShadow: 4,
          borderRadius: { xs: "16px 16px 0 0", md: 0 },
          backgroundColor: "#ffffff",
          margin: "auto",
          bottom: 0,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      {loading && (
        <Backdrop
          open={loading}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress size={60} />
        </Backdrop>
      )}

      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 3,
          borderBottom: "1px solid #e0e0e0",
          flexShrink: 0,
          position: "sticky",
          top: 0,
          backgroundColor: "#ffffff",
          zIndex: 1,
        }}
      >
        <Box
          sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          onClick={onClose}
        >
          <KeyboardBackspaceIcon sx={{ mr: 2 }} />
          <Typography variant="h6" fontWeight="bold" sx={{ color: "#141d38" }}>
            {isEditMode ? "Edit Tender" : "Add New Tender"}
          </Typography>
        </Box>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      <DialogContent
        sx={{
          overflowY: "auto",
          flex: 1,
          paddingTop: 2,
          paddingBottom: 2,
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#f1f1f1",
            borderRadius: "3px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#c1c1c1",
            borderRadius: "3px",
            "&:hover": {
              background: "#a8a8a8",
            },
          },
        }}
      >
        <form onSubmit={(e) => e.preventDefault()}>
          <Box sx={{ mb: 2 }}>
            <label
              style={{
                color: "#1d2640",
                display: "block",
                marginBottom: "8px",
              }}
            >
              Tender Title
            </label>
            <TextField
              fullWidth
              size="small"
              variant="outlined"
              name="tenderTitle"
              value={formData.tenderTitle}
              onChange={handleChange}
              sx={{ backgroundColor: "white" }}
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <label
              style={{
                color: "#1d2640",
                display: "block",
                marginBottom: "8px",
              }}
            >
              Reference Number
            </label>
            <TextField
              fullWidth
              size="small"
              variant="outlined"
              name="referenceNo"
              value={formData.referenceNo}
              onChange={handleChange}
              sx={{ backgroundColor: "white" }}
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <label
              style={{
                color: "#1d2640",
                display: "block",
                marginBottom: "8px",
              }}
            >
              Description
            </label>
            <TextField
              fullWidth
              multiline
              variant="outlined"
              placeholder="Write a message..."
              name="description"
              value={formData.description}
              onChange={handleChange}
              sx={{
                "& .MuiOutlinedInput-root": { borderRadius: "10px" },
              }}
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <label
              style={{
                color: "#1d2640",
                display: "block",
                marginBottom: "8px",
              }}
            >
              Start Date
            </label>
            <TextField
              fullWidth
              size="small"
              type="date"
              variant="outlined"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              sx={{
                backgroundColor: "white",
                "& .MuiInputBase-input": {
                  height: "40px",
                },
              }}
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                endAdornment: (
                  <CalendarTodayIcon
                    sx={{
                      color: "#666",
                      fontSize: 20,
                      mr: 1,
                    }}
                  />
                ),
              }}
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <label
              style={{
                color: "#1d2640",
                display: "block",
                marginBottom: "8px",
              }}
            >
              Estimated Value
            </label>
            <TextField
              fullWidth
              size="small"
              variant="outlined"
              name="estimatedValues"
              value={formData.estimatedValues}
              onChange={handleChange}
              placeholder="e.g. $2,500,000"
              sx={{ backgroundColor: "white" }}
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <label
              style={{
                color: "#1d2640",
                display: "block",
                marginBottom: "8px",
              }}
            >
              Location
            </label>
            <TextField
              fullWidth
              size="small"
              variant="outlined"
              name="location"
              value={formData.location}
              onChange={handleChange}
              sx={{ backgroundColor: "white" }}
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <label
              style={{
                color: "#1d2640",
                display: "block",
                marginBottom: "8px",
              }}
            >
              Pre-Bid Meeting
            </label>
            <TextField
              fullWidth
              size="small"
              type="datetime-local"
              variant="outlined"
              name="preBidMeeting"
              value={formData.preBidMeeting}
              onChange={handleChange}
              sx={{ backgroundColor: "white" }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <label
              style={{
                color: "#1d2640",
                display: "block",
                marginBottom: "8px",
              }}
            >
              Last Date of Submission
            </label>
            <TextField
              fullWidth
              size="small"
              type="datetime-local"
              variant="outlined"
              name="lastDateSubmission"
              value={formData.lastDateSubmission}
              onChange={handleChange}
              sx={{ backgroundColor: "white" }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <label
              style={{
                color: "#1d2640",
                display: "block",
                marginBottom: "8px",
              }}
            >
              Bid Opening
            </label>
            <TextField
              fullWidth
              size="small"
              type="datetime-local"
              variant="outlined"
              name="bidOpening"
              value={formData.bidOpening}
              onChange={handleChange}
              sx={{ backgroundColor: "white" }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <label
              style={{
                color: "#1d2640",
                display: "block",
                marginBottom: "8px",
              }}
            >
              Corrigendum Status
            </label>
            <TextField
              select
              fullWidth
              size="small"
              name="corrigendum"
              value={formData.corrigendum}
              onChange={handleChange}
              sx={{ backgroundColor: "white" }}
            >
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Inactive">Inactive</MenuItem>
            </TextField>
          </Box>

          <Box sx={{ mb: 2 }}>
            <label
              style={{
                color: "#1d2640",
                display: "block",
                marginBottom: "8px",
              }}
            >
              Tender Card Status
            </label>
            <TextField
              select
              fullWidth
              size="small"
              name="tenderCard"
              value={formData.tenderCard}
              onChange={handleChange}
              sx={{ backgroundColor: "white" }}
            >
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Inactive">Inactive</MenuItem>
            </TextField>
          </Box>

          {/* Tender Document Upload */}
          <Box
            sx={{
              border: "2px dashed #86abe4",
              borderRadius: "8px",
              padding: "20px",
              textAlign: "center",
              cursor: "pointer",
              mb: 2,
              "&:hover": { backgroundColor: "#e1eaff" },
            }}
          >
            <input
              type="file"
              accept=".pdf"
              style={{ display: "none" }}
              id="tender-file-upload"
              onChange={(e) => handleFileChange(e, "tenderFile")}
            />
            <label htmlFor="tender-file-upload">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <CloudUploadIcon color="primary" fontSize="large" />
                <Typography color="gray">
                  {formData.tenderFile
                    ? formData.tenderFile.name
                    : formData.tenderFileName
                    ? formData.tenderFileName
                    : "Click to Upload Tender Document (PDF only)"}
                </Typography>
              </Box>
            </label>
          </Box>

          {/* Corrigendum Document Upload - Only show when Corrigendum status is Active */}
          {formData.corrigendum === "Active" && (
            <Box
              sx={{
                border: "2px dashed #86abe4",
                borderRadius: "8px",
                padding: "20px",
                textAlign: "center",
                cursor: "pointer",
                mb: 2,
                "&:hover": { backgroundColor: "#e1eaff" },
              }}
            >
              <input
                type="file"
                accept=".pdf"
                style={{ display: "none" }}
                id="corrigendum-file-upload"
                onChange={(e) => handleFileChange(e, "corrigendumFile")}
              />
              <label htmlFor="corrigendum-file-upload">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <CloudUploadIcon color="primary" fontSize="large" />
                  <Typography color="gray">
                    {formData.corrigendumFile
                      ? formData.corrigendumFile.name
                      : formData.corrigendumFileName
                      ? formData.corrigendumFileName
                      : "Click to Upload Corrigendum Document (PDF only)"}
                  </Typography>
                </Box>
              </label>
            </Box>
          )}

          {/* Bottom spacing to prevent cut-off */}
          <Box sx={{ height: "20px" }} />
        </form>
      </DialogContent>

      <DialogActions
        sx={{
          justifyContent: "center",
          pb: 2,
          pt: 2,
          flexShrink: 0,
          borderTop: "1px solid #e0e0e0",
          backgroundColor: "#ffffff",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            maxWidth: "310px",
            fontWeight: "bold",
            p: 1.5,
            borderRadius: "10px",
            backgroundColor: "#4786e6",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            boxShadow: "0 8px 25px rgba(102, 126, 234, 0.3)",
            "&:hover": {
              background: "linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)",
              boxShadow: "0 12px 35px rgba(102, 126, 234, 0.4)",
            },
          }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleSubmit();
          }}
          disabled={loading}
        >
          {loading
            ? isEditMode
              ? "Updating..."
              : "Creating..."
            : isEditMode
            ? "Update Tender"
            : "Create Tender"}
        </Button>
      </DialogActions>
    </Drawer>
  );
};

export default AdminTenderForm;
