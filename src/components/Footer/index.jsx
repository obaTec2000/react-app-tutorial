import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: FaTwitter, label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: FaFacebook, label: 'Facebook', color: 'hover:text-blue-600' },
    { icon: FaInstagram, label: 'Instagram', color: 'hover:text-pink-600' },
    { icon: FaLinkedin, label: 'LinkedIn', color: 'hover:text-blue-500' },
    { icon: FaYoutube, label: 'YouTube', color: 'hover:text-red-600' },
    { icon: FaPinterest, label: 'Pinterest', color: 'hover:text-red-500' },
  ];

  return (
    <footer className="bg-[#184B4B] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 - About Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
            </ul>
          </div>
          
          {/* Column 2 - Udemy Business Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Udemy Business</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Teach On Udemy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Got The App</a></li>
            </ul>
          </div>
          
          {/* Column 3 - Help And Support Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Help And Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
            </ul>
          </div>
          
          {/* Column 4 - Follow Us Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us:</h4>
            <div className="grid grid-cols-3 gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`flex flex-col items-center text-gray-400 ${social.color} transition duration-300 transform hover:scale-105`}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                  <span className="text-xs mt-1">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Section with Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold text-white">CourseMania</h3>
            </div>
            <div className="text-gray-400 text-sm">
              <p>&copy; 2024 CourseMania. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;