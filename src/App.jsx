import { BrowserRouter, Routes, Route } from "react-router-dom";

// Your pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import About from "./pages/AboutUs";
import Contact from "./pages/ContactUs";
import Profile from "./pages/Profile";

// Tanha's pages
import Shelters from "./pages/Shelters";
import VolunteerRecruitment from "./pages/VolunteerRecruitment";
import Directory from "./pages/Directory";


function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* =========================
            YOUR EXISTING PAGES
        ========================= */}

        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* LOGIN */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* SIGN UP */}
        <Route
          path="/signup"
          element={<Signup />}
        />

        {/* FORGOT PASSWORD */}
        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

        {/* ABOUT US */}
        <Route
          path="/about"
          element={<About />}
        />

        {/* CONTACT US */}
        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* PROFILE */}
        <Route
          path="/profile"
          element={<Profile />}
        />


        {/* =========================
            TANHA'S PAGES
        ========================= */}

        {/* SHELTERS */}
        <Route
          path="/shelters"
          element={<Shelters />}
        />

        {/* VOLUNTEER */}
        <Route
          path="/volunteer"
          element={<VolunteerRecruitment />}
        />

        {/* ORGANISATIONS DIRECTORY */}
        <Route
          path="/directory"
          element={<Directory />}
        />

      </Routes>

    </BrowserRouter>

  );
}


export default App;