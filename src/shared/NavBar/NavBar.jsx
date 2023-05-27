import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const NavBar = () => {
   const { users, userLogOut } = useContext(AuthContext)

   const handleLogOut = () => {
      userLogOut()
         .then()
         .catch((error) => {
            console.log(error)
         });
   }

   const navItems = <>
      <NavLink to="/" className='text-[18px] btn btn-ghost' style={({ isActive, isPending }) => {
         return { fontWeight: isActive ? "bold" : "", color: isPending ? "red" : "#E57C23", };
      }}> Home </NavLink>

      <NavLink to="/all-toy" className='text-[18px] btn btn-ghost' style={({ isActive, isPending }) => {
         return { fontWeight: isActive ? "bold" : "", color: isPending ? "red" : "#E57C23", };
      }}>  All Toys </NavLink>

      {users && <>
         <NavLink to="/add-toy" className='text-[18px] btn btn-ghost' style={({ isActive, isPending }) => {
            return { fontWeight: isActive ? "bold" : "", color: isPending ? "red" : "#E57C23", };
         }}> Add A Toy </NavLink>

         <NavLink to="/my-toys" className='text-[18px] btn btn-ghost' style={({ isActive, isPending }) => {
            return { fontWeight: isActive ? "bold" : "", color: isPending ? "red" : "#E57C23", };
         }}> My Toys </NavLink>
      </>}

      <NavLink to="/blog" className='text-[18px] btn btn-ghost' style={({ isActive, isPending }) => {
         return { fontWeight: isActive ? "bold" : "", color: isPending ? "red" : "#E57C23", };
      }}> Blogs </NavLink>
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
               <Link to="/"><img src="https://i.ibb.co/37g9qMt/project-logo.png" alt="Logo" className="w-16" /></Link>
               <Link to="/" className="text-2xl font-bold ml-2 text-[#E57C23]">Robotices Toys</Link>
            </div>

            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1">
                  {navItems}
               </ul>
            </div>

            <div className="navbar-end">
               {users &&
                  <div className="avatar tooltip tooltip-left mr-4" data-tip={users?.displayName}>
                     <div className="w-11 rounded-full ring  ring-offset-base-100 ring-offset-2 ml-2">
                        <img src={users?.photoURL} />
                     </div>
                  </div>}

               {users ?
                  <button onClick={handleLogOut} className='btn rounded-sm bg-gradient-to-r from-emerald-400 to-purple-400 hover:from-pink-500 hover:to-yellow-500 border-none '>Log Out</button> :
                  <Link to="/login">
                     <button className='btn rounded-sm bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 border-none'>Log In</button>
                  </Link>
               }
            </div>
         </div>
      </div>
   );
};

export default NavBar;