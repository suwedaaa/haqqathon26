"use client";

import Image from "next/image";
import XPWindow from "@/components/XPWindow/XPWindow";
import MenuLabel from "@/components/MenuLabel";
import styles from "./VideoPlayer.module.scss";

export default function VideoPlayer() {
  return (
    <div className={styles.wrapper}>
      <Image
        src="/blue-youtube.png"
        alt=""
        width={80}
        height={80}
        className={styles.youtubeIcon}
        aria-hidden
      />
      <XPWindow title="Windows Media Player" animate={false}>
        <div className={styles.menuBar}>
          <MenuLabel text="File" />
          <MenuLabel text="View" />
          <MenuLabel text="Play" />
          <MenuLabel text="Tools" />
          <MenuLabel text="Help" />
        </div>
        <div className={styles.videoContainer}>
          <iframe
            src="https://www.youtube.com/embed/yDk9btDZojo?si=1QHw6uzA_cbh1z5W"
            title="Haqqathon 2025 Official Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.iframe}
          />
        </div>
        <div className={styles.controls}>
          <div className={styles.seekBar}>
            <div className={styles.seekFill} />
          </div>
          <div className={styles.buttons}>
            <button type="button" className={styles.controlBtn}>⏮</button>
            <button type="button" className={styles.controlBtn}>▶</button>
            <button type="button" className={styles.controlBtn}>⏹</button>
            <button type="button" className={styles.controlBtn}>⏭</button>
          </div>
        </div>
      </XPWindow>
      <Image
        src="/blue-music-note.png"
        alt=""
        width={70}
        height={70}
        className={styles.musicNote}
        aria-hidden
      />
    </div>
  );
}
