"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import MenuLabel from "@/components/MenuLabel";
import styles from "./ErrorOverlay.module.scss";

const ERROR_MESSAGES = [
    "ERROR: Haqqathon deadline approaching!",
    "WARNING: Sign-up not detected",
    "QUESTION: Are you going to take the orange pill or the teal pill?",
    "ERROR: Registration still pending",
    "WARNING: Team not assembled yet",
    "ERROR: Idea not found",
    "QUESTION: Are you going to take the orange pill or the teal pill?",
    "WARNING: Brainstorming required",
    "QUESTION: Are you going to take the orange pill or the teal pill?",
    "ERROR: Hackathon prep incomplete",
    "WARNING: Spots may be filling up",
    "QUESTION: Are you going to take the orange pill or the teal pill?",
    "ERROR: Commitment.exe not launched",
    "QUESTION: Are you going to take the orange pill or the teal pill?",
    "WARNING: Waiting too long is risky",
    "ERROR: Project idea still loading",
    "QUESTION: Are you going to take the orange pill or the teal pill?",
    "WARNING: Future you wants you to sign up",
    "WARNING: Do not miss the deadline",
    "QUESTION: Are you going to take the orange pill or the teal pill?",
];

type ErrorPopup = {
  id: number;
  message: string;
  x: number;
  y: number;
};

type Props = {
  hintUrl: string;
  onClose: () => void;
};

export default function ErrorOverlay({ hintUrl, onClose }: Props) {
  const [errors, setErrors] = useState<ErrorPopup[]>([]);
  const [showHint, setShowHint] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (showHint) return;

    let count = 0;
    const maxErrors = 8 + Math.floor(Math.random() * 5);

    const interval = setInterval(() => {
      if (count >= maxErrors) {
        clearInterval(interval);
        setTimeout(() => setShowHint(true), 400);
        return;
      }

      const msg = ERROR_MESSAGES[Math.floor(Math.random() * ERROR_MESSAGES.length)];
      setErrors((prev) => [
        ...prev,
        {
          id: Date.now() + count,
          message: msg,
          x: 5 + Math.random() * 70,
          y: 5 + Math.random() * 60,
        },
      ]);
      count++;
    }, 200);

    return () => clearInterval(interval);
  }, [showHint]);

  const handleHintClick = useCallback(() => {
    window.open(hintUrl, "_blank");
    onClose();
  }, [hintUrl, onClose]);

  if (!mounted) return null;

  return createPortal(
    <div className={styles.errorOverlay}>
      {errors.map((err) => (
        <div
          key={err.id}
          className={styles.errorWindow}
          style={{ left: `${err.x}%`, top: `${err.y}%` }}
        >
          <div className="window">
            <div className="title-bar">
              <div className="title-bar-text">Error</div>
              <div className="title-bar-controls">
                <button type="button" aria-label="Close" />
              </div>
            </div>
            <div className="window-body">
              <div className={styles.errorBody}>
                <span className={styles.errorIcon}>&#9888;</span>
                <p>{err.message}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {showHint && (
        <div className={styles.hintWindow}>
          <div className="window">
            <div className="title-bar">
              <div className="title-bar-text">Do you want a hint?</div>
              <div className="title-bar-controls">
                <button type="button" aria-label="Close" onClick={onClose} />
              </div>
            </div>
            <div className="window-body">
              <div className={styles.hintBody}>
                <span className={styles.errorIcon}>&#128161;</span>
                <p>Do you want a hint?</p>
              </div>
              <div className={styles.hintActions}>
                <button type="button" onClick={handleHintClick}>
                  <MenuLabel text="YES" />
                </button>
                <button type="button" onClick={handleHintClick}>
                  <MenuLabel text="YES" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>,
    document.body
  );
}
