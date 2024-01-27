import { Box, Typography } from '@mui/material';
import React from 'react'
import CourseSmall from '../components/CourseSmall';
import { motion } from 'framer-motion';

export default function Courses() {

  const courses = [
    {
      name: 'Algorithms and Programming Techniques',
      code: 'COMP3121',
      score: '96 HD',
    },
    {
      name: 'Programming Fundamentals',
      code: 'COMP1511',
      score: '94 HD',
    },
    {
      name: 'Web Front-End Programming',
      code: 'COMP6080',
      score: '92 HD',
    },
    {
      name: 'Software Construction',
      code: 'COMP2041',
      score: '91 HD',
    },
    {
      name: 'Software Engineering Fundamentals',
      code: 'COMP1531',
      score: '89 HD',
    },
    {
      name: 'Database Systems',
      code: 'COMP3311',
      score: '87 HD',
    },
    {
      name: 'Data Structures and Algorithms',
      code: 'COMP2521',
      score: '81 DN',
    },
    {
      name: 'Computer Systems Fundamentals',
      code: 'COMP1521',
      score: '81 DN',
    },
    {
      name: 'Object-Oriented Design and Programming',
      code: 'COMP2511',
      score: '80 DN',
    },
    {
      name: 'Operating Systems',
      code: 'COMP3231',
      score: '75 DN',
    },
  ]

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <Box>
          <Typography variant="h1">
            Courses
          </Typography>
        </Box>
        <div style={{
            marginTop: '2rem'
        }}/>
        <div
          style={{
            maxHeight: '400px',
            overflow: 'hidden',
            mask: 'linear-gradient(transparent, white 10%, white 90%, transparent)',
          }}
        >
          <motion.div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              padding: '0 1rem',
              width: 'max-content',
            }}
            animate={{ translateY: 'calc(-50% - 0.5rem)' }}
            transition={{ duration: 1, ease: "linear", repeat: Infinity }}
          >
            {courses.map((course) => {
              return (
                <CourseSmall course={course}/>
              )
            })}
            {courses.map((course) => {
              return (
                <CourseSmall course={course}/>
              )
            })}
          </motion.div>
        </div>
      </div>
    </>
  );
}
