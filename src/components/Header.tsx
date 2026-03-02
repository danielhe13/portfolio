import { Typography } from '@mui/material';
import React from 'react';
import { ReactComponent as GitHub } from '../images/github.svg'
import { ReactComponent as Linkedin } from '../images/linkedin.svg'
import { ReactComponent as Discord } from '../images/discord.svg'
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const nagivate = useNavigate();

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      position: 'fixed',
      width: 'calc(100% - 48px)',
      zIndex: 50,
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '20px 20px',
        border: '#E5E7EB 1px solid',
        borderRadius: '20px'
      }}>
        <div style={{
          display: 'flex',
          margin: '0px 10px',
        }}>
          <Typography variant='h4'
            onClick={() => {
              nagivate('/');
            }}
            sx={{
              cursor: 'pointer',
            }}
            fontFamily='Arial'
            letterSpacing='3%'
          >
            Dearest You
          </Typography>
        </div>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '20px 20px',
        border: '#E5E7EB 1px solid',
        height: '40px',
        borderRadius: '20px'
      }}>
        <div style={{
          display: 'flex',
          gap: '21px',
          margin: '0px 10px'
        }}>
          <a href="https://www.linkedin.com/in/danielh3/" target="_blank" rel="noopener noreferrer"><Linkedin style={{
            height: '40px',
            width: '40px',
            fill: 'black',
          }}/></a>
          <a href="https://github.com/danielhe13" target="_blank" rel="noopener noreferrer"><GitHub style={{
            height: '40px',
            width: '40px',
            fill: 'black',
          }}/></a>
          <a href="https://discord.com/users/212886873071288320" target="_blank" rel="noopener noreferrer"><Discord style={{
            height: '40px',
            width: '40px',
            fill: 'black',
          }}/></a>
        </div>
      </div>
    </div>
  );
}