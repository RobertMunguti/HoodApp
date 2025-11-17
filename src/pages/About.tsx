import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Building, Calendar, ArrowRight } from "lucide-react";

const About = () => {
  const stats = [
    { label: "Total Population", value: "12,500", icon: Users },
    { label: "Households", value: "3,200", icon: Building },
    { label: "Established", value: "1952", icon: Calendar },
    { label: "Area Coverage", value: "25 km²", icon: MapPin }
  ];

  const leadership = [
    {
      name: "Hon. Jane Wanjiku",
      position: "Ward Representative",
      description: "Elected representative serving the community with dedication and commitment to development."
    },
    {
      name: "John Kiprotich",
      position: "Chief",
      description: "Administrative head ensuring smooth governance and community coordination."
    },
    {
      name: "Mary Akinyi",
      position: "Community Chair",
      description: "Elected by residents to lead community development initiatives and welfare programs."
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Community</h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Discover the rich history, vibrant culture, and strong community spirit that makes our area a special place to call home.
              </p>
            </div>
          </div>
        </section>

        {/* Community Stats */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Card key={index} className="p-6 text-center bg-gradient-card border-0 shadow-card">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="text-primary" size={24} />
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-20 bg-gradient-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our History</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-foreground">From Settlement to Thriving Community</h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Our community was established in 1952 as a small agricultural settlement. Over the decades, 
                      it has transformed into a vibrant residential area that perfectly balances modern amenities 
                      with traditional community values.
                    </p>
                    <p>
                      The area gained prominence in the 1980s with the development of key infrastructure including 
                      the main road network and the establishment of our first schools and health facilities.
                    </p>
                    <p>
                      Today, we're proud to be home to diverse families, thriving businesses, and a strong sense 
                      of unity that continues to drive our community forward.
                    </p>
                  </div>
                </div>
                <div className="bg-muted rounded-xl h-80 flex items-center justify-center">
                  <span className="text-muted-foreground">Historical Photo</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Community Leadership</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Meet the dedicated leaders working tirelessly to serve our community
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {leadership.map((leader, index) => (
                <Card key={index} className="p-6 text-center bg-gradient-card border-0 shadow-card">
                  <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{leader.name}</h3>
                  <p className="text-primary font-medium mb-3">{leader.position}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {leader.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 bg-gradient-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <Card className="p-8 bg-gradient-card border-0 shadow-card">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be a model community that promotes sustainable development, social cohesion, 
                    and prosperity for all residents while preserving our cultural heritage and natural environment.
                  </p>
                </Card>
                
                <Card className="p-8 bg-gradient-card border-0 shadow-card">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To enhance the quality of life for all community members through transparent governance, 
                    inclusive development, and collaborative partnerships that foster growth and unity.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Get Involved in Your Community</h2>
            <p className="text-xl mb-8 text-white/90">
              Join us in building a stronger, more connected community
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Contact Leadership
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;