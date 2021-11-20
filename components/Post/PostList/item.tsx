import React from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import Link from "next/link";

// Components
import Paper from "../../UI/Paper";
import Avatar from "../../UI/Avatar";
import Input from "../../FormElements/Input";
import IconButton from "../../UI/IconButton";

//
import { PaperPlane } from "../../icons";

type PostItemProps = {
  post: any;
};

type FormValues = {
  comment: string;
};

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  const form = useForm<FormValues>();
  const { handleSubmit } = form;

  const commentHandler: SubmitHandler<FormValues> = async (data) => {
    console.log("data >>", data);
  };

  return (
    <Paper>
      <div className="mb-2">
        <Link href={`/user/${post?.author?.username}`}>
          <a>
            <div className="flex items-center mb-3">
              <Avatar src={post?.author?.profile?.imageURL} />
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
      <FormProvider {...form}>
        <form onSubmit={handleSubmit(commentHandler)}>
          <div className="flex items-center">
            <Input id="comment" placeholder="Comment" inline />
            <div>
              <IconButton type="submit">
                <PaperPlane size={4} color={"#fff"} />
              </IconButton>
            </div>
          </div>
        </form>
      </FormProvider>
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
