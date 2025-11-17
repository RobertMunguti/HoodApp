import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react";

const NewsEvents = () => {
  const news = [
    {
      title: "New Water Supply Project Approved",
      excerpt: "The county government has approved funding for improved water infrastructure...",
      category: "Infrastructure",
      date: "2 days ago",
      image: "/placeholder.svg"
    },
    {
      title: "Community Clean-up Drive This Saturday",
      excerpt: "Join your neighbors for a community-wide cleaning initiative...",
      category: "Community",
      date: "1 week ago",
      image: "/placeholder.svg"
    },
    {
      title: "New Health Clinic Opens in Ward 3",
      excerpt: "Residents now have access to quality healthcare services closer to home...",
      category: "Healthcare",
      date: "2 weeks ago",
      image: "/placeholder.svg"
    }
  ];

  const events = [
    {
      title: "Town Hall Meeting",
      date: "March 15, 2024",
      time: "6:00 PM",
      location: "Community Center",
      type: "Meeting",
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "Youth Sports Tournament",
      date: "March 20, 2024",
      time: "9:00 AM",
      location: "Sports Complex",
      type: "Sports",
      color: "bg-green-100 text-green-800"
    },
    {
      title: "Business Networking Event",
      date: "March 25, 2024",
      time: "7:00 PM",
      location: "Hotel Conference Room",
      type: "Business",
      color: "bg-purple-100 text-purple-800"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* News Section */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-foreground">Latest News</h2>
              <Button variant="ghost" className="text-primary">
                View All
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </div>
            
            <div className="space-y-6">
              {news.map((article, index) => (
                <Card key={index} className="p-6 hover:shadow-card transition-all duration-300 bg-gradient-card border-0">
                  <div className="flex items-start space-x-4">
                    <div className="w-20 h-20 bg-muted rounded-lg flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {article.category}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {article.date}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Events Section */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-foreground">Upcoming Events</h2>
              <Button variant="ghost" className="text-primary">
                View Calendar
                <Calendar className="ml-2" size={16} />
              </Button>
            </div>
            
            <div className="space-y-4">
              {events.map((event, index) => (
                <Card key={index} className="p-6 hover:shadow-card transition-all duration-300 bg-gradient-card border-0">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <Calendar className="text-white" size={20} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <Badge className={event.color}>
                          {event.type}
                        </Badge>
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {event.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock size={14} />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={14} />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;