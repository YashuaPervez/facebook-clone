import { useAppSelector } from "../utils/hooks/redux-store";

// Components
import BodyLayout from "../components/BodyLayout";
import ProfileForm from "../components/User/ProfileForm";
import ProfileImageChanger from "../components/User/ProfileImageChanger";
import CoverImageChanger from "../components/User/CoverImageChanger";

//
import useAuth from "../utils/hooks/useAuth";

const Profile: React.FC = () => {
  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);

  useAuth({
    redirectLoggedInUser: false,
    redirectLoggedOutUser: true,
    redirectTo: "/login",
  });

  if (!isLoggedIn) {
    return <p>Loading...</p>;
  }

  return (
    <BodyLayout
      leftSide={
        <>
          <ProfileImageChanger />
          <CoverImageChanger />
        </>
      }
      rightSide={null}
    >
      <ProfileForm />
    </BodyLayout>
  );
};

export default Profile;
