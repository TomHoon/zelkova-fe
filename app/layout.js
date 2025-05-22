import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: '느티나무마을 복지관',
  description: '지역 주민을 위한 복지관 안내 페이지',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
