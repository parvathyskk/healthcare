import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Welcome to Online Healthcare Consultation</h1>
      <p>Consult doctors anytime, anywhere.</p>
      <div>
        <Link to="/login">
          <button style={{ margin: "10px", padding: "10px 20px" }}>Login</button>
        </Link>
        <Link to="/signup">
          <button style={{ margin: "10px", padding: "10px 20px" }}>Signup</button>
        </Link>
        <Link to="/chat">
          <button style={{ margin: "10px", padding: "10px 20px" }}>Chat Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
