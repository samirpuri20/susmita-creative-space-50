
import React from "react";
import SocialLinks from "./SocialLinks";
import Signature from "./Signature";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 md:px-0 bg-gradient-to-t from-slate-100 to-transparent">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <Signature className="text-gray-800 mb-6 w-48" />
          
          <div className="mb-8">
            <SocialLinks />
          </div>
          
          <div className="mb-4 flex items-center justify-center">
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
            <p className="text-sm text-gray-600">
              Made with love from Nepal
            </p>
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
