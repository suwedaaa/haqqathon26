import type { ReactNode } from "react";
import Nav from "@/components/Nav/Nav";
import styles from "./SiteShell.module.scss";

type SiteShellProps = {
  left: ReactNode;
  right: ReactNode;
  bottom?: ReactNode;
  footer?: ReactNode;
};

export default function SiteShell({ left, right, bottom, footer }: SiteShellProps) {
  return (
    <div className={styles.shell}>
      <div className={styles.titleBar}>
        <span className={styles.title}>Haqqathon 2026</span>
        <div className={styles.controls} aria-hidden>
          <span className={styles.control} />
          <span className={styles.control} />
          <span className={styles.control} />
        </div>
      </div>

      <Nav />

      <div className={styles.grid}>
        <div className={styles.left}>{left}</div>
        <div className={styles.right}>{right}</div>
      </div>

      {bottom ? <div className={styles.fullWidth}>{bottom}</div> : null}
      {footer}
    </div>
  );
}
