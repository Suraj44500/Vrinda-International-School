export interface Facility {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  features: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'events' | 'sports' | 'campus' | 'celebrations';
  date: string;
  image: string;
  caption: string;
}

export interface AcademicWing {
  id: string;
  title: string;
  grades: string;
  ageGroup: string;
  tagline: string;
  description: string;
  highlights: string[];
  subjects: string[];
}

export interface Testimonial {
  name: string;
  relation: string;
  message: string;
  rating: number;
}

export const SCHOOL_INFO = {
  name: "Vrinda International School",
  shortName: "VIS Faridabad",
  tagline: "Nurturing Minds, Inspiring Excellence, Cultivating Character",
  established: 1999,
  affiliation: {
    board: "CBSE (Central Board of Secondary Education, New Delhi)",
    affiliationNo: "531419",
    status: "Senior Secondary (Class Pre-Nur to XII)",
    medium: "English Medium",
    nature: "Co-Educational"
  },
  management: "Shastri Educational and Welfare Trust",
  director: {
    name: "Mrs. Vijay Luxmi",
    title: "Managing Director",
    image: "https://vrindainternational.in/img/director.jpg",
    message: "VIS has indeed been a single candle to light a thousand more and eradicate the darkness of ignorance. Amongst the many indelible achievements, the school today moves with a clear vision of providing children with the finest facilities, compassionate guidance, and modern pedagogy to help them blossom into humble, responsible, and globally competent citizens."
  },
  contact: {
    address: "S.G.M. Nagar, Sector-48, Faridabad, Haryana - 121001",
    phones: ["+91 9540032777", "+91 9355746777", "+91 9355745777"],
    email: "vrindainternationalschool@gmail.com",
    website: "https://vrindainternational.in",
    googleMapsUrl: "https://maps.app.goo.gl/5Efs7hr7BFo53Xky7",
    timings: {
      summer: "07:30 AM – 01:40 PM",
      winter: "08:00 AM – 02:00 PM",
      office: "08:00 AM – 03:00 PM (Monday – Saturday)"
    }
  },
  stats: [
    { label: "Years of Educational Legacy", value: "26+" },
    { label: "CBSE Board Result Record", value: "100%" },
    { label: "Modern Classrooms & Labs", value: "40+" },
    { label: "Student-Teacher Ratio", value: "20:1" },
    { label: "Proud Alumni Network", value: "3,500+" }
  ]
};

export const HERO_SLIDES = [
  {
    id: 1,
    title: "Welcome to Vrinda International School",
    subtitle: "A Beacon of Academic Distinction & Moral Integrity in Faridabad",
    highlight: "CBSE Affiliated Senior Secondary Institution (Affiliation No. 531419)",
    image: "https://vrindainternational.in/img/slider1.png",
    ctaPrimary: "Apply for Admission 2026-27",
    ctaSecondary: "Explore Campus Facilities"
  },
  {
    id: 2,
    title: "Future-Ready Learning Environment",
    subtitle: "Smart Classrooms, Robotics, STEM Labs & Experiential NEP 2020 Curriculum",
    highlight: "Holistic Development from Pre-Nursery to Grade XII",
    image: "https://vrindainternational.in/img/slider2.png",
    ctaPrimary: "View Academic Wings",
    ctaSecondary: "Download Prospectus"
  },
  {
    id: 3,
    title: "Fostering Champions in Academics & Sports",
    subtitle: "Spacious Playgrounds, Athletic Coaching, Cultural Clubs & Personality Growth",
    highlight: "Safe, Secure, and Nurturing Campus with GPS Transport",
    image: "https://vrindainternational.in/img/slider3.png",
    ctaPrimary: "Schedule Campus Visit",
    ctaSecondary: "View Event Gallery"
  }
];

