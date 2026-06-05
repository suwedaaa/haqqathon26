"use client"

import { useState } from "react"
import styles from "./SpeakerCarousel.module.scss"
import { SpeakerGallery } from "@/data/speakers"

export default function SpeakerCarousel() {

  const [index, setIndex] = useState(0)

  const speaker = SpeakerGallery[index]

  function next() {

    setIndex((prev) => (prev + 1) % SpeakerGallery.length)

  }

  function prev() {

    setIndex((prev) =>
      prev === 0 ? SpeakerGallery.length - 1 : prev - 1
    )

  }

  return (

    <div className={styles.container}>

      <div className={styles.card}>

        <button
          className={`${styles.arrow} ${styles.left}`}
          onClick={prev}
        >
          ◀
        </button>

        <img
          src={speaker.image}
          className={styles.image}
          alt={speaker.name}
        />

        <div className={styles.text}>

          <h3>{speaker.name}</h3>

          <p>{speaker.role}</p>

        </div>

        <button
          className={`${styles.arrow} ${styles.right}`}
          onClick={next}
        >
          ▶
        </button>

      </div>

    </div>

  )

}
