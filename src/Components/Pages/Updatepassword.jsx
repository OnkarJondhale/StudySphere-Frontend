import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

import {resetPassword} from '../../Operations/auth.js';

function Updatepassword()
{
    const {loading} = useSelector((state)=>state.auth.loading)
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();


    function resetpasswordhandler(e)
    {
        e.preventDefault();
        const token = location.pathname.split("/").at(-1)
        console.log(password,confirmPassword)
        dispatch(resetPassword(token,password,confirmPassword,navigate))
    }

    return(<>
            {
                loading ? 
                <div className="absolute top-20 left-1/2 -translate-x-1/2 bg-gray-200 text-black p-2 rounded-xl"> Loading... </div>
                :
                null  
            }

        <form onSubmit={resetpasswordhandler} className="absolute min-h-96 min-w-80 p-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2">
            <h1 className="text-4xl font-bold"> Choose a new Password </h1>
            <p className="text-lg"> Almost done. Enter your new password and you are all set </p>
            <div className="flex flex-col gap-1">
                <label> Password </label>
                <input placeholder="Enter new password" className="bg-slate-800 font-mono p-2 rounded-xl outline-yellow-400" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className="flex flex-col gap-1">
                <label> Confirm Password </label>
                <input placeholder="Confirm new password" className="bg-slate-800 font-mono p-2 rounded-xl outline-yellow-400" onChange={(e)=>setConfirmPassword(e.target.value)}/>
            </div>
            <button type="submit" className="text-lg bg-yellow-400 hover:bg-yellow-600 text-black font-bold p-2 rounded-xl mt-4"> Reset Password </button>
            <Link to='/login' className="flex gap-2 p-2 items-center text-sm">
                        <IoMdArrowBack /> Back to Login
            </Link>
        </form>
    </>)
}

export default Updatepassword;