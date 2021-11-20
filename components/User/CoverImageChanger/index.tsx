import { ChangeEventHandler, useRef } from "react";
import { useMutation } from "@apollo/client";

// Components
import Paper from "../../UI/Paper";
import { Image } from "../../icons";

//
import { uploadCoverImageMutation } from "../../../utils/queries/userQueries";

type CoverImageChangerProps = {
  user: any;
};

const CoverImageChanger: React.FC<CoverImageChangerProps> = ({ user }) => {
  const filePickerRef = useRef<HTMLInputElement>(null);

  const [uploadCoverImage] = useMutation(uploadCoverImageMutation);

  const uploadCoverImageHandler: ChangeEventHandler<HTMLInputElement> = async (
    e
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const response = await uploadCoverImage({
        variables: {
          image: file,
        },
      });
      console.log("response >>", response);
    } catch (error) {
      console.log("error >>", error);
    }
  };

  return (
    <Paper>
      <h4>Cover Image</h4>
      <input
        type="file"
        ref={filePickerRef}
        style={{ display: "none" }}
        onChange={uploadCoverImageHandler}
      />
      <div className="rounded overflow-hidden relative h-36">
        {user.coverImageURL && (
          <img src={user.coverImageURL} className="w-full" />
        )}
        <div
          className="absolute w-full h-full z-10 bg-blue-400 top-0 left-0 opacity-0 hover:opacity-90 flex items-center justify-center cursor-pointer"
          onClick={() => filePickerRef.current?.click()}
        >
          <Image color="#fff" size={16} />
        </div>
      </div>
    </Paper>
  );
};

export default CoverImageChanger;
