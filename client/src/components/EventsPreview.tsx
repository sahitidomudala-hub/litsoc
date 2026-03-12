import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export default function EventsPreview() {
  const upcomingEvents = [
    {
      title: 'Mental Health Session',
      location: 'MPH',
      date: '17 March 2025',
      time: 'TBD',
      description: 'A conversation about mental health, reflection, and wellbeing.',
    },
  ];

  return (
    <section id="events" className="py-20 md:py-32 bg-secondary/30">
      <div className="container">
        {/* Scroll target for navigation */}
        <div id="events-top" className="absolute -mt-20"></div>
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="section-title">Upcoming Events</h2>
          <div className="ornamental-divider" />
        </div>

        {/* Events Preview - Show max 3 events */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {upcomingEvents.slice(0, 3).map((event, index) => (
            <div
              key={index}
              className="stagger-item event-card flex flex-col"
            >
              <h3
                className="text-2xl font-bold text-foreground mb-4"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                {event.title}
              </h3>

              <div className="space-y-3 mb-6 flex-grow">
                <div className="flex items-start gap-3 text-foreground/70">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-start gap-3 text-foreground/70">
                  <Calendar className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-start gap-3 text-foreground/70">
                  <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>{event.time}</span>
                </div>
              </div>

              <p className="text-foreground/70 leading-relaxed italic border-t border-border pt-4">
                "{event.description}"
              </p>
            </div>
          ))}
        </div>

        {/* View All Events Button */}
        <div className="text-center">
          <Link href="/events">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:shadow-lg inline-flex items-center gap-2"
            >
              View All Events
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
