
import React, { useEffect, useState, useRef } from "react";
import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import SocialLinks from "@/components/SocialLinks";
import PageLoader from "@/components/Loader";
import Signature from "@/components/Signature";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  // Handle scroll animations
  useEffect(() => {
    const handleScroll = () => {
      // Update scroll progress
      const scrollTop = window.scrollY;
      const winHeight = window.innerHeight;
      const docHeight = document.body.clientHeight;
      const totalDocScrollLength = docHeight - winHeight;
      const scrollPosition = Math.floor((scrollTop / totalDocScrollLength) * 100);
      setScrollProgress(scrollPosition);

      // Handle reveal animations
      const reveals = document.querySelectorAll(".scroll-fade");
      reveals.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          reveal.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle page loading completion
  const handleLoadComplete = () => {
    setIsLoading(false);
    // Initialize scroll animations after loading
    setTimeout(() => {
      const reveals = document.querySelectorAll(".scroll-fade");
      reveals.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          reveal.classList.add("active");
        }
      });
    }, 100);
  };

  // Parallax effect for the hero section
  useEffect(() => {
    const handleParallax = () => {
      if (heroRef.current) {
        const scroll = window.scrollY;
        heroRef.current.style.transform = `translateY(${scroll * 0.3}px)`;
      }
    };

    window.addEventListener("scroll", handleParallax);
    return () => window.removeEventListener("scroll", handleParallax);
  }, []);

  return (
    <>
      <PageLoader onLoadComplete={handleLoadComplete} />
      
      {!isLoading && (
        <div className="min-h-screen">
          {/* Progress bar */}
          <div 
            className="fixed top-0 left-0 z-50 h-1 bg-primary transition-all duration-300 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
          
          <Header />
          
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-softblue/50 via-white to-white pt-20">
            <div 
              ref={heroRef}
              className="absolute inset-0 w-full h-full"
              style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=2000&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.15,
              }}
            />
            
            <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white/90" />
            
            <div className="container relative z-10 px-6 pt-20 pb-24 md:py-32 flex flex-col items-center justify-center text-center">
              <div className="animate-fade-in mb-8">
                <span className="inline-block px-3 py-1 text-sm font-medium bg-softpink text-primary mb-3 rounded-full">
                  Hello, I'm
                </span>
                <h1 className="font-display text-5xl md:text-7xl font-bold mb-4 text-foreground">
                  Susmita Giri
                </h1>
                <p className="text-foreground/70 text-xl max-w-xl mx-auto">
                  Content Creator & TikTok Enthusiast from Nepal
                </p>
              </div>
              
              <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
                <SocialLinks />
              </div>
              
              <div 
                className="mt-12 animate-slide-up" 
                style={{ animationDelay: "0.6s" }}
              >
                <Signature className="text-gray-800 w-72" />
              </div>
              
              {/* Scroll indicator */}
              <div 
                className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse cursor-pointer"
                onClick={() => {
                  const aboutSection = document.getElementById("about");
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <span className="text-sm text-foreground/70 mb-2">Scroll Down</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="animate-bounce text-primary"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
              </div>
            </div>
          </section>
          
          {/* About Section */}
          <AboutMe />
          
          {/* Contact Section */}
          <ContactForm />
          
          {/* Footer */}
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
