import React, { useState } from "react";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { useMutation } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

// Components
import Paper from "../../UI/Paper";
import Input from "../../FormElements/Input";
import Button from "../../UI/Button";

//
import { signupSchema } from "../../../utils/schemas/authSchema";
import { signupMutation } from "../../../utils/queries/authQueries";

type FormValues = {
  username: string;
  email: string;
  password: string;
};

const SignupForm = () => {
  const [loading, setLoading] = useState(false);

  const [signup] = useMutation(signupMutation);
  const { push } = useRouter();

  const form = useForm<FormValues>({
    resolver: yupResolver(signupSchema),
  });
  const {
    handleSubmit,
    formState: { errors },
  } = form;

  const signupHandler: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);
    try {
      const response = await signup({
        variables: {
          email: data.email,
          password: data.password,
          username: data.username,
        },
      });

      const token = response.data.signup.token;
      document.cookie = `fb-clone-auth-token=${token}`;
      push("/");
    } catch (e) {
      console.log("error >>", e);
    }
    setLoading(false);
  };

  return (
    <Paper>
      <h1 className="text-3xl font-bold mb-6 text-blue-500">Sign Up</h1>
      <FormProvider {...form}>
        <form onSubmit={handleSubmit(signupHandler)}>
          <Input
            id="username"
            placeholder="Username"
            error={errors?.username?.message}
          />
          <Input
            id="email"
            placeholder="Email"
            error={errors?.email?.message}
          />
          <Input
            id="password"
            placeholder="Password"
            error={errors?.password?.message}
            type="password"
          />
          <Button type="submit" className="h-10 w-28" loading={loading}>
            Signup
          </Button>
        </form>
      </FormProvider>
      <p className="mt-4">
        Already have an account?
        <Link href="/login">
          <a className="text-blue-400"> Login</a>
        </Link>
      </p>
    </Paper>
  );
};

export default SignupForm;
