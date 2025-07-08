// 로그인 필요 없는 API
export async function apiFetch(url, options = {}) {
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });

  let result = null;
  try {
    result = await response.json();
  } catch {
    const error = new Error(`응답 파싱 실패 (status: ${response.status})`);
    error.code = `HTTP_${response.status}`;
    throw error;
  }

  if (!response.ok) {
    const error = new Error(result?.message || `HTTP error: ${response.status}`);
    error.code = result?.code || `HTTP_${response.status}`;
    throw error;
  }

  if (result.code !== 'SUCCESS') {
    const error = new Error(result.message || 'API 요청 실패');
    error.code = result.code;
    throw error;
  }

  return result.data;
}

// 로그인 필요한 API
export async function apiFetchWithToken(url, options = {}) {
  const token = localStorage.getItem('accessToken');

  if (!token) {
    const error = new Error('토큰이 없습니다. 로그인 후 이용해주세요.');
    error.code = 'NO_TOKEN';
    throw error;
  }

  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      ...(options.headers || {}),
    },
  });

  let result = null;
  try {
    result = await response.json();
  } catch {
    const error = new Error(`응답 파싱 실패 (status: ${response.status})`);
    error.code = `HTTP_${response.status}`;
    throw error;
  }

  if (!response.ok) {
    const error = new Error(result?.message || `HTTP error: ${response.status}`);
    error.code = result?.code || `HTTP_${response.status}`;
    throw error;
  }

  if (result.code !== 'SUCCESS') {
    const error = new Error(result.message || 'API 요청 실패');
    error.code = result.code;
    throw error;
  }

  return result.data;
}
