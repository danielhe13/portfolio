import React, { useState } from 'react';
import NavButtons from './NavButtons';

export default function Navbar() {

  return (
    <div style={{
      display: 'flex',
      padding: '10px 35px',
      borderRadius: '15px',
      width: '1150px',
      maxWidth: '1150px',
      justifyContent: 'space-between',
      border: '1px solid #e5e7eb',
      backgroundColor: 'rgba(255,255,255,0.6)',
      backdropFilter: 'blur(8px)',
      position: 'fixed',
      bottom: '42px',
      zIndex: 1,
    }}>
      <NavButtons name='About Me' route="/portfolio/aboutme"/>
      <NavButtons name='Courses' route="/portfolio/courses"/>
      <NavButtons name='Experience' route="/portfolio/experience"/>
      <NavButtons name='Projects' route="/portfolio/projects"/>
    </div>
  );
}
