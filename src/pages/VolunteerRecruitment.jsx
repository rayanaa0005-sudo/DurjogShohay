import React, { useState, useEffect } from "react";

import NavBar from "../components/NavBar";

import "../styles/VolunteerRecruitment.css";

const VolunteerRecruitment = () => {

    const [message, setMessage] = useState("");

    const [errors, setErrors] = useState({});

    const [locations, setLocations] = useState([]);

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


    useEffect(() => {

        async function getLocations() {

            try {

                const response = await fetch(
                    "http://localhost:5001/api/locations"
                );

                const data = await response.json();

                if (response.ok) {

                    setLocations(data);

                } else {

                    alert(data.message);

                }

            } catch (error) {

                console.log(error);

                alert("Could not load locations");

            }

        }

        getLocations();

    }, []);


    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData({

            ...formData,

            [name]: value

        });

        let error = "";


        if (name === "name") {

            if (!/^[A-Za-z .'-]*$/.test(value)) {

                error =
                    "Name can only contain letters, spaces, dots, apostrophes and hyphens.";

            } else if (value.trim().length > 50) {

                error =
                    "Name cannot be longer than 50 characters.";

            }

        }


        if (name === "phone" || name === "familyPhone") {

            if (!/^[0-9]*$/.test(value)) {

                error =
                    "Phone number can contain digits only.";

            } else if (value.length > 11) {

                error =
                    "Phone number cannot be longer than 11 digits.";

            } else if (
                value.length > 0 &&
                !value.startsWith("01")
            ) {

                error =
                    "Phone number must start with 01.";

            } else if (
                value.length > 0 &&
                value.length < 11
            ) {

                error =
                    "Phone number must be 11 digits.";

            }

        }


        setErrors({

            ...errors,

            [name]: error

        });

    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        const newErrors = {};


        if (!/^[A-Za-z .'-]{2,50}$/.test(formData.name.trim())) {

            newErrors.name =
                "Please enter a valid name.";

        }


        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {

            newErrors.email =
                "Please enter a valid email address.";

        }


        if (!/^01[0-9]{9}$/.test(formData.phone)) {

            newErrors.phone =
                "Phone number must be 11 digits and start with 01.";

        }


        if (!/^01[0-9]{9}$/.test(formData.familyPhone)) {

            newErrors.familyPhone =
                "Phone number must be 11 digits and start with 01.";

        }


        if (!formData.bloodGroup) {

            newErrors.bloodGroup =
                "Please select a blood group.";

        }


        if (!formData.preferredLocation) {

            newErrors.preferredLocation =
                "Please select a preferred location.";

        }


        if (!formData.availability) {

            newErrors.availability =
                "Please select your availability.";

        }


        if (!formData.skills) {

            newErrors.skills =
                "Please select a skill.";

        }


        if (!formData.areaOfInterest) {

            newErrors.areaOfInterest =
                "Please select an area.";

        }


        setErrors(newErrors);


        if (Object.keys(newErrors).length > 0) {

            return;

        }


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

                setMessage(
                    "Registration completed! We will contact you when volunteer support is needed."
                );


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


                setErrors({});


            } else {

                setMessage(
                    data.message || "Registration failed."
                );

            }


        } catch (error) {

            console.log("Error:", error);

            setMessage(
                "Could not connect to the server."
            );

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


                <form
                    className="volunteer-form"
                    onSubmit={handleSubmit}
                >

                    <h2>Volunteer Registration</h2>


                    <label>Full Name</label>

                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        minLength="2"
                        maxLength="50"
                        className={
                            errors.name
                                ? "input-error"
                                : ""
                        }
                        required
                    />

                    {errors.name && (

                        <p className="field-error">
                            {errors.name}
                        </p>

                    )}


                    <label>Email</label>

                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={(e) => {

                            const value =
                                e.target.value;

                            let error = "";

                            if (
                                value &&
                                !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
                            ) {

                                error =
                                    "Please enter a valid email address.";

                            }

                            setErrors({

                                ...errors,

                                email: error

                            });

                        }}
                        className={
                            errors.email
                                ? "input-error"
                                : ""
                        }
                        required
                    />

                    {errors.email && (

                        <p className="field-error">
                            {errors.email}
                        </p>

                    )}


                    <label>Phone Number</label>

                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        maxLength="11"
                        inputMode="numeric"
                        className={
                            errors.phone
                                ? "input-error"
                                : ""
                        }
                        required
                    />

                    {errors.phone && (

                        <p className="field-error">
                            {errors.phone}
                        </p>

                    )}


                    <label>
                        Phone Number of a Family Member
                    </label>

                    <input
                        type="tel"
                        name="familyPhone"
                        value={formData.familyPhone}
                        onChange={handleChange}
                        maxLength="11"
                        inputMode="numeric"
                        className={
                            errors.familyPhone
                                ? "input-error"
                                : ""
                        }
                        required
                    />

                    {errors.familyPhone && (

                        <p className="field-error">
                            {errors.familyPhone}
                        </p>

                    )}


                    <label>Blood Group</label>

                    <select
                        name="bloodGroup"
                        value={formData.bloodGroup}
                        onChange={handleChange}
                        className={
                            errors.bloodGroup
                                ? "input-error"
                                : ""
                        }
                        required
                    >

                        <option value="">
                            Select blood group
                        </option>

                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>

                    </select>

                    {errors.bloodGroup && (

                        <p className="field-error">
                            {errors.bloodGroup}
                        </p>

                    )}


                    <label>Preferred Location</label>

                    <select
                        name="preferredLocation"
                        value={formData.preferredLocation}
                        onChange={handleChange}
                        className={
                            errors.preferredLocation
                                ? "input-error"
                                : ""
                        }
                        required
                    >

                        <option value="">
                            Select preferred location
                        </option>

                        {locations.map((location) => (

                            <option
                                key={location._id}
                                value={location.district}
                            >
                                {location.district}
                            </option>

                        ))}

                    </select>

                    {errors.preferredLocation && (

                        <p className="field-error">
                            {errors.preferredLocation}
                        </p>

                    )}


                    <label>Availability</label>

                    <select
                        name="availability"
                        value={formData.availability}
                        onChange={handleChange}
                        className={
                            errors.availability
                                ? "input-error"
                                : ""
                        }
                        required
                    >

                        <option value="">
                            Availability
                        </option>

                        <option value="Full-time">
                            Full-time
                        </option>

                        <option value="Part-time">
                            Part-time
                        </option>

                        <option value="Weekends only">
                            Weekends only
                        </option>

                    </select>

                    {errors.availability && (

                        <p className="field-error">
                            {errors.availability}
                        </p>

                    )}


                    <label>Skills</label>

                    <select
                        name="skills"
                        value={formData.skills}
                        onChange={handleChange}
                        className={
                            errors.skills
                                ? "input-error"
                                : ""
                        }
                        required
                    >

                        <option value="">
                            Skills
                        </option>

                        <option value="First Aid">
                            First Aid
                        </option>

                        <option value="Driving">
                            Driving
                        </option>

                        <option value="Medical">
                            Medical
                        </option>

                        <option value="Communication">
                            Communication
                        </option>

                        <option value="Rescue">
                            Rescue
                        </option>

                        <option value="Food Distribution">
                            Food Distribution
                        </option>

                    </select>

                    {errors.skills && (

                        <p className="field-error">
                            {errors.skills}
                        </p>

                    )}


                    <label>Area of Interest</label>

                    <select
                        name="areaOfInterest"
                        value={formData.areaOfInterest}
                        onChange={handleChange}
                        className={
                            errors.areaOfInterest
                                ? "input-error"
                                : ""
                        }
                        required
                    >

                        <option value="">
                            Select an area
                        </option>

                        <option value="Relief Distribution">
                            Relief Distribution
                        </option>

                        <option value="Medical Assistance">
                            Medical Assistance
                        </option>

                        <option value="Rescue Support">
                            Rescue Support
                        </option>

                        <option value="Shelter Support">
                            Shelter Support
                        </option>

                    </select>

                    {errors.areaOfInterest && (

                        <p className="field-error">
                            {errors.areaOfInterest}
                        </p>

                    )}


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