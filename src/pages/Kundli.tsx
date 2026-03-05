import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Kundli = () => {
  const [generated, setGenerated] = useState(false);

  return (
    <div className="container py-8 max-w-2xl">
      <h1 className="text-3xl font-display font-bold mb-2">Free Kundli</h1>
      <p className="text-muted-foreground mb-8">Generate your Janam Kundli instantly. Enter your birth details below.</p>

      <div className="bg-card border border-border rounded-xl p-6 shadow-card space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium mb-1 block">Full Name</label>
            <Input placeholder="Enter your name" />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">Gender</label>
            <select className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-background text-foreground">
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">Date of Birth</label>
            <Input type="date" />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">Time of Birth</label>
            <Input type="time" />
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm font-medium mb-1 block">Place of Birth</label>
            <Input placeholder="Enter city name" />
          </div>
        </div>
        <Button
          className="w-full gradient-saffron border-0 text-primary-foreground"
          onClick={() => setGenerated(true)}
        >
          Generate Kundli
        </Button>
      </div>

      {generated && (
        <div className="mt-8 bg-card border border-border rounded-xl p-6 shadow-card animate-slide-up">
          <h2 className="font-display text-xl font-bold mb-4">Your Janam Kundli</h2>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {["Sun Sign: Leo", "Moon Sign: Cancer", "Ascendant: Virgo", "Nakshatra: Ashwini", "Dasha: Mars", "Yoga: Raja Yoga"].map((item) => (
              <div key={item} className="bg-muted rounded-lg p-3 text-center text-sm">
                <div className="text-xs text-muted-foreground">{item.split(":")[0]}</div>
                <div className="font-semibold text-primary">{item.split(":")[1]}</div>
              </div>
            ))}
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="flex-1">Download PDF</Button>
            <Button variant="outline" className="flex-1">Share</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Kundli;
