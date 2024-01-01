import { Box, Typography } from '@mui/material'
import React from 'react'

import Reveal from '../components/Reveal'

export default function LandingPage() {

  return (
    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'
    height='100vh'>
      <Box>
        <Reveal>
          <Typography variant="h1">
            Hi, I'm Daniel.
          </Typography>
        </Reveal>
        <Reveal>
          <Typography variant="h4">
            I'm a <b>Computer Science Student</b>
          </Typography>
        </Reveal>
      </Box>
    </Box>
  );
}
