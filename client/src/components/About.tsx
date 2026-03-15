import { BookOpen, Star, Drama, MessageCircle, PenTool, Users } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function About() {
  const { elementRef, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  const activities = [
    {
      title: 'Poetry',
      description: 'Share and celebrate the power of verse in all its forms.',
      icon: Star,
    },
    {
      title: 'Storytelling',
      description: 'Explore narratives that inspire, challenge, and transform.',
      icon: BookOpen,
    },
    {
      title: 'Creative Writing',
      description: 'Develop your voice and craft in a supportive community.',
      icon: PenTool,
    },
    {
      title: 'Debates',
      description: 'Engage in thoughtful discussions about literature and ideas.',
      icon: Users,
    },
    {
      title: 'Theatre',
      description: 'Bring stories to life through performance and drama.',
      icon: Drama,
    },
    {
      title: 'Open Discussions',
      description: 'Connect with fellow readers and writers in meaningful dialogue.',
      icon: MessageCircle,
    },
  ];

  return (
    <section 
      id="about" 
      className="py-20 md:py-32 bg-background"
      ref={elementRef}
    >
      <div className={`container transition-all duration-700 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="section-title">About Us</h2>
          <div className="ornamental-divider" />
        </div>

        {/* Introduction */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <p className="text-lg text-foreground/80 leading-relaxed mb-6">
            The Literary Society is a welcoming community for anyone who loves literature, writing, and creative expression. Whether you're a seasoned writer or someone who simply enjoys a good story, you belong here.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed font-light italic">
            "You don't need to be an expert reader or writer to join. Curiosity is enough."
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="stagger-item event-card group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out hover:border-accent/30"
            >
              <div className="flex justify-center mb-4">
                <activity.icon className="w-10 h-10 text-accent/70 group-hover:text-accent group-hover:scale-110 transition-all duration-300 ease-out" />
              </div>
              <h3
                className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                {activity.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                {activity.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <p className="text-foreground/80 mb-4">
            Ready to explore your creative potential?
          </p>
          <a
            href="#join"
            className="inline-block text-accent hover:text-accent/80 font-semibold transition-colors duration-300 underline"
          >
            Become a member today →
          </a>
        </div>
      </div>
    </section>
  );
}
