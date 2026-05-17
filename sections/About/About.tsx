import Image from "next/image";
import GlassPanel from "@/components/GlassPanel/GlassPanel";
import PastSubmissions from "@/sections/PastSubmissions/PastSubmissions";
import styles from "./About.module.scss";

export default function About() {
  return (
    <GlassPanel title="About" iconSrc="/globe.png" iconAlt="">
      <div className={styles.content}>
        <p className={styles.text}>
          Haqqathon is a unique hackathon that brings together Muslim students,
          developers, designers and entrepreneurs to create innovative solutions
          that benefit our communities and beyond.{" "}
          <span className={styles.highlight}>&ldquo;Haqq&rdquo;</span> means truth
          in Arabic and we&rsquo;re on a mission to build technology that serves
          the truth.
        </p>
        <Image
          src="/globe.png"
          alt=""
          width={120}
          height={120}
          className={styles.globe}
          aria-hidden
        />
      </div>
      <PastSubmissions />
    </GlassPanel>
  );
}
