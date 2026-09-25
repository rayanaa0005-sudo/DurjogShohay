import { Link, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaTint,
  FaMapMarkerAlt,
  FaEdit,
  FaSignOutAlt,
  FaHandHoldingHeart,
  FaUserShield
} from "react-icons/fa";

import { useAuth } from "../context/AuthContext.jsx";

import "../styles/Profile.css";

function Profile() {
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  if (loading) {
    return <p>Loading profile...</p>;
  }

  if (!user) {
    return <p>You are not logged in.</p>;
  }

  return (
    <div className="profile-page">

      <NavBar />


      <section className="profile-header">

        <p className="profile-small-title">
          YOUR ACCOUNT
        </p>

        <h1>My Profile</h1>

        <p>
          Manage your personal information and
          emergency details.
        </p>

      </section>


      <main className="profile-container">

        <div className="profile-card">

          <div className="profile-picture">
            <FaUser />
          </div>

          <h2>{user.name}</h2>

          <p className="profile-role">
            {user.role === "admin"
              ? "Administrator"
              : "Registered User"}
          </p>


          <button
            className="edit-profile-button"
            onClick={() => navigate("/edit-profile")}
          >
            <FaEdit />
            Edit Profile
          </button>


          <button
            className="my-donations-button"
            onClick={() => navigate("/my-donations")}
          >
            <FaHandHoldingHeart />
            My Donations
          </button>


          {user.role === "admin" && (

            <button
              className="admin-panel-button"
              onClick={() => navigate("/admin")}
            >
              <FaUserShield />
              Admin Panel
            </button>

          )}

        </div>


        <div className="information-card">

          <div className="card-heading">

            <div className="heading-icon">
              <FaUser />
            </div>

            <div>

              <h2>Personal Information</h2>

              <p>
                Your basic account information
              </p>

            </div>

          </div>


          <div className="profile-fields">

            <div className="profile-field">

              <label>Full Name</label>

              <div className="field-value">

                <FaUser />

                <span>
                  {user.name}
                </span>

              </div>

            </div>


            <div className="profile-field">

              <label>Email Address</label>

              <div className="field-value">

                <FaEnvelope />

                <span>
                  {user.email}
                </span>

              </div>

            </div>


            <div className="profile-field">

              <label>Phone Number</label>

              <div className="field-value">

                <FaPhone />

                <span>
                  {user.phone || "Not provided"}
                </span>

              </div>

            </div>


            <div className="profile-field">

              <label>Blood Group</label>

              <div className="field-value">

                <FaTint />

                <span>
                  {user.bloodGroup || "Not provided"}
                </span>

              </div>

            </div>


            <div className="profile-field">

              <label>District</label>

              <div className="field-value">

                <FaMapMarkerAlt />

                <span>
                  {user.district || "Not provided"}
                </span>

              </div>

            </div>


            <div className="profile-field">

              <label>Account Type</label>

              <div className="field-value">

                <FaUser />

                <span>
                  {user.role === "admin"
                    ? "Administrator"
                    : "Registered User"}
                </span>

              </div>

            </div>


            <div className="logout-section">

              <button
                className="logout-button"
                onClick={handleLogout}
              >

                <FaSignOutAlt />

                Log Out

              </button>

            </div>

          </div>

        </div>

      </main>


      <footer className="home-footer">

        <p>
          © 2026 DurjogShohay. Stay safe, stay prepared.
        </p>

      </footer>

    </div>
  );
}

export default Profile;


