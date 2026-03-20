import { Link } from "react-router-dom";
import { Calendar, Award, BookOpen, Star, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import astrologerImg from "@/assets/astrologer-guru.png";
import gurujiImg from "@/assets/guruji.png";
import chakraVideo from "@/assets/chakra.mp4";
import ganeshaImg from "@/assets/ganesha.jpg";
import omSymbolImg from "@/assets/om-symbol.jpg";

const achievements = [
  { icon: Award, title: "Gold Medalist", desc: "Jyotish Acharya from Banaras Hindu University" },
  { icon: BookOpen, title: "Published Author", desc: "Author of 3 books on Vedic Astrology & Vastu" },
  { icon: Users, title: "10,000+ Consultations", desc: "Trusted by families across India and abroad" },
  { icon: Star, title: "4.9★ Rating", desc: "Consistently rated among top astrologers" },
  { icon: Shield, title: "100% Confidential", desc: "Your personal details are always secure" },
];

const About = () => (
  <div>
    {/* Hero */}
    <section className="gradient-hero py-16">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
          About <span className="text-gradient-gold">Guruji</span>
        </h1>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto">
          Learn about Acharya Rajesh Sharma Ji — a lifetime dedicated to Vedic wisdom, helping thousands find clarity and purpose.
        </p>
      </div>
    </section>

    {/* Profile Section */}
    <section className="container py-16">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="relative w-120 h-420 rounded-2xl overflow-hidden shadow-lg border-4 border-primary/20">
          <video
            src="https://res.cloudinary.com/dvfmfdiuj/video/upload/v1771924273/make-the-circle-rote-clock-wise_k3uuga.mp4"
            alt="Chakra Meditation Background"
            className="w-120 h-420 object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
          <img
            src={gurujiImg}
            alt="Guruji"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-90 h-100 rounded-full shadow-xl"
          />
        </div>
        <div>
          <h2 className="text-3xl font-display font-bold mb-1">Acharya Rajesh Sharma Ji</h2>
          <p className="text-hindu-red font-display font-medium mb-6">Vedic Astrologer · Vastu Expert · Spiritual Healer</p>

          <p className="text-muted-foreground mb-4 leading-relaxed">
            Born in the holy city of Varanasi into a family of Vedic scholars, Acharya Rajesh Sharma Ji began his journey into Jyotish Shastra at the age of 12 under the guidance of his grandfather, a revered pandit. He went on to earn a Gold Medal in Jyotish Acharya from Banaras Hindu University.
          </p>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            With over <strong className="text-foreground">25 years of dedicated practice</strong>, Guruji has mastered multiple branches of Indian astrology including Parashar Jyotish, Bhrigu Samhita, Lal Kitab, KP System, Vastu Shastra, Numerology, and Gemstone Science.
          </p>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            His consultations are conducted offline — either in-person at his office in Varanasi or through scheduled appointments. Each consultation includes a thorough analysis of your birth chart, detailed predictions, and personalized Vedic remedies.
          </p>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Guruji believes that astrology is a divine science meant to guide people towards their highest potential. His mission is to make authentic Vedic wisdom accessible to everyone seeking guidance in life's important decisions.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {["Vedic Astrology", "Vastu Shastra", "Numerology", "Palmistry", "Lal Kitab", "Gemstone Consultation", "Horary Astrology", "Muhurat"].map((skill) => (
              <span key={skill} className="px-3 py-1 rounded-full bg-hindu-red/10 text-hindu-red text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>

          <Link to="/contact">
            <Button size="lg" className="bg-hindu-red hover:bg-hindu-red-light border-0 text-white gap-2">
              <Calendar className="h-5 w-5" /> Book a Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Achievements */}
    <section className="bg-hindu-red/5 border-y border-hindu-red/10 py-16">
      <div className="container">
        <h2 className="text-3xl font-display font-bold text-center mb-10">
          Achievements & <span className="text-hindu-red">Recognition</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((a) => (
            <div key={a.title} className="bg-card border border-border rounded-xl p-6 shadow-card">
              <div className="w-12 h-12 rounded-xl bg-hindu-red/10 flex items-center justify-center mb-4">
                <a.icon className="h-6 w-6 text-hindu-red" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-1">{a.title}</h3>
              <p className="text-sm text-muted-foreground">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Spiritual Images */}
    <section className="container py-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="flex gap-4 justify-center">
          <img src={ganeshaImg} alt="Lord Ganesha" className="w-36 h-36 rounded-2xl object-cover shadow-lg border-2 border-primary/20" />
          <img src={omSymbolImg} alt="Sacred Om" className="w-36 h-36 rounded-2xl object-cover shadow-lg border-2 border-primary/20" />
        </div>
        <div>
          <h2 className="text-2xl font-display font-bold mb-4">Our <span className="text-hindu-red">Philosophy</span></h2>
          <p className="text-muted-foreground mb-3 leading-relaxed">
            We believe in the ancient wisdom of the Vedas. Our approach combines deep scriptural knowledge with practical guidance to help you navigate life's challenges.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Every consultation begins with a prayer to Lord Ganesha for removing obstacles and invoking divine blessings. Guruji follows strict ethical principles — providing honest predictions and remedies that are affordable and effective.
          </p>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="gradient-hero py-16">
      <div className="container text-center">
        <h2 className="text-3xl font-display font-bold text-primary-foreground mb-4">
          Consult with Guruji Today
        </h2>
        <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto">
          Book your consultation slot and receive personalized Vedic guidance for your life's important decisions.
        </p>
        <Link to="/contact">
          <Button size="lg" className="gradient-saffron border-0 text-primary-foreground text-base shadow-glow gap-2">
            <Calendar className="h-5 w-5" /> Book Your Slot
          </Button>
        </Link>
      </div>
    </section>
  </div>
);

export default About;
