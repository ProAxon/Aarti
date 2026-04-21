import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: '10 Tips for Learning Web Development Faster',
    excerpt: 'Discover proven strategies to accelerate your web development learning journey...',
    author: 'Rahul Joshi',
    date: 'March 15, 2024',
    image: '/images/blog/blog1.jpg',
    category: 'Web Development',
  },
  {
    id: 2,
    title: 'The Future of Data Science in 2024',
    excerpt: 'Explore the latest trends and technologies shaping the data science landscape...',
    author: 'Priya Sharma',
    date: 'March 10, 2024',
    image: '/images/blog/blog2.jpg',
    category: 'Data Science',
  },
  {
    id: 3,
    title: 'UI/UX Design Principles Every Developer Should Know',
    excerpt: 'Learn essential design principles that will make your applications more user-friendly...',
    author: 'Sanjay Patil',
    date: 'March 5, 2024',
    image: '/images/blog/blog3.jpg',
    category: 'Design',
  },
  {
    id: 4,
    title: 'Getting Started with Mobile App Development',
    excerpt: 'A comprehensive guide to starting your mobile app development journey...',
    author: 'Aditi Kulkarni',
    date: 'February 28, 2024',
    image: '/images/blog/blog4.jpg',
    category: 'Mobile Development',
  },
  {
    id: 5,
    title: 'Digital Marketing Strategies for 2024',
    excerpt: 'Stay ahead with the latest digital marketing trends and strategies...',
    author: 'Vikram Shah',
    date: 'February 20, 2024',
    image: '/images/blog/blog5.jpg',
    category: 'Marketing',
  },
  {
    id: 6,
    title: 'Python for Beginners: Your First Steps',
    excerpt: 'Start your programming journey with Python, one of the most beginner-friendly languages...',
    author: 'Neha Deshmukh',
    date: 'February 15, 2024',
    image: '/images/blog/blog6.jpg',
    category: 'Programming',
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-primary py-12 sm:py-16 md:py-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full" />
            <div className="absolute bottom-10 right-10 w-48 h-48 border-4 border-white rounded-full" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-4">News &amp; Blogs</h1>
            <div className="flex items-center justify-center gap-2 text-white/80">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>›</span>
              <span>News &amp; Blogs</span>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`} className="block h-full">
                  <article className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group h-full flex flex-col">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4 bg-secondary text-white px-4 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h2 className="text-xl font-bold text-black mb-3 line-clamp-2 group-hover:text-primary transition">
                        {post.title}
                      </h2>
                      <p className="text-paragraph mb-4 line-clamp-2 flex-1">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-paragraph pt-4 border-t mt-auto">
                        <span>{post.author}</span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
