export type ServiceOption = {
  duration: string;
  price: number;
};

export type Service = {
  id: string;
  name: string;
  description: string;
  image: string;
  options: ServiceOption[];
};

export const services: Service[] = [
  {
    id: 'sv1',
    name: 'Dry Massage',
    description: 'A focused pressure technique that targets deep muscle tension without oil, ideal for chronic knots.',
    image: 'https://images.pexels.com/photos/6628613/pexels-photo-6628613.jpeg?auto=compress&cs=tinysrgb&w=900',
    options: [
      { duration: '60 Min', price: 4000 },
      { duration: '90 Min', price: 5000 },
      { duration: '120 Min', price: 7000 },
    ],
  },
  {
    id: 'sv2',
    name: 'Thai Traditional Massage',
    description: 'Ancient assisted-stretch therapy that opens energy lines, improves flexibility, and rebalances the body.',
    image: 'https://images.pexels.com/photos/19666192/pexels-photo-19666192.jpeg?auto=compress&cs=tinysrgb&w=900',
    options: [
      { duration: '60 Min', price: 4000 },
      { duration: '90 Min', price: 5500 },
      { duration: '120 Min', price: 7500 },
    ],
  },
  {
    id: 'sv3',
    name: 'Aroma Oil Massage',
    description: 'A soothing oil massage blended with essential aromatherapy to calm the mind and release stress.',
    image: 'https://images.pexels.com/photos/433626/pexels-photo-433626.jpeg?auto=compress&cs=tinysrgb&w=900',
    options: [
      { duration: '60 Min', price: 4000 },
      { duration: '90 Min', price: 6000 },
      { duration: '120 Min', price: 7500 },
    ],
  },
  {
    id: 'sv4',
    name: 'Oil Massage',
    description: 'A classic full-body oil massage with long, flowing strokes to improve circulation and ease tension.',
    image: 'https://images.pexels.com/photos/6560308/pexels-photo-6560308.jpeg?auto=compress&cs=tinysrgb&w=900',
    options: [
      { duration: '60 Min', price: 4000 },
      { duration: '90 Min', price: 6000 },
      { duration: '120 Min', price: 7500 },
    ],
  },
  {
    id: 'sv5',
    name: 'Back & Shoulder Massage',
    description: 'A targeted treatment for the back, neck, and shoulders - the areas that carry the most daily stress.',
    image: 'https://images.pexels.com/photos/4599377/pexels-photo-4599377.jpeg?auto=compress&cs=tinysrgb&w=900',
    options: [
      { duration: '60 Min', price: 4000 },
      { duration: '90 Min', price: 6000 },
      { duration: '120 Min', price: 7500 },
    ],
  },
  {
    id: 'sv6',
    name: 'Full Body Massage',
    description: 'A comprehensive head-to-toe massage that restores balance, relieves fatigue, and promotes deep relaxation.',
    image: 'https://images.pexels.com/photos/7789646/pexels-photo-7789646.jpeg?auto=compress&cs=tinysrgb&w=900',
    options: [
      { duration: '60 Min', price: 4000 },
      { duration: '90 Min', price: 6000 },
      { duration: '120 Min', price: 7500 },
    ],
  },
  {
    id: 'sv7',
    name: 'Foot Massage',
    description: 'A reflexology-inspired foot massage that stimulates pressure points and relieves tired, aching feet.',
    image: 'https://images.pexels.com/photos/9146381/pexels-photo-9146381.jpeg?auto=compress&cs=tinysrgb&w=900',
    options: [
      { duration: '60 Min', price: 3000 },
      { duration: '90 Min', price: 4500 },
      { duration: '120 Min', price: 6000 },
    ],
  },
  {
    id: 'sv8',
    name: 'Body-to-Body Massage',
    description: 'An intimate, full-contact massage experience designed for deep relaxation and complete sensory restoration.',
    image: 'https://images.pexels.com/photos/7789652/pexels-photo-7789652.jpeg?auto=compress&cs=tinysrgb&w=900',
    options: [
      { duration: '60 Min', price: 8000 },
      { duration: '90 Min', price: 11000 },
      { duration: '120 Min', price: 15000 },
    ],
  },
  {
    id: 'sv9',
    name: 'Four Hand Massage',
    description: 'Two therapists working in synchronized harmony for an immersive, doubled-intensity relaxation experience.',
    image: 'https://images.pexels.com/photos/7195804/pexels-photo-7195804.jpeg?auto=compress&cs=tinysrgb&w=900',
    options: [
      { duration: '60 Min', price: 11000 },
      { duration: '90 Min', price: 15000 },
      { duration: '120 Min', price: 20000 },
    ],
  },
  {
    id: 'sv10',
    name: 'Special Package',
    description: 'A curated combination of our finest treatments, tailored for a complete wellness journey.',
    image: 'https://images.pexels.com/photos/6560310/pexels-photo-6560310.jpeg?auto=compress&cs=tinysrgb&w=900',
    options: [
      { duration: '60 Min', price: 6500 },
      { duration: '90 Min', price: 9000 },
      { duration: '120 Min', price: 12000 },
    ],
  },
  {
    id: 'sv11',
    name: 'Nuru Massage',
    description: 'A deeply immersive full-body massage using a unique hydrating gel for effortless, fluid strokes and complete sensory relaxation.',
    image: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=900',
    options: [
      { duration: '60 Min', price: 7000 },
      { duration: '90 Min', price: 10000 },
      { duration: '120 Min', price: 13000 },
    ],
  },
];

