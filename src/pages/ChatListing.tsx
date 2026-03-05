import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AstrologerCard from "@/components/AstrologerCard";
import { astrologers } from "@/data/astrologers";

const skills = ["All", "Vedic", "Tarot", "Numerology", "Vastu", "Palmistry", "KP System", "Lal Kitab"];
const languages = ["All", "Hindi", "English", "Gujarati", "Punjabi", "Tamil", "Bengali"];

const ChatListing = () => {
  const [search, setSearch] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("All");
  const [selectedLang, setSelectedLang] = useState("All");
  const [sortBy, setSortBy] = useState<"rating" | "price" | "experience">("rating");

  const filtered = astrologers
    .filter((a) => {
      if (search && !a.name.toLowerCase().includes(search.toLowerCase())) return false;
      if (selectedSkill !== "All" && !a.skills.includes(selectedSkill)) return false;
      if (selectedLang !== "All" && !a.languages.includes(selectedLang)) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "price") return a.pricePerMin - b.pricePerMin;
      return b.experience - a.experience;
    });

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold mb-2">Chat with Astrologer</h1>
        <p className="text-muted-foreground">Connect instantly with verified astrologers via text chat</p>
      </div>

      {/* Search & filters */}
      <div className="bg-card border border-border rounded-xl p-4 mb-6 shadow-card">
        <div className="flex gap-3 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search astrologer by name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          <select
            className="border border-border rounded-lg px-3 py-2 text-sm bg-background text-foreground"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
          >
            <option value="rating">Top Rated</option>
            <option value="price">Lowest Price</option>
            <option value="experience">Most Experienced</option>
          </select>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="text-xs text-muted-foreground font-medium mt-1">Expertise:</span>
          {skills.map((s) => (
            <button
              key={s}
              onClick={() => setSelectedSkill(s)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                selectedSkill === s
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="text-xs text-muted-foreground font-medium mt-1">Language:</span>
          {languages.map((l) => (
            <button
              key={l}
              onClick={() => setSelectedLang(l)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                selectedLang === l
                  ? "bg-secondary text-secondary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      <p className="text-sm text-muted-foreground mb-4">{filtered.length} astrologers found</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((a) => (
          <AstrologerCard key={a.id} astrologer={a} mode="chat" />
        ))}
      </div>
    </div>
  );
};

export default ChatListing;
