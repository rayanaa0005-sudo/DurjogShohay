import { useState } from "react";
import NavBar from "../components/NavBar";
import "../styles/Rehabilitation.css";

function Rehabilitation() {
    
     

  const [location, setLocation] = useState('');
  const [help, setHelp] = useState('');
  const [description, setDescription] = useState('');

  const [posts, setPosts] = useState([]);

  function handlePost() {

    if (location === '' || help === '' || description === '') {
      alert('Please fill in all fields');
      return;
    }

    const newPost = {
      location: location,
      help: help,
      description: description
    };

    setPosts([...posts, newPost]);

    setLocation('');
    setHelp('');
    setDescription('');
  }

  return (
  <>
    <NavBar />

    <div className="rehabilitation-page">

      <h1>REHABILITATION</h1>

      <h2>Need rehabilitation support?</h2>

      <p>
        Post your request so people nearby can help.
      </p>

      <label>Location</label>

      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      >
        <option value="">Select District</option>
        <option>Dhaka</option>
        <option>Gazipur</option>
        <option>Narayanganj</option>
        <option>Chittagong</option>
        <option>Sylhet</option>
        <option>Rajshahi</option>
        <option>Khulna</option>
        <option>Barisal</option>
        <option>Rangpur</option>
        <option>Mymensingh</option>
      </select>

      <label>What kind of help do you need?</label>

      <input
        type="text"
        value={help}
        onChange={(e) => setHelp(e.target.value)}
        placeholder="Example: House rehabilitation"
      />

      <label>Description</label>

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Describe what help you need..."
      ></textarea>

      <button onClick={handlePost}>
        Post Request
      </button>


      <h2>Recent Rehabilitation Requests</h2>

      {posts.map((post, index) => (

        <div className="rehab-post" key={index}>

          <h3>📍 {post.location}</h3>

          <h4>{post.help}</h4>

          <p>{post.description}</p>

          <button>
            I Want To Help
          </button>

        </div>

      ))}

    </div>
    </>
  );
}

export default Rehabilitation;