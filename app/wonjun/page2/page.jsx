'use client';

import C_PageTemplate from '@/common/templates/C_PageTemplate';
import C_SectionContainer from '@/common/mocules/C_SectionContainer';
import styles from '@/styles/P_FacilityGuide.module.scss';

export default function Page() {
  const handleTabClick = label => {
    console.log('탭 클릭됨:', label);
  };

  const tabList = ['이용안내', '시설안내', '오시는 길', '조직도'];

  const cards = [
    {
      title: '시설 이름',
      description:
        '저희 느티나무 마을은 장애인의 정서적 안녕을 위한 넓은 공원이 마련되어 있습니다.',
    },
    {
      title: '시설 사진 필요',
      description:
        '요게 세줄입니다 이게 그 간단한 설명 생각한 거라 세줄 정도로 작성해주심이 좋을 것 같습니다!',
    },
    {
      title: '타이틀',
      description: '기존 레이아웃보다 짧은 내용이라면 레이아웃 틀어질 경우 저에게 말씀 주시면',
    },
    {
      title: '타이틀',
      description: '세 줄 정도의 내용이 들어갈 예정입니다. 짤막한 글이라 함은 아무래도 관리자가',
    },
  ];

  return (
    <C_PageTemplate
      title="시설안내"
      tabBarElementList={tabList}
      tabBarCallback={handleTabClick}
      bannerImageUrl="https://media.istockphoto.com/id/1317323736/ko/%EC%82%AC%EC%A7%84/%EB%82%98%EB%AC%B4-%EB%B0%A9%ED%96%A5%EC%9C%BC%EB%A1%9C-%ED%95%98%EB%8A%98%EB%A1%9C-%EB%B0%94%EB%9D%BC%EB%B3%B4%EB%8A%94-%EA%B2%BD%EC%B9%98.jpg?s=612x612&w=0&k=20&c=0xTghmMTXJ5ITCZ-LKTABbaPIK_1kWNf0FSFl_GL_7I="
    >
      <C_SectionContainer title="느티나무마을의 시설">
        <div className={styles.facilitySection}>
          {cards.map((card, idx) => (
            <div className={styles.facilityCard} key={idx}>
              <img src="/images/clock.jpg" alt="시설 이미지" className={styles.facilityImg} />
              <div className={styles.facilityContent}>
                <h3 className={styles.facilityTitle}>{card.title}</h3>
                <p className={styles.facilityDesc}>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </C_SectionContainer>
    </C_PageTemplate>
  );
}
