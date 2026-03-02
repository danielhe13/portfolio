import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface Props {
  name: string;
  route: string;
}

export default function NavButtons({ name, route }: Props) {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <div
        style={{
          boxShadow: 'none',
          borderRadius: '15px',
          textTransform: 'none',
          padding: '13px 20px',
          backgroundColor: location.pathname === route ? 'red' : hover ? 'rgba(0, 0, 0, 0.05)' : 'transparent',
          // backgroundColor: location.pathname === route ? 'black' : hover ? 'rgba(0, 0, 0, 0.05)' : 'transparent',
          width: 'fit-content',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        }}
        onClick={() => {
          navigate(route);
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div style={{
            color: location.pathname === route ? 'white' : 'red',
            fontFamily: 'Arial',
            fontSize: '1.625rem',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '100%',
          }}
        >
          {name}
        </div>
      </div>
    </>
  );
}
