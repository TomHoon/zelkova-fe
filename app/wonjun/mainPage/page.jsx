"use client";

import { useEffect, useRef, useState } from "react";
import C_NavBar from "@/common/mocules/C_NavBar";
import C_Footer from "@/common/organisms/C_Footer";
import styles from "@/styles/P_MainPage.module.scss";

const slides = [
	{
		img: "/images/clock.jpg",
		title: "느티나무마을 복지관",
		subtitle: "모든 주민은 지역의 혜택을 누릴 권리가 있습니다.",
	},
	{
		img: "/images/OrganizationBackground.jpg",
		title: "지역과 함께",
		subtitle: "소외된 이웃 없이 모두가 함께 살아가는 세상",
	},
	{
		img: "/images/clock.jpg",
		title: "함께 성장하는 마을",
		subtitle: "누구도 소외되지 않는 돌봄과 연대의 복지",
	},
];

export default function MainPage() {
	const [current, setCurrent] = useState(0);
	const intervalRef = useRef(null);
	const timeoutRef = useRef(null);

	// 자동 슬라이드
	const startAutoSlide = () => {
		intervalRef.current = setInterval(() => {
			setCurrent((prev) => (prev + 1) % slides.length);
		}, 10000);
	};

	// 자동 슬라이드 멈추고 재시작 예약
	const resetAutoSlide = () => {
		clearInterval(intervalRef.current);
		clearTimeout(timeoutRef.current);
		timeoutRef.current = setTimeout(() => {
			startAutoSlide();
		}, 30000); // 수동 조작 후 10초 뒤 다시 시작
	};

	useEffect(() => {
		startAutoSlide();
		return () => {
			clearInterval(intervalRef.current);
			clearTimeout(timeoutRef.current);
		};
	}, []);

	const handlePrev = () => {
		setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
		resetAutoSlide();
	};

	const handleNext = () => {
		setCurrent((prev) => (prev + 1) % slides.length);
		resetAutoSlide();
	};

	const goToSlide = (idx) => {
		setCurrent(idx);
		resetAutoSlide();
	};

	return (
		<>
			<C_NavBar
				elementList={[
					{ label: "기관소개", submenu: ["이용안내", "시설안내", "오시는길", "조직도"] },
					{ label: "공지사항", submenu: ["공지사항", "가정통신문", "채용안내"] },
					{ label: "후원&자원봉사", submenu: ["후원의손길", "자원봉사"] },
					{ label: "커뮤니티" },
				]}
				callback={() => {}}
			/>

			<div className={styles.sliderWrapper}>
				{slides.map((slide, idx) => (
					<div
						key={idx}
						className={`${styles.slide} ${current === idx ? styles.active : ""}`}
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
						<img src="/images/arrowLeft.png" alt="prev" />
					</button>
					<button onClick={handleNext}>
						<img src="/images/arrowRight.png" alt="next" />
					</button>
				</div>

				<div className={styles.dots}>
					{slides.map((_, idx) => (
						<div
							key={idx}
							className={`${styles.dot} ${current === idx ? styles.activeDot : ""}`}
							onClick={() => goToSlide(idx)}
						/>
					))}
				</div>
			</div>

			<C_Footer />
		</>
	);
}
