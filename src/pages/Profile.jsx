import { Link } from "react-router-dom";

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaTint,
  FaMapMarkerAlt,
  FaEdit
} from "react-icons/fa";

import "../styles/Profile.css";


function Profile() {

  return (

    <div className="profile-page">

      {/* ==============================
          NAVIGATION BAR
      ============================== */}

      <nav className="home-navbar">

        <div className="home-logo">
          DurjogShohay
        </div>

        <div className="home-nav-links">

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

          <Link to="/profile" className="active">
            Profile
          </Link>

        </div>

      </nav>


      {/* ==============================
          PROFILE HEADER
      ============================== */}

      <section className="profile-header">

        <p className="profile-small-title">
          YOUR ACCOUNT
        </p>

        <h1>
          My Profile
        </h1>

        <p>
          Manage your personal information and
          emergency details.
        </p>

      </section>


      {/* ==============================
          PROFILE CONTENT
      ============================== */}

      <main className="profile-container">


        {/* PROFILE CARD */}

        <div className="profile-card">

          <div className="profile-picture">
            <FaUser />
          </div>

          <h2>
            User Name
          </h2>

          <p className="profile-role">
            Registered User
          </p>

          <button className="edit-profile-button">
            <FaEdit />
            Edit Profile
          </button>

        </div>


        {/* PERSONAL INFORMATION */}

        <div className="information-card">

          <div className="card-heading">

            <div className="heading-icon">
              <FaUser />
            </div>

            <div>
              <h2>
                Personal Information
              </h2>

              <p>
                Your basic account information
              </p>
            </div>

          </div>


          <div className="profile-fields">


            {/* NAME */}

            <div className="profile-field">

              <label>
                Full Name
              </label>

              <div className="field-value">

                <FaUser />

                <span>
                  User Name
                </span>

              </div>

            </div>


            {/* EMAIL */}

            <div className="profile-field">

              <label>
                Email Address
              </label>

              <div className="field-value">

                <FaEnvelope />

                <span>
                  user@example.com
                </span>

              </div>

            </div>


            {/* PHONE */}

            <div className="profile-field">

              <label>
                Phone Number
              </label>

              <div className="field-value">

                <FaPhone />

                <span>
                  01XXXXXXXXX
                </span>

              </div>

            </div>


            {/* BLOOD GROUP */}

            <div className="profile-field">

              <label>
                Blood Group
              </label>

              <div className="field-value">

                <FaTint />

                <span>
                  O+
                </span>

              </div>

            </div>


            {/* DISTRICT */}

            <div className="profile-field">

              <label>
                District
              </label>

              <div className="field-value">

                <FaMapMarkerAlt />

                <span>
                  Dhaka
                </span>

              </div>

            </div>


            {/* ACCOUNT TYPE */}

            <div className="profile-field">

              <label>
                Account Type
              </label>

              <div className="field-value">

                <FaUser />

                <span>
                  Registered User
                </span>

              </div>

            </div>

          </div>

        </div>

      </main>


      {/* ==============================
          FOOTER
      ============================== */}

      <footer className="home-footer">

        <p>
          © 2026 DurjogShohay. Stay safe, stay prepared.
        </p>

      </footer>

    </div>

  );
}


export default Profile;