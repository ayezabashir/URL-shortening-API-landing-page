import LogInLayout from "../components/LogInLayout"

const SignUp = () => {
  return (
    <>
      <LogInLayout
        title="Create your account"
        subtitle="Already have an account?"
        btnLink="/login"
        btnText="Log In"
      >
        <button className="border cursor-pointer hover:bg-light-gray w-full text-lg font-semibold py-2 rounded-md">
          Continue with Google
        </button>
      </LogInLayout>
    </>
  );
}

export default SignUp