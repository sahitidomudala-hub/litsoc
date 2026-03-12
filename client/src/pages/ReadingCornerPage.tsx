import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ReadingCorner from '@/components/ReadingCorner';

export default function ReadingCornerPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />
      <main className="flex-1">
        <ReadingCorner />
      </main>
      <Footer />
    </div>
  );
}
