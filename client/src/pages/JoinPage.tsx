import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Join from '@/components/Join';

export default function JoinPage() {
  return (
    <div className="flex flex-col bg-background text-foreground">
      <Navigation />
      <main className="flex-1">
        <Join />
      </main>
      <Footer />
    </div>
  );
}