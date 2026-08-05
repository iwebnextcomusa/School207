import { Teacher, NewsItem, SchoolEvent, GalleryItem, AcademicProgram, FAQItem, Testimonial } from '../types';

export const SCHOOL_INFO = {
  name: "School207",
  fullName: "Government Secondary & Higher Secondary School No. 207",
  code: "4378816351",
  phone: "4378816351",
  email: "sunnatullohamroev139@gmail.com",
  address: "Educational District Complex, Sector 4, Main Highway Road, Central Zone",
  established: "1984",
  accreditation: "Government Ministry of Public Education - Grade A Rating",
  workingHours: "Monday - Friday: 08:00 AM - 04:00 PM | Saturday: 08:00 AM - 01:00 PM",
  developerCredit: "Developed by iWebNext",
  developerUrl: "https://iwebnext.com"
};

export const HIGHLIGHTS = [
  {
    id: "teachers",
    title: "Qualified Teachers",
    description: "Experienced, government-certified faculty members committed to nurturing academic talent.",
    icon: "GraduationCap",
    stat: "45+ Faculty"
  },
  {
    id: "classrooms",
    title: "Modern Classrooms",
    description: "Smart-board enabled classrooms, high-speed computer labs, and fully equipped science facilities.",
    icon: "MonitorPlay",
    stat: "32 Smart Labs"
  },
  {
    id: "activities",
    title: "Student Activities",
    description: "Diverse extracurricular clubs including Robotics, Eco-Club, Arts, Music, and Regional Sports.",
    icon: "Trophy",
    stat: "20+ Clubs"
  },
  {
    id: "excellence",
    title: "Academic Excellence",
    description: "Consistently achieving 98%+ pass rates in annual standardized state board examinations.",
    icon: "Award",
    stat: "98.5% Pass Rate"
  }
];

export const TEACHERS: Teacher[] = [
  {
    id: "t1",
    name: "Dr. Alisher Karimov",
    role: "Headmaster & Senior Physics Faculty",
    department: "science",
    qualification: "Ph.D. in Physics, M.Ed. Educational Leadership",
    experience: "18 Years",
    email: "a.karimov@school207.edu",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    bio: "Passionate educator dedicated to modernizing state science curricula and fostering STEM innovation in government schools.",
    awards: ["State Best Principal Award 2023", "Excellence in Physics Education"]
  },
  {
    id: "t2",
    name: "Mrs. Nigora Rakhimova",
    role: "Senior Mathematics Lecturer",
    department: "mathematics",
    qualification: "M.Sc. Pure Mathematics, B.Ed.",
    experience: "14 Years",
    email: "n.rakhimova@school207.edu",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    bio: "Specializes in olympiad level algebra, logical calculus, and practical mathematics for competitive state examinations.",
    awards: ["National Math Mentor 2024"]
  },
  {
    id: "t3",
    name: "Mr. Jasur Tursunov",
    role: "Computer Science & IT Head",
    department: "science",
    qualification: "M.Tech. Computer Engineering",
    experience: "10 Years",
    email: "j.tursunov@school207.edu",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    bio: "Leads the school's robotics and coding club, teaching Python, Web development, and digital literacy.",
    awards: ["Digital Innovation in Schools Award"]
  },
  {
    id: "t4",
    name: "Mrs. Elena Petrova",
    role: "English Literature & Communication Specialist",
    department: "languages",
    qualification: "M.A. English Philology, TESOL Certified",
    experience: "12 Years",
    email: "e.petrova@school207.edu",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    bio: "Fosters creative writing, public speaking, and debate skills among secondary students.",
    awards: ["Best Language Educator 2022"]
  },
  {
    id: "t5",
    name: "Mr. Sardor Usmanov",
    role: "History & Social Studies Department Chair",
    department: "social_studies",
    qualification: "M.A. History, B.Ed.",
    experience: "15 Years",
    email: "s.usmanov@school207.edu",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    bio: "Engages students through interactive historical storytelling, heritage conservation projects, and civics education."
  },
  {
    id: "t6",
    name: "Mr. Timur Bekmatov",
    role: "Physical Education Director & Coach",
    department: "sports",
    qualification: "B.P.Ed., Certified Athletics Coach",
    experience: "9 Years",
    email: "t.bekmatov@school207.edu",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=400",
    bio: "Trains school football, chess, and track teams. Under his leadership, School207 won 3 regional athletics trophies."
  }
];

