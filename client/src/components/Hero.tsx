import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663429267594/aWWy5o9FQovg9dFpMNicRb/hero-literary-journal-FmGyAEsVBma8JRRSG2wvah.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for better text readability - lighter on mobile to show more background */}
      <div className="absolute inset-0 bg-background/20 md:bg-background/40" style={{
        background: 'linear-gradient(135deg, rgba(245, 241, 232, 0.3) 0%, rgba(245, 241, 232, 0.2) 100%)'
      }} />

      {/* Content */}
      <div className="relative z-10 container text-center px-4 py-20">
        {/* NMIMS Logo at top */}
        <div className="flex justify-center mb-8 opacity-90">
          <img
            src="/nmlogo.jpg"
            alt="NMIMS Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain hover:opacity-100 transition-opacity duration-300"
          />
        </div>

        {/* Main Title */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight px-4"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          The Literary Society
        </h1>

        {/* College Name */}
        <p className="text-lg sm:text-xl md:text-2xl text-foreground/90 mb-6 font-medium">
          STME NMIMS Hyderabad
        </p>

        {/* College Logo */}
        <div className="flex justify-center mb-8">
          <img
            src="/logo_trans.png"
            alt="College Logo"
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
        </div>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed font-light px-4">
          "A space for stories, ideas, poetry, debate, and expression."
        </p>

        {/* Ornamental divider */}
        <div className="flex justify-center mb-12">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
        </div>

        {/* CTA Button */}
        <Link href="/join">
          <Button
            size="lg"
            className="btn-enhanced bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-lg transition-all duration-300 hover:shadow-lg inline-flex items-center gap-2"
          >
            Join Us
            <svg className="btn-arrow w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </Link>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-foreground/60"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
