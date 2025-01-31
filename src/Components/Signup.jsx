import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();  
    if (username && email && password) {
      setUsername("");  
      setEmail("");     
      setPassword("");  
      navigate("/home");
    } else {
      alert("Please fill in all the fields!");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Signup</h2>
        <form onSubmit={handleSignup}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              value={username}          
              onChange={(e) => setUsername(e.target.value)} 
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              value={email}            
              onChange={(e) => setEmail(e.target.value)} 
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}        
              onChange={(e) => setPassword(e.target.value)} 
              required
            />
          </div>
          <center>
          <button type="submit" className="signup-btn">
            Signup
          </button>
          </center>

          <p className="login-link">
            Already have an account?{" "}
            <span
              onClick={() => {
                console.log("Navigating to login");
                navigate("/login");
              }}
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
