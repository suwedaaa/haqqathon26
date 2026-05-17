"use client";

import { useEffect, useMemo, useState } from "react";
import XPWindow from "@/components/XPWindow/XPWindow";
import { HAQQATHON_START, SIGN_UP_URL } from "@/data/event";
import styles from "./Countdown.module.scss";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalMs: number;
};

function getTimeLeft(target: Date): TimeLeft {
  const totalMs = Math.max(0, target.getTime() - Date.now());
  const seconds = Math.floor(totalMs / 1000);
  return {
    totalMs,
    days: Math.floor(seconds / 86400),
    hours: Math.floor((seconds % 86400) / 3600),
    minutes: Math.floor((seconds % 3600) / 60),
    seconds: seconds % 60,
  };
}

const TOTAL_WINDOW_MS = 30 * 24 * 60 * 60 * 1000;

export default function Countdown() {
  const [left, setLeft] = useState<TimeLeft>(() => getTimeLeft(HAQQATHON_START));

  useEffect(() => {
    const id = setInterval(() => setLeft(getTimeLeft(HAQQATHON_START)), 1000);
    return () => clearInterval(id);
  }, []);

  const label = useMemo(
    () =>
      `${left.days}d ${left.hours}h ${left.minutes}m ${left.seconds}s`,
    [left]
  );

  const progress = Math.min(
    100,
    Math.max(0, 100 - (left.totalMs / TOTAL_WINDOW_MS) * 100)
  );

  return (
    <XPWindow title="how long until the haqqathon?" floating>
      <p className={styles.timer}>{label}</p>
      <div className={styles.progress} role="progressbar" aria-valuenow={progress}>
        <div className={styles.progressFill} style={{ width: `${progress}%` }} />
      </div>
      <div className={styles.actions}>
        <button type="button">Panic</button>
        <button type="button" onClick={() => window.location.assign(SIGN_UP_URL)}>
          Sign up
        </button>
      </div>
    </XPWindow>
  );
}
