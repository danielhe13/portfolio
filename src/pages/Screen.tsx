import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'

import Reveal from '../components/Reveal'
import Typewriter from '../components/Typewriter';
import Veil from '../components/Veil';

export default function Screen() {
  const [screen, setScreen] = React.useState(true);
  const [close, setClose] = React.useState(false);

  const enter = () => {
    setScreen(false);
  };

  useEffect(() => {
    let timeoutId: string | number | NodeJS.Timeout | undefined;

    if (screen) {
      window.addEventListener('click', enter);
    } else {
      window.removeEventListener('click', enter);
    }

    return () => {
      window.removeEventListener('click', enter);
      clearTimeout(timeoutId);
    };
  }, [screen])

  return (
    <Box display={close ? 'none' : 'flex'} flexDirection='column'
    alignItems='center' justifyContent='center'
    width='100svw'
    height='100svh' zIndex={100} sx={{ backgroundColor: 'white' }}
    position='fixed'
    >
      <Box>
        <Veil screen={screen} setClose={setClose}>
          <Reveal>
            <Typography variant="h1">
              Hi, I’m Daniel.
            </Typography>
          </Reveal>
        </Veil>
        <Veil screen={screen} setClose={setClose}>
          <Typography variant="h4">
            <Typewriter baseText="I’m a Computer Science Student"/>
          </Typography>
        </Veil>
      </Box>
    </Box>
  )
}
