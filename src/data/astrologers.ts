export interface Astrologer {
  id: number;
  name: string;
  image: string;
  skills: string[];
  languages: string[];
  experience: number;
  pricePerMin: number;
  rating: number;
  orders: number;
  isOnline: boolean;
  speciality: string;
}

export const astrologers: Astrologer[] = [
  { id: 1, name: "Pandit Rajesh Sharma", image: "https://randomuser.me/api/portraits/men/32.jpg", skills: ["Vedic", "Vastu", "Numerology"], languages: ["Hindi", "English"], experience: 15, pricePerMin: 30, rating: 4.9, orders: 12450, isOnline: true, speciality: "Love & Relationships" },
  { id: 2, name: "Acharya Meena Devi", image: "https://randomuser.me/api/portraits/women/44.jpg", skills: ["Tarot", "Prashna Kundli"], languages: ["Hindi", "Gujarati"], experience: 12, pricePerMin: 25, rating: 4.8, orders: 9870, isOnline: true, speciality: "Career & Business" },
  { id: 3, name: "Guru Vikram Singh", image: "https://randomuser.me/api/portraits/men/45.jpg", skills: ["Vedic", "KP System", "Lal Kitab"], languages: ["Hindi", "English", "Punjabi"], experience: 20, pricePerMin: 40, rating: 4.9, orders: 18320, isOnline: false, speciality: "Marriage Compatibility" },
  { id: 4, name: "Jyotishi Anita Kumari", image: "https://randomuser.me/api/portraits/women/65.jpg", skills: ["Numerology", "Face Reading"], languages: ["Hindi", "English"], experience: 8, pricePerMin: 20, rating: 4.7, orders: 6540, isOnline: true, speciality: "Health & Wellness" },
  { id: 5, name: "Acharya Dev Prakash", image: "https://randomuser.me/api/portraits/men/52.jpg", skills: ["Vedic", "Palmistry", "Vastu"], languages: ["Hindi", "Sanskrit"], experience: 25, pricePerMin: 50, rating: 5.0, orders: 24100, isOnline: true, speciality: "Wealth & Finance" },
  { id: 6, name: "Pandit Sunita Joshi", image: "https://randomuser.me/api/portraits/women/33.jpg", skills: ["Tarot", "Angel Healing"], languages: ["English", "Marathi"], experience: 10, pricePerMin: 22, rating: 4.6, orders: 5430, isOnline: true, speciality: "Spiritual Healing" },
  { id: 7, name: "Guru Manoj Tiwari", image: "https://randomuser.me/api/portraits/men/67.jpg", skills: ["Vedic", "Horary"], languages: ["Hindi", "Bengali"], experience: 18, pricePerMin: 35, rating: 4.8, orders: 15670, isOnline: false, speciality: "Doshas & Remedies" },
  { id: 8, name: "Jyotishi Priya Nair", image: "https://randomuser.me/api/portraits/women/22.jpg", skills: ["Tarot", "Reiki", "Crystal Healing"], languages: ["English", "Malayalam"], experience: 6, pricePerMin: 18, rating: 4.5, orders: 3210, isOnline: true, speciality: "Love & Relationships" },
  { id: 9, name: "Acharya Ramesh Gupta", image: "https://randomuser.me/api/portraits/men/29.jpg", skills: ["Vedic", "Muhurat", "Vastu"], languages: ["Hindi", "English"], experience: 22, pricePerMin: 45, rating: 4.9, orders: 20540, isOnline: true, speciality: "Property & Real Estate" },
  { id: 10, name: "Pandit Kavita Sharma", image: "https://randomuser.me/api/portraits/women/55.jpg", skills: ["Numerology", "Tarot", "Vedic"], languages: ["Hindi", "English", "Urdu"], experience: 14, pricePerMin: 28, rating: 4.7, orders: 11230, isOnline: true, speciality: "Child & Education" },
  { id: 11, name: "Guru Ashok Mishra", image: "https://randomuser.me/api/portraits/men/41.jpg", skills: ["Vedic", "Nadi", "Gemology"], languages: ["Hindi", "Tamil"], experience: 30, pricePerMin: 60, rating: 5.0, orders: 31200, isOnline: false, speciality: "Gemstone Consultation" },
  { id: 12, name: "Jyotishi Deepa Rao", image: "https://randomuser.me/api/portraits/women/41.jpg", skills: ["Tarot", "Psychic Reading"], languages: ["English", "Kannada"], experience: 9, pricePerMin: 24, rating: 4.6, orders: 7890, isOnline: true, speciality: "Past Life Reading" },
];

