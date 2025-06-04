"use client";

import C_Button from "@/common/atom/C_Button";
import C_WriteFromStyles from "@/styles/C_WriteFromStyles.module.scss";

/**
 * [공통 글 작성 폼 - C_WriteForm]
 *
 * - 제목, 작성자, 작성일, 수정일, 게시 여부, 본문 작성, 첨부파일, 등록/삭제/취소 버튼 포함
 * - 추후 공지사항/이벤트/문의답변 등 다양한 유형에 재사용 가능
 * - 기능 없이 UI 마크업 + 콘솔 콜백만 포함
 */

export default function C_WriteForm({title="글작성"}) {
  const handleCancel = () => console.log("취소 버튼 클릭됨");
  const handleDelete = () => console.log("삭제 버튼 클릭됨");
  const handleSubmit = () => console.log("등록 버튼 클릭됨");
  const handleAddFile = () => console.log("파일 추가 클릭됨");
  const handleRemoveFile = () => console.log("파일 삭제 클릭됨");

  return (
    <div className={C_WriteFromStyles.wrapper}>
      <h2 className={C_WriteFromStyles.title}>{title}</h2>

      <div className={C_WriteFromStyles.rowInline}>
        <label htmlFor="title">제목</label>
        <input id="title" type="text" className={C_WriteFromStyles.inputTitle} />
      </div>

      <div className={C_WriteFromStyles.rowGroup}>
        <div className={C_WriteFromStyles.rowInline}>
          <label htmlFor="writer">작성자</label>
          <input id="writer" type="text" className={C_WriteFromStyles.inputMeta} />
        </div>
        <div className={C_WriteFromStyles.rowInline}>
          <label htmlFor="createdAt">작성일</label>
          <input id="createdAt" type="text" className={C_WriteFromStyles.inputMeta} placeholder="0000-00-00" readOnly />
        </div>
      </div>

      <div className={C_WriteFromStyles.rowGroup}>
        <div className={C_WriteFromStyles.rowInline}>
          <label htmlFor="status">게시 여부</label>
          <select id="status" className={C_WriteFromStyles.inputMeta}>
            <option>공개</option>
            <option>비공개</option>
          </select>
        </div>
        <div className={C_WriteFromStyles.rowInline}>
          <label htmlFor="updatedAt">수정일</label>
          <input id="updatedAt" type="text" className={C_WriteFromStyles.inputMeta} placeholder="0000-00-00" readOnly />
        </div>
      </div>

      <div className={C_WriteFromStyles.row}>
        <label htmlFor="content">내용 작성</label>
        <textarea id="content" className={C_WriteFromStyles.textarea} />
      </div>

      <div className={C_WriteFromStyles.row}>
        <label>첨부파일</label>
        <div className={C_WriteFromStyles.fileBox}>
          <div className={C_WriteFromStyles.fileName}>
            <div>선택된 파일명</div>
            <div>선택된 파일명</div>
          </div>
          <div className={C_WriteFromStyles.fileActions}>
            <C_Button title="파일 삭제" size="attach" type="B" onClick={handleRemoveFile} />
            <C_Button title="파일 추가" size="attach" type="A" onClick={handleAddFile} />
          </div>
        </div>
      </div>

      <div className={C_WriteFromStyles.footerButtons}>
        <C_Button title="취소" size="medium" type="A" onClick={handleCancel} />
        <C_Button title="삭제" size="medium" type="B" onClick={handleDelete} />
        <C_Button title="등록" size="medium" type="C" onClick={handleSubmit} />
      </div>
    </div>
  );
}
