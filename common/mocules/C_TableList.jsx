'use client';

import React, { useState } from 'react';
import C_TableList from '@/styles/C_TableList.module.scss';
import C_Button from '@/common/atom/C_Button';
import C_Input from '@/common/atom/C_Input';

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
export default function TableList({ title, columns, data, searchable = false, onSearch }) {
  const [keyword, setKeyword] = useState('');
  const [selected, setSelected] = useState('제목');
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = () => {
    if (onSearch) onSearch(keyword);
  };

  const handleSelect = label => {
    setSelected(label);
    setIsOpen(false);
  };

  return (
    <div className={C_TableList.wrapper}>
      {title && <h2 className={C_TableList.title}>{title}</h2>}

      {searchable && (
        <div className={C_TableList.searchbar}>
          {/* 커스텀 셀렉트 */}
          <div className={C_TableList.selectWrapper}>
            <div className={C_TableList.selected} onClick={() => setIsOpen(!isOpen)}>
              {selected} ▼
            </div>
            {isOpen && (
              <ul className={C_TableList.optionList}>
                {['제목', '작성자'].map(label => (
                  <li key={label} onClick={() => handleSelect(label)}>
                    {label}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <C_Input
            value={keyword}
            onChange={e => setKeyword(e.target.value)}
            placeholder="검색어를 입력해주세요"
            placeholderSize="sm"
            placeholderColor="A"
            state="error"
            type="email"
            width="718px"
          />
          <C_Button title="검색" size="medium" type="C" />
        </div>
      )}

      <table className={C_TableList.table}>
        <thead>
          <tr>
            {columns.map(col => (
              <th key={col.key} style={{ width: col.width }}>
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {columns.map(col => (
                <td key={col.key}>{row[col.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
