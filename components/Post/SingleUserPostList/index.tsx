import React, { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";

// Components
import PostList from "../PostList";

//
import { getUserPostsQuery } from "../../../utils/queries/postQueries";
import { Post } from "../../../typeDefs";

type SingleUserPostListType = {
  initialPosts: Post[];
  initialMoreAvailable: boolean;
  userId: number;
};

const SingleUserPostList: React.FC<SingleUserPostListType> = ({
  initialPosts,
  initialMoreAvailable,
  userId,
}) => {
  const [getUserPosts, { loading, error, data }] =
    useLazyQuery(getUserPostsQuery);

  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [moreAvailable, setMoreAvailable] =
    useState<boolean>(initialMoreAvailable);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [moreLoading, setMoreLoadiong] = useState<boolean>(false);

  const showMorePostsHandler: React.MouseEventHandler<HTMLButtonElement> =
    () => {
      setMoreLoadiong(true);
      getUserPosts({
        variables: {
          userId,
          pageNumber: currentPage + 1,
        },
      });
    };

  useEffect(() => {
    if (!loading && !error && data) {
      const { moreAvailable: newMoreAvailable, posts: newPosts } =
        data.getUserPosts;

      setPosts((prev) => [...prev, ...newPosts]);
      setMoreAvailable(newMoreAvailable);
      setMoreLoadiong(false);
      setCurrentPage((prev) => prev + 1);
    }
  }, [loading, error, data]);

  return (
    <div>
      <PostList
        posts={posts}
        moreAvailable={moreAvailable}
        moreLoading={moreLoading}
        loading={false}
        onShowMorePosts={showMorePostsHandler}
      />
    </div>
  );
};

export default SingleUserPostList;
