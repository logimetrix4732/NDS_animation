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

const DocumentViewerDialog = ({ open, onClose, tender }) => {
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
    }, [open, tender]);

    const fetchDocument = async () => {
        console.log("=== FETCH DOCUMENT CALLED ===");
        console.log("Tender object:", tender);
        console.log("Tender tenderFile:", tender?.tenderFile);

        if (!tender) {
            setError("No tender data provided");
            return;
        }

        if (!tender.tenderFile) {
            console.log("No tenderFile found in tender object");
            setError("No document available for this tender");
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

            // Construct the document URL based on the tender file
            let documentUrl;

            // Check if tenderFile is already a full URL
            if (tender.tenderFile.startsWith('http://') || tender.tenderFile.startsWith('https://')) {
                documentUrl = tender.tenderFile;
            } else {
                // Construct URL based on the pattern from the image: /files/tenderDocs/TENDER/filename
                documentUrl = `${import.meta.env.VITE_API_BASE_URL}/files/tenderDocs/TENDER/${tender.tenderFile}`;
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

    const handleDownload = () => {
        if (documentUrl) {
            const link = document.createElement("a");
            link.href = documentUrl;
            link.download = tender?.tenderFile || "tender-document.pdf";
            link.target = "_blank";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
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
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {tender?.title || "Tender Document"}
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
                            src={documentUrl}
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
                        variant="outlined"
                        startIcon={<DownloadIcon />}
                        onClick={handleDownload}
                        sx={{
                            borderRadius: 2,
                            fontWeight: 600,
                            textTransform: "none",
                        }}
                    >
                        Download Document
                    </Button>
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
