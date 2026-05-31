"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import CreditsPopup from "@/components/CreditsPopup/CreditsPopup";
import {
  creditLabels,
  creditLabelsShort,
  creditTitles,
  designers,
  developers,
  type CreditTeam,
} from "@/data/credits";
import styles from "./Taskbar.module.scss";

function formatClock(date: Date) {
  return date.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function Taskbar() {
  const [activeTeam, setActiveTeam] = useState<CreditTeam | null>(null);
  const [clock, setClock] = useState("");

  useEffect(() => {
    if (!activeTeam) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveTeam(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeTeam]);

  useEffect(() => {
    const tick = () => setClock(formatClock(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  const toggleTeam = (team: CreditTeam) => {
    setActiveTeam((current) => (current === team ? null : team));
  };

  return (
    <div className={styles.wrap}>
      {activeTeam === "designers" ? (
        <CreditsPopup
          title={creditTitles.designers}
          people={designers}
          onClose={() => setActiveTeam(null)}
        />
      ) : null}

      {activeTeam === "developers" ? (
        <CreditsPopup
          title={creditTitles.developers}
          people={developers}
          showGithub
          onClose={() => setActiveTeam(null)}
        />
      ) : null}

      <footer className={styles.taskbar} aria-label="Site taskbar">
        <button type="button" className={styles.start} aria-label="Start">
          <Image
            src="/windows-start.png"
            alt=""
            width={18}
            height={18}
            className={styles.startIcon}
            aria-hidden
          />
          <span className={styles.startText}>start</span>
        </button>

        <div className={styles.tasks}>
          <button
            type="button"
            className={`${styles.task} ${activeTeam === "designers" ? styles.taskActive : ""}`}
            onClick={() => toggleTeam("designers")}
            aria-pressed={activeTeam === "designers"}
          >
            <Image src="/globe.png" alt="" width={16} height={16} className={styles.taskIcon} />
            <span className={styles.taskLabelLong}>{creditLabels.designers}</span>
            <span className={styles.taskLabelShort}>{creditLabelsShort.designers}</span>
          </button>

          <button
            type="button"
            className={`${styles.task} ${activeTeam === "developers" ? styles.taskActive : ""}`}
            onClick={() => toggleTeam("developers")}
            aria-pressed={activeTeam === "developers"}
          >
            <Image
              src="/pastsubmissions-computer.png"
              alt=""
              width={16}
              height={16}
              className={styles.taskIcon}
            />
            <span className={styles.taskLabelLong}>{creditLabels.developers}</span>
            <span className={styles.taskLabelShort}>{creditLabelsShort.developers}</span>
          </button>
        </div>

        <div className={styles.tray}>
          <Image src="/blue-star.png" alt="" width={16} height={16} aria-hidden />
          <Image src="/blue-music-note.png" alt="" width={16} height={16} aria-hidden />
          <Image src="/dolphin.png" alt="" width={16} height={16} aria-hidden />
          <time className={styles.clock} dateTime={clock}>
            {clock || "—"}
          </time>
        </div>
      </footer>
    </div>
  );
}
