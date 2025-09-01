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

const DocumentViewerDialog = ({
  open,
  onClose,
  tender,
  documentType = "tender",
}) => {
  console.log(tender, "=tenderdaskjfhskdjf");
  console.log("Document type:", documentType);
  const [documentUrl, setDocumentUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [iframeLoading, setIframeLoading] = useState(true);
  const [iframeError, setIframeError] = useState(false);

  useEffect(() => {
    if (open && tender) {
      fetchDocument();
    }
  }, [open, tender, documentType]);

  const fetchDocument = async () => {
    console.log("=== FETCH DOCUMENT CALLED ===");
    console.log("Tender object:", tender);
    console.log("Document type:", documentType);

    if (!tender) {
      setError("No tender data provided");
      return;
    }

    // Determine which document to show based on documentType
    let filePath, fileName;

    if (documentType === "corrigendum") {
      filePath = tender.CorrigendumFilePath;
      fileName = tender.CorrigendumFileName;
      console.log("Corrigendum file path:", filePath);
      console.log("Corrigendum file name:", fileName);
    } else {
      // Default to tender document
      filePath = tender.tenderFilePath || tender.tenderFile;
      fileName = tender.tenderFileName;
      console.log("Tender file path:", filePath);
      console.log("Tender file name:", fileName);
    }

    if (!filePath) {
      const docType = documentType === "corrigendum" ? "corrigendum" : "tender";
      console.log(`No ${docType} file path found in tender object`);
      setError(`No ${docType} document available for this tender`);
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

      // Construct the document URL based on the file path
      let documentUrl;

      // Check if filePath is already a full URL
      if (filePath.startsWith("http://") || filePath.startsWith("https://")) {
        documentUrl = filePath;
      } else {
        // Construct URL using the file path from backend
        documentUrl = `${import.meta.env.VITE_API_BASE_URL}/files${filePath}`;
      }

      console.log("Constructed Document URL:", documentUrl);

      // Try to test if the document is accessible, but don't fail if it's not
      try {
        const response = await getFetch(documentUrl);
        if (response && response.status === 200) {
          console.log("Document is accessible via API");
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
            {documentType === "corrigendum"
              ? tender?.CorrigendumFileName || "Corrigendum Document"
              : tender?.tenderFileName || "Tender Document"}
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
              title="Tender Document"
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

export default DocumentViewerDialog;