export const zodiacSigns = [
  { name: "Aries", symbol: "♈", dates: "Mar 21 - Apr 19", element: "Fire" },
  { name: "Taurus", symbol: "♉", dates: "Apr 20 - May 20", element: "Earth" },
  { name: "Gemini", symbol: "♊", dates: "May 21 - Jun 20", element: "Air" },
  { name: "Cancer", symbol: "♋", dates: "Jun 21 - Jul 22", element: "Water" },
  { name: "Leo", symbol: "♌", dates: "Jul 23 - Aug 22", element: "Fire" },
  { name: "Virgo", symbol: "♍", dates: "Aug 23 - Sep 22", element: "Earth" },
  { name: "Libra", symbol: "♎", dates: "Sep 23 - Oct 22", element: "Air" },
  { name: "Scorpio", symbol: "♏", dates: "Oct 23 - Nov 21", element: "Water" },
  { name: "Sagittarius", symbol: "♐", dates: "Nov 22 - Dec 21", element: "Fire" },
  { name: "Capricorn", symbol: "♑", dates: "Dec 22 - Jan 19", element: "Earth" },
  { name: "Aquarius", symbol: "♒", dates: "Jan 20 - Feb 18", element: "Air" },
  { name: "Pisces", symbol: "♓", dates: "Feb 19 - Mar 20", element: "Water" },
];

export const horoscopeContent: Record<string, string> = {
  Aries: "Today brings a burst of creative energy. A sudden opportunity may arise in your career. Stay focused and trust your instincts. Financial matters look promising in the afternoon.",
  Taurus: "Patience will be your greatest asset today. A loved one may need your support. Financial decisions should be postponed until you have all the information. Evening brings relaxation.",
  Gemini: "Communication is your superpower today. Express your ideas confidently at work. A friend may surprise you with good news. Social connections strengthen in the evening.",
  Cancer: "Home and family take center stage today. A property-related matter may progress. Emotional sensitivity is heightened — use it to connect deeply with loved ones.",
  Leo: "Your charisma shines bright today. Leadership opportunities emerge at work. Romance is in the air for singles. A creative project gains momentum in the afternoon.",
  Virgo: "Attention to detail pays off today. Health matters improve with disciplined routine. A financial gain is possible through past investments. Evening favors learning.",
  Libra: "Balance and harmony define your day. Partnerships — both personal and professional — flourish. An artistic endeavor brings joy. Social gatherings are highly favored.",
  Scorpio: "Deep insights come your way today. Research and investigation yield results. A secret may be revealed. Transformative energy helps you let go of what no longer serves you.",
  Sagittarius: "Adventure calls today! Travel plans may materialize. Higher learning or spiritual pursuits are favored. Optimism attracts positive people and circumstances into your life.",
  Capricorn: "Hard work meets recognition today. Career advancement is strongly indicated. A mentor figure may offer valuable guidance. Financial stability continues to strengthen.",
  Aquarius: "Innovation and originality set you apart today. Technology-related ventures succeed. Community involvement brings fulfillment. Unexpected encounters lead to lasting friendships.",
  Pisces: "Intuition guides you perfectly today. Creative and artistic pursuits are highly favored. A spiritual experience brings peace. Dreams hold important messages — pay attention.",
};
