import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'wouter';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function ReadingCornerPreview() {
  const { elementRef, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });
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
      description: 'An exploration of literature in all its forms - from novels and poetry to theatre and drama.',
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
      description: 'Strategies for maintaining mental health and preventing exhaustion in our fast-paced world.',
      author: 'Harvard Business Review',
      link: 'https://hbr.org/2019/12/burnout-is-about-your-workplace-not-your-people',
      image: '/burn.jpg'
    },
    {
      title: 'The Case for Being Average',
      description: 'Why embracing mediocrity might be the key to a more fulfilling and peaceful life.',
      author: 'The Atlantic',
      link: 'https://www.theatlantic.com/family/archive/2018/12/against-optimization/577781/',
      image: '/anxiety.jpg'
    }
  ];

  // Auto-slide functionality - every 10 seconds
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % curatedArticles.length);
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [isHovered, curatedArticles.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % curatedArticles.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + curatedArticles.length) % curatedArticles.length);
  };

  return (
    <section id="curated-reads" className="py-20 md:py-32 bg-secondary/30">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="flex justify-center mb-6">
            <BookOpen className="w-12 h-12 text-accent" />
          </div>
          <h2 className="section-title">Curated Reads</h2>
          <div className="ornamental-divider" />
          <p className="text-lg text-foreground/70 mt-6 max-w-2xl mx-auto italic">
            "Stories and essays from around the web that inspire our love for words."
          </p>
        </div>

        {/* Full-Width Carousel Container */}
        <div className="bg-card rounded-lg border border-border shadow-lg overflow-hidden max-w-5xl mx-auto">
          <div 
            className="relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Carousel Container */}
            <div className="relative h-96 md:h-[500px]">
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
                      <div className="p-8 md:p-12 text-white max-w-4xl">
                        <h3 
                          className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
                          style={{ fontFamily: 'Georgia, serif' }}
                        >
                          {article.title}
                        </h3>
                        <p className="text-white/90 text-lg md:text-xl mb-6 leading-relaxed max-w-3xl">
                          {article.description}
                        </p>
                        <div className="flex items-center gap-6">
                          <p className="text-white/80 text-sm md:text-base italic">
                            — {article.author}
                          </p>
                          <a
                            href={article.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                          >
                            <Button
                              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 py-3 text-base md:text-lg rounded-lg transition-all duration-300 hover:shadow-lg inline-flex items-center gap-2"
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
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
              {curatedArticles.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* View All Articles Button */}
        <div className="text-center mt-12">
          <Link href="/reading-corner">
            <Button
              size="lg"
              className="btn-enhanced bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:shadow-lg inline-flex items-center gap-2"
            >
              Explore All Reads
              <ArrowRight className="btn-arrow w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}