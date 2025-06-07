import { useState } from "react";
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

import { getEnrolledCourses } from "../../Operations/course";

import ProgressBar from "@ramonak/react-progress-bar";

function EnrolledCourses()
{
    const [enrolledCoursesData,setEnrolledCourseData] = useState([]);
    const token = useSelector((state)=>state.auth.token);
    const dispatch = useDispatch();

    useEffect(()=>{
       async function getEnrolledCoursesData()
       {
            const enrolledCourses = await dispatch(getEnrolledCourses(token));
            setEnrolledCourseData(enrolledCourses);
            console.log(enrolledCourses)
       }

       getEnrolledCoursesData();
    },[])

    return(
    <>
        <div className="min-h-screen w-full p-4 flex flex-col items-center gap-2">
            <p className="w-full sm:w-2/3 text-sm"> Home / Dashboard / <span className="text-yellow-400"> Enrolled Courses </span> </p>
            <h1 className="w-full lg:w-2/3 text-2xl sm:text-4xl font-bold"> Enrolled Courses </h1>

            {
                enrolledCoursesData.length>0 ?
                <div className="w-full lg:w-2/3 flex flex-col gap-2">
            <div className="min-h-12 w-full flex justify-between bg-gray-600 mt-4 items-center px-2 rounded-xl font-semibold">
                    <p> Course Name  </p>
                    <p> Duration </p>
                    <p> Progress </p>
                </div>
                <div className="w-full flex flex-col gap-2">
                    {
                        enrolledCoursesData.map((it,index)=>{
                            return <div key={index} className="min-h-20 w-full bg-gray-800 flex items-center px-2 rounded-xl justify-between">
                                        <div className="flex gap-4 items-center">
                                            <img src={it.url} className="h-8 sm:h-14 "/>
                                            <div className="flex flex-col gap-1">
                                                <p className="text-lg font-bold"> {it.courseName} </p>
                                                <p className="text-xs w-full hidden sm:block"> {it.courseDescription} </p>
                                            </div>
                                        </div>
                                        <p className="text-sm sm:text-base"> {it.duration} </p> 
                                        <div className="flex flex-col gap-2">
                                            <p className="text-xs font-mono"> Percentage  {it.progressPercentage || 0}% </p>
                                            <ProgressBar completed={it.progressPercentage || 0} bgColor="cyan" labelColor="#151414" maxCompleted={100}/>
                                        </div>
                            </div>
                        })
                    }
                </div>
                </div>
                :
                <div className="min-h-96 w-full text-center content-center text-4xl font-bold">
                    Not Enrolled in any course
                </div>
            }
        </div>
    </>)
}

export default EnrolledCourses