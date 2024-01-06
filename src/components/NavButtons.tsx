import React from 'react';

interface Props {
  name: string;
  page: string;
  setPage: (page: string) => void;
}

export default function NavButtons({ name, page, setPage }: Props) {
  return (
    <>
      <div
        style={{
          boxShadow: 'none',
          borderRadius: '15px',
          textTransform: 'none',
          padding: '12px 20px',
          backgroundColor: page === name ? 'black' : 'white',
          width: 'fit-content',
          cursor: 'pointer',
        }}
        onClick={() => {
          setPage(name);
        }}
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