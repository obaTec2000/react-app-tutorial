import React from "react";
import { popularCourses } from "../../data/dummyData";

const CourseGrid = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Popular Courses</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {popularCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition relative"
            >
              {/* Badge */}
              {course.bestSeller && (
                <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                  Best Seller
                </span>
              )}

              {/* Course Image */}
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />

              {/* Card Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-1">Duration: {course.duration}</p>
                <p className="text-gray-600 text-sm mb-1">
                  Price: {course.isFree ? "Free" : `$${course.price}`}
                </p>
                <p className="text-gray-500 text-sm mb-2">Platform: {course.platform}</p>
                <p className="text-yellow-500 text-sm mb-2">
                  {"★".repeat(Math.floor(course.rating))} ({course.reviews})
                </p>

                <button className="w-full mt-2 bg-[#184B4B] text-white py-2 rounded-lg hover:bg-[#0d3333] transition">
                  {course.isFree ? "Enroll Now" : "Buy Now"}
                </button>

                <button className="w-full mt-2 text-teal-600 text-sm hover:underline">
                  View More Info
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseGrid;
