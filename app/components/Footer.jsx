import styles from '/app/styles/Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.logoSection}>
            <div className={styles.logo}>
               <img 
                src="/icon/tree.png"
                alt="느티나무마을 복지관 로고"
                className={styles.logoImage}
              />
              <span className={styles.logoText}>느티나무마을 복지관</span>
            </div>
          </div>
          
          <div className={styles.linksSection}>
            <div className={styles.linksColumn}>
              <h3 className={styles.columnTitle}>이용 안내</h3>
              <ul className={styles.linksList}>
                <li><a href="/guide/hours">이용시간</a></li>
                <li><a href="/guide/rules">이용수칙</a></li>
                <li><a href="/guide/application">이용절차</a></li>
              </ul>
            </div>
            
            <div className={styles.linksColumn}>
              <h3 className={styles.columnTitle}>프로그램</h3>
              <ul className={styles.linksList}>
                <li><a href="/program/elderly">노인 프로그램</a></li>
                <li><a href="/program/youth">청소년 프로그램</a></li>
                <li><a href="/program/family">가족 프로그램</a></li>
              </ul>
            </div>
            
            <div className={styles.linksColumn}>
              <h3 className={styles.columnTitle}>고객지원</h3>
              <ul className={styles.linksList}>
                <li><a href="/support/faq">자주 묻는 질문</a></li>
                <li><a href="/support/contact">문의하기</a></li>
                <li><a href="/support/suggestion">건의사항</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <div className={styles.copyRight}>
            &copy; {currentYear} 느티나무마을 복지관. All Rights Reserved.
          </div>
          <div className={styles.infoLinks}>
            <a href="/privacy">개인정보처리방침</a>
            <span className={styles.divider}>|</span>
            <a href="/terms">이용약관</a>
            <span className={styles.divider}>|</span>
            <a href="/sitemap">사이트맵</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
