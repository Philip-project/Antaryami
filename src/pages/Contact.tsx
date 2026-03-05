import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => (
  <div className="container py-8 max-w-4xl">
    <h1 className="text-3xl font-display font-bold mb-2">Contact Us</h1>
    <p className="text-muted-foreground mb-8">Have questions? We're here to help 24×7</p>

    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-card border border-border rounded-xl p-6 shadow-card space-y-4">
        <h3 className="font-display font-semibold text-lg">Send a Message</h3>
        <Input placeholder="Your Name" />
        <Input placeholder="Email Address" type="email" />
        <Input placeholder="Subject" />
        <Textarea placeholder="Your message..." rows={4} />
        <Button className="w-full gradient-saffron border-0 text-primary-foreground">Send Message</Button>
      </div>
      <div className="space-y-6">
        {[
          { icon: Mail, label: "Email", value: "support@ANTARYAMI.com" },
          { icon: Phone, label: "Phone", value: "+91-9876543210" },
          { icon: MapPin, label: "Address", value: "Noida, Uttar Pradesh, India" },
        ].map((item) => (
          <div key={item.label} className="flex items-start gap-4 bg-card border border-border rounded-xl p-5 shadow-card">
            <div className="p-2.5 rounded-xl bg-primary/10">
              <item.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-sm">{item.label}</h4>
              <p className="text-sm text-muted-foreground">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Contact;
