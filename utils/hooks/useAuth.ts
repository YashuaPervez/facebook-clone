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
  const { push, pathname } = useRouter();
  const dispatch = useAppDispatch();

  const [getProfile, { data, loading, error }] = useLazyQuery(
    getUserProfileQuery,
    {
      fetchPolicy: "network-only",
    }
  );

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
    if (!loading && error && !data) {
      // User is not logged in
      if (redirectLoggedOutUser) {
        push(redirectTo);
        return () => {};
      }
    }
    if (!loading && data && !error) {
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
          posts: wallPosts.posts,
          moreAvailable: wallPosts.moreAvailable,
        })
      );
    }
  }, [data, loading, error]);
};

export default useAuth;
