import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserEdit } from "react-icons/fa";

import NavBar from "../components/NavBar";
import { useAuth } from "../context/AuthContext.jsx";

import "../styles/EditProfile.css";

function EditProfile() {
    const { user, setUser } = useAuth();
    const navigate = useNavigate();

    const [phone, setPhone] = useState("");
    const [bloodGroup, setBloodGroup] = useState("");
    const [district, setDistrict] = useState("");

    useEffect(() => {
        if (user) {
            setPhone(user.phone || "");
            setBloodGroup(user.bloodGroup || "");
            setDistrict(user.district || "");
        }
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(
            "http://localhost:5001/api/profile",
            {
                method: "PUT",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    phone,
                    bloodGroup,
                    district
                })
            }
        );

        const data = await response.json();

        if (response.ok) {
            setUser(data.user);

            alert(data.message);

            navigate("/profile");
        } else {
            alert(data.message || "Profile update failed");
        }
    };

    if (!user) {
        return <p>You are not logged in.</p>;
    }

    return (
        <div className="edit-profile-page">

            <NavBar />

            <section className="edit-profile-header">

                <p className="edit-profile-small-title">
                    YOUR ACCOUNT
                </p>

                <h1>Edit Profile</h1>

                <p>
                    Update your personal information and
                    emergency details.
                </p>

            </section>


            <main className="edit-profile-container">

                <div className="edit-profile-card">

                    <div className="edit-profile-heading">

                        <div className="edit-profile-heading-icon">
                            <FaUserEdit />
                        </div>

                        <div>
                            <h2>Personal Information</h2>

                            <p>
                                Update your account information
                            </p>
                        </div>

                    </div>


                    <form onSubmit={handleSubmit}>

                        <div className="edit-profile-fields">

                            <div className="edit-profile-field">

                                <label>Phone Number</label>

                                <input
                                    type="text"
                                    value={phone}
                                    onChange={(e) =>
                                        setPhone(e.target.value)
                                    }
                                />

                            </div>


                            <div className="edit-profile-field">

                                <label>Blood Group</label>

                                <input
                                    type="text"
                                    value={bloodGroup}
                                    onChange={(e) =>
                                        setBloodGroup(e.target.value)
                                    }
                                />

                            </div>


                            <div className="edit-profile-field">

                                <label>District</label>

                                <input
                                    type="text"
                                    value={district}
                                    onChange={(e) =>
                                        setDistrict(e.target.value)
                                    }
                                />

                            </div>

                        </div>


                        <button
                            type="submit"
                            className="edit-profile-save-button"
                        >
                            Save Changes
                        </button>


                        <button
                            type="button"
                            className="edit-profile-back-button"
                            onClick={() => navigate("/profile")}
                        >
                            Cancel
                        </button>

                    </form>

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

export default EditProfile;