import LogInLayout from "../components/LogInLayout";

const Login = () => {
  return (
    <>
      <LogInLayout
        title="Log in and start sharing"
        subtitle="Don't have an account?"
        btnLink="/signup"
        btnText="Sign Up"
      >
        <button className="border cursor-pointer hover:bg-light-gray w-full text-lg font-semibold py-2 rounded-md">
          Continue with Google
        </button>
        <button className="border  cursor-pointer hover:bg-light-gray w-full text-lg font-semibold py-2 rounded-md">
          Continue with Apple
        </button>
      </LogInLayout>
    </>
  );
};

export default Login;
