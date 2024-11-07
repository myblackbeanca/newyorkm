import React from 'react';
import { Twitter, Instagram, Facebook, Youtube } from 'lucide-react';

const socialLinks = [
  {
    icon: <Twitter className="w-6 h-6" />,
    url: 'https://twitter.com/minyvinyl',
    label: 'Twitter'
  },
  {
    icon: <Instagram className="w-6 h-6" />,
    url: 'https://instagram.com/minyvinyl',
    label: 'Instagram'
  },
  {
    icon: <Facebook className="w-6 h-6" />,
    url: 'https://facebook.com/minyvinyl',
    label: 'Facebook'
  },
  {
    icon: <Youtube className="w-6 h-6" />,
    url: 'https://youtube.com/minyvinyl',
    label: 'YouTube'
  }
];

const SocialLinks = () => {
  return (
    <div className="flex justify-center gap-6 my-12">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110"
          aria-label={`Follow MINY on ${link.label}`}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;