export const ACADEMIC_PROGRAMS: AcademicProgram[] = [
  {
    id: "prog-primary",
    level: "Primary School",
    grades: "Grades 1 - 5",
    description: "Foundational education establishing literacy, core arithmetic, curiosity, social values, and creative expressions.",
    subjects: ["Mathematics", "Language & Literature", "Environmental Studies", "Art & Craft", "Physical Education", "Moral Ethics"],
    features: ["Activity-Based Learning", "Weekly Storytelling & Music", "Safe Playgrounds", "Individualized Attention"]
  },
  {
    id: "prog-middle",
    level: "Middle School",
    grades: "Grades 6 - 8",
    description: "Constructive learning introducing analytical scientific concepts, world geography, IT fundamentals, and literature.",
    subjects: ["General Science", "Algebra & Geometry", "World & National History", "English Communication", "Computer Basics", "Third Language"],
    features: ["Science Experiment Labs", "Robotics Club", "Debate & Public Speaking", "Computer Literacy"]
  },
  {
    id: "prog-secondary",
    level: "High School",
    grades: "Grades 9 - 10",
    description: "Rigorous academic preparation focusing on state board exams, scientific inquiry, and vocational foundations.",
    subjects: ["Physics", "Chemistry", "Biology", "Advanced Mathematics", "Social Sciences", "Information Technology", "Languages"],
    features: ["Board Exam Prep Seminars", "Career Counseling", "State Science Olympiad Coaching", "Digital Learning Modules"]
  },
  {
    id: "prog-senior",
    level: "Senior Secondary",
    grades: "Grades 11 - 12",
    description: "Specialized streams in Science, Commerce, and Humanities preparing students for university entrance and professional life.",
    subjects: ["Physics/Chemistry/Maths/Biology", "Accountancy & Economics", "Computer Science", "Political Science & History"],
    features: ["University Guidance", "Competitive Exam Workshops", "Research Projects", "Leadership Council"]
  }
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: "n1",
    title: "School207 Students Win First Place in State Robotics Competition",
    date: "August 2, 2026",
    category: "Achievement",
    summary: "Our student team 'Tech207' created an automated eco-recycling robot that secured the top award at the Regional STEM Fair.",
    content: "We are proud to announce that the robotics team representing School207 has achieved 1st place at the Annual State STEM Exhibition. Guided by Mr. Jasur Tursunov, the team designed a solar-assisted waste sorter. Congratulations to all students involved!",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600",
    isImportant: true
  },
  {
    id: "n2",
    title: "Admissions Open for Academic Year 2026 - 2027",
    date: "July 28, 2026",
    category: "Notice",
    summary: "Applications are officially open for Primary, Middle, and Secondary classes. Apply online or visit the school desk.",
    content: "Parents and guardians can now register prospective students for the upcoming academic year. Please visit our Admissions portal or contact our administrative office at 4378816351 or email sunnatullohamroev139@gmail.com for submission guidelines.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600",
    isImportant: true
  },
  {
    id: "n3",
    title: "Inauguration of New Solar Powered Smart Computer Lab",
    date: "July 15, 2026",
    category: "Academic",
    summary: "School207 expanded its digital infrastructure with 45 high-speed computers powered by green solar energy.",
    content: "Under the State Green Infrastructure Initiative, School207 completed the installation of a modern solar-powered computer facility. The lab will support coding bootcamps and digital research for all grade levels.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "n4",
    title: "Annual Sports Meet & Inter-School Athletics Championship",
    date: "June 20, 2026",
    category: "Sports",
    summary: "School207 ground hosted over 500 student athletes competing in track events, gymnastics, football, and chess.",
    content: "The three-day annual sports meet concluded with great enthusiasm. Blue House bagged the overall championship shield. Special trophies were awarded to top sprinters and chess grandmasters.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=600"
  }
];

