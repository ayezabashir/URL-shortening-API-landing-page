import NavItems from "./NavItems"
import logo from "/logo.svg"
import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <header className="container">
            <div className="flex gap-14">
                <NavLink to="/" className="cursor-pointer">
                    <img className="w-30" src={logo} alt="Shortly Logo" />
                </NavLink>
                <div className="w-full">
                    <NavItems />
                </div>
            </div>
        </header>
    )
}

export default Header