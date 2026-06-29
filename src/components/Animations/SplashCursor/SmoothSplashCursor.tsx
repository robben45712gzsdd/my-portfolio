"use client";

import { useEffect, useState } from "react";
import SplashCursor from "./SplashCursor";

export default function SmoothSplashCursor() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const query = window.matchMedia(
      "(min-width: 768px) and (pointer: fine) and (prefers-reduced-motion: no-preference)"
    );

    const update = () => setEnabled(query.matches);
    update();
    query.addEventListener("change", update);

    return () => query.removeEventListener("change", update);
  }, []);

  if (!enabled) return null;

  return (
    <SplashCursor
      SIM_RESOLUTION={64}
      DYE_RESOLUTION={512}
      CAPTURE_RESOLUTION={128}
      DENSITY_DISSIPATION={4.5}
      VELOCITY_DISSIPATION={3.2}
      PRESSURE={0.06}
      PRESSURE_ITERATIONS={8}
      CURL={1.4}
      SPLAT_RADIUS={0.055}
      SPLAT_FORCE={1800}
      SHADING={false}
      COLOR_UPDATE_SPEED={4}
      BACK_COLOR={{ r: 0, g: 0, b: 0 }}
      TRANSPARENT
    />
  );
}
