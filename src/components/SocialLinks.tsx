
import React from "react";
import { Facebook, Instagram, ExternalLink } from "lucide-react";

const SocialLinks: React.FC = () => {
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/susmita.giri.750983",
      icon: <Facebook className="h-5 w-5" />,
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/susmita4.45",
      icon: <Instagram className="h-5 w-5" />,
      color: "from-pink-500 to-purple-500",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@susmitagiri56",
      icon: (
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
      color: "from-black to-gray-800",
    },
  ];

  return (
    <div className="flex items-center justify-center space-x-4 md:space-x-6">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${link.color} text-white shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl`}
          aria-label={`Visit Susmita's ${link.name}`}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
