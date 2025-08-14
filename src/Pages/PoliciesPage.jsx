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
} from "@mui/material";
import { Download } from "@mui/icons-material";
import "./globals.css";
import CommonBanner from "../components/BannersComponents/CommonBanner";

export default function PoliciesPage() {
  const [loading, setLoading] = useState(true);
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setDocs([
        {
          id: 1,
          name: "Annual Report 2023-24",
          date: "12 Aug 2025",
          file: "#",
        },
        {
          id: 2,
          name: "Innovation Whitepaper",
          date: "05 Jul 2025",
          file: "#",
        },
        {
          id: 3,
          name: "Community Projects Summary",
          date: "18 Jun 2025",
          file: "#",
        },
      ]);
      setLoading(false);
    }, 2000);
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
                            href={doc.file}
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
