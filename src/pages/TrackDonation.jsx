import { useState } from "react";
import NavBar from "../components/NavBar";
import "../styles/TrackDonation.css";

function TrackDonation() {

  const [donationNumber, setDonationNumber] = useState("");

  const [donation, setDonation] = useState(null);

  async function handleTrack() {

    if (donationNumber === "") {

      alert("Please enter your donation number");

      return;
    }

    try {

      const response = await fetch(
        `http://localhost:5001/api/donation/${donationNumber}`
      );

      const data = await response.json();

      if (response.ok) {

        setDonation(data);

      } else {

        setDonation(null);

        alert(data.message);

      }

    } catch (error) {

      console.log(error);

      alert("Something went wrong");

    }

  }

  return (
    <>
      <NavBar />

      <div className="track-page">

        <h1>TRACK MY DONATION</h1>

        <h2>Enter your donation number</h2>

        <input
          type="text"
          value={donationNumber}
          onChange={(e) =>
            setDonationNumber(e.target.value)
          }
          placeholder="Example: D-00006"
        />

        <button
          className="track-button"
          onClick={handleTrack}
        >
          Track
        </button>

        {donation && (

          <div className="donation-info">

            <h2>Donation Details</h2>

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
              <b>Status:</b>{" "}
              {donation.status}
            </p>

          </div>

        )}

      </div>
    </>
  );
}

export default TrackDonation;