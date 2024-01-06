import { Typography } from '@mui/material';
import React from 'react';
import { ReactComponent as GitHub } from '../images/github.svg'
import { ReactComponent as Linkedin } from '../images/linkedin.svg'

export default function Header() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      position: 'fixed',
      width: 'calc(100% - 64px)',
      zIndex: 50,
    }}>
      <Typography variant='h4'>Dearest You</Typography>
      <div style={{
        display: 'flex',
        gap: '16pt',
        margin: '0 10px',
      }}>
        <Linkedin />
        <GitHub />
      </div>
    </div>
  );
}