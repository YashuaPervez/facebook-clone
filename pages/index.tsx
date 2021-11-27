import React from "react";

// Components
// import Navigation from "../components/UI/Navigation";
// import UserList from "../components/User/UserList";
import CreatePost from "../components/Post/CreatePost";
import HomePostSection from "../components/Post/HomePostSection";
import BodyLayout from "../components/BodyLayout";

//
// import friends from "../data/friends";
import useAuth from "../utils/hooks/useAuth";

const Home = () => {
  useAuth({
    redirectTo: "/login",
    redirectLoggedInUser: false,
    redirectLoggedOutUser: true,
  });

  return (
    <BodyLayout
      leftSide={<div></div>}
      rightSide={<div></div>}
      removePannelButtons
    >
      <CreatePost paperClassName="mb-5" />
      <HomePostSection />
    </BodyLayout>
  );
};

export default Home;
