import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Building, 
  GraduationCap, 
  Heart, 
  Home, 
  Bus,
  ArrowRight 
} from "lucide-react";

const ServicesOverview = () => {
  const services = [
    {
      icon: Shield,
      title: "Community Security",
      description: "Nyumba Kumi initiatives, police posts, and neighborhood watch programs keeping you safe.",
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: Building,
      title: "Infrastructure",
      description: "Road maintenance, water supply, power infrastructure, and zoning information.",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Directory of schools, colleges, and educational institutions in the area.",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Clinics, hospitals, pharmacies, and health services near you.",
      color: "text-pink-600",
      bgColor: "bg-pink-50"
    },
    {
      icon: Home,
      title: "Real Estate",
      description: "Available properties for rent and sale with detailed information.",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Bus,
      title: "Transport",
      description: "SGR schedules, Expressway info, matatu routes, and transportation guides.",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Community Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about living in our community. 
            From security to education, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0">
                <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <IconComponent className={service.color} size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary-glow">
                  Learn more
                  <ArrowRight className="ml-1" size={16} />
                </Button>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button size="lg" className="text-lg px-8 py-3">
            View All Services
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;