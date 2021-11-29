import { useRef } from "react";
import { useMutation } from "@apollo/client";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../utils/hooks/redux-store";

// Components
import Paper from "../../UI/Paper";
import Avatar from "../../UI/Avatar";

//
import { Image } from "../../icons";
import { uploadProfilePictureMutation } from "../../../utils/queries/userQueries";
import { addNotification } from "../../../store/slices/notificationSlice";
import { updateProfile } from "../../../store/slices/userSlice";

type ProfileImageChangerProps = {};

const ProfileImageChanger: React.FC<ProfileImageChangerProps> = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadProfilePicture] = useMutation(uploadProfilePictureMutation);
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();

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

      dispatch(
        updateProfile({
          profile: {
            imageURL: response.data.updateProfilePicture,
          },
        })
      );
      dispatch(
        addNotification({
          notification: {
            id: new Date().getTime(),
            type: "success",
            title: "Profile Image updated successfully",
          },
        })
      );
    } catch (e) {
      if (e instanceof Error) {
        dispatch(
          addNotification({
            notification: {
              id: new Date().getTime(),
              type: "error",
              title: "Failed to update profile image",
              text: e.message,
            },
          })
        );
      }
    }
  };

  return (
    <Paper className="flex flex-col items-center mb-4" removeBorderMobile>
      <Avatar
        src={user?.profile.imageURL}
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
