'use client';

import TabBarStyles from '@/styles/C_TabBar.module.scss';
import { useState } from 'react';

/**
 *
 * [공통탭바 - Args]
 *
 * - 탭내용리스트: 개수에 따라 너비 결정
 * - 콜백: 탭 클릭시 발동할 함수(없을 경우 동작없음)
 *
 *  */

export default function TabBar({ elementList = [], callback }) {
  const [activeIdx, setActiveIdx] = useState(0);

  const clickedThroughProxy = idx => {
    setActiveIdx(idx);

    if (typeof callback == 'function') {
      callback();
    }
  };

  return (
    <>
      <div className={TabBarStyles.container}>
        <ul>
          {elementList.map((item, idx) => (
            <li
              key={idx}
              onClick={() => clickedThroughProxy(idx)}
              className={idx == activeIdx ? TabBarStyles.active : ''}
            >
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
