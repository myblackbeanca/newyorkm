import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setEmail('');
  };

  return (
    <section className="my-20">
      <div className="max-w-2xl mx-auto text-center">
        <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-white mb-4">
          Stay Updated with MINY
        </h2>
        <p className="text-gray-300 mb-8">
          Get early access to drops, events, and NYC music scene updates
        </p>
        <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-gray-600 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-purple-500 text-white font-semibold hover:bg-purple-600 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;