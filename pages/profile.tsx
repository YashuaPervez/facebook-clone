import Link from "next/link";
import withAuth from "../utils/HigherOrderFunctions/withAuth";

type ProfileProps = {
  user: {
    name: string;
  };
};

const Profile: React.FC<ProfileProps> = ({ user }) => {
  return (
    <div>
      <div className="flex gap-4">
        <div className="w-72"></div>
        <div className="flex-1">a</div>
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
