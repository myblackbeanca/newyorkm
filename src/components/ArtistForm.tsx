import React, { useState } from 'react';
import { Music2, Upload, Globe } from 'lucide-react';

interface ArtistFormProps {
  onSubmit: (data: any) => void;
}

const ArtistForm: React.FC<ArtistFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    artistName: '',
    email: '',
    genre: '',
    country: '',
    socialLinks: '',
    bio: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label className="block text-gray-200 font-medium">Artist/Band Name</label>
        <input
          type="text"
          name="artistName"
          required
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
          placeholder="Your artist or band name"
          onChange={handleChange}
        />
      </div>

      <div className="space-y-2">
        <label className="block text-gray-200 font-medium">Email</label>
        <input
          type="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
          placeholder="your@email.com"
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
          <label className="block text-gray-200 font-medium">Country</label>
          <input
            type="text"
            name="country"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
            placeholder="Your country"
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
          placeholder="Instagram, Twitter, or other social media links"
          onChange={handleChange}
        />
      </div>

      <div className="space-y-2">
        <label className="block text-gray-200 font-medium">Bio</label>
        <textarea
          name="bio"
          rows={4}
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
          placeholder="Tell us about your music and journey..."
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transform hover:scale-[1.02] transition-all duration-200 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-900"
      >
        Join MINY's Artist Network
      </button>
    </form>
  );
};

export default ArtistForm;