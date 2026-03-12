import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-mobile md:bg-hero-desktop"
      style={{
        backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663429267594/aWWy5o9FQovg9dFpMNicRb/hero-literary-journal-FmGyAEsVBma8JRRSG2wvah.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/40" />

      {/* Content */}
      <div className="relative z-10 container text-center px-4 py-20">
        {/* Decorative quote mark */}
        <div className="flex justify-center mb-8 opacity-60">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663429267594/aWWy5o9FQovg9dFpMNicRb/quote-mark-accent-nAhrwhnDKKyephGnKuW6ZG.webp"
            alt=""
            className="w-16 h-16"
          />
        </div>

        {/* Main Title */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight px-4"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          The Literary Society
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed font-light px-4">
          "A space for stories, ideas, poetry, debate, and expression."
        </p>

        {/* Ornamental divider */}
        <div className="flex justify-center mb-12">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
        </div>

        {/* CTA Button */}
        <Button
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-lg transition-all duration-300 hover:shadow-lg"
          onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Join Us
        </Button>

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
