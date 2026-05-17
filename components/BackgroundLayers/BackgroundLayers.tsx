import type { ReactNode } from "react";
import BubbleParticles from "@/components/BubbleParticles/BubbleParticles";
import styles from "./BackgroundLayers.module.scss";

type BackgroundLayersProps = {
  children: ReactNode;
};

export default function BackgroundLayers({ children }: BackgroundLayersProps) {
  return (
    <div className={styles.root}>
      <div className={styles.pattern} aria-hidden />
      <div className={styles.bubbles} aria-hidden>
        <BubbleParticles />
      </div>
      <div className={styles.overlayMid} aria-hidden />
      <main className={styles.content}>{children}</main>
      <div className={styles.overlayTop} aria-hidden />
    </div>
  );
}
