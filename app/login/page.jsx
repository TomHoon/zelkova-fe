'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import C_SocialButton from '@/common/atom/C_SocialButton';
import C_NavBar from '@/common/mocules/C_NavBar';
import C_Modal from '@/common/mocules/C_Modal'; // 모달 컴포넌트 임포트
import styles from '@/styles/Login.module.scss';

export default function Login() {
  const router = useRouter();

  // 로그인 단계 관리 (1: 초기화면, 2: 로그인폼)
  const [loginStep, setLoginStep] = useState(1);

  // 로그인 폼 상태
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // 모달 상태 추가
  const [showLoginSuccessModal, setShowLoginSuccessModal] = useState(false);

  // 네비게이션 콜백
  const handleNavClick = item => {
    console.log('Nav item clicked:', item);
  };

  // 로그인 버튼 클릭 (1단계)
  const handleLoginButtonClick = () => {
    setLoginStep(2); // 로그인 폼으로 전환
  };

  // 로그인 제출 처리 (2단계)
  const handleLoginSubmit = e => {
    e.preventDefault();

    if (!userId.trim()) {
      setError('아이디를 입력해주세요.');
      return;
    }

    if (!password.trim()) {
      setError('비밀번호를 입력해주세요.');
      return;
    }

    // 로그인 처리 (실제로는 API 호출)
    console.log('로그인 요청', { userId, password });

    // 로그인 성공 시 모달 표시
    setShowLoginSuccessModal(true);
    setError('');
  };

  // 로그인 성공 모달 확인 버튼 처리
  const handleLoginSuccessConfirm = () => {
    setShowLoginSuccessModal(false);
    // 메인 페이지로 이동
    router.push('/');
  };

  return (
    <div className={styles.pageContainer}>
      {/* 헤더 영역 */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.navContainer}>
            <C_NavBar
              elementList={[
                {
                  label: '기관소개',
                  submenu: ['이용안내', '시설안내', '오시는길', '조직도'],
                },
                {
                  label: '공지사항',
                  submenu: ['공지사항', '가정통신문', '채용안내'],
                },
                { label: '후원&자원봉사', submenu: ['후원의손길', '자원봉사'] },
                { label: '커뮤니티' },
              ]}
              callback={handleNavClick}
            />
          </div>
        </div>
      </header>

      {/* 로그인 본문 영역 */}
      <main className={styles.loginContainer}>
        <div className={styles.loginBox}>
          {/* 1단계: 초기 화면 */}
          {loginStep === 1 && (
            <>
              {/* 로고 및 인사말 */}
              <div className={styles.logoSection}>
                <div className={styles.logoIcon}>
                  <img src="/images/tree.png" alt="로고" />
                </div>
                <div className={styles.welcomeText}>
                  <p>다들이 살아가는</p>
                  <p className={styles.siteName}>느티나무 복지관입니다</p>
                </div>
              </div>

              {/* 로그인 버튼 */}
              <button type="button" className={styles.loginButton} onClick={handleLoginButtonClick}>
                로그인
              </button>

              {/* 소셜 로그인 섹션 */}
              <div className={styles.socialSection}>
                <C_SocialButton
                  onClickKakao={() => console.log('카카오 로그인')}
                  onClickGoogle={() => console.log('구글 로그인')}
                />
              </div>
            </>
          )}

          {/* 2단계: 로그인 폼 */}
          {loginStep === 2 && (
            <>
              {/* 로고 */}
              <div className={`${styles.logoSection} ${styles.step2}`}>
                <div className={styles.logoIcon}>
                  <img src="/images/tree.png" alt="로고" />
                </div>
              </div>

              {/* 로그인 폼 */}
              <form onSubmit={handleLoginSubmit} className={styles.loginForm}>
                {/* 아이디 입력 */}
                <div className={styles.inputContainer}>
                  <input
                    type="text"
                    value={userId}
                    onChange={e => {
                      setUserId(e.target.value);
                      setError(''); // 입력 시 에러 메시지 제거
                    }}
                    placeholder="아이디"
                    className={`${styles.input} ${error ? styles.error : ''}`}
                  />
                </div>

                {/* 비밀번호 입력 */}
                <div className={styles.inputContainer}>
                  <input
                    type="password"
                    value={password}
                    onChange={e => {
                      setPassword(e.target.value);
                      setError(''); // 입력 시 에러 메시지 제거
                    }}
                    placeholder="비밀번호"
                    className={`${styles.input} ${error ? styles.error : ''}`}
                  />
                </div>

                {/* 에러 메시지 */}
                {error && <div className={styles.errorText}>{error}</div>}

                {/* 로그인 버튼 */}
                <button type="submit" className={styles.loginButton}>
                  로그인
                </button>
              </form>

              {/* 소셜 로그인 섹션 */}
              <div className={styles.socialSection}>
                <C_SocialButton
                  onClickKakao={() => console.log('카카오 로그인')}
                  onClickGoogle={() => console.log('구글 로그인')}
                />
              </div>
            </>
          )}
        </div>
      </main>

      {/* 문의하기 모달 */}
      {showLoginSuccessModal && (
        <C_Modal
          type="A"
          title="문의하기"
          content="느티나무 복지관에 문의 부탁드립니다.
          
          
031-0000-0000"
          confirmText="확인"
          onConfirm={handleLoginSuccessConfirm}
          onCancel={() => setShowLoginSuccessModal(false)}
        />
      )}
    </div>
  );
}
