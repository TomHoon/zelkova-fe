"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import C_SocialButton from "@/common/atom/C_SocialButton";
import C_PhoneVerification from "@/common/mocules/C_PhoneVerification";
import C_NavBar from "@/common/mocules/C_NavBar";
import styles from "@/styles/FindAccount.module.scss";

export default function FindAccount() {
  const router = useRouter();
  
  // 탭 상태 관리
  const [activeTab, setActiveTab] = useState("findId"); // "findId" 또는 "changePassword"
  
  // 비밀번호 변경 단계 관리 (1: 본인확인, 2: 비밀번호입력)
  const [passwordChangeStep, setPasswordChangeStep] = useState(1);
  
  // 아이디 찾기 폼 상태
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [phoneVerified, setPhoneVerified] = useState(false);
  
  // 비밀번호 변경 폼 상태
  const [userId, setUserId] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVerified, setPasswordVerified] = useState(false);

  // 네비게이션 콜백
  const handleNavClick = (item) => {
    console.log("Nav item clicked:", item);
  };

  // 탭 변경 처리
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setPasswordChangeStep(1); // 비밀번호 변경 단계 초기화
    // 폼 초기화
    setName("");
    setBirthdate("");
    setUserId("");
    setNewPassword("");
    setConfirmPassword("");
    setPhoneVerified(false);
    setPasswordVerified(false);
  };

  // 아이디 찾기 제출
  const handleFindIdSubmit = (e) => {
    e.preventDefault();

    if (!phoneVerified) {
    alert("휴대폰 인증이 필요합니다.");
    return;
  }
   
    console.log("아이디 찾기 요청", { name, birthdate });
    alert("아이디 찾기 요청이 완료되었습니다.");
  };

  // 비밀번호 변경 1단계 (본인확인) 제출
  const handlePasswordVerificationSubmit = (e) => {
    e.preventDefault();
    
    if (!phoneVerified) {
      alert("휴대폰 인증이 필요합니다.");
      return;
    }
    
    console.log("본인 확인 완료", { userId });
    setPasswordVerified(true);
    setPasswordChangeStep(2); // 2단계로 이동
  };

  // 비밀번호 변경 2단계 (새 비밀번호 입력) 제출
  const handleNewPasswordSubmit = (e) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    
    if (newPassword.length < 6) {
      alert("비밀번호는 6자 이상 입력해주세요.");
      return;
    }
    
    console.log("비밀번호 변경 완료", { userId, newPassword });
    alert("비밀번호가 성공적으로 변경되었습니다.");
    
    // 초기화
    setPasswordChangeStep(1);
    setActiveTab("findId");
    handleTabChange("findId");
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
                  label: "기관소개",
                  submenu: ["이용안내", "시설안내", "오시는길", "조직도"],
                },
                {
                  label: "공지사항",
                  submenu: ["공지사항", "가정통신문", "채용안내"],
                },
                { label: "후원&자원봉사", submenu: ["후원의손길", "자원봉사"] },
                { label: "커뮤니티" },
              ]}
              callback={handleNavClick}
            />
          </div>
        </div>
      </header>

      {/* 본문 영역 */}
      <main className={styles.container}>
        {/* 탭 메뉴 */}
        <div className={styles.tabContainer}>
          <button 
            className={`${styles.tab} ${activeTab === "findId" ? styles.active : ""}`}
            onClick={() => handleTabChange("findId")}
          >
            아이디 찾기
          </button>
          <button 
            className={`${styles.tab} ${activeTab === "changePassword" ? styles.active : ""}`}
            onClick={() => handleTabChange("changePassword")}
          >
            비밀번호 바꾸기
          </button>
        </div>

        {/* 아이디 찾기 탭 */}
        {activeTab === "findId" && (
          <div className={styles.tabContent}>
            <p className={styles.description}>가입하신 전화번호를 입력해주세요.</p>
            
            <form onSubmit={handleFindIdSubmit} className={styles.form}>
              {/* 휴대폰 인증 */}
              <div className={styles.phoneVerificationWrapper}>
                <C_PhoneVerification onVerified={() => setPhoneVerified(true)} />
              </div>
              
              {/* 확인 버튼 */}
              <button type="submit" className={styles.submitButton}>
                확인
              </button>
            </form>
          </div>
        )}

        {/* 비밀번호 바꾸기 탭 */}
        {activeTab === "changePassword" && (
          <div className={styles.tabContent}>
            {/* 1단계: 본인 확인 */}
            {passwordChangeStep === 1 && (
              <>
                <p className={styles.description}>가입하신 아이디, 전화번호를 입력해주세요.</p>
                
                <form onSubmit={handlePasswordVerificationSubmit} className={styles.form}>
                  {/* 아이디 입력 */}
                  <div className={styles.inputContainer}>
                    <input
                      type="text"
                      value={userId}
                      onChange={(e) => setUserId(e.target.value)}
                      placeholder="아이디"
                      className={styles.input}
                    />
                  </div>
                  
                  {/* 휴대폰 인증 */}
                  <div className={styles.phoneVerificationWrapper}>
                    <C_PhoneVerification onVerified={() => setPhoneVerified(true)} />
                  </div>
                  
                  {/* 확인 버튼 */}
                  <button type="submit" className={styles.submitButton}>
                    확인
                  </button>
                </form>
              </>
            )}

            {/* 2단계: 새 비밀번호 입력 */}
            {passwordChangeStep === 2 && (
              <>
                <p className={styles.description}>변경하실 비밀번호를 입력해주세요.</p>
                
                <form onSubmit={handleNewPasswordSubmit} className={styles.form}>
                  {/* 새 비밀번호 입력 */}
                  <div className={styles.inputContainer}>
                    <input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="비밀번호"
                      className={styles.input}
                    />
                  </div>
                  
                  {/* 비밀번호 확인 */}
                  <div className={styles.inputContainer}>
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="비밀번호 확인"
                      className={styles.input}
                    />
                  </div>
                  
                  {/* 확인 버튼 */}
                  <button type="submit" className={styles.submitButton}>
                    확인
                  </button>
                </form>
              </>
            )}
          </div>
        )}

        {/* 소셜 로그인 섹션 */}
        <div className={styles.socialSection}>
          <C_SocialButton
            onClickKakao={() => console.log("카카오 로그인")}
            onClickGoogle={() => console.log("구글 로그인")}
          />
        </div>
      </main>
    </div>
  );
}
