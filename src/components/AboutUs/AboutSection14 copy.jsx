import React, { useState } from "react";
import { Modal, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxHeight: "80vh",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  overflowY: "auto",
  borderRadius: "12px",
};

const AboutSection14 = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div
        className="about-area position-relative overflow-hidden space"
        id="about-sec"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <div className="about-imgbox12 img-box3">
                <div className="img1" style={{ marginLeft: "280px" }}>
                  <img src="assets/img/normal/ab_12_1.jpg" alt="About" />
                </div>
                <div className="img2">
                  <img src="assets/img/normal/ab_12_2.jpg" alt="About" />
                </div>
                <div className="img3 text-center text-md-end">
                  <img src="assets/img/normal/ab_12_3.jpg" alt="About" />
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="title-area about-12-titlebox mb-10 pe-xxl-1 me-xxl-1">
                <h2 className="sec-title mb-10 text-anime-style-3">
                  Chairman’s Message
                </h2>
                <p className="sec-text mb-10">
                  As the largest producer and consumer of dairy in the world,
                  India’s pole position is well established...
                </p>
                <button
                  className="th-btn btn-2 style5 th-icon"
                  onClick={handleOpen}
                >
                  Read More <i className="fa-light fa-arrow-right-long" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MUI Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ position: "absolute", top: 8, right: 8 }}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h5" fontWeight="bold" mb={2}>
            Chairman’s Message
          </Typography>
          <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
            {/* 👉 Paste your full content here 👇 */}
            As the largest producer and consumer of dairy in the world, India’s
            pole position is well established. The efforts of last five - six
            decades, centered around making India successful and self-reliant
            focused on innovation, operational excellence, scale, capacity
            building and digitisation. Looking back at the work done in the
            sector is comforting but it does not entitle us to rest...
            {/* ✂️ Content truncated for clarity — paste full message from your prompt here */}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default AboutSection14;
