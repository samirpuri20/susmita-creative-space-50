
import React, { useState, useEffect, useRef } from "react";
import { Camera } from "lucide-react";

interface PhotoFrameProps {
  placeholderText?: string;
}

const PhotoFrame: React.FC<PhotoFrameProps> = ({ 
  placeholderText = "Upload your photo here"
}) => {
  const [image, setImage] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add parallax effect on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      if (!frameRef.current) return;
      
      const { left, top, width, height } = frameRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      frameRef.current.style.transform = `
        perspective(1000px)
        rotateY(${x * 5}deg)
        rotateX(${y * -5}deg)
        scale3d(1.05, 1.05, 1.05)
      `;
    };

    const handleMouseLeave = () => {
      if (!frameRef.current) return;
      frameRef.current.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) scale3d(1, 1, 1)';
    };

    const frameElement = frameRef.current;
    if (frameElement) {
      frameElement.addEventListener('mousemove', handleMouseMove);
      frameElement.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (frameElement) {
        frameElement.removeEventListener('mousemove', handleMouseMove);
        frameElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      ref={frameRef}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full max-w-sm h-80 md:h-96 mx-auto rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 glass-dark"
      style={{ 
        transformStyle: 'preserve-3d',
        transition: 'transform 300ms ease-out',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)'
      }}
    >
      {image ? (
        <img
          src={image}
          alt="Uploaded"
          className="w-full h-full object-cover animate-blur-in"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <div className="w-16 h-16 mb-4 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
            <Camera className="w-8 h-8 text-white" />
          </div>
          <p className="text-white font-medium">{placeholderText}</p>
          <p className="text-white/70 text-sm mt-2">Click to upload</p>
        </div>
      )}
      
      <div 
        className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="text-white text-center">
          <p className="font-medium">Change photo</p>
        </div>
      </div>
      
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-white/30 rounded-tl-lg m-4"></div>
        <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-white/30 rounded-tr-lg m-4"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-white/30 rounded-bl-lg m-4"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-white/30 rounded-br-lg m-4"></div>
      </div>
    </div>
  );
};

export default PhotoFrame;
