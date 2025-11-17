import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, MapPin, User, Search, Filter } from "lucide-react";

const News = () => {
  const categories = ["All", "Community", "Infrastructure", "Security", "Healthcare", "Education", "Business"];
  
  const newsArticles = [
    {
      title: "New Water Supply Project Approved for Ward Implementation",
      excerpt: "The county government has approved a comprehensive water supply project that will benefit over 3,000 households in our ward. Construction is set to begin next month with completion expected by end of year.",
      category: "Infrastructure",
      author: "County Communications",
      date: "March 10, 2024",
      readTime: "3 min read",
      image: "/placeholder.svg",
      featured: true
    },
    {
      title: "Community Clean-up Drive Achieves Record Participation",
      excerpt: "Last Saturday's community clean-up drive saw over 500 residents participate, collecting 2 tons of waste and planting 100 trees across the ward.",
      category: "Community",
      author: "Community Chair",
      date: "March 8, 2024",
      readTime: "2 min read",
      image: "/placeholder.svg",
      featured: false
    },
    {
      title: "New Health Clinic Opens in Ward 3 - Free Services Week",
      excerpt: "Residents now have access to quality healthcare services closer to home. The new clinic offers general medicine, maternal health, and emergency services.",
      category: "Healthcare",
      author: "Health Department",
      date: "March 5, 2024",
      readTime: "4 min read",
      image: "/placeholder.svg",
      featured: false
    },
    {
      title: "Security Enhancement: New Police Post Operational",
      excerpt: "The new police post in our area is now fully operational, providing 24/7 security services and faster response times for residents.",
      category: "Security",
      author: "Security Committee",
      date: "March 3, 2024",
      readTime: "2 min read",
      image: "/placeholder.svg",
      featured: false
    },
    {
      title: "Local School Receives Computer Lab Donation",
      excerpt: "Our primary school has received a fully equipped computer lab with 30 computers, boosting digital literacy among our children.",
      category: "Education",
      author: "Education Board",
      date: "February 28, 2024",
      readTime: "3 min read",
      image: "/placeholder.svg",
      featured: false
    },
    {
      title: "Road Maintenance Schedule for March Released",
      excerpt: "The county has released the road maintenance schedule. Several roads in our area will be upgraded including the main access road.",
      category: "Infrastructure",
      author: "Public Works",
      date: "February 25, 2024",
      readTime: "2 min read",
      image: "/placeholder.svg",
      featured: false
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Community News & Updates</h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Stay informed with the latest news, announcements, and developments in our community
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 bg-card border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                  <Input 
                    placeholder="Search news articles..." 
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
                      <SelectItem key={category} value={category.toLowerCase()}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select defaultValue="newest">
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-12 bg-gradient-section">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
            {newsArticles.filter(article => article.featured).map((article, index) => (
              <Card key={index} className="overflow-hidden bg-gradient-card border-0 shadow-card">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="bg-muted h-64 lg:h-auto flex items-center justify-center">
                    <span className="text-muted-foreground">Featured Image</span>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <Badge className="bg-primary/10 text-primary">
                        {article.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground">Featured</span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <User size={14} />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock size={14} />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <Button>Read More</Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* News Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.filter(article => !article.featured).map((article, index) => (
                <Card key={index} className="overflow-hidden bg-gradient-card border-0 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="bg-muted h-48 flex items-center justify-center">
                    <span className="text-muted-foreground">Article Image</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {article.category}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3 leading-tight line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <div className="flex items-center space-x-1">
                        <User size={12} />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={12} />
                        <span>{article.date}</span>
                      </div>
                    </div>
                    <Button variant="ghost" className="w-full">
                      Read Full Article
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Never Miss an Update</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest community news delivered straight to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-white text-foreground"
              />
              <Button size="lg" variant="secondary">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default News;