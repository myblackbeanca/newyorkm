import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  readTime: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Evolution of World Music in NYC's Underground Scene",
    excerpt: "Exploring how global sounds are reshaping New York's musical landscape and creating new fusion genres.",
    date: "2024-03-15",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&h=400&fit=crop",
    readTime: "5 min read",
    category: "Scene Report"
  },
  {
    id: 2,
    title: "From Street Performance to Digital Collectibles",
    excerpt: "How NYC street musicians are leveraging digital platforms to reach global audiences.",
    date: "2024-03-12",
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800&h=400&fit=crop",
    readTime: "4 min read",
    category: "Digital Music"
  },
  {
    id: 3,
    title: "Cultural Fusion: Queens' Music Revolution",
    excerpt: "The borough's diverse communities are creating unprecedented musical collaborations.",
    date: "2024-03-10",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=400&fit=crop",
    readTime: "6 min read",
    category: "Community"
  }
];

const BlogSection = () => {
  return (
    <section className="py-20 bg-black/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-4">Latest from the Scene</h2>
        <p className="text-xl text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Stories and insights from New York's vibrant music community
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden group hover:bg-white/10 transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-purple-500 text-white text-sm rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </time>
                  </div>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {post.excerpt}
                </p>

                <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                  Read More 
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;