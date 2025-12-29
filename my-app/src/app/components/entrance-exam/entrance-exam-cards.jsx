'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '../general/SectionHeading';

const EntranceExamCards = () => {
  const cards = [
    {
      id: 'kalsee',
      title: 'KALSEE',
      description: 'For All Programs Except BBA and MBA',
      imageUrl: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/why-this-course-1.webp',
      href: '/kalsee', // Update with actual route if needed
      borderColor: 'border-blue-500',
    },
    {
      id: 'kal-mat',
      title: 'KAL-MAT',
      description: 'For BBA and MBA Programs',
      imageUrl: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/entrance-exam/entrance-1.webp',
      href: '/kalmat', // Update with actual route if needed
      borderColor: 'border-gray-800',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {cards.map((card) => (
            <Link
              key={card.id}
              href={card.href}
              className="group relative block h-[400px] md:h-[500px] rounded-xl overflow-hidden border-4 transition-transform hover:scale-[1.02]"
              style={{ borderColor: card.id === 'kalsee' ? '#3b82f6' : '#1f2937' }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={card.imageUrl}
                  alt={card.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              {/* Top Right Arrow Icon */}
              <div className="absolute top-4 right-4 z-10">
                <div className="w-10 h-10 bg-[var(--button-red)] rounded flex items-center justify-center group-hover:bg-[var(--button-red)]/90 transition-colors">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path
                      d="M4 12L12 4M12 4H6M12 4V10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Bottom Text Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
                <SectionHeading
                  title={card.title}
                  titleClassName="text-white mb-2 uppercase tracking-wide"
                />
                <p className="text-white">
                  {card.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EntranceExamCards;

