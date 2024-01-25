import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import BlackButton from '../components/BlackButton';
import { useNavigate } from 'react-router-dom';

export default function AboutMe() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/portfolio/aboutme');
  }, [])

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <Box>
          <Typography variant="h1">
            Hi, I’m Daniel.
          </Typography>
          <div style={{
            marginTop: '0.69rem'
          }}/>
          <Typography variant="h4">
            I’m a <b>Computer Science Student</b>
          </Typography>
        </Box>
        <div style={{
            marginTop: '2rem'
          }}/>
        <BlackButton name='Resume' />
        <div style={{
            marginTop: '5rem'
          }}/>
      </div>
    </>
  );
}
