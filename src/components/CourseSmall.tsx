import { Box, Typography } from '@mui/material';
import React, { useState } from 'react'

interface Props {
  course: {
    name: string;
    code: string;
    score: string;
  };
}

export default function CourseSmall({ course }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box sx={{
        border: '1px solid #e5e7eb',
        borderRadius: 4,
        padding: open ? '25px 40px' : '20px 35px',
        width: open ? '650px' : '450px',
        boxShadow: '-3px 4px 4px 0px rgba(0, 0, 0, 0.10)',
        cursor: 'pointer',
        transition: 'all 3s ease-in-out',
      }}
        onClick={() => setOpen(!open)}
      >
        <Typography variant={open ? 'h4' : 'h5'}>
          {course.name}
        </Typography>
        {open &&
          <>
            <div style={{
              marginTop: '0.5rem'
            }}/>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}>
              <Typography variant='h6'>
                {course.code}
              </Typography>
              <Typography variant='h6'>
                {course.score}
              </Typography>
            </div>
          </>
        }
      </Box>
    </>
  );
}
