'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { courseDetails } from '@/data/courseDetails';

interface CourseDetailPageProps {
  params: {
    id: string;
  };
}

const professions = [
  { name: 'Lawyers', emoji: '👨‍⚖️' },
  { name: 'Doctors', emoji: '👨‍⚕️' },
  { name: 'Teachers', emoji: '👨‍🏫' },
  { name: 'Engineers', emoji: '👨‍💼' },
  { name: 'Business Professionals', emoji: '💼' },
  { name: 'Traders', emoji: '🛒' },
  { name: 'Entrepreneurs', emoji: '👩‍💼' },
  { name: 'Students', emoji: '🎓' },
];

export default function CourseDetailPage({ params }: CourseDetailPageProps) {
  const courseData = courseDetails[params.id] ?? courseDetails['1'];
  const course = {
    id: params.id,
    ...courseData,
  };

  const [selectedProfession, setSelectedProfession] = useState<string | null>(null);

  const handleProfessionClick = (profession: string) => {
    setSelectedProfession((current) => (current === profession ? null : profession));
  };

  if (!courseDetails[params.id]) {
    return (
      <>
        <Header />
        <main className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-black mb-4">Course Not Found</h1>
            <p className="text-body mb-6">The course you are looking for does not exist.</p>
            <Link href="/courses" className="text-primary font-semibold hover:underline">
              View all courses
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg overflow-hidden shadow-md mb-6">
                  <div className="relative h-96 bg-gray-200">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <h1 className="text-3xl font-bold text-black mb-4">{course.title}</h1>
                  <p className="text-body text-lg mb-6">{course.description}</p>

                  <div className="mb-6 p-4 bg-blue-50 rounded-lg border-l-4 border-primary">
                    <h3 className="font-semibold text-black mb-2">Who is this course for?</h3>
                    <ul className="list-disc list-inside text-body space-y-1">
                      {courseData.targetAudience.map((audience, index) => (
                        <li key={index}>{audience}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6 bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-semibold text-black mb-2">Filter by Profession</h3>
                      <p className="text-sm text-paragraph">
                        Choose your profession to personalise how you view this course.
                      </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                      {professions.map((profession) => (
                        <button
                          key={profession.name}
                          onClick={() => handleProfessionClick(profession.name)}
                          className={`px-5 py-2 rounded-lg font-medium transition shadow-sm ${
                            selectedProfession === profession.name
                              ? 'bg-gradient-to-r from-primary to-secondary text-white border-2 border-primary'
                              : 'bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border border-primary/30 hover:from-primary/20 hover:to-secondary/20'
                          }`}
                        >
                          {profession.emoji} {profession.name}
                        </button>
                      ))}
                    </div>
                    {selectedProfession && (
                      <p className="mt-4 text-center text-sm text-body">
                        Viewing curriculum for:{' '}
                        <span className="font-semibold text-black">{selectedProfession}</span>
                      </p>
                    )}
                  </div>

                  <h2 className="text-2xl font-bold text-black mb-4">Final Outcomes</h2>
                  <p className="text-body mb-4">By the end of this course, participants will:</p>
                  <ul className="list-disc list-inside text-body space-y-2 mb-6">
                    {courseData.learningOutcomes.map((outcome, index) => (
                      <li key={index}>{outcome}</li>
                    ))}
                  </ul>

                  <h2 className="text-2xl font-bold text-black mb-4">Course Coverage</h2>
                  <div className="space-y-3">
                    {courseData.curriculum.map((item) => (
                      <div
                        key={item.id}
                        className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-semibold text-black">{item.title}</h3>
                            {item.description && (
                              <p className="text-sm text-body mt-1">{item.description}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                  <div className="text-3xl font-bold text-primary mb-4">
                    {course.price === 0 ? (
                      <span className="text-green-600">Free</span>
                    ) : (
                      <>
                        ₹{course.price.toLocaleString()}
                        <span className="text-lg text-body font-normal"> + GST</span>
                      </>
                    )}
                  </div>
                  <Link
                    href="/register"
                    className="block w-full bg-primary text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition mb-4"
                  >
                    Enroll Now
                  </Link>
                  <div className="space-y-4 text-body">
                    <div className="flex items-center">
                      <span className="font-semibold mr-2">Duration:</span>
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <span className="font-semibold mr-2">Level:</span>
                      {course.level}
                    </div>
                    <div className="flex items-center">
                      <span className="font-semibold mr-2">Language:</span>
                      {course.language}
                    </div>
                    <div className="flex items-center">
                      <span className="font-semibold mr-2">Category:</span>
                      {course.category}
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t">
                    <h3 className="font-semibold text-black mb-2">This course includes:</h3>
                    <ul className="space-y-2 text-body">
                      {course.includes.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
