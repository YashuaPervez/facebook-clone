import { useRouter } from "next/router";
import { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";

//
import { getUserProfileQuery } from "../queries/authQueries";
import { findCookie } from "../functions";
import { useAppDispatch } from "./redux-store";
import { login } from "../../store/slices/userSlice";
import { loadPosts } from "../../store/slices/postSlice";
import { User } from "../../typeDefs";

type UseAuthProps = {
  redirectTo: string;
  redirectLoggedInUser?: boolean;
  redirectLoggedOutUser?: boolean;
};

const useAuth = ({
  redirectTo,
  redirectLoggedInUser = false,
  redirectLoggedOutUser = true,
}: UseAuthProps) => {
  const { push } = useRouter();
  const dispatch = useAppDispatch();

  const [getProfile, { data, loading, error }] =
    useLazyQuery(getUserProfileQuery);

  useEffect(() => {
    // Check local storage for auth token
    const token = findCookie(document.cookie, "fb-clone-auth-token");
    if (!token && redirectLoggedOutUser) {
      push(redirectTo);
      return () => {};
    }
    // Verify token is valid
    getProfile();
  }, []);

  useEffect(() => {
    if (!loading && error) {
      // User is not logged in
      if (redirectLoggedOutUser) {
        push(redirectTo);
        return () => {};
      }
    }
    if (!loading && data) {
      const { wallPosts, ...rest } = data.me as User;
      // User is logged in
      if (redirectLoggedInUser) {
        push(redirectTo);
        return () => {};
      }
      dispatch(
        login({
          token: "",
          user: rest,
        })
      );
      dispatch(
        loadPosts({
          posts: wallPosts,
        })
      );
    }
  }, [data, loading, error]);
};

export default useAuth;
