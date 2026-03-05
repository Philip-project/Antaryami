import { Link } from "react-router-dom";
import { Star, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Astrologer } from "@/data/astrologers";

interface Props {
  astrologer: Astrologer;
  mode?: "chat" | "talk";
}

const AstrologerCard = ({ astrologer, mode = "chat" }: Props) => (
  <div className="bg-card rounded-xl border border-border p-4 shadow-card hover:shadow-card-hover transition-all duration-300 group">
    <div className="flex gap-4">
      <div className="relative flex-shrink-0">
        <img
          src={astrologer.image}
          alt={astrologer.name}
          className="w-16 h-16 rounded-full object-cover border-2 border-primary/30"
        />
        <span
          className={`absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-card ${
            astrologer.isOnline ? "bg-success" : "bg-muted-foreground/40"
          }`}
        />
      </div>
      <div className="flex-1 min-w-0">
        <Link
          to={`/astrologer/${astrologer.id}`}
          className="font-display font-semibold text-foreground hover:text-primary transition-colors line-clamp-1"
        >
          {astrologer.name}
        </Link>
        <p className="text-xs text-primary font-medium mt-0.5">{astrologer.speciality}</p>
        <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
          {astrologer.skills.join(", ")}
        </p>
        <p className="text-xs text-muted-foreground">
          {astrologer.languages.join(", ")} • {astrologer.experience} yrs
        </p>
      </div>
    </div>
    <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <Star className="h-3.5 w-3.5 fill-primary text-primary" />
          <span className="text-sm font-semibold">{astrologer.rating}</span>
        </div>
        <span className="text-xs text-muted-foreground">{astrologer.orders.toLocaleString()} orders</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-bold text-foreground">₹{astrologer.pricePerMin}/min</span>
        <Button
          size="sm"
          className={`gap-1 ${
            astrologer.isOnline
              ? "gradient-saffron border-0 text-primary-foreground"
              : "bg-muted text-muted-foreground cursor-not-allowed"
          }`}
          disabled={!astrologer.isOnline}
        >
          {mode === "chat" ? (
            <><MessageCircle className="h-3.5 w-3.5" /> Chat</>
          ) : (
            <><Phone className="h-3.5 w-3.5" /> Call</>
          )}
        </Button>
      </div>
    </div>
  </div>
);

export default AstrologerCard;
