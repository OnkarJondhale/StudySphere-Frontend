import React, { useState } from 'react';

export function CourseContent({ onSubmit, onBack, courseDetails = {} }) {
  const [sections, setSections] = useState([
    {
      sectionName: '',
      subSections: [
        { 
          title: '', 
          timeDuration: '', 
          description: '', 
          videoFile: null, 
          videoPreview: '',
          isUploading: false 
        }
      ]
    }
  ]);

  // Add a new section
  const addSection = () => {
    setSections([
      ...sections,
      {
        sectionName: '',
        subSections: [
          { 
            title: '', 
            timeDuration: '', 
            description: '', 
            videoFile: null, 
            videoPreview: '',
            isUploading: false 
          }
        ]
      }
    ]);
  };

  // Add a subsection to a specific section
  const addSubSection = (sectionIndex) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].subSections.push({
      title: '', 
      timeDuration: '', 
      description: '', 
      url: '', 
      videoFile: null, 
      videoPreview: '',
      isUploading: false
    });
    setSections(updatedSections);
  };

  // Handle section name change
  const handleSectionChange = (e, index) => {
    const updatedSections = [...sections];
    updatedSections[index].sectionName = e.target.value;
    setSections(updatedSections);
  };

  // Handle subsection data change
  const handleSubSectionChange = (e, sectionIndex, subSectionIndex) => {
    const { name, value } = e.target;
    const updatedSections = [...sections];
    updatedSections[sectionIndex].subSections[subSectionIndex][name] = value;
    setSections(updatedSections);
  };

  // Handle video file upload
  const handleVideoUpload = (e, sectionIndex, subSectionIndex) => {
    const file = e.target.files[0];
    if (file) {
      const updatedSections = [...sections];
      updatedSections[sectionIndex].subSections[subSectionIndex].videoFile = file;
      updatedSections[sectionIndex].subSections[subSectionIndex].isUploading = true;
      setSections(updatedSections);
      
      // Create video preview
      const videoUrl = URL.createObjectURL(file);
      
      // Simulate a slight delay to show upload status
      setTimeout(() => {
        const updatedSections = [...sections];
        updatedSections[sectionIndex].subSections[subSectionIndex].videoPreview = videoUrl;
        updatedSections[sectionIndex].subSections[subSectionIndex].isUploading = false;
        setSections(updatedSections);
      }, 1000);
    }
  };

  // Cancel video upload
  const cancelVideoUpload = (sectionIndex, subSectionIndex) => {
    const updatedSections = [...sections];
    if (updatedSections[sectionIndex].subSections[subSectionIndex].videoPreview) {
      URL.revokeObjectURL(updatedSections[sectionIndex].subSections[subSectionIndex].videoPreview);
    }
    updatedSections[sectionIndex].subSections[subSectionIndex].videoFile = null;
    updatedSections[sectionIndex].subSections[subSectionIndex].videoPreview = '';
    setSections(updatedSections);
  };

  // Remove a section
  const removeSection = (index) => {
    const updatedSections = [...sections];
    updatedSections.splice(index, 1);
    setSections(updatedSections);
  };

  // Remove a subsection
  const removeSubSection = (sectionIndex, subSectionIndex) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].subSections.splice(subSectionIndex, 1);
    setSections(updatedSections);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ courseDetails, sections });
  };

  return (
    <div className="w-full p-4 bg-transparent">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-6">Course Content</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-transparent bg-opacity-10 p-6 rounded-lg shadow-lg border border-indigo-300">
            <div className="flex justify-between items-center mb-4 border-b border-indigo-300 pb-2">
              <h2 className="text-xl font-semibold text-white">Course Sections</h2>
              <button
                type="button"
                onClick={addSection}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition flex items-center"
              >
                <span className="mr-2">+</span> Add Section
              </button>
            </div>
            
            <div className="space-y-6">
              {sections.map((section, sectionIndex) => (
                <div 
                  key={sectionIndex} 
                  className="p-4 border border-indigo-300 rounded-lg bg-gray-900 bg-opacity-40"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex-grow mr-2">
                      <input
                        type="text"
                        value={section.sectionName}
                        onChange={(e) => handleSectionChange(e, sectionIndex)}
                        className="w-full px-3 py-2 text-white bg-gray-800 bg-opacity-60 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Section Title*"
                        required
                      />
                    </div>
                    
                    {sections.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeSection(sectionIndex)}
                        className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  
                  {/* Subsections */}
                  <div className="pl-4 border-l-2 border-indigo-400 space-y-4 mt-4">
                    <h3 className="text-md font-medium text-white mb-2">Lessons</h3>
                    
                    {section.subSections.map((subSection, subSectionIndex) => (
                      <div key={subSectionIndex} className="p-4 border border-indigo-200 rounded-lg bg-gray-800 bg-opacity-30">
                        <div className="flex justify-between items-center mb-3">
                          <h4 className="text-sm font-medium text-white">Lesson {subSectionIndex + 1}</h4>
                          {section.subSections.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeSubSection(sectionIndex, subSectionIndex)}
                              className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 text-xs transition"
                            >
                              Remove
                            </button>
                          )}
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs font-medium text-white mb-1">Lesson Title*</label>
                            <input
                              type="text"
                              name="title"
                              value={subSection.title}
                              onChange={(e) => handleSubSectionChange(e, sectionIndex, subSectionIndex)}
                              className="w-full px-3 py-2 text-white bg-gray-800 bg-opacity-60 border border-indigo-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm"
                              placeholder="Title"
                              required
                            />
                          </div>
                          
                          <div>
                            <label className="block text-xs font-medium text-white mb-1">Duration*</label>
                            <input
                              type="text"
                              name="timeDuration"
                              value={subSection.timeDuration}
                              onChange={(e) => handleSubSectionChange(e, sectionIndex, subSectionIndex)}
                              className="w-full px-3 py-2 text-white bg-gray-800 bg-opacity-60 border border-indigo-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm"
                              placeholder="Example: 10:30"
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="mt-3">
                          <label className="block text-xs font-medium text-white mb-1">Description</label>
                          <textarea
                            name="description"
                            value={subSection.description}
                            onChange={(e) => handleSubSectionChange(e, sectionIndex, subSectionIndex)}
                            className="w-full px-3 py-2 text-white bg-gray-800 bg-opacity-60 border border-indigo-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm"
                            placeholder="Brief description of this lesson"
                            rows="2"
                          ></textarea>
                        </div>
                        
                        <div className="mt-3">
                          <label className="block text-xs font-medium text-white mb-1">Upload Video</label>
                          <div className="flex items-center">
                            <label className="px-3 py-1.5 bg-indigo-600 text-white rounded-md cursor-pointer hover:bg-indigo-700 transition text-sm">
                              Select Video
                              <input
                                type="file"
                                accept="video/*"
                                onChange={(e) => handleVideoUpload(e, sectionIndex, subSectionIndex)}
                                className="hidden"
                              />
                            </label>
                            {subSection.videoFile && (
                              <button
                                type="button"
                                onClick={() => cancelVideoUpload(sectionIndex, subSectionIndex)}
                                className="ml-3 px-3 py-1.5 bg-red-500 text-white rounded-md hover:bg-red-600 transition text-sm"
                              >
                                Cancel
                              </button>
                            )}
                          </div>
                          
                          {subSection.isUploading && (
                            <div className="mt-2">
                              <p className="text-white text-sm">Uploading video...</p>
                            </div>
                          )}
                          
                          {subSection.videoPreview && (
                            <div className="mt-3 border border-indigo-300 rounded-lg overflow-hidden bg-black">
                              <video 
                                src={subSection.videoPreview} 
                                className="w-full h-96" 
                                controls
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                    
                    <button
                      type="button"
                      onClick={() => addSubSection(sectionIndex)}
                      className="px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm transition flex items-center mt-2"
                    >
                      <span className="mr-2">+</span> Add Lesson
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onBack}
              className="px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 font-medium transition"
            >
              Back to Course Details
            </button>
            
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 font-medium transition"
            >
              Create Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}