import React from "react";
import { useAppSelector } from "../../../utils/hooks/redux-store";

// Components
import PostItem from "./item";
import LoaderBlock from "../../UI/Loader/LoaderBlock";

//
import { Post } from "../../../typeDefs";

type PostListProps = {
  posts: Post[];
  loading: Boolean;
  moreAvailable: boolean;
  onShowMorePosts?: React.MouseEventHandler<HTMLButtonElement>;
  moreLoading: boolean;
};

const PostList: React.FC<PostListProps> = ({
  posts,
  loading,
  moreAvailable,
  onShowMorePosts,
  moreLoading,
}) => {
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="grid grid-col-1 gap-5">
        {posts?.length ? (
          posts.map((post) => <PostItem key={post.id} post={post} />)
        ) : (
          <p>No posts available</p>
        )}
      </div>
      {moreAvailable && !moreLoading && (
        <div className="mt-5">
          <button className="text-primary-main" onClick={onShowMorePosts}>
            Show More Posts
          </button>
        </div>
      )}
      {moreLoading && <LoaderBlock />}
    </>
  );
};

export default PostList;
