import React, { useState, useEffect } from "react";
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
  useMediaQuery,
  useTheme,
  CircularProgress,
} from "@mui/material";
import {
  Close,
  Business,
  Email,
  Badge,
  CreditCard,
  ArrowForward,
  Lock,
  Visibility,
  VisibilityOff,
  CheckCircle,
} from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import LockIcon from "@mui/icons-material/Lock";
const TenderAccessModal = ({ open, onClose, onSubmit }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [gstNumber, setGstNumber] = useState("");
  const [panNumber, setPanNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    if (step === 3) {
      setConfetti(true);
      setTimeout(() => setConfetti(false), 4000);
    }
  }, [step]);

  const validateForm = () => {
    if (
      !companyName ||
      !gstNumber ||
      !panNumber ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      return "Please fill in all fields";
    }
    if (!/^[a-zA-Z\s]+$/.test(companyName)) {
      return "Company name should only contain letters and spaces";
    }
    if (!/^[0-9]{2}[A-Z0-9]{13}$/.test(gstNumber.toUpperCase())) {
      return "Please enter a valid GST number (15 characters)";
    }
    if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(panNumber.toUpperCase())) {
      return "Please enter a valid PAN number";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return "Please enter a valid email address";
    }
    if (password.length < 6) {
      return "Password must be at least 6 characters long";
    }
    if (password !== confirmPassword) {
      return "Passwords do not match";
    }
    return "";
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setError("");
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
    }, 2000);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (!otp) {
      setError("Please enter OTP");
      return;
    }
    setError("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(3);
      onSubmit({ companyName, gstNumber, panNumber, email, password });
    }, 2000);
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", damping: 20, stiffness: 300 },
    },
    exit: { opacity: 0, scale: 0.9, y: 30, transition: { duration: 0.3 } },
  };

  return (
    <AnimatePresence>
      {open && (
        <Dialog
          open={open}
          onClose={onClose}
          fullWidth
          maxWidth="sm"
          PaperProps={{
            sx: {
              borderRadius: 2,
              background: "white",
              boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
              overflow: "hidden",
              mx: isMobile ? 2 : "auto",
              my: isMobile ? 2 : 4,
            },
          }}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Box sx={{ background: "#bd8f59", color: "white", py: 2, px: 3 }}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography
                    variant={isMobile ? "h5" : "h4"}
                    fontWeight={700}
                    sx={{ color: "#ffffff" }}
                  >
                    {step === 1 && "View Tender"}
                    {step === 2 && "Verify OTP"}
                    {step === 3 && "Success"}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ opacity: 0.9, color: "#ffffff" }}
                  >
                    {step === 1 && "Please fill the details to access tenders"}
                    {step === 2 && "Enter the OTP sent to your email"}
                    {step === 3 && "Successfully registered"}
                  </Typography>
                </Box>
                <IconButton onClick={onClose} sx={{ color: "white" }}>
                  <Close />
                </IconButton>
              </Box>
            </Box>
            <DialogContent sx={{ p: isMobile ? 2 : 3, minHeight: "260px" }}>
              {step === 1 && (
                <Box component="form" onSubmit={handleSubmitForm}>
                  {error && (
                    <Alert severity="error" sx={{ mb: 2 }}>
                      {error}
                    </Alert>
                  )}
                  <TextField
                    fullWidth
                    size="small"
                    label="Company Name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    margin="normal"
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
                    size="small"
                    label="GST Number"
                    value={gstNumber}
                    onChange={(e) => setGstNumber(e.target.value.toUpperCase())}
                    margin="normal"
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
                    size="small"
                    label="PAN Number"
                    value={panNumber}
                    onChange={(e) => setPanNumber(e.target.value.toUpperCase())}
                    margin="normal"
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
                    size="small"
                    label="Email Address"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    margin="normal"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Email sx={{ color: "#bd8f59" }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    fullWidth
                    size="small"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    margin="normal"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Lock sx={{ color: "#bd8f59" }} />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <VisibilityOff sx={{ color: "#bd8f59" }} />
                            ) : (
                              <Visibility sx={{ color: "#bd8f59" }} />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    fullWidth
                    size="small"
                    label="Confirm Password"
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    margin="normal"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Lock sx={{ color: "#bd8f59" }} />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() =>
                              setShowConfirmPassword(!showConfirmPassword)
                            }
                          >
                            {showConfirmPassword ? (
                              <VisibilityOff sx={{ color: "#bd8f59" }} />
                            ) : (
                              <Visibility sx={{ color: "#bd8f59" }} />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    disabled={loading}
                    endIcon={!loading && <ArrowForward />}
                    sx={{
                      mt: 3,
                      py: 1.5,
                      bgcolor: "#bd8f59",
                      "&:hover": { bgcolor: "#a46c35" },
                    }}
                  >
                    {loading ? (
                      <CircularProgress size={24} sx={{ color: "white" }} />
                    ) : (
                      "View Tender"
                    )}
                  </Button>
                </Box>
              )}
              {step === 2 && (
                <Box component="form" onSubmit={handleOtpSubmit}>
                  {error && (
                    <Alert severity="error" sx={{ mb: 2 }}>
                      {error}
                    </Alert>
                  )}
                  <TextField
                    fullWidth
                    size="small"
                    label="Email"
                    value={email}
                    margin="normal"
                    disabled
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Email sx={{ color: "#bd8f59" }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    fullWidth
                    size="small"
                    label="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    margin="normal"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockIcon sx={{ color: "#bd8f59" }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    disabled={loading}
                    sx={{
                      mt: 3,
                      py: 1.5,
                      bgcolor: "#bd8f59",
                      "&:hover": { bgcolor: "#a46c35" },
                    }}
                  >
                    {loading ? (
                      <CircularProgress size={24} sx={{ color: "white" }} />
                    ) : (
                      "Verify OTP"
                    )}
                  </Button>
                </Box>
              )}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  {confetti && (
                    <Confetti
                      width={window.innerWidth}
                      height={window.innerHeight}
                      recycle={false}
                      numberOfPieces={200}
                    />
                  )}
                  <Box textAlign="center" py={5}>
                    <CheckCircle sx={{ fontSize: 80, color: "#bd8f59" }} />
                    <Typography variant="h6" sx={{ mt: 2, fontWeight: 600 }}>
                      Successfully Registered!
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      Please wait for approval. Thank you.
                    </Typography>
                  </Box>
                </motion.div>
              )}
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
