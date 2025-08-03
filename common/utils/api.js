import axios from 'axios';

// Axios 인스턴스 생성
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

// 요청 인터셉터: 토큰 자동 주입
apiClient.interceptors.request.use(
  config => {
    const token = localStorage.getItem('accessToken');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  error => Promise.reject(error)
);

// 에러 공통 처리 함수
function handleAxiosError(err) {
  if (err.response?.data) {
    // 서버에서 온 에러 메시지 우선 사용
    throw err.response.data;
  }
  // 네트워크 에러 등
  throw { message: err.message || 'API 요청 실패' };
}

/**
 * 로그인 필요 없는 API 호출 함수
 * @param {string} url
 * @param {object} options { method, data, params, headers }
 * @returns response.data.data
 */
export async function apiFetch(url, options = {}) {
  try {
    const method = options.method || 'get';
    const response = await apiClient({
      url,
      method,
      data: options.data || null,
      params: options.params || null,
      headers: options.headers || {},
    });

    if (response.data.code !== 'SUCCESS') {
      throw { message: response.data.message || 'API 요청 실패', code: response.data.code };
    }

    return response.data.data;
  } catch (err) {
    handleAxiosError(err);
  }
}

/**
 * 로그인 필요 API 호출 함수
 * (토큰 없으면 에러 발생)
 */
export async function apiFetchWithToken(url, options = {}) {
  const token = localStorage.getItem('accessToken');
  if (!token) {
    throw { message: '토큰이 없습니다. 로그인 후 이용해주세요.', code: 'NO_TOKEN' };
  }
  // apiFetch가 axios + 토큰 포함 호출이므로 재사용
  return apiFetch(url, options);
}

// 회원가입
export const signUp = async data => {
  try {
    const res = await apiClient.post('/api/v1/member/join', data);
    return res.data;
  } catch (err) {
    handleAxiosError(err);
  }
};

// 로그인
export const login = async data => {
  try {
    const res = await apiClient.post('/api/v1/member/login', data);
    return res.data;
  } catch (err) {
    handleAxiosError(err);
  }
};

// 아이디 찾기
export const findId = async data => {
  try {
    const res = await apiClient.post('/api/v1/member/find/id', data);
    return res.data;
  } catch (err) {
    handleAxiosError(err);
  }
};

// 비밀번호 찾기
export const findPassword = async data => {
  try {
    const res = await apiClient.post('/api/v1/member/find/pw', data);
    return res.data;
  } catch (err) {
    handleAxiosError(err);
  }
};

// 카카오 로그인
export const loginWithKakao = async data => {
  try {
    const res = await apiClient.post('/api/v1/member/kakao-login', data);
    return res.data;
  } catch (err) {
    handleAxiosError(err);
  }
};
