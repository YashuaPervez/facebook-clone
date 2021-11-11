import React from "react";
import prisma from "../../lib/prisma";
import { GetStaticProps, GetStaticPaths } from "next";

// Components
import UserHero from "../../components/User/UserHero";
import UserIntro from "../../components/User/UserIntro";
import UserGallery from "../../components/User/UserGallery";
import CreatePost from "../../components/Post/CreatePost";
import PostList from "../../components/Post/PostList";

type UserProps = {
  user: any;
};

const User: React.FC<UserProps> = ({ user }) => {
  return (
    <>
      <div>
        <UserHero
          className="mb-32 -mt-8"
          user={{ friendCount: 0, displayName: user.profile.displayName }}
        />
      </div>
      <div className="flex gap-4">
        <div className="w-72">
          <UserIntro paperClassName="mb-3" />
          <UserGallery paperClassName="mb-3" />
        </div>
        <div className="flex-1">
          <CreatePost paperClassName="mb-5" />
          <PostList posts={user.myPosts} />
        </div>
        <div className="w-72" />
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { params } = ctx;
  const username = params?.username as string;

  if (!username) {
    return {
      notFound: true,
    };
  }

  // Fetch user from username
  const user = await prisma.user.findUnique({
    where: { username },
    select: {
      id: true,
      username: true,
      email: true,
      profile: {
        select: {
          displayName: true,
          imageURL: true,
          about: true,
        },
      },
      myPosts: {
        select: {
          id: true,
          title: true,
          imageURL: true,
        },
      },
    },
  });

  if (!user) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user,
    },
  };
};

export default User;
