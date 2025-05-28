"use client";

import C_Button from "@/common/atom/C_Button";
import C_TabBar from "@/common/mocules/C_TabBar";
import C_Modal from "@/common/mocules/C_Modal";
import C_DesignStyles from "@/styles/C_Desgin.module.scss";

export default function App() {
  const cb = () => {
    console.log("callback 실행");
  };

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
            <C_Modal
              type="A"
              title="제목"
              content="모달 기본형태 입니다."
              confirmText="확인"
              //onConfirm={modalConfirm} // 확인 동작
              isStatic={true} // UI용 prop 실제 사용할때는 뺄 것
            />

            <h3>타입 B 모달</h3>
            <C_Modal
              type="B"
              title="제목"
              content={`네 모달창입니다.
[b]1~3줄만 쓰는 걸 추천합니다.[/b]
그게 이쁘거든요
스크롤로 해두긴 했지만?
ㅎ..
`}
              confirmText="등록"
              cancelText="취소"
              //onConfirm={modalConfirm} // 등록 동작
              //onCancel={modalCancel} // 취소 동작
              isStatic={true} // UI용 prop 실제 사용할때는 뺄 것
            />

          </div>
        </div>
      </div>
  );
}
