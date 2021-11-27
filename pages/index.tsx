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
    <BodyLayout leftSide={<p>Test</p>} rightSide={<p>Test 2</p>}>
      <CreatePost paperClassName="mb-5" />
      <HomePostSection />
    </BodyLayout>
  );
};

export default Home;
