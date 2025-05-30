"use client";

import Image from "next/image";
import C_Button from "@/common/atom/C_Button";
import C_Input from "@/common/atom/C_Input";
import styles from "@/styles/C_CommentItem.module.scss"
import { useState } from "react";

/**
 * [공통댓글 - Args]
 *
 * myProfile - 내 프로필 사진
 * comments - 댓글 배열
 * comments[].username - 댓글 작성자 이름
 * comments[].profileImg - 프로필 이미지 경로 (옵션, 없을 시 기본 이미지 사용)
 * comments[].content - 댓글 내용
 * comments[].date - 댓글 작성 날짜 (예: "2025.05.29 14:22")
 * 
 */
export default function C_CommentItem({ myProfile, comments = [] }) {
    const [comment, setComment] = useState("");

    return (
        <div className={styles.commentWrapper}>
        {/* 댓글 수 */}
        <span className={styles.commentHeader}>댓글 ({comments.length})</span>

        {/* 입력창 */}
        <div className={styles.commentInputBox}>
            <Image
            src={myProfile || "/images/kakao.png"}
            alt="user profile"
            width={48}
            height={48}
            className={styles.profileImage}
            />
            <C_Input
            width="876px"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="댓글을 입력하세요."
            />
            <C_Button size="small" title="작성" type="B" />
        </div>

        {/* 댓글 리스트 */}
        <ul className={styles.commentList}>
            {comments.map((comment, idx) => (
            <li key={idx} className={styles.commentItem}>
                <Image
                src={comment.profileImg || "/images/kakao.png"}
                alt="user profile"
                width={48}
                height={48}
                className={styles.profileImage}
                />
                <div className={styles.commentContent}>
                    <span className={styles.commentUsername}>{comment.username}</span>
                    <p className={styles.commentText}>{comment.content}</p>
                    <div className={styles.commentFooter}>
                        <span className={styles.commentDate}>{comment.date}</span>
                        <a className={styles.commentAction}>신고하기</a>
                        <a className={styles.commentAction}>답글달기</a>
                    </div>
                </div>
            </li>
            ))}
        </ul>
        </div>
    );
}

