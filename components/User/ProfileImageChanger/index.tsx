import { useRef } from "react";
import { useMutation } from "@apollo/client";

// Components
import Paper from "../../UI/Paper";
import Avatar from "../../UI/Avatar";

//
import { Image } from "../../icons";
import { uploadProfilePictureMutation } from "../../../utils/queries/userQueries";

type ProfileImageChangerProps = {
  user: {
    imageURL: string;
  };
};

const ProfileImageChanger: React.FC<ProfileImageChangerProps> = ({ user }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadProfilePicture] = useMutation(uploadProfilePictureMutation);

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  const fileChangeHandler: React.ChangeEventHandler<HTMLInputElement> = async (
    e
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const response = await uploadProfilePicture({
        variables: {
          image: file,
        },
      });

      console.log("response >>", response);
    } catch (e) {
      console.log("error >>", e);
    }
  };

  return (
    <Paper className="flex flex-col items-center mb-4">
      <Avatar
        src={user.imageURL}
        size="lg"
        moreJSX={
          <>
            <input
              type="file"
              style={{ display: "none" }}
              ref={fileInputRef}
              onChange={fileChangeHandler}
            />
            <div
              className="bg-blue-300 h-36 w-36 absolute top-0 left-0 cursor-pointer opacity-0 hover:opacity-90 transition-all flex items-center justify-center"
              onClick={openFilePicker}
            >
              <Image size={12} color="#fff" />
            </div>
          </>
        }
      />
    </Paper>
  );
};

export default ProfileImageChanger;
