"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { pastSubmissionImages } from "@/data/pastSubmissions";
import { assetPath } from "@/lib/assets";
import styles from "./PastSubmissions.module.scss";

function usePageSize() {
  const [size, setSize] = useState(4);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 768px)");
    const update = (e: MediaQueryList | MediaQueryListEvent) =>
      setSize(e.matches ? 2 : 4);
    update(mql);
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  return size;
}

export default function PastSubmissions() {
  const pageSize = usePageSize();
  const [page, setPage] = useState(0);
  const totalPages = Math.max(1, Math.ceil(pastSubmissionImages.length / pageSize));

  useEffect(() => {
    setPage((p) => Math.min(p, totalPages - 1));
  }, [totalPages]);
  const visible = pastSubmissionImages.slice(
    page * pageSize,
    page * pageSize + pageSize
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
          sizes="20px"
          loading="lazy"
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
        sizes="100px"
        loading="lazy"
        className={styles.monitor}
        aria-hidden
      />
    </div>
  );
}
