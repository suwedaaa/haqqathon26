import Image from "next/image";
import GlassPanel from "@/components/GlassPanel/GlassPanel";
import styles from "./MapLocation.module.scss";

export default function MapLocation() {
  return (
    <GlassPanel title="Location" iconSrc="/globe.png" iconAlt="">
      <div className={styles.mapWrap}>
        <Image
          src="/maps.png"
          alt="Haqqathon venue location"
          width={500}
          height={350}
          className={styles.map}
        />
      </div>
      <p className={styles.venue}>
        <strong>Imperial College London,</strong>
        <br />
        Sir Alexander Fleming Building
      </p>
    </GlassPanel>
  );
}
