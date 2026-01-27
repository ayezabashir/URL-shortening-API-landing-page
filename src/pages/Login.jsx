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
        <button className="border flex items-center justify-center gap-2 cursor-pointer hover:bg-light-gray w-full text-lg font-semibold py-2 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
          >
            <path
              fill="#2A5BD7"
              d="M15.078 15.625c1.758-1.64 2.54-4.375 2.07-6.992h-6.992v2.89h3.985c-.157.938-.703 1.72-1.485 2.227z"
            ></path>
            <path
              fill="#34A853"
              d="M3.516 13.32a7.5 7.5 0 0 0 11.562 2.305l-2.422-1.875c-2.07 1.367-5.508.86-6.68-2.344z"
            ></path>
            <path
              fill="#FBBC02"
              d="M5.975 11.406a4.45 4.45 0 0 1 0-2.851L3.515 6.64c-.9 1.797-1.173 4.336 0 6.68z"
            ></path>
            <path
              fill="#EA4335"
              d="M5.977 8.555c.859-2.696 4.53-4.258 6.992-1.954l2.148-2.109C12.07 1.562 6.133 1.68 3.516 6.641z"
            ></path>
          </svg>
          Continue with Google
        </button>
        <button className="border flex items-center justify-center gap-2 cursor-pointer hover:bg-light-gray w-full text-lg font-semibold py-2 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
          >
            <g clip-path="url(#a)">
              <path
                fill="#273144"
                d="M18.16 15.586q-.454 1.048-1.076 1.933-.848 1.21-1.385 1.674-.83.763-1.78.784-.684 0-1.645-.392-.96-.392-1.77-.392-.848 0-1.82.392-.974.394-1.573.413-.913.04-1.82-.805-.58-.505-1.45-1.733-.931-1.31-1.532-3.043-.643-1.872-.643-3.627 0-2.01.87-3.465a5.1 5.1 0 0 1 1.821-1.842 4.9 4.9 0 0 1 2.463-.695q.724.002 1.905.443 1.179.443 1.51.444.25 0 1.676-.523 1.346-.484 2.277-.404 2.525.202 3.787 1.994-2.257 1.369-2.234 3.827.021 1.915 1.386 3.181.618.587 1.385.909-.165.482-.353.927M14.3.4q0 1.5-1.094 2.799c-.879 1.027-1.942 1.621-3.095 1.527a3 3 0 0 1-.023-.379c0-.96.418-1.987 1.16-2.828q.556-.638 1.414-1.061Q13.518.04 14.279 0q.022.2.021.4"
              ></path>
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M0 0h20v20H0z"></path>
              </clipPath>
            </defs>
          </svg>
          Continue with Apple
        </button>
      </LogInLayout>
    </>
  );
};

export default Login;
