'use client'

import SectionHeading from '../general/SectionHeading';

export default function EmployeeBenefits({ counsellingAreas, headingTextColor }) {

  const defaultBenefits = [
    {
      id: 1,
      title: "Competitive Compensation",
      description: "We provide industry-aligned salary packages that reward expertise, performance, and dedication.",
      img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/careers/wages.svg",
    },
    {
      id: 2,
      title: "Professional Development",
      description: "Enhance your skills through ongoing training programs, faculty development workshops, and research collaborations.",
      img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/careers/professional-development.svg"
    },
    {
      id: 3,
      title: "Health & Wellness",
      description: "Comprehensive health coverage and wellness initiatives ensure the physical and mental well-being of our employees.",
      img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/careers/Health+%26+Wellness.svg"
    },
    {
      id: 4,
      title: "Work–Life Balance",
      description: "A positive and flexible work environment that promotes productivity while supporting personal commitments.",
      img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/careers/Work%E2%80%93Life+Balance.svg"
    },
    {
      id: 5,
      title: "Research & Innovation Support",
      description: "Access institutional funding, advanced facilities, and resources to pursue innovative research and academic excellence.",
      img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/academics/icons/Research.svg"
    },
    {
      id: 6,
      title: "Recognition & Growth",
      description: "We celebrate achievements through awards, promotions, and opportunities for career progression.",
      img: "https://kalinga-university.s3.ap-south-1.amazonaws.com/careers/Recognition+%26+Growth.svg"
    }
  ];

  const defaultData = {
    title: "Employee Benefits",
    description: "At Kalinga University, we recognize that our people are our greatest asset. We are committed to creating a supportive, inclusive, and growth-oriented workplace that encourages excellence, innovation, and well-being.",
    benefits: defaultBenefits
  };

  const data = counsellingAreas?.[0] || defaultData;
  const benefits = data.benefits || defaultBenefits;
  const title = data.title || "Employee Benefits";
  const description = data.description || "At Kalinga University, we recognize that our people are our greatest asset. We are committed to creating a supportive, inclusive, and growth-oriented workplace that encourages excellence, innovation, and well-being.";

  return (
    <section className="w-full max-w-[1249px] mx-auto py-20 px-2">
      <h2 className={`${headingTextColor || 'text-[var(--foreground)]'} text-center text-3xl sm:text-[40px] mb-4`}>{title}</h2>
      {description && (
        <p className="text-center text-[14px] text-[var(--light-text-gray)] max-w-3xl mx-auto mb-16">
          {description}
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {benefits.map((item) => (
          <div key={item.id} className="bg-[#FFEBD0] rounded-[10px] p-8 relative h-full">
            {item.img && (
              <div>
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-15 h-15 object-contain"
                  onError={(e) => {
                    // Fallback to a default icon if the image fails to load
                    e.target.onerror = null;
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzk3MkIyOCIgZD0iTTEyLDIuQTEwLDEwIDAgMCwwIDIsMTJBMTAsMTAgMCAwLDAgMTIsMjJBMTAsMTAgMCAwLDAgMjIsMTJBMTAsMTAgMCAwLDAgMTIsMk0xMiwyQTEwLDEwIDAgMCwxIDIyLDEyQTEwLDEwIDAgMCwxIDEyLDIyQTEwLDEwIDAgMCwxIDIsMTJBMTAsMTAgMCAwLDEgMTIsMk0xMiw0QTgsOCAwIDAsMCA0LDEyQTgsOCAwIDAsMCAxMiwyMEE4LDggMCAwLDAgMjAsMTJBOCw4IDAgMCwwIDEyLDRNMTIsMTBBMiwyIDAgMCwxIDE0LDEyQTIsMiAwIDAsMSAxMiwxNEEyLDIgMCAwLDEgMTAsMTJBMiwyIDAgMCwxIDEyLDEwWiIgLz48L3N2Zz4=';
                  }}
                />
              </div>
            )}
            

            <h3 className="text-[20px] mb-[10px] border-b border-[var(--dark-gray)] pb-2">{item.title}</h3>
            <p className="text-[var(--dark-gray)] text-[15px]">
              {item.description}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}
