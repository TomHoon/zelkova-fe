'use client';

import C_PageTemplate from '@/common/templates/C_PageTemplate';
import C_PostDetailView from '@/common/organisms/C_PostDetailView';
import C_CommentItem from '@/common/organisms/C_CommentItem';

export default function NoticePage() {
  const handleTabClick = label => {
    console.log('탭 클릭됨:', label);
  };

  const tabList = ['공지사항', '가정통신문', '채용안내'];

  const dummyPostList = [
    { id: 10, title: '이전글 제목입니다', createdAt: '2000.00.00' },
    { id: 8, title: '다음글 제목입니다', createdAt: '2000.00.00' },
  ];

  const dummyComments = [
    {
      username: '이시현',
      profileImg: '/images/google.png',
      content:
        '안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 ',
      date: '2024.12.25',
    },
    {
      username: '정현비',
      content: 'ㅎㅇㅎㅇ',
      date: '2024.12.25',
    },
  ];

  return (
    <C_PageTemplate
      title="채용안내"
      tabBarElementList={tabList}
      tabBarCallback={handleTabClick}
      bannerImageUrl="/images/jopbackimg.png"
    >
      <C_PostDetailView
        title="공지사항 제목"
        content="공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다."
        createdAt="2024.01.01"
        author="운영자"
        postList={dummyPostList}
      >
        <C_CommentItem comments={dummyComments} myProfile={'/images/tree.png'} />
      </C_PostDetailView>
    </C_PageTemplate>
  );
}
