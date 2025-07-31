// ChairmanModal.jsx
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  Box,
  Slide,
  useTheme,
  useMediaQuery,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

/* Slide‑up transition (same as before) */
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ChairmanModal = ({
  open,
  handleClose,
  title,
  subtext,
  content,
  image,
}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  /* ---------- scroll progress bar logic ---------- */
  const scrollRef = React.useRef(null);
  const [progress, setProgress] = React.useState(0);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
    setProgress(pct);
  };

  /* Simple fade‑in class for paragraphs */
  const fadeStyles = {
    "@keyframes fadeIn": {
      from: { opacity: 0, transform: "translateY(8px)" },
      to: { opacity: 1, transform: "translateY(0)" },
    },
    animation: "fadeIn 450ms ease forwards",
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      keepMounted
      fullWidth
      maxWidth="md"
      fullScreen={fullScreen}
      PaperProps={{
        sx: {
          borderRadius: 4,
          overflow: "hidden", // glass‑card look
          backdropFilter: "blur(4px)",
          background:
            theme.palette.mode === "dark"
              ? "rgba(30,30,30,0.85)"
              : "rgba(255,255,255,0.9)",
        },
      }}
    >
      {/* Scroll bar */}
      <Box
        sx={{
          height: 4,
          bgcolor: "#bd8f59",
          width: `${progress}%`,
          transition: "width 0.15s linear",
        }}
      />

      {/* ---------- Title Row ---------- */}
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          pr: 1,
          py: 1,
        }}
      >
        <Typography variant="h6" fontWeight={600} lineHeight={1.2}>
          {title}
        </Typography>
        <IconButton onClick={handleClose} size="small">
          <CloseIcon fontSize="small" />
        </IconButton>
      </DialogTitle>

      {/* ---------- Content ---------- */}
      <DialogContent
        dividers
        ref={scrollRef}
        onScroll={handleScroll}
        sx={{
          p: fullScreen ? 2 : 3,
          maxHeight: "70vh",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: theme.palette.mode === "dark" ? "#555" : "#ccc",
            borderRadius: "8px",
          },
          scrollbarWidth: "thin", // Firefox
          scrollbarColor: `${
            theme.palette.mode === "dark" ? "#555" : "#ccc"
          } transparent`,
        }}
      >
        {/* Hero image + subtext */}
        <Box
          sx={{
            display: "flex",
            flexDirection: fullScreen ? "column" : "row",
            gap: 3,
            mb: 3,
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontSize: "18px",
              }}
            >
              {subtext}
            </p>
          </Box>
          <Box
            sx={{
              flexShrink: 0,
              width: fullScreen ? "100%" : 350,
            }}
          >
            <img
              src={image}
              alt="Person"
              style={{
                width: "100%",
                borderRadius: "10px",
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>

        {/* Body paragraphs */}
        {content.map((para, idx) => (
          <Typography
            key={idx}
            variant="body2"
            gutterBottom
            sx={fadeStyles}
            style={{ animationDelay: `${idx * 80}ms` }} // stagger effect
          >
            {para}
          </Typography>
        ))}

        <Divider />
      </DialogContent>
    </Dialog>
  );
};

export default ChairmanModal;
