"use client";

import { useState, useRef, useEffect } from "react";
import C_ModalStyles from "@/styles/C_Modal.module.scss";
import C_Button from "@/common/atom/C_Button";

/**
 *
 * [공통모달 - Args]
 *
 * - 타입: A, B (기본값: A)
 *   * - A: 확인 버튼만 있는 모달
 *   * - B: 취소, 확인 버튼이 있는 모달
 *
 * - 제목: 모달 상단에 표시될 제목 (기본값: 팝업창)
 *
 * - 본문: 모달에 표시될 내용 텍스트. 강조 텍스트는 [강조]강조할 텍스트[/강조] 형식으로 작성
 *   * - 예시: "안녕하세요, [강조]홍길동[/강조]님 환영합니다."
 *
 * - 확인버튼텍스트: 확인 버튼에 표시될 텍스트 (기본값: 확인)
 *
 * - 취소버튼텍스트: 취소 버튼에 표시될 텍스트 (B 타입일 때만 사용) (기본값: 취소)
 *
 * - 확인함수: 확인 버튼 클릭 시 실행될 함수
 *
 * - 취소함수: 취소 버튼 클릭 시 실행될 함수 (B 타입일 때만 사용)
 *
 */

export default function C_Modal({
  type = "A",
  title = "모달창",
  content = "",
  confirmText = "확인",
  cancelText = "취소",
  onConfirm,
  onCancel,
  isStatic = false, // 실제로 작업할땐 제외하기
}) {
  const [isOpen, setIsOpen] = useState(true);
  const [needsScroll, setNeedsScroll] = useState(false);
  const contentRef = useRef(null);

  // 내용 높이에 따라 스크롤 필요 여부 결정
  useEffect(() => {
    if (contentRef.current) {
      // 현재 컨텐츠 높이가 max-height(80px)를 초과하는지 체크
      const hasOverflow = contentRef.current.scrollHeight > 80;
      setNeedsScroll(hasOverflow);
      
      // 디버깅 정보 출력
      console.log("Content Height:", contentRef.current.scrollHeight);
      console.log("Needs Scroll:", hasOverflow);
    }
  }, [content]);

  const handleConfirmClick = () => {
    if (onConfirm) {
      onConfirm();
    }
    setIsOpen(false);
  };

  const handleCancelClick = () => {
    if (onCancel) {
      onCancel();
    }
    setIsOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  // 본문 텍스트 파싱 함수
  const parseContent = () => {
    if (!content) return [];
    
    const regex = /\[b\](.*?)\[\/b\]/g;
    let lastIndex = 0;
    const elements = [];
    let match;
    
    while ((match = regex.exec(content)) !== null) {
      // 강조 텍스트 앞에 있는 일반 텍스트 추가
      if (match.index > lastIndex) {
        elements.push(
          <span key={`normal-${lastIndex}`} className={C_ModalStyles.normalText}>
            {content.substring(lastIndex, match.index)}
          </span>
        );
      }
      
      // 강조 텍스트 추가
      elements.push(
        <span key={`emphasis-${match.index}`} className={C_ModalStyles.emphasisText}>
          {match[1]}
        </span>
      );
      
      lastIndex = regex.lastIndex;
    }
    
    // 마지막 강조 텍스트 이후의 일반 텍스트 추가
    if (lastIndex < content.length) {
      elements.push(
        <span key={`normal-${lastIndex}`} className={C_ModalStyles.normalText}>
          {content.substring(lastIndex)}
        </span>
      );
    }
    
    return elements;
  };

  if (!isOpen && !isStatic) return null; // 실제로 사용할때는 && !isStatic 빼기

// 실제로 사용할때는 아래 코드 사용
//   return (
//     <div 
//       className={C_ModalStyles.overlay}
//       onClick={handleOverlayClick}
//     >
//       <div className={C_ModalStyles.modalContainer}>
//         <div className={C_ModalStyles.modalHeader}>
//           <h3 className={C_ModalStyles.modalTitle}>{title}</h3>
//         </div>
//         <div 
//           ref={contentRef} // 스크롤 필요 여부 감지를 위한 ref
//           className={`${C_ModalStyles.modalBody} ${needsScroll ? C_ModalStyles.hasScroll : ""}`} // 내용이 많을 때 스크롤 표시
//         >
//           <p>{parseContent()}</p> {/* 강조 텍스트 파싱 적용 */}
//         </div>
//         <div className={`${C_ModalStyles.modalFooter} ${type === "B" ? C_ModalStyles.twoButtons : ""}`}>
//           {type === "B" && ( // B타입일 때만 취소 버튼 표시
//             <C_Button 
//               size="large" 
//               type="A" // 테두리 있는 스타일
//               title={cancelText} // 전달받은 취소 버튼 텍스트
//               onClick={handleCancelClick} // 취소 버튼 클릭 처리
//             />
//           )}
//           <C_Button 
//             size="large" 
//             type={type === "B" ? "B" : "A"} // B 타입에서는 채워진 스타일, A 타입에서는 테두리 스타일
//             title={confirmText} // 전달받은 확인 버튼 텍스트
//             onClick={handleConfirmClick} // 확인 버튼 클릭 처리
//           />
//         </div>
//       </div>
//     </div>
//   );
// }


// 모달 컨텐츠
  const modalContent = (
    <div className={`${C_ModalStyles.modalContainer} ${isStatic ? C_ModalStyles.staticModal : ""}`}>
      <div className={C_ModalStyles.modalHeader}>
        <h3 className={C_ModalStyles.modalTitle}>{title}</h3>
      </div>
      <div 
        ref={contentRef} // 스크롤 필요 여부 감지를 위한 ref
        className={`${C_ModalStyles.modalBody} ${needsScroll ? C_ModalStyles.hasScroll : ""}`} // 조건부 클래스 추가
      >
        <p>{parseContent()}</p>
      </div>
      <div className={`${C_ModalStyles.modalFooter} ${type === "B" ? C_ModalStyles.twoButtons : ""}`}>
        {type === "B" && ( // 모달 B 타입에만 표시 (취소버튼)
          <C_Button 
            size="large" 
            type="A" // 테두리 타입 버튼 사용
            title={cancelText} // props에서 전달받은 cancelText
            onClick={handleCancelClick} // 버튼 클릭 시 실행될 함수
          />
        )}
        <C_Button // 모달에 모두 들어감 (확인버튼)
        size="large" 
        type={type === "B" ? "B" : "A"} // B에서는 B스타일 A에서는 A스타일
        title={confirmText} // props에서 전달받은 cancelText
        onClick={handleConfirmClick} // 버튼 클릭 시 실행될 함수
        />
      </div>
    </div>
  );

  // 정적 모드일 경우 오버레이 없이 모달 컨텐츠만 반환
  if (isStatic) {
    return modalContent;
  }

  // 동적 모드일 경우 오버레이와 함께 모달 반환
  return (
    <div 
      className={C_ModalStyles.overlay}
      onClick={handleOverlayClick}
    >
      {modalContent}
    </div>
  );
  // 위 코드 전부 isStatic 지울때 다 지우고 주석인 부분만 나타내면 됨.
}