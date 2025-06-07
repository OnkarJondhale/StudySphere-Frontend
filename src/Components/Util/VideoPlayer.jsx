import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from 'react';

function VideoPlayer() {
  const { courseId, sectionIndex, subSectionIndex } = useParams();
  const courses = useSelector((state) => state.course.courses);

  if (!courses) return <div>Loading...</div>;

  const course = courses.find((c) => c._id === courseId);

  const section = course.courseContent[sectionIndex];
  if (!section) return <div>Section not found</div>;

  const subSection = section.subSection[subSectionIndex];
  if (!subSection) return <div>SubSection not found</div>;

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">{subSection.title}</h1>
        <video width="100%" controls className="rounded-md">
          <source src={subSection.url} type="video/mp4" />
          Your browser does does not support the video tag.
        </video>
        <p className="mt-4">{subSection.description}</p>
      </div>
    </div>
  );
}

export default VideoPlayer;