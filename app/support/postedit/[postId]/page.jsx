'use client';

import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import C_PageTemplate from '@/common/templates/C_PageTemplate';
import C_WriteForm from '@/common/organism/C_WriteForm';

export default function NoticePostEdit() {
  const tabList = ['후원의손길', '자원봉사'];
  const { postId } = useParams();
  const router = useRouter();

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
      title="후원의손길"
      tabBarElementList={tabList}
      tabBarCallback={handleTabClick}
      bannerImageUrl="/images/rectangle478.png"
    >
      <div className="writeformcontainer">
        <C_WriteForm boardId={4} title="후원의손길 수정" mode="edit" postId={Number(postId)} />
      </div>
    </C_PageTemplate>
  );
}
