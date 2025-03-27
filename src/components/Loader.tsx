
import React, { useEffect, useState } from "react";
import { CircleOff, Sparkles } from "lucide-react";

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
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-softblue/80 via-background to-softpink/80 transition-opacity duration-500">
      <div className="relative mb-8">
        <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-64 h-64">
          <img 
            src="/lovable-uploads/a9a8ce5b-b724-4a84-a7f8-96fe94f4d8be.png" 
            alt="Susmita Giri" 
            className="w-full h-full object-cover rounded-full border-4 border-primary/30"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
              boxShadow: '0 0 30px rgba(255,255,255,0.8)'
            }}
          />
        </div>
      
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-36 h-36 rounded-full border-4 border-primary/30 flex items-center justify-center">
              <div 
                className="w-32 h-32 rounded-full border-4 border-t-primary border-r-primary border-b-transparent border-l-transparent animate-spin-slow"
              />
            </div>
          </div>
          
          <div className="w-44 h-44 flex items-center justify-center invisible">
            {/* Placeholder to create space */}
          </div>
        </div>
        
        <div className="absolute -top-4 -right-4">
          <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
        </div>
        
        <div className="absolute -bottom-4 -left-4">
          <Sparkles className="w-8 h-8 text-purple-400 animate-pulse" style={{ animationDelay: "0.5s" }} />
        </div>
      </div>
      
      <div className="text-center mb-8">
        <h1 className="font-cursive text-5xl md:text-6xl mb-2 text-shimmer animated-gradient-text">
          SUSMITA GIRI
        </h1>
        <p className="text-foreground/70 text-sm">Content Creator & Lifestyle Enthusiast</p>
      </div>
      
      <div className="mt-2 w-64 h-2 bg-white/30 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-purple-500 via-primary to-pink-500 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <p className="mt-4 font-cursive text-2xl tracking-wide text-foreground animated-gradient-text">
        {progress === 100 ? "Welcome!" : "Loading..."}
      </p>
      
      <div className="mt-2 text-center text-sm text-foreground/70 max-w-md px-6">
        <p>{progress < 50 ? "Creating magic..." : "Almost there..."}</p>
      </div>
    </div>
  );
};

export default PageLoader;
