"use client";

import C_SocialButton from "@/styles/C_SoicalButton.module.scss";

/**
 * [소셜 로그인 버튼]
 *
 * - onClickKakao: 카카오 버튼 클릭
 * - onClickGoogle: 구글 버튼 클릭
 * - onClickSignup: 회원가입 클릭
 * - onClickFind: 아이디/비밀번호 찾기 클릭
 * - onClickContact: 문의하기 클릭
 */

export default function SocialButton({
  onClickKakao,
  onClickGoogle,
  onClickSignup,
  onClickFind,
  onClickContact,
}) {
  return (
    <div className={C_SocialButton.snswrapper}>
      <div className={C_SocialButton.divider}>
        <span>다른 방법으로 로그인</span>
      </div>

      <div className={C_SocialButton.icon}>
        <button
          className={C_SocialButton.kakaoBtn}
          onClick={onClickKakao}
        ></button>
        <button
          className={C_SocialButton.googleBtn}
          onClick={onClickGoogle}
        ></button>
      </div>

      <div className={C_SocialButton.findbar}>
        <a onClick={onClickSignup}>회원가입</a>
        <a onClick={onClickFind}>아이디 찾기 / 비밀번호 바꾸기</a>
        <a onClick={onClickContact}>문의하기</a>
      </div>
    </div>
  );
}
