import '../donation.css';
function donation() {
  return (
   <div className="donation-page">

      <h1>MAKE A DONATION</h1>

      <h2>What would you like to donate?</h2>

      <div className="donation-options">
        <button>Food</button>
        <button>Clothing</button>
        <button>Medicine</button>
        <button>Money</button>
        <button>Other</button>
      </div>

      <label>Donation Type</label>
      <select>
        <option>Food</option>
        <option>Clothing</option>
        <option>Medicine</option>
        <option>Money</option>
        <option>Other</option>
      </select>

      <label>Quantity</label>
      <input type="text" />

      <label>Location</label>
      <input type="text" />

      <label>Description</label>
      <textarea></textarea>

      <button className="submit-button">Submit Donation</button>

    </div>
  );
}

export default donation;
