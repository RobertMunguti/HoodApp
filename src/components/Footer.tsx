import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram,
  ArrowRight 
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "News & Updates", href: "/news" },
    { name: "Events Calendar", href: "/events" },
    { name: "Community Services", href: "/services" },
    { name: "Business Directory", href: "/directory" },
    { name: "Contact Us", href: "/contact" }
  ];

  const services = [
    { name: "Security Services", href: "/services/security" },
    { name: "Infrastructure", href: "/services/infrastructure" },
    { name: "Education", href: "/services/education" },
    { name: "Healthcare", href: "/services/healthcare" },
    { name: "Transportation", href: "/services/transport" },
    { name: "Real Estate", href: "/services/real-estate" }
  ];

  return (
    <footer className="bg-foreground text-white">
      {/* Newsletter Section */}
      <div className="bg-primary py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Connected with Your Community
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Subscribe to our newsletter for the latest updates, events, and community news
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button size="lg" variant="secondary" className="px-8">
                Subscribe
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Community Hub</h3>
                <p className="text-sm text-gray-400">Your Local Municipality</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Connecting our community through digital innovation. Your gateway to local services, 
              events, and everything that makes our neighborhood special.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="hover:bg-primary">
                <Facebook size={20} />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-primary">
                <Twitter size={20} />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-primary">
                <Instagram size={20} />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-primary mt-1" size={20} />
                <div>
                  <p className="text-gray-300">
                    123 Community Street<br />
                    Your City, County<br />
                    Kenya
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-primary" size={20} />
                <p className="text-gray-300">+254 XXX XXX XXX</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-primary" size={20} />
                <p className="text-gray-300">info@community.go.ke</p>
              </div>
            </div>

            {/* Office Hours */}
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Office Hours</h5>
              <p className="text-gray-300 text-sm">
                Monday - Friday: 8:00 AM - 5:00 PM<br />
                Saturday: 9:00 AM - 1:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Community Hub. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="/accessibility" className="text-gray-400 hover:text-white transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;