import React, { useState } from 'react';
import NavButtons from './NavButtons';

export default function Navbar() {

  return (
    <div style={{
      display: 'flex',
      padding: '10px 0px 10px 48px',
      borderRadius: '15px',
      width: '986px',
      // width: '1052px',
      // maxWidth: '1052px',
      // justifyContent: 'space-evenly',
      // border: '1px solid red',
      border: '1px solid #e5e7eb',
      // backgroundColor: 'rgba(255,255,255,0.6)',
      // backdropFilter: 'blur(8px)',
      position: 'fixed',
      bottom: '42px',
      zIndex: 1,
      alignItems: 'center',
      gap: '56px',
    }}>
      <NavButtons name='About Me' route="/aboutme"/>
      <div style={{
        backgroundColor: '#E5E7EB',
        width: '2px',
        height: '34px',
      }}/>
      <NavButtons name='Courses' route="/courses"/>
      <div style={{
        backgroundColor: '#E5E7EB',
        width: '2px',
        height: '34px',
      }}/>
      <NavButtons name='Experience' route="/experience"/>
      <div style={{
        backgroundColor: '#E5E7EB',
        width: '2px',
        height: '34px',
      }}/>
      <NavButtons name='Projects' route="/projects"/>
    </div>
  );
}
