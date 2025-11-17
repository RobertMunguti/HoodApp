import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Building, 
  GraduationCap, 
  Heart, 
  Home, 
  Bus,
  TreePine,
  Lightbulb,
  Droplets,
  ArrowRight,
  Phone,
  Clock,
  MapPin
} from "lucide-react";

const Services = () => {
  const serviceCategories = [
    {
      icon: Shield,
      title: "Community Security",
      description: "Comprehensive security services to keep our community safe",
      services: [
        {
          name: "Nyumba Kumi Initiative",
          description: "Neighborhood watch program with trained coordinators",
          contact: "+254 XXX XXX XXX",
          hours: "24/7 Emergency Response"
        },
        {
          name: "Police Post Services",
          description: "Local police station providing security and law enforcement",
          contact: "+254 XXX XXX XXX",
          hours: "24/7 Service"
        },
        {
          name: "Community Guards",
          description: "Trained security personnel patrolling residential areas",
          contact: "+254 XXX XXX XXX",
          hours: "Night Patrol: 6 PM - 6 AM"
        }
      ]
    },
    {
      icon: Building,
      title: "Infrastructure & Development",
      description: "Essential infrastructure services and development projects",
      services: [
        {
          name: "Road Maintenance",
          description: "Regular maintenance and improvement of community roads",
          contact: "County Public Works",
          hours: "Mon-Fri: 8 AM - 5 PM"
        },
        {
          name: "Water Supply Management",
          description: "Clean water distribution and maintenance services",
          contact: "+254 XXX XXX XXX",
          hours: "24/7 Emergency Service"
        },
        {
          name: "Waste Management",
          description: "Regular garbage collection and recycling programs",
          contact: "+254 XXX XXX XXX",
          hours: "Mon, Wed, Fri: 6 AM - 12 PM"
        }
      ]
    },
    {
      icon: GraduationCap,
      title: "Education Services",
      description: "Educational institutions and learning support services",
      services: [
        {
          name: "Community Primary School",
          description: "Quality primary education with qualified teachers",
          contact: "+254 XXX XXX XXX",
          hours: "Mon-Fri: 7 AM - 4 PM"
        },
        {
          name: "Adult Literacy Program",
          description: "Evening classes for adult education and skills training",
          contact: "+254 XXX XXX XXX",
          hours: "Mon, Wed, Fri: 6 PM - 8 PM"
        },
        {
          name: "Youth Skills Training",
          description: "Technical and vocational training for young people",
          contact: "+254 XXX XXX XXX",
          hours: "Weekends: 9 AM - 4 PM"
        }
      ]
    },
    {
      icon: Heart,
      title: "Healthcare Services",
      description: "Comprehensive healthcare and wellness services",
      services: [
        {
          name: "Community Health Center",
          description: "Primary healthcare services and emergency care",
          contact: "+254 XXX XXX XXX",
          hours: "24/7 Emergency, Clinic: 8 AM - 5 PM"
        },
        {
          name: "Maternal Health Services",
          description: "Prenatal care, delivery services, and postnatal support",
          contact: "+254 XXX XXX XXX",
          hours: "Mon-Fri: 8 AM - 5 PM"
        },
        {
          name: "Mobile Health Outreach",
          description: "Monthly health screening and vaccination campaigns",
          contact: "+254 XXX XXX XXX",
          hours: "First Saturday of Month: 9 AM - 3 PM"
        }
      ]
    }
  ];

  const quickServices = [
    {
      icon: Droplets,
      title: "Water Issues",
      description: "Report water shortages or quality issues",
      action: "Report Issue"
    },
    {
      icon: Lightbulb,
      title: "Power Outages",
      description: "Report electrical problems in your area",
      action: "Report Outage"
    },
    {
      icon: TreePine,
      title: "Environmental Issues",
      description: "Report environmental concerns or violations",
      action: "Report Concern"
    },
    {
      icon: Bus,
      title: "Transport Issues",
      description: "Report road damage or transport problems",
      action: "Report Problem"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Community Services</h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Access essential services and resources to improve your quality of life in our community
              </p>
            </div>
          </div>
        </section>

        {/* Quick Report Section */}
        <section className="py-12 bg-card border-b">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Quick Report Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card key={index} className="p-6 text-center bg-gradient-card border-0 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="text-primary" size={24} />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                    <Button size="sm" className="w-full">
                      {service.action}
                    </Button>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Categories */}
        <section className="py-20 bg-gradient-section">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Service Categories</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive services designed to meet the diverse needs of our community
              </p>
            </div>

            <div className="space-y-16">
              {serviceCategories.map((category, categoryIndex) => {
                const IconComponent = category.icon;
                return (
                  <div key={categoryIndex} className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="text-primary" size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{category.title}</h3>
                      <p className="text-muted-foreground">{category.description}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {category.services.map((service, serviceIndex) => (
                        <Card key={serviceIndex} className="p-6 bg-gradient-card border-0 shadow-card hover:shadow-lg transition-all duration-300">
                          <h4 className="text-lg font-semibold text-foreground mb-3">{service.name}</h4>
                          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                            {service.description}
                          </p>
                          
                          <div className="space-y-2 mb-4">
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                              <Phone size={14} />
                              <span>{service.contact}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                              <Clock size={14} />
                              <span>{service.hours}</span>
                            </div>
                          </div>
                          
                          <Button variant="outline" className="w-full">
                            Contact Service
                          </Button>
                        </Card>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Emergency Services */}
        <section className="py-16 bg-destructive text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Emergency Services</h2>
              <p className="text-xl mb-8 text-white/90">
                In case of emergency, contact these services immediately
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center">
                  <Shield className="text-white mx-auto mb-4" size={32} />
                  <h3 className="text-lg font-bold mb-2">Police Emergency</h3>
                  <p className="text-2xl font-bold">999</p>
                </Card>
                
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center">
                  <Heart className="text-white mx-auto mb-4" size={32} />
                  <h3 className="text-lg font-bold mb-2">Medical Emergency</h3>
                  <p className="text-2xl font-bold">911</p>
                </Card>
                
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center">
                  <Building className="text-white mx-auto mb-4" size={32} />
                  <h3 className="text-lg font-bold mb-2">Fire Emergency</h3>
                  <p className="text-2xl font-bold">998</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Service Request CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Need a Service Not Listed?</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              We're here to help. Contact us with your specific service needs and we'll connect you with the right resources.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Submit Service Request
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;