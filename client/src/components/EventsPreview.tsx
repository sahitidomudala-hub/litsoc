import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export default function EventsPreview() {
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

        {/* Events Coming Soon */}
        <div className="text-center mb-12">
          <div className="bg-card rounded-lg p-8 md:p-12 max-w-2xl mx-auto border border-border">
            <div className="text-6xl mb-6 text-accent/50">📅</div>
            <h3
              className="text-2xl font-bold text-foreground mb-4"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Events Coming Soon
            </h3>
            <p className="text-foreground/70 leading-relaxed">
              We're planning exciting literary events, discussions, and creative gatherings. Stay tuned for updates!
            </p>
          </div>
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
        </div>

        {/* Event Suggestions */}
        <div className="text-center mb-12">
          <p className="text-foreground/60 text-sm mb-2">
            Have any events you want us to organize?
          </p>
          <Link href="/feedback">
            <a className="text-accent hover:text-accent/80 font-semibold transition-colors duration-300 underline text-sm">
              Share your ideas with us →
            </a>
          </Link>
        </div>

        {/* View All Events Button */}