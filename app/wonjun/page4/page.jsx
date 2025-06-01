"use client";

import C_PageTemplate from "@/common/templates/C_PageTemplate";
import C_SectionContainer from "@/common/mocules/C_SectionContainer";

export default function TestPage() {
    const handleTabClick = (label) => {
        console.log("탭 클릭됨:", label);
    };

    const tabList = ["이용안내", "시설안내", "오시는 길", "조직도"];

    return (
        <C_PageTemplate
            title="시설안내" 
            tabBarElementList={tabList}
            tabBarCallback={handleTabClick}
            bannerImageUrl="https://media.istockphoto.com/id/1317323736/ko/%EC%82%AC%EC%A7%84/%EB%82%98%EB%AC%B4-%EB%B0%A9%ED%96%A5%EC%9C%BC%EB%A1%9C-%ED%95%98%EB%8A%98%EB%A1%9C-%EB%B0%94%EB%9D%BC%EB%B3%B4%EB%8A%94-%EA%B2%BD%EC%B9%98.jpg?s=612x612&w=0&k=20&c=0xTghmMTXJ5ITCZ-LKTABbaPIK_1kWNf0FSFl_GL_7I="
        >
            <C_SectionContainer title="느티나무마을 조직도">
                <p>ㅇㅇ</p>
            </C_SectionContainer>
                        
        </C_PageTemplate>
    );
}
