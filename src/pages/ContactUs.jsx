import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from "react-icons/fa";

import "../styles/ContactUs.css";


function ContactUs() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [success, setSuccess] = useState("");


  const handleSubmit = (e) => {

    e.preventDefault();

    if (name === "" || email === "" || message === "") {

      alert("Please fill in all the fields.");

      return;
    }

    setSuccess(
      "Thank you! Your message has been received."
    );

    setName("");
    setEmail("");
    setMessage("");
  };


  return (

    <div className="contact-page">


      

      <nav className="contact-navbar">

        <div className="contact-logo">
          DurjogShohay
        </div>


        <div className="contact-nav-links">

          <Link to="/">
            Home
          </Link>

          <Link to="/get-help">
            Get Help ▼
          </Link>

          <Link to="/give-help">
            Give Help ▼
          </Link>

          <Link to="/track">
            Track ▼
          </Link>

          <Link to="/community">
            Community ▼
          </Link>

          <Link to="/about">
            About Us
          </Link>

          <Link to="/contact" className="active">
            Contact Us
          </Link>

          <Link to="/login">
            Login
          </Link>

          <Link to="/signup">
            Sign Up
          </Link>

        </div>

      </nav>


    

      <section className="contact-hero">

        <p className="contact-small-title">
          GET IN TOUCH
        </p>

        <h1>
          Contact Us
        </h1>

        <p>
          Have a question, suggestion or need help?
          <br />
          We are here to hear from you.
        </p>

      </section>


    

      <section className="contact-section">


        

        <div className="contact-information">

          <p className="section-label">
            CONTACT INFORMATION
          </p>

          <h2>
            We would love to
            hear from you.
          </h2>

          <p className="contact-description">
            If you have any questions about DurjogShohay,
            need assistance or would like to share feedback,
            feel free to contact us.
          </p>


          {/* Email */}

          <div className="contact-info-card">

            <div className="contact-icon">
  <FaEnvelope />
</div>

            <div>

              <h3>
                Email
              </h3>

              <p>
                support@durjogshohay.com
              </p>

            </div>

          </div>


          {/* Phone */}

          <div className="contact-info-card">

            <div className="contact-icon">
  <FaPhone />
</div>

            <div>

              <h3>
                Phone
              </h3>

              <p>
                +880 1XXX-XXXXXX
              </p>

            </div>

          </div>


          {/* Location */}

          <div className="contact-info-card">

            <div className="contact-icon">
  <FaMapMarkerAlt />
</div>

            <div>

              <h3>
                Location
              </h3>

              <p>
                Dhaka, Bangladesh
              </p>

            </div>

          </div>

        </div>


        

        <div className="contact-form-container">

          <h2>
            Send us a message
          </h2>

          <p>
            Fill out the form below and we'll get back
            to you as soon as possible.
          </p>


          <form onSubmit={handleSubmit}>


            {/* Name */}

            <div className="contact-input-group">

              <label>
                Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

            </div>


            {/* Email */}

            <div className="contact-input-group">

              <label>
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

            </div>


            {/* Message */}

            <div className="contact-input-group">

              <label>
                Message
              </label>

              <textarea
                placeholder="Write your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

            </div>


            {/* Success message */}

            {success && (

              <p className="contact-success">
                {success}
              </p>

            )}


            {/* Submit */}

            <button
              type="submit"
              className="contact-button"
            >
              Send Message
            </button>

          </form>

        </div>

      </section>


      
      <footer className="contact-footer">

        <p>
          © 2026 DurjogShohay. Stay safe, stay prepared.
        </p>

      </footer>

    </div>
  );
}


export default ContactUs;