export const ACADEMIC_WINGS: AcademicWing[] = [
  {
    id: "pre-primary",
    title: "Pre-Primary Wing (Early Bloomers)",
    grades: "Pre-Nursery, Nursery, Kindergarten (LKG & UKG)",
    ageGroup: "2.5 – 5 Years",
    tagline: "Joyful discovery, playful phonics and sensory exploration",
    description: "Our early childhood wing is crafted with warmth, vibrant activity zones, and child-safe environments. We foster curiosity, language development, and foundational social skills using Montessori and play-way methodologies.",
    highlights: [
      "Activity-based thematic playrooms",
      "Phonics & early literacy foundation",
      "Gross & fine motor skills workshops",
      "Nutritious eating habits & personal hygiene routines",
      "Dedicated caring support staff & CCTV monitored spaces"
    ],
    subjects: ["English Phonics & Rhymes", "Foundational Numeracy", "General Awareness", "Creative Arts & Crafts", "Physical Movement & Rhyme"]
  },
  {
    id: "primary",
    title: "Primary Wing (Inquisitive Minds)",
    grades: "Class I to Class V",
    ageGroup: "6 – 10 Years",
    tagline: "Structured fundamentals, inquiry-driven learning and digital literacy",
    description: "In the primary years, we emphasize concept mastery, linguistic dexterity, mathematical logic, and scientific temperament. Children learn through hands-on activities, projects, and collaborative peer learning.",
    highlights: [
      "Interactive smart boards in every room",
      "Concept-oriented experiential science",
      "Bilingual fluency in English and Hindi",
      "Mental maths and analytical reasoning",
      "Regular public speaking & morning assembly presentations"
    ],
    subjects: ["English Language & Literature", "Hindi", "Mathematics", "Environmental Studies (EVS)", "Computer Applications", "General Knowledge", "Art & Music"]
  },
  {
    id: "middle",
    title: "Middle School (Analytical Thinkers)",
    grades: "Class VI to Class VIII",
    ageGroup: "11 – 13 Years",
    tagline: "STEM integration, critical analysis, creative arts and leadership",
    description: "Middle school bridges childhood curiosity with disciplined academic scholarship. Students explore dedicated science laboratories, coding curricula, debates, and inter-school competitions.",
    highlights: [
      "Applied science experiments in Physics, Chemistry & Biology",
      "Coding, Scratch, Python & Computer Lab exposure",
      "Third language introduction (Sanskrit / Regional)",
      "Leadership via Student Council & House System",
      "Inter-school debates, quizzes, and drama festivals"
    ],
    subjects: ["English", "Hindi", "Sanskrit", "Mathematics", "Science (Physics, Chemistry, Biology)", "Social Science (History, Civics, Geography)", "Computer Science & Artificial Intelligence Basics", "Physical Education"]
  },
  {
    id: "senior",
    title: "Secondary & Senior Secondary Wing",
    grades: "Class IX to Class XII",
    ageGroup: "14 – 18 Years",
    tagline: "CBSE Board Mastery, Career Guidance & Stream Specializations",
    description: "Prepares students rigorously for CBSE Class X & XII Board examinations alongside competitive examinations (NEET, JEE, CUET, CA Foundation). Offers comprehensive streams in Science, Commerce, and Humanities under veteran faculty.",
    highlights: [
      "Rigorous CBSE syllabus coverage with model test series",
      "Career counseling & entrance guidance workshops",
      "High-tech composite science and mathematics labs",
      "Stream flexibility: Science (PCM/PCB), Commerce & Humanities",
      "Special focus on analytical questions and board answer writing"
    ],
    subjects: [
      "Medical Stream: English, Physics, Chemistry, Biology, Physical Education / Informatics Practices",
      "Non-Medical Stream: English, Physics, Chemistry, Mathematics, Physical Education / Computer Science",
      "Commerce Stream: English, Accountancy, Business Studies, Economics, Mathematics / Informatics Practices",
      "Humanities: English, Political Science, History, Economics, Physical Education"
    ]
  }
];

