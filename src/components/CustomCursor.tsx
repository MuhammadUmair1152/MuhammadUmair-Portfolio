"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [visible, setVisible] = useState(false);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 400, mass: 0.5 };
  const ringSpringConfig = { damping: 20, stiffness: 150, mass: 0.8 };

  const dotX = useSpring(rawX, springConfig);
  const dotY = useSpring(rawY, springConfig);
  const ringX = useSpring(rawX, ringSpringConfig);
  const ringY = useSpring(rawY, ringSpringConfig);

  useEffect(() => {
    // Only show on desktop
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    // High performance event delegation for hover states (zero MutationObserver overhead)
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest("a, button, [data-cursor-hover], input, textarea, select, label")) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mousedown", onDown, { passive: true });
    document.addEventListener("mouseup", onUp, { passive: true });
    document.addEventListener("mouseover", onMouseOver, { passive: true });

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onMouseOver);
    };
  }, [rawX, rawY, visible]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Dot */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
        }}
      >
        <motion.div
          animate={{
            width: clicking ? 6 : hovering ? 10 : 8,
            height: clicking ? 6 : hovering ? 10 : 8,
            backgroundColor: "#ffffff",
          }}
          transition={{ duration: 0.15 }}
          className="rounded-full"
        />
      </motion.div>

      {/* Ring */}
      <motion.div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
        }}
      >
        <motion.div
          animate={{
            width: clicking ? 24 : hovering ? 48 : 36,
            height: clicking ? 24 : hovering ? 48 : 36,
            borderColor: hovering ? "rgba(59,130,246,0.7)" : "rgba(255,255,255,0.3)",
            backgroundColor: hovering ? "rgba(59,130,246,0.08)" : "rgba(59,130,246,0)",
          }}
          transition={{ duration: 0.2, type: "spring", stiffness: 200, damping: 20 }}
          className="rounded-full border"
        />
      </motion.div>
    </>
  );
}
