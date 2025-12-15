import { Link, NavLink } from 'react-router-dom'
const baseClass = "flex items-center gap-7 font-bold"
const navLinks = [
    {
        to: "/features",
        label : "Features"
    },
    {
        to: "/pricing",
        label:"Pricing"
    },
    {
        to: "/resources",
        label : "Resources"
    }
]
const NavItems = () => {
    return (
        <nav aria-label='Main Navigation' className='flex justify-between items-center'>
            <div className={`${baseClass} text-gray`}>
                {
                    navLinks.map((link)=>(
                        <NavLink 
                            key={link.to} 
                            to={link.to}
                            className={({isActive})=>isActive ? "underline underline-offset-10" : "no-underline"}
                        >
                            {link.label}
                        </NavLink>
                    ))
                }
            </div>
            <div className={`${baseClass}`}>
                <Link to={"/login"} className='text-gray'>Login</Link>
                <Link to={"/signup"} className='bg-blue text-white py-2 px-5 rounded-3xl'>Sign Up</Link>
            </div>
        </nav>
    )
}

export default NavItems