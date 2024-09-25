import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Dashboard from './components/Dashboard.js';
import Signup from './components/SignUp.js';
import './App.css'
// Import other components as needed

function DashboardLayout() {
  return (
    <div style={{ display: 'flex' }}> {/* Flexbox to position them next to each other */}
      <Navbar /> {/* Sidebar on the left */}
      <Dashboard /> {/* Dashboard on the right */}
    </div>
  );
}

function App() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard" element={<DashboardLayout />} />
          {/* Add more routes here */}
        </Routes>
    </Router>
  );
}

export default App;