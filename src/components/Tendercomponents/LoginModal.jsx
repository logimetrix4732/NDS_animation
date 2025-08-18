import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogContent,
  TextField,
  Button,
  Box,
  Typography,
  IconButton,
  InputAdornment,
  Alert,
} from "@mui/material";
import {
  Close,
  Business,
  Email,
  Badge,
  CreditCard,
  ArrowForward,
} from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";

const TenderAccessModal = ({ open, onClose, onSubmit }) => {
  const [companyName, setCompanyName] = useState("");
  const [gstNumber, setGstNumber] = useState("");
  const [panNumber, setPanNumber] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateForm = () => {
    if (!companyName || !gstNumber || !panNumber || !email) {
      return "Please fill in all fields";
    }

    // Company name check
    if (!/^[a-zA-Z\s]+$/.test(companyName)) {
      return "Company name should only contain letters and spaces";
    }

    // GST check (15 chars alphanumeric)
    if (!/^[0-9]{2}[A-Z0-9]{13}$/.test(gstNumber.toUpperCase())) {
      return "Please enter a valid GST number (15 characters)";
    }

    // PAN check (5 letters + 4 digits + 1 letter)
    if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(panNumber.toUpperCase())) {
      return "Please enter a valid PAN number";
    }

    // Email check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return "Please enter a valid email address";
    }

    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    onSubmit({
      companyName,
      gstNumber: gstNumber.toUpperCase(),
      panNumber: panNumber.toUpperCase(),
      email,
    });

    onClose();
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
        duration: 0.5,
      },
    },
    exit: { opacity: 0, scale: 0.9, y: 30, transition: { duration: 0.3 } },
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.4 } },
  };

  return (
    <AnimatePresence>
      {open && (
        <Dialog
          open={open}
          onClose={onClose}
          maxWidth="sm"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: 3,
              background: "white",
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.15)",
              overflow: "hidden",
              maxWidth: "500px",
              width: "100%",
            },
          }}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <Box
              sx={{
                background: "#bd8f59",
                color: "white",
                p: 3,
                position: "relative",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: 700, mb: 1, fontSize: "1.75rem" }}
                  >
                    View Tender
                  </Typography>
                  <Typography variant="body1" sx={{ opacity: 0.9 }}>
                    Please fill the details to access tenders
                  </Typography>
                </Box>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IconButton
                    onClick={onClose}
                    size="medium"
                    sx={{ color: "white" }}
                  >
                    <Close />
                  </IconButton>
                </motion.div>
              </Box>
            </Box>

            <DialogContent sx={{ p: 3 }}>
              <motion.div
                variants={formVariants}
                initial="hidden"
                animate="visible"
              >
                <Box component="form" onSubmit={handleSubmit}>
                  {error && (
                    <Alert severity="error" sx={{ mb: 2, borderRadius: 1.5 }}>
                      {error}
                    </Alert>
                  )}

                  <TextField
                    fullWidth
                    label="Company Name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    margin="normal"
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Business sx={{ color: "#bd8f59" }} />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <TextField
                    fullWidth
                    label="GST Number"
                    value={gstNumber}
                    onChange={(e) => setGstNumber(e.target.value.toUpperCase())}
                    margin="normal"
                    required
                    inputProps={{ maxLength: 15 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Badge sx={{ color: "#bd8f59" }} />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <TextField
                    fullWidth
                    label="PAN Number"
                    value={panNumber}
                    onChange={(e) => setPanNumber(e.target.value.toUpperCase())}
                    margin="normal"
                    required
                    inputProps={{ maxLength: 10 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CreditCard sx={{ color: "#bd8f59" }} />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <TextField
                    fullWidth
                    label="Email Address"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    margin="normal"
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Email sx={{ color: "#bd8f59" }} />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    endIcon={<ArrowForward />}
                    sx={{
                      mt: 3,
                      py: 1.5,
                      bgcolor: "#bd8f59",
                      borderRadius: 1.5,
                      textTransform: "none",
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: "#ffffff",
                      "&:hover": { bgcolor: "#a46c35" },
                    }}
                  >
                    View Tender
                  </Button>
                </Box>
              </motion.div>
            </DialogContent>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

TenderAccessModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default TenderAccessModal;
