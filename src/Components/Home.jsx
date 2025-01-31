import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <div className="header-title"><h3>Queue System</h3></div>
      </header>
      <section className="intro">
        <h1>Welcome to the Queue Management System</h1>
        <p>
          Managing your time at the bank just got easier! Our Bank Queue Management System is designed to help customers 
          avoid long waiting times and improve service efficiency. Whether you're visiting for a transaction, consultation, 
          or any banking needs, our system ensures a smooth and organized experience.With features like real-time queue tracking, 
          instant notifications, and secure access, you can plan your visit more effectively and reduce unnecessary waiting.
        </p>
      </section>

    
      <section className="image-section">
        <img
          src="https://5.imimg.com/data5/SELLER/Default/2023/11/364469090/SF/CA/NF/64082820/smart-token-queue-management-software-for-banks-1000x1000.png"
          alt="Queue Management System"
          className="system-image"
        />
      </section>

      
      <section className="buttons-section">
        <div className="circle-container">
          <Link to="/join-queue" className="circle">
            <i className="fas fa-user-plus"></i> 
            <img 
              src="https://cdn-icons-png.flaticon.com/512/5171/5171287.png"  
              alt="Token Icon" 
              className="circle-icon" 
            />
          </Link>
          <h3>Join Queue</h3>
          <p>Click here to join the queue and get your token number.</p>
        </div>
        <div className="circle-container">
          <Link to="/queue-status" className="circle">
            <i className="fas fa-list-ul"></i> 
            <img 
              src="https://cdn-icons-png.flaticon.com/512/6009/6009580.png"  
              alt="Queue Status Icon" 
              className="circle-icon" 
            />
          </Link>
          <h3>View Queue Status</h3>
          <p>View the current status of your position in the queue.</p>
        </div>
        <div className="circle-container">
          <Link to="/admin-login" className="circle">
            <i className="fas fa-sign-in-alt"></i> 
            <img 
              src="https://cdn-icons-png.flaticon.com/512/9572/9572882.png"  
              alt="Admin Login Icon" 
              className="circle-icon" 
            />
          </Link>
          <h3>Admin Login</h3>
          <p>Admin can log in to manage the queue and track performance.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
