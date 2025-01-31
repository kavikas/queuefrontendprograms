import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

function Login() {
  const [username, setUsername] = useState("");  
  const [password, setPassword] = useState("");  
  const navigate = useNavigate();  

  const handleLogin = (e) => {
    e.preventDefault();  
    if (username && password) {
      navigate("/home");
    } else {
      alert("Please enter both username and password.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required
          />
        </div>
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
