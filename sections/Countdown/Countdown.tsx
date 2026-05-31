"use client";

import { useEffect, useMemo, useState } from "react";
import XPWindow from "@/components/XPWindow/XPWindow";
import MenuLabel from "@/components/MenuLabel";
import { useErrorOverlay } from "@/components/ErrorOverlay/ErrorOverlayContext";
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
const PANIC_HINT = "https://edition.cnn.com/2026/05/20/health/surgeon-general-advisory-screen-time-wellness";

export default function Countdown() {
  const [left, setLeft] = useState<TimeLeft>(() => getTimeLeft(HAQQATHON_START));
  const { triggerPanic } = useErrorOverlay();

  useEffect(() => {
    const id = setInterval(() => setLeft(getTimeLeft(HAQQATHON_START)), 1000);
    return () => clearInterval(id);
  }, []);

  const label = useMemo(
    () =>
      `${left.days}d  ${left.hours}h  ${left.minutes}m  ${left.seconds}s`,
    [left]
  );

  const progress = Math.min(
    100,
    Math.max(0, 100 - (left.totalMs / TOTAL_WINDOW_MS) * 100)
  );

  return (
    <XPWindow title="how long left?" floating>
      <p className={styles.date}>20th &ndash; 21st June 2026</p>
      <p className={styles.timer}>{label}</p>
      <div className={styles.progress} role="progressbar" aria-valuenow={progress}>
        <div className={styles.progressFill} style={{ width: `${progress}%` }} />
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={() => triggerPanic(PANIC_HINT)}>
          <MenuLabel text="Panic" />
        </button>
        <button type="button" onClick={() => window.location.assign(SIGN_UP_URL)}>
          <MenuLabel text="Sign up" />
        </button>
      </div>
    </XPWindow>
  );
}
