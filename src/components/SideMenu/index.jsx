import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  Link,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import nds_logo from "../../assets/img/nds_logo.png"; // update the path

const gallary = [];

const SideMenu = () => {
  const [openRight, setOpenRight] = useState(false);
  const [openLeft, setOpenLeft] = useState(false);

  const contactInfo = (
    <Box p={2}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <img
          src={nds_logo}
          alt="NDDB"
          style={{ width: "150px", height: "70px" }}
        />
        <IconButton onClick={() => setOpenRight(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider sx={{ my: 2 }} />

      <Box display="flex" flexWrap="wrap" gap={1} mb={2}>
        {gallary.map((img, index) => (
          <Box key={index} sx={{ width: "30%" }}>
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              style={{ width: "100%", borderRadius: 8 }}
            />
          </Box>
        ))}
      </Box>

      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        CONTACT INFO
      </Typography>

      <Box display="flex" alignItems="flex-start" mb={2}>
        <LocationOnIcon sx={{ mr: 1, color: "#555" }} />
        <Link
          href="https://www.google.com/maps/place/NDDB+Dairy+Services/"
          target="_blank"
          underline="none"
          color="inherit"
        >
          NDDB House, Safdarjung Enclave,
          <br />
          New Delhi, Southwest Delhi, Delhi 110029
        </Link>
      </Box>

      <Box display="flex" alignItems="center" mb={2}>
        <PhoneIcon sx={{ mr: 1, color: "#555" }} />
        <Typography>+91 7092922421</Typography>
      </Box>

      <Box display="flex" alignItems="center">
        <EmailIcon sx={{ mr: 1, color: "#555" }} />
        <Typography>enquiry@nddbdairyservices.com</Typography>
      </Box>

      <Box display="flex" gap={2} mt={3}>
        <FacebookIcon sx={iconStyle} />
        <TwitterIcon sx={iconStyle} />
        <WhatsAppIcon sx={iconStyle} />
        <LinkedInIcon sx={iconStyle} />
      </Box>
    </Box>
  );

  const mobileMenu = (
    <Box p={2} textAlign="center">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <img
          src={nds_logo}
          alt="NDDB"
          style={{ width: "170px", height: "76px" }}
        />
        <IconButton onClick={() => setOpenLeft(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider sx={{ my: 2 }} />
      <List>
        {[
          "Home",
          "About Us",
          "Our Experties",
          "Milk Producer Org.",
          "Semen Station",
          "New Initiative",
          "Publications",
          "Careers",
          "Tenders",
          "Contact Us",
        ].map((text, index) => (
          <ListItem button key={index}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const iconStyle = {
    border: "1px solid #e3e1e1",
    borderRadius: "50%",
    padding: "5px",
    fontSize: "30px",
    color: "#555",
    cursor: "pointer",
  };

  return (
    <>
      {/* Trigger buttons (for demonstration) */}
      <Box display="flex" gap={2} p={2}>
        <IconButton onClick={() => setOpenLeft(true)}>
          <MenuIcon />
        </IconButton>
        <IconButton onClick={() => setOpenRight(true)}>
          <MenuIcon />
        </IconButton>
      </Box>

      {/* Mobile Menu - Drawer Left */}
      <Drawer anchor="left" open={openLeft} onClose={() => setOpenLeft(false)}>
        {mobileMenu}
      </Drawer>

      {/* Desktop Menu - Drawer Right */}
      <Drawer
        anchor="right"
        open={openRight}
        onClose={() => setOpenRight(false)}
      >
        {contactInfo}
      </Drawer>
    </>
  );
};

export default SideMenu;
