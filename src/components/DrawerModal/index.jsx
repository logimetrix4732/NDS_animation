import * as React from "react";
import { Box, Typography, Drawer, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

const getDrawerStyles = (width) => ({
  "& .MuiDrawer-paper": {
    width: width || "600px",
    height: "100%",
    top: "auto",
    bottom: 0,
    borderTopLeftRadius: "12px",
    padding: "24px",
    backgroundColor: "#fff",
    boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    overflow: "scroll",

    // Responsive
    "@media (max-width: 960px)": {
      width: "100%",
    },
    "@media (max-width: 600px)": {
      height: "100%",
      borderRadius: 0,
    },
  },
});

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
  width,
}) => {
  const contentRef = React.useRef(null);

  React.useEffect(() => {
    if (open && contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [open]);

  return (
    <Drawer
      anchor={anchor}
      open={open}
      onClose={toggleDrawer(false)}
      transitionDuration={300}
      ModalProps={{ style: { overflow: "hidden" } }}
      sx={getDrawerStyles(width)}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={animationVariants}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{ height: "100%", display: "flex", flexDirection: "column", overflow: "hidden" }}
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

        <Box ref={contentRef} sx={{ flexGrow: 1, overflowY: "auto", pr: 1, pb: 2 }}>
          {content.map((para, idx) => (
            <Typography key={idx} gutterBottom>
              {para}
            </Typography>
          ))}
        </Box>
      </motion.div>
    </Drawer>
  );
};

export default DrawerModal;
