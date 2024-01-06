import React from 'react'
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div style={{
      padding: '32px 32px 42px',
      display: 'flex',
      justifyContent: 'center',
    }}>
      <Header />
      <Navbar />
    </div>
  );
}
