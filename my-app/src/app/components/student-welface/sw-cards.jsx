"use client";

import Cards from "../ccrc/cards";

const PLACEHOLDER_IMAGE =
  "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png";

const swCardsData = [
  {
    title: "Tours & Trips",
    description:
      "Every year, we organise National & International trips for a fun learning experience.",
    imageSrc: PLACEHOLDER_IMAGE,
    logoSrc: "",
  },
  {
    title: "Cultural Events & Programs",
    description:
      "Every year, we organise Kalinga Utsav, Sports Day, and celebrate different cultural festivals.",
    imageSrc: PLACEHOLDER_IMAGE,
    logoSrc: "",
  },
  {
    title: "National Days Celebration",
    description:
      "We proudly celebrate National Days like Independence Day, Republic Day, and other important days.",
    imageSrc: PLACEHOLDER_IMAGE,
    logoSrc: "",
  },
  {
    title: "Inclusive & Supportive Environment",
    description:
      "We support every learner regardless of their religion or nationality. Together we grow with unity, respect, and equal opportunity.",
    imageSrc: PLACEHOLDER_IMAGE,
    logoSrc: "",
  },
  {
    title: "International Student Support",
    description:
      "We provide a vibrant learning environment for global students where ideas are nurtured and dreams are fulfilled.",
    imageSrc: PLACEHOLDER_IMAGE,
    logoSrc: "",
  },
  {
    title: "Counselling Support",
    description:
      "We have experienced counsellors at our campus who conduct one-on-one sessions with every student. Whether they are dealing with academic stress or any other issues, a dedicated counsellor will first listen and then take necessary action.",
    imageSrc: PLACEHOLDER_IMAGE,
    logoSrc: "",
  },
  {
    title: "Differently-Abled Students Support",
    description:
      "Our inclusive learning environment supports individuals who need special attention and support in their academic journey and personal development.",
    imageSrc: PLACEHOLDER_IMAGE,
    logoSrc: "",
  },
  {
    title: "Prevention Against Sexual Harassment",
    description:
      "We have a separate community that addresses issues and raises awareness to prevent sexual harassment cases.",
    imageSrc: PLACEHOLDER_IMAGE,
    logoSrc: "",
  },
  {
    title: "Anti-Ragging Support",
    description:
      "We follow a ‘Zero-Tolerance Policy’ towards ragging, and we take strict action against those who violate our policy.",
    imageSrc: PLACEHOLDER_IMAGE,
    logoSrc: "",
  },
  {
    title: "Grievance Redressal Cell",
    description:
      "Our cell records the complaints of each student, and the experts take necessary action to solve them.",
    imageSrc: PLACEHOLDER_IMAGE,
    logoSrc: "",
  },
  {
    title: "Health Clinic",
    description:
      "Our on-campus health clinic has an experienced doctor and nurse who ensure the well-being of our staff members and students by providing consultation and urgent care at no charge.",
    imageSrc: PLACEHOLDER_IMAGE,
    logoSrc: "",
  },
  {
    title: "Sanitary Napkins Vending Machines",
    description:
      "It is available in every girls’ washroom on campus and in hostels.",
    imageSrc: PLACEHOLDER_IMAGE,
    logoSrc: "",
  },
  {
    title: "Free Health Checkup Health Camps",
    description:
      "Every year, we organise free health checkup camps for our students and faculty members in collaboration with various hospitals.",
    imageSrc: PLACEHOLDER_IMAGE,
    logoSrc: "",
  },
  {
    title: "Blood Donation Camps",
    description:
      "We organise blood donation camps in which students and faculty members actively participate and support a good cause.",
    imageSrc: PLACEHOLDER_IMAGE
,
    logoSrc: "",
  },
  {
    title: "NCC",
    description:
      "Our NCC cadets develop leadership, discipline, confidence, and a sense of responsibility.",
    imageSrc: PLACEHOLDER_IMAGE,
    logoSrc: "",
  },
  {
    title: "NSS",
    description:
      "It encourages students to actively participate in community service and outreach programs.",
    imageSrc: PLACEHOLDER_IMAGE,
    logoSrc: "",
  },
  {
    title: "Sports",
    description:
      "We have spacious Indoor & Outdoor sports centres where students play different games and become champions.",
    imageSrc: PLACEHOLDER_IMAGE,
    logoSrc: "",
  },
  {
    title: "Hostel Facilities",
    description:
      "We have well-equipped hostels for girls and boys on our campus, where all necessary facilities are available for students.",
    imageSrc: PLACEHOLDER_IMAGE,
    logoSrc: "",
  },
  {
    title: "First Weeks",
    description:
      "Enrolling in a University is to enter into a new life, and students may initially feel lost and unsettled. We help them feel comfortable in hostels and even introduce them to their classmates and professors.",
    imageSrc: PLACEHOLDER_IMAGE,
    logoSrc: "",
  },
  {
    title: "FIRST-STEP Induction Programs",
    description:
      "Every year, we conduct FIRST-STEP Induction Programs for our freshers in which they meet with their professors, make new connections, understand college culture and policies, explore classrooms and student amenities, understand academic structure, and get motivational support for their new journey.",
    imageSrc: PLACEHOLDER_IMAGE,
    logoSrc: "",
  },
  {
    title: "Scholarships",
    description:
      "Obtain up to 100% scholarships as per our eligibility criteria and make your finances more manageable. Students who face financial difficulties at the time of admission can get scholarships such as merit-based, sports-based, entrance exam, content creators, and more.",
    imageSrc: PLACEHOLDER_IMAGE,
    logoSrc: "",
  },
];

export default function SwCards() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 pt-16">
        <h2 className="text-center mb-8">Our Student Welfare Initiatives</h2>
      </div>

      {/* Reusing existing Cards component */}
      <Cards cards={swCardsData} />
    </section>
  );
}
