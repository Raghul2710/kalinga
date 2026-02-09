"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import MainIntro from "../components/about/main_intro";
import AdmissionCareer from "../components/general/admission_cta";
import FAQ from "../components/general/faq";
import VerticalTabs from "../components/general/VerticalTabs";

/* ---------------- DATA (Easy to Update) ---------------- */
const clubSections = [
  {
    id: 1,
    title: "Commerce & Management",
    clubs: [
      {
        name: "Finance Club – Bull",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/Finance+Club+%E2%80%93+Bull.webp",
        description: "The club is named after the symbol of optimism in financial markets. The Bull Club is dedicated to developing financial literacy and analytical acumen among students. Activities will include stock market simulations, budget planning & analysis, financial modelling sessions, guest lectures by financial analysts, and quizzes on banking and investment."
      },
      {
        name: "Marketing Club – Mercadeo",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/Marketing+Club+-+Mercadeo.webp",
        description: "The name of the marketing club is derived from “Mercadeo” (Spanish for marketing). Marcedeo provides a vibrant platform for students interested in brand building, digital marketing, and consumer behaviour. The club conducts ad-mad shows, marketing case study competitions, social media campaigns, business idea/plan competition - Ideathon, and brainstorming sessions on current market trends."
      },
      {
        name: "HR Club – Sapiens",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/HR+Club+-+Sapiens.webp",
        description: "The HR Club - Sapiens of our department of management studies organises workshops, role plays, HR quizzes, mock interviews, personality development sessions, and seminars on emerging HR practices. The club organises panel discussions and invites industry HRs to bridge classroom learning with real-world HR dynamics."
      },
    ],
  },
  {
    id: 2,
    title: "Pharmacy",
    clubs: [
      {
        name: "Pharma Club",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/Pharmacy.webp",
        description: "Our Pharma Club gives students a platform where they can learn and present their talents in our department of pharmaceutical sciences. With activities like workshops, competitions, real project work, and industrial visits, our students build exceptional practical skills in the pharmacy industry. The club promotes a friendly learning space where they can perform experiments, share ideas, expand their network, and develop innovative healthcare solutions."
      },
    ],
  },
  {
    id: 3,
    title: "Education",
    clubs: [
      {
        name: "Educraft Club",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/Educraft+Club.webp",
        description: "It is a platform that combines creativity, experiential learning, inclusive education, and holistic development of students. This club provides them with a real-world insight into different teaching methods by organizing various activities and projects that supplement the course curriculum while improving their communication and leadership skills."
      },
    ],
  },
  {
    id: 4,
    title: "Arts & Humanities",
    clubs: [
      {
        name: "Behavioural Club",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/Behavioural+Club.webp",
        description: "It organises various camps, workshops, and sessions on important topics like emotional well-being, gender sensitivity, and child rights. It makes students aware of social issues and develops the values of respect, kindness, and equality."
      },
      {
        name: "Literary Club",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/Literary+Club.webp",
        description: "Students who are passionate about reading, writing, poetry, storytelling, or debate can join the literary club and participate in various events and competitions."
      },
      {
        name: "Bhoomi Club",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/Bhoomi+Club.webp",
        description: "It promotes community welfare and social responsibility by organising donation camps, cleanliness camps, and volunteer programs that support the underprivileged and develop a spirit of service towards society."
      },
    ],
  },
  {
    id: 5,
    title: "Science",
    clubs: [
      {
        name: "The Microbiologists Society, India (MBSI) Student Chapter",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/(MBSI)+Student+Chapter.webp",
        description: "The club brings together students who are interested in microbiology and life sciences. Students explore, discover, and participate in workshops that connect them with experts. It organises microbiological research activities to generate curiosity among students, apart from textbook learning."
      },
      {
        name: "Green Club",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/Green+Club.webp",
        description: "The Green club turns students’ eco-conscious ideas into action. It conducts events, workshops, and guest lectures where students explore new sustainable solutions that can solve environmental challenges, and they apply this knowledge in developing eco-friendly practices."
      },
    ],
  },
  {
    id: 6,
    title: "Technology",
    clubs: [
      {
        name: "Spark Club (Electrical Engineering)",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/Spark+Club+(Electrical+Engineering).webp",
        description: "Do you love power systems, microelectronics, smart grids, or high-voltage engineering? At Spark Club, you will live what you have studied in your textbooks. From working on complex circuits to power systems, get the freedom to explore and innovate with projects that will prepare you for the future."
      },
      {
        name: "Avishkar Club (Civil Engineering)",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/Avishkar+Club+(Civil+Engineering).webp",
        description: "Have you heard about eco-friendly structures, innovative construction techniques, or carbon-neutral buildings? Well, at Avishkar Club, you will get real-world engineering knowledge that will set you apart from other civil engineers. You will not only learn about designing urban construction but also know its positive impact on the environment."
      },
      {
        name: "Royal Mechanical Club (Mechanical Engineering)",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/Royal+Mechanical+Club+(Mechanical+Engineering).webp",
        description: "Curious about knowing the working mechanics of machines? Implement your theoretical learning into mechanical concepts, and experience a real transition. Royal Club will make you challenge your mechanical skills by giving you practical experience through workshops and projects. Join the Royal Club and turn your passion into an innovation!"
      },
      {
        name: "Standard Club under BIS (Mechanical and Mining Engineering)",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/Standard+Club+under+BIS+(Mechanical+and+Mining+Engineering).webp",
        description: "Do you know how standards impact industries and innovation? Standardisation plays a key role in maintaining product quality and safety. Our Standard Club of the faculty of technology is giving you a platform to explore its influence through workshops, seminars, quiz competitions, and debates. With the Bureau of Indian Standards' support and expert mentorship, you’ll learn to redefine quality and set new trends."
      }
    ],
  },
  {
    id: 7,
    title: "Information Technology",
    clubs: [
      {
        name: "Infinity Club",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/Infinity+Club.webp",
        description: "We just don’t talk about technology, but we believe in creating it. Join the Infinity Club and turn your curiosity into powerful tech. Explore coding, cybersecurity, artificial intelligence, data science, machine learning, Internet of Things (IoT), and Robotics & Automation through practical projects and workshops provided by the club. Take advantage of the resources and expert mentorship, and learn to debug the most complex problems."
      },
    ],
  },
  {
    id: 8,
    title: "Law",
    clubs: [
      {
        name: "Moot Court Club",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/Moot+Court+Club.webp",
        description: "We have a well-furnished moot court on our campus that provides invaluable opportunities to our law students in developing advocacy skills in a practical setting. From researching legal cases, preparing petitions, or presenting arguments, our students get a complete understanding of the courtroom proceedings from the best private law colleges of India. Here, students learn how to present their arguments, and they even get the opportunity to participate in moot court competitions."
      },
      {
        name: "Legal Aid Clinic",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/Legal+Aid+Clinic.webp",
        description: "The Legal Aid Clinic is a community-based initiative that provides support to people who are unable to afford legal services. It aims to promote justice, raise legal awareness, and assist underprivileged individuals with legal matters."
      },
      {
        name: "Pro Bono Club",
        image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/Pro+Bono+Club.webp",
        description: "A Pro Bono Club is a student or community-based organisation that provides free legal services to people who cannot afford to pay for legal representation. The club's goal is to provide legal services to the underserved while giving our students real-world exposure."
      },
    ],
  },
];

