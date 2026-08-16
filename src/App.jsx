import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Main pages
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

// Mithila's pages
import Donation from "./pages/Donation";
import Rehabilitation from "./pages/Rehabilitation";
import TrackDonation from "./pages/TrackDonation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main pages */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />

        {/* Tanha's pages */}
        <Route path="/shelters" element={<Shelters />} />
        <Route path="/volunteer" element={<VolunteerRecruitment />} />
        <Route path="/directory" element={<Directory />} />

        {/* Mithila's pages */}
        <Route path="/donation" element={<Donation />} />
        <Route path="/rehabilitation" element={<Rehabilitation />} />
        <Route path="/track-donation" element={<TrackDonation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;