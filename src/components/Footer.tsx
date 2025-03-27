
import React from "react";
import SocialLinks from "./SocialLinks";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-6 md:px-0 bg-gradient-to-t from-slate-100 to-transparent relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-r from-peach/50 via-softblue/30 to-softpink/50"></div>
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-softblue/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-peach/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="mb-8">
            <SocialLinks />
          </div>
          
          <div className="mb-6 flex items-center justify-center animate-pulse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 mr-1 text-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            <p className="text-sm text-gray-600 font-medium">
              Made with love from Nepal
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="glass px-4 py-2 rounded-full text-xs text-foreground/70">Content Creator</div>
            <div className="glass px-4 py-2 rounded-full text-xs text-foreground/70">Photography</div>
            <div className="glass px-4 py-2 rounded-full text-xs text-foreground/70">TikTok</div>
            <div className="glass px-4 py-2 rounded-full text-xs text-foreground/70">Cooking</div>
            <div className="glass px-4 py-2 rounded-full text-xs text-foreground/70">Travel</div>
            <div className="glass px-4 py-2 rounded-full text-xs text-foreground/70">Acting</div>
          </div>
          
          <p className="text-xs text-gray-500">
            &copy; {currentYear} Susmita Giri. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
