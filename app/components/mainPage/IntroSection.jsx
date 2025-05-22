import styles from '/app/styles/IntroSection.module.css';

const IntroSection = () => {
  return (
    <section className={styles.intro}>
      <div className={styles.container}>
        <h2 className={styles.title}>느티나무 마을 소개</h2>
        <div className={styles.content}>
          <p className={styles.description}>
            느티나무 마을 복지관은 지역 주민들의 건강과 복지 향상을 위해 설립된 공간입니다. 
            다양한 프로그램과 서비스를 통해 모든 세대가 함께 어울리고 성장할 수 있는 
            지역 사회의 따뜻한 보금자리를 지향합니다.
          </p>
          <p className={styles.description}>
            노인, 아동, 청소년, 가족을 위한 맞춤형 프로그램을 제공하며,
            주민 여러분의 건강하고 활기찬 삶을 위해 항상 노력하고 있습니다.
            다양한 시설과 편의 시설을 갖추고 여러분을 기다리고 있습니다.
          </p>
          <ul className={styles.featureList}>
            <li className={styles.featureItem}>
              <span className={styles.featureBullet}>✓</span>
              전문적인 사회복지 서비스 제공
            </li>
            <li className={styles.featureItem}>
              <span className={styles.featureBullet}>✓</span>
              다양한 연령대를 위한 맞춤형 프로그램
            </li>
            <li className={styles.featureItem}>
              <span className={styles.featureBullet}>✓</span>
              지역 사회 연계 활동 및 봉사 기회
            </li>
            <li className={styles.featureItem}>
              <span className={styles.featureBullet}>✓</span>
              편안하고 안전한 시설 환경
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
