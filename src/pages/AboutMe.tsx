import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import BlackButton from '../components/BlackButton';
import { useNavigate } from 'react-router-dom';
import Photo from '../images/placeholder.jpg';
import WhiteButton from '../components/WhiteButton';

export default function AboutMe() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/aboutme');
  }, [])

  return (
    <>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
      }}>

        <div style={{
          height: '102px',
          width: '100%',
          backgroundColor: 'aqua'
        }}/>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            gap: '60px'
          }}
        >
          <div style={{
            height: '560px',
            width: '560px',
            backgroundColor: 'red',
            // backgroundImage: `url(${Photo})`,
            backgroundSize: '100%',
            borderRadius: '30px',
          }}/>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box>
              <Typography variant="h1" color='red' fontFamily='Arial' letterSpacing='0.2%'>
                Hi, I’m Daniel.
              </Typography>
              <div style={{
                marginTop: '0.38rem'
              }}/>
              <Typography variant="h4" color='red' fontFamily='Arial' letterSpacing='3%'>
                I’m a <b>Computer Science Student</b>
              </Typography>
            </Box>
            <div style={{
                marginTop: '2rem'
              }}/>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '30px'
            }}>
              <BlackButton name='Resume' url='https://drive.google.com/file/d/1GGgKevtZ527qIH96w9YHl5bc9erkL2u5/view?usp=sharing' />
              <WhiteButton name='Tell me more' url={window.location.href} />
            </div>
          </div>
        </div>
        <div style={{
          height: '146px',
          width: '100%',
          backgroundColor: 'aqua'
        }}/>
      </div>
    </>
  );
}
