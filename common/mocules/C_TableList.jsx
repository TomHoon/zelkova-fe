"use client";

import React, { useState } from "react";
import C_TableList from "@/styles/C_TableList.module.scss";
import C_Button from "@/common/atom/C_Button";
import C_Input from "@/common/atom/C_Input";

/**
 * [공통 테이블 리스트 컴포넌트 - <TableList />]
 *
 * - 제목 표시 (title)
 * - 컬럼 배열 정의 (columns: [{ label, key, width }])
 * - 데이터 배열 표시 (data: [{ key: value }])
 * - 검색기능 유무 설정 (searchable: true/false)
 * - 검색 실행 함수 (onSearch: keyword => void)
 * 
 * 예시:
 * <TableList
 *   title="공지사항"
 *   columns={[{ label: "제목", key: "title" }]}
 *   data={[{ title: "테스트입니다" }]}
 *   searchable={true}
 *   onSearch={(keyword) => console.log(keyword)}
 * />
 */
export default function TableList({
  title,         // 테이블 상단 제목
  columns,       // 테이블 컬럼 구성 (label, key, width)
  data,          // 테이블 본문 데이터 (key값 기준 렌더링)
  searchable = false, // 검색바 출력 여부
  onSearch       // 검색 실행 함수
}) {
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    if (onSearch) onSearch(keyword);
  };

  return (
    <div className={C_TableList.wrapper}>
      {title && <h2 className={C_TableList.title}>{title}</h2>}

      {searchable && (
        <div className={C_TableList.searchbar}>
          <select className={C_TableList.select}>
            <option value="title">제목</option>
          </select>
          <C_Input
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  placeholder="검색어를 입력해주세요"
                  placeholderSize="sm"
                  placeholderColor="A"
                  state="error"
                  type="email"
                  width="718px"
                />
          <C_Button title="검색" size="medium" type="C"/>
        </div>
      )}


      <table className={C_TableList.table}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key} style={{ width: col.width }}>
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {columns.map((col) => (
                <td key={col.key}>{row[col.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
