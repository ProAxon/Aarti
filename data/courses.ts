export interface Course {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  live: boolean;
}

export const courses: Course[] = [
  {
    id: 1,
    title: 'Certificate Course in AI-Driven Basic IT (CCBIT)',
    price: 0,
    image: '/images/courses/courses1.jpg',
    category: 'IT & AI',
    live: true,
  },
  {
    id: 2,
    title: 'Certificate Course in Digital Marketing',
    price: 0,
    image: '/images/courses/courses2.jpg',
    category: 'Digital Marketing',
    live: true,
  },
  {
    id: 3,
    title: 'Certificate Course in Logistics Management',
    price: 0,
    image: '/images/courses/courses4.jpg',
    category: 'Logistics',
    live: true,
  },
  {
    id: 4,
    title: 'Cyber Awareness AI - Basic',
    price: 0,
    image: '/images/courses/courses3.jpg',
    category: 'Cyber Security',
    live: true,
  },
  {
    id: 5,
    title: 'Cyber Awareness AI - Prime',
    price: 0,
    image: '/images/courses/courses1.jpg',
    category: 'Cyber Security',
    live: true,
  },
  {
    id: 6,
    title: 'Cyber Smart AI - Prime',
    price: 0,
    image: '/images/courses/courses2.jpg',
    category: 'Cyber Security',
    live: true,
  },
  {
    id: 7,
    title: 'Certificate Course in Tally Essentials Comprehensive',
    price: 0,
    image: '/images/courses/courses3.jpg',
    category: 'Accounting',
    live: true,
  },
  {
    id: 8,
    title: 'AI Smart Data Management',
    price: 0,
    image: '/images/courses/courses4.jpg',
    category: 'Data Analytics',
    live: true,
  },
  {
    id: 9,
    title: 'Data Analytics - Level 1',
    price: 0,
    image: '/images/courses/courses1.jpg',
    category: 'Data Analytics',
    live: true,
  },
  {
    id: 10,
    title: 'Data Analytics - Level 2',
    price: 0,
    image: '/images/courses/courses2.jpg',
    category: 'Data Analytics',
    live: true,
  },
];

export const categories = [
  'IT & AI',
  'Digital Marketing',
  'Logistics',
  'Cyber Security',
  'Accounting',
  'Data Analytics',
];

export const liveCourses = courses.filter((course) => course.live);
