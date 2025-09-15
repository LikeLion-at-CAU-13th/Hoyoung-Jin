// src/components/PostList.jsx
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { getPosts, getPostsByUsername } from "../api";
import Post from "./Post";
import { FEED_VARIANT } from "../values";

const ListContainer = styled.div`
  display: grid;
  gap: 20px;
  margin-top: 20px;
`;

function PostList({ variant = FEED_VARIANT.HOME_FEED }) {
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

  const { data: postsData } = useQuery({
    queryKey: postsQueryKey,
    queryFn: postsQueryFn,
  });

  const posts = postsData?.results ?? [];

  return (
    <ListContainer>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </ListContainer>
  );
}

export default PostList;
