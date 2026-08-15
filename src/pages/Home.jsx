import { Link } from "react-router-dom";

import {
  FaAmbulance,
  FaFireExtinguisher,
  FaShieldAlt,
  FaHospital,
  FaExclamationTriangle,
  FaWater,
  FaWind,
  FaMountain,
  FaFire,
  FaUser
} from "react-icons/fa";

import "../styles/Home.css";


function Home() {

  // Simple button action
  const showMessage = (service) => {
    alert(`${service} service selected.`);
  };


  return (

    <div className="home-page">


      {/* ==============================
          NAVIGATION BAR
      ============================== */}

      <nav className="home-navbar">

        <div className="home-logo">
          DurjogShohay
        </div>


        <div className="home-nav-links">

          <Link to="/" className="active">
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

          <Link to="/profile">
            <FaUser />
              Profile
          </Link>

          <Link to="/login">
            Login
          </Link>

          <Link to="/signup">
            Sign Up
          </Link>

        </div>

      </nav>


      {/* ==============================
          WELCOME SECTION
      ============================== */}

      <section className="welcome-section">

        <div className="welcome-text">

          <p className="small-title">
            YOUR SAFETY, OUR PRIORITY
          </p>

          <h1>
            Stay Safe.
            <br />
            Stay Prepared.
          </h1>

          <p className="welcome-description">
            DurjogShohay helps you find emergency
            services and important disaster information
            when you need it most.
          </p>


          <button
            className="emergency-button"
            onClick={() => showMessage("Emergency Help")}
          >
            <FaExclamationTriangle />
            Emergency Help
          </button>

        </div>


        {/* Decorative circle */}

        <div className="welcome-shape">

          <div className="circle-one"></div>

          <div className="circle-two"></div>

        </div>

      </section>


      {/* ==============================
          EMERGENCY SERVICES
      ============================== */}

      <section className="services-section">

        <h2>
          Emergency Services
        </h2>

        <p className="section-description">
          Quickly access important emergency services.
        </p>


        <div className="services-grid">


          {/* Ambulance */}

          <div className="service-card">

            <div className="service-icon">
              <FaAmbulance />
            </div>

            <h3>
              Ambulance
            </h3>

            <p>
              Get emergency medical assistance.
            </p>

            <button
              onClick={() => showMessage("Ambulance")}
            >
              View
            </button>

          </div>


          {/* Fire Service */}

          <div className="service-card">

            <div className="service-icon">
              <FaFireExtinguisher />
            </div>

            <h3>
              Fire Service
            </h3>

            <p>
              Get help during fire emergencies.
            </p>

            <button
              onClick={() => showMessage("Fire Service")}
            >
              View
            </button>

          </div>


          {/* Police */}

          <div className="service-card">

            <div className="service-icon">
              <FaShieldAlt />
            </div>

            <h3>
              Police
            </h3>

            <p>
              Contact emergency police services.
            </p>

            <button
              onClick={() => showMessage("Police")}
            >
              View
            </button>

          </div>


          {/* Hospital */}

          <div className="service-card">

            <div className="service-icon">
              <FaHospital />
            </div>

            <h3>
              Hospitals
            </h3>

            <p>
              Find nearby emergency hospitals.
            </p>

            <button
              onClick={() => showMessage("Hospitals")}
            >
              View
            </button>

          </div>

        </div>

      </section>


      {/* ==============================
          DISASTER INFORMATION
      ============================== */}

      <section className="disaster-section">

        <h2>
          Disaster Information
        </h2>

        <p className="section-description">
          Learn what to do before, during and after
          different types of disasters.
        </p>


        <div className="disaster-grid">


          {/* Flood */}

          <div className="disaster-card">

            <div className="disaster-icon">
              <FaWater />
            </div>

            <div>

              <h3>
                Flood
              </h3>

              <p>
                Safety tips and emergency information
                during floods.
              </p>

            </div>

          </div>


          {/* Cyclone */}

          <div className="disaster-card">

            <div className="disaster-icon">
              <FaWind />
            </div>

            <div>

              <h3>
                Cyclone
              </h3>

              <p>
                Learn how to stay safe during cyclones.
              </p>

            </div>

          </div>


          {/* Earthquake */}

          <div className="disaster-card">

            <div className="disaster-icon">
              <FaMountain />
            </div>

            <div>

              <h3>
                Earthquake
              </h3>

              <p>
                Important earthquake safety guidelines.
              </p>

            </div>

          </div>


          {/* Fire */}

          <div className="disaster-card">

            <div className="disaster-icon">
              <FaFire />
            </div>

            <div>

              <h3>
                Fire Safety
              </h3>

              <p>
                Learn what to do during a fire emergency.
              </p>

            </div>

          </div>

        </div>

      </section>


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


export default Home;