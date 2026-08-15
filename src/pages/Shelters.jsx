import React, { useState } from "react";
import NavBar from "../components/NavBar";
import "../styles/Shelters.css";

const Shelters = () => {
    const [selectedLocation, setSelectedLocation] = useState("");

    const shelters = {
        Dhaka: [
            {
                name: "Dhaka Relief Shelter",
                location: "Mirpur, Dhaka",
                capacity: 200,
                status: "Available"
            },
            {
                name: "Uttara Community Shelter",
                location: "Uttara, Dhaka",
                capacity: 150,
                status: "Available"
            }
        ],

        Chittagong: [
            {
                name: "Chittagong Disaster Shelter",
                location: "Agrabad, Chittagong",
                capacity: 250,
                status: "Available"
            },
            {
                name: "Pahartali Relief Center",
                location: "Pahartali, Chittagong",
                capacity: 180,
                status: "Limited"
            }
        ],

        Sylhet: [
            {
                name: "Sylhet Relief Shelter",
                location: "Zindabazar, Sylhet",
                capacity: 200,
                status: "Available"
            }
        ],

        Khulna: [
            {
                name: "Khulna Emergency Shelter",
                location: "Sonadanga, Khulna",
                capacity: 220,
                status: "Available"
            }
        ],
         Rangpur: [
            {
                name: "Rangpur Govt. Relief Shelter",
                location: "Dholaichor,Rangpur",
                capacity: 200,
                status: "Available"
            },
            {
                name: "Rangpur Community Shelter",
                location: "Uttarkhan, Rangpur",
                capacity: 150,
                status: "Available"
            }
        ],
         Barishal: [
            {
                name: "Barishal Relief Shelter",
                location: "Chankha, Barishal",
                capacity: 200,
                status: "Available"
            },
            {
                name: "Uttara Community Shelter",
                location: "Uttara, Dhaka",
                capacity: 150,
                status: "Available"
            }
        ],
         Mymensingh: [
            {
                name: "Mymensingh Relief Shelter",
                location: "Mirpur, Dhaka",
                capacity: 200,
                status: "Available"
            },
            {
                name: "Uttara Community Shelter",
                location: "Uttara, Dhaka",
                capacity: 150,
                status: "Available"
            }
        ],
              Rajshahi: [
            {
                name: "Rajshahi Relief Shelter",
                location: "Mirpur, Dhaka",
                capacity: 200,
                status: "Available"
            },
            {
                name: "Uttara Community Shelter",
                location: "Uttara, Dhaka",
                capacity: 150,
                status: "Available"
            }
        ],
        
    };

    return (
        <div>
            <NavBar />

            <div className="shelter-page">
                <h1>Disaster Relief Shelters</h1>

                <p>
                    Find nearby shelters and get information about available
                    facilities during a disaster.
                </p>

                <div className="location-selection">
                    <label>Select Your Location</label>

                    <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)} >
                        <option value="">Select a location</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Chittagong">Chittagong</option>
                        <option value="Sylhet">Sylhet</option>
                        <option value="Khulna">Khulna</option>
                        <option value="Mymensingh">Mymensingh</option>
                        <option value="Barishal">Barishal</option>
                        <option value="Rajshahi">Rajshahi</option>
                        <option value="Rangpur">Rangpur</option>
                    </select>
                </div>

                {selectedLocation && (
                    <div className="shelter-section">
                        
                        <h2>Shelters in {selectedLocation}</h2>

                        {shelters[selectedLocation].map((shelter, index) => (
                            <div className="shelter-card" key={index}>
                                <h3>{shelter.name}</h3>

                                <p>
                                    <strong>Location:</strong>{" "}
                                    {shelter.location}
                                </p>

                                <p>
                                    <strong>Capacity:</strong>{" "}
                                    {shelter.capacity} people
                                </p>

                                <p>
                                    <strong>Status:</strong>{" "}
                                    {shelter.status}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Shelters;