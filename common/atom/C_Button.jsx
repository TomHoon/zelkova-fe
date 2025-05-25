"use client";

import C_ButtonStyles from "@/styles/C_Button.module.scss";

const SizeMap = {
  small: C_ButtonStyles.small,
  medium: C_ButtonStyles.medium,
  large: C_ButtonStyles.large,
};

const ColorTypeMap = {
  A: C_ButtonStyles.A,
  B: C_ButtonStyles.B,
};

/**
 *
 * [공통버튼 - Args]
 *
 * - 크기: small, medium(기본값), large
 *
 * - 컬러: A(기본값), B
 *  * - A: 글자색 black + 배경색 white + 테두리 green
 *  * - B: 글자색 white + 배경색 green + 테두리 none
 *
 * - 글자: 텍스트 (기본값: 버튼)
 *
 *  */

export default function C_Button_L({
  size = "medium",
  type = "A",
  title = "버튼",
}) {
  return (
    <>
      <button className={`${SizeMap[size]} ${ColorTypeMap[type]}`}>
        <span>{title}</span>
      </button>
    </>
  );
}
