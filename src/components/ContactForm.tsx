
import React, { useState } from "react";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { toast } from "sonner";

const ContactForm: React.FC = () => {
  const { toast: shadcnToast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS or similar service
      const response = await fetch("https://formspree.io/f/girisusmita378@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Use the sonner toast for a more modern look
        toast.success("Message sent!", {
          description: "Thank you for reaching out. I'll get back to you soon!",
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        toast.error("Failed to send message", {
          description: "Please try again later or contact me directly via email.",
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message", {
        description: "Please try again later or contact me directly via email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="py-24 px-6 md:px-0 relative">
      {/* Decorative backgrounds */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/0 via-cream/30 to-white/0 pointer-events-none"></div>
      <div className="absolute -top-40 right-0 w-96 h-96 bg-peach/40 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 left-0 w-80 h-80 bg-softblue/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16 scroll-fade fade-up">
          <span className="inline-block px-3 py-1 text-sm font-sans font-medium bg-peach text-primary mb-3 rounded-full">Get In Touch</span>
          <br />
          <span className="text-foreground">Let's Connect</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="md:col-span-2 scroll-fade fade-left">
            <h3 className="text-xl font-medium mb-4">Contact Information</h3>
            <p className="text-foreground/70 mb-6">
              Feel free to reach out for collaborations or just to say hello!
            </p>
            
            <div className="mb-6">
              <p className="text-foreground/80 font-medium">Location</p>
              <p className="text-foreground/60">Tanahun Damauli, Nepal</p>
            </div>
            
            <div className="mb-6">
              <p className="text-foreground/80 font-medium">Email</p>
              <a 
                href="mailto:girisusmita378@gmail.com"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                girisusmita378@gmail.com
              </a>
            </div>
          </div>
          
          <div className="md:col-span-3 scroll-fade fade-right">
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 shadow-lg">
              <div className="mb-6">
                <label htmlFor="name" className="block text-foreground/80 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-foreground/80 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Your email"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-foreground/80 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Your message"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 rounded-lg bg-primary text-white flex items-center justify-center hover:bg-primary/90 focus:ring-4 focus:ring-primary/30 transition-all disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
