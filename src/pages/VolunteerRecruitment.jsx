import React, { useState } from "react";
import NavBar from "../components/NavBar";
import "../styles/VolunteerRecruitment.css";
const VolunteerRecruitment = () => {
  const [message,setMessage]=useState("");
  return (
    <div>
        <NavBar/>
    <div className="volunteer-page">

      <h1>Volunteer Recruitment</h1>

      <p>Join our volunteer team and help communities affected by disasters.</p>

      <div className="volunteer-form">
        <h2>Volunteer Registration</h2>

        <label>Full Name</label>
        <input type="text" />

        <label>Email</label>
        <input type="email" />

        <label>Phone Number</label>
        <input type="tel" />
        <label>Phone Number of a Family Member</label>
        <input type="tel" />

        <label>Blood Group</label>
        <input type="text" />

        <label>Preferred Location</label>
        <input type="text" />

        <label>Availability</label>
        <select>
          <option>Availability</option>
          <option>Full-time</option>
          <option>Part-time</option>
          <option>Weekends only</option>
        </select>

        <label>Skills</label>
        <select>
          <option>Skills</option>
          <option>First Aid</option>
          <option>Driving</option>
          <option>Medical</option>
          <option>Communication</option>
          <option>Rescue</option>
          <option>Food Distribution</option>
        </select>

        <label>Area of Interest</label>
        <select>
          <option>Select an area</option>
          <option>Relief Distribution</option>
          <option>Medical Assistance</option>
          <option>Rescue Support</option>
          <option>Shelter Support</option>
        </select>
        



        <button onClick= {()=> setMessage("Registration completed! We will contact you when volunteer support is needed.")}>Register</button>

        {message && 
         <p className="success-message">{message}</p>
         }

      </div>
    </div>
    </div> 
  );
};

export default VolunteerRecruitment;