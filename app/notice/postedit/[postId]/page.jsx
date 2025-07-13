'use client';

import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import C_PageTemplate from '@/common/templates/C_PageTemplate';
import C_WriteForm from '@/common/organism/C_WriteForm';

export default function NoticePostEdit() {
  const tabList = ['공지사항', '가정통신문', '채용안내'];
  const { postId } = useParams();
  const router = useRouter();

  const tabPathMap = {
    공지사항: '/notice/boardlist',
    가정통신문: '/familynotice/boardlist',
    채용안내: '/jopopening/boardlist',
  };

  const handleTabClick = label => {
    console.log('탭 클릭됨:', label);
    const path = tabPathMap[label];
    if (path) router.push(path);
  };

  return (
    <C_PageTemplate
      title="공지사항"
      tabBarElementList={tabList}
      tabBarCallback={handleTabClick}
      bannerImageUrl="/images/rectangle478.png"
    >
      <div className="writeformcontainer">
        <C_WriteForm boardId={1} title="공지사항 수정" mode="edit" postId={Number(postId)} />
      </div>
    </C_PageTemplate>
  );
}
