import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
  CircularProgress,
  Alert,
  IconButton,
} from "@mui/material";
import {
  Close as CloseIcon,
  Download as DownloadIcon,
  Fullscreen as FullscreenIcon,
} from "@mui/icons-material";
import { getFetch } from "../Api/Api";

const PublicationDocumentViewer = ({
  open,
  onClose,
  publication,
  selectedStatus,
}) => {
  const [documentUrl, setDocumentUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [iframeLoading, setIframeLoading] = useState(true);
  const [iframeError, setIframeError] = useState(false);

  useEffect(() => {
    if (open && publication) {
      fetchDocument();
    }
  }, [open, publication]);

  const fetchDocument = async () => {
    if (!publication) {
      setError("No publication data provided");
      return;
    }

    setLoading(true);
    setError("");
    setIframeLoading(true);
    setIframeError(false);

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Please login first. No authentication token found.");
        return;
      }

      // Determine which file to show based on publication type and document type
      let filePath = null;
      let fileName = "";

      if (selectedStatus === "Annual Reports") {
        // For Annual Reports, check documentType to show specific file
        if (publication.documentType === "hindi" && publication.pdfHindi) {
          filePath = publication.pdfHindi;
          fileName = "Hindi Annual Report";
        } else if (
          publication.documentType === "english" &&
          publication.pdfEnglish
        ) {
          filePath = publication.pdfEnglish;
          fileName = "English Annual Report";
        } else {
          // Fallback: prioritize Hindi over English
          if (publication.pdfHindi) {
            filePath = publication.pdfHindi;
            fileName = "Hindi Annual Report";
          } else if (publication.pdfEnglish) {
            filePath = publication.pdfEnglish;
            fileName = "English Annual Report";
          }
        }
      } else {
        // For HR Compliances and Policies
        if (publication.pdfFile) {
          filePath = publication.pdfFile;
          fileName = publication.title || "Publication Document";
        }
      }

      if (!filePath) {
        setError("No document available for this publication");
        return;
      }

      // Construct the document URL
      let documentUrl;

      // Check if filePath is already a full URL
      if (filePath.startsWith("http://") || filePath.startsWith("https://")) {
        documentUrl = filePath;
      } else {
        // Construct URL using the file path from backend
        documentUrl = `${import.meta.env.VITE_API_BASE_URL}/files${filePath}`;
      }

      // Try to test if the document is accessible, but don't fail if it's not
      try {
        const response = await getFetch(documentUrl);
        if (response && response.status === 200) {
        }
      } catch (apiError) {
        console.log("API check failed, but will try iframe:", apiError);
      }

      // Set the document URL regardless of API check result
      // The iframe will handle the actual loading
      setDocumentUrl(documentUrl);
    } catch (error) {
      console.error("Error setting up document:", error);
      setError("Failed to set up document viewer. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleIframeLoad = () => {
    setIframeLoading(false);
    setIframeError(false);
  };

  const handleIframeError = () => {
    setIframeLoading(false);
    setIframeError(true);
  };

  const handleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleClose = () => {
    setDocumentUrl("");
    setError("");
    setIsFullscreen(false);
    setIframeLoading(true);
    setIframeError(false);
    onClose();
  };

  const getDocumentTitle = () => {
    if (selectedStatus === "Annual Reports") {
      // For Annual Reports, show document name with language suffix
      const baseName =
        publication?.name || publication?.title || "Annual Report";
      if (publication?.documentType === "hindi") {
        return `${baseName} (Hindi)`;
      } else if (publication?.documentType === "english") {
        return `${baseName} (English)`;
      } else {
        // Fallback
        if (publication?.pdfHindi && publication?.pdfEnglish) {
          return `${baseName} (Hindi/English)`;
        } else if (publication?.pdfHindi) {
          return `${baseName} (Hindi)`;
        } else if (publication?.pdfEnglish) {
          return `${baseName} (English)`;
        }
      }
    }
    // For other publication types, show the actual document name
    return publication?.name || publication?.title || "Publication Document";
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth={isFullscreen ? "xl" : "lg"}
      fullWidth
      fullScreen={isFullscreen}
      PaperProps={{
        sx: {
          borderRadius: isFullscreen ? 0 : 2,
          height: isFullscreen ? "100vh" : "80vh",
          maxHeight: isFullscreen ? "100vh" : "80vh",
        },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          pr: 1,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, color: "white" }}>
            {getDocumentTitle()}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton
            onClick={handleFullscreen}
            sx={{ color: "white" }}
            size="small"
          >
            <FullscreenIcon />
          </IconButton>
          <IconButton
            onClick={handleClose}
            sx={{ color: "white" }}
            size="small"
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent sx={{ p: 0, position: "relative" }}>
        {loading && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <CircularProgress size={40} />
            <Typography variant="body2" color="text.secondary">
              Loading document...
            </Typography>
          </Box>
        )}

        {error && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              p: 3,
            }}
          >
            <Alert severity="error" sx={{ maxWidth: 400 }}>
              {error}
            </Alert>
          </Box>
        )}

        {!loading && !error && documentUrl && (
          <Box sx={{ height: "100%", width: "100%", position: "relative" }}>
            {iframeLoading && (
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(255,255,255,0.9)",
                  zIndex: 1,
                }}
              >
                <CircularProgress size={40} />
              </Box>
            )}

            {iframeError && (
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(255,255,255,0.9)",
                  zIndex: 1,
                }}
              >
                <Alert severity="error" sx={{ maxWidth: 400 }}>
                  Failed to load document. Please try downloading it instead.
                </Alert>
              </Box>
            )}

            <iframe
              src={`${documentUrl}#toolbar=0&navpanes=0&scrollbar=0`}
              onLoad={handleIframeLoad}
              onError={handleIframeError}
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                borderRadius: "0 0 8px 8px",
              }}
              title="Publication Document"
            />
          </Box>
        )}
      </DialogContent>

      {!loading && !error && documentUrl && (
        <DialogActions
          sx={{
            p: 2,
            background: (t) =>
              t.palette.mode === "dark"
                ? "rgba(255,255,255,0.05)"
                : "rgba(0,0,0,0.02)",
            borderTop: 1,
            borderColor: "divider",
          }}
        >
          <Button
            variant="contained"
            onClick={handleClose}
            sx={{
              borderRadius: 2,
              fontWeight: 600,
              textTransform: "none",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              "&:hover": {
                background: "linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)",
              },
            }}
          >
            Close
          </Button>
        </DialogActions>
      )}
    </Dialog>
  );
};

export default PublicationDocumentViewer;
