'use client';

import C_PageTemplate from '@/common/templates/C_PageTemplate';
import C_WriteForm from '@/common/organism/C_WriteForm';

export default function NoticePage() {
  const handleTabClick = label => {
    console.log('탭 클릭됨:', label);
  };

  const tabList = ['공지사항', '가정통신문', '채용안내'];

  return (
    <C_PageTemplate
      title="채용안내"
      tabBarElementList={tabList}
      tabBarCallback={handleTabClick}
      bannerImageUrl="/images/jopbackimg.png"
    >
      <div className="writeformcontainer">
        <C_WriteForm title="채용안내 등록 및 수정" />
      </div>
    </C_PageTemplate>
  );
}
