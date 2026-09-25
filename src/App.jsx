import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import PublicRoute from "./context/PublicRoute.jsx";
import "./App.css";

// Rayas pages
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
import EditProfile from "./pages/EditProfile";
import Donation from "./pages/Donation";
import Rehabilitation from "./pages/Rehabilitation";
import TrackDonation from "./pages/TrackDonation";
import MyDonations from "./pages/MyDonations";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />

          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />

          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />

          <Route path="/shelters" element={<Shelters />} />
          <Route path="/volunteer" element={<VolunteerRecruitment />} />
          <Route path="/directory" element={<Directory />} />

          <Route path="/donation" element={<Donation />} />
          <Route path="/rehabilitation" element={<Rehabilitation />} />
          <Route path="/track-donation" element={<TrackDonation />} />
          <Route path="/my-donations" element={<MyDonations />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;