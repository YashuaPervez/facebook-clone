import React from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { useMutation } from "@apollo/client";
import { useSelector } from "react-redux";

// Components
import Paper from "../../UI/Paper";
import Input from "../../FormElements/Input";
import Button from "../../UI/Button";

//
import { createPostSchema } from "../../../utils/schemas/postScheme";
import { createPostMutation } from "../../../utils/queries/postQueries";

type CreatePostProps = {
  paperClassName?: string;
};

type FormValues = {
  title: string;
};

const CreatePost: React.FC<CreatePostProps> = ({ paperClassName }) => {
  const [createPost] = useMutation(createPostMutation);
  // const { session } = useSelector((state) => state.auth.user);

  const form = useForm<FormValues>({
    resolver: yupResolver(createPostSchema),
  });
  const {
    handleSubmit,
    formState: { errors },
  } = form;

  const createPostHandler: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await createPost({
        variables: {
          title: data.title,
        },
      });
    } catch (e) {
      console.log("error >>", e);
    }
  };

  return (
    <Paper className={paperClassName}>
      <FormProvider {...form}>
        <form onSubmit={handleSubmit(createPostHandler)}>
          <div className="flex items-center mb-6 pb-6 border-b border-gray-200">
            <Input
              id="title"
              placeholder="Something to say?"
              error={errors?.title?.message}
              inline
            />
            <Button type="submit" className="h-10">
              Post
            </Button>
          </div>
          <div className="flex items-center flex-wrap">
            <Button>Add Image</Button>
          </div>
        </form>
      </FormProvider>
    </Paper>
  );
};

export default CreatePost;
