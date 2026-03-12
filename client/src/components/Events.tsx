import { Calendar, MapPin, Clock } from 'lucide-react';

export default function Events() {
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
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="section-title">Upcoming Events</h2>
          <div className="ornamental-divider" />
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="stagger-item event-card flex flex-col"
            >
              {/* Event Title */}
              <h3
                className="text-2xl font-bold text-foreground mb-4"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                {event.title}
              </h3>

              {/* Event Details */}
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

              {/* Event Description */}
              <p className="text-foreground/70 leading-relaxed italic border-t border-border pt-4">
                "{event.description}"
              </p>
            </div>
          ))}
        </div>

        {/* Coming Soon Sections */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center" style={{ fontFamily: 'Georgia, serif' }}>
            More Coming Soon
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {['Team', 'Gallery', 'Past Events', 'Student Publications'].map((section, index) => (
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
                <h4 className="text-lg font-semibold text-foreground/60">{section}</h4>
                <p className="text-sm text-foreground/50 mt-2">Updating Soon</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
