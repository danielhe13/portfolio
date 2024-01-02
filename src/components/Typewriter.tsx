import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import CursorBlinker from "./CursorBlinker";
import { useEffect, useRef } from "react";

interface Props {
  baseText: string;
}

export default function TextAnim({ baseText }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest < 5 ? latest : 5)
  );
  const displayText2 = useTransform(rounded, (latest) =>
    baseText.slice(5, latest)
  );

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, baseText.length, {
        type: "tween", // Not really needed because adding a duration will force "tween"
        duration: 2.5,
        delay: 0.75,
        ease: "easeOut",
      });
      return controls.stop;
    }
  // eslint-disable-next-line
  }, [isInView]);

  return (
    <span className="" ref={ref}>
      <motion.span>
        {displayText}
      </motion.span>
      <motion.span
        style={{
          fontWeight: 'bold'
        }}
      >
        {displayText2}
      </motion.span>
      <CursorBlinker />
    </span>
  );
}
