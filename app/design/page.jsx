"use client";

import { useState } from "react";
import C_Button from "@/common/atom/C_Button";
import C_Input from "@/common/atom/C_Input";
import C_TabBar from "@/common/mocules/C_TabBar";
import C_Modal from "@/common/mocules/C_Modal";
import C_SectionContainer from "@/common/mocules/C_SectionContainer";
import C_PhoneVerification from "@/common/mocules/C_PhoneVerification";
import C_Pagination from "@/common/mocules/C_Pagination";
import C_DesignStyles from "@/styles/C_Design.module.scss";

export default function App() {
  const cb = () => {
    console.log("callback 실행");
  };

  const [errorInput, setErrorInput] = useState("");
  const [focusedInput, setFocusedInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [smallInput, setSmallInput] = useState("");


  return (
    <div className={C_DesignStyles.designContainer}>
      <h2>버튼 크기</h2>
      <C_Button title="small button" size="small" />
      <C_Button title="medium button" size="medium" />
      <C_Button title="large button" size="large" />

      <h2>버튼 타입</h2>
      <C_Button title="large A button" size="large" type="A" />
      <C_Button title="large B button" size="large" type="B" />

      <h2>탭바</h2>
      <div className={C_DesignStyles.tabSection}>
        <C_TabBar elementList={["시설안내", "조직도"]} callback={cb} />
      </div>

      <h2>모달</h2>
        <div className={C_DesignStyles.modalWrapper}>
          <div className={C_DesignStyles.modalItem}>

            <h3>타입 A 모달</h3>
            <C_Modal type="A" title="제목" content="모달 기본형태 입니다."
              confirmText="확인"
              //onConfirm={modalConfirm} // 확인 동작
              isStatic={true} // UI용 prop 실제 사용할때는 뺄 것
            />

            <h3>타입 B 모달</h3>
            <C_Modal type="B" title="제목"
              content={`네 모달창입니다.
[b]1~3줄만 쓰는 걸 추천합니다.[/b]
그게 이쁘거든요
스크롤로 해두긴 했지만?
ㅎ..
`}
              confirmText="등록" cancelText="취소"
              //onConfirm={modalConfirm} // 등록 동작
              //onCancel={modalCancel} // 취소 동작
              isStatic={true} // UI용 prop 실제 사용할때는 뺄 것
            />

          </div>
        </div>

        <h2>입력 필드</h2>
        <C_Input
        value={errorInput}
        onChange={(e) => setErrorInput(e.target.value)}
        placeholder="에러"
        state="error"
      />

      <C_Input
        value={dateInput}
        onChange={(e) => setDateInput(e.target.value)}
        width="200px"
        placeholder="날짜"          
        isDate={true}
      />

      <C_Input
        value={focusedInput}
        onChange={(e) => setFocusedInput(e.target.value)}
        placeholder="클릭 시"
        state="focused"
      />

      <C_Input
        value={smallInput}
        onChange={(e) => setSmallInput(e.target.value)}
        placeholder="작은 placeholder"
        size="sm"
      />

        <h2>휴대폰 인증</h2>
        <div className={C_DesignStyles.section}>
          <C_PhoneVerification />
        </div>
      

        <h2>페이지네이션</h2>
        <div className={C_DesignStyles.section}>
        <C_Pagination 
          // currentPage={currentPage}
          totalPages={10} 
          displayPageCount={10}
          // onPageChange={handlePageChange} 
        />

        <h2>섹션 컨테이너</h2>
        <C_SectionContainer title="공지사항">
          <div className={C_DesignStyles.demoContent}>
            <p>섹션 내용이 들어가는 영역입니다.</p>
          </div>
        </C_SectionContainer>

        <C_SectionContainer title="시설 안내">
          <div className={C_DesignStyles.demoContent}>
            <p>시설 안내 내용입니다.</p>
          </div>
        </C_SectionContainer>

      </div>
    </div>
  );
}