export type Therapist = {
  id: string;
  name: string;
  title: string;
  specialties: string[];
  experience: string;
  image: string;
};

export const therapists: Therapist[] = [
  {
    id: 'th1',
    name: 'Aaliya Rahman',
    title: 'Lead Massage Therapist',
    specialties: ['Swedish Massage', 'Aromatherapy', 'Hot Stone'],
    experience: '12 years',
    image:
      'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'th2',
    name: 'Daniel Moreau',
    title: 'European Spa Specialist',
    specialties: ['Euro Facial', 'Lymphatic Drainage', 'Anti-age'],
    experience: '10 years',
    image:
      'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'th3',
    name: 'Nusrat Jahan',
    title: 'Traditional Thai Therapist',
    specialties: ['Thai Therapy', 'Deep Tissue', 'Reflexology'],
    experience: '8 years',
    image:
      'https://images.pexels.com/photos/4173272/pexels-photo-4173272.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'th4',
    name: 'Sofia Bellucci',
    title: 'Skincare & Aesthetics Lead',
    specialties: ['24K Gold Facial', 'Hydrafacial', 'Skin Consultation'],
    experience: '11 years',
    image:
      'https://images.pexels.com/photos/4173291/pexels-photo-4173291.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export type GalleryItem = {
  id: string;
  src: string;
  category: 'Interiors' | 'Treatments' | 'Suites' | 'Details';
  alt: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    src: '/assets/gallery/image.png',
    category: 'Interiors',
    alt: 'Euro Healthcare Spa interior',
  },
  {
    id: 'g2',
    src: '/assets/gallery/image1.png',
    category: 'Treatments',
    alt: 'Spa treatment in progress',
  },
  {
    id: 'g3',
    src: '/assets/gallery/image2.png',
    category: 'Suites',
    alt: 'Luxury treatment suite',
  },
  {
    id: 'g4',
    src: '/assets/gallery/image3.png',
    category: 'Details',
    alt: 'Spa ambiance and details',
  },
  {
    id: 'g5',
    src: '/assets/gallery/image4.png',
    category: 'Treatments',
    alt: 'Relaxing massage therapy',
  },
  {
    id: 'g6',
    src: '/assets/gallery/image5.png',
    category: 'Interiors',
    alt: 'Spa lounge and reception',
  },
  {
    id: 'g7',
    src: '/assets/gallery/image6.png',
    category: 'Suites',
    alt: 'Private treatment room',
  },
  {
    id: 'g8',
    src: '/assets/gallery/image7.png',
    category: 'Treatments',
    alt: 'Therapist at work',
  },
  {
    id: 'g9',
    src: '/assets/gallery/image8.png',
    category: 'Details',
    alt: 'Spa products and essentials',
  },
  {
    id: 'g10',
    src: '/assets/gallery/image9.png',
    category: 'Interiors',
    alt: 'Serene spa setting',
  },
];

export const galleryFilters: ('All' | GalleryItem['category'])[] = [
  'All',
  'Interiors',
  'Treatments',
  'Suites',
  'Details',
];

export type Testimonial = {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Tahsin Karim',
    location: 'Gulshan, Dhaka',
    rating: 5,
    text: 'The Royal Swedish Massage was the most restorative experience I have had in Dhaka. The ambience, the therapist, the attention to detail - flawless.',
    initials: 'TK',
  },
  {
    id: 't2',
    name: 'Isabella Ferreira',
    location: 'Banani, Dhaka',
    rating: 5,
    text: 'The 24K Gold Facial left my skin glowing for days. Euro Healthcare Spa truly delivers a European-standard experience in the heart of Banani.',
    initials: 'IF',
  },
  {
    id: 't3',
    name: 'Rashed Chowdhury',
    location: 'Dhanmondi, Dhaka',
    rating: 5,
    text: 'Booked the Full Day Royal Retreat for my anniversary. Private suite, gourmet lunch, impeccable service. Worth every taka.',
    initials: 'RC',
  },
  {
    id: 't4',
    name: 'Nadia Islam',
    location: 'Baridhara, Dhaka',
    rating: 5,
    text: 'The booking process was effortless and the therapist selection was a beautiful touch. The hammam ritual was deeply detoxifying.',
    initials: 'NI',
  },
];

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: 'b1',
    title: 'The Science of Slow: Why Recovery Needs Stillness',
    excerpt:
      'Modern wellness is not about doing more. Discover how intentional stillness lowers cortisol and accelerates physical recovery.',
    category: 'Wellness',
    date: 'Aug 12, 2026',
    readTime: '5 min read',
    image:
      'https://images.pexels.com/photos/6560308/pexels-photo-6560308.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'b2',
    title: '5 Self-Care Rituals to Bring Home From the Spa',
    excerpt:
      'Extend the benefits of your treatment with these five simple rituals you can practice at home between visits.',
    category: 'Self-Care',
    date: 'Aug 02, 2026',
    readTime: '4 min read',
    image:
      'https://images.pexels.com/photos/433626/pexels-photo-433626.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'b3',
    title: 'Understanding Hot Stone Therapy and Deep Heat Benefits',
    excerpt:
      'How controlled heat penetrates muscle tissue, improves circulation, and why it outperforms pressure alone for chronic tension.',
    category: 'Treatments',
    date: 'Jul 21, 2026',
    readTime: '6 min read',
    image:
      'https://images.pexels.com/photos/4599377/pexels-photo-4599377.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
];

