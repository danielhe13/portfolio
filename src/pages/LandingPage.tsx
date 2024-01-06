import React from 'react'
import Header from '../components/Header';
import Navbar from '../components/Navbar';

import Screen from '../pages/Screen';

export default function LandingPage() {
  return (
    <>
      <Screen />
      <div style={{
        padding: '32px 32px 42px',
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Header />
        <Navbar />
      </div>
    </>
  );
}
