'use client';

import C_InputStyles from '@/styles/C_Input.module.scss';

const PlaceholderSizeMap = {
  sm: C_InputStyles.placeholderSm,
  md: C_InputStyles.placeholderMd,
};

const PlaceholderColorMap = {
  A: C_InputStyles.placeholderColorA,
  B: C_InputStyles.placeholderColorB,
};

const StateMap = {
  default: '',
  error: C_InputStyles.error,
  focused: C_InputStyles.focused,
};

/**
 *
 * [공통 인풋 - Args]
 *
 * - 크기: 높이 40px (고정), 간격은 width로 정의 (기본값 100%)
 *
 * - 테두리: state로 정의 [default | error | focused]
 *
 * - 플레이스홀더: size  [sm 14px | md 16px(기본값)]
 *               color [A(기본값) | B]
 *
 *  */

export default function C_Input({
  value,
  onChange,
  placeholder = '',
  width = '100%',
  placeholderSize = 'md',
  placeholderColor = 'A',
  state = 'default',
  type = 'text',
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`${C_InputStyles.input} ${PlaceholderSizeMap[placeholderSize]} ${PlaceholderColorMap[placeholderColor]} ${StateMap[state]}`}
      style={{ width }}
    />
  );
}
