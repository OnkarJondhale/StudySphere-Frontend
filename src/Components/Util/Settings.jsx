import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { updateProfileDetails } from "../../Operations/profile";
import { uploadFile } from "../../Operations/profile";

import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";


function Setting() {
    const token = useSelector((state)=>state.auth.token);
    const userData = useSelector((state) => state.auth.signUpData);
    const [imageFile,setImageFile] = useState('');
    const [selectedImage, setSelectedImage] = useState(userData.avatar);
    const {register,handleSubmit,reset,formState : {errors}} = useForm();
    const dispatch = useDispatch();


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImageFile(file);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    function personaldetailhandler(data)
    {
        console.log(data);
        if(data.contactNumber=='Add contact number')
        {
            data.contactNumber = null;
        }
        if(!data.dob)
        {
            data.dob = null;
        }
        console.log(data);
        dispatch(updateProfileDetails(token,data));
    }

    function updateImage()
    {
        const formData = new FormData()
        formData.append("file", imageFile)
        dispatch(uploadFile(token,formData))
    }

    function updateProfile()
    {

    }

    return (
        <div className="min-h-full p-4 bg-gray-900 flex flex-col items-center gap-8 mt-2">
            <h1 className="w-full lg:w-2/3 text-4xl font-bold"> Settings </h1>
            <div className="min-h-32 w-full lg:w-2/3 flex justify-between lg:items-center p-4 bg-slate-800 rounded-xl">
                <div className="flex gap-4 items-center">
                    <img src={selectedImage} className="h-12 w-12 lg:h-20 lg:w-20 rounded-full" />
                    <div className="flex flex-col gap-2">
                        <p className="font-semibold"> Change profile photo </p> 
                        <div className="flex gap-2 relative">
                            <label className="h-fit w-fit text-sm sm:text-base bg-gray-400 text-black font-semibold p-1 lg:px-4 lg:py-2 rounded-xl hover:bg-gray-600 shadow-md shadow-black hover:scale-95 transition-all duration-200 cursor-pointer relative z-10">
                                Select File
                                <input 
                                    type="file" 
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                                    id="fileInput" 
                                    onChange={handleImageChange} 
                                />
                            </label>
                            <button className="text-sm sm:text-base bg-yellow-400 text-black font-semibold p-1 lg:px-4 lg:py-2 rounded-xl hover:bg-yellow-600 shadow-md shadow-black hover:scale-95 transition-all duration-200 flex gap-1 items-center relative z-10" onClick={updateImage}>  
                                <FaRegEdit /> Upload 
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="min-h-32 w-full lg:w-2/3 p-4 bg-slate-800 rounded-xl flex flex-col gap-2 sm:px-8">
                <p className="text-lg font-bold"> Personal Information </p>
                <form onSubmit={handleSubmit(personaldetailhandler)} className="w-full flex flex-col gap-2 p-1">
                        <div className="w-full flex justify-between flex-wrap gap-2">
                                <div className="flex flex-col gap-1">
                                    <label>
                                        First Name
                                    </label>
                                    <input className="w-full sm:w-72 bg-slate-600 p-2 rounded-xl" {...register("firstName")} defaultValue={userData?.firstName} />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label>
                                        Last Name
                                    </label>
                                    <input className="w-full sm:w-72 bg-slate-600 p-2 rounded-xl" {...register("lastName")} defaultValue={userData?.lastName}/>
                                </div>
                        </div>
                        <div className="w-full flex justify-between flex-wrap gap-2">
                                <div className="flex flex-col gap-1">
                                    <label>
                                        Date Of Birth
                                    </label>
                                    {
                                        userData?.additionalDetails?.dob 
                                        ? 
                                        <div className="flex gap-2">
                                            <p className="bg-slate-600 p-2 roundex-xl"> {userData?.additionalDetails?.dob} </p>
                                            <input type="date" className="h-10 w-8 px-1 bg-slate-600 roundex-xl text-black" {...register("dob")} defaultValue={userData?.additionalDetails?.dob}/>
                                        </div>
                                        :
                                        <input type="date" className="w-full sm:w-72 bg-slate-600 p-2 rounded-xl" {...register("dob")} />
                                    }
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label>
                                        Gender
                                    </label>
                                    <select className="w-full sm:w-72 bg-slate-600 p-2 rounded-xl" {...register("gender")} defaultValue={userData?.additionalDetails?.gender}>
                                        <option> Male </option>
                                        <option> Female </option>
                                        <option> Other </option>
                                    </select>
                                </div>
                        </div>
                        <div className="w-full flex justify-between flex-wrap gap-2">
                                <div className="flex flex-col gap-1">
                                    <label>
                                        Contact Number
                                    </label>
                                    <input className="w-full sm:w-72 bg-slate-600 p-2 rounded-xl" {...register("contactNumber")} defaultValue={userData?.additionalDetails?.contactNumber ? userData?.additionalDetails?.contactNumber : 'Add contact number'}/>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label>
                                        About
                                    </label>
                                    <input className="w-full sm:w-72 bg-slate-600 p-2 rounded-xl" {...register("about")} defaultValue={userData?.additionalDetails?.about ? userData?.additionalDetails?.about : 'write something about yourself '}/>
                                </div>
                        </div>
                        <div className="w-full flex justify-end items-center gap-4 mt-10">
                            <Link to='/dashboard/myprofile'>
                                <button className="bg-gray-400 text-black font-semibold px-4 py-2 rounded-xl text-sm hover:bg-gray-600 shadow-md shadow-black hover:scale-95 transition-all duration-200"> Cancel </button>
                            </Link>
                            <button type="submit" className="text-sm sm:text-base bg-yellow-400 text-black font-semibold p-1 lg:px-3  rounded-xl hover:bg-yellow-600 shadow-md shadow-black hover:scale-95 transition-all duration-200 flex gap-1 items-center relative z-10">  
                                        <FaRegEdit /> Update 
                            </button>
                        </div>
                </form>
            </div>

            <div className="min-h-32 w-full lg:w-2/3 p-4 bg-slate-800 rounded-xl flex flex-col gap-4 sm:px-8">
                <p className="text-lg font-bold"> Change Password </p>
                <div className="w-full flex justify-between flex-wrap gap-2">
                    <div className="flex flex-col gap-1">
                        <label>
                                Current Password
                        </label>
                        <input type='password' className="w-full sm:w-72 bg-slate-600 p-2 rounded-xl" placeholder="Enter current password"/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>
                                New Password
                        </label>
                        <input type='password' className="w-full sm:w-72 bg-slate-600 p-2 rounded-xl" placeholder="Enter new password"/>
                    </div>
                </div>
                <div className="w-full flex justify-end items-center gap-4">
                    <Link to='/dashboard/myprofile'>
                        <button className="bg-gray-400 text-black font-semibold px-4 py-2 rounded-xl text-sm hover:bg-gray-600 shadow-md shadow-black hover:scale-95 transition-all duration-200"> Cancel </button>
                    </Link>
                    <button type="submit" className="text-sm sm:text-base bg-yellow-400 text-black font-semibold p-1 lg:px-3  rounded-xl hover:bg-yellow-600 shadow-md shadow-black hover:scale-95 transition-all duration-200 flex gap-1 items-center relative z-10">  
                        <FaRegEdit /> Update 
                    </button>
                </div>
            </div>

            <div className="min-h-32 w-full lg:w-2/3 p-4 bg-rose-900 rounded-xl flex gap-8 sm:px-8">
                    <div className="h-full p-4 text-xl sm:text-4xl rounded-full bg-rose-600">
                        <MdDeleteForever />
                    </div>
                    <div className="w-full">
                        <p className="text-lg font-semibold"> Delete Account </p>
                        <p className="w-full sm:w-2/3 lg:w-1/2"> Would you like to delete account? This account may contain Paid Courses. Deleting your account is permanent and will remove all the contain associated with it. </p>
                        <button className="text-rose-400 hover:text-rose-600"> <i> I want to delete my account. </i> </button>
                    </div>
            </div>
        </div>
    );
}

export default Setting;