/* ---------------- PAGE ---------------- */
export default function Page() {
  const pathname = usePathname();

  // Transform clubSections into tabs format for VerticalTabs
  const tabs = clubSections.map((section) => ({
    id: `tab-${section.id}`,
    label: section.title,
    content: (
      <div>
        <h3 className="font-stix text-[var(--foreground)] text-2xl mb-6">
          {section.title}
        </h3>

        <FAQ
          items={section.clubs.map((club, index) => ({
            id: index,
            question: club.name,
            component: (
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <div className="rounded-xl overflow-hidden bg-gray-50 border border-gray-100 aspect-video md:aspect-[4/3]">
                    <img
                      src={club.image}
                      alt={club.name}
                      className="w-full h-full object-contain p-4 mix-blend-multiply"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <p className="text-[var(--light-text-gray)] leading-relaxed text-base">
                    {club.description}
                  </p>
                </div>
              </div>
            )
          }))}
          showHeading={false}
          noSection={true}
          pyClassName="py-0"
        />
      </div>
    ),
  }));

  return (
    <>
      {/* Intro */}
      <MainIntro
        title="Student Clubs"
        description={[
          "The vibrant clubs of KU are filled with talented and passionate students who are always ready to showcase their creative skills and develop interests in engaging activities. Our academic clubs motivate students to learn and grow with confidence inside and outside their classrooms. With our clubs, students develop leadership qualities, learn new skills, work in teams, and make unforgettable memories.",
        ]}
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/campus-life-intro-1.webp"
        imageAlt="Student Clubs"
        showButton={false}
        showKnowMore={false}
        sectionClassName="py-8"
        disableClipPath={false}
      />

      {/* Universal Title + Subheading */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-stix text-[var(--foreground)] mb-3">
            Academic Clubs
          </h2>
          <p className="max-w-5xl mx-auto text-[var(--light-text-gray)]">
            Our academic clubs provide students with the resources and practical exposure that supplement their studies. We believe that knowledge should go beyond classroom studies, and students must be professionally prepared to take up any challenge in their field of study. Our academic clubs will expand their network and connect them with our faculty members.
          </p>
        </div>
      </section>

      {/* Vertical Tabs Section */}
      <div className="container mx-auto px-4">
        <VerticalTabs tabs={tabs} />
      </div>

      {/* CTA */}
      <AdmissionCareer />
    </>
  );
}
