'use client';

import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

import C_PageTemplate from '@/common/templates/C_PageTemplate';
import C_WriteForm from '@/common/organism/C_WriteForm';

export default function VolunteerNoticePage() {
  const tabList = ['후원의손길', '자원봉사'];
  const searchParams = useSearchParams();
  const router = useRouter();
  const mode = searchParams.get('mode') || 'create';
  const postId = searchParams.get('postId');

  const tabPathMap = {
    후원의손길: '/support/boardlist',
    자원봉사: '/volunteer/boardlist',
  };
  const handleTabClick = label => {
    console.log('탭 클릭됨:', label);
    const path = tabPathMap[label];
    if (path) router.push(path);
  };
  return (
    <C_PageTemplate
      title="후원&자원봉사"
      tabBarElementList={tabList}
      tabBarCallback={handleTabClick}
      bannerImageUrl="/images/supportimg.png"
    >
      <div className="writeformcontainer">
        <C_WriteForm
          boardId={5}
          title={mode === 'edit' ? '자원봉사 수정' : '자원봉사 등록'}
          mode={mode}
          postId={postId}
        />
      </div>
    </C_PageTemplate>
  );
}
