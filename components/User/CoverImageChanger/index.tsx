import { ChangeEventHandler, useRef } from "react";
import { useMutation } from "@apollo/client";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../utils/hooks/redux-store";

// Components
import Paper from "../../UI/Paper";
import { Image } from "../../icons";

//
import { uploadCoverImageMutation } from "../../../utils/queries/userQueries";
import { addNotification } from "../../../store/slices/notificationSlice";
import { updateProfile } from "../../../store/slices/userSlice";

type CoverImageChangerProps = {};

const CoverImageChanger: React.FC<CoverImageChangerProps> = () => {
  const filePickerRef = useRef<HTMLInputElement>(null);
  const user = useAppSelector((state) => state.user.user);

  const dispatch = useAppDispatch();

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

      dispatch(
        updateProfile({
          profile: {
            coverImageURL: response.data.updateCoverImage,
          },
        })
      );
      dispatch(
        addNotification({
          notification: {
            id: new Date().getTime(),
            type: "success",
            title: "Cover Image updated successfully",
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
              title: "Failed to update cover image",
              text: e.message,
            },
          })
        );
      }
    }
  };

  return (
    <Paper removeBorderMobile>
      <h4>Cover Image</h4>
      <input
        type="file"
        ref={filePickerRef}
        style={{ display: "none" }}
        onChange={uploadCoverImageHandler}
      />
      <div className="rounded overflow-hidden relative h-36">
        {user?.profile.coverImageURL && (
          <img src={user?.profile.coverImageURL} className="w-full" />
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
