import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loginAnimation from "../Images/loginAnimation.gif";
import { Checkbox, FormControlLabel, Box, Skeleton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [hide, setHide] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [passwordType, setPasswordType] = useState("password");

  const togglePassword = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  const handleRememberMe = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setHide(true);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!data.email || !data.password) {
      toast.error("Please enter both email and password.", { autoClose: 2000 });
      setHide(false);
      return;
    }

    if (!emailRegex.test(data.email)) {
      toast.error("Please enter a valid email.", { autoClose: 2000 });
      setHide(false);
      return;
    }

    try {
      console.log("=== LOGIN ATTEMPT ===");
      console.log("Email:", data.email);
      console.log("Password:", data.password);
      console.log("API URL:", `${import.meta.env.VITE_API_BASE_URL}/login`);

      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: data.email,
            password: data.password,
          }),
        }
      );

      console.log("Response status:", response.status);
      const responseData = await response.json();
      console.log("=== BACKEND RESPONSE ===");
      console.log("Full response:", responseData);
      console.log("Status:", responseData.status);
      console.log("Message:", responseData.message);
      console.log("Data object:", responseData.data);
      console.log("Token:", responseData.data?.token);
      console.log("User Role:", responseData.data?.user_role);
      console.log("========================");

      if (response.ok) {
        // Success
        console.log("Login successful!");

        // Store token and user data based on actual backend response structure
        if (responseData.data && responseData.data.token) {
          localStorage.setItem("token", responseData.data.token);
          console.log("Token stored:", responseData.data.token);
        }

        if (responseData.data && responseData.data.user_role) {
          localStorage.setItem("user_role", responseData.data.user_role);
          console.log("User role stored:", responseData.data.user_role);
        }

        // Show success message
        toast.success("Login successful! Redirecting...", { autoClose: 2000 });

        // Remember me functionality
        if (rememberMe) {
          localStorage.setItem("remembered_email", data.email);
        } else {
          localStorage.removeItem("remembered_email");
        }

        // Redirect after a short delay
        setTimeout(() => {
          navigate("/AdminPage");
        }, 1500);
      } else {
        // Error
        const errorMessage =
          responseData.message ||
          responseData.error ||
          "Login failed. Please try again.";
        toast.error(errorMessage, { autoClose: 3000 });
        setHide(false);
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error(
        "Network error. Please check your connection and try again.",
        { autoClose: 3000 }
      );
      setHide(false);
    }
  };

  const [loading, setLoading] = useState(true);

  // Check for remembered email on component mount
  React.useEffect(() => {
    const rememberedEmail = localStorage.getItem("remembered_email");
    if (rememberedEmail) {
      setData((prev) => ({ ...prev, email: rememberedEmail }));
      setRememberMe(true);
    }
  }, []);

  return (
    <div className="main-loginContainer" style={{ background: "#F7F4F2" }}>
      <div className="login-container">
        <div className="login-card">
          <h1 className="d-flex justify-content-center align-items-center">
            Welcome Back
          </h1>
          <Box display="flex" justifyContent="center" alignItems="center">
            {loading && (
              <Skeleton variant="circular" width={120} height={120} />
            )}
            <img
              src={loginAnimation}
              alt="Sign Up"
              loading="lazy"
              onLoad={() => setLoading(false)}
            />
          </Box>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <input
                type="email"
                id="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
            </div>
            <div className="input-group password-group">
              <input
                type={passwordType}
                id="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                placeholder="Password"
                required
              />
              <span className="eye-icon" onClick={togglePassword}>
                {passwordType === "password" ? "🙈" : "👁️"}
              </span>
            </div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={rememberMe}
                  onChange={handleRememberMe}
                  color="primary"
                />
              }
              label="Remember Me"
            />
            <button type="submit" className="login-button" disabled={hide}>
              {hide ? "Logging In..." : "LOGIN"}
            </button>
          </form>
          <p className="signup-text">
            <span className="d-flex justify-content-center align-items-center">
              Start your journey – Log in and take the next step! 🚀✨
            </span>
          </p>
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};

export default React.memo(AdminLogin);
