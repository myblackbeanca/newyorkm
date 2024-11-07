import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Music, HeadphonesIcon } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="bg-black/20 backdrop-blur-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Music className="w-8 h-8 text-pink-400" />
            <span className="text-2xl font-bold text-white">MINY</span>
          </Link>
          
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className={`text-gray-300 hover:text-white transition ${
                location.pathname === '/' ? 'text-white font-semibold' : ''
              }`}
            >
              Join MINY
            </Link>
            <Link
              to="/recommend"
              className={`text-gray-300 hover:text-white transition ${
                location.pathname === '/recommend' ? 'text-white font-semibold' : ''
              }`}
            >
              Recommend Artists
            </Link>
            <a
              href="https://minyfy.subwaymusician.xyz/makeaminy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition"
            >
              <HeadphonesIcon className="w-4 h-4" />
              Make a MINY
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;