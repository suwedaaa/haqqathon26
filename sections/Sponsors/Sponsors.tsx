"use client";

import { useState } from "react";
import Image from "next/image";
import XPWindow from "@/components/XPWindow/XPWindow";
import MenuLabel from "@/components/MenuLabel";
import { sponsorLogos } from "@/data/sponsorLogos";
import styles from "./Sponsors.module.scss";

export default function Sponsors() {
  const [selected, setSelected] = useState(0);

  return (
    <section id="sponsors" className={styles.section}>
      <XPWindow title="Our Sponsors" animate={false}>
        <div className={styles.menuBar}>
          <MenuLabel text="File" />
          <MenuLabel text="Options" />
          <MenuLabel text="Depth of effects" />
          <MenuLabel text="Utilities" />
          <MenuLabel text="Help" />
        </div>

        <div className={styles.body}>
          <div className={styles.leftPanel}>
            <label className={styles.label}>Color Scheme List:</label>
            <select className={styles.select} defaultValue="bright-blue">
              <option value="bright-blue">Bright Blue</option>
            </select>
            <div className={styles.schemeButtons}>
              <button type="button">Add Scheme</button>
              <button type="button">Remove Scheme</button>
            </div>

            <div className={styles.previewBox}>
              <Image
                src={sponsorLogos[selected].image}
                alt={sponsorLogos[selected].name}
                width={240}
                height={240}
                className={styles.previewImage}
              />
            </div>

            <div className={styles.selectedName}>
              {sponsorLogos[selected].name}
            </div>

            <div className={styles.actionButtons}>
              <button type="button">Save</button>
              <button type="button">Restore</button>
            </div>
          </div>

          <div className={styles.rightPanel}>
            <label className={styles.label}>Screen Element:</label>
            <select className={styles.select} defaultValue="desktop">
              <option value="desktop">Desktop</option>
            </select>

            <div className={styles.logoSection}>
              <label className={styles.label}>Basic Colors:</label>
              <div className={styles.logoGrid}>
                {sponsorLogos.map((sponsor, i) => (
                  <button
                    key={sponsor.id}
                    type="button"
                    className={`${styles.logoTile} ${i === selected ? styles.logoTileActive : ""}`}
                    onClick={() => setSelected(i)}
                  >
                    <Image
                      src={sponsor.image}
                      alt={sponsor.name}
                      width={64}
                      height={64}
                      className={styles.logoImg}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.customSection}>
              <label className={styles.label}>Custom Colors:</label>
              <div className={styles.customGrid}>
                {Array.from({ length: 8 }).map((_, i) => (
                  <span key={i} className={styles.customSlot} />
                ))}
              </div>
              <button type="button" className={styles.defineBtn}>
                Define Custom Colors
              </button>
            </div>
          </div>
        </div>
      </XPWindow>
    </section>
  );
}
