import React, { useState } from 'react';

interface Props {
  name: string;
  page: string;
  setPage: (page: string) => void;
}

export default function NavButtons({ name, page, setPage }: Props) {
  const [hover, setHover] = useState(false);

  return (
    <>
      <div
        style={{
          boxShadow: 'none',
          borderRadius: '15px',
          textTransform: 'none',
          padding: '12px 20px',
          backgroundColor: page === name ? 'black' : hover ? 'rgba(0, 0, 0, 0.05)' : 'transparent',
          width: 'fit-content',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        }}
        onClick={() => {
          setPage(name);
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div style={{
            color: page === name ? 'white' : 'black',
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
