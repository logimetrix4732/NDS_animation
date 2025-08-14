import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { Download } from "@mui/icons-material";
import annualreport5 from "../../Images/AnnualReportImg/cover.jpg";
import annualreport4 from "../../Images/AnnualReportImg/cover-1.jpg";
import annualreport from "../../Images/AnnualReportImg/annual-report-2015-16.jpg";
import annualreport1 from "../../Images/AnnualReportImg/annual-report-2016-17.jpg";
import annualreport2 from "../../Images/AnnualReportImg/annual-report-2017-18.jpg";
import annualreport3 from "../../Images/AnnualReportImg/annual-report-2018-19.jpg";
import "./ReportsSection.css";
const reports = [
  {
    year: "2023-24",
    title: "Purposeful Growth, Meaningful Impact",
    description:
      "Annual Report showcasing our commitment to sustainable growth and community impact.",
    image: annualreport,
  },
  {
    year: "2022-23",
    title: "Innovation & Excellence",
    description:
      "Comprehensive overview of our technological advancements and market achievements.",
    image: annualreport1,
  },
  {
    year: "2021-22",
    title: "Empowering Communities",
    description:
      "Highlighting our social initiatives and community development programs.",
    image: annualreport2,
  },
  {
    year: "2020-21",
    title: "Purposeful Growth, Meaningful Impact",
    description:
      "Annual Report showcasing our commitment to sustainable growth and community impact.",
    image: annualreport3,
  },
  {
    year: "2019-20",
    title: "Innovation & Excellence",
    description:
      "Comprehensive overview of our technological advancements and market achievements.",
    image: annualreport4,
  },
  {
    year: "2018-19",
    title: "Empowering Communities",
    description:
      "Highlighting our social initiatives and community development programs.",
    image: annualreport5,
  },
];

export default function ReportsSection() {
  return (
    <div
      id="about-sec"
      className="about-area position-relative overflow-hidden space"
    >
      <div className="container" id="about-sec5">
        <Box className="card-container">
          {reports.map((report, index) => (
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0px 8px 30px rgba(0,0,0,0.15)",
                },
              }}
            >
              <CardMedia
                component="img"
                image={report.image}
                alt={report.title}
                sx={{
                  height: 220,
                  width: "100%",
                  objectFit: "cover",
                }}
              />

              <CardContent
                sx={{
                  p: 2.5,
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      backgroundColor: "#a97b4b",
                      display: "inline-block",
                      px: 1.5,
                      py: 0.5,
                      borderRadius: "6px",
                      fontWeight: 500,
                      fontSize: "0.8rem",
                      color: "#fff",
                    }}
                  >
                    Annual Report {report.year}
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{ mt: 1.5, fontWeight: "bold", color: "#8B5E34" }}
                  >
                    {report.title}
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", gap: 1.5, mt: 2 }}>
                  <Button
                    variant="contained"
                    startIcon={<Download />}
                    sx={{
                      backgroundColor: "#bd8f59",
                      color: "#fff",
                      textTransform: "none",
                      borderRadius: "8px",
                      "&:hover": { backgroundColor: "#a97b4b" },
                    }}
                  >
                    हिंदी
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<Download />}
                    sx={{
                      color: "#bd8f59",
                      borderColor: "#bd8f59",
                      textTransform: "none",
                      borderRadius: "8px",
                      "&:hover": { borderColor: "#a97b4b", color: "#a97b4b" },
                    }}
                  >
                    English
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </div>
    </div>
  );
}
