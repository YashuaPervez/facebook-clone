import React, { ChangeEvent, useState } from "react";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { useMutation } from "@apollo/client";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../utils/hooks/redux-store";
import { v4 as uuid } from "uuid";

// Components
import Paper from "../../UI/Paper";
import Input from "../../FormElements/Input";
import Button from "../../UI/Button";
import Heading from "../../UI/Heading";
import TagList, { Tag } from "../../FormElements/TagList";

//
import { updateProfileSchema } from "../../../utils/schemas/userSchema";
import { updateProfileMutation } from "../../../utils/queries/userQueries";
import { updateProfile as updateProfileAction } from "../../../store/slices/userSlice";

type ProfileFormProps = {};

type UpdateProfileType = {
  about: string;
  displayName: string;
};

const ProfileForm: React.FC<ProfileFormProps> = () => {
  const [loading, setLoading] = useState(false);
  const user = useAppSelector((state) => state.user.user);
  const [tags, setTags] = useState<Tag[]>(
    user?.profile.interests
      ?.split(",")
      ?.map((t) => ({ value: t, id: uuid() })) || []
  );

  const [updateProfile] = useMutation(updateProfileMutation);
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
    const updateObject: any = {
      ...data,
    };
    if (tags.length !== 0)
      updateObject.interests = tags.map((tag) => tag.value).join(",");

    try {
      const response = await updateProfile({
        variables: updateObject,
      });
      const newProfile = response.data.updateProfile.profile;
      dispatch(
        updateProfileAction({
          profile: newProfile,
        })
      );
    } catch (e) {
      console.log("error >>", e);
    }
    setLoading(false);
  };

  return (
    <Paper>
      <FormProvider {...form}>
        <Heading>Update Profile</Heading>
        <form onSubmit={handleSubmit(updateProfileHandler)}>
          <Input
            id="displayName"
            placeholder="Display Name"
            initialValue={user?.profile.displayName}
            error={errors.displayName?.message}
          />
          <Input
            id="about"
            placeholder="About"
            textarea
            initialValue={user?.profile.about}
            error={errors.about?.message}
          />
          <TagList tags={tags} setTags={setTags} heading="Intersts" />
          <Button type="submit" loading={loading}>
            Update Profile
          </Button>
        </form>
      </FormProvider>
    </Paper>
  );
};

export default ProfileForm;
