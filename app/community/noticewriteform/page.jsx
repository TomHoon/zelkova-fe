"use client";

import C_PageTemplate from "@/common/templates/C_PageTemplate";
import C_WriteForm from "@/common/organism/C_WriteForm";


export default function NoticePage() {
    const handleTabClick = (label) => {
        console.log("탭 클릭됨:", label);
    };




    return (
        <C_PageTemplate
            title="커뮤니티" 
            tabBarCallback={handleTabClick}
            bannerImageUrl="/images/community.png"
        >
            <div className="writeformcontainer">
             <C_WriteForm title="커뮤니티 등록 및 수정"/>
             
            </div>
        </C_PageTemplate>

        
    );
}
