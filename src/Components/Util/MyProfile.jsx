import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

import { getProfileData } from "../../Operations/profile";

import { FaRegEdit } from "react-icons/fa";


function MyProfile()
{
    const token = useSelector((state)=>state.auth.token);
    const userData = useSelector((state)=>state.auth.signUpData);
    const profileData = useSelector((state)=>state.profile.additionalDetails);
    const dispatch = useDispatch();

    useEffect(()=>{
        function getData()
        {
            dispatch(getProfileData(token));
        }
        getData();
    },[]);

    return(
    <>
        <div className="min-h-full p-4 bg-gray-900 flex flex-col items-center gap-8 mt-2">
            <h1 className="w-full lg:w-2/3 text-4xl font-bold"> My Profile </h1>

            <div className="min-h-32 w-full lg:w-2/3 flex justify-between lg:items-center p-4 bg-slate-800 rounded-xl">
                    <div className="flex gap-2 items-center">
                        <img src={userData.avatar} className="h-12 w-12 lg:h-20 lg:w-20 rounded-full"/>
                        <div className="flex flex-col gap-1">
                            <p> {userData.firstName} {" "} {userData.lastName} </p>
                            <p className="text-[0.8rem]"> {userData.email} </p>
                        </div>
                    </div>
                    <Link to='/dashboard/setting'>
                        <button className="bg-yellow-400 text-black font-semibold p-1 lg:px-4 lg:py-2 rounded-xl hover:bg-yellow-600 shadow-md shadow-black hover:scale-95 transition-all duration-200 flex gap-1 items-center">  <FaRegEdit /> Edit </button>
                    </Link>
            </div>

            
            <div className="min-h-32 w-full text-wrap lg:w-2/3 flex justify-between lg:items-center p-4 bg-slate-800 rounded-xl">
                    <div className="flex flex-col gap-2">
                        <p className="text-3xl font-semibold"> About </p>
                        {
                            profileData && profileData.about ? 
                            <p> {profileData.about} </p> 
                            :
                            <p className="text-sm"> Write something about yourself </p>
                        }
                    </div>
                    <Link to='/dashboard/setting'>
                        <button className="bg-yellow-400 text-black font-semibold p-1 lg:px-4 lg:py-2 rounded-xl hover:bg-yellow-600 shadow-md shadow-black hover:scale-95 transition-all duration-200 flex gap-1 items-center">  <FaRegEdit /> Edit </button>
                    </Link>
            </div>

            <div className="min-h-32 w-full lg:w-2/3 flex justify-between items-start p-4 bg-slate-800 rounded-xl">
                    <div className="w-4/5 lg:w-2/3 flex flex-col gap-6">
                       <p className="text-xl font-semibold"> Personal details </p>

                       <div className="w-full flex gap-2">

                            <div className="w-full lg:w-1/2 flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                    <p> First Name </p>
                                    <p className="text-sm"> {userData.firstName} </p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p> Email </p>
                                    <p className="text-xs text-wrap"> {userData.email} </p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p> Gender </p> 
                                    <div className="text-sm">
                                        {
                                            profileData && profileData.gender ? 
                                            profileData.gender
                                            :
                                            <p> Edit your gender </p>
                                        }
                                    </div> 
                                </div>
                            </div>

                            <div className="w-full lg:w-1/2 flex flex-col gap-4">
                                 <div className="flex flex-col gap-2">
                                    <p> Last Name </p>
                                    <p className="text-sm"> {userData.lastName} </p>  
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p> Phone No </p>
                                    <div className="text-sm">
                                        {
                                            profileData && profileData.contactNumber ? 
                                            profileData.contactNumber
                                            :
                                            <p> Edit your contact Number </p>
                                        }
                                    </div> 
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p> Date of Birth </p>
                                    <div className="text-sm">
                                        {
                                            profileData && profileData.dob ? 
                                            profileData.dob
                                            :
                                            <p> Edit your date of birth </p>
                                        }
                                    </div> 
                                </div>
                            </div>
                            
                       </div>

                    </div>
                    <Link to='/dashboard/setting'>
                        <button className="bg-yellow-400 text-black font-semibold p-1 lg:px-4 lg:py-2 rounded-xl hover:bg-yellow-600 shadow-md shadow-black hover:scale-95 transition-all duration-200 flex gap-1 items-center">  <FaRegEdit /> Edit </button>
                    </Link>
            </div>

        </div>
    </>)
}

export default MyProfile