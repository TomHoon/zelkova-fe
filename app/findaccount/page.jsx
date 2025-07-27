'use client';

import { React, useState } from 'react';
import { useRouter } from 'next/navigation';
import C_SocialButton from '@/common/atom/C_SocialButton';
import C_PhoneVerification from '@/common/mocules/C_PhoneVerification';
import C_NavBar from '@/common/mocules/C_NavBar';
import C_Modal from '@/common/mocules/C_Modal';
import styles from '@/styles/FindAccount.module.scss';

export default function FindAccount() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState('findId');
  const [passwordStep, setPasswordStep] = useState(1);
  const [phoneVerified, setPhoneVerified] = useState(false);
  const [userId, setUserId] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // 각각의 모달 상태
  const [showPhoneErrorModal, setShowPhoneErrorModal] = useState(false);
  const [showPasswordErrorModal, setShowPasswordErrorModal] = useState(false);
  const [showFindIdSuccessModal, setShowFindIdSuccessModal] = useState(false);
  const [showPasswordSuccessModal, setShowPasswordSuccessModal] = useState(false);

  const handleNavClick = item => console.log('Nav clicked:', item);

  const handleFindIdSubmit = e => {
    e.preventDefault();
    if (!phoneVerified) {
      setShowPhoneErrorModal(true);
      return;
    }

    setShowFindIdSuccessModal(true);
  };

  const handlePasswordStep1Submit = e => {
    e.preventDefault();
    if (!phoneVerified) {
      setShowPhoneErrorModal(true);
      return;
    }
    setPasswordStep(2);
  };

  const handlePasswordStep2Submit = e => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setShowPasswordErrorModal(true);
      return;
    }

    setShowPasswordSuccessModal(true);
  };

  const handleFindIdSuccessConfirm = () => {
    setShowFindIdSuccessModal(false);
    router.push('/login');
  };

  const handlePasswordSuccessConfirm = () => {
    setShowPasswordSuccessModal(false);
    router.push('/login');
  };

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.navContainer}>
            <C_NavBar
              elementList={[
                { label: '기관소개', submenu: ['이용안내', '시설안내', '오시는길', '조직도'] },
                { label: '공지사항', submenu: ['공지사항', '가정통신문', '채용안내'] },
                { label: '후원&자원봉사', submenu: ['후원의손길', '자원봉사'] },
                { label: '커뮤니티' },
              ]}
              callback={handleNavClick}
            />
          </div>
        </div>
      </header>

      <main className={styles.container}>
        {/* 탭 */}
        <div className={styles.tabContainer}>
          <button
            className={`${styles.tab} ${activeTab === 'findId' ? styles.active : ''}`}
            onClick={() => {
              setActiveTab('findId');
              setPasswordStep(1);
            }}
          >
            아이디 찾기
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'changePassword' ? styles.active : ''}`}
            onClick={() => {
              setActiveTab('changePassword');
              setPasswordStep(1);
            }}
          >
            비밀번호 바꾸기
          </button>
        </div>

        {/* 아이디 찾기 */}
        {activeTab === 'findId' && (
          <div className={styles.tabContent}>
            <p className={styles.description}>가입하신 전화번호를 입력해주세요.</p>
            <form onSubmit={handleFindIdSubmit} className={styles.form}>
              <div className={styles.phoneVerificationWrapper}>
                <C_PhoneVerification onVerified={() => setPhoneVerified(true)} />
              </div>
              <button type="submit" className={styles.submitButton}>
                확인
              </button>
            </form>
          </div>
        )}

        {/* 비밀번호 바꾸기 */}
        {activeTab === 'changePassword' && (
          <div className={styles.tabContent}>
            {passwordStep === 1 ? (
              <>
                <p className={styles.description}>가입하신 아이디, 전화번호를 입력해주세요.</p>
                <form onSubmit={handlePasswordStep1Submit} className={styles.form}>
                  <div className={styles.inputContainer}>
                    <input
                      type="text"
                      value={userId}
                      onChange={e => setUserId(e.target.value)}
                      placeholder="아이디"
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.phoneVerificationWrapper}>
                    <C_PhoneVerification onVerified={() => setPhoneVerified(true)} />
                  </div>
                  <button type="submit" className={styles.submitButton}>
                    확인
                  </button>
                </form>
              </>
            ) : (
              <>
                <p className={styles.description}>변경하실 비밀번호를 입력해주세요.</p>
                <form onSubmit={handlePasswordStep2Submit} className={styles.form}>
                  <div className={styles.inputContainer}>
                    <input
                      type="password"
                      value={newPassword}
                      onChange={e => setNewPassword(e.target.value)}
                      placeholder="비밀번호"
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.inputContainer}>
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={e => setConfirmPassword(e.target.value)}
                      placeholder="비밀번호 확인"
                      className={styles.input}
                    />
                  </div>
                  <button type="submit" className={styles.submitButton}>
                    확인
                  </button>
                </form>
              </>
            )}
          </div>
        )}

        <div className={styles.socialSection}>
          <C_SocialButton
            onClickKakao={() => console.log('카카오 로그인')}
            onClickGoogle={() => console.log('구글 로그인')}
          />
        </div>
      </main>

      {/* 휴대폰 인증 에러 모달 */}
      {showPhoneErrorModal && (
        <C_Modal
          type="A"
          title="알림"
          content="휴대폰 인증이 필요합니다."
          confirmText="확인"
          onConfirm={() => setShowPhoneErrorModal(false)}
        />
      )}

      {/* 비밀번호 불일치 에러 모달 */}
      {showPasswordErrorModal && (
        <C_Modal
          type="A"
          title="알림"
          content="비밀번호가 일치하지 않습니다."
          confirmText="확인"
          onConfirm={() => setShowPasswordErrorModal(false)}
        />
      )}

      {/* 아이디 찾기 성공 모달 */}
      {showFindIdSuccessModal && (
        <C_Modal
          type="B"
          title="아이디 찾기"
          content="회원님의 아이디를 찾았습니다.
          아이디는 user123 입니다."
          confirmText="로그인"
          cancelText="취소"
          onConfirm={handleFindIdSuccessConfirm}
          onCancel={() => setShowFindIdSuccessModal(false)}
        />
      )}

      {/* 비밀번호 변경 성공 모달 */}
      {showPasswordSuccessModal && (
        <C_Modal
          type="C"
          title="비밀번호 바꾸기"
          content="인증이 완료되었습니다."
          confirmText="비밀번호 바꾸기"
          onConfirm={handlePasswordSuccessConfirm}
        />
      )}
    </div>
  );
}
