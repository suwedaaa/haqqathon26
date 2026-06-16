"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import XPWindow from "@/components/XPWindow/XPWindow";
import MenuLabel from "@/components/MenuLabel";
import { SpeakerGallery } from "@/data/speakers";
import { SIGN_UP_URL } from "@/data/event";
import { assetPath } from "@/lib/assets";
import styles from "./Speakers.module.scss";

const AUTO_ADVANCE_MS = 5000;

const PALETTE = [
  "#000", "#808080", "#800000", "#808000", "#008000", "#008080",
  "#000080", "#800080", "#fff", "#c0c0c0", "#ff0000", "#ffff00",
  "#00ff00", "#00ffff", "#0000ff", "#ff00ff",
];

const floatTransition = { duration: 4, repeat: Infinity, repeatType: "reverse" as const };

export default function Speakers() {
  const [index, setIndex] = useState(0);
  const speaker = SpeakerGallery[index];
  const image = assetPath(speaker.image);

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % SpeakerGallery.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((prev) => (prev === 0 ? SpeakerGallery.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    const timer = window.setInterval(next, AUTO_ADVANCE_MS);
    return () => window.clearInterval(timer);
  }, [next]);

  const miniWindows = [
    speaker.follow ? { label: "Follow", href: speaker.follow } : null,
    speaker.contact ? { label: "Contact", href: speaker.contact } : null,
    { label: "Get Involved", href: SIGN_UP_URL },
  ].filter((item): item is { label: string; href: string } => item !== null);

  return (
    <section id="Speakers" className={styles.section}>
      <XPWindow title="Our Speakers" animate={false}>
        <div className={styles.bodyWrap}>
        <div className={styles.menuBar}>
          <MenuLabel text="File" />
          <MenuLabel text="Edit" />
          <MenuLabel text="View" />
          <span style={{ cursor: "pointer" }} onClick={() => window.dispatchEvent(new CustomEvent("help-clicked"))}>
            <MenuLabel text="Help" />
          </span>
        </div>

        <div className={styles.workspace}>
          <div className={styles.toolbar} aria-hidden>
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className={styles.tool} />
            ))}
          </div>
          <div className={styles.canvas}>
            <Image
              src={image}
              alt={speaker.name}
              width={400}
              height={400}
              sizes="(max-width: 768px) 80vw, 320px"
              loading="lazy"
              className={styles.portrait}
            />
          </div>
        </div>

        <div className={styles.palette} aria-hidden>
          {PALETTE.map((color) => (
            <span key={color} className={styles.swatch} style={{ background: color }} />
          ))}
        </div>
        <p className={styles.statusBar}>
          For Help, click Help Topics on the Help Menu.
        </p>

        <div className={styles.overlays}>
          <motion.div
            className={styles.profileWindow}
            animate={{ y: [0, -6, 0] }}
            transition={floatTransition}
          >
            <XPWindow title="Speaker" floating animate={false} closeOnly>
              <div className={styles.profileBody}>
                <div className={styles.profileHeader}>
                  <span className={styles.avatar} aria-hidden />
                  <div className={styles.profileText}>
                    <strong>{speaker.name}</strong>
                    <span>{speaker.role}</span>
                  </div>
                </div>
                <div className={styles.navControls}>
                  <button
                    type="button"
                    className={`${styles.navButton} ${styles.navPrev}`}
                    onClick={prev}
                    aria-label="Previous speaker"
                  />
                  <button
                    type="button"
                    className={`${styles.navButton} ${styles.navNext}`}
                    onClick={next}
                    aria-label="Next speaker"
                  />
                </div>
              </div>
            </XPWindow>
          </motion.div>

          {/* Follow / Contact / Get Involved — right side, stacked */}
          <motion.div
            className={styles.miniStack}
            animate={{ y: [0, 5, 0] }}
            transition={{ ...floatTransition, delay: 0.5 }}
          >
            {miniWindows.map(({ label, href }) => (
              <XPWindow key={label} title={label} floating animate={false} closeOnly>
                <div className={styles.miniBody}>
                  <button
                    type="button"
                    onClick={() => href && window.open(href, "_blank")}
                  >
                    <MenuLabel text={label} />
                  </button>
                </div>
              </XPWindow>
            ))}
          </motion.div>

          {/* Join us! — bottom left */}
          <motion.div
            className={styles.joinWindow}
            animate={{ y: [0, -4, 0] }}
            transition={{ ...floatTransition, delay: 1 }}
          >
            <XPWindow title="Join us!" floating animate={false} closeOnly>
              <div className={styles.miniBody}>
                <button
                  type="button"
                  onClick={() => window.open(SIGN_UP_URL, "_blank")}
                >
                  <MenuLabel text="Join us!" />
                </button>
              </div>
            </XPWindow>
          </motion.div>
        </div>
        </div>
      </XPWindow>
    </section>
  );
}