export const FACILITIES: Facility[] = [
  {
    id: "classrooms",
    title: "Smart Air-Cooled Classrooms",
    category: "Academic Infrastructure",
    description: "Spacious, well-ventilated, and naturally lit classrooms equipped with multimedia interactive projectors and ergonomic student furniture designed for healthy posture.",
    image: "https://vrindainternational.in/img/classroom.jpg",
    features: [
      "Interactive digital whiteboards",
      "Audio-visual multimedia lessons",
      "Ergonomic dual-desk seating",
      "Optimal student-teacher ratio (20:1)",
      "Continuous CCTV surveillance for safety"
    ]
  },
  {
    id: "library",
    title: "Central Knowledge & Resource Center",
    category: "Learning Resources",
    description: "A rich sanctum with over 8,000+ volumes including textbooks, reference encyclopedias, national journals, classical literature, and peaceful reading corners.",
    image: "https://vrindainternational.in/img/library.jpg",
    features: [
      "Comprehensive CBSE reference collections",
      "Periodicals, national dailies & scientific journals",
      "Dedicated reading zones for Junior & Senior scholars",
      "Digital catalogue & book reservation system",
      "Quiet study booths for board exam aspirants"
    ]
  },
  {
    id: "laboratories",
    title: "Advanced Science & Innovation Labs",
    category: "STEM & Practical Learning",
    description: "State-of-the-art Physics, Chemistry, and Biology laboratories equipped with modern apparatus, optical instruments, models, and safety protocols for hands-on experiments.",
    image: "https://vrindainternational.in/img/lab_img1.jpg",
    features: [
      "Individual workstations with burner and chemical supplies",
      "Microscopes, specimen vaults & anatomical models",
      "Safety showers, eye-wash stations and fire extinguishers",
      "Strict teacher and lab-assistant supervised practical sessions",
      "CBSE standard practical experiment alignment"
    ]
  },
  {
    id: "computer-lab",
    title: "High-Tech Computer Lab & Coding Studio",
    category: "Digital Technology",
    description: "Modern computer lab featuring networked high-performance PCs, high-speed fiber internet, programming environments (Python, HTML, Scratch), and cyber-safety filtering.",
    image: "https://vrindainternational.in/img/library_img1.jpg",
    features: [
      "1:1 student-to-computer ratio during lab sessions",
      "Software suites for coding, graphic design & Office tools",
      "High-speed filtered broadband connectivity",
      "UPS battery backup for uninterrupted learning",
      "Introduction to Coding, Scratch & Practical Computing"
    ]
  },
  {
    id: "sports-complex",
    title: "Extensive Sports & Athletics Ground",
    category: "Physical Fitness",
    description: "Well-maintained sporting grounds and dedicated tracks for cricket, football, basketball, badminton, yoga, and martial arts training by certified coaches.",
    image: "https://vrindainternational.in/img/sports_img1.jpg",
    features: [
      "Cricket practice nets & pitch",
      "Standard basketball and badminton courts",
      "Skating arena and indoor table tennis facilities",
      "Annual Athletic Meet and Inter-House sports trophies",
      "Daily physical conditioning and morning yoga drill"
    ]
  },
  {
    id: "transport",
    title: "Safe & GPS-Monitored Transport Fleet",
    category: "Student Safety",
    description: "A fleet of school buses covering major sectors of Faridabad, equipped with real-time GPS tracking, speed governors, CCTV cameras, first aid, and trained lady attendants.",
    image: "https://vrindainternational.in/img/sports_img2.jpg",
    features: [
      "Live GPS tracking and route optimization",
      "Experienced licensed drivers and trained female conductors",
      "Speed governors compliant with transport regulations",
      "First aid kits and emergency fire extinguishers aboard",
      "Convenient pick and drop points across Faridabad"
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Annual Graduation & Prize Distribution Ceremony",
    category: "events",
    date: "Annual Convocation",
    image: "https://vrindainternational.in/img/gallery/graduationday2017/01.jpg",
    caption: "Honoring academic achievers, board toppers, and leadership badge holders on Graduation Day."
  },
  {
    id: "gal-2",
    title: "Summer Enrichment Camp & Robotics",
    category: "campus",
    date: "Summer Camp",
    image: "https://vrindainternational.in/img/gallery/summercamp/01.jpg",
    caption: "Students discovering hands-on science models, drama, pottery, and creative arts during the annual Summer Camp."
  },
  {
    id: "gal-3",
    title: "Basant Panchami & Saraswati Puja",
    category: "celebrations",
    date: "Vasant Panchami",
    image: "https://vrindainternational.in/img/gallery/basantpanchami2018/01.jpg",
    caption: "Offering traditional prayers to Goddess Saraswati, seeking wisdom, humility, and academic dedication."
  },
  {
    id: "gal-4",
    title: "Kid-O-Mania Cultural Carnival",
    category: "events",
    date: "Kid-o-Mania Fest",
    image: "https://vrindainternational.in/img/gallery/kid-o-mania-2018/01.jpg",
    caption: "Our junior scholars showcasing rhythmic dance, theatrical costumes, and musical talent."
  },
  {
    id: "gal-5",
    title: "Independence Day & Republic Day Celebrations",
    category: "celebrations",
    date: "Patriotic Day",
    image: "https://vrindainternational.in/img/gallery/independence/01.jpg",
    caption: "Flag hoisting ceremony, patriotic songs, and march-past parade honoring the nation's integrity."
  },
  {
    id: "gal-6",
    title: "Educational Excursion to Lohagarh",
    category: "sports",
    date: "Field Excursion",
    image: "https://vrindainternational.in/img/gallery/lohagarh/01.jpg",
    caption: "Experiential outdoor learning, traditional rural games, and team-building exercises in fresh nature."
  },
  {
    id: "gal-7",
    title: "Christmas Joy & Winter Fest",
    category: "celebrations",
    date: "Winter Festival",
    image: "https://vrindainternational.in/img/gallery/christmas2017/01.jpg",
    caption: "Spreading warmth, carol singing, gift distribution, and camaraderie among children and faculty."
  },
  {
    id: "gal-8",
    title: "Guru Nanak Jayanti Celebrations",
    category: "celebrations",
    date: "Prakash Parv",
    image: "https://vrindainternational.in/img/gallery/gurunanak/01.jpg",
    caption: "Commemorating universal brotherhood, community service (sewa), and moral virtues."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Shilpa Sharma",
    relation: "Parent of Class IV Student",
    message: "Being efficient and receiving the curriculum email with weekly updates has been really helpful. I am writing to express my gratitude to the school head for sharing the same. Using this as a guide really helps parents like me understand the curriculum and provide the right support at home.",
    rating: 5
  },
  {
    name: "Rajeshwar Verma",
    relation: "Parent of Class VIII Student",
    message: "Just wanted to write a big thank you to the management and teachers for taking care of my child during his leg injury. All the staff and kids have been equally wonderful and considerate, helping him in every way possible. The values taught here truly reflect in action.",
    rating: 5
  },
  {
    name: "Meenakshi Bhatia",
    relation: "Parent of Class XII Science Student",
    message: "The personal mentorship by senior subject teachers for CBSE board preparation is exemplary. From doubt clearance to laboratory practicals, the school ensures every child feels confident and supported.",
    rating: 5
  },
  {
    name: "Aman Gupta",
    relation: "VIS Alumnus (Now Software Engineer)",
    message: "The discipline, public speaking exposure in morning assemblies, and computer training I received at VIS laid the foundation for my professional life. Proud to be an alumnus of Vrinda International School!",
    rating: 5
  }
];

export const ADMISSION_STEPS = [
  {
    step: "01",
    title: "Inquiry & Registration",
    desc: "Fill the online admission enquiry form or visit the VIS admission counselor desk on campus (Sector 48, Faridabad)."
  },
  {
    step: "02",
    title: "Interaction & Assessment",
    desc: "Friendly informal interaction for Pre-Primary children; foundational readiness assessment for Classes I to IX & XI."
  },
  {
    step: "03",
    title: "Document Verification",
    desc: "Submission of birth certificate, previous report cards, transfer certificate (TC), Aadhaar cards, and passport photographs."
  },
  {
    step: "04",
    title: "Admission Confirmation",
    desc: "Completion of admission formalities, fee deposition, uniform & textbook kit allotment, and formal welcome to the VIS family."
  }
];

export const FAQ_LIST = [
  {
    q: "Is Vrinda International School affiliated with CBSE?",
    a: "Yes, Vrinda International School is fully affiliated with the Central Board of Secondary Education (CBSE), New Delhi, under Affiliation No. 531419, offering education up to Senior Secondary Level (Class XII)."
  },
  {
    q: "What streams are offered in Class XI and XII?",
    a: "We offer all major streams: Science (Medical with Biology / Non-Medical with Mathematics & Computer Science), Commerce (Accountancy, Business Studies, Economics, Mathematics / Informatics Practices), and Humanities."
  },
  {
    q: "What is the age criteria for Pre-Nursery and Nursery admission?",
    a: "For Pre-Nursery, the child should be 2.5+ years old as of 31st March of the admission year. For Nursery, the child should ideally be 3+ to 4 years old."
  },
  {
    q: "Does the school provide safe transport facilities?",
    a: "Yes, VIS operates dedicated school buses and vans with GPS tracking, speed governors, first aid kits, and attentive attendants across key sectors and neighborhoods of Faridabad."
  },
  {
    q: "How can parents communicate with teachers?",
    a: "VIS maintains transparent communication via regular Parent-Teacher Meetings (PTMs), the school mobile app, WhatsApp official broadcasts, and scheduled appointments with academic coordinators."
  }
];

export const CBSE_DISCLOSURES = [
  { item: "CBSE Affiliation Number", value: "531419" },
  { item: "School Code / Examination Code", value: "41399" },
  { item: "Managing Trust", value: "Shastri Educational and Welfare Trust" },
  { item: "Managing Director", value: "Mrs. Vijay Luxmi" },
  { item: "School Status", value: "Senior Secondary (Co-Educational, English Medium)" },
  { item: "Campus Area", value: "Over 1.5 Acres with Sports Field & Multipurpose Facilities" },
  { item: "Fire Safety Certificate", value: "Valid & Approved by Fire Safety Department Haryana" },
  { item: "Building Safety Certificate", value: "Certified by Executive Engineer PWD Haryana" },
  { item: "Safe Drinking Water & Sanitary Certificate", value: "Certified & Tested periodically" },
  { item: "Academic Session Period", value: "April to March" }
];
