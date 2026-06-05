import Image from "next/image";
import GlassPanel from "@/components/GlassPanel/GlassPanel";
import styles from "./MapLocation.module.scss";

export default function MapLocation() {
  return (
    <GlassPanel title="Location" iconSrc="/globe.png" iconAlt="">
      <div className={styles.mapWrap}>
        <a
          href="https://maps.app.goo.gl/XEQrazVhcLoAediX6"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open venue location in Google Maps"
        >
          <Image
            src="/sherfield.png"
            alt="Haqqathon venue location"
            width={500}
            height={350}
            sizes="(max-width: 768px) 90vw, 450px"
            loading="lazy"
            className={styles.map}
          />
        </a>
      </div>
      <p className={styles.venue}>
        <strong>Sherfield Building</strong>
        <br />
        Imperial College Union, Prince Consort Rd, South Kensington, London SW7 2BB
      </p>
    </GlassPanel>
  );
}
