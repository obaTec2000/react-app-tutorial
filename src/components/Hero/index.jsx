import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-[#184B4B] to-white text-white py-20">
      <div className="container mx-auto px-4 text-center">
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for courses"
              className="w-full px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg"
            />
            <button className="absolute right-2 top-2 bg-[#184B4B] text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
              Search
            </button>
          </div>
        </div>
        
        {/* Hero Content */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Explore What Professionals <br /> Like You Are Learning The Most
        </h1>
        
        {/* CTA Section */}
        <div className="max-w-3xl mx-auto mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            What is Your Career To Learn? Could We Know More About your On-CourseMania?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Create a Career To Learn! Create Your Non-Profit Course with the
          </p>
          <button className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-400 transition duration-300 shadow-lg">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;