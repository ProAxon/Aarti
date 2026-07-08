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
    id: 5,
    title: 'Managerial Skills & Entrepreneurship',
    price: 0,
    image: '/images/courses/courses1.jpg',
    category: 'Management Skills',
    live: true,
  },
  {
    id: 6,
    title: 'Ability Enhancement Course',
    price: 2500,
    image: '/images/courses/courses2.jpg',
    category: 'Soft Skills',
    live: true,
  },
  {
    id: 8,
    title: 'Supply Chain Management',
    price: 0,
    image: '/images/courses/courses4.jpg',
    category: 'Management Skills',
    live: true,
  },
  {
    id: 9,
    title: 'Sales Training',
    price: 0,
    image: '/images/courses/courses1.jpg',
    category: 'Management Skills',
    live: true,
  },
];

export const categories = [
  'Management Skills',
  'Soft Skills',
  'Upscaling Skills',
  'Women Empowerment',
  'Profession / Trade',
];

export const liveCourses = courses.filter((course) => course.live);
