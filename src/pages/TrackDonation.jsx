import NavBar from "../components/NavBar";
import "../styles/TrackDonation.css";

function TrackDonation() {
  return (
  <>
    <NavBar />

    <div className="track-page">

      <h1>TRACK MY DONATION</h1>

      <h2>Enter your donation number</h2>

      <input
        type="text"
        placeholder="Example: DON-00125"
      />

      <button className="track-button">
        Track
      </button>

      <div className="donation-info">

        <h2>Donation Details</h2>

        <p><b>Donation Number:</b> DON-00125</p>
        <p><b>Donation:</b> Food</p>
        <p><b>Quantity:</b> 20 kg</p>
        <p><b>Location:</b> Gazipur</p>
        <p><b>Status:</b> DELIVERED</p>

      </div>

    </div>
    </>
  );
}

export default TrackDonation;