import styles from '/app/styles/NoticeSection.module.css';

const NoticeSection = () => {
  const events = [
    {
      id: 1,
      day: 15,
      month: '7월',
      title: '2023 한인가 이전 안내',
      content: '복지관 시설 이전에 관한 안내사항입니다.'
    },
    {
      id: 2,
      day: 28,
      month: '7월',
      title: '어르신 신설 이전 주의사항',
      content: '어르신 시설 이용에 관한 변경사항입니다.'
    },
    {
      id: 3,
      day: 10,
      month: '8월',
      title: '복지관 안내 (6월 12일)',
      content: '여름철 복지관 이용 안내입니다.'
    }
  ];

  return (
    <section className={styles.events}>
      <div className={styles.container}>
        <h2 className={styles.title}>공지사항</h2>
        <div className={styles.eventList}>
          {events.map((event) => (
            <div key={event.id} className={styles.eventCard}>
              <div className={styles.eventDate}>
                <span className={styles.eventDay}>{event.day}</span>
                <span className={styles.eventMonth}>{event.month}</span>
              </div>
              <div className={styles.eventInfo}>
                <h3 className={styles.eventTitle}>{event.title}</h3>
                <p className={styles.eventContent}>{event.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.moreContainer}>
          <a href="/news" className={styles.moreButton}>
            더보기 →
          </a>
        </div>
      </div>
    </section>
  );
};

export default NoticeSection;
