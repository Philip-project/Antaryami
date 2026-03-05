import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Calendar, Heart, Shield, Users, ArrowRight, Sun, Moon, Eye, Sparkles } from "lucide-react";
import { Helmet } from "react-helmet";

const zodiacSigns = [
  { name: "Aries", symbol: "♈", dates: "Mar 21 - Apr 19", element: "Fire", lord: "Mangal", color: "from-red-600 to-orange-500", icon: "🔥" },
  { name: "Taurus", symbol: "♉", dates: "Apr 20 - May 20", element: "Earth", lord: "Shukra", color: "from-green-600 to-emerald-500", icon: "🌍" },
  { name: "Gemini", symbol: "♊", dates: "May 21 - Jun 20", element: "Air", lord: "Budh", color: "from-yellow-600 to-amber-500", icon: "🌬" },
  { name: "Cancer", symbol: "♋", dates: "Jun 21 - Jul 22", element: "Water", lord: "Chandra", color: "from-blue-600 to-cyan-500", icon: "🌙" },
  { name: "Leo", symbol: "♌", dates: "Jul 23 - Aug 22", element: "Fire", lord: "Surya", color: "from-orange-600 to-yellow-500", icon: "☀️" },
  { name: "Virgo", symbol: "♍", dates: "Aug 23 - Sep 22", element: "Earth", lord: "Budh", color: "from-green-600 to-emerald-500", icon: "🌾" },
  { name: "Libra", symbol: "♎", dates: "Sep 23 - Oct 22", element: "Air", lord: "Shukra", color: "from-pink-600 to-rose-500", icon: "⚖️" },
  { name: "Scorpio", symbol: "♏", dates: "Oct 23 - Nov 21", element: "Water", lord: "Mangal", color: "from-purple-600 to-violet-500", icon: "🦂" },
  { name: "Sagittarius", symbol: "♐", dates: "Nov 22 - Dec 21", element: "Fire", lord: "Brihaspati", color: "from-indigo-600 to-blue-500", icon: "🏹" },
  { name: "Capricorn", symbol: "♑", dates: "Dec 22 - Jan 19", element: "Earth", lord: "Shani", color: "from-gray-600 to-slate-500", icon: "🏔" },
  { name: "Aquarius", symbol: "♒", dates: "Jan 20 - Feb 18", element: "Air", lord: "Shani", color: "from-cyan-600 to-teal-500", icon: "🏺" },
  { name: "Pisces", symbol: "♓", dates: "Feb 19 - Mar 20", element: "Water", lord: "Brihaspati", color: "from-blue-600 to-indigo-500", icon: "🐠" }
];

const hinduGods = [
  { name: "Lord Ganesha", title: "Remover of Obstacles", image: "🐘", color: "from-red-500 to-orange-400", description: "The elephant-headed god of wisdom and success" },
  { name: "Lord Shiva", title: "The Destroyer", image: "🕉", color: "from-blue-500 to-purple-400", description: "The supreme god of transformation and meditation" },
  { name: "Lord Vishnu", title: "The Preserver", image: "🔱", color: "from-green-500 to-teal-400", description: "The protector and maintainer of the universe" },
  { name: "Goddess Lakshmi", title: "Goddess of Wealth", image: "💰", color: "from-yellow-500 to-amber-400", description: "The bestower of prosperity and fortune" },
  { name: "Lord Hanuman", title: "The Devotee", image: "🐵", color: "from-orange-500 to-red-400", description: "The symbol of strength and devotion" },
  { name: "Goddess Durga", title: "The Divine Mother", image: "👸", color: "from-pink-500 to-rose-400", description: "The warrior goddess of protection and power" }
];

