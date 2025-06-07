import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {getMyCourses} from "../../Operations/course.js";

function MyCourses()
{
    const [myCourse,setMyCourse] = useState([]);
    const token = useSelector((state)=>state.auth.token);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const course = useSelector((state)=>state.course.course)

    async function getData()
    {
        const result = await dispatch(getMyCourses(token));
        setMyCourse(result);
    }

    useEffect(()=>{
        getData();
    },[])

    function edithandler(e)
    {
        console.log(e.target.id,myCourse[e.target.id]);
        navigate(`/dashboard/editcourse/${myCourse[e.target.id]._id}`)
    }

    return(
    <>
        <div className="min-h-screen w-full p-4 flex flex-col items-center gap-8">
            <h1 className="w-full sm:w-2/3 text-4xl font-bold text-center mb-4"> My Courses </h1>

            <div className="w-full lg:w-2/3 flex flex-col gap-6">
            {
                myCourse && myCourse.map((it,key)=>{
                    return <div key={key} className="w-full sm:flex bg-gray-800 rounded-xl overflow-hidden items-center">
                            
                            <img src={it.url} className="h-32 sm:h-auto w-full sm:w-48 object-cover"/>
                           
                            <div className="p-4 flex flex-col justify-between flex-1">
                                <div>
                                    <h2 className="text-lg font-bold text-white">{it.courseName}</h2>
                                    <p className="text-gray-400 mt-2">{it.courseDescription}</p>
                                </div>
                                <div className="flex justify-between mt-4">
                                    <div className="text-green-600 font-semibold">{it.price}</div>
                                    <div className="text-sm text-gray-500">{it.whatYouWillLearn}</div>
                                </div>
                            </div>

                            <div className="p-4 flex flex-col gap-2 justify-center sm:justify-end sm:flex-row sm:gap-4 sm:ml-auto">
                                <button id={key} className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-500 transition-all duration-200" onClick={edithandler}> Edit </button>
                            </div>
                        </div>
                })
            }
            </div>
        </div>
    </>)
}

export default MyCourses;
