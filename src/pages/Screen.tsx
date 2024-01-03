import { Box, Typography } from '@mui/material'
import React from 'react'

import Reveal from '../components/Reveal'
import Typewriter from '../components/Typewriter';
import Veil from '../components/Veil';

interface Props {
  screen: Boolean;
}

export default function Screen({ screen }: Props) {

  return (
    <Box display='flex' flexDirection='column'
    alignItems='center' justifyContent='center'
    height='100svh'
    >
      <Box>
        <Veil screen={screen}>
          <Reveal>
            <Typography variant="h1">
              Hi, I'm Daniel.
            </Typography>
          </Reveal>
        </Veil>
        <Veil screen={screen}>
          <Typography variant="h4">
            <Typewriter baseText="I'm a Computer Science Student"/>
          </Typography>
        </Veil>
      </Box>
    </Box>
  )
}
