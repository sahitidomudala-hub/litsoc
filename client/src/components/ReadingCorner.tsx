import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ReadingCorner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // All curated articles for the carousel
  const curatedArticles = [
    {
      title: 'The Neuroscience Behind Bad Decisions',
      description: 'Understanding why our brains sometimes lead us astray and how to make better choices in life.',
      author: 'Quanta Magazine',
      link: 'https://www.quantamagazine.org/the-neuroscience-behind-bad-decisions-20160823/',
      image: '/dark.jpg'
    },
    {
      title: 'Seneca on Anxiety',
      description: 'Ancient wisdom on managing worry and finding peace in uncertain times from the Stoic philosopher.',
      author: 'The Marginalian',
      link: 'https://www.themarginalian.org/2017/08/27/seneca-anxiety/',
      image: '/anxiety.jpg'
    },
    {
      title: 'The Hidden Mathematics Behind Beauty',
      description: 'Exploring the mathematical patterns and principles that make things beautiful to the human eye.',
      author: 'Big Think',
      link: 'https://bigthink.com/mini-philosophy/the-hidden-mathematics-behind-why-you-find-things-beautiful/',
      image: '/SUNKISSED.jpg'
    },
    {
      title: 'The Art of Adulting',
      description: 'A practical guide to navigating the challenges and responsibilities of adult life.',
      author: 'Medium',
      link: 'https://medium.com/lifeclubhq/the-art-of-adulting-5eac73126225',
      image: '/book.jpg'
    },
    {
      title: 'What Is Literature? A Complete Guide',
      description: 'An exploration of literature in all its forms - from novels and poetry to theatre and drama, and why it matters in our lives.',
      author: 'ThoughtCo',
      link: 'https://www.thoughtco.com/what-is-literature-740531',
      image: '/type.jpg'
    },
    {
      title: 'The Art and Science of Effective Storytelling',
      description: 'Understanding the techniques and psychology behind compelling narratives that captivate audiences.',
      author: 'Medium',
      link: 'https://medium.com/madhukarkumar/the-art-and-science-of-effective-storytelling-in-c0207f3aac94',
      image: '/statue.jpg'
    },
    {
      title: 'How to Avoid Burnout',
      description: 'Practical strategies for managing stress and maintaining balance in college life.',
      author: 'Harvard Business Review',
      link: 'https://hbr.org/2019/12/burnout-is-about-your-workplace-not-your-people',
      image: '/burn.jpg'
    },
    {
      title: 'The Case for Being Average',
      description: 'An essay about letting go of constant pressure to be exceptional and finding peace in ordinary life.',
      author: 'Mark Manson',
      link: 'https://markmanson.net/being-average',
      image: '/anxiety.jpg'
    }
  ];

  // Auto-slide functionality - every 7 seconds
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % curatedArticles.length);
      }, 7000);
      return () => clearInterval(interval);
    }
  }, [isHovered, curatedArticles.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % curatedArticles.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + curatedArticles.length) % curatedArticles.length);
  };

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
    <section id="curated-reads" className="py-20 md:py-32 bg-background">
      <div className="container">
        {/* Page Header */}
        <div className="mb-16 text-center">
          <div className="flex justify-center mb-6">
            <BookOpen className="w-12 h-12 text-accent" />
          </div>
          <h1 className="section-title">Curated Reads</h1>
          <div className="ornamental-divider" />
          <p className="text-lg text-foreground/70 mt-6 max-w-2xl mx-auto italic">
            "Stories and essays from around the web that inspire our love for words."
          </p>
        </div>

        {/* Full-Width Carousel Container */}
        <div className="bg-card rounded-lg border border-border shadow-lg overflow-hidden max-w-6xl mx-auto mb-20">
          <div 
            className="relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Carousel Container */}
            <div className="relative h-96 md:h-[500px] lg:h-[600px]">
              {curatedArticles.map((article, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {/* Background Image with Hover Zoom Effect */}
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                    style={{ 
                      backgroundImage: `url(${article.image})`,
                      objectFit: 'cover'
                    }}
                  >
                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex items-end">
                      <div className="p-8 md:p-12 lg:p-16 text-white max-w-5xl">
                        <h3 
                          className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight"
                          style={{ fontFamily: 'Georgia, serif' }}
                        >
                          {article.title}
                        </h3>
                        <p className="text-white/90 text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 leading-relaxed max-w-4xl">
                          {article.description}
                        </p>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                          <p className="text-white/80 text-base md:text-lg italic">
                            — {article.author}
                          </p>
                          <a
                            href={article.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                          >
                            <Button
                              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-lg transition-all duration-300 hover:shadow-lg inline-flex items-center gap-2"
                            >
                              Read Article
                              <ArrowRight className="w-5 h-5" />
                            </Button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Navigation Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3">
              {curatedArticles.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Student Submissions Section */}
        <div id="submit-writing" className="max-w-4xl mx-auto">
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
            Curated reads are thoughtfully selected articles from around the web for our campus community.
          </p>
        </div>
      </div>
    </section>
  );
}
