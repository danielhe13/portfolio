import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  screen: Boolean;
}

export default function Veil({ children, width = "fit-content", screen }: Props) {

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    const startAnimations = async () => {
      if (!screen) {
        await slideControls.start("visible");
        await slideControls.start("wipe");
        await mainControls.start("hidden");
        await slideControls.start("wipeout");
        await mainControls.start("gone");
      }
    }
    startAnimations();
  // eslint-disable-next-line
  }, [screen])

  return (
    <div style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          gone: { display: 'none' },
          visible: { opacity: 1, display: 'block' },
          hidden: { opacity: 0 },
        }}
        initial="visible"
        animate={mainControls}
        transition={{ delay: 0 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { right: "100%" },
          visible: { right: 0 },
          wipe: { left: 0 },
          wipeout: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.25, ease: "circInOut" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "black",
          zIndex: 20,
        }}
      />
    </div>
  );
}
