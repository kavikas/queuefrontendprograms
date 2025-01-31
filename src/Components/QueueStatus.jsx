import React, { useState } from "react";
import "./QueueStatus.css";

const QueueStatus = () => {
  const [token, setToken] = useState("");
  const [status, setStatus] = useState("");

  const checkStatus = async () => {
    if (!token) {
      setStatus("Please enter a valid token number.");
      return;
    }

    try {
      const response = await fetch(`https://queuebackendprograms.onrender.com/api/queue-status/${token}`);
      const data = await response.json();

      if (response.ok) {
        setStatus(data.message);  
      } else {
        setStatus(data.message);  
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("An error occurred. Please try again.");
    }
    setTimeout(() => {
      setToken("");  
      setStatus(""); 
    }, 5000); 
  };
  

  return (
    <div className="queue-status-wrapper">
      <div className="status-box">
        <h2>Queue Status</h2>
        <label htmlFor="tokenInput">Enter Your Token Number:</label>
        <input
          id="tokenInput"
          type="text"
          placeholder="Token Number"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          required
        />
        <button onClick={checkStatus}>Check Status</button>
        {status && <p className="status-message">{status}</p>}
      </div>
    </div>
  );
};

export default QueueStatus;
