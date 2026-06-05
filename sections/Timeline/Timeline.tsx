"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import GlassPanel from "@/components/GlassPanel/GlassPanel";
import GlossyButton from "@/components/GlossyButton/GlossyButton";
import { timelineDay1, timelineDay2 } from "@/data/timeline";
import { assetPath } from "@/lib/assets";
import styles from "./Timeline.module.scss";

type ParsedTime =
  | { kind: "single"; label: string }
  | { kind: "range"; start: string; end: string }
  | { kind: "from"; start: string; note: string };

function parseTime(time: string): ParsedTime {
  const rangeMatch = time.match(/^(\d{1,2}:\d{2})\s*-\s*(\d{1,2}:\d{2})$/);
  if (rangeMatch) {
    return { kind: "range", start: rangeMatch[1], end: rangeMatch[2] };
  }

  const fromMatch = time.match(/^(\d{1,2}:\d{2})\s+(.+)$/i);
  if (fromMatch) {
    return { kind: "from", start: fromMatch[1], note: fromMatch[2] };
  }

  return { kind: "single", label: time };
}

function TimelineTime({ time }: { time: string }) {
  const parsed = parseTime(time);

  if (parsed.kind === "range") {
    return (
      <span className={styles.time}>
        {parsed.start}–{parsed.end}
      </span>
    );
  }

  if (parsed.kind === "from") {
    return (
      <span className={styles.time}>
        {parsed.start} {parsed.note}
      </span>
    );
  }

  return <span className={styles.time}>{parsed.label}</span>;
}

export default function Timeline() {
  const [day, setDay] = useState<1 | 2>(1);
  const entries = day === 1 ? timelineDay1 : timelineDay2;

  return (
    <GlassPanel
      title="Timeline"
      iconSrc="/timeline-registration.png"
      iconAlt=""
      className={styles.panel}
      tabAlign="right"
    >
      <Image
        src="/dolphin.png"
        alt=""
        width={120}
        height={120}
        sizes="80px"
        loading="lazy"
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
            <div className={styles.col}>
              <TimelineTime time={entry.time} />
            </div>
            <div className={`${styles.col} ${styles.colIcon}`}>
              <Image
                src={assetPath(entry.icon)}
                alt=""
                width={52}
                height={52}
                sizes="40px"
                loading="lazy"
                className={styles.icon}
                aria-hidden
              />
            </div>
            <div className={`${styles.col} ${styles.colDetails}`}>
              <div className={styles.details}>
                <h4>{entry.title}</h4>
                <p>{entry.description}</p>
              </div>
            </div>
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
