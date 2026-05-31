"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { pastSubmissionImages } from "@/data/pastSubmissions";
import { assetPath } from "@/lib/assets";
import styles from "./PastSubmissions.module.scss";

const PAGE_SIZE = 4;

export default function PastSubmissions() {
  const [page, setPage] = useState(0);
  const totalPages = Math.max(1, Math.ceil(pastSubmissionImages.length / PAGE_SIZE));
  const visible = pastSubmissionImages.slice(
    page * PAGE_SIZE,
    page * PAGE_SIZE + PAGE_SIZE
  );

  const prev = () => setPage((p) => (p === 0 ? totalPages - 1 : p - 1));
  const next = () => setPage((p) => (p + 1) % totalPages);

  return (
    <div className={styles.wrap}>
      <h3 className={styles.heading}>
        <Image
          src="/cd.png"
          alt=""
          width={20}
          height={20}
          className={styles.envelope}
          aria-hidden
        />
        Past Submissions
      </h3>

      <motion.div
        className={styles.grid}
        key={page}
        initial={{ opacity: 0, x: 8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        {visible.map((item) => (
          <figure key={item.id} className={styles.card}>
            <div className={styles.photoFrame}>
              <Image
                src={assetPath(item.src)}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 45vw, 280px"
                className={styles.photo}
              />
            </div>
            <figcaption className={styles.name}>{item.name}</figcaption>
          </figure>
        ))}
      </motion.div>

      <div className={styles.controls}>
        <button type="button" className={styles.arrow} onClick={prev} aria-label="Previous">
          ◀
        </button>
        <button type="button" className={styles.arrow} onClick={next} aria-label="Next">
          ▶
        </button>
      </div>

      <Image
        src="/pastsubmissions-computer.png"
        alt=""
        width={140}
        height={140}
        className={styles.monitor}
        aria-hidden
      />
    </div>
  );
}
