"use client";

import { useState, useEffect } from 'react';
import styles from '/app/styles/Banner.module.css';

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 2; // 배너 이미지 개수

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  const handlePrevClick = () => {
    setActiveSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };

  return (
    <section className={styles.banner}>
      <div className={styles.slideContainer}>
        <div 
          className={styles.slideWrapper} 
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          <div className={styles.slide}>
            <img 
              src="/images/main-theme-image.png" 
              alt="느티나무마을 복지관에서 함께하는 지역 주민들" 
              className={styles.slideImage}
            />

            <div className={styles.overlay}></div>

            <div className={styles.slideContent}>
              <h1 className={styles.slideTitle}>느티나무마을 복지관</h1>
              <p className={styles.slideDesc}>함께 성장하는 우리 지역 사회의 따뜻한 보금자리</p>
            </div>
          </div>
          <div className={styles.slide}>
            <img 
              src="/images/main-first-img.jpg" 
              alt="느티나무마을 복지관에서 함께하는 지역 주민들" 
              className={styles.slideImage}
            />
            <div className={styles.slideContent}>
              <h1 className={styles.slideTitle}>느티나무마을 복지관</h1>
              <p className={styles.slideDesc}>함께 성장하는 우리 지역 사회의 따뜻한 보금자리</p>
            </div>
            </div>
        </div>
      </div>

      <button className={`${styles.navButton} ${styles.prevButton}`} onClick={handlePrevClick}>
        <span className={styles.arrowLeft}></span>
      </button>
      <button className={`${styles.navButton} ${styles.nextButton}`} onClick={handleNextClick}>
        <span className={styles.arrowRight}></span>
      </button>

      <div className={styles.dotsContainer}>
        {[...Array(totalSlides)].map((_, index) => (
          <button 
            key={index}
            className={`${styles.dot} ${index === activeSlide ? styles.activeDot : ''}`}
            onClick={() => handleDotClick(index)}
            aria-label={`슬라이드 ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Banner;
