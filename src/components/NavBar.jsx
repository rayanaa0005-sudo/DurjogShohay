import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { useAuth } from "../context/AuthContext.jsx";
import "./NavBar.css";

function NavBar() {

    const { user } = useAuth();

    return (
        <nav className="home-navbar">

            {/* Logo */}
            <div className="home-logo">
                DurjogShohay
            </div>

            {/* Navigation Links */}
            <div className="home-nav-links">

                <NavLink to="/">Home</NavLink>

                <NavLink to="/shelters">Shelters</NavLink>

                <NavLink to="/directory">Organisations</NavLink>

                <NavLink to="/rehabilitation">Rehabilitation</NavLink>

                <NavLink to="/volunteer">Volunteer</NavLink>

                <NavLink to="/donation">Donate</NavLink>

                <NavLink to="/track-donation">Track</NavLink>

                <NavLink to="/contact">Contact Us</NavLink>

                <NavLink to="/profile">
                    <FaUser />
                    Profile
                </NavLink>

                {/* Login only when user is logged out */}
                {!user && (
                    <NavLink to="/login">
                        Login
                    </NavLink>
                )}

            </div>

        </nav>
    );
}

export default NavBar;