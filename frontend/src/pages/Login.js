import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {auth} from "../firebaseConfig.js"; 
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/chat"); // Redirect to chat after login
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: "10px", marginBottom: "10px" }}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ padding: "10px", marginBottom: "10px" }}
        />
        <br />
        <button type="submit" style={{ padding: "10px 20px" }}>Login</button>
      </form>
    </div>
  );
};

export default Login;
