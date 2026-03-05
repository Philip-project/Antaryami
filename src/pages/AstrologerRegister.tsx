import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const AstrologerRegister = () => (
  <div className="container py-8 max-w-2xl">
    <h1 className="text-3xl font-display font-bold mb-2">Join as an Astrologer</h1>
    <p className="text-muted-foreground mb-8">Share your expertise with millions of seekers. Earn from home.</p>

    <div className="bg-card border border-border rounded-xl p-6 shadow-card space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium mb-1 block">Full Name</label>
          <Input placeholder="Your name" />
        </div>
        <div>
          <label className="text-sm font-medium mb-1 block">Phone Number</label>
          <Input placeholder="+91 XXXXX XXXXX" />
        </div>
        <div>
          <label className="text-sm font-medium mb-1 block">Email</label>
          <Input type="email" placeholder="your@email.com" />
        </div>
        <div>
          <label className="text-sm font-medium mb-1 block">Experience (years)</label>
          <Input type="number" placeholder="e.g. 10" />
        </div>
      </div>
      <div>
        <label className="text-sm font-medium mb-1 block">Expertise</label>
        <Input placeholder="e.g. Vedic, Tarot, Numerology, Vastu" />
      </div>
      <div>
        <label className="text-sm font-medium mb-1 block">Languages</label>
        <Input placeholder="e.g. Hindi, English, Tamil" />
      </div>
      <div>
        <label className="text-sm font-medium mb-1 block">Fee Per Minute (₹)</label>
        <Input type="number" placeholder="e.g. 30" />
      </div>
      <div>
        <label className="text-sm font-medium mb-1 block">About Yourself</label>
        <Textarea placeholder="Describe your experience and specialties..." rows={4} />
      </div>
      <div>
        <label className="text-sm font-medium mb-1 block">Upload Documents (ID proof, certificates)</label>
        <Input type="file" multiple />
      </div>
      <Button className="w-full gradient-saffron border-0 text-primary-foreground">Submit Application</Button>
    </div>
  </div>
);

export default AstrologerRegister;
