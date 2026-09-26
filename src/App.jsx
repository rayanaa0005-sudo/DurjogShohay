import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import PublicRoute from "./context/PublicRoute.jsx";
import ProfileRoute from "./context/ProfileRoute.jsx";
import CarbonFootprintDisplay from "./components/CarbonFootprintDisplay";
import "./App.css";


// Rayas pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import About from "./pages/AboutUs";
import Contact from "./pages/ContactUs";
import Profile from "./pages/Profile";
import Flood from "./pages/Flood";
import Cyclone from "./pages/Cyclone";
import Earthquake from "./pages/Earthquake";
import Fire from "./pages/Fire";
import Landslide from "./pages/Landslide";
import Drought from "./pages/Drought";

// Tanha's pages
import Shelters from "./pages/Shelters";
import VolunteerRecruitment from "./pages/VolunteerRecruitment";
import Directory from "./pages/Directory";
import VolunteerManagement from "./pages/VolunteerManagement";

// Mithila's pages
import EditProfile from "./pages/EditProfile";
import Donation from "./pages/Donation";
import Rehabilitation from "./pages/Rehabilitation";
import TrackDonation from "./pages/TrackDonation";
import MyDonations from "./pages/MyDonations";
import Admin from "./pages/Admin";

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
          <Route
                  path="/profile"
                  element={
                    <ProfileRoute>
                      <Profile />
                    </ProfileRoute>
                  }
          />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/disasters/flood" element={<Flood />} />
          <Route path="/disasters/flood" element={<Flood />} />
          <Route path="/disasters/cyclone" element={<Cyclone />} />
          <Route path="/disasters/earthquake" element={<Earthquake />} />
          <Route path="/disasters/fire" element={<Fire />} />
          <Route path="/disasters/landslide" element={<Landslide />} />
          <Route path="/disasters/drought" element={<Drought />} />

          <Route path="/shelters" element={<Shelters />} />
          <Route path="/volunteer" element={<VolunteerRecruitment />} />
          <Route path="/directory" element={<Directory />} />

          <Route path="/donation" element={<Donation />} />
          <Route path="/rehabilitation" element={<Rehabilitation />} />
          <Route path="/track-donation" element={<TrackDonation />} />
          <Route path="/my-donations" element={<MyDonations />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/volunteer-management" element={<VolunteerManagement />} />
        </Routes>

         <CarbonFootprintDisplay />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;