import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'

import Reveal from '../components/Reveal'
import Typewriter from '../components/Typewriter';

export default function Screen() {

  return (
    <Box display='flex' flexDirection='column'
    alignItems='center' justifyContent='center'
    height='100svh'
    >
      <Box>
        <Reveal>
          <Typography variant="h1">
            Hi, I'm Daniel.
          </Typography>
        </Reveal>
        <Typography variant="h4">
          <Typewriter baseText="I'm a Computer Science Student"/>
        </Typography>
      </Box>
    </Box>
  )
}
