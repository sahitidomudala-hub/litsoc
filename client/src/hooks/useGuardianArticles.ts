import { useState, useEffect } from 'react';

interface GuardianArticle {
  id: string;
  webTitle: string;
  webUrl: string;
  webPublicationDate: string;
  fields?: {
    trailText?: string;
    byline?: string;
  };
  sectionName: string;
}

interface Article {
  title: string;
  description: string;
  author: string;
  link: string;
}

const GUARDIAN_API_KEY = 'test'; // Using test key for now - you can get a free key from Guardian
const GUARDIAN_BASE_URL = 'https://content.guardianapis.com/search';

// College-friendly search terms for literary content
const SEARCH_QUERIES = [
  'books AND literature',
  'writing AND creativity',
  'poetry AND modern',
  'authors AND contemporary',
  'reading AND culture',
  'storytelling AND narrative'
];

// Sections that are appropriate for college students
const ALLOWED_SECTIONS = [
  'books',
  'culture',
  'education',
  'lifeandstyle',
  'commentisfree',
  'stage',
  'artanddesign'
];

// Keywords to filter out inappropriate content
const FILTER_OUT_KEYWORDS = [
  'violence', 'murder', 'death', 'war', 'crime', 'scandal',
  'controversy', 'politics', 'election', 'brexit', 'trump'
];

export const useGuardianArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const isArticleAppropriate = (article: GuardianArticle): boolean => {
    const title = article.webTitle.toLowerCase();
    const description = article.fields?.trailText?.toLowerCase() || '';
    const section = article.sectionName.toLowerCase();

    // Check if section is allowed
    if (!ALLOWED_SECTIONS.includes(section)) {
      return false;
    }

    // Filter out articles with inappropriate keywords
    const hasInappropriateContent = FILTER_OUT_KEYWORDS.some(keyword => 
      title.includes(keyword) || description.includes(keyword)
    );

    return !hasInappropriateContent;
  };

  const fetchGuardianArticles = async () => {
    try {
      setLoading(true);
      const randomQuery = SEARCH_QUERIES[Math.floor(Math.random() * SEARCH_QUERIES.length)];
      
      const params = new URLSearchParams({
        q: randomQuery,
        'api-key': GUARDIAN_API_KEY,
        'show-fields': 'trailText,byline',
        'page-size': '20',
        'order-by': 'relevance'
      });

      const response = await fetch(`${GUARDIAN_BASE_URL}?${params}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch articles');
      }

      const data = await response.json();
      
      if (data.response && data.response.results) {
        const filteredArticles = data.response.results
          .filter(isArticleAppropriate)
          .slice(0, 4) // Get top 4 appropriate articles
          .map((article: GuardianArticle) => ({
            title: article.webTitle,
            description: article.fields?.trailText || 'A thoughtful piece worth reading.',
            author: article.fields?.byline || 'The Guardian',
            link: article.webUrl
          }));

        setArticles(filteredArticles);
      }
    } catch (err) {
      console.error('Error fetching Guardian articles:', err);
      setError('Failed to load articles');
      // Fallback to curated articles if API fails
      setArticles([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGuardianArticles();
  }, []);

  return { articles, loading, error, refetch: fetchGuardianArticles };
};