"use client";

import C_PageTemplate from "@/common/templates/C_PageTemplate";
import C_WriteForm from "@/common/organism/C_WriteForm";


export default function NoticePage() {
    const handleTabClick = (label) => {
        console.log("탭 클릭됨:", label);
    };

    const tabList = ["후원의손길","자원봉사"];


    return (
        <C_PageTemplate

            title="후원&자원봉사" 
            tabBarElementList={tabList}
            tabBarCallback={handleTabClick}
            bannerImageUrl="/images/supportimg.png"
        >
            <div className="writeformcontainer">
             <C_WriteForm title="후원의손길 등록 및 수정"/>
             
            </div>
        </C_PageTemplate>

        
    );
}
