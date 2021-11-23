import React, { useState } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { useMutation } from "@apollo/client";

// Components
import Input from "../../FormElements/Input";
import IconButton from "../../UI/IconButton";
import Avatar from "../../UI/Avatar";

//
import { PaperPlane } from "../../icons";
import { createCommentMutation } from "../../../utils/queries/commentQueries";
import { Comment } from "../../../typeDefs";

type CommentSectionProps = {
  comments: Comment[];
  postId: number;
};

type FormValues = {
  comment: string;
};

const CommentSection: React.FC<CommentSectionProps> = ({
  comments: c,
  postId,
}) => {
  const [comments, setComments] = useState<Comment[]>(c);
  const [createCommentLoader, setCreateCommentLoader] = useState(false);

  const form = useForm<FormValues>();
  const { handleSubmit, reset } = form;

  const [createComment] = useMutation(createCommentMutation);

  const commentHandler: SubmitHandler<FormValues> = async (data) => {
    setCreateCommentLoader(true);
    try {
      const response = await createComment({
        variables: {
          postId,
          text: data.comment,
        },
      });
      setComments((prev) => [...prev, response.data.createComment]);
    } catch (e) {
      console.log("error >>", e);
    }
    reset();
    setCreateCommentLoader(false);
  };

  return (
    <>
      <FormProvider {...form}>
        <form onSubmit={handleSubmit(commentHandler)} autoComplete="off">
          <div className="flex items-center relative rounded overflow-hidden">
            <Input id="comment" placeholder="Comment" inline />
            <div>
              <IconButton type="submit">
                <PaperPlane size={4} color={"#fff"} />
              </IconButton>
            </div>
            {createCommentLoader && (
              <div className="absolute top-0 left-0 h-full w-full bg-gray-500 opacity-50 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">
                  Posting Comment...
                </span>
              </div>
            )}
          </div>
        </form>
      </FormProvider>
      <div className="mt-3">
        {comments ? (
          comments.map((comment, i) => (
            <div
              className={`flex items-start  ${
                i !== 0 ? "mt-4 pt-4 border-t border-gray-100" : ""
              }`}
            >
              <div className="mr-2">
                <Avatar src={comment?.author?.profile?.imageURL} />
              </div>
              <div>
                <h4 className="text-md font-semibold">
                  {comment?.author?.profile?.displayName}
                </h4>
                <p className="text-sm">{comment?.text}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No Comments</p>
        )}
      </div>
    </>
  );
};

export default CommentSection;
