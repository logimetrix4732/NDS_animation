import React from "react";
import {
  Box,
  List,
  Drawer,
  ListItem,
  IconButton,
  Typography,
  ListItemText,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import nds_logo from "../../assets/img/nds_logo.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import { Link } from "react-router-dom";

const SideMenu = ({ openRight, openLeft, setOpenRight, setOpenLeft }) => {
  const menuItems = [
    { text: "Home", to: "/" },
    { text: "About Us", to: "/aboutUs" },
    { text: "Our Experties", to: "/ourExperties" },
    { text: "Milk Producer Org.", to: "/milkproducer" },
    { text: "Animal Productivity", to: "/animalProductivity" },
    { text: "New Initiative", to: "/newInitiative" },
    { text: "Publications", to: "/publications" },
    { text: "Careers", to: "/carrer" },
    { text: "Tenders", to: "/tender" },
    { text: "Contact Us", to: "/contactUs" },
  ];

  const contactInfo = (
    <Box
      sx={{
        width: "360px",
        bgcolor: "#fff",
        height: "100%",
        p: 3,
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <img
          src={nds_logo}
          alt="Atek"
          style={{ width: "120px", objectFit: "contain" }}
        />
        <IconButton
          onClick={() => setOpenRight(false)}
          sx={{ color: "#333", border: "2px solid #0b1422" }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <p className="about-text">
        Quick access to essential system features, including the dashboard for
        an overview of operations, network settings for managing connectivity,
        system logs for tracking activities.
      </p>

      <Box display="flex" gap={1.5} mb={3}>
        {[FacebookIcon, TwitterIcon, WhatsAppIcon, LinkedInIcon, EmailIcon].map(
          (Icon, idx) => (
            <Box
              key={idx}
              sx={{
                border: "1px solid #ccc",
                borderRadius: "50%",
                p: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "0.3s",
                "&:hover": {
                  bgcolor: "#bd8f59",
                  color: "#fff",
                  borderColor: "#bd8f59",
                },
                cursor: "pointer",
                color: "#7a7d7d",
              }}
              className="th-social"
            >
              <Icon sx={{ fontSize: "20px" }} />
            </Box>
          )
        )}
      </Box>
      <Box>
        <Typography variant="h6" fontWeight={600} mb={2}>
          Get In Touch
        </Typography>

        <Box display="flex" alignItems="flex-start" mb={2}>
          <PhoneIcon sx={{ color: "#bd8f59", mr: 1 }} />
          <Box>
            <Typography className="about-text">+01 234 567 890</Typography>
            <Typography variant="body2">+09 876 543 210</Typography>
          </Box>
        </Box>

        <Box display="flex" alignItems="flex-start" mb={2}>
          <EmailIcon sx={{ color: "#bd8f59", mr: 1 }} />
          <Box>
            <Typography variant="body2">mailinfo00@atek.com</Typography>
            <Typography variant="body2">support24@atek.com</Typography>
          </Box>
        </Box>

        <Box display="flex" alignItems="flex-start">
          <LocationOnIcon sx={{ color: "#bd8f59", mr: 1 }} />
          <Typography variant="body2">
            789 Inner Lane, Holy park, <br />
            California, USA
          </Typography>
        </Box>
      </Box>
    </Box>
  );
  const mobileMenu = (
    <Box
      sx={{
        p: 3,
        width: "280px",
        bgcolor: "#fff",
        height: "100%",
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <img
          src={nds_logo}
          alt="NDDB"
          style={{ width: "150px", height: "60px" }}
        />
        <IconButton
          onClick={() => setOpenLeft(false)}
          sx={{ color: "#333", border: "2px solid #0b1422" }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <List>
        {menuItems.map((item, index) => (
          <ListItem
            button
            key={index}
            sx={{
              borderBottom: "1px solid #eee",
              "&:hover": { bgcolor: "#f0f0f0" },
              p: 0,
            }}
          >
            <Link
              to={item.to}
              onClick={() => setOpenLeft(false)}
              style={{
                display: "block",
                width: "100%",
                padding: "6px 16px",
                textDecoration: "none",
              }}
            >
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontWeight: 500,
                  fontSize: "16px",
                  color: "#222",
                }}
              />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <React.Fragment>
      <Drawer anchor="left" open={openLeft} onClose={() => setOpenLeft(false)}>
        {mobileMenu}
      </Drawer>
      <Drawer
        anchor="right"
        open={openRight}
        onClose={() => setOpenRight(false)}
      >
        {contactInfo}
      </Drawer>
    </React.Fragment>
  );
};

export default SideMenu;
