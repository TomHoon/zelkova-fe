'use client';

import React from 'react';
import Image from 'next/image';
import styles from '@/styles/C_PageTemplate.module.scss';
import C_NavBar from '@/common/mocules/C_NavBar';
import C_TabBar from '@/common/mocules/C_TabBar';
import C_Footer from '@/common/organisms/C_Footer';

export default function C_PageTemplate({
  children,
  title,
  bannerImageUrl,
  tabBarElementList = [],
  tabBarCallback = () => { },
}) {
  const navCallback = () => {
    console.log('NavBar callback 실행');
  };

  return (
    <>
      <C_NavBar
        elementList={[
          { label: '기관소개', submenu: ['이용안내', '시설안내', '오시는길', '조직도'] },
          { label: '공지사항', submenu: ['공지사항', '가정통신문', '채용안내'] },
          { label: '후원&자원봉사', submenu: ['후원의손길', '자원봉사'] },
          { label: '커뮤니티' },
        ]}
        callback={navCallback}
      />

      {bannerImageUrl && (
        <div className={styles.bannerSection}>
          <Image
            src={bannerImageUrl}
            alt="페이지 배너"
            width={1280}
            height={568}
            className={styles.bannerImage}
            priority
          />

          <div className={styles.bannerContent}>
            {title && <h1 className={styles.pageTitle}>{title}</h1>}

            <C_TabBar
              elementList={tabBarElementList}
              callback={tabBarCallback}
              className={styles.tabbarInsideBanner}
            />
          </div>
        </div>
      )}


      <div className={styles.pageTemplate}>
        <main className={styles.pageContent}>{children}</main>
      </div>


      <C_Footer />
    </>
  );
}
