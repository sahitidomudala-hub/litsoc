import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Join() {
  return (
    <section id="join" className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full -ml-48 -mb-48" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="section-title">Join the Society</h2>
          <div className="ornamental-divider" />
        </div>

        {/* Main Content */}
        <div className="max-w-3xl mx-auto text-center">
          {/* Decorative quote mark */}
          <div className="flex justify-center mb-8 opacity-40">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663429267594/aWWy5o9FQovg9dFpMNicRb/quote-mark-accent-nAhrwhnDKKyephGnKuW6ZG.webp"
              alt=""
              className="w-12 h-12"
            />
          </div>

          {/* Main Message */}
          <h3
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 md:mb-8 leading-tight px-4"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            We're taking interviews for new members!
          </h3>

          <p className="text-lg sm:text-xl text-foreground/80 mb-8 md:mb-12 leading-relaxed font-light px-4">
            Ready to join our literary community? Whether you love reading, writing, debating, or simply exploring ideas, this is your place.
          </p>

          {/* Interview Details Box */}
          <div className="bg-card border-2 border-accent rounded-lg p-6 md:p-8 mb-8 max-w-2xl mx-auto">
            <h4 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2" style={{ fontFamily: 'Georgia, serif' }}>
              ⏳ Interview Details
            </h4>
            <div className="space-y-3 text-left">
              <p className="text-foreground/80 flex items-start gap-2">
                <span className="text-accent font-semibold">📅</span>
                <span><strong>Friday, 13th March</strong> – 5:00 PM to 6:00 PM</span>
              </p>
              <p className="text-foreground/80 flex items-start gap-2">
                <span className="text-accent font-semibold">📅</span>
                <span><strong>Saturday, 14th March</strong> – 4:00 PM to 6:00 PM</span>
              </p>
              <p className="text-foreground/80 flex items-start gap-2">
                <span className="text-accent font-semibold">📍</span>
                <span><strong>Venue:</strong> L-16</span>
              </p>
            </div>
          </div>

          {/* Registration Closing Notice */}
          <div className="bg-accent/10 border border-accent rounded-lg p-4 mb-8 max-w-2xl mx-auto">
            <p className="text-accent font-semibold text-lg">
              ⚠️ Registrations close soon!
            </p>
          </div>

          {/* CTA Button */}
          <a
            href="https://forms.gle/nyFfGvFV3ryz7bBV7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-10 py-6 text-lg rounded-lg transition-all duration-300 hover:shadow-lg inline-flex items-center gap-2"
            >
              Apply for Interview
              <ArrowRight className="w-5 h-5" />
            </Button>
          </a>

          {/* Additional Info */}
          <p className="text-foreground/60 text-sm mt-8 italic">
            Fill out our application form to schedule your interview. We can't wait to meet you!
          </p>
        </div>
      </div>
    </section>
  );
}