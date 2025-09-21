export interface TeacherMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  location?: string;
  expertise?: string[];
  links?: { label: string; url: string }[];
}

export const teachers: TeacherMember[] = [
  {
    id: 'founder-1',
    name: 'Ahmad Al-Sayed',
    role: 'Founder & Director',
    bio: 'Guiding the academic vision and quality of all Quran and Arabic programs with 12+ years of teaching and curriculum design.',
    image: '/middle-eastern-male-islamic-scholar.jpg',
    location: 'Cairo, Egypt',
    expertise: ['Curriculum', 'Qira’at', 'Leadership'],
    links: [{ label: 'LinkedIn', url: '#' }]
  },
  {
    id: 'cofounder-ops',
    name: 'Maryam Hassan',
    role: 'Operations Lead',
    bio: 'Oversees student onboarding, scheduling logistics, and parent communication ensuring smooth academic flow.',
    image: '/muslim-student-1.jpg',
    location: 'Dubai, UAE',
    expertise: ['Operations', 'Parent Success'],
  },
  {
    id: 'lead-quran',
    name: 'Sheikh Yusuf Karim',
    role: 'Lead Quran Instructor',
    bio: 'Specialist in tajweed delivery and structured memorization pathways with a focus on consistent retention.',
    image: '/middle-eastern-male-teacher-with-beard.jpg',
    location: 'Alexandria, Egypt',
    expertise: ['Tajweed', 'Hifdh Coaching'],
  },
  {
    id: 'arabic-head',
    name: 'Fatimah Al-Najjar',
    role: 'Head of Arabic Department',
    bio: 'Designs immersive Arabic learning sequences integrating modern pedagogy and classical linguistic depth.',
    image: '/spanish-woman-with-hijab-smiling.jpg',
    location: 'Doha, Qatar',
    expertise: ['Arabic', 'Pedagogy'],
  },
  {
    id: 'islamic-studies',
    name: 'Dr. Bilal Rahman',
    role: 'Islamic Studies Lecturer',
    bio: 'Bringing classical scholarship into accessible structured sessions covering creed, fiqh basics, and prophetic biography.',
    image: '/middle-eastern-male-teacher-with-beard.jpg',
    location: 'Istanbul, Türkiye',
    expertise: ['Aqeedah', 'Seerah', 'Fiqh'],
  },
  {
    id: 'student-success',
    name: 'Layla Mahmoud',
    role: 'Student Success Coordinator',
    bio: 'Ensures learners maintain momentum via tracking, reminders, and individualized study adjustments.',
    image: '/muslim-student-2.jpg',
    location: 'Remote',
    expertise: ['Engagement', 'Learning Pathways'],
  },
  {
    id: 'qasidah',
    name: 'Omar Idris',
    role: 'Recitation Quality Mentor',
    bio: 'Focuses on articulation refinement and applying tajweed consistently in live correction sessions.',
    image: '/muslim-student-3.jpg',
    location: 'Casablanca, Morocco',
    expertise: ['Makharij', 'Tajweed'],
  },
  {
    id: 'tech-lead',
    name: 'Sara Ali',
    role: 'Learning Platform Engineer',
    bio: 'Builds internal tools enhancing tracking visibility, scheduling automation, and progress analytics.',
    image: '/american-woman-smiling.png',
    location: 'Remote',
    expertise: ['Product', 'Automation'],
  },
];
