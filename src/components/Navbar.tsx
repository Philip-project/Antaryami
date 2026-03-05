import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle, Phone, Star, ShoppingBag, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { to: "/about", label: "About Guruji", icon: User },
  { to: "/horoscope", label: "Horoscope", icon: Star },
  { to: "/kundli", label: "Free Kundli", icon: Star },
  { to: "/shop", label: "Shop", icon: ShoppingBag },
  { to: "/blog", label: "Blog", icon: null },
  { to: "/contact", label: "Book Slot", icon: Phone },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-hindu-red/20">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl"> </span>
          <span className="font-display text-xl text-hindu-red font-bold">
            ANTARYAMI
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? "bg-hindu-red/10 text-hindu-red"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost" size="icon">
            <Search className="h-4 w-4" />
          </Button>
          <Link to="/login">
            <Button variant="outline" size="sm">Login</Button>
          </Link>
          <Link to="/login">
            <Button size="sm" className="bg-hindu-red hover:bg-hindu-red-light border-0 text-white">
              Sign Up
            </Button>
          </Link>
        </div>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-slide-up">
          <nav className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium ${
                  location.pathname === link.to
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 mt-3 px-4">
              <Link to="/login" className="flex-1">
                <Button variant="outline" className="w-full" size="sm">Login</Button>
              </Link>
              <Link to="/login" className="flex-1">
                <Button className="w-full gradient-saffron border-0 text-primary-foreground" size="sm">
                  Sign Up
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
