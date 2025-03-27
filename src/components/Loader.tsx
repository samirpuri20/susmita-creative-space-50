
import React, { useEffect, useState } from "react";
import { Loader } from "lucide-react";

interface PageLoaderProps {
  onLoadComplete: () => void;
}

const PageLoader: React.FC<PageLoaderProps> = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + Math.floor(Math.random() * 15);
          
          if (newProgress >= 100) {
            clearInterval(interval);
            
            setTimeout(() => {
              setShowLoader(false);
              onLoadComplete();
            }, 500);
            
            return 100;
          }
          
          return newProgress;
        });
      }, 200);

      return () => clearInterval(interval);
    }, 500);

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  if (!showLoader) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-opacity duration-500">
      <div className="relative mb-6">
        <Loader className="h-16 w-16 text-primary animate-spin-slow" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-cursive">
          SG
        </div>
      </div>
      
      <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <p className="mt-4 font-display text-lg tracking-wide">
        {progress === 100 ? "Welcome!" : "Loading..."}
      </p>
    </div>
  );
};

export default PageLoader;
