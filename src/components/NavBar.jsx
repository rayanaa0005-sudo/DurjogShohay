import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

import "./NavBar.css";

function NavBar() {
  return (
    <nav className="home-navbar">

      {/* Logo */}
      <div className="home-logo">
        DurjogShohay
      </div>

      {/* Navigation Links */}
      <div className="home-nav-links">

        <Link to="/" className="active">
          Home
        </Link>

        {/* GET HELP */}
        <div className="nav-dropdown">
          <div className="dropdown-title">
            Get Help
            <span className="arrow">▼</span>
          </div>

          <div className="dropdown-menu">
            <Link to="/shelters">
              Shelters
            </Link>

            <Link to="/directory">
              Organisations
            </Link>

            <Link to="/volunteer">
              Volunteer
            </Link>
          </div>
        </div>


        {/* GIVE HELP */}
        <div className="nav-dropdown">
          <div className="dropdown-title">
            Give Help
            <span className="arrow">▼</span>
          </div>

          <div className="dropdown-menu">
            <Link to="/volunteer">
              Volunteer
            </Link>
          </div>
        </div>


        {/* TRACK */}
        <div className="nav-dropdown">
          <div className="dropdown-title">
            Track
            <span className="arrow">▼</span>
          </div>

          <div className="dropdown-menu">
            <Link to="/track">
              Track Requests
            </Link>
          </div>
        </div>


        {/* COMMUNITY */}
        <div className="nav-dropdown">
          <div className="dropdown-title">
            Community
            <span className="arrow">▼</span>
          </div>

          <div className="dropdown-menu">
            <Link to="/community">
              Community
            </Link>
          </div>
        </div>


        {/* ABOUT */}
        <Link to="/about">
          About Us
        </Link>


        {/* PROFILE */}
        <Link to="/profile">
          <FaUser />
          Profile
        </Link>


        {/* LOGIN */}
        <Link to="/login">
          Login
        </Link>


        {/* SIGN UP */}
        <Link to="/signup" className="signup-nav">
          Sign Up
        </Link>

      </div>

    </nav>
  );
}

export default NavBar;