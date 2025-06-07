import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

import { getPasswordResetToken } from "../../Operations/auth";

function Resetpassword()
{
    const [check,setCheck] = useState(true);
    const [email,setEmail] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function resetpasswordhandler(e)
    {
        e.preventDefault();
        dispatch(getPasswordResetToken(email,navigate))
        setCheck(!check);
    }

    return(
        <>
            <div>
                {
                    check ? 
                    <form onSubmit={resetpasswordhandler} className="min-h-60 w-80 sm:min-w-96 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2 p-4">
                            <h1 className="text-3xl font-bold"> Reset your password</h1>
                            <p className="text-lg"> Have no fear. We'll email you instructions to reset your password. If you dont have access to your email we can try account recovery </p>
                            <div className="w-full flex flex-col gap-2 mt-4">
                                <label> Email address <span className="text-red-600"> * </span> </label>
                                <input type="email" required placeholder='Enter your email' className="p-2 w-full rounded-xl bg-slate-800 outline-yellow-400" onChange={(e)=>setEmail(e.target.value)}/>
                            </div>
                            <button type="submit" className="text-lg bg-yellow-400 hover:bg-yellow-600 text-black font-bold p-2 rounded-xl mt-4"> Submit </button>
                                <Link to='/login' className="flex gap-2 p-2 items-center text-sm">
                                    <IoMdArrowBack /> Back to Login
                                </Link>
                    </form> 
                    :
                    <div className="min-h-60 w-80 sm:min-w-96 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2 p-4">
                            <h1 className="text-3xl font-bold"> Check email </h1>
                            <p className="text-lg"> We have sent the reset email to <span className="font-mono underline text-cyan-400"> {email} </span> </p>
                            <button type="submit" className="text-lg bg-yellow-400 hover:bg-yellow-600 text-black font-bold p-2 rounded-xl mt-4"> Resend Email </button>
                                <Link to='/login' className="flex gap-2 p-2 items-center text-sm">
                                    <IoMdArrowBack /> Back to Login
                                </Link>
                    </div> 
                }
            </div>
        </>
    );

}

export default Resetpassword