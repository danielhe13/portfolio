import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import AboutMe from './pages/AboutMe';
import Courses from './pages/Courses';

import Screen from './pages/Screen';

import Header from './components/Header';
import Navbar from './components/Navbar';

import guide from './image.png';

function App() {
  return (
    <Router>
      <Screen />
      <div style={{
        // backgroundImage: `url(${guide})`,
        backgroundSize: '100%',
      }}>
        <div style={{
          height: 'calc(100svh - 24px - 42px)',
          width: 'calc(100svw - 24px - 24px)',
          padding: '24px 24px 42px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <Header />
          <Routes>
            <Route path="/courses" element={<Courses />} />
            <Route path="/experience" element={<AboutMe />} />
            <Route path="/projects" element={<AboutMe />} />
            <Route path="/" element={<AboutMe />} />
            <Route path="/aboutme" element={<AboutMe />} />
          </Routes>
          <Navbar />
        </div>
      </div>
    </Router>
  );
}

export default App;
