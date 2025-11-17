import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { GraduationCap, Phone, MapPin } from "lucide-react";

const Education = () => {
  const schools = [
    {
      name: "Sunrise Primary School",
      type: "Primary School",
      address: "Education Lane",
      phone: "+254 XXX XXX XXX",
      grades: "Pre-K to Grade 8"
    },
    {
      name: "Community Secondary School",
      type: "Secondary School", 
      address: "School Road",
      phone: "+254 XXX XXX XXX",
      grades: "Form 1-4"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <section className="bg-gradient-hero text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Education</h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Quality education institutions in our community
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {schools.map((school, index) => (
                <Card key={index} className="p-6 bg-gradient-card border-0 shadow-card">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <GraduationCap className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{school.name}</h3>
                      <p className="text-primary">{school.type}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <MapPin size={14} />
                      <span>{school.address}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Phone size={14} />
                      <span>{school.phone}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Grades: {school.grades}</p>
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

export default Education;