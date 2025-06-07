import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { login } from "../../Operations/auth";

function Login()
{
    const [email,setEmail] = useState('');
    const [password,setpassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (e) => 
        { 
        e.preventDefault(); 
        dispatch(login({email, password},navigate)); 
    };

    return(
    <>
        <div className="h-full w-full flex flex-col-reverse lg:flex-row flex-wrap justify-center items-center sm:p-8">
            <div className="min-h-96 w-full lg:w-1/2 flex flex-col gap-6 items-center px-8 py-4">
                <h1 className="w-full text-2xl mt-10 lg:w-[80%] sm:text-3xl font-bold"> Welcome Back👋 </h1>
                <div className="w-full lg:w-[80%]">
                    <p className="font-bold"> Build skills for today, tomorrow, and beyond. </p>
                    <p className="text-cyan-400"> <i> Education to future-proof your career.</i> </p>
                </div>
                <form onSubmit={handleLogin} className="w-full lg:w-[80%] flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-2">
                            <label> Email Address <span className="text-red-600"> * </span> </label>
                            <input type='email' required placeholder="Enter the email" className="font-mono bg-slate-800 border-none py-2 px-4 outline-none rounded-xl" onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label> Password <span className="text-red-600"> * </span> </label>
                            <input type='password' required placeholder="Enter the password" className="font-mono bg-slate-800 border-none py-2 px-4 outline-none rounded-xl" onChange={(e)=>setpassword(e.target.value)}/>
                        </div> 
                        <Link to='/resetpassword' className="text-cyan-400 text-end content-center text-xs font-mono hover:underline"> forgot password </Link>
                    </div>
                    
                    <button type='submit' className="bg-yellow-400 font-semibold p-2 rounded-xl hover:bg-yellow-600 text-black"> Sign In </button>
                </form>
            </div>
            <div className="w-full sm:w-1/2 flex justify-center relative">
                <img src="login.webp" className="h-52 sm:h-96 lg:translate-x-12 rouded-xl shadow-xl shadow-blue-600"/>
            </div>
        </div>
    </>)
}

export default Login;