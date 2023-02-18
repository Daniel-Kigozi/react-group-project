import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchRockets } from './Redux/Rockets/rocketSlice';
import './App.css';
import Missions from './Pages/Missions';
import Profile from './Pages/Profile';
import Rockets from './Pages/Rockets';
import Navigation from './components/Navbar';

function App() {
  const dispatch = useDispatch();
  dispatch(fetchRockets());
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/my-profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