export type MembershipTier = {
  id: string;
  name: string;
  price: string;
  period: string;
  highlight?: boolean;
  points: string;
  perks: string[];
};

export const memberships: MembershipTier[] = [
  {
    id: 'm1',
    name: 'Silver',
    price: '5,000',
    period: '/month',
    points: 'Earn 1 point per 100 ৳ spent',
    perks: ['10% off all treatments', 'Priority booking window', 'Birthday month bonus gift'],
  },
  {
    id: 'm2',
    name: 'Gold',
    price: '9,500',
    period: '/month',
    highlight: true,
    points: 'Earn 1.5 points per 100 ৳ spent',
    perks: [
      '15% off all treatments',
      'One complimentary facial monthly',
      'Private lounge access',
      'Free guest pass quarterly',
    ],
  },
  {
    id: 'm3',
    name: 'Platinum',
    price: '16,000',
    period: '/month',
    points: 'Earn 2 points per 100 ৳ spent',
    perks: [
      '20% off all treatments',
      'Two complimentary treatments monthly',
      'Dedicated therapist pairing',
      'Concierge reservations',
    ],
  },
];

export type Offer = {
  id: string;
  title: string;
  description: string;
  tag: string;
  validUntil: string;
};

export const offers: Offer[] = [
  {
    id: 'o1',
    title: 'Eid Wellness Package',
    description: 'A three-hour hammam, facial, and gold body glow ritual - complete with festive gifting.',
    tag: 'Seasonal',
    validUntil: 'Until Eid ul Adha',
  },
  {
    id: 'o2',
    title: 'Valentines Spa for Couples',
    description: 'Side-by-side massages, a shared floral bath, and champagne in a private suite for two.',
    tag: 'Couples',
    validUntil: 'February only',
  },
  {
    id: 'o3',
    title: 'Monsoon Renewal',
    description: 'Recharge with a hydrating facial and sea salt body polish designed for the rainy season.',
    tag: 'Limited',
    validUntil: 'Jun - Sep',
  },
];

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    id: 'f1',
    question: 'Do I need to book in advance?',
    answer:
      'We strongly recommend booking in advance to secure your preferred therapist and time. Same-day bookings are accommodated subject to availability.',
  },
  {
    id: 'f2',
    question: 'What should I wear to my appointment?',
    answer:
      'Wear comfortable clothing. We provide robes, slippers, and a private changing area. You will be professionally draped throughout your treatment.',
  },
  {
    id: 'f3',
    question: 'Can I cancel or reschedule my booking?',
    answer:
      'Yes. Cancellations or reschedules made at least 12 hours before your appointment incur no charge. Late cancellations may forfeit the deposit.',
  },
  {
    id: 'f4',
    question: 'Is there a pre-payment option?',
    answer:
      'Yes. You may secure your booking with a refundable deposit or choose to pay at the spa. Deposits are deducted from your final bill.',
  },
  {
    id: 'f5',
    question: 'Are the therapists certified?',
    answer:
      'All Euro Healthcare Spa therapists are internationally certified with a minimum of eight years of professional experience.',
  },
  {
    id: 'f6',
    question: 'Do you offer couples treatments?',
    answer:
      'Yes. Our Couples Serenity Escape includes side-by-side massages, a shared floral bath, and champagne in a private suite.',
  },
];

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Journal', href: '/journal' },
  { label: 'Contact', href: '#contact' },
];

export const spaInfo = {
  name: 'Euro Healthcare Spa',
  address: 'Block# C, 2 Road No. 17, Dhaka 1213, Bangladesh',
  phones: ['+880 1913-369493'],
  email: 'reservations@eurohealthcarespa.com',
  hours: [{ day: 'Every day', time: '9:00 AM - 10:00 PM' }],
  whatsapp: '8801913369493',
  mapEmbed:
    'https://maps.google.com/maps?q=23.7933288,90.402566&z=21&output=embed',
  mapLink:
    'https://www.google.com/maps/place/Euro+Healthcare+Spa/@23.7933188,90.4023542,21z/data=!4m6!3m5!1s0x3755c7d3ddf3b061:0xe9c366ebf4ef6770!8m2!3d23.7933288!4d90.402566!16s%2Fg%2F11zwz83lk9?entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D',
};

export const timeSlots = [
  '09:00 AM',
  '10:30 AM',
  '12:00 PM',
  '01:30 PM',
  '03:00 PM',
  '04:30 PM',
  '06:00 PM',
  '07:30 PM',
];


