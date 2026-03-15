"use client"
import styles from "./AboutCarousel.module.scss"
import { aboutCards } from "@/data/aboutCards"
import { FaArrowRight } from "react-icons/fa"
import Link from "next/link"

export default function AboutCarousel() {
  return(
    <>
    <div className={styles.grid}>
      {aboutCards.map((card) => (
        <div key={card.id} className={styles.card}>
          <div className={styles.header}>
          <card.icon size={24} color="#73C58B" />
          <h3 className={styles.title}>{card.title}</h3>
          </div>
          <p className={styles.description}>{card.description}</p>
        </div>
      ))}
    </div>
    
    <div className={styles.stemGrid}>
        <div className={styles.card}>
          <h3 className={styles.stemQuestion}>Who is <span className={styles.limeColor}>STEMM</span>?</h3>
          <p className={styles.description}>STEMMuslims (Science, Technology, Engineering, Mathematics) Society is the university’s premier Muslim professional network. We bring faith and career, providing mentorship, networking events, and opportunities for Muslim students in STEM fields.</p>


          <div style={{ textAlign: "left" }}>
            <Link href="https://linktr.ee/StemMuslims" target="_blank" className={styles.link}>
              <button className={styles.button}>
                Visit the STEMM website <FaArrowRight size={14}/>
              </button>
            </Link>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.container}>
            <h1 className={styles.stemTitle}>STEMM</h1>
            <p className={styles.stemDescription}>Science Technology Engineering Mathematics Muslims</p>
          </div>
          
        </div>
    </div>
    </>
  )
}
