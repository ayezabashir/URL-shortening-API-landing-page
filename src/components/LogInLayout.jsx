import logo from "/logo.svg";
import { Link } from "react-router-dom";
import signin_img from "/recentpost2.png";

const LogInLayout = ({ title, subtitle, btnLink, btnText, children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 h-screen max-h-screen">
      <div className="col-span-3 p-10">
        <Link to="/" className="cursor-pointer">
          <img className="w-30" src={logo} alt="Shortly Logo" />
        </Link>
        <div className="py-10 px-20">
          <h1 className="text-3xl text-purple mb-3 font-extrabold">{title}</h1>
          <div className="flex items-center gap-1">
            <h2>{subtitle}</h2>
            <Link to={btnLink} className="text-blue underline cursor-pointer">
              {btnText}
            </Link>
          </div>
          <div className="flex flex-col gap-3 my-5">{children}</div>
        </div>
      </div>
      <div className="hidden md:block bg-blue/70 col-span-2">
        <div className="p-4 flex justify-center items-center h-full">
          <img className="select-none" src={signin_img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LogInLayout;
