import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import JoinQueue from './Components/JoinQueue';
import QueueStatus from './Components/QueueStatus';
import AdminLogin from './Components/AdminLogin';
import Signup from './Components/Signup';
import Login from './Components/Login'; 
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/join-queue" element={<JoinQueue />} />
        <Route path="/queue-status" element={<QueueStatus />} />
        <Route path="/admin-login" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
