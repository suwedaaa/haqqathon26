"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./BubbleParticles.module.scss";

type BubbleState = {
  id: number;
  size: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseVy: number;
  popped: boolean;
  popFrame: number;
  opacity: number;
};

function seededRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

function createBubble(id: number, w: number, h: number): BubbleState {
  const size = 50 + seededRandom(id * 3 + 1) * 130;
  const baseVy = -(0.3 + seededRandom(id * 3 + 4) * 0.7);
  return {
    id,
    size,
    x: seededRandom(id * 3 + 2) * w,
    y: h + size + seededRandom(id * 3 + 3) * h * 0.5,
    vx: (seededRandom(id * 3 + 5) - 0.5) * 0.3,
    vy: baseVy,
    baseVy,
    popped: false,
    popFrame: 0,
    opacity: 1,
  };
}

const REPEL_RADIUS = 100;
const REPEL_STRENGTH = 0.15;
const BUBBLE_COUNT = 20;
const POP_DURATION = 18;

export default function BubbleParticles() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const bubblesRef = useRef<BubbleState[]>([]);
  const firstPopFired = useRef(false);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number>(0);
  const [, setTick] = useState(0);

  const initBubbles = useCallback(() => {
    const el = canvasRef.current;
    if (!el) return;
    const w = el.clientWidth;
    const h = el.clientHeight;
    bubblesRef.current = Array.from({ length: BUBBLE_COUNT }, (_, i) =>
      createBubble(i, w, h)
    );
  }, []);

  const tryPop = useCallback((mx: number, my: number) => {
    const bubbles = bubblesRef.current;
    for (const b of bubbles) {
      if (b.popped) continue;
      const cx = b.x + b.size / 2;
      const cy = b.y + b.size / 2;
      const dist = Math.sqrt((cx - mx) ** 2 + (cy - my) ** 2);
      if (dist < b.size / 2 + 30) {  // BUBBLE POPPING RADIUS HITBOX
        b.popped = true;
        b.popFrame = 0;
        b.opacity = 1;
        if (!firstPopFired.current) {
          firstPopFired.current = true;
          window.dispatchEvent(new CustomEvent("bubble-popped"));
        }
        break;
      }
    }
  }, []);

  useEffect(() => {
    initBubbles();

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const onClick = (e: MouseEvent) => {
      tryPop(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("click", onClick, true);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("click", onClick, true);
    };
  }, [initBubbles, tryPop]);

  useEffect(() => {
    const animate = () => {
      const el = canvasRef.current;
      if (!el) return;
      const w = el.clientWidth;
      const h = el.clientHeight;
      const mouse = mouseRef.current;
      const bubbles = bubblesRef.current;

      for (let i = 0; i < bubbles.length; i++) {
        const b = bubbles[i];
        if (b.popped) {
          b.popFrame++;
          b.opacity = Math.max(0, 1 - b.popFrame / POP_DURATION);
          if (b.popFrame >= POP_DURATION) {
            bubbles[i] = createBubble(
              b.id + BUBBLE_COUNT + Math.floor(Math.random() * 1000),
              w,
              h
            );
          }
          continue;
        }

        const cx = b.x + b.size / 2;
        const cy = b.y + b.size / 2;
        const dx = cx - mouse.x;
        const dy = cy - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < REPEL_RADIUS + b.size / 2 && dist > 0) {
          const force =
            REPEL_STRENGTH * (1 - dist / (REPEL_RADIUS + b.size / 2));
          b.vx += (dx / dist) * force;
          b.vy += (dy / dist) * force;
        }

        b.vy += (b.baseVy - b.vy) * 0.02;
        b.vx *= 0.98;
        b.vy *= 0.99;
        b.x += b.vx;
        b.y += b.vy;

        if (b.x < -b.size) b.x = w;
        if (b.x > w) b.x = -b.size;
        if (b.y < -b.size * 2) {
          bubbles[i] = createBubble(
            b.id + BUBBLE_COUNT + Math.floor(Math.random() * 1000),
            w,
            h
          );
        }
      }

      setTick((t) => t + 1);
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div ref={canvasRef} className={styles.canvas}>
      {bubblesRef.current.map((b) => {
        const popProgress = b.popped ? b.popFrame / POP_DURATION : 0;
        const scale = b.popped ? 1 + popProgress * 1.5 : 1;

        return (
          <div
            key={b.id}
            className={`${styles.bubble} ${b.popped ? styles.popping : ""}`}
            style={{
              width: b.size,
              height: b.size,
              transform: `translate(${b.x}px, ${b.y}px) scale(${scale})`,
              opacity: b.opacity,
            }}
          />
        );
      })}
    </div>
  );
}
