import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, MapPin, Phone, Bed, Car } from "lucide-react";

const RealEstate = () => {
  const properties = [
    {
      title: "Modern 3-Bedroom House",
      type: "For Sale",
      price: "KSh 4,500,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "150 sqm",
      location: "Residential Area A",
      contact: "+254 XXX XXX XXX",
      features: ["Parking", "Garden", "Security"]
    },
    {
      title: "2-Bedroom Apartment",
      type: "For Rent",
      price: "KSh 25,000/month",
      bedrooms: 2,
      bathrooms: 1,
      area: "80 sqm",
      location: "Near Shopping Center",
      contact: "+254 XXX XXX XXX",
      features: ["Furnished", "Parking"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <section className="bg-gradient-hero text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Real Estate</h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Find your perfect home in our community
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {properties.map((property, index) => (
                <Card key={index} className="overflow-hidden bg-gradient-card border-0 shadow-card">
                  <div className="bg-muted h-48 flex items-center justify-center">
                    <Home className="text-muted-foreground" size={48} />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className={property.type === "For Sale" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}>
                        {property.type}
                      </Badge>
                      <span className="text-xl font-bold text-primary">{property.price}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-4">{property.title}</h3>
                    
                    <div className="grid grid-cols-3 gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Bed size={16} />
                        <span>{property.bedrooms} Bed</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Home size={16} />
                        <span>{property.bathrooms} Bath</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span>{property.area}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <MapPin size={14} />
                        <span>{property.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Phone size={14} />
                        <span>{property.contact}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {property.features.map((feature, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button className="w-full">Contact Owner</Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RealEstate;