import React, { useState } from 'react';
import { Share2, Award } from 'lucide-react';
import VideoSection from '../components/VideoSection';
import Newsletter from '../components/Newsletter';
import SocialLinks from '../components/SocialLinks';

const RecommendPage = () => {
  const [formData, setFormData] = useState({
    artistName: '',
    genre: '',
    country: '',
    socialLinks: '',
    whyRecommend: '',
    nycContribution: '',
    yourName: '',
    yourEmail: '',
    joinWaitlist: true
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your recommendation!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleShare = () => {
    const text = `I just recommended an amazing world music artist on MINY! Join the community and discover incredible global talent. 🎵✨ #MINYmusic #WorldMusic`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-16">
        <Award className="w-16 h-16 text-pink-400 mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Recommend an Artist
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Help us discover and showcase incredible world music talent in New York City
        </p>
      </header>

      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6 bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
          <div className="space-y-2">
            <label className="block text-gray-200 font-medium">Artist/Band Name</label>
            <input
              type="text"
              name="artistName"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
              placeholder="Name of the artist you're recommending"
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-gray-200 font-medium">Genre</label>
              <select
                name="genre"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                onChange={handleChange}
              >
                <option value="">Select genre</option>
                <option value="world">World Music</option>
                <option value="fusion">Fusion</option>
                <option value="traditional">Traditional</option>
                <option value="contemporary">Contemporary</option>
                <option value="folk">Folk</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-gray-200 font-medium">Country of Origin</label>
              <input
                type="text"
                name="country"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                placeholder="Artist's country"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-gray-200 font-medium">Social Media Links</label>
            <input
              type="text"
              name="socialLinks"
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
              placeholder="Artist's social media links"
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-gray-200 font-medium">Why do you recommend this artist?</label>
            <textarea
              name="whyRecommend"
              required
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
              placeholder="Tell us what makes this artist special..."
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-gray-200 font-medium">How would they contribute to NYC's music scene?</label>
            <textarea
              name="nycContribution"
              required
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
              placeholder="Describe their potential impact on NYC's music scene..."
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-gray-200 font-medium">Your Name</label>
              <input
                type="text"
                name="yourName"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                placeholder="Your full name"
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-gray-200 font-medium">Your Email</label>
              <input
                type="email"
                name="yourEmail"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                placeholder="your@email.com"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="joinWaitlist"
              checked={formData.joinWaitlist}
              onChange={handleChange}
              className="w-4 h-4 rounded border-gray-600 text-purple-500 focus:ring-purple-500"
            />
            <label className="text-gray-200">
              Join the MINY exclusives waitlist for priority access
            </label>
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 py-4 px-6 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transform hover:scale-[1.02] transition-all duration-200"
            >
              Submit Recommendation
            </button>
            <button
              type="button"
              onClick={handleShare}
              className="px-6 py-4 rounded-lg bg-white/5 text-white font-semibold hover:bg-white/10 transition flex items-center gap-2"
            >
              <Share2 className="w-5 h-5" />
              Share
            </button>
          </div>
        </form>
      </div>

      <VideoSection />
      <Newsletter />
      <SocialLinks />
    </div>
  );
};

export default RecommendPage;