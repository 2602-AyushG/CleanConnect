import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import StartDrive from './pages/StartDrive';
import DriveStatus from './pages/DriveStatus';
import DriveDetail from './pages/DriveDetail';
import Leaderboard from './pages/Leaderboard';
import Profile from './pages/Profile';
import ReportIssue from './pages/ReportIssue';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-green-50 font-body">
        <Navbar />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/start-drive" element={<StartDrive />} />
            <Route path="/drive-status" element={<DriveStatus />} />
            <Route path="/drive/:id" element={<DriveDetail />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/report-issue" element={<ReportIssue />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
