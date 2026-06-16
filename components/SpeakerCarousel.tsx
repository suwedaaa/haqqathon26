"use client"

import { useCallback, useEffect, useState } from "react"
import styles from "./SpeakerCarousel.module.scss"
import { SpeakerGallery } from "@/data/speakers"

const AUTO_ADVANCE_MS = 5000

export default function SpeakerCarousel() {

  const [index, setIndex] = useState(0)

  const speaker = SpeakerGallery[index]

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % SpeakerGallery.length)
  }, [])

  const prev = useCallback(() => {
    setIndex((prev) =>
      prev === 0 ? SpeakerGallery.length - 1 : prev - 1
    )
  }, [])

  useEffect(() => {
    const timer = window.setInterval(next, AUTO_ADVANCE_MS)
    return () => window.clearInterval(timer)
  }, [next])

  return (

    <div className={styles.container}>

      <div className={styles.card}>

        <button
          type="button"
          className={`${styles.arrow} ${styles.left}`}
          onClick={prev}
          aria-label="Previous speaker"
        />

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
          type="button"
          className={`${styles.arrow} ${styles.right}`}
          onClick={next}
          aria-label="Next speaker"
        />

      </div>

    </div>

  )

}
