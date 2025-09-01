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
                            startIcon={<Download />}
                            onClick={() => {
                              if (doc.file) {
                                window.open(
                                  `${import.meta.env.VITE_API_BASE_URL}/${
                                    doc.file
                                  }`,
                                  "_blank"
                                );
                              }
                            }}
                            disabled={!doc.file}
                            sx={{
                              backgroundColor: "#bd8f59",
                              textTransform: "none",
                              borderRadius: "8px",
                              padding: "5px 12px",
                              "&:hover": { backgroundColor: "#a97b4b" },
                            }}
                          >
                            Download
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
