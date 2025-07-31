'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import C_PageTemplate from '@/common/templates/C_PageTemplate';
import C_TableList from '@/common/mocules/C_TableList';

import C_Pagination from '@/common/mocules/C_Pagination';
import styles from '@/styles/C_Paginationwrap.module.scss';
import C_Button from '@/common/atom/C_Button';

export default function VolunteerNoticePage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const tabList = ['후원의손길', '자원봉사'];

  const columns = [
    { label: 'No', key: 'postId', width: '10%' },
    { label: 'Title', key: 'title', width: '60%' },
    { label: 'Writer', key: 'writerName', width: '15%' },
    { label: 'Date', key: 'createdAt', width: '15%' },
  ];

  // 게시글 목록 가져오기
  const fetchPostList = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/post/list');
      const result = await response.json();

      const filteredData = (result.data || []).filter(post => Number(post.boardId) === 5);

      setData(filteredData);
    } catch (error) {
      console.error('게시글 목록 조회 실패:', error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPostList();
  }, []);

  const tabPathMap = {
    자원봉사: '/volunteer/boardlist',
    후원의손길: '/support/boardlist',
  };
  const handleTabClick = label => {
    console.log('탭 클릭됨:', label);
    const path = tabPathMap[label];
    if (path) router.push(path);
  };
  const handleWriteClick = () => {
    router.push('/volunteer/postwrite');
  };

  return (
    <C_PageTemplate
      title="후원&자원봉사"
      tabBarElementList={tabList}
      tabBarCallback={handleTabClick}
      bannerImageUrl="/images/supportimg.png"
    >
      {loading ? (
        <p>로딩 중...</p>
      ) : (
        <C_TableList
          title="자원봉사"
          columns={columns}
          data={data}
          searchable={true}
          onSearch={keyword => console.log(keyword)}
        />
      )}
      <div className={styles.paginationWrapper}>
        <div className={styles.paginationCenter}>
          <C_Pagination totalPages={1} displayPageCount={10} />
        </div>
        <div className={styles.buttonWrapper}>
          <C_Button title="글쓰기" size="medium" type="C" onClick={handleWriteClick} />
        </div>
      </div>
    </C_PageTemplate>
  );
}
