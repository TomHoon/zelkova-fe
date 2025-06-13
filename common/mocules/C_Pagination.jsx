'use client';
import { useState, useEffect } from 'react';
import s from '@/styles/C_Pagination.module.scss';

export default function C_Pagination({
  currentPage = 1,
  totalPages = 10,
  displayPageCount = 10,
  onPageChange = () => {},
}) {
  const [current, setCurrent] = useState(currentPage);

  // 페이지 범위 계산
  const getPages = () => {
    const start = Math.floor((current - 1) / displayPageCount) * displayPageCount + 1;
    const end = Math.min(start + displayPageCount - 1, totalPages);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  // 페이지 변경 핸들러
  const changePage = page => {
    if (page < 1 || page > totalPages) return;
    setCurrent(page);
    onPageChange(page);
  };

  // props로 현재 페이지가 변경될 때 상태 업데이트
  useEffect(() => setCurrent(currentPage), [currentPage]);

  return (
    <div className={s.pagination}>
      {/* 왼쪽 화살표 */}
      <div className={s.navGroup}>
        <button
          className={`${s.pageButton} ${s.navButton}`}
          onClick={() => changePage(1)}
          disabled={current === 1}
          aria-label="첫 페이지"
        >
          <span>&laquo;</span>
        </button>
        <button
          className={`${s.pageButton} ${s.navButton}`}
          onClick={() => changePage(current - 1)}
          disabled={current === 1}
          aria-label="이전 페이지"
        >
          <span>&lsaquo;</span>
        </button>
      </div>

      {/* 페이지 번호 */}
      <div className={s.pageGroup}>
        {getPages().map(page => (
          <button
            key={page}
            className={`${s.pageButton} ${current === page ? s.active : ''}`}
            onClick={() => changePage(page)}
          >
            {page}
          </button>
        ))}
      </div>

      {/* 오른쪽 화살표 */}
      <div className={s.navGroup}>
        <button
          className={`${s.pageButton} ${s.navButton}`}
          onClick={() => changePage(current + 1)}
          disabled={current === totalPages}
          aria-label="다음 페이지"
        >
          <span>&rsaquo;</span>
        </button>
        <button
          className={`${s.pageButton} ${s.navButton}`}
          onClick={() => changePage(totalPages)}
          disabled={current === totalPages}
          aria-label="마지막 페이지"
        >
          <span>&raquo;</span>
        </button>
      </div>
    </div>
  );
}
