import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getAllCourses } from '../../Operations/course';


import { Star, Users, DollarSign } from 'lucide-react';

const CourseCard = ({ courseData }) => {
  const navigate = useNavigate();  
  const [isEnrolled,setIsEnrolled] = useState(false);
  const userId = useSelector((state)=>state.auth.user._id);
  if (!courseData) {
    return null;
  }

  useEffect(()=>{
    if (courseData && courseData.studentEnrolled && courseData.studentEnrolled.includes(userId)) {
      setIsEnrolled(true);
    } else {
      setIsEnrolled(false);
    }
  },[])

  function enrollclickhandler()
  {
    navigate(`/courses/${courseData._id}`);
  }

  const {
    courseName,
    courseDescription,
    instructor,
    price,
    url,
    ratingAndReview,
    studentEnrolled,
  } = courseData;

  const instructorNames = instructor?.map((inst) => inst?.name).join(', ') || 'Instructor Name';
  const averageRating = ratingAndReview?.reduce((acc, review) => acc + review.rating, 0) / ratingAndReview?.length || 0;
  const reviewCount = ratingAndReview?.length || 0;
  const studentCount = studentEnrolled?.length || 0;

  const randomColor = `bg-gradient-to-r from-${['blue', 'green', 'purple', 'yellow', 'pink', 'indigo'][Math.floor(Math.random() * 6)]}-100 to-${['blue', 'green', 'purple', 'yellow', 'pink', 'indigo'][Math.floor(Math.random() * 6)]}-200`;

  return (
    <div className={`rounded overflow-hidden shadow-lg ${randomColor} flex flex-col`}>
      <img className="w-full aspect-video object-cover" src={url || "https://via.placeholder.com/350x200"} alt={courseName || "Course"} />
      <div className="px-6 py-4 flex-grow">
        <div className="font-bold text-xl mb-2">{courseName || "Course Title"}</div>
        <p className="text-gray-700 text-base">{instructorNames}</p>
        <p className="text-gray-600 text-sm mt-2">{courseDescription}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between items-center">
        <div className="flex items-center">
          <Star className="w-4 h-4 text-yellow-500 mr-1" />
          <span className="text-sm font-semibold">{averageRating.toFixed(1)}</span>
          <Users className="w-4 h-4 text-gray-600 ml-2 mr-1" />
          <span className="text-gray-600 text-sm ml-1">({reviewCount})</span>
        </div>
        <div className="text-lg font-semibold flex items-center">
          <DollarSign className="w-4 h-4 mr-1" />
          {price || "price"}
        </div>
      </div>
      <div className="px-6 py-4 flex justify-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full" onClick={enrollclickhandler}>
          {isEnrolled ? 'Go To Course' : 'Enroll Now'}
        </button>
      </div>
    </div>
  );
};

const CourseList = () => {
  const dispatch = useDispatch();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function getCourseData() {
      const coursesData = await dispatch(getAllCourses());
      setCourses(coursesData);
    }
    getCourseData();
  }, [dispatch]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {courses.map((course) => (
        <CourseCard key={course._id} courseData={course} />
      ))}
    </div>
  );
};

export default CourseList;