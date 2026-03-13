import { Button } from '@/components/ui/button';
import { ExternalLink, ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'wouter';

export default function ReadingCornerPreview() {
  // Show first 3 curated articles as preview
  const featuredArticles = [
    {
      title: 'The Art of Adulting',
      description: 'A practical guide to navigating the challenges and responsibilities of adult life.',
      author: 'Medium',
      link: 'https://medium.com/lifeclubhq/the-art-of-adulting-5eac73126225',
    },
    {
      title: 'What Is Literature? A Complete Guide',
      description: 'An exploration of literature in all its forms - from novels and poetry to theatre and drama.',
      author: 'ThoughtCo',
      link: 'https://www.thoughtco.com/what-is-literature-740531',
    },
    {
      title: 'The Art and Science of Effective Storytelling',
      description: 'Understanding the techniques and psychology behind compelling narratives.',
      author: 'Medium',
      link: 'https://medium.com/madhukarkumar/the-art-and-science-of-effective-storytelling-in-c0207f3aac94',
    },
  ];

  return (
    <section id="reading-corner" className="py-20 md:py-32 bg-secondary/30">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="flex justify-center mb-6">
            <BookOpen className="w-12 h-12 text-accent" />
          </div>
          <h2 className="section-title">Reading Corner</h2>
          <div className="ornamental-divider" />
          <p className="text-lg text-foreground/70 mt-6 max-w-2xl mx-auto italic">
            "Thoughts, stories, and ideas worth exploring."
          </p>
        </div>

        {/* Featured Articles Preview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {featuredArticles.map((article, index) => (
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

        {/* View All Articles Button */}
        <div className="text-center">
          <Link href="/reading-corner">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:shadow-lg inline-flex items-center gap-2"
            >
              Explore Reading Corner
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}