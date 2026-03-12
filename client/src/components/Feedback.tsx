import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function Feedback() {
  const [suggestion, setSuggestion] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      if (!suggestion.trim()) {
        toast.error('Please enter a suggestion');
        return;
      }

      setIsSubmitting(true);

      // Create mailto link with suggestion
      const subject = encodeURIComponent('Literary Society Event Suggestion');
      const body = encodeURIComponent(`Event Suggestion:\n\n${suggestion.trim()}\n\n---\nSubmitted via Literary Society website`);
      const mailtoLink = `mailto:literary.stmehyd@nmims.in?subject=${subject}&body=${body}`;

      // Open email client
      window.location.href = mailtoLink;

      // Show success message and reset form
      setTimeout(() => {
        toast.success('Email client opened! Please send the email to submit your suggestion.');
        setSuggestion('');
        setIsSubmitting(false);
      }, 500);
    };

  return (
    <section id="feedback" className="py-20 md:py-32 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="section-title">Share Your Ideas</h2>
          <div className="ornamental-divider" />
        </div>

        {/* Feedback Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-lg p-8 md:p-12 border border-border shadow-sm">
            <p className="text-lg text-foreground/80 mb-8 text-center leading-relaxed">
              What kind of events would you like the Literary Society to host?
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Text Area */}
              <div>
                <textarea
                  value={suggestion}
                  onChange={(e) => setSuggestion(e.target.value)}
                  placeholder="Share your event ideas, topics, or activities you'd like to see..."
                  className="w-full p-4 border border-border rounded-lg bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                  rows={6}
                  disabled={isSubmitting}
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Suggestion'}
                </Button>
              </div>
            </form>

            {/* Encouragement text */}
            <p className="text-center text-foreground/60 text-sm mt-6 italic">
              Your voice matters. Help us create events that inspire and engage our community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
