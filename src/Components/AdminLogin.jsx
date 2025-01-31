import React, { useState, useEffect } from "react";
import "./Adminlogin.css";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [queue, setQueue] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin123") {
      alert("Login Successful");
      setIsAdmin(true);
      setUsername("");
      setPassword("");
      fetchQueue();
    } else {
      alert("Invalid credentials");
    }
  };

  const fetchQueue = async () => {
    try {
      const response = await fetch("https://queuebackendprograms.onrender.com/api/get-queue");
      const data = await response.json();
      setQueue(data);
    } catch (error) {
      console.error("Error fetching queue:", error);
    }
  };

  const removeCustomer = async (id) => {
    try {
      await fetch(`https://queuebackendprograms.onrender.com/api/remove-customer/${id}`, {
        method: "DELETE",
      });
      setQueue(queue.filter((customer) => customer.id !== id));
      setSelectedCustomer(null);
    } catch (error) {
      console.error("Error removing customer:", error);
    }
  };

  return (
    <div className="admin-container">
      {!isAdmin ? (
        <div className="admin-login-container">
          <h2>Admin Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>
        </div>
      ) : (
        <div className="queue-list">
          <h2>Queue Management</h2>
          {queue.length === 0 ? (
            <p>No customers in queue</p>
          ) : (
            <ul>
              {queue.map((customer) => (
                <li key={customer.id}>
                  <span
                    onClick={() => setSelectedCustomer(customer)}
                    style={{
                      cursor: "pointer",
                      color: "blue",
                      textDecoration: "underline",
                      display: "inline-block",
                      marginRight: "10px",
                    }}
                  >
                    {customer.name} - Token {customer.token}
                  </span>
                  <button onClick={() => removeCustomer(customer.id)}>Remove</button>
                </li>
              ))}
            </ul>
          )}

          {/* Display Selected Customer Details */}
          {selectedCustomer && (
            <div className="customer-details">
              <h3>Customer Details</h3>
              <p>
                <strong>Name:</strong> {selectedCustomer.name}
              </p>
              <p>
                <strong>Token:</strong> {selectedCustomer.token}
              </p>
             
              <button onClick={() => setSelectedCustomer(null)}>Close</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminLogin;
