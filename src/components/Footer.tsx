import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground">
    <div className="container py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🔮</span>
            <span className="font-display text-lg font-bold">
              Astro<span className="text-primary">Talk</span>
            </span>
          </div>
          <p className="text-sm text-secondary-foreground/70">
            India's #1 Astrology Platform. Talk to astrologer online 24×7 for personalized guidance.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3">Services</h4>
          <div className="flex flex-col gap-2 text-sm text-secondary-foreground/70">
            <Link to="/chat" className="hover:text-primary transition-colors">Chat with Astrologer</Link>
            <Link to="/talk" className="hover:text-primary transition-colors">Talk to Astrologer</Link>
            <Link to="/kundli" className="hover:text-primary transition-colors">Free Kundli</Link>
            <Link to="/kundli-matching" className="hover:text-primary transition-colors">Kundli Matching</Link>
            <Link to="/horoscope" className="hover:text-primary transition-colors">Daily Horoscope</Link>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3">Company</h4>
          <div className="flex flex-col gap-2 text-sm text-secondary-foreground/70">
            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
            <Link to="/astrologer-register" className="hover:text-primary transition-colors">Join as Astrologer</Link>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3">Legal</h4>
          <div className="flex flex-col gap-2 text-sm text-secondary-foreground/70">
            <Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/refund" className="hover:text-primary transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-secondary-foreground/10 mt-8 pt-6 text-center text-sm text-secondary-foreground/50">
        © 2026 ANTARYAMI. All rights reserved. | Choose from 13000+ verified astrologers
      </div>
    </div>
  </footer>
);

export default Footer;
