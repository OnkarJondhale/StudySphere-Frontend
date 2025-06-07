import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import OtpInput from 'react-otp-input';

import { sendOtp } from "../../Operations/auth";

import { IoMdArrowBack } from "react-icons/io";
import { PiClockCounterClockwise } from "react-icons/pi";
import { signUp } from "../../Operations/auth";


function Otp()
{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [otp,setOtp] = useState('');
    const signUpData = useSelector((state) => state.auth.signUpData);

    console.log(signUpData)

    useEffect(()=>{
        function check()
        {
            if(!signUpData)
            {
                navigate('/login');
            }
        }
        check();
    },[]);

    function verifyOtp()
    {
        const updatedData = { ...signUpData, otp: otp };
        dispatch(signUp(updatedData,navigate))
    }

    function resendhandler()
    {
        const email = signUpData.email;
        dispatch(sendOtp(email,navigate))
    }

    return(
        <>
            <div className="min-h-60 w-80 sm:min-w-96 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2 p-4">
                    <h1 className="text-3xl font-bold"> Verify Email </h1>
                    <p className="text-lg"> A verification code has been sent to you. Enter the code below </p>
                    <div className="w-full py-4 flex justify-between gap-2 text-xl">
                         <OtpInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={6}
                            renderInput={(props) => (
                                <input
                                {...props}
                                placeholder="-"
                                style={{
                                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                                }}
                                className="h-10 w-10 sm:h-12 sm:w-12 border-0 bg-slate-800 rounded-[0.5rem] text-white aspect-square text-center focus:border-0 focus:outline-2 focus:outline-yellow-50"
                                />
                            )}
                            containerStyle={{
                                justifyContent: "space-between",
                                gap: "0 6px",
                            }}
                        />
                    </div>
                    <button className="text-lg bg-yellow-400 hover:bg-yellow-600 text-black font-bold p-2 rounded-xl" onClick={verifyOtp}> Verify Email </button>
                    <div className="w-full flex justify-between">
                        <Link to='/signup' className="flex gap-2 p-2 items-center text-sm">
                            <IoMdArrowBack /> Back to Sign up
                        </Link>
                        <button className="flex gap-2 p-2 items-center text-sm text-cyan-400" onClick={resendhandler}>
                            <PiClockCounterClockwise /> Resend it
                        </button>
                    </div>
            </div>
        </>
    );

}

export default Otp