import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const KundliMatching = () => {
  const [matched, setMatched] = useState(false);

  const BirthForm = ({ label }: { label: string }) => (
    <div className="bg-card border border-border rounded-xl p-5 shadow-card">
      <h3 className="font-display font-semibold mb-3 text-primary">{label}</h3>
      <div className="space-y-3">
        <Input placeholder="Full Name" />
        <Input type="date" />
        <Input type="time" />
        <Input placeholder="Place of Birth" />
      </div>
    </div>
  );

  return (
    <div className="container py-8 max-w-3xl">
      <h1 className="text-3xl font-display font-bold mb-2">Kundli Matching</h1>
      <p className="text-muted-foreground mb-8">Free online Kundli matching for marriage compatibility</p>

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <BirthForm label="👤 Boy's Details" />
        <BirthForm label="👤 Girl's Details" />
      </div>

      <Button
        className="w-full gradient-saffron border-0 text-primary-foreground"
        onClick={() => setMatched(true)}
      >
        Match Kundli
      </Button>

      {matched && (
        <div className="mt-8 bg-card border border-border rounded-xl p-6 shadow-card animate-slide-up">
          <h2 className="font-display text-xl font-bold mb-4 text-center">Compatibility Score</h2>
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 rounded-full gradient-saffron flex items-center justify-center shadow-glow">
              <span className="text-4xl font-display font-bold text-primary-foreground">28/36</span>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "Love", score: "8/8" },
              { label: "Mental", score: "7/7" },
              { label: "Career", score: "6/7" },
              { label: "Health", score: "7/7" },
            ].map((item) => (
              <div key={item.label} className="bg-muted rounded-lg p-3 text-center">
                <div className="text-xs text-muted-foreground">{item.label}</div>
                <div className="text-lg font-bold text-primary">{item.score}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-success font-medium mt-4">
            ✅ Excellent Match! This is a highly compatible pairing.
          </p>
        </div>
      )}
    </div>
  );
};

export default KundliMatching;
