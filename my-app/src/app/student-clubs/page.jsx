import MainIntro from "../components/about/main_intro";
import AdmissionCareer from "../components/general/admission_cta";
import LeadershipCard from "../components/general/leadership-card";

/* ---------------- Breadcrumb ---------------- */
const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/campuslife.webp",
  pageTitle: "Student Clubs",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Student Clubs", href: "student-clubs" },
  ],
};

if (typeof window !== "undefined") {
  window.__breadcrumbData = breadcrumbData;
}

/* ---------------- DATA (Easy to Update) ---------------- */
const clubSections = [
  {
    id: 1,
    title: "Commerce & Management",
    clubs: [
      {
        name: "Finance Club – Bull",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/Finance+Club+%E2%80%93+Bull.webp",
      },
      {
        name: "Marketing Club – Mercadeo",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/Marketing+Club+-+Mercadeo.webp",
      },
      {
        name: "HR Club – Sapiens",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/HR+Club+-+Sapiens.webp",
      },
    ],
  },
  {
    id: 2,
    title: "Pharmacy",
    clubs: [
      {
        name: "Pharma Club",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/Pharmacy.webp",
      },

    ],
  },
  {
    id: 3,
    title: "Education",
    clubs: [
      {
        name: "Educraft Club",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/Educraft+Club.webp",
      },

    ],
  },
  {
    id: 4,
    title: "Arts & Humanities",
    clubs: [
      {
        name: "Behavioural Club",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/Behavioural+Club.webp",
      },
      {
        name: "Literary Club",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/Literary+Club.webp",
      },
      {
        name: "Bhoomi Club",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/Bhoomi+Club.webp",
      },
    ],

  },
  {
    id: 5,
    title: "Science",
    clubs: [
      {
        name: "The Microbiologists society India (MBSI) Student Chapter",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/(MBSI)+Student+Chapter.webp",
      },
      {
        name: "Green Club",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/Green+Club.webp",
      },

    ],

  },
  {
    id: 6,
    title: "Technology",
    clubs: [
      {
        name: "Spark Club (Electrical Engineering)",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/Spark+Club+(Electrical+Engineering).webp",
      },
      {
        name: "Avishkar Club (Civil Engineering)",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/Avishkar+Club+(Civil+Engineering).webp",
      },
      {
        name: "Royal Mechanical Club (Mechanical Engineering)",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/Royal+Mechanical+Club+(Mechanical+Engineering).webp",
      },
      {
        name: "Standard Club under BIS (Mechanical and Mining Engineering)",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/Standard+Club+under+BIS+(Mechanical+and+Mining+Engineering).webp",
      }
    ],

  },
  {
    id: 7,
    title: "Information Technology",
    clubs: [
      {
        name: "Infinity Club",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/Infinity+Club.webp",
      },

    ],

  },
  {
    id: 8,
    title: "Law",
    clubs: [
      {
        name: "Moot Court Club",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/Moot+Court+Club.webp",
      },
      {
        name: "Legal Aid Clinic",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/Legal+Aid+Clinic.webp",
      },
      {
        name: "Pro Bono Club",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-clubs/Pro+Bono+Club.webp",
      },
    ],

  },


];

/* ---------------- PAGE ---------------- */
export default function Page() {
  return (
    <>
      {/* Breadcrumb */}


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
      />

      {/* Universal Title + Subheading */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-stix text-[var(--foreground)] mb-3">
            Academic Clubs

          </h2>
          <p className="max-w-6xl mx-auto text-[var(--light-text-gray)]">
            Our academic clubs provide students with the resources and practical exposure that supplement their studies. We believe that knowledge should go beyond classroom studies, and students must be professionally prepared to take up any challenge in their field of study. Our academic clubs will expand their network and connect them with our faculty members.

          </p>
        </div>
      </section>

      {/* Club Sections */}
      {clubSections.map((section) => (
        <section key={section.id} className="bg-white">
          <div className="container mx-auto px-4 mt-5">

            {/* Smaller Section Title */}
            <h3 className="  text-[var(--foreground)] mb-8 text-center">
              {section.title}
            </h3>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.clubs.map((club, index) => (
                <div key={index} className="h-full">
                  <LeadershipCard
                    name={club.name}
                    title=""
                    image={club.image}
                    usePTagForName={true}
                    imageFit="contain"
                    imageContainerClassName="aspect-square"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <AdmissionCareer />
    </>
  );
}
