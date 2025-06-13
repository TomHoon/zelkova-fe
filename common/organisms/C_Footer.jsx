'use client';

import Image from 'next/image';
import styles from '@/styles/C_Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoRow}>
        <Image
          src="/images/tree.png"
          alt="로고"
          width={46}
          height={46}
          className={styles.logoImg}
        />
        <span>느티나무마을 복지관</span>
      </div>

      <div className={styles.infoGrid}>
        <div className={styles.infoItem}>
          <strong>주소</strong> 서울 어딘가
        </div>
        <div className={styles.infoItem}>
          <strong>전화번호</strong> 123-1234-1234
        </div>
        <div className={styles.infoItem}>
          <strong>팩스</strong> 789-7890-7890
        </div>
        <div className={styles.infoItem}>
          <strong>이메일</strong> 1234@1234.com
        </div>
        <div className={styles.infoItem}>
          <strong>이사장</strong> 이시현
        </div>
        <div className={styles.infoItem}>
          <strong>후원 계좌</strong> 123123123123 농협
        </div>
        <div className={styles.infoItem}>
          <strong>후원 문의</strong> 456-4567-4567
        </div>
      </div>
    </footer>
  );
}
