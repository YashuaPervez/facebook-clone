import React, { useState, useEffect } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { useMutation, useLazyQuery } from "@apollo/client";

// Components
import Input from "../../FormElements/Input";
import IconButton from "../../UI/IconButton";
import Avatar from "../../UI/Avatar";

//
import { PaperPlane } from "../../icons";
import {
  createCommentMutation,
  getPostCommentsQuery,
} from "../../../utils/queries/commentQueries";
import { Comment } from "../../../typeDefs";
import { Loading } from "../../icons";
import { colors } from "../../../styles/colors";

type CommentSectionProps = {
  comments: {
    comments: Comment[];
    moreAvailable: boolean;
  };
  postId: number;
};

type FormValues = {
  comment: string;
};

const CommentSection: React.FC<CommentSectionProps> = ({
  comments: c,
  postId,
}) => {
  const [comments, setComments] = useState<Comment[]>(c.comments);
  const [createCommentLoader, setCreateCommentLoader] =
    useState<boolean>(false);
  const [moreAvailable, setMoreAvailable] = useState<boolean>(c.moreAvailable);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const form = useForm<FormValues>();
  const { handleSubmit, reset } = form;

  const [createComment] = useMutation(createCommentMutation);
  const [getPostComments, { loading, error, data }] =
    useLazyQuery(getPostCommentsQuery);

  const commentHandler: SubmitHandler<FormValues> = async (data) => {
    setCreateCommentLoader(true);
    try {
      const response = await createComment({
        variables: {
          postId,
          text: data.comment,
        },
      });
      setComments((prev) => [response.data.createComment, ...prev]);
    } catch (e) {
      console.log("error >>", e);
    }
    reset();
    setCreateCommentLoader(false);
  };

  const showMoreHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (moreAvailable) {
      getPostComments({
        variables: {
          postId,
          pageNumber: currentPage + 1,
        },
      });
    }
  };

  useEffect(() => {
    if (!loading && data) {
      const moreComments = data.getPostComments.comments as Comment[];
      const newMoreAvailable = data.getPostComments.moreAvailable;

      setMoreAvailable(newMoreAvailable);

      const uniqueComments = moreComments.filter((comm) => {
        const toKeepComment = comments.every((exixting_com) => {
          return exixting_com.id !== comm.id;
        });
        return toKeepComment;
      });

      setComments((prev) => [...prev, ...uniqueComments]);
      setCurrentPage((prev) => prev + 1);
    }
    if (!loading && error) {
      console.log("aaaa error >>", error);
    }
  }, [loading, error, data]);

  return (
    <>
      <FormProvider {...form}>
        <form onSubmit={handleSubmit(commentHandler)} autoComplete="off">
          <div className="flex items-center relative rounded overflow-hidden">
            <Input id="comment" placeholder="Comment" inline />
            <div>
              <IconButton type="submit" size={"sm"}>
                <PaperPlane size={3.6} color={"#fff"} />
              </IconButton>
            </div>
            {createCommentLoader && (
              <div className="absolute top-0 left-0 h-full w-full bg-gray-500 bg-opacity-50 flex items-center justify-center">
                <span className="block animate-spin">
                  <Loading size={5} color={colors.primary.main} />
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
              key={comment.id}
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
      {moreAvailable && (
        <div className="mt-3">
          <button
            className="text-primary-main cursor-pointer"
            onClick={showMoreHandler}
          >
            Show More
          </button>
        </div>
      )}
    </>
  );
};

export default CommentSection;
