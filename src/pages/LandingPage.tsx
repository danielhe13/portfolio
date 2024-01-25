import React from 'react'
import Header from '../components/Header';
import Navbar from '../components/Navbar';

import Screen from '../pages/Screen';
import AboutMe from './AboutMe';

export default function LandingPage() {
  return (
    <>
      <Screen />
      <div style={{
        height: 'calc(100svh - 32px - 42px)',
        width: 'calc(100svw - 32px - 32px)',
        padding: '32px 32px 42px',
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Header />
        <AboutMe />
        <Navbar />
      </div>
    </>
  );
}
