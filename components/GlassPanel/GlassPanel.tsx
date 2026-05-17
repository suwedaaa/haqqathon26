import Image from "next/image";
import styles from "./GlassPanel.module.scss";

type GlassPanelProps = {
  title: string;
  iconSrc?: string;
  iconAlt?: string;
  children: React.ReactNode;
  className?: string;
};

export default function GlassPanel({
  title,
  iconSrc,
  iconAlt = "",
  children,
  className = "",
}: GlassPanelProps) {
  return (
    <section className={`${styles.panel} ${className}`.trim()}>
      <div className={styles.headerRow}>
        <div className={styles.tab}>
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
