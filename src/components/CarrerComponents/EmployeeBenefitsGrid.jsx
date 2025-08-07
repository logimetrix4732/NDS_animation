import React from "react";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import ElderlyIcon from "@mui/icons-material/Elderly";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import HouseIcon from "@mui/icons-material/House";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import Diversity1OutlinedIcon from "@mui/icons-material/Diversity1Outlined";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import { Box, Grid, Typography } from "@mui/material";

const services = [
  {
    icon: (
      <LocalLibraryOutlinedIcon sx={{ fontSize: 80, color: "#a46c35ff" }} />
    ),
    title: "Learning, Always On",
    description:
      "At NDS, learning never stops. Our KITAAB library offers employees easy access to a wide range of physical and digital learning materials. The initiative promotes regular reading and builds a culture of learning.",
  },
  {
    icon: <TrackChangesIcon sx={{ fontSize: 80, color: "#a46c35ff" }} />,
    title: "Leading with Impact",
    description:
      "The Leap Forward program supports senior leaders through personalized coaching and focused development plans. It enhances strategic thinking, nurtures innovation, and strengthens leadership capabilities to help build high-performing teams and deliver lasting impact.",
  },
  {
    icon: <SchoolOutlinedIcon sx={{ fontSize: 80, color: "#a46c35ff" }} />,
    title: "Support for Higher Education",
    description:
      "Our Education Assistance Scheme offers financial support to employees pursuing higher studies. This initiative encourages continuous learning, helping individuals enhance their skills and advance in their careers while working with NDS.",
  },
  {
    icon: <ElderlyIcon sx={{ fontSize: 80, color: "#a46c35ff" }} />,
    title: "Guided Beginnings",
    description:
      "Udaan is a structured mentorship programme that connects new employees with seasoned team members. It helps foster cultural understanding, smooth onboarding, and provides career guidance for a confident and informed start at NDS.",
  },
  {
    icon: (
      <VolunteerActivismOutlinedIcon
        sx={{ fontSize: 80, color: "#a46c35ff" }}
      />
    ),
    title: "Tying the Knot Token",
    description:
      "We celebrate the joyous occasion of your marriage with a special gift. It’s our way of acknowledging this important milestone and sharing in your happiness as you begin a new chapter in life.",
  },
  {
    icon: <PhoneIphoneIcon sx={{ fontSize: 80, color: "#a46c35ff" }} />,
    title: "Stay Connected Always",
    description:
      "We support your need to stay connected by providing a mobile handset and monthly reimbursements. This ensures smooth, uninterrupted communication for both personal and professional use, no matter where you are.",
  },
  {
    icon: <HouseOutlinedIcon sx={{ fontSize: 80, color: "#a46c35ff" }} />,
    title: "Aarambh: Your NDS Welcome",
    description:
      "Aarambh is our structured onboarding program for Management Trainees that helps new joinees feel connected and confident. It includes leadership interaction, field visits, mentorship, and exposure to NDS values, culture, and functions",
  },
  {
    icon: <Diversity1OutlinedIcon sx={{ fontSize: 80, color: "#a46c35ff" }} />,
    title: "Thrive Inside & Outside",
    description:
      "We support your well-being with flexible policies, hybrid work, and leave benefits. From maternity and paternity leave to adaptable hours, we help you balance personal life and work without compromise.",
  },
];

const ServiceListSection = () => {
  return (
    <div
      className="service-area bg-top-center position-relative space-top overflow-hidden"
      id="service-sec"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="title-area text-center">
              <h2 className="sec-title text-anime-style-3">
                Employee Benefits
              </h2>
            </div>
          </div>
        </div>

        <Grid container spacing={4} justifyContent="center" wrap="wrap">
          {services.map((service, index) => (
            <Grid item key={index}>
              <Box
                textAlign="center"
                p={2}
                sx={{
                  width: "400px",
                  borderRadius: 2,
                  height: "80%",
                }}
              >
                <Box>{service.icon}</Box>
                <Typography variant="h5" fontWeight="bold" mt={2}>
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  mt={1}
                  fontSize="1.3rem"
                >
                  {service.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default ServiceListSection;
