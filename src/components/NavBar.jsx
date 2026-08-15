import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar=()=>{
    return(
        <nav className="navbar">
        <div className= "navbar-logo">
            DurjogShohay
        </div>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/shelters">Shelters</Link>
                <Link to="/volunteer">Volunteer</Link>
            </div>
        </nav>
    );
};
export default NavBar;