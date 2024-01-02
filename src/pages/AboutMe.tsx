import { Box, Typography } from '@mui/material'
import React from 'react'

import Reveal from '../components/Reveal'
import Typewriter from '../components/Typewriter';

export default function AboutMe() {

  return (
    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'
    height='100svh'>
      <Box>
        <Typography variant="h1">
          About Me
        </Typography>
        <Typography variant="h3">
          I'm a third year student studying at The University of New South Wales taking courses related to Front-end Design, Software Engineering and Cyber Security.
        </Typography>
      </Box>
    </Box>
  );
}

// course ranks
// kdrama
// anime
// crochet
// Project Hope
// Projects
// Social Links
// Picture Shoot

