import React, { useState } from "react";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { useMutation } from "@apollo/client";

// Components
import Paper from "../../UI/Paper";
import Input from "../../FormElements/Input";
import Button from "../../UI/Button";
import Heading from "../../UI/Heading";

//
import { updateProfileSchema } from "../../../utils/schemas/userSchema";
import { updateProfileMutation } from "../../../utils/queries/userQueries";

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

      console.log("data >>", response.data.updateProfile);
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
    </Paper>
  );
};

export default ProfileForm;
