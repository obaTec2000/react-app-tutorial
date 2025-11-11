import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-[40px] font-bold text-[#17ACAC]">CourseMania</div>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8 text-[20px">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
            <a href="#customs" className="text-gray-700 hover:text-blue-600 font-medium">Customs</a>
            <a href="#tokens" className="text-gray-700 hover:text-blue-600 font-medium">Tokens</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
          </nav>
          
          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-[#2C7575] font-bold text-[20px] px-6 py-2 ">
              Login
            </button>
              <button className="bg-[#0E8585] text-white px-4 py-1 rounded-[10px] transition duration-300">
              Register
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;