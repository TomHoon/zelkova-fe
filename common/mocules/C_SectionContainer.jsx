"use client";

import styles from "@/styles/C_SectionContainer.module.scss";

/**
 *
 * [섹션 컨테이너 - Args]
 *
 * - 제목: 섹션 제목 (필수)
 *
 * - 자식요소: 섹션에 표시할 내용 (children)
 *
 */

export default function C_SectionContainer({ title, children }) {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.title}>{title}</h2>
      </div>
      
      <div className={styles.sectionContent}>
        {children}
      </div>
    </section>
  );
}
