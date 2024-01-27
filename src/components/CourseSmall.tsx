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
      }}>
        <Typography variant='h5'>
          {course.name}
        </Typography>
      </Box>
    </>
  );
}
