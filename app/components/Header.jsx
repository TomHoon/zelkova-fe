"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from '/app/styles/Header.module.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <img src="/icon/tree.png" alt="느티나무마을 복지관" />
          </Link>
        </div>

        <nav className={`${styles.nav} ${mobileMenuOpen ? styles.open : ''}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/introduce" className={styles.navLink}>
                기관소개
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/notice" className={styles.navLink}>
                공지사항
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/donate" className={styles.navLink}>
                후원&자원봉사
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/community" className={styles.navLink}>
                커뮤니티
              </Link>
            </li>
          </ul>
        </nav>

        <button 
          className={styles.mobileMenuButton}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="메뉴 토글"
        >
          <span className={styles.menuIcon}></span>
        </button>

        <div className={styles.joinlist}>
          <div className={styles.join}>
            <Link href="/">
              <img src="/images/login.svg" alt="로그인" />
            </Link>
          </div>
          <div className={styles.join}>
            <Link href="/">
              <img src="/images/register.svg" alt="회원가입" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;