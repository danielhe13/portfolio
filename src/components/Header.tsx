import { Typography } from '@mui/material';
import React from 'react';
import { ReactComponent as GitHub } from '../images/github.svg'
import { ReactComponent as Linkedin } from '../images/linkedin.svg'
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const nagivate = useNavigate();

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      position: 'fixed',
      width: 'calc(100% - 64px)',
      zIndex: 50,
    }}>
      <Typography variant='h4'
        onClick={() => {
          nagivate('/');
        }}
        sx={{
          cursor: 'pointer',
        }}
      >
        Dearest You
      </Typography>
      <div style={{
        display: 'flex',
        gap: '16pt',
        margin: '0 10px',
      }}>
        <a href="https://www.linkedin.com/in/danielh3/" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
        <a href="https://github.com/danielhe13" target="_blank" rel="noopener noreferrer"><GitHub /></a>
      </div>
    </div>
  );
}
