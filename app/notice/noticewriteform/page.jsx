'use client';

import C_PageTemplate from '@/common/templates/C_PageTemplate';
import C_WriteForm from '@/common/organism/C_WriteForm';

export default function NoticePage() {
  const handleTabClick = label => {
    console.log('탭 클릭됨:', label);
  };

  const tabList = ['공지사항', '가정통신문', '채용안내'];

  const columns = [
    { label: 'No', key: 'no', width: '10%' },
    { label: 'Title', key: 'title', width: '70%' },
    { label: 'Date', key: 'date', width: '20%' },
  ];

  const data = Array.from({ length: 10 }, (_, i) => ({
    no: 10,
    title: 'Lorem ipsum dolor sit amet consectetur.',
    date: '2000.00.00',
  }));

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
      title="공지사항"
      tabBarElementList={tabList}
      tabBarCallback={handleTabClick}
      bannerImageUrl="/images/rectangle478.png"
    >
      <div className="writeformcontainer">
        <C_WriteForm title="공지사항 등록 및 수정" />
      </div>
    </C_PageTemplate>
  );
}
