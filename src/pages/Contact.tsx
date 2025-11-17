import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <section className="bg-gradient-hero text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Get in touch with your community leadership and support team
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
                <Card className="p-8 bg-gradient-card border-0 shadow-card">
                  <form className="space-y-6">
                    <Input placeholder="Your Name" />
                    <Input type="email" placeholder="Email Address" />
                    <Input placeholder="Subject" />
                    <Textarea placeholder="Your Message" rows={6} />
                    <Button size="lg" className="w-full">
                      <MessageSquare className="mr-2" size={20} />
                      Send Message
                    </Button>
                  </form>
                </Card>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <Card className="p-6 bg-gradient-card border-0 shadow-card">
                    <div className="flex items-center space-x-4">
                      <MapPin className="text-primary" size={24} />
                      <div>
                        <h3 className="font-semibold">Address</h3>
                        <p className="text-muted-foreground">123 Community Street, Your City, Kenya</p>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-6 bg-gradient-card border-0 shadow-card">
                    <div className="flex items-center space-x-4">
                      <Phone className="text-primary" size={24} />
                      <div>
                        <h3 className="font-semibold">Phone</h3>
                        <p className="text-muted-foreground">+254 XXX XXX XXX</p>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-6 bg-gradient-card border-0 shadow-card">
                    <div className="flex items-center space-x-4">
                      <Mail className="text-primary" size={24} />
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-muted-foreground">info@community.go.ke</p>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-6 bg-gradient-card border-0 shadow-card">
                    <div className="flex items-center space-x-4">
                      <Clock className="text-primary" size={24} />
                      <div>
                        <h3 className="font-semibold">Office Hours</h3>
                        <p className="text-muted-foreground">Mon-Fri: 8 AM - 5 PM</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;