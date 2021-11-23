import { useAppSelector } from "../utils/hooks/redux-store";

// Components
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
    <div>
      <div className="flex gap-4">
        <div className="w-72">
          <ProfileImageChanger />
          {/* <CoverImageChanger /> */}
        </div>
        <div className="flex-1">
          <ProfileForm />
        </div>
      </div>
    </div>
  );
};

export default Profile;
