import NavItems from "./NavItems"
import logo from "/logo.svg"
import menu from "/menu.svg"
import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <header className="container">
            <div className="relative flex items-center justify-between gap-14">
                <NavLink to="/" className="cursor-pointer">
                    <img className="w-30" src={logo} alt="Shortly Logo" />
                </NavLink>
                <div className="hidden md:block w-full">
                    <NavItems />
                </div>
                <div className="block md:hidden">
                        <img className="w-10 hover:opacity-90 cursor-pointer" src={menu} alt="" />
                    <div className="bg-purple w-full absolute right-0 left-0 top-14 rounded-xl px-10">
                        <NavItems />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header