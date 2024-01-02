import { Box, Typography } from '@mui/material'
import React, { useEffect, useRef } from 'react'

import Screen from './Screen';
import { motion, useAnimation } from 'framer-motion';

export default function LandingPage() {
  const ref = useRef(null);

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  const [screen, setScreen] = React.useState(true);

  const enter = () => {
    setScreen(false);
    mainControls.start("hidden");
    slideControls.start("visible");
  };

  useEffect(() => {
    let timeoutId: string | number | NodeJS.Timeout | undefined;

    if (screen) {
      timeoutId = setTimeout(() => {
        window.addEventListener('click', enter);
      }, 3500);
    } else {
      window.removeEventListener('click', enter);
    }

    return () => {
      window.removeEventListener('click', enter);
      clearTimeout(timeoutId);
    };
  }, [screen])

  return (
    <div>
      <motion.div ref={ref}
        variants={{
          hidden: { display: 'none' },
          visible: { display: 'block' },
        }}
        initial="visible"
        animate={mainControls}
        transition={{ delay: 0.5 }}
      >
        <Screen />
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 50 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ delay: 0.25, duration: 0.5, ease: "circInOut" }}
        style={{
          position: "absolute",
          top: 450,
          bottom: 0,
          left: 100,
          right: 0,
          background: "white",
          zIndex: 20,
          height: 200,
          width: 300
        }}
      />

    </div>
  );
}
