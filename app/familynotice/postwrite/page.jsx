'use client';

import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import C_PageTemplate from '@/common/templates/C_PageTemplate';
import C_WriteForm from '@/common/organism/C_WriteForm';

export default function FamilyWriteForm() {
  const tabList = ['공지사항', '가정통신문', '채용안내'];
  const searchParams = useSearchParams();

  const mode = searchParams.get('mode') || 'create';
  const postId = searchParams.get('postId');

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
      title="가정통신문"
      tabBarElementList={tabList}
      tabBarCallback={handleTabClick}
      bannerImageUrl="/images/backimg.png"
    >
      <div className="writeformcontainer">
        <C_WriteForm
          boardId={3}
          title={mode === 'edit' ? '가정통신문 수정' : '가정통신문 등록'}
          mode={mode}
          postId={postId}
        />
      </div>
    </C_PageTemplate>
  );
}
