import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import EventsPreview from '@/components/EventsPreview';
import Join from '@/components/Join';
import Footer from '@/components/Footer';

/**
 * Literary Society Website
 * 
 * Design Philosophy: Vintage Literary Journal
 * - Warm cream background with burgundy and gold accents
 * - Georgia serif for headings, Lato sans-serif for body
 * - Elegant, minimal aesthetic with generous whitespace
 * - Smooth animations and subtle hover effects
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <About />
        <EventsPreview />
        <Join />
      </main>
      <Footer />
    </div>
  );
}
