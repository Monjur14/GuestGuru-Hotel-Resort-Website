import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import UseAuth from "../CustomHook/UseAuth";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const toggleNavbar = () => {
        setNav(!nav)
    }
    const {logout, user} = UseAuth()
  return (
    <div className="contain flex justify-between items-center py-2 lg:py-3 px-3 lg:px-0">
      <Link to={"/"} className="text-[2rem] md:text-4xl font-semibold">Guest<span className="text-blue-700">Guru</span></Link>
      <ul className="gap-5 items-center text-xl hidden lg:flex"> 
        <NavLink to={"/"} className={({isActive}) => isActive ? "font-bold cursor-pointer text-blue-700" : "cursor-pointer"}>Home</NavLink>
        <NavLink to={"/contactus"} className={({isActive}) => isActive ? "font-bold cursor-pointer text-blue-700" : "cursor-pointer"}>Contact Us</NavLink>
        {user && <NavLink to={"/userProfile"} className={({isActive}) => isActive ? "font-bold cursor-pointer text-blue-700" : "cursor-pointer"}>User Profile</NavLink>}
        {user && <NavLink to={"/updateProfile"} className={({isActive}) => isActive ? "font-bold cursor-pointer text-blue-700" : "cursor-pointer"}>Update Profile</NavLink>}
        {user && <NavLink to={"/reviews"} className={({isActive}) => isActive ? "font-bold cursor-pointer text-blue-700" : "cursor-pointer"}>Reviews</NavLink>}
      </ul>
      {
        user?.email ? <div className="flex justify-end flex-1 lg:flex-none gap-2 mr-2 lg:mr-0">
          <img src={user.photoURL || "https://i.ibb.co/N6p8fKX/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo.jpg"} title={user.displayName} alt="" className="w-10 h-10 border-2 border-blue-600 rounded-full cursor-pointer justify-self-end" /><Link to={"/"}><button onClick={logout} className="bg-blue-700 text-white font-semibold text-lg px-5 py-1 rounded-md hidden lg:block">Logout</button></Link></div> : <div className="hidden lg:flex gap-4">
          <Link to={"/login"}><button className="border-blue-700 border-2 px-5 py-1 rounded-md text-lg font-semibold">Login</button></Link>
          <Link to={"/register"} className="bg-blue-700 text-white font-semibold text-lg px-5 py-1 rounded-md">Register</Link>
        </div>
      }
      
      <h1 className="text-[2.2rem] block lg:hidden cursor-pointer" onClick={toggleNavbar}><GiHamburgerMenu /></h1>
        <div className={`contain bg-white h-screen w-full ${nav ? "fixed" : "hidden"} top-0 left-0 flex flex-col justify-center z-50`}>
            <h1 className="text-[3rem] absolute top-3 right-3 cursor-pointer" onClick={toggleNavbar}><MdOutlineClose /></h1>
            <ul className="gap-5 items-center text-2xl flex flex-col">
            <NavLink to={"/"} className={({isActive}) => isActive ? "font-bold cursor-pointer text-blue-700" : "cursor-pointer"} onClick={toggleNavbar}>Home</NavLink>
        <NavLink to={"/contactus"} className={({isActive}) => isActive ? "font-bold cursor-pointer text-blue-700" : "cursor-pointer"} onClick={toggleNavbar}>Contact Us</NavLink>
        {user && <NavLink to={"/userProfile"} className={({isActive}) => isActive ? "font-bold cursor-pointer text-blue-700" : "cursor-pointer"} onClick={toggleNavbar}>User Profile</NavLink>}
        {user && <NavLink to={"/updateProfile"} className={({isActive}) => isActive ? "font-bold cursor-pointer text-blue-700" : "cursor-pointer"} onClick={toggleNavbar}>Update Profile</NavLink>}
        {user && <NavLink to={"/reviews"} className={({isActive}) => isActive ? "font-bold cursor-pointer text-blue-700" : "cursor-pointer"} onClick={toggleNavbar}>Reviews</NavLink>}
            </ul>
            {
        user?.email ? <div className="flex gap-2 w-full justify-center mt-5">
          <Link to={"/"}><button onClick={logout} className="bg-blue-700 text-white font-semibold text-xl px-6 py-2 rounded-md mx-">Logout</button></Link></div> : <div className="flex flex-col items-center mt-4 gap-4">
          <Link to={"/login"}><button className="border-blue-700 border-2 w-40 text-center py-2 rounded-md text-xl font-semibold" onClick={toggleNavbar}>Login</button></Link>
          <Link to={"/register"} className="bg-blue-700 text-white font-semibold text-xl w-40 text-center py-2 rounded-md" onClick={toggleNavbar}>Register</Link>
        </div>
      }
        </div>
    </div>
  )
}

export default Navbar
