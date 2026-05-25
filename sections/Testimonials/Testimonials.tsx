"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlassPanel from "@/components/GlassPanel/GlassPanel";
import { testimonials } from "@/data/testimonials";
import styles from "./Testimonials.module.scss";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const prev = () =>
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i + 1) % testimonials.length);

  return (
    <GlassPanel title="Testimonials" iconSrc="/blue-star.png" iconAlt="" tabAlign="right">
      <div className={styles.carousel}>
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={index}
            className={styles.quote}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
          >
            <p className={styles.text}>
              &ldquo;{current.quote}&rdquo;
            </p>
            <footer className={styles.attribution}>
              &mdash; {current.name}
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div className={styles.controls}>
        <button type="button" className={styles.arrow} onClick={prev} aria-label="Previous">
          ◀
        </button>
        <span className={styles.counter}>
          {index + 1} / {testimonials.length}
        </span>
        <button type="button" className={styles.arrow} onClick={next} aria-label="Next">
          ▶
        </button>
      </div>
    </GlassPanel>
  );
}
