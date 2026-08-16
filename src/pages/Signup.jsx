import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../styles/Signup.css";


function Signup() {

  const navigate = useNavigate();

  // Store the input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Show or hide passwords
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  // When Create Account is clicked
  const handleSignup = (e) => {

    e.preventDefault();


    // Check if passwords match
    if (password !== confirmPassword) {

      alert("Passwords do not match!");

      return;
    }


    // Frontend only
    alert("Account created successfully!");


    // Go to Login page
    navigate("/login");
  };


  return (

    <div className="page">

      {/* ==============================
          NAVIGATION BAR
      ============================== */}

      <nav className="navbar">

        <div className="logo">
          DurjogShohay
        </div>


        <div className="nav-links">

          <Link to="/">
            Home
          </Link>

          <Link to="/login">
            Login
          </Link>

          <Link to="/signup" className="active">
            Sign Up
          </Link>

        </div>

      </nav>


      {/* ==============================
          MAIN SIGN UP CONTAINER
      ============================== */}

      <div className="signup-container">


        {/* ==============================
            LEFT SIDE
        ============================== */}

        <div className="signup-left">

          <h1>
            Create Account
          </h1>


          <form onSubmit={handleSignup}>


            {/* Full Name */}

            <div className="input-group">

              <label>
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

            </div>


            {/* Email */}

            <div className="input-group">

              <label>
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

            </div>


            {/* Password Row */}

            <div className="password-row">


              {/* Password */}

              <div className="input-group password-group">

                <label>
                  Password
                </label>


                <div className="password-input">

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
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

              </div>


              {/* Confirm Password */}

              <div className="input-group password-group">

                <label>
                  Confirm Password
                </label>


                <div className="password-input">

                  <input
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) =>
                      setConfirmPassword(e.target.value)
                    }
                    required
                  />


                  <button
                    type="button"
                    className="eye-button"
                    onClick={() =>
                      setShowConfirmPassword(
                        !showConfirmPassword
                      )
                    }
                  >
                    {showConfirmPassword ? "🙈" : "👁"}
                  </button>

                </div>

              </div>

            </div>


            {/* Create Account Button */}

            <button
              type="submit"
              className="create-button"
            >
              Create Account
            </button>


            {/* Login */}

            <p className="login-text">

              Already have an account?{" "}

              <Link to="/login">
                Login
              </Link>

            </p>

          </form>

        </div>


        {/* ==============================
            RIGHT GREEN PANEL
        ============================== */}

        <div className="signup-right">

          <div className="shape shape-one"></div>

          <div className="shape shape-two"></div>

          <div className="shape shape-three"></div>

          <div className="shape shape-four"></div>

        </div>

      </div>

    </div>
  );
}


export default Signup;