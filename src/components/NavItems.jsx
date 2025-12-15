import { Link, NavLink } from 'react-router-dom'
const baseClass = "w-full md:w-auto flex flex-col md:flex-row items-center gap-7 font-bold py-10 md:py-0 text-lg md:text-base "
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
const NavItems = ({onNavigate}) => {
    return (
        <nav aria-label='Main Navigation' className='flex flex-col md:flex-row justify-between items-center'>
            <div className={`${baseClass} text-white md:text-gray `}>
                {
                    navLinks.map((link)=>(
                        <NavLink 
                            key={link.to} 
                            to={link.to}
                            onClick={onNavigate}
                            className={({isActive})=>isActive ? "md:underline underline-offset-10" : "no-underline"}
                        >
                            {link.label}
                        </NavLink>
                    ))
                }
            </div>
            <div className={`${baseClass} border-t border-gray md:border-0`}>
                <Link to={"/login"} onClick={onNavigate} className='text-white md:text-gray'>Login</Link>
                <Link to={"/signup"} onClick={onNavigate} className='bg-blue text-white py-2 px-5 rounded-3xl'>Sign Up</Link>
            </div>
        </nav>
    )
}

export default NavItems