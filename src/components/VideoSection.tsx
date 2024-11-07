import React from 'react';

const VideoSection = () => {
  return (
    <section className="my-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Unbox the MINY Experience
        </h2>
        <div className="relative pt-[56.25%] rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="MINY Unboxing Experience"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;