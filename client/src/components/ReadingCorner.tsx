import { Button } from '@/components/ui/button';
import { ExternalLink, Mail, BookOpen } from 'lucide-react';
// import { useGuardianArticles } from '@/hooks/useGuardianArticles'; // Temporarily disabled

export default function ReadingCorner() {
  // const { articles: liveArticles, loading, error, refetch } = useGuardianArticles(); // Temporarily disabled
  const liveArticles: any[] = []; // Empty for now
  const loading = false;
  const error = null;
  const refetch = () => {}; // Placeholder

  // Curated articles that are always shown
  const curatedArticles = [
    {
      title: 'The Art of Adulting',
      description: 'A practical guide to navigating the challenges and responsibilities of adult life.',
      author: 'Medium',
      link: 'https://medium.com/lifeclubhq/the-art-of-adulting-5eac73126225',
    },
    {
      title: 'What Is Literature? A Complete Guide',
      description: 'An exploration of literature in all its forms - from novels and poetry to theatre and drama, and why it matters in our lives.',
      author: 'ThoughtCo',
      link: 'https://www.thoughtco.com/what-is-literature-740531',
    },
    {
      title: 'The Art and Science of Effective Storytelling',
      description: 'Understanding the techniques and psychology behind compelling narratives that captivate audiences.',
      author: 'Medium',
      link: 'https://medium.com/madhukarkumar/the-art-and-science-of-effective-storytelling-in-c0207f3aac94',
    },
    {
      title: 'How to Avoid Burnout',
      description: 'Practical strategies for managing stress and maintaining balance in college life.',
      author: 'Harvard Business Review',
      link: 'https://hbr.org/2019/12/burnout-is-about-your-workplace-not-your-people',
    },
    {
      title: 'The Case for Being Average',
      description: 'An essay about letting go of constant pressure to be exceptional.',
      author: 'Mark Manson',
      link: 'https://markmanson.net/being-average',
    },
  ];

  // Combine curated articles with live articles (for now, just show curated)
  const allArticles = [...curatedArticles, ...liveArticles.slice(0, 2)]; // Limit live articles to 2

  const guidelines = [
    'Writing should be student-friendly and respectful',
    'Avoid offensive or vulgar content',
    'Poetry, essays, reflections, and short stories are welcome',
    'Keep submissions between 300–1200 words',
  ];

  const handleSubmitWriting = () => {
    const subject = encodeURIComponent('Literary Society Writing Submission');
    const body = encodeURIComponent('Hi,\n\nI would like to submit my writing to the Literary Society.\n\nTitle: [Your Title]\nType: [Essay/Poem/Story/Reflection]\n\n[Paste your writing here]\n\nBest regards,\n[Your Name]');
    window.location.href = `mailto:literary.stmehyd@nmims.in?subject=${subject}&body=${body}`;
  };

  return (
    <section id="reading-corner" className="py-20 md:py-32 bg-background">
      <div className="container">
        {/* Page Header */}
        <div className="mb-16 text-center">
          <div className="flex justify-center mb-6">
            <BookOpen className="w-12 h-12 text-accent" />
          </div>
          <h1 className="section-title">Reading Corner</h1>
          <div className="ornamental-divider" />
          <p className="text-lg text-foreground/70 mt-6 max-w-2xl mx-auto italic">
            "Thoughts, stories, and ideas worth exploring."
          </p>
        </div>

        {/* Refresh Button for Live Articles - Temporarily Hidden */}
        {false && (
          <div className="max-w-6xl mx-auto mb-8 text-center">
            <Button
              onClick={refetch}
              disabled={loading}
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 inline-flex items-center gap-2"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              {loading ? 'Loading Articles...' : 'Refresh Articles'}
            </Button>
            {error && (
              <p className="text-sm text-foreground/60 mt-2">
                Showing curated articles (live articles temporarily unavailable)
              </p>
            )}
          </div>
        )}

        {/* Blog Articles Grid */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {allArticles.map((article, index) => (
              <div
                key={index}
                className="stagger-item bg-card rounded-lg p-6 md:p-8 border border-border hover:border-accent transition-all duration-300 hover:shadow-lg group"
              >
                <h3
                  className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  {article.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  {article.description}
                </p>
                <p className="text-sm text-foreground/50 mb-6 italic">
                  — {article.author}
                </p>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 inline-flex items-center gap-2"
                  >
                    Read Article
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Student Submissions Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-secondary/30 rounded-lg p-8 md:p-12 border border-border">
            <div className="text-center mb-8">
              <h2
                className="text-2xl md:text-3xl font-bold text-foreground mb-4"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                Write for the Literary Society
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Have a story, reflection, poem, or essay you'd like to share? Students are welcome to contribute their writing to the Literary Society.
              </p>
              <p className="text-foreground/70 mb-8">
                To submit your writing, email your piece to our team and we may feature it on the website.
              </p>

              <Button
                onClick={handleSubmitWriting}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:shadow-lg inline-flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Submit Your Writing
              </Button>
            </div>

            {/* Submission Guidelines */}
            <div className="mt-10 pt-8 border-t border-border">
              <h3
                className="text-lg font-bold text-foreground mb-4 text-center"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                Submission Guidelines
              </h3>
              <ul className="space-y-3 max-w-2xl mx-auto">
                {guidelines.map((guideline, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-foreground/70"
                  >
                    <span className="text-accent mt-1">•</span>
                    <span>{guideline}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <p className="text-sm text-foreground/60 italic">
            The Reading Corner is a curated collection of thoughtful writing for our campus community.
          </p>
        </div>
      </div>
    </section>
  );
}
