"use client";

import type { CreditPerson } from "@/data/credits";
import styles from "./CreditsPopup.module.scss";

type CreditsPopupProps = {
  title: string;
  people: CreditPerson[];
  showGithub?: boolean;
  onClose: () => void;
};

export default function CreditsPopup({
  title,
  people,
  showGithub = false,
  onClose,
}: CreditsPopupProps) {
  return (
    <>
      <div className={styles.backdrop} onClick={onClose} aria-hidden />
      <div className={styles.popup} role="dialog" aria-labelledby="credits-popup-title">
        <div className="window">
          <div className="title-bar">
            <div className="title-bar-text" id="credits-popup-title">
              {title}
            </div>
            <div className="title-bar-controls">
              <button type="button" aria-label="Close" onClick={onClose} />
            </div>
          </div>
          <div className={`window-body ${styles.body}`}>
            <ul className={styles.list}>
              {people.map((person) => (
                <li key={person.name} className={styles.row}>
                  <span className={styles.name}>{person.name}</span>
                  <span className={styles.links}>
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                    {showGithub && person.github ? (
                      <>
                        <span className={styles.sep} aria-hidden>
                          |
                        </span>
                        <a
                          href={person.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub
                        </a>
                      </>
                    ) : null}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
