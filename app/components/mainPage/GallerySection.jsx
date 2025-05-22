import styles from '/app/styles/GallerySection.module.css';

const GallerySection = () => {
  const galleryItems = [
    {
      id: 1,
      image: '/images/gallery1.png',
      title: '시설 1',
      description: '편안한 휴식 공간과 다양한 시설을 제공합니다.'
    },
    {
      id: 2,
      image: '/images/gallery2.png',
      title: '시설 2',
      description: '다양한 활동을 위한 공간이 마련되어 있습니다.'
    },
    {
      id: 3,
      image: '/images/gallery3.png',
      title: '시설 3',
      description: '전문 교육을 위한 공간이 준비되어 있습니다.'
    }
  ];

  return (
    <section className={styles.gallery}>
      <div className={styles.container}>
        <h2 className={styles.title}>시설 안내</h2>
        <div className={styles.galleryGrid}>
          {galleryItems.map((item) => (
            <div key={item.id} className={styles.galleryItem}>
              <div className={styles.imageContainer}>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className={styles.image}
                />
              </div>
              <div className={styles.info}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemDescription}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
