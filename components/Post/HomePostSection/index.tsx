import React from "react";
import { useAppSelector } from "../../../utils/hooks/redux-store";

// Components
import PostList from "../PostList";

const HomePostSection = () => {
  const {
    post: { posts },
    user: { isLoggedIn },
  } = useAppSelector((state) => state);

  return <PostList loading={!isLoggedIn} posts={posts} />;
};

export default HomePostSection;
