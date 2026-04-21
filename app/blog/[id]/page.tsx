import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = {
    id: params.id,
    title: '10 Tips for Learning Web Development Faster',
    author: 'John Doe',
    date: 'March 15, 2024',
    image: '/api/placeholder/1200/600',
    category: 'Web Development',
    content: `
      <p>Learning web development can be challenging, but with the right approach, you can accelerate your progress significantly. Here are 10 proven tips to help you learn web development faster:</p>
      
      <h2>1. Start with the Fundamentals</h2>
      <p>Before diving into frameworks and libraries, make sure you have a solid understanding of HTML, CSS, and JavaScript. These are the building blocks of web development.</p>
      
      <h2>2. Practice Regularly</h2>
      <p>Consistency is key. Even 30 minutes of daily practice is better than cramming for hours once a week. Set aside dedicated time each day for coding.</p>
      
      <h2>3. Build Real Projects</h2>
      <p>Don't just follow tutorials. Start building your own projects as soon as possible. This will help you understand how everything fits together.</p>
      
      <h2>4. Join a Community</h2>
      <p>Connect with other learners and developers. Join forums, Discord servers, or local meetups. Learning with others can be incredibly motivating.</p>
      
      <h2>5. Read Code</h2>
      <p>Spend time reading code written by experienced developers. GitHub is a great resource for this. Try to understand how and why they wrote their code the way they did.</p>
      
      <h2>6. Use Version Control</h2>
      <p>Learn Git and GitHub early. Version control is essential for any developer, and it will help you track your progress and collaborate with others.</p>
      
      <h2>7. Don't Be Afraid to Break Things</h2>
      <p>Experiment and try things out. Making mistakes is part of the learning process. When something breaks, you'll learn how to fix it.</p>
      
      <h2>8. Focus on One Thing at a Time</h2>
      <p>Don't try to learn everything at once. Pick one technology or concept and master it before moving on to the next.</p>
      
      <h2>9. Take Notes</h2>
      <p>Document what you learn. Write down concepts, code snippets, and solutions to problems. This will help you remember and reference information later.</p>
      
      <h2>10. Stay Curious</h2>
      <p>Web development is constantly evolving. Stay curious, keep learning, and don't be afraid to explore new technologies and techniques.</p>
      
      <p>Remember, learning web development is a marathon, not a sprint. Be patient with yourself and celebrate your progress along the way!</p>
    `,
  };

  return (
    <>
      <Header />
      <main>
        <article className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link
                href="/blog"
                className="text-primary hover:underline mb-4 inline-block"
              >
                ← Back to Blog
              </Link>
              
              <div className="text-sm text-primary mb-4">{post.category}</div>
              <h1 className="text-4xl font-bold text-black mb-4">{post.title}</h1>
              
              <div className="flex items-center space-x-4 text-body mb-8">
                <span>By {post.author}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>

              <div className="relative h-96 bg-gray-200 mb-8 rounded-lg overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

