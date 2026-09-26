import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import NavBar from "../components/NavBar";
import "../styles/VolunteerManagement.css";

function VolunteerManagement() {

    const { user } = useAuth();

    const [volunteers, setVolunteers] = useState([]);
    const [organizations, setOrganizations] = useState([]);
    const [selectedVolunteer, setSelectedVolunteer] = useState(null);
    const [selectedOrganization, setSelectedOrganization] = useState("");
    const [assignedVolunteers, setAssignedVolunteers] = useState([]);

    useEffect(() => {

        if (user && user.role === "admin") {
            getVolunteers();
        }

    }, [user]);


    async function getOrganizations(volunteer) {

        try {

            const response = await fetch(
                `http://localhost:5001/api/organizations/district/${volunteer.preferredLocation}`
            );

            const data = await response.json();

            if (response.ok) {

                setOrganizations(data);
                setSelectedVolunteer(volunteer);
                setSelectedOrganization("");

            } else {

                alert(data.message);

            }

        } catch (error) {

            console.log(error);

            alert("Could not load organizations");

        }

    }


    async function getVolunteers() {

        try {

            const response = await fetch(
                "http://localhost:5001/api/volunteers/admin/all",
                {
                    credentials: "include"
                }
            );

            const data = await response.json();

            if (response.ok) {

                setVolunteers(data);

            } else {

                alert(data.message);

            }

        } catch (error) {

            console.log(error);

            alert("Something went wrong");

        }

    }


    async function assignVolunteer(volunteerId) {

        if (!selectedOrganization) {

            alert("Please select an organization.");

            return;

        }

        try {

            const response = await fetch(
                `http://localhost:5001/api/volunteers/admin/${volunteerId}/assign`,
                {
                    method: "PUT",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    credentials: "include",

                    body: JSON.stringify({
                        organizationId: selectedOrganization
                    })
                }
            );

            const data = await response.json();

            if (response.ok) {

                alert("Volunteer assigned successfully!");

                setAssignedVolunteers((previous) => [
                    ...previous,
                    volunteerId
                ]);

                setSelectedVolunteer(null);
                setSelectedOrganization("");

            } else {

                alert(data.message);

            }

        } catch (error) {

            console.log(error);

            alert("Could not assign volunteer");

        }

    }


    if (!user) {

        return <h2>Please login first</h2>;

    }


    if (user.role !== "admin") {

        return <h2>Access denied</h2>;

    }


    return (
        <>
            <NavBar />

            <div className="volunteer-management-page">

                <h1>VOLUNTEER MANAGEMENT</h1>

                {volunteers.length === 0 ? (

                    <p>No volunteers found.</p>

                ) : (

                    volunteers.map((volunteer) => (

                        <div
                            className="volunteer-card"
                            key={volunteer._id}
                        >

                            <p>
                                <b>Name:</b>{" "}
                                {volunteer.name}
                            </p>

                            <p>
                                <b>Email:</b>{" "}
                                {volunteer.email}
                            </p>

                            <p>
                                <b>Phone:</b>{" "}
                                {volunteer.phone}
                            </p>

                            <p>
                                <b>Family Phone:</b>{" "}
                                {volunteer.familyPhone}
                            </p>

                            <p>
                                <b>Blood Group:</b>{" "}
                                {volunteer.bloodGroup}
                            </p>

                            <p>
                                <b>Preferred Location:</b>{" "}
                                {volunteer.preferredLocation}
                            </p>

                            <p>
                                <b>Availability:</b>{" "}
                                {volunteer.availability}
                            </p>

                            <p>
                                <b>Skills:</b>{" "}
                                {volunteer.skills}
                            </p>

                            <p>
                                <b>Area of Interest:</b>{" "}
                                {volunteer.areaOfInterest}
                            </p>


                            {assignedVolunteers.includes(
                                volunteer._id
                            ) ? (

                                <button disabled>
                                    Assigned
                                </button>

                            ) : (

                                <button
                                    onClick={() =>
                                        getOrganizations(volunteer)
                                    }
                                >
                                    Assign to Organization
                                </button>

                            )}


                            {selectedVolunteer?._id === volunteer._id && (

                                <div>

                                    <h3>
                                        Select Organization
                                    </h3>

                                    {organizations.length === 0 ? (

                                        <p>
                                            No organizations found in this location.
                                        </p>

                                    ) : (

                                        <>
                                            <select
                                                value={selectedOrganization}
                                                onChange={(e) =>
                                                    setSelectedOrganization(
                                                        e.target.value
                                                    )
                                                }
                                            >

                                                <option value="">
                                                    Select Organization
                                                </option>

                                                {organizations.map(
                                                    (organization) => (

                                                        <option
                                                            key={organization._id}
                                                            value={organization._id}
                                                        >
                                                            {organization.name} -{" "}
                                                            {organization.area}
                                                        </option>

                                                    )
                                                )}

                                            </select>


                                            <button
                                                onClick={() =>
                                                    assignVolunteer(
                                                        volunteer._id
                                                    )
                                                }
                                            >
                                                Assign
                                            </button>

                                        </>

                                    )}

                                </div>

                            )}

                        </div>

                    ))

                )}

            </div>
        </>
    );
}

export default VolunteerManagement;