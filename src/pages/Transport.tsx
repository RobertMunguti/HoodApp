import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Bus, Clock, MapPin, DollarSign } from "lucide-react";

const Transport = () => {
  const routes = [
    {
      name: "SGR to Nairobi",
      type: "Train",
      schedule: "6:00 AM, 12:00 PM, 6:00 PM",
      fare: "KSh 300",
      destination: "Nairobi Central"
    },
    {
      name: "Matatu Route 14",
      type: "Matatu",
      schedule: "Every 30 minutes",
      fare: "KSh 50",
      destination: "Town Center"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <section className="bg-gradient-hero text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Transport</h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Transportation options and schedules for our community
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {routes.map((route, index) => (
                <Card key={index} className="p-6 bg-gradient-card border-0 shadow-card">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Bus className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{route.name}</h3>
                      <p className="text-primary">{route.type}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock size={14} />
                      <span>{route.schedule}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <DollarSign size={14} />
                      <span>{route.fare}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <MapPin size={14} />
                      <span>To {route.destination}</span>
                    </div>
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

export default Transport;