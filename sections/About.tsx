import styles from "./About.module.scss"
import AboutCarousel from "@/components/AboutCarousel"

export default function About() {

  return (

    <section className={styles.section}>

      <h2 className={styles.heading}>
        About the event
      </h2>

      <h1 className={styles.question}>What is <span className={styles.limeColor}>Haqqathon</span>?</h1>

      <p className={styles.answer}>Haqqathon is a unique hackathon that brings together Muslim students, developers, designers and entrepreneurs to create innovative solutions that benefit our communities and beyond. <span className={styles.limeColor}> “Haqq”</span> means truth in Arabic and we’re on a mission to build technology that serves the truth.</p>

      <AboutCarousel />

    </section>

  )

}