import { Box, Typography } from '@mui/material';
import React from 'react'

interface Props {
  course: string;
}

export default function CourseSmall({ course }: Props) {
  return (
    <>
      <Box sx={{
        border: '1px solid #e5e7eb',
        borderRadius: 4,
        padding: '20px 35px',
        width: '450px',
        margin: 0.5,
      }}>
        <Typography variant='h5'>
          {course}
        </Typography>
      </Box>
    </>
  );
}
