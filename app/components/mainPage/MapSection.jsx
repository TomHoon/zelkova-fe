"use client";

import { useEffect, useRef } from 'react';
import styles from '/app/styles/MapSection.module.css';

const MapSection = () => {
  const mapRef = useRef(null);

  // 실제 프로젝트에서는 Google Maps나 Kakao Maps API를 활용하세요
  useEffect(() => {
    // 지도 API 구현
    // 여기서는 간단한 이미지로 대체합니다
  }, []);

  return (
    <section className={styles.map}>
      <div className={styles.container}>
        <div className={styles.mapArea}>
          <div className={styles.mapPlaceholder}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.6264317833365!2d126.91615638554957!3d37.55590213339857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c98daaef74c99%3A0x4a9cc43cc580f72d!2z7ISc7Jq47Yq567OE7IucIOuniO2PrOq1rA!5e0!3m2!1sko!2skr!4v1621473412367!5m2!1sko!2skr" 
              width="100%" 
              height="100%"
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              title="느티나무마을 복지관 위치"
            ></iframe>
          </div>
        </div>
        <div className={styles.infoContainer}>
          <h3 className={styles.title}>오시는 길</h3>
          <div className={styles.infoBox}>
            <ul className={styles.infoList}>
              <li className={styles.infoItem}>
                <span className={styles.infoIcon}>📍</span>
                <span>서울특별시 마포구 월드컵북로 12길 12-34</span>
              </li>
              <li className={styles.infoItem}>
                <span className={styles.infoIcon}>📞</span>
                <span>032-123-4567</span>
              </li>
              <li className={styles.infoItem}>
                <span className={styles.infoIcon}>✉️</span>
                <span>help@carejumin.com</span>
              </li>
              <li className={styles.infoItem}>
                <span className={styles.infoIcon}>🕙</span>
                <span>평일 9시 ~ 6시</span>
              </li>
              <li className={styles.infoItem}>
                <span className={styles.infoIcon}>🚌</span>
                <span>지하철 6호선 상수역 3번 출구에서 도보 10분</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
