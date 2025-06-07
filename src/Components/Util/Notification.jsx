import { useState } from "react";
import { useSelector } from "react-redux";
import { IoMdClose } from "react-icons/io";


function Notification({message})
{
    const [close,setClose] = useState(false);

    return(
        <>
            <div>
                {
                    close ? 
                        <div className="absolue min-h-12 w-full bg-blue-400 text-black font-semibold text-center content-center text-lg">
                            {message}
                            
                            <div className="absolute top-3 right-2 text-xl cursor-pointer hover:bg-blue-600 p-1" onClick={()=>setClose(false)}>
                                <IoMdClose />
                            </div>
                        </div> 
                        : 
                        null
                }
            </div>
        </>
    )
}

export default Notification;