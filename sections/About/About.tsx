import Image from "next/image";
import GlassPanel from "@/components/GlassPanel/GlassPanel";
import PastSubmissions from "@/sections/PastSubmissions/PastSubmissions";
import styles from "./About.module.scss";

export default function About() {
  return (
    <GlassPanel title="About" iconSrc="/globe.png" iconAlt="" className={styles.panel}>
      <div className={styles.content}>
        <Image
          src="/globe.png"
          alt=""
          width={120}
          height={120}
          sizes="80px"
          loading="lazy"
          className={styles.globe}
          aria-hidden
        />
        <p className={styles.text}>
          The STEM Muslims Haqqathon is a unique hackathon that brings together Muslim students,
          developers, designers and entrepreneurs to create innovative solutions
          that benefit our communities and beyond.
        </p>
        <p className={styles.text}>
          Participants work in teams to address real-world challenges, supported by mentorship
          and workshops, grounded in the belief that every skill is an amanah (a trust) with
          significance in both this life and the next.
        </p>
      </div>
      <PastSubmissions />
    </GlassPanel>
  );
}
