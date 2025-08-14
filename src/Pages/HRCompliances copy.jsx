import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import { Download, Language } from "@mui/icons-material";
import CommonBanner from "../components/BannersComponents/CommonBanner";
const reports = [
  {
    year: "2023-24",
    title: "Purposeful Growth, Meaningful Impact",
    description:
      "Annual Report showcasing our commitment to sustainable growth and community impact.",
    image: "https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg",
  },
  {
    year: "2022-23",
    title: "Innovation & Excellence",
    description:
      "Comprehensive overview of our technological advancements and market achievements.",
    image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg",
  },
  {
    year: "2021-22",
    title: "Empowering Communities",
    description:
      "Highlighting our social initiatives and community development programs.",
    image: "https://images.pexels.com/photos/3182753/pexels-photo-3182753.jpeg",
  },
  {
    year: "2023-24",
    title: "Purposeful Growth, Meaningful Impact",
    description:
      "Annual Report showcasing our commitment to sustainable growth and community impact.",
    image: "https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg",
  },
  {
    year: "2022-23",
    title: "Innovation & Excellence",
    description:
      "Comprehensive overview of our technological advancements and market achievements.",
    image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg",
  },
  {
    year: "2021-22",
    title: "Empowering Communities",
    description:
      "Highlighting our social initiatives and community development programs.",
    image: "https://images.pexels.com/photos/3182753/pexels-photo-3182753.jpeg",
  },
];

export default function HRCompliances() {
  return (
    <>
      <CommonBanner
        title="HR Compliances"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "About Us" }]}
      />
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
                        backgroundColor: "#d9c0a2",
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

                    <Typography
                      variant="body2"
                      sx={{ mt: 1, color: "#555", lineHeight: 1.5 }}
                    >
                      {report.description}
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
                      startIcon={<Language />}
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
    </>
  );
}
