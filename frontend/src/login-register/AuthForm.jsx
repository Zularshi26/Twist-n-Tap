import React, { useState } from "react";
import "./login.css"; // Ensure this file is in the correct path
import "boxicons/css/boxicons.min.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  // State for form input values
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // To show error messages

  // Handle button clicks
  const handleLoginClick = () => {
    setIsLogin(true);
    setErrorMessage(""); // Clear error message when switching to login
  };

  const handleRegisterClick = () => {
    setIsLogin(false);
    setErrorMessage(""); // Clear error message when switching to register
  };

  // Handle login form submission
  const handleLoginSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed. Please try again.");
      }

      console.log("Login Successful", data);
     
    } catch (error) {
      setErrorMessage(error.message || "Login failed. Please try again.");
    }
  };

  // Handle register form submission
  const handleRegisterSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed. Please try again.");
      }

      console.log("Registration Successful", data);
    } catch (error) {
      setErrorMessage(error.message || "Registration failed. Please try again.");
    }
  };

  return (
    <div className="login-bg">
    <div className="form-container">
      {/* Left Column */}
      <div
        className="col col-1"
        style={{
          borderRadius: isLogin ? "0 30% 20% 0" : "0 20% 30% 0",
        }}
      >
        <div className="image-layer">
          <img
            src="/LoginImg/white-outline.png"
            className="form-image-main"
            alt="Main"
          />
          <
            img src="/LoginImg/left_img.png"
            className="form-image left"
            alt="Main"
          />
          <
            img src="/LoginImg/coin.png"
            className="form-image coin"
            alt="Main"
          />
          <
            img src="/LoginImg/cloud.png"
            className="form-image cloud"
            alt="Main"
          />
          <
            img src="/LoginImg/dots.png"
            className="form-image dots"
            alt="Main"
          />
          <
            img src="/LoginImg/spring.png"
            className="form-image spring"
            alt="Main"
          />
        </div>
        <p className="featured-words">
          You Are Few Minutes Away From Boosting Your Skills With{" "}
          <span>Twist'n Tap</span>
        </p>
      </div>

      {/* Right Column */}
      <div className="col col-2">
        {/* Button Box */}
        <div className="btn-box">
          <button
            className="btn btn-1"
            id="login"
            onClick={handleLoginClick}
            style={{
              backgroundColor: isLogin ? "#21264D" : "rgba(255,255,255,0.2)",
            }}
          >
            Sign In
          </button>
          <button
            className="btn btn-2"
            id="Register"
            onClick={handleRegisterClick}
            style={{
              backgroundColor: isLogin ? "rgba(255,255,255,0.2)" : "#21264D",
            }}
          >
            Sign Up
          </button>
        </div>

        {/* Login Form */}
        <div
          className="login-form"
          style={{
            left: isLogin ? "50%" : "150%",
            opacity: isLogin ? 1 : 0,
          }}
        >
          <div className="form-title">
            <span>Sign In</span>
          </div>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <form onSubmit={handleLoginSubmit}>
            <div className="form-inputs">
              <div className="input-box">
                <input
                  type="email"
                  className="input-field"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <i className="bx bx-user icon"></i>
              </div>
              <div className="input-box">
                <input
                  type="password"
                  className="input-field"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <i className="bx bx-lock-alt icon"></i>
              </div>
              <div className="forgot-pass">
                <a href="#">Forget Password?</a>
              </div>
              <div className="input-box">
                <button className="input-submit">
                  <span>Sign In</span>
                  <i className="bx bx-right-arrow-alt"></i>
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Register Form */}
        <div
          className="register-form"
          style={{
            left: isLogin ? "-50%" : "50%",
            opacity: isLogin ? 0 : 1,
          }}
        >
          <div className="form-title">
            <span>Create Account</span>
          </div>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <form onSubmit={handleRegisterSubmit}>
            <div className="form-inputs">
              <div className="input-box">
                <input
                  type="email"
                  className="input-field"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <i className="bx bx-envelope icon"></i>
              </div>
              <div className="input-box">
                <input
                  type="text"
                  className="input-field"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <i className="bx bx-user icon"></i>
              </div>
              <div className="input-box">
                <input
                  type="password"
                  className="input-field"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <i className="bx bx-lock-alt icon"></i>
              </div>
              <div className="forgot-pass">
                <a href="#">Forget Password?</a>
              </div>
              <div className="input-box">
                <button className="input-submit">
                  <span>Sign Up</span>
                  <i className="bx bx-right-arrow-alt"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AuthForm;
