import { useState } from 'react';
import './donation.css';

function Donation() {

  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="donation-page">

      <div className="site-logo">
        DurjogShohay
      </div>


      {!submitted ? (

        <>

          <h1>MAKE A DONATION</h1>

          <h2>Donation Form</h2>


          <label>
            What would you like to donate?
          </label>

          <select>

            <option>Food</option>
            <option>Clothing</option>
            <option>Medicine</option>
            <option>Money</option>
            <option>Other</option>

          </select>


          <label>
            Quantity
          </label>

          <input type="text" />


          <label>
            Location
          </label>

          <input type="text" />


          <label>
            Description
          </label>

          <textarea></textarea>


          <div className="bkash-box">
            bKash: 0139857436
          </div>


          <button
            className="submit-button"
            onClick={() => setSubmitted(true)}
          >
            Submit Donation
          </button>

        </>

      ) : (

        <div className="success-box">

          <h1>
            Thank You For Your Donation!
          </h1>

          <p>
            Your donation number is:
          </p>


          <div className="donation-number">
            DON-00125
          </div>


          <p>
            Please save this number to track your donation later.
          </p>

        </div>

      )}

    </div>
  );
}

export default Donation;