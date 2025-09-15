// src/components/PostList.jsx
import styled from "styled-components";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getPosts, getPostsByUsername, uploadPost } from "../api";
import Post from "./Post";
import { FEED_VARIANT } from "../values";
import LoadingPage from "../pages/LoadingPage";
import ErrorPage from "../pages/ErrorPage";
import PostForm from "./PostForm";

function PostList({ variant = FEED_VARIANT.HOME_FEED, showPostForm }) {
  const queryClient = useQueryClient();

  let postsQueryKey;
  let postsQueryFn;

  if (variant === FEED_VARIANT.HOME_FEED) {
    postsQueryKey = ["posts"];
    postsQueryFn = getPosts;
  } else if (variant === FEED_VARIANT.MY_FEED) {
    const username = "codeit";
    postsQueryKey = ["post", { username }];
    postsQueryFn = () => getPostsByUsername(username);
  } else {
    console.warn("Invalid feed request.");
  }

  const {
    data: postsData,
    isPending,
    isError,
  } = useQuery({
    queryKey: postsQueryKey,
    queryFn: postsQueryFn,
  });

  const uploadPostMutation = useMutation({
    mutationFn: (newPost) => uploadPost(newPost),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: postsQueryKey });
    },
    onError: () => {
      toast.error("업로드에 실패했습니다.");
    },
  });

  const handleUploadPost = (newPost) => {
    uploadPostMutation.mutate(newPost, {
      onSuccess: () => {
        toast("포스트가 성공적으로 업로드 되었습니다!");
      },
    });
  };

  if (isPending) return <LoadingPage />;

  if (isError) return <ErrorPage />;

  const posts = postsData?.results ?? [];

  return (
    <ListContainer>
      {showPostForm ? (
        <PostForm
          onSubmit={handleUploadPost}
          buttonDisabled={uploadPostMutation.isPending}
        />
      ) : (
        ""
      )}
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </ListContainer>
  );
}

export default PostList;

const ListContainer = styled.div`
  display: grid;
  gap: 20px;
  margin-top: 20px;
`;
