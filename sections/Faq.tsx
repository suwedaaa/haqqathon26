"use client";

import { useState } from "react";
import styles from "./Faq.module.scss";
import { faqs } from "../data/faq"; 

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className={styles.faqSection} id="faq">
      <div className={styles.container}>
        <div className={styles.titleBox}>
          <h2>FAQS</h2>
        </div>

        <div className={styles.list}>
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={item.question} className={styles.card}>
                {/* Header row */}
                <button
                  type="button"
                  className={styles.header}
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.question}>{item.question}</span>

                  <span
                    className={`${styles.plus} ${isOpen ? styles.plusOpen : ""}`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                {/* Expandable body */}
                <div
                  className={`${styles.body} ${isOpen ? styles.bodyOpen : ""}`}
                >
                  <p className={styles.answer}>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.ctaWrap}>
          <a
            className={styles.cta}
            href="https://www.instagram.com/stem.muslims/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact us
          </a>
        </div>
      </div>
    </section>
  );
}