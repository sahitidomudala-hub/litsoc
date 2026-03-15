import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, MessageCircle, PenTool } from 'lucide-react';
import { Link } from 'wouter';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function Join() {
  const { elementRef, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section 
      id="join" 
      className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden"
      ref={elementRef}
    >
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full -ml-48 -mb-48" />

      <div className={`container relative z-10 transition-all duration-700 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="section-title">Thank You for Your Interest</h2>
          <div className="ornamental-divider" />
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative quote mark */}
          <div className="flex justify-center mb-8 opacity-40">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663429267594/aWWy5o9FQovg9dFpMNicRb/quote-mark-accent-nAhrwhnDKKyephGnKuW6ZG.webp"
              alt=""
              className="w-12 h-12"
            />
          </div>

          {/* Main Message */}
          <p className="text-lg sm:text-xl text-foreground/80 mb-12 leading-relaxed font-light px-4 max-w-3xl mx-auto">
            While our formal membership is currently closed, the Literary Society is always open to passionate readers and writers.
          </p>

          {/* Engagement Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
            <div className="bg-card rounded-lg p-6 md:p-8 border border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
              <div className="flex justify-center mb-4">
                <PenTool className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300 ease-out" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                Share Your Writing
              </h3>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                Submit your poems, essays, or stories for publication on our website
              </p>
              <Link href="/reading-corner#submit-writing">
                <Button
                  variant="outline"
                  className="btn-enhanced border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 inline-flex items-center gap-2"
                >
                  Submit Writing
                  <ArrowRight className="btn-arrow w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="bg-card rounded-lg p-6 md:p-8 border border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
              <div className="flex justify-center mb-4">
                <BookOpen className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300 ease-out" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                Explore Literature
              </h3>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                Discover curated articles and join the conversation about literature and ideas
              </p>
              <Link href="/reading-corner">
                <Button
                  variant="outline"
                  className="btn-enhanced border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 inline-flex items-center gap-2"
                >
                  Read Articles
                  <ArrowRight className="btn-arrow w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="bg-card rounded-lg p-6 md:p-8 border border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
              <div className="flex justify-center mb-4">
                <MessageCircle className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300 ease-out" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                Share Your Thoughts
              </h3>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                Connect with us through feedback and suggestions
              </p>
              <Link href="/feedback">
                <Button
                  variant="outline"
                  className="btn-enhanced border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 inline-flex items-center gap-2"
                >
                  Give Feedback
                  <ArrowRight className="btn-arrow w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="bg-card rounded-lg p-6 md:p-8 border border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
              <div className="flex justify-center mb-4">
                <BookOpen className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300 ease-out" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                Stay Updated
              </h3>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                Follow our updates and literary discussions
              </p>
              <Button
                variant="outline"
                className="btn-enhanced border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 inline-flex items-center gap-2"
                onClick={() => window.location.href = 'mailto:literary.stmehyd@nmims.in?subject=Stay Updated'}
              >
                Connect With Us
                <ArrowRight className="btn-arrow w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Closing Message */}
          <div className="bg-accent/10 rounded-lg p-6 md:p-8 border border-accent/20">
            <p className="text-lg text-foreground font-medium mb-2" style={{ fontFamily: 'Georgia, serif' }}>
              Literature is for everyone.
            </p>
            <p className="text-foreground/70 italic">
              You don't need a membership card to be part of our community!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}