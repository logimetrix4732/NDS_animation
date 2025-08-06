import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Box,
  Typography,
  IconButton,
  Alert,
  InputAdornment,
  Divider,
  Paper,
} from "@mui/material";
import {
  Close,
  Login,
  PersonAdd,
  Email,
  Lock,
  Visibility,
  VisibilityOff,
  Google,
  Facebook,
  Apple,
  ArrowForward,
} from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";

const LoginModal = ({ open, onClose, onLogin }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    if (isSignUp && password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    onLogin(email, password);
    onClose();
  };

  const handleToggleMode = () => {
    setIsSignUp(!isSignUp);
    setError("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 30,
    },
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
    exit: {
      opacity: 0,
      scale: 0.9,
      y: 30,
      transition: { duration: 0.3 },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.1, duration: 0.4 },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.98 },
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
              maxWidth: "450px",
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
            {/* Header with solid brown background */}
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
                  alignItems: "flex-start",
                }}
              >
                <Box>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      fontSize: "1.75rem",
                      color: "#ffffff",
                    }}
                  >
                    {isSignUp ? "Create Account" : "Welcome Back"}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      opacity: 0.9,
                      fontWeight: 400,
                      fontSize: "0.95rem",
                      color: "#ffffff",
                    }}
                  >
                    {isSignUp
                      ? "Join our tender management platform"
                      : "Sign in to access tender documents"}
                  </Typography>
                </Box>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconButton
                    onClick={onClose}
                    size="medium"
                    sx={{
                      color: "white",
                      "&:hover": {
                        bgcolor: "rgba(255, 255, 255, 0.1)",
                      },
                    }}
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
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <Alert
                        severity="error"
                        sx={{
                          mb: 2,
                          borderRadius: 1.5,
                          fontSize: "0.875rem",
                        }}
                      >
                        {error}
                      </Alert>
                    </motion.div>
                  )}

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
                          <Email sx={{ color: "#bd8f59", fontSize: 20 }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 1.5,
                        "&:hover fieldset": {
                          borderColor: "#bd8f59",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#bd8f59",
                        },
                      },
                      "& .MuiInputLabel-root": {
                        color: "#666",
                      },
                    }}
                  />

                  <TextField
                    fullWidth
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    margin="normal"
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Lock sx={{ color: "#bd8f59", fontSize: 20 }} />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                            size="small"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 1.5,
                        "&:hover fieldset": {
                          borderColor: "#bd8f59",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#bd8f59",
                        },
                      },
                      "& .MuiInputLabel-root": {
                        color: "#666",
                      },
                    }}
                  />

                  {isSignUp && (
                    <TextField
                      fullWidth
                      label="Confirm Password"
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      margin="normal"
                      required
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Lock sx={{ color: "#bd8f59", fontSize: 20 }} />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                              }
                              edge="end"
                              size="small"
                            >
                              {showConfirmPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 1.5,
                          "&:hover fieldset": {
                            borderColor: "#bd8f59",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#bd8f59",
                          },
                        },
                        "& .MuiInputLabel-root": {
                          color: "#666",
                        },
                      }}
                    />
                  )}

                  <motion.div
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      endIcon={<ArrowForward />}
                      sx={{
                        mt: 3,
                        mb: 2,
                        py: 1.5,
                        bgcolor: "#bd8f59",
                        borderRadius: 1.5,
                        textTransform: "none",
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "#ffffff",
                        "&:hover": {
                          bgcolor: "#a46c35",
                        },
                      }}
                    >
                      {isSignUp ? "Create Account" : "Sign In"}
                    </Button>
                  </motion.div>

                  {/* Toggle Mode */}
                  <Box sx={{ textAlign: "center" }}>
                    <motion.div whileHover={{ scale: 1.02 }}>
                      <Button
                        variant="text"
                        onClick={handleToggleMode}
                        sx={{
                          color: "#666",
                          fontWeight: 500,
                          textTransform: "none",
                          fontSize: "0.875rem",
                          "&:hover": {
                            background: "rgba(189, 143, 89, 0.08)",
                          },
                          "& .MuiButton-endIcon": {
                            color: "#bd8f59",
                            fontWeight: 600,
                          },
                        }}
                      >
                        {isSignUp
                          ? "Already have an account? Sign In"
                          : "Don't have an account? Sign Up"}
                      </Button>
                    </motion.div>
                  </Box>
                </Box>
              </motion.div>
            </DialogContent>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

LoginModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
};

export default LoginModal;
