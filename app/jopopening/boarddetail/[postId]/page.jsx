'use client';

import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { apiFetch } from '/common/utils/ApiClient';
import C_PageTemplate from '@/common/templates/C_PageTemplate';
import C_PostDetailView from '@/common/organisms/C_PostDetailView';
import C_CommentItem from '@/common/organisms/C_CommentItem';

export default function JopDetail() {
  const router = useRouter();
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [postList, setPostList] = useState([]);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  const tabList = ['공지사항', '가정통신문', '채용안내'];

  const tabPathMap = {
    공지사항: '/notice/boardlist',
    가정통신문: '/familynotice/boardlist',
    채용안내: '/jopopening/boardlist',
  };

  const handleTabClick = label => {
    console.log('탭 클릭됨:', label);
    const path = tabPathMap[label];
    if (path) router.push(path);
  };

  useEffect(() => {
    if (!postId) return;

    const fetchData = async () => {
      try {
        const postDetail = await apiFetch(`http://localhost:8080/api/v1/post/detail/${postId}`);
        setPost(postDetail);

        const commentData = await apiFetch(
          `http://localhost:8080/api/v1/comment/list?postId=${postId}`
        );
        setComments(commentData);

        const navPosts = await apiFetch(`http://localhost:8080/api/v1/post/nav/${postId}`);
        setPostList(navPosts);
      } catch (error) {
        console.error('데이터 조회 실패:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [postId]);

  if (loading) return <p>로딩 중...</p>;
  if (!post) return <p>게시글을 불러올 수 없습니다.</p>;

  return (
    <C_PageTemplate
      title="채용안내"
      tabBarElementList={tabList}
      tabBarCallback={handleTabClick}
      bannerImageUrl="/images/jopbackimg.png"
    >
      <C_PostDetailView
        postId={Number(postId)}
        title={post.title}
        content={post.content}
        createdAt={post.createdAt}
        author={post.writerName}
        postList={postList} // 이전글/다음글 연결 원하면 여기에 리스트 추가
      >
        <C_CommentItem
          comments={comments}
          postId={postId}
          myProfile={'/images/tree.png'}
          onCommentSuccess={async () => {
            const commentData = await apiFetch(
              `http://localhost:8080/api/v1/comment/list?postId=${postId}`
            );
            setComments(commentData);
          }}
        />
      </C_PostDetailView>
    </C_PageTemplate>
  );
}
