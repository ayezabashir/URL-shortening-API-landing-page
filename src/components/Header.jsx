import { useState } from "react"
import NavItems from "./NavItems"
import logo from "/logo.svg"
import menu from "/menu.svg"
import { NavLink } from "react-router-dom"

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
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
                    <button
                        type="button"
                        onClick={() => setOpenMenu((menu) => !menu)}
                        aria-expanded={openMenu}
                        aria-label="Toggle Navigation Menu"
                    >
                        <img className="w-10 hover:opacity-90 cursor-pointer" src={menu} alt="Menu" />
                    </button>
                    {
                        openMenu && <div className="animate-slide-in bg-purple w-full absolute right-0 left-0 top-14 z-10 rounded-xl px-10">
                            <NavItems onNavigate={() => setOpenMenu(false)} />
                        </div>
                    }
                </div>
            </div>
        </header>
    )
}

export default Header