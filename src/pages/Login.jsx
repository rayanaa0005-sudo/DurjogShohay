import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../styles/Login.css";


function Login() {

  const navigate = useNavigate();

  // Input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Error messages
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Show/hide password
  const [showPassword, setShowPassword] = useState(false);


  // Login button
  const handleLogin = (e) => {

    e.preventDefault();

    setEmailError("");
    setPasswordError("");

    let hasError = false;


    // Check email
    if (email === "") {

      setEmailError("Email is required");

      hasError = true;

    } else if (!email.includes("@")) {

      setEmailError("Please enter a valid email");

      hasError = true;
    }


    // Check password
    if (password === "") {

      setPasswordError("Password is required");

      hasError = true;

    } else if (password.length < 6) {

      setPasswordError(
        "Password must be at least 6 characters"
      );

      hasError = true;
    }


    // Stop if there is an error
    if (hasError) {
      return;
    }


    // Frontend only
    alert("Login successful!");

    navigate("/");
  };


  return (

    <div className="page">


      {/* =================================
          NAVIGATION BAR
      ================================= */}

      <nav className="navbar">

        <div className="logo">
          DurjogShohay
        </div>


        <div className="nav-links">

          <Link to="/">
            Home
          </Link>

          <Link to="/about">
            About Us
          </Link>

          <Link to="/">
            Contact
          </Link>

          <Link
            to="/login"
            className="active"
          >
            Login
          </Link>

        </div>

      </nav>


      {/* =================================
          MAIN LOGIN CONTAINER
      ================================= */}

      <div className="login-container">


        {/* =================================
            LOGIN FORM - LEFT
        ================================= */}

        <div className="login-left">

          <h1>
            Welcome Back
          </h1>


          <p className="login-subtitle">
            Login to your DurjogShohay account
          </p>


          <form onSubmit={handleLogin}>


            {/* EMAIL */}

            <div className="input-group">

              <label>
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                className={
                  emailError
                    ? "input-error"
                    : ""
                }
                onChange={(e) => {

                  setEmail(e.target.value);

                  setEmailError("");

                }}
              />


              {emailError && (

                <p className="error-message">
                  {emailError}
                </p>

              )}

            </div>


            {/* PASSWORD */}

            <div className="input-group">

              <label>
                Password
              </label>


              <div className="password-input">

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Enter your password"
                  value={password}
                  className={
                    passwordError
                      ? "input-error"
                      : ""
                  }
                  onChange={(e) => {

                    setPassword(e.target.value);

                    setPasswordError("");

                  }}
                />


                <button
                  type="button"
                  className="eye-button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? "🙈" : "👁"}
                </button>

              </div>


              {passwordError && (

                <p className="error-message">
                  {passwordError}
                </p>

              )}

            </div>


            {/* FORGOT PASSWORD */}

            <div className="forgot-password">

              <Link to="/forgot-password">
                Forgot Password?
              </Link>

            </div>


            {/* LOGIN BUTTON */}

            <button
              type="submit"
              className="login-button"
            >
              Login
            </button>


            {/* SIGN UP */}

            <p className="login-text">

              Don't have an account?{" "}

              <Link to="/signup">
                Sign Up
              </Link>

            </p>


          </form>

        </div>


        {/* =================================
            GREEN PANEL - RIGHT
        ================================= */}

        <div className="login-right">

          <div className="shape shape-one"></div>

          <div className="shape shape-two"></div>

          <div className="shape shape-three"></div>

          <div className="shape shape-four"></div>

        </div>


      </div>

    </div>
  );
}


export default Login;