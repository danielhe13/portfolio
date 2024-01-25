import React, { useState } from 'react';
import NavButtons from './NavButtons';

export default function Navbar() {

  return (
    <div style={{
      display: 'flex',
      padding: '10px 10px',
      borderRadius: '15px',
      width: '1150px',
      maxWidth: '1150px',
      justifyContent: 'space-around',
      border: '1px solid #e5e7eb',
      backgroundColor: 'rgba(255,255,255,0.6)',
      backdropFilter: 'blur(8px)',
      position: 'fixed',
      bottom: '42px',
      zIndex: 1,
    }}>
      <NavButtons name='About Me' route="/aboutme"/>
      <NavButtons name='Courses' route="/courses"/>
      <NavButtons name='Experience' route="/experience"/>
      <NavButtons name='Projects' route="/projects"/>
    </div>
  );
}
