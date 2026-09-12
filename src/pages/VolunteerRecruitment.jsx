import React, { useState } from "react";
import NavBar from "../components/NavBar";
import "../styles/VolunteerRecruitment.css";

const VolunteerRecruitment = () => {

    const [message, setMessage] = useState("");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        familyPhone: "",
        bloodGroup: "",
        preferredLocation: "",
        availability: "",
        skills: "",
        areaOfInterest: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await fetch(
                "http://localhost:5001/api/volunteers",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                }
            );

            const data = await response.json();

            if (response.ok) {

                setMessage("Registration completed! We will contact you when volunteer support is needed.");

                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    familyPhone: "",
                    bloodGroup: "",
                    preferredLocation: "",
                    availability: "",
                    skills: "",
                    areaOfInterest: ""
                });

            } else {

                setMessage(data.message || "Registration failed.");

            }

        } catch (error) {

            console.log("Error:", error);
            setMessage("Could not connect to the server.");

        }
    };

    return (

        <div>

            <NavBar />

            <div className="volunteer-page">

                <h1>Volunteer Recruitment</h1>

                <p>
                    Join our volunteer team and help communities affected by disasters.
                </p>

                <form className="volunteer-form" onSubmit={handleSubmit}>

                    <h2>Volunteer Registration</h2>

                    <label>Full Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label>Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />

                    <label>Phone Number of a Family Member</label>
                    <input
                        type="tel"
                        name="familyPhone"
                        value={formData.familyPhone}
                        onChange={handleChange}
                        required
                    />

                    <label>Blood Group</label>
                    <input
                        type="text"
                        name="bloodGroup"
                        value={formData.bloodGroup}
                        onChange={handleChange}
                        required
                    />

                    <label>Preferred Location</label>
                    <input
                        type="text"
                        name="preferredLocation"
                        value={formData.preferredLocation}
                        onChange={handleChange}
                        required
                    />

                    <label>Availability</label>
                    <select
                        name="availability"
                        value={formData.availability}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Availability</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Weekends only">Weekends only</option>
                    </select>

                    <label>Skills</label>
                    <select
                        name="skills"
                        value={formData.skills}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Skills</option>
                        <option value="First Aid">First Aid</option>
                        <option value="Driving">Driving</option>
                        <option value="Medical">Medical</option>
                        <option value="Communication">Communication</option>
                        <option value="Rescue">Rescue</option>
                        <option value="Food Distribution">Food Distribution</option>
                    </select>

                    <label>Area of Interest</label>
                    <select
                        name="areaOfInterest"
                        value={formData.areaOfInterest}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select an area</option>
                        <option value="Relief Distribution">Relief Distribution</option>
                        <option value="Medical Assistance">Medical Assistance</option>
                        <option value="Rescue Support">Rescue Support</option>
                        <option value="Shelter Support">Shelter Support</option>
                    </select>

                    <button type="submit">
                        Register
                    </button>

                    {message && (
                        <p className="success-message">
                            {message}
                        </p>
                    )}

                </form>

            </div>

        </div>
    );
};

export default VolunteerRecruitment;