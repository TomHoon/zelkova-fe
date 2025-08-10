'use client';

import { useEffect, useRef, useState } from 'react';
import C_NavBar from '@/common/mocules/C_NavBar';
import C_Footer from '@/common/organisms/C_Footer';
import styles from '@/styles/P_MainPage.module.scss';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const C_KakaoMap = dynamic(() => import('@/common/organisms/C_KakaoMap'), { ssr: false });

const slides = [
  {
    img: '/images/clock.jpg',
    title: '느티나무마을 복지관',
    subtitle: '모든 주민은 지역의 혜택을 누릴 권리가 있습니다.',
  },
  {
    img: '/images/OrganizationBackground.jpg',
    title: '지역과 함께',
    subtitle: '소외된 이웃 없이 모두가 함께 살아가는 세상',
  },
  {
    img: '/images/clock.jpg',
    title: '함께 성장하는 마을',
    subtitle: '누구도 소외되지 않는 돌봄과 연대의 복지',
  },
  {
    img: '/images/OrganizationBackground.jpg',
    title: '지역과 함께',
    subtitle: '소외된 이웃 없이 모두가 함께 살아가는 세상',
  },
  {
    img: '/images/clock.jpg',
    title: '지역과 함께',
    subtitle: '소외된 이웃 없이 모두가 함께 살아가는 세상',
  },
  {
    img: '/images/OrganizationBackground.jpg',
    title: '지역과 함께',
    subtitle: '소외된 이웃 없이 모두가 함께 살아가는 세상',
  },
];

