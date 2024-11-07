import React, { useState } from 'react';
import { Music, Sparkles, Globe2, Users, Share2, Mail } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ArtistForm from './components/ArtistForm';
import SuccessModal from './components/SuccessModal';
import Benefits from './components/Benefits';
import Navigation from './components/Navigation';
import RecommendPage from './pages/RecommendPage';
import VideoSection from './components/VideoSection';
import Newsletter from './components/Newsletter';
import SocialLinks from './components/SocialLinks';
import ArtistGallery from './components/ArtistGallery';
import BlogSection from './components/BlogSection';

function HomePage() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (formData: any) => {
    setShowSuccess(true);
  };

  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Music className="w-12 h-12 text-pink-400" />
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
              MINY
            </h1>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join NYC's Premier Digital Collectibles Platform
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Connect with NYC's vibrant music scene and create unique digital experiences for your fans
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          <Benefits />
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
            <ArtistForm onSubmit={handleSubmit} />
          </div>
        </div>

        <ArtistGallery />
        <BlogSection />
        <VideoSection />
        <Newsletter />
        <SocialLinks />
      </div>
      
      <SuccessModal show={showSuccess} onClose={() => setShowSuccess(false)} />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recommend" element={<RecommendPage />} />
        </Routes>
        <footer className="mt-20 text-center text-gray-400 pb-8">
          <p>© {new Date().getFullYear()} MINY. Empowering world music artists in the digital age.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;