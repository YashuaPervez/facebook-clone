import React from "react";

// Components
import Navigation from "../components/UI/Navigation";
import UserList from "../components/User/UserList";
import CreatePost from "../components/Post/CreatePost";
import HomePostSection from "../components/Post/HomePostSection";

//
import friends from "../data/friends";
import useAuth from "../utils/hooks/useAuth";

const Home = () => {
  useAuth({
    redirectTo: "/login",
    redirectLoggedInUser: false,
    redirectLoggedOutUser: true,
  });

  return (
    <div className="flex gap-4">
      <div className="w-72">{/* <Navigation /> */}</div>
      <div className="flex-1">
        <CreatePost paperClassName="mb-5" />
        <HomePostSection />
      </div>
      <div className="w-72">{/* <UserList users={friends} /> */}</div>
    </div>
  );
};

export default Home;
