import * as React from "react";
import { Box, Typography, Drawer, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    width: "600px",
    height: "60vh",
    top: "auto",
    bottom: 0,
    borderTopLeftRadius: "12px",
    padding: theme.spacing(3),
    backgroundColor: "#fff",
    boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",

    [theme.breakpoints.down("md")]: {
      width: "100%",
    },

    [theme.breakpoints.down("sm")]: {
      height: "80vh",
      borderRadius: 0,
    },
  },
}));

const animationVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { y: "100%", opacity: 0 },
};

const DrawerModal = ({
  toggleDrawer,
  open,
  isMobile,
  title = "Title",
  content = [],
  anchor = isMobile ? "bottom" : "right",
}) => {
  return (
    <StyledDrawer
      anchor={anchor}
      open={open}
      onClose={toggleDrawer(false)}
      transitionDuration={300}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={animationVariants}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{ height: "100%", display: "flex", flexDirection: "column" }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
          pb={1}
          borderBottom="1px solid #eee"
        >
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {title}
          </Typography>
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box sx={{ flexGrow: 1, overflowY: "auto", pr: 1, pb: 2 }}>
          {content.map((para, idx) => (
            <Typography key={idx} gutterBottom>
              {para}
            </Typography>
          ))}
        </Box>
      </motion.div>
    </StyledDrawer>
  );
};

export default DrawerModal;
