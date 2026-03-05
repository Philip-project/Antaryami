import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";

const articles = [
  { id: 1, title: "Understanding Mangal Dosha & Its Remedies", category: "Doshas", excerpt: "Learn about the effects of Mars in your birth chart and powerful remedies to mitigate Mangal Dosha effects.", readTime: "5 min", date: "Feb 24, 2026" },
  { id: 2, title: "Vastu Tips for Your Home Office", category: "Vastu", excerpt: "Boost productivity and invite positive energy into your workspace with these essential Vastu Shastra guidelines.", readTime: "7 min", date: "Feb 22, 2026" },
  { id: 3, title: "How Numerology Can Shape Your Career", category: "Numerology", excerpt: "Discover how your life path number influences career choices and professional success.", readTime: "6 min", date: "Feb 20, 2026" },
  { id: 4, title: "Gemstone Guide: Which Stone Is Right for You?", category: "Remedies", excerpt: "A complete guide to selecting the right gemstone based on your birth chart and planetary positions.", readTime: "8 min", date: "Feb 18, 2026" },
  { id: 5, title: "Rahu-Ketu Transit 2026: Effects on All Zodiac Signs", category: "Transit", excerpt: "Detailed predictions for every zodiac sign during the upcoming Rahu-Ketu transit period.", readTime: "10 min", date: "Feb 15, 2026" },
  { id: 6, title: "Love Compatibility: Beyond Sun Signs", category: "Relationships", excerpt: "Why moon signs and Venus placements matter more than sun signs for romantic compatibility.", readTime: "6 min", date: "Feb 12, 2026" },
];

const Blog = () => (
  <div className="container py-8">
    <h1 className="text-3xl font-display font-bold mb-2">Astrology Blog</h1>
    <p className="text-muted-foreground mb-8">Expert insights on Vastu, Numerology, Doshas, Remedies & more</p>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((a) => (
        <article key={a.id} className="bg-card border border-border rounded-xl p-5 shadow-card hover:shadow-card-hover transition-all group">
          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">{a.category}</span>
          <h3 className="font-display font-semibold text-lg mt-3 mb-2 group-hover:text-primary transition-colors line-clamp-2">{a.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{a.excerpt}</p>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {a.readTime}</span>
            <span>{a.date}</span>
          </div>
        </article>
      ))}
    </div>
  </div>
);

export default Blog;
