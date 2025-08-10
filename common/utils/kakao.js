export const initKakao = () => {
  if (!window.Kakao) return;
  if (!window.Kakao.isInitialized()) {
    window.Kakao.init('9c2d13e054748f9773170e41b7c5b422');
  }
};

export const kakaoLogin = () => {
  return new Promise((resolve, reject) => {
    window.Kakao.Auth.login({
      scope: 'profile_nickname,account_email',

      success: function (authObj) {
        console.log('로그인 성공:', authObj);
        window.Kakao.API.request({
          url: '/v2/user/me',
          success: function (res) {
            const kakaoAccount = res.kakao_account;
            console.log('사용자 정보:', kakaoAccount);
            resolve({
              id: res.id,
              email: kakaoAccount.email,
              nickname: kakaoAccount.profile?.nickname,
            });
          },
          fail: function (error) {
            console.error('사용자 정보 요청 실패', error);
            reject(error);
          },
        });
      },

      fail: function (err) {
        console.error('로그인 실패', err);
        reject(err);
      },
    });
  });
};