const Horoscope = () => {
  const [selectedSign, setSelectedSign] = useState<string | null>(null);
  const [hoveredSign, setHoveredSign] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-saffron-100 via-orange-50 to-rose-100 relative overflow-hidden">
      <Helmet>
        <title>Today's Horoscope - Vedic Astrology Predictions</title>
        <meta name="description" content="Get your daily horoscope predictions based on Vedic astrology. Know what the stars have in store for you today." />
        <meta name="keywords" content="daily horoscope, Vedic astrology, zodiac predictions, today's forecast" />
      </Helmet>

      {/* Divine Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-200/20 via-red-200/20 to-yellow-200/20"></div>
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i: number) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: [0, 0.3, 0] }}
              transition={{ 
                duration: 3 + i * 0.5, 
                repeat: Infinity, 
                repeatType: "reverse" 
              }}
              className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Hindu Gods */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {hinduGods.map((god, index: number) => (
          <motion.div
            key={god.name}
            initial={{ y: "100%", rotate: 0, opacity: 0 }}
            animate={{ y: "-20%", rotate: 360, opacity: 0.1 }}
            transition={{
              duration: 20 + index * 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute text-6xl"
            style={{
              top: `${10 + index * 15}%`,
              left: `${5 + index * 15}%`,
            }}
          >
            <div className={`bg-gradient-to-br ${god.color} bg-clip-text text-transparent font-bold`}>
              {god.image}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-black/80 text-white text-xs px-2 py-1 rounded"
            >
              {god.name}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Header */}
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center py-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent mb-4">
            Today's Horoscope
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Discover what the stars have in store for you with Vedic astrology predictions
          </p>
        </motion.div>

        {/* Zodiac Signs Grid */}
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8"
          >
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              Select Your <span className="text-orange-600">Zodiac Sign</span>
            </h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-8">
              {zodiacSigns.map((sign) => (
                <motion.div
                  key={sign.name}
                  whileHover={{ scale: 1.05 }}
                  onHoverStart={() => setHoveredSign(sign.name)}
                  onHoverEnd={() => setHoveredSign(null)}
                  onClick={() => setSelectedSign(sign.name)}
                  className={`relative cursor-pointer transition-all duration-300 ${
                    selectedSign === sign.name ? 'ring-4 ring-orange-400 scale-105' : ''
                  } ${hoveredSign === sign.name ? 'scale-110' : ''}`}
                >
                  <Card className={`h-full overflow-hidden border-2 ${selectedSign === sign.name ? 'border-orange-400' : 'border-gray-200'}`}>
                    <CardContent className="p-6">
                      {/* Divine Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${sign.color} opacity-10`}></div>
                      
                      {/* Zodiac Symbol */}
                      <motion.div
                        initial={{ scale: 0, rotate: 0 }}
                        animate={{ scale: 1, rotate: selectedSign === sign.name ? 360 : 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative z-10 text-5xl mb-3 text-center"
                      >
                        <div className={`bg-gradient-to-br ${sign.color} bg-clip-text text-transparent font-bold`}>
                          {sign.symbol}
                        </div>
                        <div className="text-xs text-gray-600 mt-1">{sign.icon}</div>
                      </motion.div>

                      {/* Sign Details */}
                      <div className="text-center">
                        <h3 className="text-xl font-bold mb-2 text-gray-800">{sign.name}</h3>
                        <p className="text-sm text-gray-600 mb-1">{sign.dates}</p>
                        <div className="flex justify-center gap-2 mb-3">
                          <span className="px-2 py-1 bg-gray-100 rounded text-xs font-medium">
                            {sign.element}
                          </span>
                          <span className="px-2 py-1 bg-orange-100 rounded text-xs font-medium text-orange-600">
                            {sign.lord}
                          </span>
                        </div>
                      </div>

                      {/* Hover Action */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredSign === sign.name ? 1 : 0 }}
                        className="absolute inset-0 bg-black/60 flex items-center justify-center"
                      >
                        <div className="text-white text-center p-4">
                          <Sparkles className="w-8 h-8 mx-auto mb-2" />
                          <p className="text-sm font-medium">Click for Details</p>
                        </div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Selected Sign Details */}
            {selectedSign && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl border-2 border-orange-200"
              >
                <h3 className="text-2xl font-bold mb-4 text-center text-orange-600">
                  {selectedSign} Daily Predictions
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-orange-200">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Sun className="w-8 h-8 text-yellow-500" />
                        <h4 className="text-lg font-semibold text-gray-800">Today's Fortune</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        The cosmic energies are aligned in your favor. This is an excellent day for new beginnings and important decisions. 
                        Your ruling planet {zodiacSigns.find((s: any) => s.name === selectedSign)?.lord} 
                        brings positive energy and opportunities for growth.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-orange-200">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Heart className="w-8 h-8 text-red-500" />
                        <h4 className="text-lg font-semibold text-gray-800">Love & Relationships</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Romance blossoms under today's celestial alignment. Singles may encounter someone special, 
                        while couples will find deeper connection and understanding in their relationships.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-orange-200">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Shield className="w-8 h-8 text-green-500" />
                        <h4 className="text-lg font-semibold text-gray-800">Health & Wellness</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Your physical and mental well-being receives cosmic support. Focus on self-care and 
                        preventive health measures for optimal vitality today.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-orange-200">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Users className="w-8 h-8 text-blue-500" />
                        <h4 className="text-lg font-semibold text-gray-800">Career & Finance</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Professional opportunities await your attention. Financial gains are likely through 
                        careful planning and strategic investments in your chosen field.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-6 text-center">
                  <Link to={`/horoscope/${selectedSign.toLowerCase()}`}>
                    <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-3 rounded-lg hover:scale-105 transition-all duration-300">
                      <ArrowRight className="w-5 h-5 mr-2" />
                      Get Detailed Reading
                    </Button>
                  </Link>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Horoscope;
