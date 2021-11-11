import withAuth from "../utils/HigherOrderFunctions/withAuth";

// Components
import LoginForm from "../components/User/LoginForm";

const Login = () => {
  return (
    <div className="mt-24">
      <div className="max-w-md mx-auto">
        <LoginForm />
      </div>
    </div>
  );
};

export const getServerSideProps = withAuth(async (_, user) => {
  if (user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
});

export default Login;
