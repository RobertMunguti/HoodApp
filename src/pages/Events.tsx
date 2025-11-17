import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, ArrowRight, Plus } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Monthly Town Hall Meeting",
      description: "Join us for our monthly community meeting to discuss ongoing projects, address concerns, and plan future initiatives. All residents are welcome.",
      date: "March 15, 2024",
      time: "6:00 PM - 8:00 PM",
      location: "Community Center Main Hall",
      category: "Meeting",
      organizer: "Community Leadership",
      rsvpCount: 45,
      maxAttendees: 100,
      featured: true
    },
    {
      title: "Youth Sports Tournament",
      description: "Annual sports tournament featuring football, volleyball, and athletics. Open to all youth aged 12-25. Registration required.",
      date: "March 20, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Community Sports Complex",
      category: "Sports",
      organizer: "Youth Committee",
      rsvpCount: 120,
      maxAttendees: 200,
      featured: false
    },
    {
      title: "Business Networking Evening",
      description: "Connect with local entrepreneurs and business owners. Enjoy refreshments while discussing business opportunities and partnerships.",
      date: "March 25, 2024",
      time: "7:00 PM - 9:00 PM",
      location: "Sunrise Hotel Conference Room",
      category: "Business",
      organizer: "Business Association",
      rsvpCount: 28,
      maxAttendees: 50,
      featured: false
    },
    {
      title: "Health Screening & Wellness Fair",
      description: "Free health screenings, wellness consultations, and health education. Includes blood pressure checks, BMI assessments, and nutrition counseling.",
      date: "March 30, 2024",
      time: "8:00 AM - 4:00 PM",
      location: "Community Health Center",
      category: "Health",
      organizer: "Health Committee",
      rsvpCount: 85,
      maxAttendees: 150,
      featured: false
    },
    {
      title: "Environmental Conservation Workshop",
      description: "Learn about sustainable practices, waste management, and tree planting. Hands-on activities and take-home resources included.",
      date: "April 5, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Community Center",
      category: "Environment",
      organizer: "Green Committee",
      rsvpCount: 32,
      maxAttendees: 60,
      featured: false
    },
    {
      title: "Senior Citizens Social Gathering",
      description: "Monthly social event for our senior community members. Includes refreshments, entertainment, and health talks.",
      date: "April 10, 2024",
      time: "10:00 AM - 2:00 PM",
      location: "Community Hall",
      category: "Social",
      organizer: "Senior Citizens Committee",
      rsvpCount: 40,
      maxAttendees: 80,
      featured: false
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Meeting": "bg-blue-100 text-blue-800",
      "Sports": "bg-green-100 text-green-800",
      "Business": "bg-purple-100 text-purple-800",
      "Health": "bg-red-100 text-red-800",
      "Environment": "bg-emerald-100 text-emerald-800",
      "Social": "bg-orange-100 text-orange-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Community Events</h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Join us in building a stronger community through meaningful events and gatherings
              </p>
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                <Plus className="mr-2" size={20} />
                Submit Event
              </Button>
            </div>
          </div>
        </section>

        {/* Calendar Integration Placeholder */}
        <section className="py-12 bg-card border-b">
          <div className="container mx-auto px-4">
            <div className="bg-muted rounded-xl h-64 flex items-center justify-center">
              <div className="text-center">
                <Calendar className="text-muted-foreground mx-auto mb-4" size={48} />
                <p className="text-muted-foreground">Interactive Calendar View</p>
                <p className="text-sm text-muted-foreground mt-2">Full calendar integration coming soon</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Event */}
        <section className="py-12 bg-gradient-section">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Featured Event</h2>
            {upcomingEvents.filter(event => event.featured).map((event, index) => (
              <Card key={index} className="overflow-hidden bg-gradient-card border-0 shadow-card">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  <div className="bg-muted h-64 lg:h-auto flex items-center justify-center">
                    <div className="text-center p-8">
                      <Calendar className="text-primary mx-auto mb-4" size={48} />
                      <div className="text-2xl font-bold text-foreground">{event.date.split(',')[0]}</div>
                      <div className="text-sm text-muted-foreground">{event.date.split(',')[1]}</div>
                    </div>
                  </div>
                  <div className="lg:col-span-2 p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <Badge className={getCategoryColor(event.category)}>
                        {event.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground">Featured</span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {event.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Clock size={16} />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <MapPin size={16} />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Users size={16} />
                        <span>Organized by {event.organizer}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Users size={16} />
                        <span>{event.rsvpCount}/{event.maxAttendees} attending</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button size="lg" className="flex-1">
                        Register to Attend
                      </Button>
                      <Button variant="outline" size="lg">
                        Add to Calendar
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Upcoming Events Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Upcoming Events</h2>
              <Button variant="outline">
                View All Events
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.filter(event => !event.featured).map((event, index) => (
                <Card key={index} className="overflow-hidden bg-gradient-card border-0 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className={getCategoryColor(event.category)}>
                        {event.category}
                      </Badge>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-foreground">{event.date.split(',')[0]}</div>
                        <div className="text-xs text-muted-foreground">{event.date.split(',')[1]}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground mb-3 leading-tight">
                      {event.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {event.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <Clock size={12} />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <MapPin size={12} />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <Users size={12} />
                        <span>{event.rsvpCount}/{event.maxAttendees} registered</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button className="flex-1" size="sm">
                        Register
                      </Button>
                      <Button variant="outline" size="sm">
                        Details
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Event Submission CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Have an Event to Share?</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Let the community know about your upcoming event. We'll help you reach more people and build engagement.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Plus className="mr-2" size={20} />
              Submit Your Event
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Events;