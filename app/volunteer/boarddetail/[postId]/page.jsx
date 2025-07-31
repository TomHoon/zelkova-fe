'use client';

import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { apiFetch } from '/common/utils/ApiClient';
vv;
import C_PageTemplate from '@/common/templates/C_PageTemplate';
import C_PostDetailView from '@/common/organisms/C_PostDetailView';

export default function VolunteerDetail() {
  const router = useRouter();
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [postList, setPostList] = useState([]);
  const [loading, setLoading] = useState(true);

  const tabList = ['후원의손길', '자원봉사'];

  const tabPathMap = {
    후원의손길: '/support/boardlist',
    자원봉사: '/volunteer/boardlist',
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
      title="후원&자원봉사"
      tabBarElementList={tabList}
      tabBarCallback={handleTabClick}
      bannerImageUrl="/images/supportimg.png"
    >
      <C_PostDetailView
        postId={Number(postId)}
        title={post.title}
        content={post.content}
        createdAt={post.createdAt}
        author={post.writerName}
        postList={postList}
      ></C_PostDetailView>
    </C_PageTemplate>
  );
}
