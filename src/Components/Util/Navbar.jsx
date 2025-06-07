import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../App.css"

import {setToken} from "../../Redux/Slices/authSlice.js"
import { apiConnector } from "../../Services/apiConnector.js";

import ProfileDropDown from "../Util/ProfileDropDown.jsx"

import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";

function Navbar()
{
    const [menu,setMenu] = useState(true);
    const [category,setCategory] = useState([]);
    const [catalog,setCatalog] = useState(true);

    const {token} = useSelector((state)=>state.auth);
    const {user} = useSelector((state)=>state.profile);
    const {totalItems} = useSelector((state)=>state.cart);
    
    function cataloghandler()
    {
        setCatalog(!catalog)
    }

    return(
        <>
            <div className="relative min-h-16 w-full flex justify-between px-2 lg:px-24 items-center border-b-[0.08rem] border-white">
                    <NavLink to='/' className="font-bold text-xl lg:text-3xl text-gradient"> StudySphere </NavLink> 
                    <div className="sm:flex text-sm gap-2 lg:gap-6 lg:text-lg hidden">
                        <NavLink to='/' className={({isActive})=> isActive ? 'text-yellow-400' :'text-white'}> Home </NavLink>
                        {
                            user ? 
                            user.accountType === 'Student' ?
                            <NavLink to='/courses' className={({isActive})=> isActive ? 'text-yellow-400' :'text-white'}> Courses </NavLink>
                            : null
                            :
                            <NavLink to='/courses' className={({isActive})=> isActive ? 'text-yellow-400' :'text-white'}> Courses </NavLink>
                        }
                        <NavLink to='/aboutus' className={({isActive})=> isActive ? 'text-yellow-400' :'text-white'}> About us </NavLink>
                        <NavLink to='/contactus' className={({isActive})=> isActive ? 'text-yellow-400' :'text-white'}> Contact us </NavLink>
                    </div>

                    <div>
                        {
                            token ?
                            <div className="flex gap-4 items-center">
                                {
                                    user && user.accountType!="Instructor" && (
                                        <Link to='/dashboard/cart' className="hidden sm:flex">
                                            <div className="min-h-6 min-w-6 relative">
                                                <div className="text-3xl">  <IoCartOutline /> </div>
                                                {
                                                    totalItems>0 && (
                                                        <div className="h-4 w-4 text-xs p-2 absolute -top-2 -right-2 bg-red-600 text-white flex justify-center items-center rounded-full">
                                                            {totalItems}
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        </Link>
                                    )
                                }

                                <div className="hidden sm:flex">
                                    <ProfileDropDown />
                                </div>
                            </div>
                            : 
                            <div className="sm:flex gap-4 hidden">
                                <NavLink to='/signup' className='p-1 lg:px-2 lg:py-1 bg-blue-800 rounded-xl'> Sign Up </NavLink>
                                <NavLink to='/login' className='p-1 lg:px-2 lg:py-1 bg-blue-800 rounded-xl'> Login </NavLink>
                            </div>
                        }
                    </div>

                    <div className="sm:hidden text-3xl cursor-pointer bg-gray-800" onClick={()=> setMenu(!menu)}>
                            {
                               menu ? <IoMenu /> : <IoMdClose />
                            }
                    </div>

                    <div className={`absolute py-16 h-[580px] z-[1000] w-4/5 sm:hidden bg-gradient-to-tr from-slate-700 to-slate-900 right-0 top-16  ${menu ? 'sidebar-hidden' : 'sidebar-visible'}`}>
                        <div className="w-full flex flex-col gap-6 items-center p-10">
                            <NavLink to='/' className={({isActive})=> isActive ? 'text-yellow-400 text-xl' :'text-white text-xl'}> Home </NavLink>
                            <div className="relative">
                                <button className="flex z-[1000] gap-1 ml-3 items-center text-xl" onClick={cataloghandler}> Catalog { catalog ? <IoIosArrowDown /> : <IoIosArrowUp /> } </button>
                                {
                                    catalog ? 
                                    null
                                    :
                                    <div className={`absolute min-h-24 w-56 p-2 bg-white text-black font-semibold flex flex-col gap-2 -translate-x-14 translate-y-4 ${catalog ? 'sidebar-up' : 'sidebar-down'} rounded-xl`}>
                                        {
                                            category.length>0 ? category.map((it,key)=>{
                                                return <Link to={`/${it.name}`} key={key} className="hover:bg-gray-600 p-1 rounded-xl"> {it.name} </Link>
                                            }) :  <div className="text-center content-center"> No categories found </div>
                                        }
                                    </div>
                                }
                            </div>
                            <NavLink to='/aboutus' className={({isActive})=> isActive ? 'text-yellow-400 text-xl' :'text-white text-xl'}> About us </NavLink>
                            <NavLink to='/contactus' className={({isActive})=> isActive ? 'text-yellow-400 text-xl' :'text-white text-xl'}> Contact us </NavLink>
                            
                            <div className="absolute top-0 right-0 p-4">
                                {
                                    token ?
                                    <div className="flex gap-4 items-center">
                                        {
                                            user && user.accountType!="Instructor" && (
                                                <Link to='/dashboard/cart' className="">
                                                    <div className="min-h-6 min-w-6 relative">
                                                        <div className="text-2xl"> <IoCartOutline /> </div>
                                                        {
                                                            totalItems>0 && (
                                                                <div className="h-4 w-4 text-xs p-2 absolute -top-2 -right-2 bg-red-600 text-white flex justify-center items-center rounded-full">
                                                                    {totalItems}
                                                                </div>
                                                            )
                                                        }
                                                    </div>
                                                </Link>
                                            )
                                        }
                                        <ProfileDropDown />
                                    </div>
                                    : 
                                    <div className="flex gap-4">
                                        <NavLink to='/signup' className='p-1 lg:px-2 lg:py-1 bg-blue-800 rounded-xl'> Sign Up </NavLink>
                                        <NavLink to='/login' className='p-1 lg:px-2 lg:py-1 bg-blue-800 rounded-xl'> Login </NavLink>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>

            </div>
        </>
    )
}

export default Navbar;