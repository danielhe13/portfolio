import { Box, Typography } from '@mui/material';
import React from 'react'

interface Props {
  course: {
    name: string;
    code: string;
    score: string;
  };
}

export default function CourseSmall({ course }: Props) {
  return (
    <>
      <Box sx={{
        border: '1px solid #e5e7eb',
        borderRadius: 4,
        padding: '20px 35px',
        width: '450px',
        boxShadow: '-3px 4px 4px 0px rgba(0, 0, 0, 0.10)'
      }}>
        <Typography variant='h5'>
          {course.name}
        </Typography>
      </Box>
    </>
  );
}
