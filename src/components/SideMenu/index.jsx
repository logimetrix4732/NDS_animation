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
import { Link } from "react-router-dom";

const SideMenu = ({ openRight, openLeft, setOpenRight, setOpenLeft }) => {
  const menuItems = [
    { text: "Home", to: "/" },
    { text: "About Us", to: "/aboutUs" },
    { text: "Our Experties", to: "/experties" },
    { text: "Milk Producer Org.", to: "/milk-producer-org" },
    { text: "Semen Station", to: "/semen-station" },
    { text: "New Initiative", to: "/new-initiative" },
    { text: "Publications", to: "/publications" },
    { text: "Careers", to: "/careers" },
    { text: "Tenders", to: "/tenders" },
    { text: "Contact Us", to: "/contact" },
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
                  bgcolor: "#5b8c51",
                  color: "#fff",
                  borderColor: "#5b8c51",
                },
                cursor: "pointer",
                color: "#0b1422",
              }}
              className="th-social"
            >
              <Icon sx={{ fontSize: "20px" }} />
            </Box>
          )
        )}
      </Box>

      <Box mb={3}>
        <Typography variant="h6" fontWeight={600} mb={2}>
          Recent Posts
        </Typography>
        {[1, 2].map((item) => (
          <Box key={item} display="flex" mb={2}>
            <Box
              component="img"
              src={`/assets/img/blog/recent-post-1-${item}.jpg`}
              alt={`Post ${item}`}
              sx={{
                width: 85,
                borderRadius: 2,
                objectFit: "cover",
                mr: 2,
              }}
            />
            <Box>
              <Typography
                variant="caption"
                color="text.secondary"
                display="flex"
                alignItems="center"
                mb={0.5}
              >
                <i className="far fa-calendar" style={{ marginRight: 5 }}></i>
                {item === 1 ? "24 Jun , 2025" : "22 Jun , 2025"}
              </Typography>
              <h6>
                {item === 1
                  ? "Where Vision Meets Concrete Reality"
                  : "Raising The Bar In Construction."}
              </h6>
            </Box>
          </Box>
        ))}
      </Box>

      <Box>
        <Typography variant="h6" fontWeight={600} mb={2}>
          Get In Touch
        </Typography>

        <Box display="flex" alignItems="flex-start" mb={2}>
          <PhoneIcon sx={{ color: "#5b8c51", mr: 1 }} />
          <Box>
            <Typography className="about-text">+01 234 567 890</Typography>
            <Typography variant="body2">+09 876 543 210</Typography>
          </Box>
        </Box>

        <Box display="flex" alignItems="flex-start" mb={2}>
          <EmailIcon sx={{ color: "#5b8c51", mr: 1 }} />
          <Box>
            <Typography variant="body2">mailinfo00@atek.com</Typography>
            <Typography variant="body2">support24@atek.com</Typography>
          </Box>
        </Box>

        <Box display="flex" alignItems="flex-start">
          <LocationOnIcon sx={{ color: "#5b8c51", mr: 1 }} />
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
