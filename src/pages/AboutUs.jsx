import { Link } from "react-router-dom";

import {
  FaShieldAlt,
  FaExclamationTriangle,
  FaWater,
  FaUsers,
  FaMapMarkerAlt
} from "react-icons/fa";

import "../styles/AboutUs.css";

function AboutUs() {

  return (
    <div className="about-page">

      

      <nav className="home-navbar">

        <div className="home-logo">
          DurjogShohay
        </div>


        <div className="home-nav-links">

          <Link to="/">
            Home
          </Link>

          <Link to="/about" className="active">
            About Us
          </Link>

          <Link to="/contact">
            Contact
          </Link>

          <Link to="/login">
            Login
          </Link>

          <Link to="/signup">
            Sign Up
          </Link>

        </div>

      </nav>


      
      <section className="about-hero">

        <p className="about-small-title">
          ABOUT DURJOGSHOHAY
        </p>

        <h1>
          Helping People Stay
          <br />
          Safe & Prepared
        </h1>

        <p className="about-intro">
          DurjogShohay is a disaster assistance platform designed
          to help people access important emergency services,
          disaster information and community support when they
          need it most.
        </p>

      </section>


      

      <section className="about-section">

        <div className="about-text">

          <p className="section-label">
            OUR MISSION
          </p>

          <h2>
            Making disaster assistance
            easier and faster.
          </h2>

          <p>
            During a disaster or emergency, finding the right
            information and getting help quickly can be difficult.
            DurjogShohay brings important services and resources
            together in one simple platform.
          </p>

          <p>
            Our goal is to make emergency assistance easier to
            access and help communities become more prepared
            for disasters.
          </p>

        </div>


        <div className="about-mission-card">

          <div className="mission-circle">
  <FaShieldAlt />
</div>

          <h3>
            Your Safety,
            <br />
            Our Priority
          </h3>

          <p>
            Reliable information and assistance
            when it matters most.
          </p>

        </div>

      </section>


      

      <section className="features-section">

        <p className="section-label">
          WHAT WE PROVIDE
        </p>

        <h2>
          One platform for disaster assistance
        </h2>

        <p className="features-description">
          DurjogShohay connects people with essential
          information and services during emergencies.
        </p>


        <div className="about-card-grid">


          {/* Emergency Help */}

          <div className="about-card">

           <div className="about-card-icon">
          <FaExclamationTriangle />
          </div>

            <h3>
              Emergency Help
            </h3>

            <p>
              Quickly access important emergency
              services when you need immediate help.
            </p>

          </div>


          {/* Disaster Information */}

          <div className="about-card">

            <div className="about-card-icon">
  <FaWater />
</div>

            <h3>
              Disaster Information
            </h3>

            <p>
              Learn important safety procedures for
              floods, cyclones, earthquakes and fires.
            </p>

          </div>


          {/* Community */}

          <div className="about-card">

           <div className="about-card-icon">
  <FaUsers />
</div>

            <h3>
              Community Support
            </h3>

            <p>
              Help communities work together by
              sharing information and supporting others.
            </p>

          </div>


          {/* Directory */}

          <div className="about-card">

            <div className="contact-icon">
  <FaMapMarkerAlt />
</div>

            <h3>
              Emergency Directory
            </h3>

            <p>
              Find important emergency contacts and
              services in one convenient place.
            </p>

          </div>

        </div>

      </section>


      

      <section className="vision-section">

        <div className="vision-content">

          <p className="section-label">
            OUR VISION
          </p>

          <h2>
            A safer and more prepared community.
          </h2>

          <p>
            We envision a future where people can easily
            find the help, information and resources they
            need before, during and after a disaster.
          </p>

        </div>

      </section>


      

      <footer className="home-footer">

        <p>
          © 2026 DurjogShohay. Stay safe, stay prepared.
        </p>

      </footer>

    </div>
  );
}

export default AboutUs;