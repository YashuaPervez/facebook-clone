import React from "react";
import withAuth from "../utils/HigherOrderFunctions/withAuth";

// Components
import Navigation from "../components/UI/Navigation";
import UserList from "../components/User/UserList";
import CreatePost from "../components/Post/CreatePost";
import PostList from "../components/Post/PostList";

//
import friends from "../data/friends";

const Home = () => {
  return (
    <div className="flex gap-4">
      <div className="w-72">
        <Navigation />
      </div>
      <div className="flex-1">
        <CreatePost paperClassName="mb-5" />
        <PostList />
      </div>
      <div className="w-72">
        <UserList users={friends} />
      </div>
    </div>
  );
};

export const getServerSideProps = withAuth(async (_, user, token) => {
  if (!user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      user,
      token,
    },
  };
});

export default Home;
