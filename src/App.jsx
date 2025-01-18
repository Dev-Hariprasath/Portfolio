import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Star from './Components/canvas/Star'; 
import Lander from './Components/Pages/Lander';
import HomePage from './Components/Pages/HomePage';

const App = () => {
  return (
    <Router>
      <div className="relative overflow-hidden">
        <BackgroundAnimation />
        <Routes>
          <Route path="/" element={<Lander />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

const BackgroundAnimation = () => {
  const location = useLocation();
  return location.pathname === '/' ? (
    <div className="fixed w-full h-full pointer-events-none">
      <Star />
    </div>
  ) : null;
};

export default App;
