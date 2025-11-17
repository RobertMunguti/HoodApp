import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import heroImage from "@/assets/community-hero.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Community center with people"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/60"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Hero Content */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Welcome to Your
            <span className="block text-primary-glow">Community Hub</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Stay connected, informed, and engaged with everything happening in your neighborhood.
            Your gateway to community services, events, and local businesses.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3 shadow-hero">
              Explore Services
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
              View Events
              <Calendar className="ml-2" size={20} />
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-card">
              <div className="flex items-center justify-center mb-3">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-1">5,000+</h3>
              <p className="text-white/80">Active Residents</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-card">
              <div className="flex items-center justify-center mb-3">
                <MapPin className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-1">200+</h3>
              <p className="text-white/80">Local Businesses</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-card">
              <div className="flex items-center justify-center mb-3">
                <Calendar className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-1">50+</h3>
              <p className="text-white/80">Monthly Events</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-16"
        >
          <path
            d="M0,120 L1200,120 L1200,0 C1000,20 800,40 600,20 C400,0 200,40 0,20 Z"
            fill="currentColor"
            className="text-background"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;