// Components
import SignupForm from "../components/User/SignupForm";

//
import useAuth from "../utils/hooks/useAuth";

const Login = () => {
  useAuth({
    redirectTo: "/",
    redirectLoggedInUser: true,
    redirectLoggedOutUser: false,
  });

  return (
    <div className="mt-24">
      <div className="max-w-md mx-auto">
        <SignupForm />
      </div>
    </div>
  );
};

export default Login;
