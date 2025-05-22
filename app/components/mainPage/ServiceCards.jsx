import Link from 'next/link';
import styles from '/app/styles/ServiceCards.module.css';

const ServiceCards = () => {
  const services = [
    {
      id: 1,
      title: '이용시간',
      image: '/icon/clock.png',
      link: '/',
    },
    {
      id: 2,
      title: '이용금액',
      image: '/icon/wallet.png',
      link: '/',
    },
    {
      id: 3,
      title: '이용절차&구비서류',
      image: '/icon/file.png',
      link: '/',
    }
  ];

  return (
    <section className={styles.services}>
      <div className={styles.container}>
        {services.map((service) => (
          <Link href={service.link} key={service.id} className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  <img 
                    src={service.image}
                    alt={service.title}
                    className={styles.icon}
                    style={{ width: '36px', height: '36px' }} // 스타일 직접 지정
                  />
                </div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
              </div>
              <div className={styles.arrowContainer}>
                <span className={styles.arrow}>→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;
