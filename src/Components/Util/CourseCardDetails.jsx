import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, ChevronUp } from 'lucide-react';

import { getCourseDetails } from "../../Operations/course";

function CourseCardDetails() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const courseId = location.pathname.split("/")[2];
  const token = useSelector((state) => state.auth.token);
  const userId = useSelector((state) => state.auth.user._id);
  const [course, setCourse] = useState(null);
  const [expandedSections, setExpandedSections] = useState({});
  const [expandedSubSections, setExpandedSubSections] = useState({});
  const [isEnrolled, setIsEnrolled] = useState(false);

  useEffect(() => {
    async function getCourseData() {
      const course = await dispatch(getCourseDetails(courseId, token));
      setCourse(course);

      if (course && course.studentEnrolled && course.studentEnrolled.includes(userId)) {
        setIsEnrolled(true);
      } else {
        setIsEnrolled(false);
      }
    }

    getCourseData();
  }, [courseId, token, userId]);

  function enrollnowhandler() {
    navigate(`/payment/${courseId}`);
  }

  if (!course) {
    return (
      <div className="min-h-screen w-full bg-transparent text-white flex justify-center items-center">
      </div>
    );
  }

  const toggleSection = (sectionIndex) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionIndex]: !prev[sectionIndex],
    }));
  };

  const toggleSubSection = (sectionIndex, subSectionIndex) => {
    setExpandedSubSections((prev) => ({
      ...prev,
      [`${sectionIndex}-${subSectionIndex}`]: !prev[`${sectionIndex}-${subSectionIndex}`],
    }));
  };

  return (
    <div className="min-h-screen w-full bg-gray-900 text-white p-6 md:p-8 lg:p-10">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 border border-gray-700 rounded-lg p-6">
          <img
            src={course.url}
            alt="Course Thumbnail"
            className="w-full max-h-72 rounded-lg mb-6 object-cover"
          />
          <h1 className="text-4xl font-bold mb-3">{course.courseName}</h1>
          <p className="text-gray-300 text-lg mb-5">{course.courseDescription}</p>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between">
            <div className="flex flex-col">
              <p className="text-lg font-semibold mb-1">Price: <span className="text-blue-400">${course.price}</span></p>
              <p className="text-lg font-semibold mb-1">Category: <span className="text-blue-400">{course.category.description}</span></p>
            </div>
            <div className="flex items-start mb-4 md:mb-0">
              <img
                src={course.instructor[0].avatar}
                alt="Instructor Avatar"
                className="w-14 h-14 rounded-full mr-3"
              />
              <div>
                <p className="text-xl font-semibold mb-1">{course.instructor[0].firstName} {course.instructor[0].lastName}</p>
                <p className="text-gray-400 text-sm">{course.instructor[0].email}</p>
              </div>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap">
            <span className="font-semibold mr-2">Tags:</span>
            {course.tags.map((tag, index) => (
              <span key={index} className="bg-gray-700 rounded-full px-3 py-1 mr-2 mb-2 text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-8 border border-gray-700 rounded-lg p-6">
          <h2 className="text-3xl font-semibold mb-4">What You Will Learn</h2>
          <p className="text-gray-300 text-lg">{course.whatYouwillLearn}</p>
        </div>

        {isEnrolled ? (
          <div className="mb-8 border border-gray-700 rounded-lg">
            <h2 className="text-3xl font-semibold mb-4 p-6">Course Content</h2>
            {course.courseContent.map((section, index) => (
              <div key={index} className="mb-4 border border-gray-700 rounded-lg">
                <div onClick={() => toggleSection(index)} className="flex justify-between items-center cursor-pointer p-6 border-b border-gray-700">
                  <h3 className="text-xl font-semibold">{section.sectionName}</h3>
                  {expandedSections[index] ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </div>
                {(!expandedSections[index] && index !== undefined) ? null : section.subSection.map((subSection, idx) => (
                  <div key={idx} className="mb-3 p-6 border-b border-gray-700">
                    <div onClick={() => toggleSubSection(index, idx)} className="flex justify-between items-center cursor-pointer">
                      <h4 className="text-lg font-medium">{subSection.title}</h4>
                      {expandedSubSections[`${index}-${idx}`] ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                    </div>
                    {(!expandedSubSections[`${index}-${idx}`]) ? null : (
                      <>
                        <p className="text-gray-300 mb-2">{subSection.description}</p>
                        <p className="text-gray-400 mb-3">Time Duration: {subSection.timeDuration}</p>
                        <video width="100%" controls className="mt-3 rounded-md">
                          <source src={subSection.url} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="border border-gray-700 rounded-lg p-6 mb-8">
              <h2 className="text-3xl font-semibold mb-4">Common Instructions</h2>
              {course.instructions.map((it, index) => (
                it !== "[]" && (
                  <p key={index} className="text-gray-300 mb-3">{it}</p>
                )
              ))}
            </div>
            <div className="flex justify-center mb-8">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg" onClick={enrollnowhandler}>
                Enroll Now
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CourseCardDetails;