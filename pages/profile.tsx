import withAuth from "../utils/HigherOrderFunctions/withAuth";

// Components
import ProfileForm from "../components/User/ProfileForm";

type ProfileProps = {
  user: any;
};

const Profile: React.FC<ProfileProps> = ({ user }) => {
  return (
    <div>
      <div className="flex gap-4">
        <div className="w-72"></div>
        <div className="flex-1">
          <ProfileForm
            user={{
              displayName: user?.profile?.displayName,
              about: user?.profile?.about,
            }}
          />
        </div>
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

export default Profile;
