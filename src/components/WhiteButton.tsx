import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react'

interface Props {
  name: string;
  url: string;
}

export default function WhiteButton({ name, url }: Props) {
  const buttonControls = useAnimation();

  const startAnimations = async () => {
    await buttonControls.start("active");
    setTimeout(() => {
      buttonControls.start("default");
    }, 100);
  }

  return (
    <>
      <motion.div
        style={{
          borderRadius: '0.37rem',
          textTransform: 'none',
          padding: '0.75rem 1.25rem',
          width: 'fit-content',
          cursor: 'pointer',
        }}
        variants={{
          default: { backgroundColor: 'red' },
          active: { backgroundColor: 'grey' },
        }}
        initial="default"
        animate={buttonControls}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        onClick={() => startAnimations()}
      >
        <div style={{
            color: 'black',
            fontFamily: 'Arial',
            fontSize: '1.5rem',
            fontStyle: 'normal',
            fontWeight: '300',
            lineHeight: 'normal',
          }}
        >
          {name}
        </div>
      </motion.div>
    </>
  );
}
