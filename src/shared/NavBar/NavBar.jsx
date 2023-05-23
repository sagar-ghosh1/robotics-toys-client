import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/robort logo.png"

const NavBar = () => {
   const navItems = <>
      <NavLink to="/" className='mr-5' style={({ isActive, isPending }) => {
         return { fontWeight: isActive ? "bold" : "", color: isPending ? "red" : "#0081a7", };
      }}> Home </NavLink>
      <NavLink to="/blog" className='mr-5' style={({ isActive, isPending }) => {
         return { fontWeight: isActive ? "bold" : "", color: isPending ? "red" : "#0081a7", };
      }}> Blog </NavLink>
   </>

   return (
      <div>
         <div className="navbar bg-base-100">
            <div className="navbar-start">
               <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                     {navItems}
                  </ul>
               </div>
               <Link to="/"><img src={logo} alt="Logo" className="w-16" /></Link>
               <a className="text-2xl font-bold ml-2">Robotics Toys</a>
            </div>

            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1">
                  {navItems}
               </ul>
            </div>

            <div className="navbar-end">
               <div className="avatar tooltip tooltip-left mr-4" data-tip="hello">
                  <div className="w-11 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ml-2">
                     <img src="https://rb.gy/dd1d9" />
                  </div>
               </div>

               <Link to="/login">
                  <button className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 border-none">LOGIN IN</button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default NavBar;