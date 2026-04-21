import Link from 'next/link';
import Image from 'next/image';

interface Course {
  id: number;
  title: string;
  instructor?: string; // Not found in PDFs - optional
  price: number;
  rating?: number; // Not found in PDFs - optional
  students?: number; // Not found in PDFs - optional
  image: string;
  category: string;
}

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Link href={`/courses/${course.id}`}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group max-w-[95%] sm:max-w-none mx-auto">
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <button className="absolute top-4 right-4 min-w-[44px] min-h-[44px] w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-secondary hover:text-white transition active:scale-95 touch-manipulation">
            <svg className="w-3.5 h-3.5 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
        <div className="p-4 sm:p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
              {course.category}
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-black mb-3 line-clamp-2 group-hover:text-primary transition">
            {course.title}
          </h3>
          {/* Instructor, rating, and students not found in PDFs - commented out */}
          {/* {course.instructor && (
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gray-200 rounded-full" />
              <span className="text-paragraph">by {course.instructor}</span>
            </div>
          )} */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            {/* Rating and students not found in PDFs - commented out */}
            {/* {(course.rating || course.students) && (
              <div className="flex items-center gap-2">
                {course.rating && (
                  <div className="flex items-center text-yellow-500">
                    <span>★</span>
                    <span className="text-black font-semibold ml-1">{course.rating}</span>
                  </div>
                )}
                {course.students && (
                  <span className="text-paragraph text-sm">({course.students.toLocaleString()})</span>
                )}
              </div>
            )} */}
            <div className="flex items-center gap-1 text-gray-500 text-xs sm:text-sm">
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span>Multiple Lessons</span>
            </div>
            <div className="text-sm font-semibold">
              {course.price === 0 ? (
                <span className="text-green-600 bg-green-50 px-2.5 py-1 rounded-full text-[13px]">Free</span>
              ) : (
                <span className="text-secondary bg-secondary/10 px-2.5 py-1 rounded-full text-[13px]">
                  ₹{course.price.toLocaleString()}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
