"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadBubblesPreset } from "@tsparticles/preset-bubbles";
import type { ISourceOptions } from "@tsparticles/engine";
import styles from "./BubbleParticles.module.scss";

export default function BubbleParticles() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      await loadBubblesPreset(engine);
    }).then(() => setReady(true));
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      preset: "bubbles",
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      detectRetina: true,
      particles: {
        number: { value: 28 },
        opacity: { value: { min: 0.15, max: 0.45 } },
        size: { value: { min: 12, max: 56 } },
        move: {
          enable: true,
          speed: { min: 0.4, max: 1.2 },
          direction: "top",
          outModes: { default: "out" },
        },
        color: { value: ["#ffffff", "#d4f0ff", "#b8e8ff", "#e8f8ff"] },
      },
      emitters: {
        direction: "top",
        position: { x: 50, y: 100 },
        rate: { quantity: 2, delay: 0.8 },
        size: { width: 100, height: 0 },
      },
    }),
    []
  );

  if (!ready) return null;

  return (
    <Particles
      id="haqqathon-bubbles"
      className={styles.canvas}
      options={options}
    />
  );
}
