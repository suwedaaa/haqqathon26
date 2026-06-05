"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import XPWindow from "@/components/XPWindow/XPWindow";
import MenuLabel from "@/components/MenuLabel";
import { featuredSpeaker } from "@/data/speakers";
import { SIGN_UP_URL } from "@/data/event";
import { assetPath } from "@/lib/assets";
import styles from "./Speakers.module.scss";

const PALETTE = [
  "#000", "#808080", "#800000", "#808000", "#008000", "#008080",
  "#000080", "#800080", "#fff", "#c0c0c0", "#ff0000", "#ffff00",
  "#00ff00", "#00ffff", "#0000ff", "#ff00ff",
];

const floatTransition = { duration: 4, repeat: Infinity, repeatType: "reverse" as const };

const MINI_WINDOWS = [
  { label: "Follow", href: featuredSpeaker.follow },
  { label: "Contact", href: featuredSpeaker.contact },
  { label: "Get Involved", href: SIGN_UP_URL },
];

export default function Speakers() {
  const image = assetPath(featuredSpeaker.image);

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
              alt={featuredSpeaker.name}
              width={320}
              height={380}
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
          {/* Profile card — top right */}
          <motion.div
            className={styles.profileWindow}
            animate={{ y: [0, -6, 0] }}
            transition={floatTransition}
          >
            <XPWindow title={featuredSpeaker.name} floating animate={false} closeOnly>
              <div className={styles.profileBody}>
                <span className={styles.avatar} aria-hidden />
                <div className={styles.profileText}>
                  <strong>{featuredSpeaker.name}</strong>
                  <span>{featuredSpeaker.role}</span>
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
            {MINI_WINDOWS.map(({ label, href }) => (
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
