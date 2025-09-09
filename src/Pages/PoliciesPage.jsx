import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  CircularProgress,
  Box,
  Typography,
} from "@mui/material";
import { Download } from "@mui/icons-material";
import "./globals.css";
import CommonBanner from "../components/BannersComponents/CommonBanner";
// No need to import getFetch for public pages

export default function PoliciesPage() {
  const [loading, setLoading] = useState(true);
  const [docs, setDocs] = useState([]);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    const fetchPolicies = async () => {
      try {
        setLoading(true);

        // Use direct fetch for public pages - no authentication required
        const response = await fetch(
          `${
            import.meta.env.VITE_API_BASE_URL
          }/getPublication?publicationType=Policies`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();

          if (data?.data) {
            const mappedData = data.data.map((item) => ({
              id: item.id,
              name: item.name,
              date: new Date().toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              }),
              file: item.pdfFile,
              isActive: item.isActive,
            }));
            setDocs(mappedData);
          } else {
            setDocs([]);
          }
        } else {
          console.error("Failed to fetch Policies:", response.status);
          setDocs([]);
        }
      } catch (error) {
        console.error("Error fetching Policies:", error);
        setDocs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPolicies();
  }, []);

  const handleDownload = async (pdfFile, docName) => {
    try {
      if (!pdfFile) {
        console.log("No file available for download.");
        return;
      }

      setDownloading(true);

      // Direct download approach for public files
      const fileUrl = `${import.meta.env.VITE_API_BASE_URL}/files${pdfFile}`;

      // Create download link with proper filename
      let filename = docName || "policy-document";
      if (!filename.toLowerCase().endsWith(".pdf")) {
        filename += ".pdf";
      }
      // Clean filename for download
      filename = filename.replace(/[^a-zA-Z0-9._-]/g, "_");

      // Create temporary link and trigger download
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = filename;
      link.style.display = "none"; // Hide the link
      link.setAttribute("download", filename); // Force download attribute
      link.target = "_blank"; // Open in new tab

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading file:", error);
      // Fallback to direct download
      if (pdfFile) {
        const fallbackFilename = docName || "policy-document.pdf";
        const fallbackLink = document.createElement("a");
        fallbackLink.href = `${
          import.meta.env.VITE_API_BASE_URL
        }/files${pdfFile}`;
        fallbackLink.download = fallbackFilename;
        fallbackLink.style.display = "none";
        fallbackLink.target = "_blank"; // Open in new tab

        document.body.appendChild(fallbackLink);
        fallbackLink.click();
        document.body.removeChild(fallbackLink);
      }
    } finally {
      setDownloading(false);
    }
  };

  return (
    <React.Fragment>
      <CommonBanner
        title="Policies"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "About Us" }]}
      />
      <div
        id="about-sec"
        className="about-area position-relative overflow-hidden space"
      >
        <div className="container" id="about-sec5">
          <div className="table-page">
            <h2 className="table-title">Documents List</h2>

            <TableContainer
              component={Paper}
              className="fade-in custom-table-container"
            >
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>S.No</TableCell>
                    <TableCell>Document Name</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell align="center">Download</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {loading ? (
                    <TableRow>
                      <TableCell colSpan={4} align="center">
                        <Box
                          display="flex"
                          flexDirection="column"
                          alignItems="center"
                          py={3}
                        >
                          <CircularProgress size={50} />
                          <p>Loading documents...</p>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ) : docs.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={4} align="center">
                        <Box
                          display="flex"
                          flexDirection="column"
                          alignItems="center"
                          py={3}
                        >
                          <Typography variant="h6" color="text.secondary">
                            No Policies available
                          </Typography>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ) : (
                    docs.map((doc, index) => (
                      <TableRow key={doc.id} className="table-row-hover">
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{doc.name}</TableCell>
                        <TableCell>{doc.date}</TableCell>
                        <TableCell align="center">
                          <Button
                            variant="contained"
                            startIcon={
                              downloading ? (
                                <CircularProgress size={18} color="inherit" />
                              ) : (
                                <Download />
                              )
                            }
                            onClick={() => handleDownload(doc.file, doc.name)}
                            disabled={!doc.file || downloading}
                            sx={{
                              background:
                                "linear-gradient(135deg, #bd8f59 0%, #a97b4b 100%)",
                              color: "#fff",
                              textTransform: "none",
                              borderRadius: "12px",
                              px: 3,
                              py: 1.2,
                              fontWeight: 600,
                              fontSize: "0.9rem",
                              transition:
                                "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                              boxShadow: "0 4px 16px rgba(189, 143, 89, 0.3)",
                              "&:hover": {
                                background:
                                  "linear-gradient(135deg, #a97b4b 0%, #8B5E34 100%)",
                                transform: "translateY(-3px) scale(1.02)",
                                boxShadow: "0 8px 25px rgba(189, 143, 89, 0.4)",
                              },
                              "&:disabled": {
                                background: "#ccc",
                                transform: "none",
                                boxShadow: "none",
                              },
                            }}
                          >
                            {downloading ? "Downloading..." : "Download"}
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
