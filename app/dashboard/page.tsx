import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const enrolledCourses = [
  {
    id: 1,
    title: 'Complete Web Development Bootcamp',
    progress: 65,
    instructor: 'John Doe',
    image: '/api/placeholder/400/250',
  },
  {
    id: 2,
    title: 'Data Science & Machine Learning',
    progress: 30,
    instructor: 'Jane Smith',
    image: '/api/placeholder/400/250',
  },
  {
    id: 3,
    title: 'UI/UX Design Masterclass',
    progress: 80,
    instructor: 'Mike Johnson',
    image: '/api/placeholder/400/250',
  },
];

export default function DashboardPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-br from-primary/10 via-white to-secondary/10 py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black text-center mb-4">My Dashboard</h1>
            <p className="text-base sm:text-lg md:text-xl text-body text-center max-w-3xl mx-auto">
              Continue your learning journey
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-bold text-black mb-2">3</h3>
                <p className="text-body">Enrolled Courses</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-bold text-black mb-2">12</h3>
                <p className="text-body">Completed Lessons</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-bold text-black mb-2">45</h3>
                <p className="text-body">Hours Watched</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-bold text-black mb-2">2</h3>
                <p className="text-body">Certificates</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black mb-6">My Courses</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {enrolledCourses.map((course) => (
                  <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative h-48 bg-gray-200">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-black mb-2">{course.title}</h3>
                      <p className="text-body mb-4">by {course.instructor}</p>
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-body">Progress</span>
                          <span className="text-sm font-semibold text-black">{course.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                      </div>
                      <Link
                        href={`/courses/${course.id}`}
                        className="block w-full bg-primary text-white text-center px-4 py-2 rounded-lg hover:bg-opacity-90 transition"
                      >
                        Continue Learning
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

