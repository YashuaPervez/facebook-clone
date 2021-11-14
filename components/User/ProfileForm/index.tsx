import React, { ChangeEvent, useState } from "react";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { useMutation } from "@apollo/client";
import { useAppDispatch } from "../../../utils/hooks/redux-store";

// Components
import Paper from "../../UI/Paper";
import Input from "../../FormElements/Input";
import Button from "../../UI/Button";
import Heading from "../../UI/Heading";

//
import { updateProfileSchema } from "../../../utils/schemas/userSchema";
import {
  updateProfileMutation,
  UploadProfilePictureMutation,
} from "../../../utils/queries/userQueries";
import { updateProfile as updateProfileAction } from "../../../store/slices/userSlice";

type ProfileFormProps = {
  user: {
    about: string;
    displayName: string;
  };
};

type UpdateProfileType = {
  about: string;
  displayName: string;
};

const ProfileForm: React.FC<ProfileFormProps> = ({ user }) => {
  const [loading, setLoading] = useState(false);
  const [updateProfile] = useMutation(updateProfileMutation);
  const [uploadProfilePicture] = useMutation(UploadProfilePictureMutation);
  const dispatch = useAppDispatch();

  const form = useForm<UpdateProfileType>({
    resolver: yupResolver(updateProfileSchema),
  });
  const {
    handleSubmit,
    formState: { errors },
  } = form;

  const updateProfileHandler: SubmitHandler<UpdateProfileType> = async (
    data
  ) => {
    setLoading(true);
    try {
      const response = await updateProfile({
        variables: data,
      });

      const newProfile = response.data.updateProfile.profile;
      dispatch(
        updateProfileAction({
          profile: newProfile,
        })
      );

      console.log("newProfile >>", newProfile);
    } catch (e) {
      console.log("error >>", e);
    }
    setLoading(false);
  };

  const fileChangeHandler = async (e: React.FormEvent<HTMLInputElement>) => {
    if (!e.target || !e.target.files || !e.target.files[0]) return;

    const file = e.target.files[0];

    console.log("file >>", file);

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
    <Paper>
      <FormProvider {...form}>
        <Heading>Update Profile</Heading>
        <form onSubmit={handleSubmit(updateProfileHandler)}>
          <Input
            id="displayName"
            placeholder="Display Name"
            initialValue={user.displayName}
            error={errors.displayName?.message}
          />
          <Input
            id="about"
            placeholder="About"
            textarea
            initialValue={user.about}
            error={errors.about?.message}
          />
          <Button type="submit" loading={loading}>
            Update Profile
          </Button>
        </form>
      </FormProvider>
      <input type="file" onChange={fileChangeHandler} />
    </Paper>
  );
};

export default ProfileForm;
