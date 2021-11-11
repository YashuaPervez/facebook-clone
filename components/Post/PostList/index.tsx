import React from "react";
import { useAppSelector } from "../../../utils/hooks/redux-store";

// Components
import PostItem from "./item";

type PostListProps = {
  posts?: { id: number; title: string; imageURL: string }[];
};

const PostList: React.FC<PostListProps> = ({ posts }) => {
  let wallPosts = useAppSelector((state) => state.post.posts);
  if (posts) {
    wallPosts = posts;
  }

  return (
    <div className="grid grid-col-1 gap-5">
      {wallPosts?.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
