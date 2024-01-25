import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import AboutMe from './pages/AboutMe';
import Courses from './pages/Courses';

import Screen from './pages/Screen';

import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Screen />
      <div style={{
        height: 'calc(100svh - 32px - 42px)',
        width: 'calc(100svw - 32px - 32px)',
        padding: '32px 32px 42px',
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Header />
        <Routes>
          <Route path="/portfolio/courses" element={<Courses />} />
          <Route path="/portfolio/experience" element={<Courses />} />
          <Route path="/portfolio/projects" element={<Courses />} />
          <Route path="/portfolio" element={<AboutMe />} />
          <Route path="/portfolio/aboutme" element={<AboutMe />} />
        </Routes>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
