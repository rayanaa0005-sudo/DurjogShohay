import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";

import "./NavBar.css";

function NavBar() {
  return (
    <nav className="home-navbar">

      {/* Logo */}
      <div className="home-logo">DurjogShohay</div>

      {/* Navigation Links */}
      <div className="home-nav-links">

  <NavLink to="/">Home</NavLink>

  <NavLink to="/shelters">Shelters</NavLink>

  <NavLink to="/directory">Organisations</NavLink>

  <NavLink to="/rehabilitation">Rehabilitation</NavLink>

  <NavLink to="/volunteer">Volunteer</NavLink>

  <NavLink to="/donation">Donate</NavLink>

  <NavLink to="/track-donation">Track</NavLink>

  {/* <NavLink to="/about">About Us</NavLink> */}

  <NavLink to="/contact">Contact Us</NavLink>

  <NavLink to="/profile">
    <FaUser />
    Profile
  </NavLink>

  <NavLink to="/login">Login</NavLink>

  <NavLink to="/signup" className="signup-nav">
    Sign Up
  </NavLink>

</div>

    </nav>
  );
}

export default NavBar;