"use client";

import { useMemo } from "react";
import styles from "./BubbleParticles.module.scss";

type Bubble = {
  id: number;
  size: number;
  left: number;
  delay: number;
  duration: number;
};

function seededRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

export default function BubbleParticles() {
  const bubbles: Bubble[] = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: 50 + seededRandom(i * 3 + 1) * 130,
      left: seededRandom(i * 3 + 2) * 100,
      delay: seededRandom(i * 3 + 3) * 14,
      duration: 12 + seededRandom(i * 3 + 4) * 16,
    }));
  }, []);

  return (
    <div className={styles.canvas}>
      {bubbles.map((b) => (
        <div
          key={b.id}
          className={styles.bubble}
          style={{
            width: b.size,
            height: b.size,
            left: `${b.left}%`,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
