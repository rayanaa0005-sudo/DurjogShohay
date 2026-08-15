import React from "react";
import NavBar from "../components/NavBar";
import "../styles/VolunteerRecruitment.css";
const VolunteerRecruitment = () => {
  return (
    <div>
        <NavBar/>
    <div className="volunteer-page">

      <h1>Volunteer Recruitment</h1>

      <p>
        Join our volunteer team and help communities affected by disasters.
      </p>

      <div className="volunteer-form">
        <h2>Volunteer Registration</h2>

        <label>Full Name</label>
        <input type="text" />

        <label>Email</label>
        <input type="email" />

        <label>Phone Number</label>
        <input type="tel" />

        <label>Location</label>
        <input type="text" />

        <label>Area of Interest</label>
        <select>
          <option>Select an area</option>
          <option>Relief Distribution</option>
          <option>Medical Assistance</option>
          <option>Rescue Support</option>
          <option>Shelter Support</option>
        </select>

        <button>Register</button>
      </div>
    </div>
    </div> 
  );
};

export default VolunteerRecruitment;