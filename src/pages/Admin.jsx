import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import "../styles/Admin.css";

function Admin() {

    const { user } = useAuth();

    const [donations, setDonations] = useState([]);

    useEffect(() => {

        if (user && user.role === "admin") {
            getDonations();
        }

    }, [user]);


    async function getDonations() {

        try {

            const response = await fetch(
                "http://localhost:5001/api/donation/admin/all",
                {
                    credentials: "include"
                }
            );

            const data = await response.json();

            if (response.ok) {

                setDonations(data);

            } else {

                alert(data.message);

            }

        } catch (error) {

            console.log(error);

            alert("Something went wrong");

        }

    }


    async function updateStatus(donationNumber, status) {

        try {

            const response = await fetch(
                `http://localhost:5001/api/donation/admin/${donationNumber}`,
                {
                    method: "PUT",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    credentials: "include",

                    body: JSON.stringify({
                        status: status
                    })
                }
            );


            const data = await response.json();


            if (response.ok) {

                alert("Status updated successfully!");

                getDonations();

            } else {

                alert(data.message);

            }

        } catch (error) {

            console.log(error);

            alert("Something went wrong");

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

            <div className="admin-page">

                <h1 className="admin-title">
                    ADMIN PANEL
                </h1>

                <Link to="/volunteer-management">
    <button>
        Volunteer Management
    </button>
</Link>

                <h2>
                    Donation Management
                </h2>




                {donations.length === 0 ? (

                    <p>No donations found.</p>

                ) : (

                    donations.map((donation) => (

                        <div
                            className="donation-card"
                            key={donation.donationNumber}
                        >

                            <p>
                                <b>Donation Number:</b>{" "}
                                {donation.donationNumber}
                            </p>

                            <p>
                                <b>Donation:</b>{" "}
                                {donation.donationType}
                            </p>

                            <p>
                                <b>Quantity:</b>{" "}
                                {donation.quantity}
                            </p>

                            <p>
                                <b>Location:</b>{" "}
                                {donation.location}
                            </p>

                            <p>
                                <b>Description:</b>{" "}
                                {donation.description}
                            </p>

                            <p>
                                <b>Current Status:</b>{" "}
                                {donation.status}
                            </p>


                            <p className="status-label">
                                Update Status:
                            </p>

                            <select
                                value={
                                    [
                                        "PENDING",
                                        "APPROVED",
                                        "REJECTED",
                                        "COMPLETED"
                                    ].includes(donation.status)
                                        ? donation.status
                                        : "PENDING"
                                }
                                onChange={(e) =>
                                    updateStatus(
                                        donation.donationNumber,
                                        e.target.value
                                    )
                                }
                            >

                                <option value="PENDING">
                                    PENDING
                                </option>

                                <option value="APPROVED">
                                    APPROVED
                                </option>

                                <option value="REJECTED">
                                    REJECTED
                                </option>

                                <option value="COMPLETED">
                                    COMPLETED
                                </option>

                            </select>

                        </div>

                    ))

                )}


            </div>
        </>
    );
}

export default Admin;
