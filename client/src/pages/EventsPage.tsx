import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'wouter';

export default function EventsPage() {
  const comingSoonSections = [
    { name: 'Team', emoji: '👥' },
    { name: 'Gallery', emoji: '📸' }
  ];

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
              <div className="text-center">
                <div className="bg-card rounded-lg p-8 md:p-12 max-w-2xl mx-auto border border-border">
                  <div className="text-6xl mb-6 text-accent/50">📅</div>
                  <h3
                    className="text-2xl font-bold text-foreground mb-4"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    Events Updating Soon
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    We're planning exciting literary events, discussions, and creative gatherings. Stay tuned for updates!
                  </p>
                </div>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
                {comingSoonSections.map((section, index) => (
                  <div
                    key={index}
                    className="stagger-item bg-card rounded-lg p-8 text-center border border-border hover:border-accent transition-colors duration-300"
                  >
                    <div className="text-4xl mb-4 text-accent/50">
                      {section.emoji}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground/60">{section.name}</h3>
                    <p className="text-sm text-foreground/50 mt-2">Updating Soon</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Event Suggestions */}
            <div className="text-center mt-12">
              <p className="text-foreground/60 text-sm mb-2">
                Have any events you want us to organize?
              </p>
              <Link href="/feedback">
                <a className="text-accent hover:text-accent/80 font-semibold transition-colors duration-300 underline text-sm">
                  Share your ideas with us →
                </a>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
