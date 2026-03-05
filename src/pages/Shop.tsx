import { Link } from "react-router-dom";
import { ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  { id: 1, name: "Natural Blue Sapphire (Neelam)", price: 3500, originalPrice: 5000, image: "💎", rating: 4.8, reviews: 234, category: "Gemstones" },
  { id: 2, name: "5 Mukhi Rudraksha", price: 1200, originalPrice: 1800, image: "📿", rating: 4.9, reviews: 567, category: "Rudraksha" },
  { id: 3, name: "Shree Yantra (Gold Plated)", price: 2800, originalPrice: 4000, image: "🔱", rating: 4.7, reviews: 189, category: "Yantras" },
  { id: 4, name: "Natural Yellow Sapphire (Pukhraj)", price: 4200, originalPrice: 6000, image: "💛", rating: 4.9, reviews: 345, category: "Gemstones" },
  { id: 5, name: "Tulsi Mala (108 beads)", price: 450, originalPrice: 650, image: "📿", rating: 4.6, reviews: 890, category: "Malas" },
  { id: 6, name: "Navgraha Yantra", price: 1800, originalPrice: 2500, image: "☀️", rating: 4.8, reviews: 156, category: "Yantras" },
];

const Shop = () => (
  <div className="container py-8">
    <h1 className="text-3xl font-display font-bold mb-2">Astrology Shop</h1>
    <p className="text-muted-foreground mb-8">Authentic gemstones, rudraksha, yantras & more — energized by expert astrologers</p>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((p) => (
        <Link
          key={p.id}
          to={`/shop/${p.id}`}
          className="bg-card border border-border rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all group"
        >
          <div className="bg-muted/50 h-40 flex items-center justify-center text-6xl">{p.image}</div>
          <div className="p-4">
            <span className="text-xs text-primary font-medium">{p.category}</span>
            <h3 className="font-display font-semibold mt-1 group-hover:text-primary transition-colors">{p.name}</h3>
            <div className="flex items-center gap-1 mt-2">
              <Star className="h-3.5 w-3.5 fill-primary text-primary" />
              <span className="text-sm font-medium">{p.rating}</span>
              <span className="text-xs text-muted-foreground">({p.reviews})</span>
            </div>
            <div className="flex items-center justify-between mt-3">
              <div>
                <span className="text-lg font-bold">₹{p.price.toLocaleString()}</span>
                <span className="text-sm text-muted-foreground line-through ml-2">₹{p.originalPrice.toLocaleString()}</span>
              </div>
              <Button size="sm" className="gradient-saffron border-0 text-primary-foreground gap-1">
                <ShoppingCart className="h-3.5 w-3.5" /> Add
              </Button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default Shop;
