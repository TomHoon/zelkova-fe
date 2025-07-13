'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import C_Button from '@/common/atom/C_Button';
import C_WriteFromStyles from '@/styles/C_WriteFromStyles.module.scss';
import { apiFetchWithToken } from '@/common/utils/ApiClient';

export default function C_WriteForm({ boardId, title = '글작성', mode = 'create', postId = null }) {
  function getBoardPath(boardId) {
    switch (boardId) {
      case 1:
        return 'notice';
      case 2:
        return 'jopopening';
      case 3:
        return 'familynotice';
      default:
        return 'notice';
    }
  }
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    status: '공개',
  });

  const [nickname, setNickname] = useState('');
  const nowDate = new Date().toISOString().slice(0, 10);

  // 작성자 닉네임 불러오기
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const res = await apiFetchWithToken('http://localhost:8080/api/v1/member/me');
        setNickname(res.nickname);
      } catch (err) {
        console.error('유저 정보 불러오기 실패', err);
        setNickname('알 수 없음');
      }
    };
    fetchUserInfo();
  }, []);

  // 수정 모드일 때 기존 글 데이터 불러오기
  useEffect(() => {
    if (mode === 'edit' && postId) {
      const fetchPost = async () => {
        try {
          const res = await apiFetchWithToken(`http://localhost:8080/api/v1/post/detail/${postId}`);
          console.log('받은 응답 전체:', res);

          const post = res?.data ?? res;

          setFormData({
            title: post.title ?? '',
            content: post.content ?? '',
            status: post.status ?? '공개',
          });
        } catch (err) {
          console.error('글 불러오기 실패', err);
          alert('글을 불러오지 못했습니다.');
        }
      };
      fetchPost();
    }
  }, [mode, postId]);

  // 폼 변경 핸들러
  const handleChange = e => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  // 등록 or 수정 요청
  const handleSubmit = async () => {
    if (!formData.title.trim() || !formData.content.trim()) {
      alert('제목과 내용을 모두 입력해주세요.');
      return;
    }

    const payload = {
      postId,
      boardId,
      title: formData.title,
      content: formData.content,
      status: formData.status,
    };

    const url =
      mode === 'edit'
        ? `http://localhost:8080/api/v1/post/edit`
        : 'http://localhost:8080/api/v1/post/write';

    const method = mode === 'edit' ? 'PUT' : 'POST';

    try {
      await apiFetchWithToken(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      alert(mode === 'edit' ? '글이 수정되었습니다.' : '글이 등록되었습니다.');
      const path = `/${getBoardPath(boardId)}/boardlist`;
      router.push(path);
    } catch (err) {
      console.error(`${mode === 'edit' ? '수정' : '등록'} 실패:`, err);
      alert(err.message || '처리 중 오류 발생');
    }
  };

  return (
    <div className={C_WriteFromStyles.wrapper}>
      <h2 className={C_WriteFromStyles.title}>{title}</h2>

      <div className={C_WriteFromStyles.rowInline}>
        <label htmlFor="title">제목</label>
        <input
          id="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          className={C_WriteFromStyles.inputTitle}
        />
      </div>

      <div className={C_WriteFromStyles.rowGroup}>
        <div className={C_WriteFromStyles.rowInline}>
          <label htmlFor="writer">작성자</label>
          <input
            id="writer"
            type="text"
            value={nickname}
            readOnly
            className={C_WriteFromStyles.inputMeta}
          />
        </div>
        <div className={C_WriteFromStyles.rowInline}>
          <label htmlFor="createdAt">작성일</label>
          <input
            id="createdAt"
            type="text"
            value={nowDate}
            readOnly
            className={C_WriteFromStyles.inputMeta}
          />
        </div>
      </div>

      <div className={C_WriteFromStyles.rowGroup}>
        <div className={C_WriteFromStyles.rowInline}>
          <label htmlFor="status">게시 여부</label>
          <select
            id="status"
            value={formData.status}
            onChange={handleChange}
            className={C_WriteFromStyles.inputMeta}
          >
            <option value="공개">공개</option>
            <option value="비공개">비공개</option>
          </select>
        </div>
        <div className={C_WriteFromStyles.rowInline}>
          <label htmlFor="updatedAt">수정일</label>
          <input
            id="updatedAt"
            type="text"
            value={nowDate}
            readOnly
            className={C_WriteFromStyles.inputMeta}
          />
        </div>
      </div>

      <div className={C_WriteFromStyles.row}>
        <label htmlFor="content">내용 작성</label>
        <textarea
          id="content"
          value={formData.content}
          onChange={handleChange}
          className={C_WriteFromStyles.textarea}
        />
      </div>

      <div className={C_WriteFromStyles.footerButtons}>
        <C_Button title="취소" size="medium" type="A" onClick={() => router.push('../boardlist')} />
        <C_Button title="등록" size="medium" type="B" onClick={handleSubmit} />
      </div>
    </div>
  );
}
