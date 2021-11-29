import React, { useState } from "react";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { useMutation } from "@apollo/client";
import Link from "next/link";
import { useAppDispatch } from "../../../utils/hooks/redux-store";
import { useRouter } from "next/router";

// Components
import Paper from "../../UI/Paper";
import Input from "../../FormElements/Input";
import Button from "../../UI/Button";

//
import { loginSchema } from "../../../utils/schemas/authSchema";
import { loginMutation } from "../../../utils/queries/authQueries";
import { login as loginAction } from "../../../store/slices/userSlice";
import { User } from "../../../typeDefs";
import { addNotification } from "../../../store/slices/notificationSlice";

type FormValues = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const [loading, setLoading] = useState(false);

  const [login] = useMutation(loginMutation);
  const dispatch = useAppDispatch();
  const { push } = useRouter();

  const form = useForm<FormValues>({
    resolver: yupResolver(loginSchema),
  });
  const {
    handleSubmit,
    formState: { errors },
  } = form;

  const loginHandler: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);
    try {
      const response = await login({
        variables: {
          email: data.email,
          password: data.password,
        },
      });

      const token = response.data.login.token;
      const user = response.data.login.user as User;
      document.cookie = `fb-clone-auth-token=${token}`;
      dispatch(
        loginAction({
          token,
          user,
        })
      );
      push("/");
    } catch (e) {
      if (e instanceof Error) {
        dispatch(
          addNotification({
            notification: {
              id: new Date().getTime(),
              type: "error",
              text: e.message,
              title: "Failed to Login",
            },
          })
        );
      }
    }
    setLoading(false);
  };

  return (
    <Paper>
      <h1 className="text-3xl font-bold mb-6 text-blue-500">Login</h1>
      <FormProvider {...form}>
        <form onSubmit={handleSubmit(loginHandler)}>
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
            Login
          </Button>
        </form>
      </FormProvider>
      <p className="mt-4">
        Do not have an account?
        <Link href="/signup">
          <a className="text-blue-400"> Sign up</a>
        </Link>
      </p>
    </Paper>
  );
};

export default LoginForm;
