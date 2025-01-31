import React, { useState } from "react";
import "./QueueStatus.css"; 

const JoinQueue = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [purpose, setPurpose] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      phoneNumber,
      purpose,
    };

    try {
      const response = await fetch("https://queuebackendprograms.onrender.com/api/join-queue", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage(`Successfully joined the queue. Your token number is ${result.token}`);
        setName("");
        setPhoneNumber("");
        setPurpose("");
      } else {
        setMessage("Error joining the queue. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="queue-status-wrapper">
      <div className="status-box">
        <h2>Join Queue</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />

          <label htmlFor="purpose">Purpose:</label>
          <input
            type="text"
            id="purpose"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            required
          />

          <button type="submit">Join Queue</button>
        </form>

        {message && <p className="status-message">{message}</p>}
      </div>
    </div>
  );
};

export default JoinQueue;
