import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import "../styles/MyDonations.css";

function MyDonations() {

  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function getMyDonations() {

      try {

        const response = await fetch(
          "http://localhost:5001/api/donation/my-donations",
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
        alert("Could not load your donations");

      }

      setLoading(false);

    }

    getMyDonations();

  }, []);

  return (
    <>
      <NavBar />

      <div className="my-donations-page">

        <h1>MY DONATIONS</h1>

        <p>
          See all the donations you have made
        </p>

        {loading ? (

          <p>Loading donations...</p>

        ) : donations.length === 0 ? (

          <p>You have not made any donations yet.</p>

        ) : (

          donations.map((donation) => (

            <div
              className="my-donation-card"
              key={donation._id}
            >

              <h2>
                {donation.donationNumber}
              </h2>

              <p>
                <b>Donation:</b> {donation.donationType}
              </p>

              <p>
                <b>Quantity:</b> {donation.quantity}
              </p>

              <p>
                <b>Location:</b> {donation.location}
              </p>

              <p>
                <b>Status:</b> {donation.status}
              </p>

            </div>

          ))

        )}

      </div>
    </>
  );
}

export default MyDonations;