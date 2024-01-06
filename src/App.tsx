import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import LandingPage from './pages/LandingPage';
import Screen from './pages/Screen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Screen />} />
        <Route path="/home" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
