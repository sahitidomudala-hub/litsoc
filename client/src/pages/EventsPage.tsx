import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, MapPin, Clock } from 'lucide-react';

export default function EventsPage() {
  const upcomingEvents = [
    {
      title: 'Inauguration and Mental Wellness Talk',
      location: 'MPH',
      date: '17 March 2025',
      time: 'TBD',
      description: 'A conversation about mental health, reflection, and wellbeing.',
    },
  ];

  const comingSoonSections = ['Team', 'Gallery', 'Past Events', 'Student Publications'];

  return (
    <div className="flex flex-col bg-background text-foreground">
      <Navigation />
      <main className="flex-1">
        <section className="py-20 md:py-32 bg-secondary/30">
          <div className="container">
            {/* Page Header */}
            <div className="mb-16 text-center">
              <h1 className="section-title">Events</h1>
              <div className="ornamental-divider" />
              <p className="text-lg text-foreground/70 mt-6 max-w-2xl mx-auto">
                Join us for engaging literary events, discussions, and creative gatherings.
              </p>
            </div>

            {/* Upcoming Events */}
            <div className="mb-20">
              <h2
                className="text-3xl font-bold text-foreground mb-8 text-center"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                Upcoming Events
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {upcomingEvents.map((event, index) => (
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
            </div>

            {/* Coming Soon Sections */}
            <div>
              <h2
                className="text-3xl font-bold text-foreground mb-8 text-center"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                More Coming Soon
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {comingSoonSections.map((section, index) => (
                  <div
                    key={index}
                    className="stagger-item bg-card rounded-lg p-8 text-center border border-border hover:border-accent transition-colors duration-300"
                  >
                    <div className="text-4xl mb-4 text-accent/50">
                      {section === 'Team' && '👥'}
                      {section === 'Gallery' && '📸'}
                      {section === 'Past Events' && '📅'}
                      {section === 'Student Publications' && '📖'}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground/60">{section}</h3>
                    <p className="text-sm text-foreground/50 mt-2">Updating Soon</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
