import React from "react";
import Link from "next/link";

// Components
import Paper from "../../UI/Paper";
import Avatar from "../../UI/Avatar";
import CommentSection from "./CommentSection";

//
import { Post } from "../../../typeDefs";
import LikeSection from "./LikeSection";

type PostItemProps = {
  post: Post;
};

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <Paper>
      <div className="mb-2">
        <Link href={`/user/${post?.author?.username}`}>
          <a>
            <div className="flex items-center mb-3">
              <Avatar src={post.author.profile.imageURL} />
              <h4 className="ml-3 text-md font-semibold">
                {post?.author?.profile?.displayName || "Anonymous"}
              </h4>
            </div>
          </a>
        </Link>
        <h3>{post.title}</h3>
      </div>
      {post.imageURL && (
        <div className="-mx-4 h-60 overflow-hidden flex items-center justify-center mb-2">
          <img
            src={post.imageURL}
            className="min-w-full min-h-full object-cover"
          />
        </div>
      )}
      <LikeSection liked={post.liked} postId={post.id} />
      <CommentSection comments={post.comments} postId={post.id} />
    </Paper>
  );
};

export default PostItem;