export default function MainPage() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  // 자동 슬라이드
  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 10000);
  };

  // 자동 슬라이드 멈추고 재시작 예약
  const resetAutoSlide = () => {
    clearInterval(intervalRef.current);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      startAutoSlide();
    }, 30000); // 수동 조작 후 30초 뒤 다시 시작
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  const handlePrev = () => {
    setCurrent(prev => (prev - 1 + slides.length) % slides.length);
    resetAutoSlide();
  };

  const handleNext = () => {
    setCurrent(prev => (prev + 1) % slides.length);
    resetAutoSlide();
  };

  const goToSlide = idx => {
    setCurrent(idx);
    resetAutoSlide();
  };

  const containerStyle = {
    width: '597px',
    height: '517px',
  };

  const center = {
    lat: 37.547458,
    lng: 127.204603,
  };

  return (
    <>
      {/* 네비게이터 */}
      <C_NavBar
        elementList={[
          { label: '기관소개', submenu: ['이용안내', '시설안내', '오시는길', '조직도'] },
          { label: '공지사항', submenu: ['공지사항', '가정통신문', '채용안내'] },
          { label: '후원&자원봉사', submenu: ['후원의손길', '자원봉사'] },
          { label: '커뮤니티' },
        ]}
        callback={() => { }}
      />

      <div className={styles.container}>
        {/* 상단 슬라이드 */}
        <div className={styles.sliderWrapper}>
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className={`${styles.slide} ${current === idx ? styles.active : ''}`}
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className={styles.textWrap}>
                <h2>{slide.title}</h2>
                <p>{slide.subtitle}</p>
              </div>
            </div>
          ))}

          <div className={styles.arrows}>
            <button onClick={handlePrev}>
              <Image src="/images/arrowLeft.png" alt="prev" width={26} height={52} />
            </button>
            <button onClick={handleNext}>
              <Image src="/images/arrowRight.png" alt="next" width={26} height={52} />
            </button>
          </div>

          <div className={styles.dots}>
            {slides.map((_, idx) => (
              <div
                key={idx}
                className={`${styles.dot} ${current === idx ? styles.activeDot : ''}`}
                onClick={() => goToSlide(idx)}
              />
            ))}
          </div>
        </div>

        {/* 안내 페이지 리다이렉트 */}
        <div className={styles.ServiceInfoPanelWrapper}>
          <div className={styles.infocardWrapper}>
            <div className={styles.infoCard}>
              <div className={styles.bgImage}>
                <Image src="/images/clock.jpg" alt="카드배경" fill objectFit="cover" />
              </div>
              <div className={styles.overlay} />

              <div className={styles.infoContent}>
                <div className={styles.infoIcon}>
                  <Image src="/images/main-clock.png" alt="아이콘" width={40} height={40} />
                </div>
                <h3>이용시간</h3>
                <p>
                  월~토: 24시간 운영
                  <br />
                  일요일: 09:00 ~ 18:00
                </p>
              </div>

              <div className={styles.infoArrow}>
                <Image src="/images/arrow.png" alt="화살표" width={36} height={36} />
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.bgImage}>
                <Image src="/images/clock.jpg" alt="카드배경" fill objectFit="cover" />
              </div>
              <div className={styles.overlay} />

              <div className={styles.infoContent}>
                <div className={styles.infoIcon}>
                  <Image src="/images/main-file.png" alt="아이콘" width={40} height={40} />
                </div>
                <h3>이용시간</h3>
                <p>
                  월~토: 24시간 운영
                  <br />
                  일요일: 09:00 ~ 18:00
                </p>
              </div>

              <div className={styles.infoArrow}>
                <Image src="/images/arrow.png" alt="화살표" width={36} height={36} />
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.bgImage}>
                <Image src="/images/clock.jpg" alt="카드배경" fill objectFit="cover" />
              </div>
              <div className={styles.overlay} />

              <div className={styles.infoContent}>
                <div className={styles.infoIcon}>
                  <Image src="/images/main-wallet.png" alt="아이콘" width={40} height={40} />
                </div>
                <h3>이용시간</h3>
                <p>
                  월~토: 24시간 운영
                  <br />
                  일요일: 09:00 ~ 18:00
                </p>
              </div>

              <div className={styles.infoArrow}>
                <Image src="/images/arrow.png" alt="화살표" width={36} height={36} />
              </div>
            </div>
          </div>
        </div>

        {/* 소개글 */}
        <div className={styles.introSectionWrapper}>
          <div className={styles.introSection}>
            <div className={styles.introContent}>
              <h2 className={styles.introTitle}>느티나무 마을 소개</h2>
              <p className={styles.introText}>
                포근하고 넓은 마음으로 쉼을 주는 느티나무와 같이, 장애인 이용자들에게 사랑과 쉼을
                주는 즐거운 집이 되기 위해 만들어졌습니다.
              </p>
              <p className={styles.introText}>
                가정에서 일시적으로 생활이 어려운 장애인에게 일정기간 동안 휴식, 요양, 보호를 위한
                거주 공간 및 일상생활 서비스를 제공하여 가족 구성원이 안심하고 사회, 경제적 활동을
                영위할 수 있도록 월-토요일 12시까지 24시간 운영하는 시설입니다.
              </p>
            </div>

            <div className={styles.introImageWrapper}>
              <Image
                src="/images/image.png"
                width={496}
                height={241}
                className="introImage"
                alt="복지관 전경 이미지"
              />
            </div>
          </div>
        </div>

        {/* 공지사항 영역 */}
        <section className={styles.noticeSection}>
          <div className={styles.noticeHeader}>
            <h2>공지사항</h2>
            <a className={styles.noticeMore} href="#">
              전체보기
              <Image
                className={styles.noticeArrow}
                src="/images/arrow.png"
                width={20}
                height={20}
                alt="화살표"
              />
            </a>
          </div>

          <div className={styles.noticeList}>
            {[
              {
                day: '15',
                month: '7월',
                title: '2023 하반기 이용 안내',
                desc: '하반기 이용 관련 안내사항을 알려드립니다.',
              },
              {
                day: '28',
                month: '6월',
                title: '여름철 시설 이용 주의사항',
                desc: '더운 여름철 시설 이용 시 주의해주실 사항을 안내드립니다.',
              },
              {
                day: '10',
                month: '6월',
                title: '휴관일 안내 (6월 12일)',
                desc: '6월 12일은 시설 휴관일임을 알려드립니다.',
              },
            ].map((item, i) => (
              <div key={i} className={styles.noticeItem}>
                <div className={styles.dateBox}>
                  <strong>{item.day}</strong>
                  <span>{item.month}</span>
                </div>
                <div className={styles.noticeContent}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 시설 안내 영역 */}
        <section className={styles.facilitySection}>
          <div className={styles.facilityHeader}>
            <h2>시설 안내</h2>
            <a className={styles.facilityMore} href="#">
              전체보기
              <Image
                className={styles.facilityArrow}
                src="/images/arrow.png"
                width={20}
                height={20}
                alt="화살표"
              />
            </a>
          </div>

          <div className={styles.facilityCardList}>
            {[
              { title: '이용시간', desc: '월~토: 24시간 운영 일요일: 09:00 ~ 18:00' },
              { title: '운영안내', desc: '문의: 02-1234-5678 점심시간: 12시~13시' },
              { title: '주차정보', desc: '지하 1층 20대 주차 가능 1시간 무료' },
            ].map((item, i) => (
              <div key={i} className={styles.facilityCard}>
                <div className={styles.facilityBgImage}>
                  <Image src="/images/clock.jpg" alt="카드배경" fill objectFit="cover" />
                </div>
                <div className={styles.facilityOverlay} />
                <div className={styles.facilityContent}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 구글맵 */}
        <div className={styles.mapSection}>
          <div className={styles.mapHeader}>
            <h2 className={styles.mapTitle}>오시는 길</h2>
          </div>

          <div className={styles.mapContentWrapper}>
            <div className={styles.mapBox}>
              <C_KakaoMap />
            </div>

            <div className={styles.mapInfoBox}>
              <h3 className={styles.mapInfoTitle}>느티나무 마을</h3>
              <hr className={styles.divider} />
              <ul className={styles.infoList}>
                <li>
                  <Image src="/images/file.svg" width={32} height={32} alt="icon" /> 경기도 하남시
                  애플로 53 (12936)
                </li>
                <li>
                  <Image src="/images/file.svg" width={32} height={32} alt="icon" /> 031-796-0005
                </li>
                <li>
                  <Image src="/images/file.svg" width={32} height={32} alt="icon" />{' '}
                  neutinamu@example.com
                </li>
              </ul>
              <strong className={styles.subTitle}>대중교통 이용 시</strong>
              <ul className={styles.infoList}>
                <li>
                  <Image src="/images/file.svg" width={32} height={32} alt="icon" /> 지하철 5호선
                  하남시청역 3번 출구에서 도보 10분
                </li>
                <li>
                  <Image src="/images/file.svg" width={32} height={32} alt="icon" /> 일반버스 30,
                  55, 100번 하남시장 정류장 하차
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* 푸터 */}
      <C_Footer />
    </>
  );
}
