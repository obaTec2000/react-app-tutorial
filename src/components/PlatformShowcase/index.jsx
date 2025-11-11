import React from 'react';
import { platforms } from '../../data/dummyData';

const PlatformShowcase = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Trusted by Leading Platforms
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {platforms.map((platform) => (
            <div
              key={platform.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center"
            >
              <div className="text-3xl mb-4">{platform.logo}</div>
              <h3 className="text-lg font-semibold text-gray-800">{platform.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformShowcase;