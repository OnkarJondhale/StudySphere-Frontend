import React, { useState } from 'react';

export function CourseDetails({ onNext, initialData = {} }) {
  const [courseData, setCourseData] = useState({
    courseName: initialData.courseName || '',
    courseDescription: initialData.courseDescription || '',
    whatYouwillLearn: initialData.whatYouwillLearn || '',
    price: initialData.price || '',
    category: initialData.category || 'c++', 
    tags: initialData.tags || '',
    instructions: initialData.instructions || ''
  });

  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState(initialData.thumbnailPreview || '');
  const [isUploading, setIsUploading] = useState(false);

  const handleCourseDataChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsUploading(true);
      setThumbnail(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnailPreview(reader.result);
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const cancelThumbnailUpload = () => {
    setThumbnail(null);
    setThumbnailPreview('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ ...courseData, thumbnail, thumbnailPreview });
  };

  return (
    <div className="w-full p-4 bg-transparent">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-6">Create New Course</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6 text-white">
          <div className="bg-transparent bg-opacity-10 p-6 rounded-lg shadow-lg border border-indigo-300">
            <h2 className="text-xl font-semibold text-white mb-4 border-b border-indigo-300 pb-2">Course Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">Course Name*</label>
                <input
                  type="text"
                  name="courseName"
                  value={courseData.courseName}
                  onChange={handleCourseDataChange}
                  className="w-full px-3 py-2 text-white bg-gray-800 bg-opacity-50 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white mb-2">Price*</label>
                <input
                  type="number"
                  name="price"
                  value={courseData.price}
                  onChange={handleCourseDataChange}
                  className="w-full px-3 py-2 text-white bg-gray-800 bg-opacity-50 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
            </div>
            
            <div className="mt-4">
              <label className="block text-sm font-medium text-white mb-2">Course Description*</label>
              <textarea
                name="courseDescription"
                value={courseData.courseDescription}
                onChange={handleCourseDataChange}
                className="w-full px-3 py-2 text-white bg-gray-800 bg-opacity-50 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows="3"
                required
              ></textarea>
            </div>
            
            <div className="mt-4">
              <label className="block text-sm font-medium text-white mb-2">What You Will Learn*</label>
              <textarea
                name="whatYouwillLearn"
                value={courseData.whatYouwillLearn}
                onChange={handleCourseDataChange}
                className="w-full px-3 py-2 text-white bg-gray-800 bg-opacity-50 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows="3"
                placeholder="Separate points with new lines"
                required
              ></textarea>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">Category*</label>
                <select
                  name="category"
                  value={courseData.category}
                  onChange={handleCourseDataChange}
                  className="w-full px-3 py-2 text-white bg-gray-800 bg-opacity-50 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                >
                  <option value="c++">c++</option>
                  <option value="web development">web development</option>
                  <option value="python">python</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white mb-2">Tags</label>
                <input
                  type="text"
                  name="tags"
                  value={courseData.tags}
                  onChange={handleCourseDataChange}
                  className="w-full px-3 py-2 text-white bg-gray-800 bg-opacity-50 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Comma separated tags"
                />
              </div>
            </div>
            
            <div className="mt-4">
              <label className="block text-sm font-medium text-white mb-2">Instructions</label>
              <textarea
                name="instructions"
                value={courseData.instructions}
                onChange={handleCourseDataChange}
                className="w-full px-3 py-2 text-white bg-gray-800 bg-opacity-50 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows="3"
              ></textarea>
            </div>
            
            <div className="mt-6">
              <label className="block text-sm font-medium text-white mb-2">Course Thumbnail*</label>
              <div className="flex items-center">
                <label className="px-4 py-2 bg-indigo-600 text-white rounded-md cursor-pointer hover:bg-indigo-700 transition">
                  Select Image
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleThumbnailChange}
                    className="hidden"
                  />
                </label>
                {thumbnail && (
                  <button
                    type="button"
                    onClick={cancelThumbnailUpload}
                    className="ml-3 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                  >
                    Cancel
                  </button>
                )}
              </div>
              
              {isUploading && (
                <div className="mt-3">
                  <p className="text-white">Uploading thumbnail...</p>
                </div>
              )}
              
              {thumbnailPreview && (
                <div className="mt-4 relative">
                  <img 
                    src={thumbnailPreview} 
                    alt="Thumbnail preview" 
                    className="rounded-lg shadow-md max-h-48 object-cover" 
                  />
                </div>
              )}
            </div>
          </div>
          
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 font-medium transition"
            >
              Continue to Course Content
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}