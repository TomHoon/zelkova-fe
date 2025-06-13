'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import C_SocialButton from '@/common/atom/C_SocialButton';
import C_PhoneVerification from '@/common/mocules/C_PhoneVerification';
import C_NavBar from '@/common/mocules/C_NavBar';
import C_Modal from '@/common/mocules/C_Modal'; // 모달 컴포넌트 임포트 추가
import styles from '@/styles/Signup.module.scss';

export default function Signup() {
  const router = useRouter();

  // 회원가입 폼 상태 관리
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [email, setEmail] = useState('');
  const [memo, setMemo] = useState('');
  const [phoneVerified, setPhoneVerified] = useState(false);

  // 에러 상태 관리
  const [passwordConfirmError, setPasswordConfirmError] = useState(false);
  const [idDuplicationChecked, setIdDuplicationChecked] = useState(false);
  const [idError, setIdError] = useState('');
  const [idSuccess, setIdSuccess] = useState('');

  // 모달 상태 추가
  const [showSignupSuccessModal, setShowSignupSuccessModal] = useState(false);

  // 네비게이션 콜백
  const handleNavClick = item => {
    console.log('Nav item clicked:', item);
  };

  // 아이디 중복 확인 처리
  const checkIdDuplication = () => {
    if (!userId) {
      setIdError('아이디를 입력해주세요.');
      return;
    }

    // 여기서 실제로는 API 호출을 통해 중복 확인을 수행
    console.log('아이디 중복 확인:', userId);

    // 임시로 중복 확인 성공으로 처리
    setIdDuplicationChecked(true);
    setIdError('');
    setIdSuccess('사용 가능한 아이디입니다.');
  };

  // 아이디 입력값 변경시 중복 확인 상태 초기화
  const handleIdChange = e => {
    setUserId(e.target.value);
    setIdDuplicationChecked(false);
    setIdError('');
    setIdSuccess('');
  };

  // 비밀번호 확인 처리
  const handlePasswordConfirmChange = e => {
    const value = e.target.value;
    setPasswordConfirm(value);
    setPasswordConfirmError(password !== value);
  };

  // 회원가입 폼 제출 처리
  const handleSubmit = e => {
    e.preventDefault();

    // 유효성 검사
    if (!idDuplicationChecked) {
      setIdError('아이디 중복 확인이 필요합니다.');
      return;
    }

    if (password !== passwordConfirm) {
      setPasswordConfirmError(true);
      return;
    }

    if (!phoneVerified) {
      alert('휴대폰 인증이 필요합니다.');
      return;
    }

    // 회원가입 요청 처리
    console.log('회원가입 요청', { userId, password, name, birthdate, email, memo });

    // 회원가입 성공 모달 표시
    setShowSignupSuccessModal(true);
  };

  // 회원가입 성공 모달 확인 버튼 처리
  const handleSignupSuccessConfirm = () => {
    setShowSignupSuccessModal(false);
    // 로그인 페이지로 이동
    router.push('/login');
  };

  // 회원가입 성공 모달 취소 버튼 처리
  const handleSignupSuccessCancel = () => {
    setShowSignupSuccessModal(false);
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

      {/* 회원가입 본문 영역 */}
      <main className={styles.signupContainer}>
        <h1 className={styles.title}>회원가입</h1>

        <form onSubmit={handleSubmit} className={styles.signupForm}>
          {/* 1. 아이디 중복확인 그룹 */}
          <div className={styles.formGroup}>
            <div className={styles.inputContainer}>
              <div className={styles.inputWithButton}>
                <input
                  type="text"
                  value={userId}
                  onChange={handleIdChange}
                  placeholder="아이디"
                  className={`${styles.input} ${idError ? styles.error : ''} ${idSuccess ? styles.success : ''}`}
                />
                <button type="button" className={styles.primaryButton} onClick={checkIdDuplication}>
                  중복확인
                </button>
              </div>
              {idError && <div className={styles.errorText}>{idError}</div>}
              {idSuccess && <div className={styles.successText}>{idSuccess}</div>}
            </div>
          </div>

          {/* 2. 비밀번호 그룹 */}
          <div className={styles.formGroup}>
            <div className={styles.inputContainer}>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="비밀번호"
                className={styles.input}
              />
            </div>
            <div className={styles.inputContainer}>
              <input
                type="password"
                value={passwordConfirm}
                onChange={handlePasswordConfirmChange}
                placeholder="비밀번호 확인"
                className={`${styles.input} ${passwordConfirmError ? styles.error : ''}`}
              />
              {passwordConfirmError && (
                <div className={styles.errorText}>비밀번호가 일치하지 않습니다.</div>
              )}
            </div>
          </div>

          {/* 3. 개인정보 및 인증 그룹 */}
          <div className={styles.formGroup}>
            <div className={styles.inputContainer}>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="이름"
                className={styles.input}
              />
            </div>
            <div className={styles.inputContainer}>
              <input
                type="text"
                value={birthdate}
                onChange={e => setBirthdate(e.target.value)}
                placeholder="생년월일 (YYYY/MM/DD)"
                className={styles.input}
              />
            </div>
            <div className={styles.phoneVerificationWrapper}>
              <C_PhoneVerification onVerified={() => setPhoneVerified(true)} />
            </div>
          </div>

          {/* 4. 이메일 및 소개 그룹 */}
          <div className={styles.formGroup}>
            <div className={styles.inputContainer}>
              {/* 이메일 입력 - @ 기호로 분리된 두 개의 입력 필드 */}
              <div className={styles.emailInputWrapper}>
                <input
                  type="text"
                  value={email.split('@')[0] || ''} // @ 앞부분만 추출
                  onChange={e => {
                    // 이메일 앞부분 변경 시 뒷부분 유지하면서 합치기
                    const emailParts = email.split('@');
                    setEmail(e.target.value + (emailParts[1] ? '@' + emailParts[1] : ''));
                  }}
                  placeholder="이메일 (선택사항)"
                  className={styles.emailInput}
                />
                <span className={styles.atSymbol}>@</span>
                <input
                  type="text"
                  value={email.split('@')[1] || ''} // @ 뒷부분만 추출
                  onChange={e => {
                    // 이메일 뒷부분 변경 시 앞부분 유지하면서 합치기
                    const emailParts = email.split('@');
                    setEmail((emailParts[0] || '') + '@' + e.target.value);
                  }}
                  placeholder="이메일 (선택사항)"
                  className={styles.emailInput}
                />
              </div>
            </div>

            <div className={styles.inputContainer}>
              {/* 소개글 입력 - 여러 줄 텍스트 입력 가능 */}
              <textarea
                value={memo}
                onChange={e => setMemo(e.target.value)}
                placeholder="학생 소개를 간단히 작성해주세요"
                className={styles.textarea}
                rows={4} // 기본 4줄 높이
              />
            </div>
          </div>

          {/* 5. 확인 버튼 그룹 */}
          <div className={styles.formGroup}>
            <div className={styles.submitBtnWrapper}>
              <button type="submit" className={styles.submitButton}>
                확인
              </button>
            </div>
          </div>
        </form>

        {/* 소셜 로그인 버튼 */}
        <div className={styles.socialLoginWrapper}>
          <C_SocialButton
            onClickKakao={() => console.log('카카오 회원가입')}
            onClickGoogle={() => console.log('구글 회원가입')}
          />
        </div>
      </main>

      {/* 회원가입 성공 모달 */}
      {showSignupSuccessModal && (
        <C_Modal
          type="B"
          title="회원가입"
          content="느티나무 복지관의 오신 것을 환영합니다."
          confirmText="로그인"
          cancelText="취소"
          onConfirm={handleSignupSuccessConfirm}
          onCancel={handleSignupSuccessCancel}
        />
      )}
    </div>
  );
}
