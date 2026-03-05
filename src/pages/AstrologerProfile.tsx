import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, MessageCircle, Phone, Clock, Award, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { astrologers } from "@/data/astrologers";

const reviews = [
  { name: "Rohit K.", rating: 5, text: "Very accurate predictions! Helped me immensely with career guidance.", date: "2 days ago" },
  { name: "Priya S.", rating: 5, text: "Amazing experience. The remedies suggested were practical and effective.", date: "5 days ago" },
  { name: "Amit J.", rating: 4, text: "Good insights about my Kundli. Would recommend to others.", date: "1 week ago" },
];

const AstrologerProfile = () => {
  const { id } = useParams();
  const astrologer = astrologers.find((a) => a.id === Number(id));

  if (!astrologer) {
    return (
      <div className="container py-16 text-center">
        <h2 className="text-2xl font-display font-bold">Astrologer not found</h2>
        <Link to="/chat"><Button className="mt-4">Browse Astrologers</Button></Link>
      </div>
    );
  }

  return (
    <div className="container py-8 max-w-4xl">
      <Link to="/chat">
        <Button variant="ghost" size="sm" className="mb-4 gap-1 text-muted-foreground">
          <ArrowLeft className="h-4 w-4" /> Back
        </Button>
      </Link>

      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-card">
        <div className="gradient-hero p-8">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <img
              src={astrologer.image}
              alt={astrologer.name}
              className="w-24 h-24 rounded-full border-4 border-primary/50 object-cover"
            />
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-display font-bold text-primary-foreground">{astrologer.name}</h1>
              <p className="text-primary text-sm font-medium">{astrologer.speciality}</p>
              <div className="flex flex-wrap items-center gap-4 mt-3 text-primary-foreground/70 text-sm">
                <span className="flex items-center gap-1"><Star className="h-4 w-4 fill-primary text-primary" /> {astrologer.rating}</span>
                <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {astrologer.experience} yrs exp</span>
                <span className="flex items-center gap-1"><Award className="h-4 w-4" /> {astrologer.orders.toLocaleString()} orders</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="flex flex-wrap gap-3">
            <Button className="gradient-saffron border-0 text-primary-foreground gap-2 shadow-glow" disabled={!astrologer.isOnline}>
              <MessageCircle className="h-4 w-4" /> Chat — ₹{astrologer.pricePerMin}/min
            </Button>
            <Button variant="outline" className="gap-2" disabled={!astrologer.isOnline}>
              <Phone className="h-4 w-4" /> Call — ₹{astrologer.pricePerMin}/min
            </Button>
            <span className={`ml-auto flex items-center gap-1.5 text-sm ${astrologer.isOnline ? "text-success" : "text-muted-foreground"}`}>
              <span className={`w-2 h-2 rounded-full ${astrologer.isOnline ? "bg-success" : "bg-muted-foreground/40"}`} />
              {astrologer.isOnline ? "Online" : "Offline"}
            </span>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <h3 className="font-display font-semibold mb-2">Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {astrologer.skills.map((s) => (
                  <span key={s} className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display font-semibold mb-2">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {astrologer.languages.map((l) => (
                  <span key={l} className="flex items-center gap-1 px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">
                    <Globe className="h-3 w-3" /> {l}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4">Reviews</h3>
            <div className="space-y-4">
              {reviews.map((r, i) => (
                <div key={i} className="bg-muted/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-sm">{r.name}</span>
                    <span className="text-xs text-muted-foreground">{r.date}</span>
                  </div>
                  <div className="flex gap-0.5 mb-2">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <Star key={j} className="h-3.5 w-3.5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AstrologerProfile;
