
import { useState } from "react";
import NavBar from "../components/NavBar";
import "../styles/Donation.css";

function Donation() {

  const [donationType, setDonationType] = useState("Food");
  const [quantity, setQuantity] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [donationNumber, setDonationNumber] = useState("");


  async function handleSubmit() {

    if (
      donationType === "" ||
      quantity === "" ||
      location === "" ||
      description === ""
    ) {

      alert("Please fill in all fields");
      return;

    }


    const donationData = {

      donationType: donationType,
      quantity: quantity,
      location: location,
      description: description

    };


    try {

      const response = await fetch(
        "http://localhost:5001/api/donation",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          credentials: "include",

          body: JSON.stringify(donationData)
        }
      );


      const data = await response.json();


      if (response.ok) {

        setDonationNumber(data.donation.donationNumber);

        setSubmitted(true);

      } else {

        alert(data.message);

      }


    } catch (error) {

      console.log(error);

      alert("Something went wrong");

    }

  }


  function goBackToDonation() {

    setSubmitted(false);

    setDonationNumber("");

    setDonationType("Food");
    setQuantity("");
    setLocation("");
    setDescription("");

  }


  return (

    <>

      <NavBar />

      <div className="donation-page">


        {!submitted ? (

          <>

            <h1>MAKE A DONATION</h1>

            <h2>Donation Form</h2>


            <label>
              What would you like to donate?
            </label>

            <select
              value={donationType}
              onChange={(e) =>
                setDonationType(e.target.value)
              }
            >

              <option>Food</option>
              <option>Clothing</option>
              <option>Medicine</option>
              <option>Money</option>
              <option>Other</option>

            </select>


            <label>
              Quantity
            </label>

            <input
              type="text"
              value={quantity}
              onChange={(e) =>
                setQuantity(e.target.value)
              }
            />


            <label>
              Location
            </label>

            <input
              type="text"
              value={location}
              onChange={(e) =>
                setLocation(e.target.value)
              }
            />


            <label>
              Description
            </label>

            <textarea
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
            ></textarea>


            <div className="bkash-box">
              bKash: 0139857436
            </div>


            <button
              className="submit-button"
              onClick={handleSubmit}
            >
              Submit Donation
            </button>

          </>

        ) : (

          <div className="success-box">

            <h2>
              Thank You For Your Donation!
            </h2>

            <p>
              Your donation number is:
            </p>


            <div className="donation-number">

              {donationNumber}

            </div>


            <p>
              Please save this number to track your donation later.
            </p>


            <button
              className="submit-button"
              onClick={goBackToDonation}
            >
              ← Back to Donation
            </button>

          </div>

        )}

      </div>

    </>

  );

}

export default Donation;

