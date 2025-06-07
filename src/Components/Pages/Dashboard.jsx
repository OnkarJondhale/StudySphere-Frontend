import { NavLink } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { logout } from "../../Operations/auth.js"
import { Outlet } from "react-router-dom"

import { FaRegUserCircle } from "react-icons/fa";
import { RiDashboard2Line } from "react-icons/ri";
import { RiComputerLine } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";


function Dashboard() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const signUpData = useSelector((state)=>state.auth.signUpData)

    function logouthandler() {
        dispatch(logout(navigate));
    }

    return (
        <div className="min-h-screen w-full flex flex-col sm:flex-row">
           {
            signUpData.accountType==='Student' 
            ? 
                <div className="sm:min-h-screen w-full text-sm sm:h-full sm:w-56 bg-slate-800 flex flex-col flex-wrap sm:py-8 sm:text-lg sm:px-4 sm:gap-4 rounded-xl py-4 px-4"> 
                    <div className="w-full flex justify-between sm:justify-start sm:flex-col sm:gap-2">
                        <NavLink to='/dashboard/myprofile' className={({ isActive }) => isActive ? 'text-yellow-400 flex gap-1 items-center' : 'text-white flex gap-1 items-center'}> <span className="hidden sm:block"> <FaRegUserCircle /> </span> My Profile </NavLink>
                        <NavLink to='/dashboard/enrolledcourses' className={({ isActive }) => isActive ? 'text-yellow-400 flex gap-1 items-center' : 'text-white flex gap-1 items-center'}> <span className="hidden sm:block"> <RiComputerLine /> </span> Enrolled Courses </NavLink>
                        <NavLink to='/dashboard/cart' className={({ isActive }) => isActive ? 'text-yellow-400 flex gap-1 items-center' : 'text-white flex gap-1 items-center'}> <span className="hidden sm:block"> <IoCartOutline /> </span> Cart </NavLink>
                    </div>
                    <div className="h-1 w-full border-t-[0.08rem] border-white my-1"></div> 
                    <div className="w-full flex justify-between sm:justify-start sm:flex-col sm:gap-2">
                        <NavLink to='/dashboard/setting' className={({ isActive }) => isActive ? 'text-yellow-400 flex gap-1 items-center' : 'text-white flex gap-1 items-center'}> <span className="hidden sm:block"> <IoMdSettings /> </span> Settings </NavLink>
                        <div>
                            <button onClick={logouthandler} className="text-white flex gap-1 items-center bg-red-600 px-3 py-1 rounded-md"> <span className="hidden sm:block"> <IoIosLogOut /> </span> Logout </button>
                        </div>
                    </div>
                </div> 
                : 
                <div className="sm:min-h-screen w-full text-sm sm:h-full sm:w-56 bg-slate-800 flex flex-col flex-wrap sm:py-8 sm:text-lg sm:px-4 sm:gap-4 rounded-xl py-4 px-4"> 
                    <div className="w-full flex justify-between sm:justify-start sm:flex-col sm:gap-2">
                        <NavLink to='/dashboard/myprofile' className={({ isActive }) => isActive ? 'text-yellow-400 flex gap-1 items-center' : 'text-white flex gap-1 items-center'}> <span className="hidden sm:block"> <FaRegUserCircle /> </span> My Profile </NavLink>
                        <NavLink to='/dashboard/instructor' className={({ isActive }) => isActive ? 'text-yellow-400 flex gap-1 items-center' : 'text-white flex gap-1 items-center'}> <span className="hidden sm:block"> <RiDashboard2Line /> </span> Dashboard </NavLink>
                        <NavLink to='/dashboard/mycourses' className={({ isActive }) => isActive ? 'text-yellow-400 flex gap-1 items-center' : 'text-white flex gap-1 items-center'}> <span className="hidden sm:block"> <RiComputerLine /> </span> My Courses </NavLink>
                        <NavLink to='/dashboard/addcourse' className={({ isActive }) => isActive ? 'text-yellow-400 flex gap-1 items-center' : 'text-white flex gap-1 items-center'}> <span className="hidden sm:block"> <IoMdAdd /> </span> Add Courses </NavLink>
                    </div>
                    <div className="h-1 w-full border-t-[0.08rem] border-white my-1"></div> 
                    <div className="w-full flex justify-between sm:justify-start sm:flex-col sm:gap-2">
                        <NavLink to='/dashboard/setting' className={({ isActive }) => isActive ? 'text-yellow-400 flex gap-1 items-center' : 'text-white flex gap-1 items-center'}> <span className="hidden sm:block"> <IoMdSettings /> </span> Settings </NavLink>
                        <div>
                            <button onClick={logouthandler} className="text-white flex gap-1 items-center bg-red-600 px-3 py-1 rounded-md"> <span className="hidden sm:block"> <IoIosLogOut /> </span> Logout </button>
                        </div>
                    </div>
                </div> 
           }

            <div className="w-full">
                <Outlet />
            </div>
        </div>
    );
}

export default Dashboard;
