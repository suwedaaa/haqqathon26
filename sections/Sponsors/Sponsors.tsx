"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import XPWindow from "@/components/XPWindow/XPWindow";
import { featuredSponsor } from "@/data/sponsors";
import { assetPath } from "@/lib/assets";
import styles from "./Sponsors.module.scss";

const PALETTE = [
  "#000", "#808080", "#800000", "#808000", "#008000", "#008080",
  "#000080", "#800080", "#fff", "#c0c0c0", "#ff0000", "#ffff00",
  "#00ff00", "#00ffff", "#0000ff", "#ff00ff",
];

const floatTransition = { duration: 4, repeat: Infinity, repeatType: "reverse" as const };

export default function Sponsors() {
  const image = assetPath(featuredSponsor.image);

  return (
    <section id="sponsors" className={styles.section}>
      <XPWindow title="Our Sponsors" animate={false}>
        <div className={styles.bodyWrap}>
        <div className={styles.menuBar}>
          <span>File</span>
          <span>Edit</span>
          <span>View</span>
          <span>Help</span>
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
              alt={featuredSponsor.name}
              width={320}
              height={380}
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
            <XPWindow title={featuredSponsor.name} floating animate={false}>
              <div className={styles.profileBody}>
                <span className={styles.avatar} aria-hidden />
                <div className={styles.profileText}>
                  <strong>{featuredSponsor.name}</strong>
                  <span>{featuredSponsor.role}</span>
                </div>
              </div>
            </XPWindow>
          </motion.div>

          <motion.div
            className={styles.miniStack}
            animate={{ y: [0, 5, 0] }}
            transition={{ ...floatTransition, delay: 0.5 }}
          >
            {["Contact", "Follow", "Get Involved"].map((label) => (
              <XPWindow key={label} title={label} floating animate={false}>
                <div className={styles.miniBody}>
                  <button type="button">{label}</button>
                </div>
              </XPWindow>
            ))}
          </motion.div>

          <motion.div
            className={styles.joinWindow}
            animate={{ y: [0, -4, 0] }}
            transition={{ ...floatTransition, delay: 1 }}
          >
            <XPWindow title="Join us!" floating animate={false}>
              <div className={styles.miniBody}>
                <button type="button">Join us!</button>
              </div>
            </XPWindow>
          </motion.div>
        </div>
        </div>
      </XPWindow>
    </section>
  );
}
