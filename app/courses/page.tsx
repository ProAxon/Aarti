'use client';

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { liveCourses, categories } from "@/data/courses";

const allCourses = liveCourses;

function CoursesPageContent() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [visibleCourses, setVisibleCourses] = useState(allCourses);
  const [isLoading, setIsLoading] = useState(false);

  // Initialize category from URL parameter
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  useEffect(() => {
    setIsLoading(true);

    const timeout = setTimeout(() => {
      const filtered = selectedCategory
        ? allCourses.filter((course) => course.category === selectedCategory)
        : allCourses;

      setVisibleCourses(filtered);
      setIsLoading(false);
    }, 250);

    return () => clearTimeout(timeout);
  }, [selectedCategory]);

  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory(null); // Deselect if already selected
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <>
      <Header />
      <main className="bg-gray-50">
        <section className="bg-primary py-10 md:py-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full" />
            <div className="absolute bottom-10 right-10 w-48 h-48 border-4 border-white rounded-full" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-3 md:mb-4">
              All Courses
            </h1>
            <p className="text-sm sm:text-base md:text-xl text-white/80 text-center max-w-3xl mx-auto">
              Skilling for every profession - From Arts/Commerce/Science to Engineers, Lawyers, Traders, Women entrepreneurs, and MSMEs
            </p>
          </div>
        </section>

        <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            {/* Main Category Filters */}
            <div className="mb-6 sm:mb-8 -mx-4">
              <div className="flex gap-3 overflow-x-auto px-4 pb-2 md:justify-center md:flex-wrap md:overflow-visible md:gap-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className={`px-4 py-2 text-sm md:px-6 md:text-base rounded-full font-medium transition shadow-sm whitespace-nowrap ${
                      selectedCategory === category
                        ? 'bg-secondary text-white shadow-md'
                        : 'bg-white text-black hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {selectedCategory && (
              <div className="mb-6 text-center">
                <p className="text-body">
                  Showing {visibleCourses.length} course{visibleCourses.length !== 1 ? 's' : ''} in {selectedCategory}
                </p>
              </div>
            )}

            {/* Courses Grid */}
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {Array.from({ length: 3 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm animate-pulse max-w-[95%] sm:max-w-none mx-auto"
                  >
                    <div className="h-44 sm:h-52 bg-gray-200" />
                    <div className="p-4 space-y-3">
                      <div className="h-4 bg-gray-200 rounded w-1/3" />
                      <div className="h-5 bg-gray-200 rounded w-4/5" />
                      <div className="h-4 bg-gray-200 rounded w-2/5" />
                    </div>
                  </div>
                ))}
              </div>
            ) : visibleCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {visibleCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-body">No courses found matching your filters.</p>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="mt-4 text-primary hover:underline"
                >
                  Clear filter
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default function CoursesPage() {
  return (
    <Suspense fallback={
      <>
        <Header />
        <main>
          <section className="bg-primary py-20">
            <div className="container mx-auto px-4">
              <h1 className="text-5xl font-bold text-white text-center mb-4">All Courses</h1>
            </div>
          </section>
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 text-center">
              <p className="text-body">Loading courses...</p>
            </div>
          </section>
        </main>
        <Footer />
      </>
    }>
      <CoursesPageContent />
    </Suspense>
  );
}

