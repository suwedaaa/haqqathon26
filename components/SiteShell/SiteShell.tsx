import type { ReactNode } from "react";
import Nav from "@/components/Nav/Nav";
import styles from "./SiteShell.module.scss";

type SiteShellProps = {
  left: ReactNode;
  right: ReactNode;
  middleFull?: ReactNode;
  middleLeft?: ReactNode;
  middleRight?: ReactNode;
  bottom?: ReactNode;
  footer?: ReactNode;
};

export default function SiteShell({
  left,
  right,
  middleFull,
  middleLeft,
  middleRight,
  bottom,
  footer,
}: SiteShellProps) {
  return (
    <div className={`window window--shell ${styles.shell}`}>
      <div className="title-bar">
        <div className="title-bar-text">Haqqathon 2026</div>
        <div className="title-bar-controls">
          <button type="button" aria-label="Minimize" />
          <button type="button" aria-label="Maximize" />
          <button type="button" aria-label="Close" />
        </div>
      </div>

      <div className={`window-body ${styles.windowBody}`}>
        <Nav />

        <div className={styles.grid}>
          <div className={styles.left}>{left}</div>
          <div className={styles.right}>{right}</div>
        </div>

        {middleFull ? <div className={styles.fullWidth}>{middleFull}</div> : null}

        {(middleLeft || middleRight) ? (
          <div className={styles.grid2}>
            <div className={styles.left}>{middleLeft}</div>
            <div className={styles.right}>{middleRight}</div>
          </div>
        ) : null}

        {bottom ? <div className={styles.fullWidth}>{bottom}</div> : null}
        {footer}
      </div>
    </div>
  );
}
