import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Feedback from '@/components/Feedback';

export default function FeedbackPage() {
  return (
    <div className="flex flex-col bg-background text-foreground">
      <Navigation />
      <main className="flex-1">
        <Feedback />
      </main>
      <Footer />
    </div>
  );
}
