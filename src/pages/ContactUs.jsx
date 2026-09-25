import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

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

  const [contactInfo, setContactInfo] = useState(null);

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");


  useEffect(() => {

    const fetchContactInfo = async () => {

      try {

        const response = await fetch(
          "http://localhost:5001/api/contact-info"
        );

        const data = await response.json();

        setContactInfo(data);

      } catch (error) {

        console.log("Error:", error);

      }
    };

    fetchContactInfo();

  }, []);


  const handleSubmit = async (e) => {

    e.preventDefault();

    let valid = true;


    if (name === "" || email === "" || message === "") {

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

        setEmailError(
          "Please enter a valid email address."
        );

        valid = false;

    } else {

        setEmailError("");

    }


    if (!valid) {

        return;
    }


    try {

        const response = await fetch(
            "http://localhost:5001/api/contact",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message
                })
            }
        );

        const data = await response.json();

        if (response.ok) {

            setSuccess(
                "Thank you! Your message has been received."
            );

            setName("");
            setEmail("");
            setMessage("");

        } else {

            setSuccess(
                data.message || "Could not send your message."
            );

        }

    } catch (error) {

        console.log("Error:", error);

        setSuccess(
            "Could not connect to the server."
        );

    }
  };


  return (

    <div className="contact-page">

        <NavBar />

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
                {contactInfo?.email}
              </p>

            </div>

          </div>


          <div className="contact-info-card">

            <div className="contact-icon">
              <FaPhone />
            </div>

            <div>

              <h3>
                Phone
              </h3>

              <p>
                {contactInfo?.phone}
              </p>

            </div>

          </div>


          <div className="contact-info-card">

            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>

            <div>

              <h3>
                Location
              </h3>

              <p>
                {contactInfo?.location}
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


            <div className="contact-input-group">

              <label>
                Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                value={name}
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
              />

              {nameError && (
                <p className="contact-error">
                  {nameError}
                </p>
              )}

            </div>


            <div className="contact-input-group">

              <label>
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
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
              />

              {emailError && (
                <p className="contact-error">
                  {emailError}
                </p>
              )}

            </div>


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


            {success && (

              <p className="contact-success">
                {success}
              </p>

            )}


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