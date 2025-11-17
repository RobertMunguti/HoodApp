import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Store, 
  Utensils, 
  Heart, 
  Dumbbell, 
  Church, 
  GraduationCap,
  Search,
  MapPin,
  Phone,
  Clock,
  Star,
  Filter,
  Plus
} from "lucide-react";

const Directory = () => {
  const categories = [
    { name: "All Businesses", value: "all", icon: Store },
    { name: "Restaurants", value: "restaurants", icon: Utensils },
    { name: "Healthcare", value: "healthcare", icon: Heart },
    { name: "Fitness", value: "fitness", icon: Dumbbell },
    { name: "Religious Centers", value: "religious", icon: Church },
    { name: "Education", value: "education", icon: GraduationCap }
  ];

  const businesses = [
    {
      name: "Mama Njeri's Kitchen",
      category: "Restaurants",
      description: "Authentic Kenyan cuisine with fresh ingredients and traditional recipes. Family-owned restaurant serving the community for over 10 years.",
      address: "123 Main Street, Community Center",
      phone: "+254 XXX XXX XXX",
      hours: "Mon-Sat: 7 AM - 9 PM, Sun: 9 AM - 7 PM",
      rating: 4.8,
      reviews: 45,
      featured: true,
      image: "/placeholder.svg"
    },
    {
      name: "Community Health Clinic",
      category: "Healthcare",
      description: "Comprehensive healthcare services including general medicine, maternal health, and emergency care.",
      address: "456 Health Avenue",
      phone: "+254 XXX XXX XXX",
      hours: "24/7 Emergency, Clinic: 8 AM - 6 PM",
      rating: 4.6,
      reviews: 78,
      featured: false,
      image: "/placeholder.svg"
    },
    {
      name: "FitLife Gym & Wellness",
      category: "Fitness",
      description: "Modern fitness center with equipment, group classes, and personal training services.",
      address: "789 Sports Complex Road",
      phone: "+254 XXX XXX XXX",
      hours: "Mon-Fri: 5 AM - 10 PM, Weekends: 6 AM - 8 PM",
      rating: 4.7,
      reviews: 32,
      featured: false,
      image: "/placeholder.svg"
    },
    {
      name: "Grace Community Church",
      category: "Religious Centers",
      description: "Welcoming Christian community with services, Bible study, and community outreach programs.",
      address: "321 Faith Street",
      phone: "+254 XXX XXX XXX",
      hours: "Sunday: 8 AM, 10 AM, 6 PM; Wed: 7 PM",
      rating: 4.9,
      reviews: 56,
      featured: false,
      image: "/placeholder.svg"
    },
    {
      name: "Sunrise Primary School",
      category: "Education",
      description: "Quality primary education with qualified teachers and modern learning facilities.",
      address: "654 Education Lane",
      phone: "+254 XXX XXX XXX",
      hours: "Mon-Fri: 7 AM - 4 PM",
      rating: 4.5,
      reviews: 89,
      featured: false,
      image: "/placeholder.svg"
    },
    {
      name: "Corner Shop Grocery",
      category: "Shops",
      description: "Your neighborhood grocery store with fresh produce, household items, and daily essentials.",
      address: "147 Market Street",
      phone: "+254 XXX XXX XXX",
      hours: "Daily: 6 AM - 10 PM",
      rating: 4.3,
      reviews: 23,
      featured: false,
      image: "/placeholder.svg"
    },
    {
      name: "TechFix Computer Services",
      category: "Technology",
      description: "Computer repair, mobile phone services, and IT support for individuals and businesses.",
      address: "258 Tech Hub",
      phone: "+254 XXX XXX XXX",
      hours: "Mon-Sat: 9 AM - 7 PM",
      rating: 4.4,
      reviews: 67,
      featured: false,
      image: "/placeholder.svg"
    },
    {
      name: "Beautiful Hair Salon",
      category: "Beauty",
      description: "Professional hair styling, beauty treatments, and cosmetic services for all occasions.",
      address: "369 Beauty Plaza",
      phone: "+254 XXX XXX XXX",
      hours: "Tue-Sun: 9 AM - 7 PM, Closed Mon",
      rating: 4.6,
      reviews: 41,
      featured: false,
      image: "/placeholder.svg"
    }
  ];

  const getCategoryIcon = (category: string) => {
    const iconMap = {
      "Restaurants": Utensils,
      "Healthcare": Heart,
      "Fitness": Dumbbell,
      "Religious Centers": Church,
      "Education": GraduationCap,
      "Shops": Store,
      "Technology": Store,
      "Beauty": Store
    };
    return iconMap[category as keyof typeof iconMap] || Store;
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={14}
        className={i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Business Directory</h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Discover local businesses, services, and organizations in our thriving community
              </p>
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                <Plus className="mr-2" size={20} />
                List Your Business
              </Button>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 bg-card border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                  <Input 
                    placeholder="Search businesses..." 
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Select defaultValue="all">
                  <SelectTrigger className="w-48">
                    <Filter size={16} className="mr-2" />
                    <SelectValue placeholder="Filter by category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select defaultValue="rating">
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="name">Name A-Z</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-12 bg-gradient-section">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Browse by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.slice(1).map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <Card key={index} className="p-4 text-center bg-gradient-card border-0 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="text-primary" size={24} />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground">{category.name}</h3>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Business */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Featured Business</h2>
            {businesses.filter(business => business.featured).map((business, index) => (
              <Card key={index} className="overflow-hidden bg-gradient-card border-0 shadow-card">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  <div className="bg-muted h-64 lg:h-auto flex items-center justify-center">
                    <span className="text-muted-foreground">Business Photo</span>
                  </div>
                  <div className="lg:col-span-2 p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <Badge className="bg-primary/10 text-primary">
                        {business.category}
                      </Badge>
                      <Badge variant="secondary">Featured</Badge>
                      <div className="flex items-center space-x-1">
                        {renderStars(business.rating)}
                        <span className="text-sm text-muted-foreground ml-1">
                          {business.rating} ({business.reviews} reviews)
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {business.name}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {business.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <MapPin size={16} />
                        <span>{business.address}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Phone size={16} />
                        <span>{business.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground md:col-span-2">
                        <Clock size={16} />
                        <span>{business.hours}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button size="lg" className="flex-1">
                        Contact Business
                      </Button>
                      <Button variant="outline" size="lg">
                        View on Map
                      </Button>
                      <Button variant="outline" size="lg">
                        Write Review
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Business Listings Grid */}
        <section className="py-20 bg-gradient-section">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">All Businesses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {businesses.filter(business => !business.featured).map((business, index) => {
                const CategoryIcon = getCategoryIcon(business.category);
                return (
                  <Card key={index} className="overflow-hidden bg-gradient-card border-0 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="bg-muted h-48 flex items-center justify-center">
                      <CategoryIcon className="text-muted-foreground" size={48} />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {business.category}
                        </Badge>
                        <div className="flex items-center space-x-1">
                          {renderStars(business.rating)}
                          <span className="text-xs text-muted-foreground ml-1">
                            ({business.reviews})
                          </span>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-foreground mb-3 leading-tight">
                        {business.name}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {business.description}
                      </p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                          <MapPin size={12} />
                          <span className="truncate">{business.address}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                          <Phone size={12} />
                          <span>{business.phone}</span>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button className="flex-1" size="sm">
                          Contact
                        </Button>
                        <Button variant="outline" size="sm">
                          Details
                        </Button>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Business Registration CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Own a Business in Our Community?</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join our business directory to reach more customers and connect with the community. 
              It's free to list your business!
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Plus className="mr-2" size={20} />
              List Your Business for Free
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Directory;