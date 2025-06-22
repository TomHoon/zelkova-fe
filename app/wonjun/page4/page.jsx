'use client';

import C_PageTemplate from '@/common/templates/C_PageTemplate';
import C_SectionContainer from '@/common/mocules/C_SectionContainer';
import styles from '@/styles/P_OrganizationPage.module.scss';
import Image from 'next/image';

export default function TestPage() {
  const handleTabClick = label => {
    console.log('탭 클릭됨:', label);
  };

  const tabList = ['이용안내', '시설안내', '오시는 길', '조직도'];

  return (
    <C_PageTemplate
      title="시설안내"
      tabBarElementList={tabList}
      tabBarCallback={handleTabClick}
      bannerImageUrl="/images/OrganizationBackground.jpg"
    >
      <C_SectionContainer title="느티나무마을 조직도">
        <div className={styles.imgWrap}>
          <Image
            src="/images/Organization.png"
            alt="이용문의"
            width={780}
            height={700}
            quality={100}
          />
        </div>
      </C_SectionContainer>
    </C_PageTemplate>
  );
}
