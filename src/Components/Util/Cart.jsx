import { useState } from "react";
import { useSelector } from "react-redux"

import ReactStars from "react-stars";

function Cart()
{
    const cart = useSelector((state)=>state.cart.cart);

    return(
    <>
        <div className="min-h-screen w-full p-4 flex flex-col items-center gap-2">
            <p className="w-full sm:w-2/3 text-sm"> Home / Dashboard / <span className="text-yellow-400"> Cart </span> </p>
            <h1 className="w-full lg:w-2/3 text-4xl font-bold"> Cart </h1>
            {
               !cart.length==0
                ?
                <div className="min-h-96 w-full text-center content-center text-4xl font-bold">
                    Cart is Empty
                </div>
                :
                <div className="w-full sm:w-2/3 flex gap-2">
                    <div className="w-full flex flex-col gap-2">
                        {
                            cart.map((it,index)=>{
                                return <div key={index} className="min-h-32 flex justify-between bg-gray-800">
                                    <img src={it.url} className="h-20"/>
                                    <div>
                                        <p className="text-lg font-bold"> {it.courseName} </p>
                                        <p className="text-sm font-bold"> {it.category} </p>
                                        <div> rating 4 </div>
                                        <ReactStars count={5} size={24} color2={'#ffd700'} edit={false} />
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    <div>

                    </div>
                </div>
            }
        </div>
    </>)
}

export default Cart