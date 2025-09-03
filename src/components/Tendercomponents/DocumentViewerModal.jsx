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
  Chip,
  Tooltip,
  useMediaQuery,
  useTheme,
  Fade,
  Zoom,
} from "@mui/material";
import {
  Close as CloseIcon,
  Download as DownloadIcon,
  Fullscreen as FullscreenIcon,
  FullscreenExit as FullscreenExitIcon,
  PictureAsPdf as PdfIcon,
  Description as DocIcon,
  Image as ImageIcon,
  FileCopy as FileIcon,
  ZoomIn as ZoomInIcon,
  ZoomOut as ZoomOutIcon,
  RotateRight as RotateIcon,
} from "@mui/icons-material";

const DocumentViewerModal = ({
  open,
  onClose,
  tender,
  documentType = "tender",
}) => {
  const [documentUrl, setDocumentUrl] = useState("");
  const [fallbackUrl, setFallbackUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [iframeLoading, setIframeLoading] = useState(true);
  const [iframeError, setIframeError] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [rotation, setRotation] = useState(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (open && tender) {
      fetchDocument();
    }
  }, [open, tender, documentType]);

  const fetchDocument = async () => {
    if (!tender) {
      setError("No tender data provided");
      return;
    }

    // Determine which document to show based on documentType
    let filePath, fileName;

    if (documentType === "corrigendum") {
      filePath = tender.CorrigendumFilePath;
      fileName = tender.CorrigendumFileName;
    } else {
      // Default to tender document
      filePath = tender.tenderFilePath || tender.tenderFile;
      fileName = tender.tenderFileName;
    }

    if (!filePath) {
      const docType = documentType === "corrigendum" ? "corrigendum" : "tender";
      setError(`No ${docType} document available for this tender`);
      return;
    }

    setLoading(true);
    setError("");
    setIframeLoading(true);
    setIframeError(false);

    try {
      // Construct the document URL based on the file path
      let docUrl;

      // Check if filePath is already a full URL
      if (filePath.startsWith("http://") || filePath.startsWith("https://")) {
        docUrl = filePath;
      } else {
        // Construct URL using the file path from backend
        docUrl = `${import.meta.env.VITE_API_BASE_URL}/files${filePath}`;
      }

      console.log("Document URL constructed:", docUrl);
      console.log("Original filePath:", filePath);

      // First try the direct URL
      console.log("Setting document URL to:", docUrl);
      setDocumentUrl(docUrl);

      // Prepare Google Docs Viewer as fallback for PDFs
      if (fileName && fileName.toLowerCase().endsWith(".pdf")) {
        const googleDocsUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(
          docUrl
        )}&embedded=true`;
        console.log("Google Docs fallback URL prepared:", googleDocsUrl);
        setFallbackUrl(googleDocsUrl);
      }
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

    // Try Google Docs Viewer as fallback if available and not already using it
    if (fallbackUrl && !documentUrl.includes("docs.google.com")) {
      console.log(
        "Direct file failed, trying Google Docs Viewer:",
        fallbackUrl
      );
      setDocumentUrl(fallbackUrl);
      setIframeLoading(true);
      setIframeError(false);
    }
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
    setZoomLevel(100);
    setRotation(0);
    onClose();
  };

  const handleDownloadDocument = () => {
    let filePath, fileName;

    if (documentType === "corrigendum") {
      filePath = tender.CorrigendumFilePath;
      fileName = tender.CorrigendumFileName;
    } else {
      filePath = tender.tenderFilePath || tender.tenderFile;
      fileName = tender.tenderFileName;
    }

    if (filePath) {
      let downloadUrl;
      if (filePath.startsWith("http://") || filePath.startsWith("https://")) {
        downloadUrl = filePath;
      } else {
        downloadUrl = `${import.meta.env.VITE_API_BASE_URL}/files${filePath}`;
      }

      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = fileName || "document";
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const getFileIcon = (fileName) => {
    if (!fileName) return <FileIcon />;

    const extension = fileName.toLowerCase().split(".").pop();
    switch (extension) {
      case "pdf":
        return <PdfIcon />;
      case "doc":
      case "docx":
        return <DocIcon />;
      case "jpg":
      case "jpeg":
      case "png":
      case "gif":
        return <ImageIcon />;
      default:
        return <FileIcon />;
    }
  };

  const getFileTypeColor = (fileName) => {
    if (!fileName) return "default";

    const extension = fileName.toLowerCase().split(".").pop();
    switch (extension) {
      case "pdf":
        return "error";
      case "doc":
      case "docx":
        return "primary";
      case "jpg":
      case "jpeg":
      case "png":
      case "gif":
        return "success";
      default:
        return "default";
    }
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 25, 200));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 25, 50));
  };

  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  const resetView = () => {
    setZoomLevel(100);
    setRotation(0);
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
          borderRadius: isFullscreen ? 0 : 3,
          height: isFullscreen ? "100vh" : "85vh",
          maxHeight: isFullscreen ? "100vh" : "85vh",
          background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
          boxShadow: isFullscreen
            ? "none"
            : "0 20px 60px rgba(0,0,0,0.15), 0 8px 25px rgba(0,0,0,0.1)",
        },
      }}
      TransitionComponent={Zoom}
      transitionDuration={300}
    >
      {/* Enhanced Header */}
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          pr: 1,
          py: 2,
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.1) 100%)",
            animation: "shimmer 2s infinite",
          },
          "@keyframes shimmer": {
            "0%": { transform: "translateX(-100%)" },
            "100%": { transform: "translateX(100%)" },
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, zIndex: 1 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 48,
              height: 48,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.2)",
              backdropFilter: "blur(10px)",
            }}
          >
            {getFileIcon(
              documentType === "corrigendum"
                ? tender?.CorrigendumFileName
                : tender?.tenderFileName
            )}
          </Box>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, color: "white" }}>
              {documentType === "corrigendum"
                ? tender?.CorrigendumFileName || "Corrigendum Document"
                : tender?.tenderFileName || "Tender Document"}
            </Typography>
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 1, mt: 0.5 }}
            >
              <Chip
                label={
                  documentType === "corrigendum" ? "Corrigendum" : "Tender"
                }
                size="small"
                sx={{
                  background: "rgba(255,255,255,0.2)",
                  color: "white",
                  fontWeight: 600,
                  fontSize: "0.75rem",
                }}
              />
              <Chip
                icon={getFileIcon(
                  documentType === "corrigendum"
                    ? tender?.CorrigendumFileName
                    : tender?.tenderFileName
                )}
                label={
                  documentType === "corrigendum"
                    ? tender?.CorrigendumFileName?.split(".")
                        .pop()
                        ?.toUpperCase() || "FILE"
                    : tender?.tenderFileName?.split(".").pop()?.toUpperCase() ||
                      "FILE"
                }
                size="small"
                color={getFileTypeColor(
                  documentType === "corrigendum"
                    ? tender?.CorrigendumFileName
                    : tender?.tenderFileName
                )}
                sx={{ fontWeight: 600, fontSize: "0.75rem" }}
              />
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1, zIndex: 1 }}>
          {/* View Controls */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mr: 1 }}>
            <Tooltip title="Zoom Out">
              <IconButton
                onClick={handleZoomOut}
                disabled={zoomLevel <= 50}
                sx={{
                  color: "white",
                  background: "rgba(255,255,255,0.1)",
                  "&:hover": { background: "rgba(255,255,255,0.2)" },
                  "&:disabled": { opacity: 0.5 },
                }}
                size="small"
              >
                <ZoomOutIcon fontSize="small" />
              </IconButton>
            </Tooltip>

            <Typography
              variant="caption"
              sx={{
                color: "white",
                fontWeight: 600,
                minWidth: 45,
                textAlign: "center",
              }}
            >
              {zoomLevel}%
            </Typography>

            <Tooltip title="Zoom In">
              <IconButton
                onClick={handleZoomIn}
                disabled={zoomLevel >= 200}
                sx={{
                  color: "white",
                  background: "rgba(255,255,255,0.1)",
                  "&:hover": { background: "rgba(255,255,255,0.2)" },
                  "&:disabled": { opacity: 0.5 },
                }}
                size="small"
              >
                <ZoomInIcon fontSize="small" />
              </IconButton>
            </Tooltip>

            <Tooltip title="Rotate">
              <IconButton
                onClick={handleRotate}
                sx={{
                  color: "white",
                  background: "rgba(255,255,255,0.1)",
                  "&:hover": { background: "rgba(255,255,255,0.2)" },
                }}
                size="small"
              >
                <RotateIcon fontSize="small" />
              </IconButton>
            </Tooltip>

            <Tooltip title="Reset View">
              <IconButton
                onClick={resetView}
                sx={{
                  color: "white",
                  background: "rgba(255,255,255,0.1)",
                  "&:hover": { background: "rgba(255,255,255,0.2)" },
                }}
                size="small"
              >
                <Typography variant="caption" sx={{ fontWeight: 700 }}>
                  ↺
                </Typography>
              </IconButton>
            </Tooltip>
          </Box>

          <Tooltip title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}>
            <IconButton
              onClick={handleFullscreen}
              sx={{
                color: "white",
                background: "rgba(255,255,255,0.1)",
                "&:hover": { background: "rgba(255,255,255,0.2)" },
              }}
              size="small"
            >
              {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
            </IconButton>
          </Tooltip>

          <Tooltip title="Close">
            <IconButton
              onClick={handleClose}
              sx={{
                color: "white",
                background: "rgba(255,255,255,0.1)",
                "&:hover": { background: "rgba(255,255,255,0.2)" },
              }}
              size="small"
            >
              <CloseIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </DialogTitle>

      <DialogContent sx={{ p: 0, position: "relative", background: "#f8f9fa" }}>
        {loading && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              flexDirection: "column",
              gap: 3,
              background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: 80,
                height: 80,
              }}
            >
              <CircularProgress
                size={80}
                thickness={4}
                sx={{
                  color: "#667eea",
                  "& .MuiCircularProgress-circle": {
                    strokeLinecap: "round",
                  },
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                {getFileIcon(
                  documentType === "corrigendum"
                    ? tender?.CorrigendumFileName
                    : tender?.tenderFileName
                )}
              </Box>
            </Box>
            <Typography variant="h6" sx={{ color: "#495057", fontWeight: 600 }}>
              Loading Document...
            </Typography>
            <Typography variant="body2" sx={{ color: "#6c757d" }}>
              Please wait while we prepare your document
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
              p: 4,
              background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
            }}
          >
            <Alert
              severity="error"
              sx={{
                maxWidth: 500,
                background: "rgba(255,255,255,0.9)",
                backdropFilter: "blur(10px)",
                borderRadius: 3,
                boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
              }}
            >
              <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                Document Loading Failed
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                {error}
              </Typography>
              <Button
                variant="contained"
                onClick={handleDownloadDocument}
                startIcon={<DownloadIcon />}
                sx={{
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)",
                  },
                }}
              >
                Download Instead
              </Button>
            </Alert>
          </Box>
        )}

        {!loading && !error && documentUrl && (
          <Box
            sx={{
              height: "100%",
              width: "100%",
              position: "relative",
              background: "#ffffff",
              borderRadius: 2,
              m: 1,
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            }}
          >
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
                  background: "rgba(255,255,255,0.95)",
                  backdropFilter: "blur(5px)",
                  zIndex: 1,
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <CircularProgress
                    size={40}
                    sx={{ color: "#667eea", mb: 2 }}
                  />
                  <Typography variant="body2" color="text.secondary">
                    Preparing document viewer...
                  </Typography>
                </Box>
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
                  background: "rgba(255,255,255,0.95)",
                  backdropFilter: "blur(5px)",
                  zIndex: 1,
                }}
              >
                <Box sx={{ textAlign: "center", p: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{ mb: 2, color: "text.secondary" }}
                  >
                    Document Preview Unavailable
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mb: 3, color: "text.secondary" }}
                  >
                    The document couldn't be loaded directly from the server.
                    This might be due to:
                  </Typography>
                  <Box sx={{ mb: 3, textAlign: "left", maxWidth: 400 }}>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", mb: 1 }}
                    >
                      • File not found on server (404 error)
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", mb: 1 }}
                    >
                      • Server configuration issue
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", mb: 1 }}
                    >
                      • File path incorrect
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        mb: 1,
                        color: "#667eea",
                        fontWeight: 600,
                      }}
                    >
                      💡 Try the "Try Alternative Viewer" button below
                    </Typography>
                  </Box>

                  {/* Debug Information */}
                  <Box
                    sx={{
                      mb: 3,
                      p: 2,
                      background: "rgba(0,0,0,0.05)",
                      borderRadius: 1,
                      maxWidth: 400,
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        color: "text.secondary",
                        fontWeight: 600,
                        display: "block",
                        mb: 1,
                      }}
                    >
                      Debug Info:
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "text.secondary",
                        fontSize: "0.7rem",
                        wordBreak: "break-all",
                      }}
                    >
                      Original Path:{" "}
                      {tender?.tenderFilePath || tender?.CorrigendumFilePath}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "text.secondary",
                        fontSize: "0.7rem",
                        wordBreak: "break-all",
                      }}
                    >
                      Constructed URL: {documentUrl}
                    </Typography>
                    {fallbackUrl && (
                      <Typography
                        variant="caption"
                        sx={{
                          color: "text.secondary",
                          fontSize: "0.7rem",
                          wordBreak: "break-all",
                        }}
                      >
                        Fallback URL: {fallbackUrl}
                      </Typography>
                    )}
                  </Box>
                  <Box
                    sx={{ display: "flex", gap: 2, justifyContent: "center" }}
                  >
                    <Button
                      variant="outlined"
                      onClick={() => {
                        setIframeError(false);
                        setIframeLoading(true);
                        // Try Google Docs Viewer
                        if (
                          fallbackUrl &&
                          !documentUrl.includes("docs.google.com")
                        ) {
                          console.log(
                            "User clicked Try Alternative Viewer, switching to Google Docs Viewer"
                          );
                          setDocumentUrl(fallbackUrl);
                        }
                      }}
                      sx={{
                        borderColor: "#667eea",
                        color: "#667eea",
                        "&:hover": {
                          borderColor: "#5a6fd8",
                          backgroundColor: "rgba(102, 126, 234, 0.04)",
                        },
                      }}
                    >
                      🔄 Try Google Docs Viewer
                    </Button>
                    <Button
                      variant="contained"
                      onClick={handleDownloadDocument}
                      startIcon={<DownloadIcon />}
                      sx={{
                        background:
                          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        "&:hover": {
                          background:
                            "linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)",
                        },
                      }}
                    >
                      Download Document
                    </Button>
                  </Box>
                </Box>
              </Box>
            )}

            <iframe
              src={`${documentUrl}#toolbar=0&navpanes=0&scrollbar=0&zoom=${
                zoomLevel / 100
              }`}
              onLoad={handleIframeLoad}
              onError={handleIframeError}
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                borderRadius: "8px",
                transform: `rotate(${rotation}deg)`,
                transition: "transform 0.3s ease",
              }}
              title="Tender Document"
            />
          </Box>
        )}
      </DialogContent>

      {/* Enhanced Footer */}
      {!loading && !error && documentUrl && (
        <DialogActions
          sx={{
            p: 3,
            background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
            borderTop: "1px solid rgba(0,0,0,0.08)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", fontWeight: 500 }}
            >
              Document loaded successfully
            </Typography>
            <Chip
              label={`${zoomLevel}% zoom`}
              size="small"
              variant="outlined"
              sx={{ borderColor: "#667eea", color: "#667eea" }}
            />
            {rotation !== 0 && (
              <Chip
                label={`${rotation}° rotation`}
                size="small"
                variant="outlined"
                sx={{ borderColor: "#764ba2", color: "#764ba2" }}
              />
            )}
          </Box>

          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              variant="outlined"
              onClick={handleClose}
              sx={{
                borderRadius: 2,
                fontWeight: 600,
                textTransform: "none",
                borderColor: "#6c757d",
                color: "#6c757d",
                "&:hover": {
                  borderColor: "#495057",
                  backgroundColor: "rgba(108, 117, 125, 0.04)",
                },
              }}
            >
              Close
            </Button>
            <Button
              variant="contained"
              onClick={handleDownloadDocument}
              startIcon={<DownloadIcon />}
              sx={{
                borderRadius: 2,
                fontWeight: 600,
                textTransform: "none",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                "&:hover": {
                  background:
                    "linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)",
                },
                boxShadow: "0 4px 15px rgba(102, 126, 234, 0.3)",
              }}
            >
              Download Document
            </Button>
          </Box>
        </DialogActions>
      )}
    </Dialog>
  );
};

export default DocumentViewerModal;
