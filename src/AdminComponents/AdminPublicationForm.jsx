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
  Switch,
  FormControlLabel,
  Card,
} from "@mui/material";
import {
  CloudUpload as CloudUploadIcon,
  KeyboardBackspace as KeyboardBackspaceIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import { Slide } from "@mui/material";

const AdminPublicationForm = ({
  open,
  onClose,
  loading,
  formData,
  handleChange,
  handleFileChange,
  handleSubmit,
}) => {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  const renderFieldsByType = () => {
    switch (formData.publicationType) {
      case "HR Compliances":
        return (
          <React.Fragment>
            <Box sx={{ mb: 2 }}>
              <label style={{ color: "#1d2640", display: "block", marginBottom: "8px" }}>Compliances Title</label>
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                name="name"
                value={formData.name}
                onChange={handleChange}
                sx={{ backgroundColor: "white" }}
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <label style={{ color: "#1d2640", display: "block", marginBottom: "8px" }}>Description</label>
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
                accept=".jpg, .jpeg, .png"
                style={{ display: "none" }}
                id="thumbnail-upload"
                onChange={(e) => handleFileChange(e, "thumbnail")}
              />
              <label htmlFor="thumbnail-upload">
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
                    {formData.thumbnail
                      ? formData.thumbnail.name
                      : "Click to Upload Thumbnail (JPG, JPEG, PNG only)"}
                  </Typography>
                </Box>
              </label>
            </Box>
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
                id="document-upload"
                onChange={(e) => handleFileChange(e, "pdfFile")}
              />
              <label htmlFor="document-upload">
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
                    {formData.pdfFile
                      ? formData.pdfFile.name
                      : "Click to Upload Document (PDF only)"}
                  </Typography>
                </Box>
              </label>
            </Box>

            <Card sx={{
              pt: 2,
              pl: 2,
              pb: 0.5,
              mb: 2,
              backgroundColor: formData.isActive ? '#f0f7ff' : '#fff5f5',
              transition: 'background-color 0.3s ease'
            }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={formData.isActive}
                    onChange={(e) => handleChange({
                      target: {
                        name: 'isActive',
                        value: e.target.checked
                      }
                    })}
                    color="primary"
                    sx={{
                      '& .MuiSwitch-switchBase.Mui-checked': {
                        color: '#4786e6',
                      },
                      '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                        backgroundColor: '#4786e6',
                      },
                    }}
                  />
                }
                label={
                  <Typography
                    variant="body2"
                    sx={{
                      color: formData.isActive ? '#1565c0' : '#d32f2f',
                      fontWeight: 600
                    }}
                  >
                    {formData.isActive ? 'Active' : 'Inactive'}
                  </Typography>
                }
              />
            </Card>
          </React.Fragment>
        );

      case "Annual Reports":
        return (
          <React.Fragment>
            <Box sx={{ mb: 2 }}>
              <label style={{ color: "#1d2640", display: "block", marginBottom: "8px" }}>Reports Title</label>
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                name="name"
                value={formData.name}
                onChange={handleChange}
                sx={{ backgroundColor: "white" }}
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <label style={{ color: "#1d2640", display: "block", marginBottom: "8px" }}>
                Year of Annual Reports like (2024-2025)
              </label>
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                name="year"
                value={formData.year}
                onChange={handleChange}
                sx={{ backgroundColor: "white" }}
              />
            </Box>
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
                accept=".jpg, .jpeg, .png"
                style={{ display: "none" }}
                id="reports-thumbnail-upload"
                onChange={(e) => handleFileChange(e, "thumbnail")}
              />
              <label htmlFor="reports-thumbnail-upload">
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
                    {formData.thumbnail
                      ? formData.thumbnail.name
                      : "Click to Upload Thumbnail (JPG, JPEG, PNG only)"}
                  </Typography>
                </Box>
              </label>
            </Box>
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
                id="hindi-document-upload"
                onChange={(e) => handleFileChange(e, "pdfHindi")}
              />
              <label htmlFor="hindi-document-upload">
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
                    {formData.pdfHindi
                      ? formData.pdfHindi.name
                      : "Click to Upload Hindi Document (PDF only)"}
                  </Typography>
                </Box>
              </label>
            </Box>
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
                id="english-document-upload"
                onChange={(e) => handleFileChange(e, "pdfEnglish")}
              />
              <label htmlFor="english-document-upload">
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
                    {formData.pdfEnglish
                      ? formData.pdfEnglish.name
                      : "Click to Upload English Document (PDF only)"}
                  </Typography>
                </Box>
              </label>
            </Box>

            <Card sx={{
              pt: 2,
              pl: 2,
              pb: 0.5,
              mb: 2,
              backgroundColor: formData.isActive ? '#f0f7ff' : '#fff5f5',
              transition: 'background-color 0.3s ease'
            }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={formData.isActive}
                    onChange={(e) => handleChange({
                      target: {
                        name: 'isActive',
                        value: e.target.checked
                      }
                    })}
                    color="primary"
                    sx={{
                      '& .MuiSwitch-switchBase.Mui-checked': {
                        color: '#4786e6',
                      },
                      '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                        backgroundColor: '#4786e6',
                      },
                    }}
                  />
                }
                label={
                  <Typography
                    variant="body2"
                    sx={{
                      color: formData.isActive ? '#1565c0' : '#d32f2f',
                      fontWeight: 600
                    }}
                  >
                    {formData.isActive ? 'Active' : 'Inactive'}
                  </Typography>
                }
              />
            </Card>
          </React.Fragment>
        );

      case "Policies":
        return (
          <React.Fragment>
            <Box sx={{ mb: 2 }}>
              <label style={{ color: "#1d2640", display: "block", marginBottom: "8px" }}>Policy Title</label>
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                name="name"
                value={formData.name}
                onChange={handleChange}
                sx={{ backgroundColor: "white" }}
              />
            </Box>
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
                id="policy-document-upload"
                onChange={(e) => handleFileChange(e, "pdfFile")}
              />
              <label htmlFor="policy-document-upload">
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
                    {formData.pdfFile
                      ? formData.pdfFile.name
                      : "Click to Upload Policy Document (PDF only)"}
                  </Typography>
                </Box>
              </label>
            </Box>

            <Card sx={{
              pt: 2,
              pl: 2,
              pb: 0.5,
              mb: 2,
              backgroundColor: formData.isActive ? '#f0f7ff' : '#fff5f5',
              transition: 'background-color 0.3s ease'
            }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={formData.isActive}
                    onChange={(e) => handleChange({
                      target: {
                        name: 'isActive',
                        value: e.target.checked
                      }
                    })}
                    color="primary"
                    sx={{
                      '& .MuiSwitch-switchBase.Mui-checked': {
                        color: '#4786e6',
                      },
                      '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                        backgroundColor: '#4786e6',
                      },
                    }}
                  />
                }
                label={
                  <Typography
                    variant="body2"
                    sx={{
                      color: formData.isActive ? '#1565c0' : '#d32f2f',
                      fontWeight: 600
                    }}
                  >
                    {formData.isActive ? 'Active' : 'Inactive'}
                  </Typography>
                }
              />
            </Card>
          </React.Fragment>
        );

      default:
        return null;
    }
  };

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
            Publication Form
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
            <label style={{ color: "#1d2640", display: "block", marginBottom: "8px" }}>Publication Type</label>
            <TextField
              select
              fullWidth
              size="small"
              name="publicationType"
              value={formData.publicationType}
              onChange={handleChange}
              sx={{ backgroundColor: "white" }}
            >
              <MenuItem value="HR Compliances">HR Compliances</MenuItem>
              <MenuItem value="Annual Reports">Annual Reports</MenuItem>
              <MenuItem value="Policies">Policies</MenuItem>
            </TextField>
          </Box>
          {/* Conditional Fields Based on Publication Type */}
          {renderFieldsByType()}

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
          {loading ? "Creating..." : "Create Publication"}
        </Button>
      </DialogActions>
    </Drawer>
  );
};

export default AdminPublicationForm;
