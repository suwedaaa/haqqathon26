"use client";

import { motion } from "framer-motion";
import styles from "./XPWindow.module.scss";

type XPWindowProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
  floating?: boolean;
  animate?: boolean;
  style?: React.CSSProperties;
  showControls?: boolean;
};

function WindowChrome({
  title,
  children,
  className = "",
  floating = false,
  style,
  showControls = true,
}: XPWindowProps) {
  return (
    <div
      className={`window ${styles.window} ${floating ? styles.floating : ""} ${className}`.trim()}
      style={style}
    >
      <div className="title-bar">
        <div className="title-bar-text">{title}</div>
        {showControls ? (
          <div className="title-bar-controls">
            <button type="button" aria-label="Minimize" />
            <button type="button" aria-label="Maximize" />
            <button type="button" aria-label="Close" />
          </div>
        ) : null}
      </div>
      <div className={`window-body ${styles.body}`}>{children}</div>
    </div>
  );
}

export default function XPWindow(props: XPWindowProps) {
  const { animate = true, floating = false } = props;

  if (!animate) {
    return (
      <div className={styles.wrapper}>
        <WindowChrome {...props} />
      </div>
    );
  }

  return (
    <motion.div
      className={styles.wrapper}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileHover={floating ? { y: -2 } : undefined}
    >
      <WindowChrome {...props} />
    </motion.div>
  );
}
