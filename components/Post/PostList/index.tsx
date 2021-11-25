import React from "react";
import { useAppSelector } from "../../../utils/hooks/redux-store";

// Components
import PostItem from "./item";

//
import { Post } from "../../../typeDefs";

type PostListProps = {
  posts?: Post[];
};

const PostList: React.FC<PostListProps> = ({ posts }) => {
  let wallPosts = useAppSelector((state) => state.post.posts);

  if (posts) {
    wallPosts = posts;
  }

  return (
    <div className="grid grid-col-1 gap-5">
      {wallPosts.length ? (
        wallPosts.map((post) => <PostItem key={post.id} post={post} />)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PostList;
