import React from 'react';
import { MapPin, Music2, Quote } from 'lucide-react';

interface Artist {
  id: number;
  name: string;
  image: string;
  location: string;
  genre: string;
  testimonial: string;
}

const artists: Artist[] = [
  {
    id: 1,
    name: "Maya Chen",
    image: "https://images.unsplash.com/photo-1516575334481-f85287c2c82d?w=400&h=400&fit=crop",
    location: "Lower East Side",
    genre: "World Fusion",
    testimonial: "MINY has opened doors to collaborations I never thought possible in NYC."
  },
  {
    id: 2,
    name: "Carlos Rivera",
    image: "https://images.unsplash.com/photo-1549406490-6a7bc45c8424?w=400&h=400&fit=crop",
    location: "Washington Heights",
    genre: "Latin Jazz",
    testimonial: "The platform helped me connect with my roots while reaching new audiences."
  },
  {
    id: 3,
    name: "Aisha Kumar",
    image: "https://images.unsplash.com/photo-1534083264897-aeabfc7daf8a?w=400&h=400&fit=crop",
    location: "Jackson Heights",
    genre: "Indo-Electronic",
    testimonial: "MINY's community has been instrumental in my growth as an artist."
  },
  {
    id: 4,
    name: "David Park",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop",
    location: "Astoria",
    genre: "K-Pop Fusion",
    testimonial: "Found my unique voice in NYC's diverse music scene through MINY."
  },
  {
    id: 5,
    name: "Sofia Mendoza",
    image: "https://images.unsplash.com/photo-1517230878791-4d28214057c2?w=400&h=400&fit=crop",
    location: "Williamsburg",
    genre: "Alternative Folk",
    testimonial: "MINY helped me build a dedicated fanbase in Brooklyn and beyond."
  },
  {
    id: 6,
    name: "James Chen",
    image: "https://images.unsplash.com/photo-1525431836161-e40d6846e656?w=400&h=400&fit=crop",
    location: "East Village",
    genre: "Electronic World",
    testimonial: "The perfect platform to showcase my fusion of traditional and modern sounds."
  }
];

const ArtistGallery = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-4">Featured NYC Artists</h2>
        <p className="text-xl text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Meet some of the incredible independent artists shaping New York's world music scene
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {artists.map((artist) => (
            <div key={artist.id} className="group relative">
              <div className="relative">
                {/* Hexagon Container */}
                <div className="hexagon-container">
                  <div 
                    className="hexagon"
                    style={{
                      backgroundImage: `url(${artist.image})`
                    }}
                  />
                </div>
                
                {/* Artist Info Card */}
                <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full bg-black/80 backdrop-blur-sm p-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{artist.name}</h3>
                    <div className="flex items-center gap-2 text-gray-300 text-sm mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>{artist.location}</span>
                      <Music2 className="w-4 h-4 ml-2" />
                      <span>{artist.genre}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <Quote className="w-4 h-4 flex-shrink-0 text-purple-400" />
                      <p className="italic">{artist.testimonial}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <button 
                className="mt-4 w-full py-2 px-4 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-200"
              >
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtistGallery;