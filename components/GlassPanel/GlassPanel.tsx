import Image from "next/image";
import styles from "./GlassPanel.module.scss";

type GlassPanelProps = {
  title: string;
  iconSrc?: string;
  iconAlt?: string;
  children: React.ReactNode;
  className?: string;
  tabAlign?: "left" | "right";
};

export default function GlassPanel({
  title,
  iconSrc,
  iconAlt = "",
  children,
  className = "",
  tabAlign = "left",
}: GlassPanelProps) {
  const isRight = tabAlign === "right";

  return (
    <section className={`${styles.panel} ${className}`.trim()}>
      <div className={`${styles.headerRow} ${isRight ? styles.headerRight : ""}`}>
        <div className={`${styles.tab} ${isRight ? styles.tabRight : ""}`}>
          {iconSrc ? (
            <Image
              src={iconSrc}
              alt={iconAlt}
              width={18}
              height={18}
              className={styles.tabIcon}
            />
          ) : null}
          <span>{title}</span>
        </div>
      </div>
      <div className={styles.body}>{children}</div>
    </section>
  );
}
