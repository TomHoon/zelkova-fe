'use client';

import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import styles from '@/styles/C_PostDetailView.module.scss';
import C_Button from '@/common/atom/C_Button';

export default function C_PostDetailView({
  postId,
  title,
  content,
  createdAt,
  author,
  children,
  postList = [],
  images = [],
}) {
  const router = useRouter();

  const handleClickList = () => {
    router.push('../boardlist');
  };
  const handleEdit = () => {
    router.push(`../postedit/${postId}`);
  };

  const formatDate = dateStr => {
    const date = new Date(dateStr);
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const hh = String(date.getHours()).padStart(2, '0');
    const min = String(date.getMinutes()).padStart(2, '0');
    return `${yyyy}.${mm}.${dd} ${hh}:${min}`;
  };

  return (
    <section className={styles.postDetailView}>
      {/* 상단 초록색 헤더 */}
      <div className={styles.headerBar}>
        <span className={styles.title}>{title}</span>
        <div className={styles.meta}>
          <span>{author}</span>
          <span>{formatDate(createdAt)}</span>
        </div>
      </div>

      {/* 본문 영역 */}
      <div className={styles.content}>
        <div className={styles.innerContent}>
          <span className={styles.contentTitle}>{title}</span>

          {/* 첨부 이미지 영역 (있을 때만 표시) */}
          {images.length > 0 && (
            <div className={styles.imageBlock}>
              {images.map((src, idx) => (
                <img key={idx} src={src} alt={`첨부이미지${idx + 1}`} />
              ))}
            </div>
          )}

          <div
            className={`${styles.contentArea} toastui-editor-contents`}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>

      {/* 댓글 영역 */}
      <div className={styles.commentArea}>
        <div className={styles.innerCommnetArea}>{children}</div>
      </div>

      {/* 이전/다음 글 목록 */}
      {postList && (
        <div className={styles.postNavigation}>
          {postList.map(post => (
            <div key={post.id} className={styles.row} onClick={() => router.push(`./${post.id}`)}>
              <span className={styles.index}>{post.id}</span>
              <span className={styles.title}>{post.title}</span>
              <span className={styles.date}>{formatDate(post.createdAt)}</span>
            </div>
          ))}
        </div>
      )}
      {/* 하단 버튼 */}
      <div className={styles.footerBtn}>
        <C_Button type="A" size="wide" title="수정" onClick={handleEdit} />
        <C_Button type="B" size="wide" title="목록" onClick={handleClickList} />
      </div>
    </section>
  );
}
