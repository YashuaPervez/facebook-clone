import { useState } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { useMutation } from "@apollo/client";

// Components
import Paper from "../../UI/Paper";
import Input from "../../FormElements/Input";
import Button from "../../UI/Button";
import FilePicker from "../../FormElements/FilePicker";
import UploadPreview from "../../UI/UploadPreview";

//
import { createPostSchema } from "../../../utils/schemas/postScheme";
import { createPostMutation } from "../../../utils/queries/postQueries";
import { Loading } from "../../icons";
import { colors } from "../../../styles/colors";

type CreatePostProps = {
  paperClassName?: string;
};

type FormValues = {
  title: string;
};

const CreatePost: React.FC<CreatePostProps> = ({ paperClassName }) => {
  const [loading, setLoading] = useState(false);

  const [previewURL, setPreviewURL] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [createPost] = useMutation(createPostMutation);

  const form = useForm<FormValues>({
    resolver: yupResolver(createPostSchema),
  });
  const {
    handleSubmit,
    formState: { errors },
    reset,
  } = form;

  const createPostHandler: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);
    try {
      const response = await createPost({
        variables: {
          title: data.title,
          image: selectedFile || undefined,
        },
      });

      reset();
      setPreviewURL("");
      setSelectedFile(null);
    } catch (e) {
      console.log("error >>", e);
    }
    setLoading(false);
  };

  return (
    <Paper className={`${paperClassName} relative`}>
      <FormProvider {...form}>
        <form onSubmit={handleSubmit(createPostHandler)}>
          <div className="flex items-center mb-3 pb-6 border-b border-gray-200">
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
          {previewURL && (
            <UploadPreview
              previewURL={previewURL}
              clear={() => {
                setPreviewURL("");
                setSelectedFile(null);
              }}
            />
          )}
          <div className="flex items-center flex-wrap">
            <FilePicker
              setPreviewURL={setPreviewURL}
              selectedFile={selectedFile}
              setSelectedFile={setSelectedFile}
            />
          </div>
        </form>
      </FormProvider>
      {loading && (
        <div className="absolute h-full w-full top-0 left-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
          <span className="block animate-spin">
            <Loading size={5} color={colors.primary.main} />
          </span>
        </div>
      )}
    </Paper>
  );
};

export default CreatePost;
