import React, { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { useRouter } from "next/router";

// Components
import UserHero from "../../components/User/UserHero";
import UserIntro from "../../components/User/UserIntro";
import UserGallery from "../../components/User/UserGallery";
import CreatePost from "../../components/Post/CreatePost";
import PostList from "../../components/Post/PostList";

//
import { User } from "../../typeDefs";
import { getUserByUsernameQuery } from "../../utils/queries/userQueries";
import useAuth from "../../utils/hooks/useAuth";
import { useAppSelector } from "../../utils/hooks/redux-store";

type UserProps = {};

const SingleUser: React.FC<UserProps> = () => {
  const [user, setUser] = useState<User | null>(null);
  const [fetched, setFetched] = useState<boolean>(false);
  const { isLoggedIn } = useAppSelector((state) => state.user);
  const router = useRouter();
  const { username } = router.query;
  const [getUserByUsername, { error, loading, data }] = useLazyQuery(
    getUserByUsernameQuery
  );

  useAuth({
    redirectTo: "/login",
    redirectLoggedInUser: false,
    redirectLoggedOutUser: true,
  });

  useEffect(() => {
    if (isLoggedIn && !fetched) {
      setFetched(true);
      getUserByUsername({
        variables: {
          username,
        },
      });
    }
  }, [isLoggedIn, fetched]);

  useEffect(() => {
    if (!loading && data) {
      setUser(data.getUserByUsername as User);
    }
  }, [error, loading, data]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div>
        <UserHero
          className="mb-32 -mt-8"
          user={{
            friendCount: 0,
            displayName: user?.profile.displayName,
            imageURL: user?.profile.imageURL,
            coverImageURL: user?.profile.coverImageURL,
          }}
        />
      </div>
      <div className="flex gap-4">
        <div className="w-72">
          <UserIntro
            paperClassName="mb-3"
            user={{
              location: user?.profile.location,
              workPlace: user?.profile.workPlace,
            }}
          />
          <UserGallery
            paperClassName="mb-3"
            images={
              user?.wallPosts
                .filter((post) => post.imageURL)
                .map((post) => post?.imageURL || "") || []
            }
          />
        </div>
        <div className="flex-1">
          <CreatePost paperClassName="mb-5" />
          <PostList posts={user?.wallPosts} />
        </div>
        <div className="w-72" />
      </div>
    </>
  );
};

export default SingleUser;
