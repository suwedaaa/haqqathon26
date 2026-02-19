import styles from "./Speakers.module.scss"
import SpeakerCarousel from "@/components/SpeakerCarousel"

export default function Speakers() {

  return (

    <section className={styles.section}>

      <h2 className={styles.title}>
        SPEAKERS
      </h2>

      <SpeakerCarousel />

    </section>

  )

}
