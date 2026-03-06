import { Link } from "react-router-dom";
import { MessageCircle, Phone, Video, Star, ArrowRight, Shield, Clock, Users, Calendar, BookOpen, Award, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import SlideInText from "@/components/SlideInText";
import { ServicesMarquee } from "@/components/ServicesMarquee";
import heroBg from "@/assets/hero-bg.jpg";
import ganeshaImg from "@/assets/ganesha.jpg";
import sacredLotusImg from "@/assets/sacred-lotus.jpg";
import omSymbolImg from "@/assets/om-symbol.jpg";
import astrologerImg from "@/assets/astrologer-guru.png";
import etheronImg from "@/assets/Etheron.png";
import { zodiacSigns } from "@/data/astrologers";

const testimonials = [
  {
    name: "Anita Verma",
    text: "Guruji's prediction about my career was 100% accurate. My promotion happened exactly as he said.",
  },
  {
    name: "Raj Malhotra",
    text: "Our marriage compatibility reading saved us from major problems.",
  },
];

const stats = [
  { icon: Award, value: "25+", label: "Years Experience" },
  { icon: Clock, value: "10,000+", label: "Consultations Done" },
  { icon: Shield, value: "100%", label: "Confidential" },
  { icon: Star, value: "4.9★", label: "Client Rating" },
];

const Index = () => (
  <div>
    {/* ================= ULTRA DIVINE HERO ================= */}
<section className="relative min-h-screen flex items-center justify-center overflow-hidden">

  {/* Parallax Background */}
  <motion.img
    src={etheronImg}
    alt="Divine Background"
    initial={{ scale: 1.1 }}
    animate={{ scale: 1 }}
    transition={{ duration: 6, ease: "easeOut" }}
    className="absolute inset-0 w-full h-[90vh] object-cover scale-75"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 h-[90vh] bg-gradient-to-b from-transparent to-black/30"></div>

  {/* ⭐ Star Particles */}
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(40)].map((_, i) => (
      <span
        key={i}
        className="absolute bg-white rounded-full animate-twinkle"
        style={{
          width: "3px",
          height: "3px",
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
        }}
      />
    ))}
  </div>

  {/* 🌙 Floating Om Symbols */}
  <div className="absolute inset-0 pointer-events-none">
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ y: 0, opacity: 0.3 }}
        animate={{ y: -40 }}
        transition={{
          duration: 6 + i,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute text-hindu-red text-4xl opacity-20"
        style={{
          top: `${20 + i * 8}%`,
          left: `${10 + i * 10}%`,
        }}
      >
        ॐ
      </motion.div>
    ))}
  </div>

  {/* Main Content */}
  <div className="container relative z-10 text-center py-32">

    {/* 🔥 Golden Animated Title */}
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-2xl md:text-5xl lg:text-[6rem] font-extrabold tracking-[0.3em] leading-tight mb-10 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500 bg-clip-text text-transparent animate-gold"
      style={{ fontFamily: "'Cinzel', serif" }}
    >
      ANTARYAMI
    </motion.h1>

    {/* Subtitle */}
    <motion.h2
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="text-3xl md:text-5xl text-white/90 mb-20"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      Your Star Determines Your Destiny
    </motion.h2>

    {/* Buttons Lower */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="flex flex-wrap gap-8 justify-center absolute bottom-10 left-0 right-0"
    >
      <Link to="/contact">
        <Button
          size="lg"
          className="gradient-saffron border-0 text-primary-foreground text-lg px-12 py-5 rounded-xl shadow-glow hover:scale-105 transition-all duration-300"
        >
          <Calendar className="h-5 w-5 mr-2" />
          Book Your Consultation
        </Button>
      </Link>

      <Link to="/horoscope">
        <Button
          size="lg"
          variant="outline"
          className="text-white border-white/40 hover:bg-white/10 text-lg px-12 py-5 rounded-xl backdrop-blur-md hover:scale-105 transition-all duration-300"
        >
          <Star className="h-5 w-5 mr-2" />
          View Horoscope
        </Button>
      </Link>
    </motion.div>
  </div>
</section>

{/* ================= ZODIAC WHEEL ================= */}
{/* Commented out - zodiac-wheel.png image not available */}
{/*
<section className="relative py-24 bg-black overflow-hidden">

  <div className="container text-center relative z-10">
    <h2 className="text-4xl font-bold text-white mb-12">
      Discover Your <span className="text-yellow-400">Cosmic Energy</span>
    </h2>

    <div className="relative w-80 h-80 mx-auto">

      <div className="absolute inset-0 rounded-full border-4 border-yellow-400/30 animate-pulse"></div>

      <motion.img
        src={zodiacWheel}
        alt="Zodiac Wheel"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        className="w-full h-full object-contain drop-shadow-[0_0_40px_gold]"
      />
    </div>
  </div>
</section>
*/}

    {/* Stats */}
    <section className="bg-card border-b border-hindu-red/10">
      <div className="container py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-hindu-red/10">
                <s.icon className="h-5 w-5 text-hindu-red" />
              </div>
              <div>
                <div className="text-xl font-bold font-display text-foreground">{s.value}</div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

{/* ================= TESTIMONIALS ================= */}
{/* <section className="py-24 bg-gradient-to-b from-black to-[#1a0000]">
  <div className="container text-center">
    <h2 className="text-4xl font-bold text-white mb-16">
      Blessed <span className="text-yellow-400">Testimonials</span>
    </h2>

    <div className="grid md:grid-cols-2 gap-10">
      {testimonials.map((t, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          className="bg-white/5 border border-yellow-400/20 p-8 rounded-2xl backdrop-blur-lg shadow-[0_0_25px_rgba(255,215,0,0.2)]"
        >
          <p className="text-white/80 mb-6 italic">"{t.text}"</p>
          <h4 className="text-yellow-400 font-semibold">{t.name}</h4>
        </motion.div>
      ))}
    </div>
  </div>
</section> */}

{/* ================= BOOKING FORM ================= */}
{/* <section className="py-24 bg-black">
  <div className="container max-w-2xl mx-auto">
    <h2 className="text-4xl text-center text-white mb-12">
      Book Your <span className="text-yellow-400">Sacred Consultation</span>
    </h2>

    <form className="bg-white/5 p-10 rounded-3xl border border-yellow-400/20 backdrop-blur-xl space-y-6 shadow-[0_0_30px_rgba(255,215,0,0.3)]">

      <input
        type="text"
        placeholder="Full Name"
        className="w-full p-4 rounded-lg bg-black/50 border border-yellow-400/20 text-white"
      />

      <input
        type="date"
        className="w-full p-4 rounded-lg bg-black/50 border border-yellow-400/20 text-white"
      />

      <select className="w-full p-4 rounded-lg bg-black/50 border border-yellow-400/20 text-white">
        <option>Select Consultation Type</option>
        <option>Career Guidance</option>
        <option>Marriage Matching</option>
        <option>Health Consultation</option>
      </select>

      <button
        type="submit"
        className="w-full py-4 bg-gradient-to-r from-yellow-500 to-yellow-300 text-black font-bold rounded-xl hover:scale-105 transition-all"
      >
        Confirm Booking
      </button>
    </form>
  </div>
</section> */}

    {/* About the Astrologer */}
    <section className="container py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img
            src={astrologerImg}
            alt="Acharya Rajesh Sharma Ji"
            className="w-full max-w-md mx-auto rounded-2xl shadow-lg border-4 border-primary/20"
          />
          <div className="absolute -bottom-4 -right-4 bg-hindu-red text-white px-4 py-2 rounded-xl font-display font-bold text-sm shadow-lg">
            25+ Years Experience
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-display font-bold mb-2">
            About <span className="text-hindu-red">Guruji</span>
          </h2>
          <h3 className="text-lg font-display text-primary mb-4">Acharya Rajesh Sharma Ji</h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Acharya Rajesh Sharma Ji is a renowned Vedic astrologer with over 25 years of experience in Jyotish Shastra. Born into a family of scholars in Varanasi, he has been studying ancient Hindu scriptures and astrology since childhood.
          </p>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            He specializes in <strong className="text-foreground">Vedic Astrology, Vastu Shastra, Numerology, Palmistry, Lal Kitab Remedies, and Gemstone Consultation</strong>. His deep knowledge of Parashar Jyotish and Bhrigu Samhita has helped thousands of families across India and abroad.
          </p>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Whether it's marriage compatibility, career guidance, health concerns, property disputes, or spiritual healing — Guruji provides accurate predictions with effective remedies rooted in ancient Vedic traditions.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {["Vedic Astrology", "Vastu Shastra", "Numerology", "Palmistry", "Lal Kitab", "Gemology"].map((skill) => (
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

    {/* Divine Blessings Banner */}
    <section className="bg-hindu-red/5 border-y border-hindu-red/10">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="text-center">
            <img src={ganeshaImg} alt="Lord Ganesha - Remover of Obstacles" className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-primary/30 shadow-lg" />
            <h3 className="font-display text-lg font-semibold mt-3 text-hindu-red">Shri Ganesha</h3>
            <p className="text-sm text-muted-foreground">Remover of Obstacles</p>
          </div>
          <div className="text-center">
            <img src={omSymbolImg} alt="Sacred Om Symbol" className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-primary/30 shadow-lg" />
            <h3 className="font-display text-lg font-semibold mt-3 text-hindu-red">Sacred Om</h3>
            <p className="text-sm text-muted-foreground">Universal Divine Sound</p>
          </div>
          <div className="text-center">
            <img src={sacredLotusImg} alt="Sacred Lotus - Purity & Enlightenment" className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-primary/30 shadow-lg" />
            <h3 className="font-display text-lg font-semibold mt-3 text-hindu-red">Sacred Lotus</h3>
            <p className="text-sm text-muted-foreground">Purity & Enlightenment</p>
          </div>
        </div>
      </div>
    </section>

    <ServicesMarquee />

    {/* Horoscope */}
    <section className="bg-muted/50 py-16">
      <div className="container">
        <h2 className="text-3xl font-display font-bold text-center mb-2">Today's <span className="text-hindu-red">Horoscope</span></h2>
        <p className="text-muted-foreground text-center mb-10">Select your zodiac sign for daily predictions</p>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {zodiacSigns.map((z) => (
            <Link
              key={z.name}
              to={`/horoscope/${z.name.toLowerCase()}`}
              className="bg-card border border-border rounded-xl p-4 text-center shadow-card hover:shadow-card-hover hover:border-hindu-red/40 transition-all group"
            >
              <div className="text-3xl mb-2">{z.symbol}</div>
              <div className="font-display font-semibold text-sm group-hover:text-hindu-red transition-colors">{z.name}</div>
              <div className="text-[10px] text-muted-foreground mt-0.5">{z.dates}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="gradient-hero py-16">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
          Ready to Know Your Future?
        </h2>
        <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto">
          Book a personal consultation with Guruji. Get accurate predictions and powerful Vedic remedies for all your life problems.
        </p>
        <Link to="/contact">
          <Button size="lg" className="gradient-saffron border-0 text-primary-foreground text-base shadow-glow gap-2">
            <Calendar className="h-5 w-5" /> Book Your Slot Now
          </Button>
        </Link>
      </div>
    </section>
  </div>
);

export default Index;
