"use client";

import C_PageTemplate from "@/common/templates/C_PageTemplate";
import C_PostDetailView from "@/common/organisms/C_PostDetailView";
import C_CommentItem from "@/common/organisms/C_CommentItem";

export default function TestPage() {
    const handleTabClick = (label) => {
        console.log("탭 클릭됨:", label);
    };

    const tabList = ["시설안내", "조직도", "시설안내2", "조직도2"];

    const dummyPostList = [
        { id: 10, title: "이전글 제목입니다", createdAt: "2000.00.00" },
        { id: 8, title: "다음글 제목입니다", createdAt: "2000.00.00" },
    ];

    const dummyComments = [
        {
            username: "이시현",
            profileImg: "/images/google.png",
            content: "안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 ",
            date: "2024.12.25",
        },
        {
            username: "정현비",
            content: "ㅎㅇㅎㅇ",
            date: "2024.12.25",
        },
    ];

    return (
        <C_PageTemplate
            title="시설안내" 
            tabBarElementList={tabList}
            tabBarCallback={handleTabClick}
            bannerImageUrl="https://media.istockphoto.com/id/1317323736/ko/%EC%82%AC%EC%A7%84/%EB%82%98%EB%AC%B4-%EB%B0%A9%ED%96%A5%EC%9C%BC%EB%A1%9C-%ED%95%98%EB%8A%98%EB%A1%9C-%EB%B0%94%EB%9D%BC%EB%B3%B4%EB%8A%94-%EA%B2%BD%EC%B9%98.jpg?s=612x612&w=0&k=20&c=0xTghmMTXJ5ITCZ-LKTABbaPIK_1kWNf0FSFl_GL_7I="
        >
             <C_PostDetailView
                title="공지사항 제목"
                content="공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다."
                createdAt="2024.01.01"
                author="운영자"
                postList={dummyPostList}
            >
               <C_CommentItem comments={dummyComments} myProfile={"/images/tree.png"}/>;
            </C_PostDetailView>
        </C_PageTemplate>

        
    );
}
