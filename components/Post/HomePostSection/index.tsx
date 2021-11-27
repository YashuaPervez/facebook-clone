import React, { useState, useEffect } from "react";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../utils/hooks/redux-store";
import { useLazyQuery } from "@apollo/client";

// Components
import PostList from "../PostList";

//
import { getUserPostsQuery } from "../../../utils/queries/postQueries";
import { loadMorePosts } from "../../../store/slices/postSlice";

const HomePostSection = () => {
  const [currentPage, setCurrentpage] = useState(1);

  const {
    post: { posts, moreAvailable },
    user: { isLoggedIn, user },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const [getUserPosts, { loading, error, data }] =
    useLazyQuery(getUserPostsQuery);

  const showMorePostHandler = () => {
    if (moreAvailable) {
      getUserPosts({
        variables: {
          userId: user?.id,
          pageNumber: currentPage + 1,
        },
      });
    }
  };

  useEffect(() => {
    if (!loading && !error && data) {
      const { moreAvailable: newMoreAvailable, posts: newPosts } =
        data.getUserPosts;

      dispatch(
        loadMorePosts({
          posts: newPosts,
          moreAvailable: newMoreAvailable,
        })
      );
    }
  }, [loading, error, data]);

  return (
    <PostList
      loading={!isLoggedIn}
      posts={posts}
      moreAvailable={moreAvailable}
      onShowMorePosts={showMorePostHandler}
      moreLoading={loading}
    />
  );
};

export default HomePostSection;
