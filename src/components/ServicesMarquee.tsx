import { useEffect, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, BookOpen, Heart, Calendar, Shield, Users, ArrowRight } from "lucide-react";

const services = [
  { icon: Star, title: "Today's Horoscope", desc: "Unsure about how your day will unfold? Get free Aries horoscope online prediction from top astrologer. Read your Aries Zodiac Sign Horoscope today!", link: "/horoscope", color: "bg-hindu-red/10 text-hindu-red" },
  { icon: BookOpen, title: "Free Kundli", desc: "Generate your free online kundli report from Astrotalk. Our Kundli software can help you predict the future for yourself by reading the birth chart.", link: "/kundli", color: "bg-primary/10 text-primary" },
  { icon: Heart, title: "Compatibility", desc: "Confused by love? Remove the doubts & find the sparks! Check the compatibility with your partner using our tool and ignite a love that lasts forever.", link: "/compatibility", color: "bg-accent/10 text-accent" },
  { icon: Heart, title: "Kundli Matching", desc: "Check Love Compatibility and Marriage Prediction online at Astrotalk. Get the best Horoscope and kundli matching predictions today!", link: "/kundli-matching", color: "bg-pink-500/10 text-pink-500" },
  { icon: Star, title: "Chinese Horoscope", desc: "Are you a playful cat, a clever mouse, or a roaring lion? Discover your inner spirit animal with Chinese astrology. Find out now!", link: "/chinese-horoscope", color: "bg-yellow-500/10 text-yellow-600" },
  { icon: Calendar, title: "Today Panchang", desc: "Panchang enlists a record of auspicious dates and times for any auspicious task such as marriage, celebration, puja, starting any business etc.", link: "/panchang", color: "bg-green-500/10 text-green-600" },
  { icon: Shield, title: "Vastu Consultation", desc: "Get expert Vastu consultation for your home and office. Align your space with positive energy and bring prosperity to your life.", link: "/vastu", color: "bg-purple-500/10 text-purple-600" },
  { icon: Users, title: "Gemstone Therapy", desc: "Discover the power of gemstones and their healing properties. Get personalized gemstone recommendations based on your birth chart.", link: "/gemstone", color: "bg-indigo-500/10 text-indigo-600" },
];

const CARD_WIDTH = 320;
const GAP = 24;
const TOTAL_OFFSET = (CARD_WIDTH + GAP) * services.length;

export function ServicesMarquee() {
  const controls = useAnimationControls();

  const startAnimation = () => {
    controls.start({
      x: [0, -TOTAL_OFFSET],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 60,
        ease: "linear",
      },
    });
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <section className="container py-16">
      <h2 className="text-3xl font-display font-bold text-center mb-2">
        Our <span className="text-hindu-red">Services</span>
      </h2>
      <p className="text-muted-foreground text-center mb-10">
        Book an offline consultation or get your Kundli prepared
      </p>
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={controls}
          onMouseEnter={() => controls.stop()}
          onMouseLeave={() => startAnimation()}
        >
          {[...services, ...services].map((s, index) => (
            <div key={`${s.title}-${index}`} className="flex-shrink-0 w-80">
              <Link
                to={s.link}
                className="bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 group block h-full"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${s.color}`}
                >
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-hindu-red transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{s.desc}</p>
                <span className="text-hindu-red text-sm font-medium flex items-center gap-1">
                  Learn More <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
