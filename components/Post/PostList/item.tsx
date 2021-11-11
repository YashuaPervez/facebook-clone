import React from "react";

// Components
import Paper from "../../UI/Paper";
import Avatar from "../../UI/Avatar";
// import Input from "../../FormElements/Input";
// import IconButton from "../../UI/IconButton";

//
import { PaperPlane } from "../../icons";

type PostItemProps = {
  post: any;
};

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  const commentHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  console.log("post >>", post);

  return (
    <Paper>
      <div className="mb-2">
        <div className="flex items-center mb-3">
          <Avatar src={post?.author?.profile?.imageURL} />
          <h4 className="ml-3 text-md font-semibold">
            {post?.author?.profile?.displayName || "Anonymous"}
          </h4>
        </div>
        <h3>{post.title}</h3>
      </div>
      <div className="-mx-4 h-60 overflow-hidden flex items-center justify-center mb-2">
        <img
          src={post.imageURL}
          className="min-w-full min-h-full object-cover"
        />
      </div>
      {/* <form onSubmit={commentHandler}>
        <div className='flex items-center'>
          <Input
            id='comment'
            placeholder='Comment'
            className='mr-2 rounded-full'
          />
          <div>
            <IconButton icon={PaperPlane} type='submit' />
          </div>
        </div>
      </form> */}
      {/* <div className='mt-3'>
        {post.comments ? (
          post.comments.map((comment, i) => (
            <div
              className={`flex items-start  ${
                i !== 0 ? 'mt-2 pt-2 border-t border-gray-100' : ''
              }`}
            >
              <div className='h-10 w-10 bg-gray-200 rounded-full mr-2'></div>
              <div>
                <h4 className='text-md font-semibold'>{comment.author.name}</h4>
                <p className='text-sm'>{comment.text}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No Comments</p>
        )}
      </div> */}
    </Paper>
  );
};

export default PostItem;
