import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import AstrologerCard from "@/components/AstrologerCard";
import { astrologers } from "@/data/astrologers";

const TalkListing = () => {
  const [search, setSearch] = useState("");

  const filtered = astrologers.filter((a) =>
    search ? a.name.toLowerCase().includes(search.toLowerCase()) : true
  );

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold mb-2">Talk to Astrologer</h1>
        <p className="text-muted-foreground">Voice & video call with expert astrologers for in-depth guidance</p>
      </div>

      <div className="relative max-w-md mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search astrologer by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((a) => (
          <AstrologerCard key={a.id} astrologer={a} mode="talk" />
        ))}
      </div>
    </div>
  );
};

export default TalkListing;
