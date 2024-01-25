import { Button } from '@mui/material';
import React, { useState } from 'react';
import NavButtons from './NavButtons';

export default function Navbar() {
  const [page, setPage] = useState('About Me');

  return (
    <div style={{
      display: 'flex',
      padding: '10px 35px',
      borderRadius: '15px',
      width: '1200px',
      maxWidth: '1200px',
      justifyContent: 'space-between',
      border: '1px solid #e5e7eb',
      backgroundColor: 'rgba(255,255,255,0.6)',
      backdropFilter: 'blur(8px)',
      position: 'fixed',
      bottom: '42px',
      zIndex: 1,
    }}>
      <NavButtons name='Projects' page={page} setPage={setPage} />
      <NavButtons name='Competitions' page={page} setPage={setPage} />
      <NavButtons name='About Me' page={page} setPage={setPage} />
      <NavButtons name='Experience' page={page} setPage={setPage} />
      <NavButtons name='Courses' page={page} setPage={setPage} />
    </div>
  );
}
