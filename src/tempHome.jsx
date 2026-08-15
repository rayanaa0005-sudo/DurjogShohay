import { useState } from 'react';
import './tempHome.css';

import Donation from './donation';
import TrackDonation from './trackDonation';
import Rehabilitation from './rehabilitation';

function TempHome() {

  const [page, setPage] = useState('home');

  return (
    <div>

      {page === 'home' && (

        <div className="temp-home">

          <h1>Durjog Shohay</h1>

          <h2>Temporary Home Page</h2>

          <button onClick={() => setPage('donation')}>
            Donation
          </button>

          <button onClick={() => setPage('track')}>
            Track My Donation
          </button>

          <button onClick={() => setPage('rehabilitation')}>
            Rehabilitation
          </button>

        </div>

      )}


      {page === 'donation' && (
        <>
          <Donation />

          <button
            className="back-button"
            onClick={() => setPage('home')}
          >
            Back to Home
          </button>
        </>
      )}


      {page === 'track' && (
        <>
          <TrackDonation />

          <button
            className="back-button"
            onClick={() => setPage('home')}
          >
            Back to Home
          </button>
        </>
      )}


      {page === 'rehabilitation' && (
        <>
          <Rehabilitation />

          <button
            className="back-button"
            onClick={() => setPage('home')}
          >
            Back to Home
          </button>
        </>
      )}

    </div>
  );
}

export default TempHome;