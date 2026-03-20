import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, animate, PanInfo } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, Star, BookOpen, Heart, Calendar, Shield, Users } from "lucide-react";

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
const STEP = CARD_WIDTH + GAP;

export function ServicesCarousel() {
  // Clone: [...services, ...services, ...services] — middle copy is "home"
  const items = [...services, ...services, ...services];
  const CLONE_OFFSET = services.length * STEP;

  const x = useMotionValue(-CLONE_OFFSET);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isAnimating = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // How many dots / pages
  const totalPages = services.length;

  const goTo = (rawIndex: number) => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const targetX = -(CLONE_OFFSET + rawIndex * STEP);

    animate(x, targetX, {
      type: "spring",
      stiffness: 280,
      damping: 28,
      onComplete: () => {
        isAnimating.current = false;
      },
    });

    // Normalise index for dots
    const normalised = ((rawIndex % services.length) + services.length) % services.length;
    setCurrentIndex(normalised);
  };

  const dragStartX = useRef(0);

  const handleDragStart = () => {
    dragStartX.current = x.get();
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = STEP / 3;
    const currentOffset = x.get();
    const currentSlide = Math.round(-currentOffset / STEP) - services.length;

    if (info.offset.x < -threshold) {
      goTo(currentSlide + 1);
    } else if (info.offset.x > threshold) {
      goTo(currentSlide - 1);
    } else {
      goTo(currentSlide);
    }
  };

  // Seamless loop — teleport without animation when hitting clones
  useEffect(() => {
    const unsubscribe = x.on("change", (val) => {
      if (isAnimating.current) return;
      const rightBound = -(CLONE_OFFSET + services.length * STEP - STEP);
      const leftBound = -CLONE_OFFSET;

      if (val > leftBound + STEP) {
        x.set(val - services.length * STEP);
      } else if (val < rightBound - STEP) {
        x.set(val + services.length * STEP);
      }
    });
    return unsubscribe;
  }, []);

  const handlePrev = () => {
    const currentSlide = Math.round(-x.get() / STEP) - services.length;
    goTo(currentSlide - 1);
  };

  const handleNext = () => {
    const currentSlide = Math.round(-x.get() / STEP) - services.length;
    goTo(currentSlide + 1);
  };

  return (
    <section className="container py-16">
      {/* Header */}
      <div className="flex items-end justify-between mb-10">
        <div>
          <h2 className="text-3xl font-display font-bold mb-2">
            Our <span className="text-hindu-red">Services</span>
          </h2>
          <p className="text-muted-foreground">
            Book an offline consultation or get your Kundli prepared
          </p>
        </div>

        {/* Arrow Controls */}
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-hindu-red hover:text-hindu-red transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-hindu-red hover:text-hindu-red transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Carousel Track */}
      <div
        ref={containerRef}
        className="overflow-hidden cursor-grab active:cursor-grabbing"
      >
        <motion.div
          className="flex gap-6"
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -Infinity, right: Infinity }}
          dragElastic={0.05}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          {items.map((s, index) => (
            <div key={`${s.title}-${index}`} className="flex-shrink-0 w-80">
              <Link
                to={s.link}
                draggable={false}
                className="bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 group block h-full"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${s.color}`}>
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

      {/* Dot Pagination */}
      <div className="flex justify-center gap-2 mt-8">
        {services.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full ${
              currentIndex === i
                ? "w-6 h-2 bg-hindu-red"
                : "w-2 h-2 bg-border hover:bg-hindu-red/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
