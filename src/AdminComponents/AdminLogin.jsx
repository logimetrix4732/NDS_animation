import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import loginAnimation from "../Images/loginAnimation.gif";
import { Checkbox, FormControlLabel, Box, Skeleton } from "@mui/material";
import "./AdminLogin.css";
import { postFetchData } from "../Api/Api";

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

  const handleLogin = (e) => {
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

    mutation.mutate(data);
  };

  const [loading, setLoading] = useState(true);

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
