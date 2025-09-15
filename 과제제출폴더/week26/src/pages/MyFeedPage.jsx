import styled from "styled-components";
import PostList from "../components/PostList";
import Container from "../components/Container";
import { FEED_VARIANT } from "../values";

function MyFeedPage() {
  return (
    <StyledContainer>
      <PostList variant={FEED_VARIANT.MY_FEED} />
    </StyledContainer>
  );
}

export default MyFeedPage;

const StyledContainer = styled(Container)`
  margin-bottom: 100px;
`;
