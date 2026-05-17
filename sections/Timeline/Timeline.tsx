"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import GlassPanel from "@/components/GlassPanel/GlassPanel";
import GlossyButton from "@/components/GlossyButton/GlossyButton";
import { timelineDay1, timelineDay2 } from "@/data/timeline";
import { assetPath } from "@/lib/assets";
import styles from "./Timeline.module.scss";

export default function Timeline() {
  const [day, setDay] = useState<1 | 2>(1);
  const entries = day === 1 ? timelineDay1 : timelineDay2;

  return (
    <GlassPanel
      title="Timeline"
      iconSrc="/timeline-registration.png"
      iconAlt=""
      className={styles.panel}
    >
      <Image
        src="/dolphin.png"
        alt=""
        width={120}
        height={120}
        className={styles.dolphin}
        aria-hidden
      />

      <motion.ul
        className={styles.list}
        key={day}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
      >
        {entries.map((entry) => (
          <li key={`${day}-${entry.time}-${entry.title}`} className={styles.item}>
            <span className={styles.time}>{entry.time}</span>
            <div className={styles.details}>
              <h4>{entry.title}</h4>
              <p>{entry.description}</p>
            </div>
            <Image
              src={assetPath(entry.icon)}
              alt=""
              width={36}
              height={36}
              className={styles.icon}
              aria-hidden
            />
          </li>
        ))}
      </motion.ul>

      <div className={styles.dayToggle}>
        <GlossyButton
          size="sm"
          onClick={() => setDay(1)}
          className={day === 1 ? styles.active : ""}
        >
          Day 1
        </GlossyButton>
        <GlossyButton
          size="sm"
          onClick={() => setDay(2)}
          className={day === 2 ? styles.active : ""}
        >
          Day 2
        </GlossyButton>
      </div>
    </GlassPanel>
  );
}
