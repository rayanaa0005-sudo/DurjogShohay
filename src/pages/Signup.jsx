import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Signup.css";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    let valid = true;

    if (name === "" || email === "" || password === "" || confirmPassword === "") {
      alert("Please fill in all the fields.");
      return;
    }

    if (!/^[A-Za-z .'-]+$/.test(name)) {
      setNameError(
        "Name can contain letters, spaces, dots, apostrophes and hyphens only."
      );
      valid = false;
    } else {
      setNameError("");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!valid) {
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5001/api/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Signup failed");
        return;
      }

      alert(data.message || "Account created successfully!");
      navigate("/login");

    } catch (error) {
      console.error("Signup error:", error);
      alert(
        "Cannot connect to the server. Make sure the backend is running."
      );
    }
  };

  return (
    <div className="page">
      <nav className="navbar">
        <div className="logo">
          DurjogShohay
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup" className="active">
            Sign Up
          </Link>
        </div>
      </nav>

      <div className="signup-container">
        <div className="signup-left">
          <h1>Create Account</h1>

          <form onSubmit={handleSignup}>

            <div className="input-group">
              <label>Full Name</label>

              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                className={nameError ? "signup-input-error" : ""}
                onChange={(e) => {

                  const value = e.target.value;

                  if (/^[A-Za-z .'-]*$/.test(value)) {
                    setName(value);
                    setNameError("");
                  } else {
                    setNameError(
                      "Name can contain letters, spaces, dots, apostrophes and hyphens only."
                    );
                  }

                }}
                required
              />

              {nameError && (
                <p className="signup-error">
                  {nameError}
                </p>
              )}
            </div>


            <div className="input-group">
              <label>Email</label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                className={emailError ? "signup-input-error" : ""}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError("");
                }}
                onBlur={(e) => {

                  const value = e.target.value;

                  if (
                    value &&
                    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
                  ) {
                    setEmailError(
                      "Please enter a valid email address."
                    );
                  } else {
                    setEmailError("");
                  }

                }}
                required
              />

              {emailError && (
                <p className="signup-error">
                  {emailError}
                </p>
              )}
            </div>


            <div className="password-row">

              <div className="input-group password-group">
                <label>Password</label>

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
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    👁
                  </button>
                </div>
              </div>


              <div className="input-group password-group">
                <label>Confirm Password</label>

                <div className="password-input">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
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
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                  >
                    👁
                  </button>
                </div>
              </div>

            </div>


            <button
              type="submit"
              className="create-button"
            >
              Create Account
            </button>

            <p className="login-text">
              Already have an account?{" "}
              <Link to="/login">
                Login
              </Link>
            </p>

          </form>
        </div>

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