export const UPCOMING_EVENTS: SchoolEvent[] = [
  {
    id: "e1",
    title: "Annual Parent-Teacher Association (PTA) General Assembly",
    date: "2026-08-20",
    time: "10:00 AM - 01:00 PM",
    location: "School207 Main Auditorium",
    category: "Meeting",
    description: "Comprehensive discussion on student academic progression, state board syllabus updates, and school facility upgrades.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "e2",
    title: "Independence Day & Cultural Festival Celebrations",
    date: "2026-09-01",
    time: "08:30 AM - 12:30 PM",
    location: "School207 Sports Complex & Parade Ground",
    category: "National Celebration",
    description: "Parade performance, patriotic songs, traditional folk dance, and honoring outstanding student achievers.",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "e3",
    title: "Science & Technology Innovation Exhibition 2026",
    date: "2026-09-15",
    time: "09:00 AM - 03:00 PM",
    location: "School207 Central Science Quad",
    category: "Exhibition",
    description: "Interactive science projects, renewable energy demonstrations, chemistry shows, and AI prototypes built by students.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Smart Classroom Learning",
    category: "campus",
    imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
    caption: "Interactive teaching sessions utilizing modern digital smartboards."
  },
  {
    id: "g2",
    title: "Advanced Chemistry & Physics Lab",
    category: "labs",
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
    caption: "Students conducting practical experiments under teacher supervision."
  },
  {
    id: "g3",
    title: "Annual Track & Field Meet",
    category: "sports",
    imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&q=80&w=800",
    caption: "High energy sprint race during the district sports tournament."
  },
  {
    id: "g4",
    title: "Robotics & Innovation Workshop",
    category: "labs",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    caption: "Hands-on microcontroller programming and circuit design."
  },
  {
    id: "g5",
    title: "Cultural Festival Dance Performance",
    category: "cultural",
    imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800",
    caption: "Traditional music and costume performance celebrating local heritage."
  },
  {
    id: "g6",
    title: "Central Library & Quiet Study Zone",
    category: "campus",
    imageUrl: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800",
    caption: "Over 12,000 reference books, journals, and quiet reading desks."
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is the official school identification number for School207?",
    answer: "The official government school number for School207 is 4378816351. This number is used for state registration, board examination verification, and government transcript verification.",
    category: "general"
  },
  {
    id: "faq-2",
    question: "How can I apply for admission at School207?",
    answer: "Admissions can be initiated online by filling out our Admissions Request Form or visiting the school campus in person. You can also contact our admissions officer at 4378816351 or email sunnatullohamroev139@gmail.com.",
    category: "admissions"
  },
  {
    id: "faq-3",
    question: "Are government scholarships available for eligible students?",
    answer: "Yes. School207 provides access to official government merit scholarships, tuition assistance for low-income families, and free textbook distribution programs under state initiatives.",
    category: "admissions"
  },
  {
    id: "faq-4",
    question: "What sports and extracurricular activities are offered?",
    answer: "We offer Football, Volleyball, Basketball, Chess, Track & Field, Robotics & Coding Club, Debate Society, Eco-Club, and Traditional Music & Arts.",
    category: "facilities"
  },
  {
    id: "faq-5",
    question: "How does the school ensure student safety and digital privacy?",
    answer: "School207 maintains 24/7 campus CCTV monitoring, gated entrance security, background-checked staff, and strict digital privacy policies adhering to government standards.",
    category: "general"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Sanjar Mirzayev",
    role: "Parent of Grade 10 Student",
    quote: "School207 has provided my son with exceptional guidance. The teachers are dedicated, and the computer lab facilities rival top private academies.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "t2",
    name: "Malika Sharipova",
    role: "Alumna (Class of 2024, National Tech Scholar)",
    quote: "The STEM mentorship at School207 gave me the confidence to win state science awards and secure my university scholarship.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "t3",
    name: "Rustam Azizov",
    role: "Community Education Board Chair",
    quote: "School207 stands as a beacon of government educational quality. Their 98%+ pass rates and robotic club victories speak for themselves.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
  }
];
