
import React, { useRef, useEffect } from "react";

const AboutMe: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll(".scroll-fade");
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  const interests = [
    {
      title: "TikTok Videos",
      description: "Creating engaging and creative TikTok content",
      delay: "0",
    },
    {
      title: "Photography",
      description: "Capturing beautiful moments through the lens",
      delay: "200",
    },
    {
      title: "Traveling",
      description: "Exploring new places and experiencing different cultures",
      delay: "400",
    },
    {
      title: "Acting",
      description: "Expressing emotions and stories through performance",
      delay: "600",
    },
  ];
  
  return (
    <div ref={containerRef} id="about" className="py-24 px-6 md:px-0">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16 scroll-fade fade-up">
          <span className="inline-block px-3 py-1 text-sm font-sans font-medium bg-softblue text-primary mb-3 rounded-full">About Me</span>
          <br />
          <span className="text-foreground relative z-10">
            Creative Content Creator <br className="md:hidden" />from Nepal
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="scroll-fade fade-left">
            <p className="text-foreground/80 leading-relaxed mb-6">
              Hello! I'm Susmita Giri, based in Tanahun Damauli, Nepal. I'm passionate about creating engaging content, particularly on TikTok, where I express my creativity through videos.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              I love photography and traveling, which allows me to capture and experience the beauty of different places. I also have some acting skills that I incorporate into my creative work.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              I'm always looking for opportunities to collaborate and create something unique together!
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {interests.map((interest, index) => (
              <div 
                key={index} 
                className="glass p-6 rounded-xl scroll-fade fade-right"
                style={{ animationDelay: `${interest.delay}ms` }}
              >
                <h3 className="font-medium text-lg mb-2 text-foreground">{interest.title}</h3>
                <p className="text-foreground/70 text-sm">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
