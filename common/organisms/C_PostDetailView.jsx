"use client";

import React from "react";
import styles from "@/styles/C_PostDetailView.module.scss";
import C_Button from "@/common/atom/C_Button";

export default function C_PostDetailView({ title, content, createdAt, author, children, postList = [],}) {
    return (
        <section className={styles.postDetailView}>
        {/* 초록색 헤더 바 */}
        <div className={styles.headerBar}>
            <span className={styles.title}>{title}</span>
            <div className={styles.meta}>
                <span>{author}</span>
                <span>{createdAt}</span>
            </div>
        </div>

        {/* 본문 */}
        <div className={styles.content}>
            <div className={styles.innerContent}>
                <span className={styles.contentTitle}>{title}</span>
                <p className={styles.contentArea}>{content}</p>
            </div>
        </div>

        {/* 댓글 영역 */}
        <div className={styles.commentArea}>
            <div className={styles.innerCommnetArea}>
                {children}
            </div>
        </div>

       
        
        {/* 이전,다음글*/}
        {postList && (
        <div className={styles.postNavigation}>
            {postList.map((post) => (
            <div key={post.id} className={styles.row}>
                <span className={styles.index}>{post.id}</span> 
                <span className={styles.title}>{post.title}</span>
                <span className={styles.date}>{post.createdAt}</span>
            </div>
            ))}
        </div>
        
        )}
         {/* 하단 버튼 */}
         <div className={styles.footerBtn}>
            <C_Button type="A" size="wide" title="삭제" />
            <C_Button type="B" size="wide" title="목록" />
        </div>

        </section>
    );
}
