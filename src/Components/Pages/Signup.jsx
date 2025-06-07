import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { sendOtp } from "../../Operations/auth";
import { setSignUpData } from "../../Redux/Slices/authSlice";

function Signup()
{
    const [isStudent,setIsStudent] = useState(true);
    const [email,setEmail] = useState('');
    const [password,setpassword] = useState('');
    const [firstName,setfirstName] = useState('');
    const [lastName,setlastName] = useState('');
    const [confirmPassword,setconfirmPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function signUp(e)
    {
        e.preventDefault();
        console.log(firstName,lastName,email,password,confirmPassword);
        const accountType = (isStudent ? 'Student' : 'Instructor')
        dispatch(setSignUpData({firstName,lastName,email,password,confirmPassword,accountType}));
        dispatch(sendOtp(email,navigate))
    }

    return(
    <>
        <div className="h-full w-full flex flex-col-reverse lg:flex-row flex-wrap justify-center items-center sm:p-8">
            <div className="min-h-96 w-full lg:w-1/2 flex flex-col gap-6 items-center px-8 py-4">
                <h1 className="w-full text-2xl mt-10 lg:w-[80%] sm:text-3xl font-bold"> Join the millions learning to code with StudyNotion for free </h1>
                <div className="w-full lg:w-[80%]">
                    <p className="font-bold"> Build skills for today, tomorrow, and beyond. </p>
                    <p className="text-cyan-400"> <i> Education to future-proof your career.</i> </p>
                </div>
                <div className="w-full lg:w-[80%]">
                    <div className="h-fit w-fit rounded-3xl flex gap-8 text-xl px-4 py-2 bg-slate-800">
                        <div className={`px-2 py-1 cursor-pointer rounded-3xl ${isStudent ? 'bg-slate-900' : 'bg-transparent'}`} onClick={()=>setIsStudent(true)}> Student </div>
                        <div className={`px-2 py-1 cursor-pointer rounded-3xl ${!isStudent ? 'bg-slate-900' : 'bg-transparent'}`} onClick={()=>setIsStudent(false)}> Instructor </div>
                    </div>
                </div>
                <form onSubmit={signUp} className="w-full lg:w-[80%] flex flex-col gap-4">
                    <div className="flex justify-start flex-wrap sm:flex-nowrap gap-2 sm:gap-8">
                        <div className="flex flex-col gap-2">
                            <label> First Name <span className="text-red-600"> * </span> </label>
                            <input type='text' required placeholder="Enter the first name" className="font-mono bg-slate-800 border-none py-2 px-4 outline-none rounded-xl" onChange={(e)=>setfirstName(e.target.value)}/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label> Last Name <span className="text-red-600"> * </span></label>
                            <input type='text' required placeholder="Enter the last name" className="font-mono bg-slate-800 border-none py-2 px-4 outline-none rounded-xl" onChange={(e)=>setlastName(e.target.value)}/>
                        </div> 
                    </div>
                    <div className="w-56 flex flex-col gap-2">
                        <label> Email address <span className="text-red-600"> * </span></label>
                        <input type='email' required placeholder="Enter the email address" className="font-mono bg-slate-800 border-none py-2 px-4 outline-none rounded-xl" onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="flex justify-start flex-wrap sm:flex-nowrap gap-2 sm:gap-8">
                        <div className="flex flex-col gap-2">
                            <label> Create Passowrd <span className="text-red-600"> * </span></label>
                            <input type='password' required placeholder="Enter the first name" className="font-mono bg-slate-800 border-none py-2 px-4 outline-none rounded-xl" onChange={(e)=>setpassword(e.target.value)}/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label> Confirm Password <span className="text-red-600"> * </span></label>
                            <input type='password' required placeholder="Enter the last name" className="font-mono bg-slate-800 border-none py-2 px-4 outline-none rounded-xl" onChange={(e)=>setconfirmPassword(e.target.value)}/>
                        </div> 
                    </div>
                    <button type="submit" className="bg-yellow-400 font-semibold p-2 rounded-xl hover:bg-yellow-600 text-black"> Create Account </button>
                </form>
            </div>
            <div className="w-full sm:w-1/2 flex justify-center relative">
                <img src="signup.webp" className="h-52 sm:h-96 lg:translate-x-12 rouded-xl shadow-xl shadow-blue-600"/>
            </div>
        </div>
    </>)
}

export default Signup;