import React from 'react';
import { popularCourses } from '../../data/dummyData';

const CourseGrid = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Popular Courses
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover the most sought-after courses that professionals are taking to advance their careers
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {popularCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition duration-300 hover:border-blue-500"
            >
              <div className="text-4xl mb-4 text-center">{course.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                {course.title}
              </h3>
              <p className="text-gray-600 text-center">
                {course.description}
              </p>
              <button className="w-full mt-4 bg-[#184B4B] text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseGrid;