import React, { useState } from 'react';
import { CourseDetails } from './CourseDetails';
import { CourseContent } from './CourseContent';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { createCourse } from '../../Operations/course';
import { createSection } from '../../Operations/course';
import { createSubsection } from '../../Operations/course';

function AddCourse() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state)=>state.auth.token);
  const [currentStep, setCurrentStep] = useState(1);
  const [courseDetails, setCourseDetails] = useState({});
  const [formData, setFormData] = useState(null);

  const handleCourseDetailsSubmit = (data) => {
    setCourseDetails(data);
    setCurrentStep(2);
  };

  const handleCourseContentBack = () => {
    setCurrentStep(1);
  };

const handleCourseContentSubmit = async (data) => {
    const formData = new FormData();

    Object.keys(data.courseDetails).forEach(key => {
      if (key !== 'thumbnail' && key !== 'thumbnailPreview') {
        formData.append(key, data.courseDetails[key]);
      }
    });
    
    if (data.courseDetails.thumbnail) {
      formData.append('thumbnail', data.courseDetails.thumbnail);
    }

    const sectionsForSubmit = JSON.parse(JSON.stringify(data.sections));

    data.sections.forEach((section, sectionIndex) => {
      section.subSections.forEach((subSection, subSectionIndex) => {
        if (subSection.videoFile) {
          const videoFieldName = `video_${sectionIndex}_${subSectionIndex}`;
          formData.append(videoFieldName, subSection.videoFile);

          sectionsForSubmit[sectionIndex].subSections[subSectionIndex].videoFieldName = videoFieldName;
                    
          delete sectionsForSubmit[sectionIndex].subSections[subSectionIndex].videoFile;
          delete sectionsForSubmit[sectionIndex].subSections[subSectionIndex].videoPreview;
          delete sectionsForSubmit[sectionIndex].subSections[subSectionIndex].isUploading;
        }
      });
    });

    formData.append('sections', JSON.stringify(sectionsForSubmit));
    
    formData.append('instructions', JSON.stringify(data.instructions || []));
    
    setFormData(formData);

    const course = await dispatch(createCourse(formData,token));
    
    await data.sections.forEach(async (element)=>{
        const section = await dispatch(createSection(element.sectionName,course._id));

        console.log("section is ",section);
        element.subSections.forEach(async  (it)=>{
        const subSection = await dispatch(createSubsection(it,section._id));
        })
    })

    navigate('/dashboard/mycourses');

  };

  return (
    <div className="min-h-screen w-full bg-transparent">
      {currentStep === 1 && (
        <CourseDetails onNext={handleCourseDetailsSubmit} initialData={courseDetails} />
      )}
      
      {currentStep === 2 && (
        <CourseContent 
          onSubmit={handleCourseContentSubmit} 
          onBack={handleCourseContentBack} 
          courseDetails={courseDetails} 
        />
      )}
    </div>
  );
}

export default AddCourse;