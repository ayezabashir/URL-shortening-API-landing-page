import logo from "/logo.svg";
import { Link } from "react-router-dom";
import signin_img from "/recentpost2.png";

const LogInLayout = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 h-screen max-h-screen">
      <div className="p-10">
        <div className="col-span-2">
          <Link to="/" className="cursor-pointer">
            <img className="w-30" src={logo} alt="Shortly Logo" />
          </Link>
        </div>
      </div>
      <div className="hidden md:block bg-blue/70">
        <div className="p-4 flex justify-center items-center h-full">
          <img className="select-none" src={signin_img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LogInLayout;
