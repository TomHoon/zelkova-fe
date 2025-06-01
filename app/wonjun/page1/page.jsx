"use client";

import C_PageTemplate from "@/common/templates/C_PageTemplate";
import C_SectionContainer from "@/common/mocules/C_SectionContainer";
import styles from "@/styles/P_Guide.module.scss";
import Image from "next/image";

export default function TestPage() {
	const handleTabClick = (label) => {
		console.log("탭 클릭됨:", label);
	};

	const tabList = ["이용안내", "시설안내", "오시는 길", "조직도"];

    const usageData = [
        { type: "주간", time: "오전 9:00 ~ 오후 18:00", price: "15,000원" },
        { type: "토요일", time: "오전 9:00 ~ 오후 18:00", price: "15,000원" },
        { type: "1일", time: "24시간", price: "15,000원" },
        { type: "1개월", time: "주간 및 야간", price: "15,000원" },
        { type: "1개월 (거주)", time: "월~금 오전 09:00 ~ 오후 18:00", price: "15,000원" },
    ];

	return (
		<C_PageTemplate
			title="시설안내"
			tabBarElementList={tabList}
			tabBarCallback={handleTabClick}
			bannerImageUrl="/images/people.jpg"
		>
			<C_SectionContainer title="이용안내">
					<div className={styles.cardWrapper}>
						{/* 카드 1 */}
						<div className={styles.card}>
							<Image
								src="/images/clock.jpg"
								alt="이용시간"
								fill
								priority
								className={styles.bgImage}
							/>
							<div className={styles.gradientOverlay} />
							<div className={styles.textOverlay}>
								<span className={styles.titleText}>이용시간</span>
								<p className={styles.descText}>주간 및 토요일 : 오전 9시~오후 6시</p>
								<p className={styles.descText}>일요일 및 공휴일은 휴관입니다.</p>
							</div>
						</div>

						{/* 카드 2 */}
						<div className={styles.card}>
							<Image
								src="/images/people.jpg"
								alt="이용문의"
								fill
								priority
								className={styles.bgImage}
							/>
							<div className={styles.gradientOverlay} />
							<div className={styles.textOverlay}>
								<span className={styles.titleText}>이용문의</span>
								<p className={styles.descText}>사무실 031-796-0005</p>
								<p className={styles.descText}>이메일 (이메일주소 입력 바랍니다)</p>
							</div>
						</div>
				</div>
			</C_SectionContainer>

			<C_SectionContainer title="이용금액">
				<table className={styles.priceTable}>
                    <thead>
                        <tr>
                            <th colSpan={2}>이용시간</th>
                            <th>이용요금</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usageData.map((row, idx) => (
                            <tr key={idx}>
                                <td>{row.type}</td>
                                <td>{row.time}</td>
                                <td>{row.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
			</C_SectionContainer>

			<C_SectionContainer title="이용절차">
                <div className={styles.processWrapper}>
                    {[
                        { icon: "file.svg", text: "입소의뢰 및 접수" },
                        { icon: "human.svg", text: "초기면접" },
                        { icon: "check.svg", text: "입소판정" },
                        { icon: "date.svg", text: "이용신청" },
                        { icon: "check.svg", text: "이용" }
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className={`${styles.processRow} ${idx % 2 === 0 ? styles.altBg : ""}`}
                        >
                            <img src={`/images/${item.icon}`} alt={item.text} className={styles.icon} />
                            <span className={styles.label}>{item.text}</span>
                        </div>
                    ))}
                </div>
			</C_SectionContainer>

			<C_SectionContainer title="입소구비서류">
				<p>ㅇㅇ</p>
			</C_SectionContainer>
		</C_PageTemplate>
	);
}
