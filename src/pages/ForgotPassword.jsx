import { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/ForgotPassword.css";

function ForgotPassword() {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  
  const handleSubmit = (e) => {

    e.preventDefault();

    setMessage("");

    
    if (email === "") {

      setMessage("Please enter your email address.");

      return;
    }


    
    if (!email.includes("@")) {

      setMessage("Please enter a valid email address.");

      return;
    }


    
    setMessage(
      "Password reset link has been sent to your email."
    );
  };


  return (

    <div className="forgot-page">


      

      <div className="forgot-logo">
        DurjogShohay
      </div>


      

      <div className="forgot-container">


        {/* Heading */}

        <h1>
          Forgot Password?
        </h1>


        {/* Description */}

        <p className="forgot-description">

          Enter your email address and we'll send you
          a link to reset your password.

        </p>


        
        <form onSubmit={handleSubmit}>


          {/* Email */}

          <div className="forgot-input-group">

            <label>
              Email
            </label>

            <input
              className="forgot-input"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setMessage("");
              }}
            />

          </div>


          {/* Message */}

          {message && (
            <p className="success-message">
              {message}
            </p>
          )}


          {/* Send Email Button */}

          <button
            type="submit"
            className="forgot-button"
          >
            Send Email
          </button>


        </form>


        

        <Link
          to="/login"
          className="back-login"
        >

          <span className="back-arrow">
            ←
          </span>

          Back to Login

        </Link>


      </div>

    </div>
  );
}


export default ForgotPassword;