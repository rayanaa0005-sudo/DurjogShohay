import React, { useState, useEffect } from "react";

import NavBar from "../components/NavBar";

import "../styles/Directory.css";

const Directory = () => {
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [selectedArea, setSelectedArea] = useState("");

    const [locations, setLocations] = useState([]);
    const [organizations, setOrganizations] = useState([]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {

        const fetchLocations = async () => {

            try {

                const response = await fetch(
                    "http://localhost:5001/api/locations"
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch locations");
                }

                const data = await response.json();

                setLocations(data);

            } catch (error) {

                console.log(error);
                setError("Could not load locations.");

            }
        };

        fetchLocations();

    }, []);

    useEffect(() => {

        if (!selectedDistrict || !selectedArea) {
            setOrganizations([]);
            return;
        }

        const fetchOrganizations = async () => {

            try {

                setLoading(true);
                setError("");

                const response = await fetch(
                    `http://localhost:5001/api/organizations/${encodeURIComponent(selectedDistrict)}/${encodeURIComponent(selectedArea)}`
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch organizations");
                }

                const data = await response.json();

                setOrganizations(data);

            } catch (error) {

                console.log(error);
                setError("Could not load organizations.");
                setOrganizations([]);

            } finally {

                setLoading(false);

            }
        };

        fetchOrganizations();

    }, [selectedDistrict, selectedArea]);

    return (
        <div>

            <NavBar />

            <div className="directory-page">

                <h1>
                    Find Organisations Currently Working in Different areas
                </h1>

                <div className="selection-section">

                    <label>Select District</label>

                    <select
                        value={selectedDistrict}
                        onChange={(e) => {
                            setSelectedDistrict(e.target.value);
                            setSelectedArea("");
                            setOrganizations([]);
                        }}
                    >

                        <option value="">
                            Select a district
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

                    {selectedDistrict && (

                        <div className="selection-section">

                            <label>Select Area</label>

                            <select
                                value={selectedArea}
                                onChange={(e) => {
                                    setSelectedArea(e.target.value);
                                }}
                            >

                                <option value="">
                                    Select an area
                                </option>

                                {locations
                                    .find(
                                        (location) =>
                                            location.district === selectedDistrict
                                    )
                                    ?.areas.map((area) => (

                                        <option
                                            key={area}
                                            value={area}
                                        >
                                            {area}
                                        </option>

                                    ))}

                            </select>

                        </div>

                    )}

                    {selectedArea && (

                        <div className="organization-section">

                            <label>
                                Organizations working in {selectedArea}
                            </label>

                            {loading && (
                                <p>Loading organizations...</p>
                            )}

                            {error && (
                                <p>{error}</p>
                            )}

                            {!loading &&
                                !error &&
                                organizations.length === 0 && (

                                    <p>
                                        No organizations found.
                                    </p>

                                )}

                            {!loading &&
                                !error &&
                                organizations.map((organization, index) => (

                                    <div
                                        className="organization-card"
                                        key={organization._id || index}
                                    >

                                        <h3>
                                            {organization.name}
                                        </h3>

                                        <p>
                                            {organization.details}
                                        </p>

                                        <p>
                                            {organization.contact}
                                        </p>

                                    </div>

                                ))}

                        </div>

                    )}

                </div>

            </div>

        </div>
    );
};

export default Directory;