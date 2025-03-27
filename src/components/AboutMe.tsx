
import React from "react";

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-0 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-softpink/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-softblue/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16 scroll-fade fade-up">
          <span className="inline-block px-3 py-1 text-sm font-sans font-medium bg-softblue text-primary mb-3 rounded-full">About Me</span>
          <br />
          <span className="text-foreground">Get to Know Me</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="scroll-fade fade-left">
            <h3 className="text-xl font-medium mb-6">Who I Am</h3>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              Hi there! I'm Susmita Giri, a content creator based in Tanahun Damauli, Nepal. 
              I'm passionate about creating engaging videos, capturing beautiful moments through 
              photography, and exploring new places through travel.
            </p>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              My creative journey involves acting in my TikTok videos where I express myself 
              and connect with my audience. I love bringing stories to life through visual content.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              When I'm not creating content, I enjoy cooking new and exciting dishes. Experimenting 
              with flavors and creating delicious meals is another way I express my creativity.
            </p>
          </div>
          
          <div className="scroll-fade fade-right">
            <h3 className="text-xl font-medium mb-6">My Interests</h3>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Content Creation", icon: "📱", desc: "Creating engaging TikTok videos" },
                { title: "Photography", icon: "📸", desc: "Capturing beautiful moments" },
                { title: "Acting", icon: "🎭", desc: "Bringing stories to life" },
                { title: "Traveling", icon: "✈️", desc: "Exploring new places" },
                { title: "Cooking", icon: "👩‍🍳", desc: "Experimenting with new recipes" },
                { title: "Creativity", icon: "🎨", desc: "Expressing myself through art" }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="glass p-4 rounded-xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
                >
                  <span className="text-3xl mb-2">{item.icon}</span>
                  <h4 className="font-medium text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-foreground/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
