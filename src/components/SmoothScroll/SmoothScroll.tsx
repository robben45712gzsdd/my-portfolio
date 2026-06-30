"use client";

import Lenis from "lenis";
import { type ReactNode, useEffect } from "react";

type SmoothScrollProps = {
  children: ReactNode;
};

export default function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let lenis: Lenis | undefined;

    const destroyLenis = () => {
      lenis?.destroy();
      lenis = undefined;
    };

    const createLenis = () => {
      if (reducedMotionQuery.matches || lenis) {
        return;
      }

      lenis = new Lenis({
        autoRaf: true,
        anchors: {
          offset: -88,
        },
        duration: 1.15,
        lerp: 0.08,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.1,
        stopInertiaOnNavigate: true,
      });
    };

    const handleMotionPreferenceChange = () => {
      if (reducedMotionQuery.matches) {
        destroyLenis();
        return;
      }

      createLenis();
    };

    createLenis();
    reducedMotionQuery.addEventListener(
      "change",
      handleMotionPreferenceChange,
    );

    return () => {
      reducedMotionQuery.removeEventListener(
        "change",
        handleMotionPreferenceChange,
      );
      destroyLenis();
    };
  }, []);

  return <>{children}</>;
}
