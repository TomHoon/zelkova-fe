'use client';

import C_ButtonStyles from '@/styles/C_Button.module.scss';

const SizeMap = {
  attach: C_ButtonStyles.attach,
  nav: C_ButtonStyles.nav,
  small: C_ButtonStyles.small,
  medium: C_ButtonStyles.medium,
  wide: C_ButtonStyles.wide,
  large: C_ButtonStyles.large,
  xlarge: C_ButtonStyles.xlarge,
};

const ColorTypeMap = {
  A: C_ButtonStyles.A,
  B: C_ButtonStyles.B,
  C: C_ButtonStyles.C,
};

/**
 * [공통버튼 - Args]
 *
 * - 크기: attach, nav, small, medium, wide, large, xlarge
 * - 컬러: A (white 배경 + green 테두리), B (green 배경 + white 텍스트), C (white 배경 + green 테두리 + green 텍스트)
 * - 글자: title (기본값 "버튼")
 *
 */
export default function C_Button({ size = 'medium', type = 'A', title = '버튼' }) {
  return (
    <button className={`${SizeMap[size]} ${ColorTypeMap[type]}`}>
      <span>{title}</span>
    </button>
  );
}
