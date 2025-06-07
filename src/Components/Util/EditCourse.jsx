import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom";

import { getCourseDetails } from "../../Operations/course";

export default function EditCourse() {
  const location = useLocation();
  const dispatch = useDispatch();
  const courseId = location.pathname.split("/")[3];
  const token = useSelector((state)=>state.auth.token);
  const [course,setCourse] = useState(null);

  useEffect(()=>{

    async function getCourseData()
    {
      const course = await dispatch(getCourseDetails(courseId,token))
      setCourse(course);
      console.log(course);
    }

    getCourseData();

  },[])

  return (
    <div className="min-h-screen w-full">
        <h1 className="text-4xl font-bold text-white text-center mb-6">Edit Course</h1>
        <div className="h-full w-full">
              {
                  course && 
                  <h1 className="text-4xl font-bold text-white text-center mb-6"> {course.courseName} </h1>
              }
        </div>
    </div>
  )
}