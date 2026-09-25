import React, { useState, useEffect } from "react";

import NavBar from "../components/NavBar";

import "../styles/Shelters.css";

const Shelters = () => {

    const [selectedLocation, setSelectedLocation] = useState("");
    const [locations, setLocations] = useState([]);
    const [shelters, setShelters] = useState([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {

        const fetchLocations = async () => {

            try {

                const response = await fetch(
                    "http://localhost:5001/api/shelter-locations"
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch locations");
                }

                const data = await response.json();

                setLocations(data);

            } catch (error) {

                console.log(error);
                setMessage("Could not load locations.");

            }
        };

        fetchLocations();

    }, []);

    const handleLocationChange = async (e) => {

        const city = e.target.value;

        setSelectedLocation(city);
        setShelters([]);
        setMessage("");

        if (!city) {
            return;
        }

        setLoading(true);

        try {

            const response = await fetch(
                `http://localhost:5001/api/shelters/${city}`
            );

            const data = await response.json();

            if (response.ok) {

                setShelters(data);

                if (data.length === 0) {
                    setMessage("No shelters found in this location.");
                }

            } else {

                setMessage("Could not load shelters.");

            }

        } catch (error) {

            console.log("Error:", error);
            setMessage("Could not connect to the server.");

        }

        setLoading(false);
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

                    <select
                        value={selectedLocation}
                        onChange={handleLocationChange}
                    >

                        <option value="">
                            Select a location
                        </option>

                        {locations.map((location) => (

                            <option
                                key={location._id}
                                value={location.city}
                            >
                                {location.city}
                            </option>

                        ))}

                    </select>

                </div>

                {loading && (
                    <p>Loading shelters...</p>
                )}

                {selectedLocation && !loading && shelters.length > 0 && (

                    <div className="shelter-section">

                        <h2>
                            Shelters in {selectedLocation}
                        </h2>

                        {shelters.map((shelter, index) => (

                            <div
                                className="shelter-card"
                                key={shelter._id || index}
                            >

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

                {message && (
                    <p className="success-message">
                        {message}
                    </p>
                )}

            </div>

        </div>
    );
};

export default Shelters;