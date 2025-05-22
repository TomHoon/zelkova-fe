import styles from './page.module.css';
import Banner from './components/mainPage/Banner';
import ServiceCards from './components/mainPage/ServiceCards';
import IntroSection from './components/mainPage/IntroSection';
import NoticeSection from './components/mainPage/NoticeSection';
import GallerySection from './components/mainPage/GallerySection';
import MapSection from './components/mainPage/MapSection';

export default function Home() {
  return (
    <div className={styles.container}>
      <Banner />
      <ServiceCards />
      <IntroSection />
      <NoticeSection />
      <GallerySection />
      <MapSection />
    </div>
  );
}
