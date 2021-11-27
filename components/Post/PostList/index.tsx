import React from "react";
import { useAppSelector } from "../../../utils/hooks/redux-store";

// Components
import PostItem from "./item";

//
import { Post } from "../../../typeDefs";

type PostListProps = {
  posts: Post[];
  loading: Boolean;
};

const PostList: React.FC<PostListProps> = ({ posts, loading }) => {
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-col-1 gap-5">
      {posts?.length ? (
        posts.map((post) => <PostItem key={post.id} post={post} />)
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
};

export default PostList;
