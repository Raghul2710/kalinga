"use client"

// DOMMatrix polyfill for SSR - must be before any motion imports
if (typeof window === 'undefined' && typeof global !== 'undefined' && typeof global.DOMMatrix === 'undefined') {
  global.DOMMatrix = class DOMMatrix {
    constructor(init) {
      if (typeof init === 'string') {
        this.a = 1; this.b = 0; this.c = 0; this.d = 1; this.e = 0; this.f = 0;
      } else if (init) {
        this.a = init.a ?? 1; this.b = init.b ?? 0; this.c = init.c ?? 0;
        this.d = init.d ?? 1; this.e = init.e ?? 0; this.f = init.f ?? 0;
      } else {
        this.a = 1; this.b = 0; this.c = 0; this.d = 1; this.e = 0; this.f = 0;
      }
    }
    multiply(other) {
      return new DOMMatrix({
        a: this.a * other.a + this.c * other.b,
        b: this.b * other.a + this.d * other.b,
        c: this.a * other.c + this.c * other.d,
        d: this.b * other.c + this.d * other.d,
        e: this.a * other.e + this.c * other.f + this.e,
        f: this.b * other.e + this.d * other.f + this.f,
      });
    }
    translate(x, y) {
      return this.multiply(new DOMMatrix({ a: 1, b: 0, c: 0, d: 1, e: x, f: y }));
    }
    scale(x, y) {
      return this.multiply(new DOMMatrix({ a: x, b: 0, c: 0, d: y || x, e: 0, f: 0 }));
    }
    rotate(angle) {
      const rad = (angle * Math.PI) / 180;
      const cos = Math.cos(rad);
      const sin = Math.sin(rad);
      return this.multiply(new DOMMatrix({ a: cos, b: sin, c: -sin, d: cos, e: 0, f: 0 }));
    }
    toString() {
      return `matrix(${this.a}, ${this.b}, ${this.c}, ${this.d}, ${this.e}, ${this.f})`;
    }
  };
}

import dynamicImport from 'next/dynamic';
import PublicationGrid from "../components/research/publication-grid";
import UGCLogo from "../components/research/ugc_logo";
import UpcomingConference from "../components/research/upcoming_conference";
import ProgramsOffered from "../components/department/programs-offered";
import OrganogramOfKalinga from "../components/about/organogram_of_kalinga";
import MainIntro from "../components/about/main_intro";
import QuickLinks from "../components/general/quick_links";
import FAQ from "../components/general/faq";
import ResearchSixGridButtons from "../components/research/research_six_grid-buttons";
import AdmissionCareer from "../components/general/admission_cta";
import UpcomingConferences from "../components/research/upcoming_conference";
import MentorIntro from "../components/department/dept_head_intro";
import CenterOfExcellence from "../components/about/center_of_excellence";
import AwardsScrollbar from "../components/home/awards-scrollbar";
import ImageContent from "../components/ccrc/imagecontent";
import DataTable from "@/app/components/general/data-table";
import SectionHeading from "@/app/components/general/SectionHeading";
import AlumniForm from "../components/forms/AlumniForm";
import ContactSection from "../components/cif/contact_section";
import ImageListItem from "@/app/components/ccrc/imagelistitem";
import VisionMission from "@/app/components/about/vision-mission";

// Dynamically import components that might use motion/react to prevent SSR issues
const Testimonials = dynamicImport(() => import("../components/home/Testimonials"), { ssr: false });
const Gallery = dynamicImport(() => import("@/app/components/general/gallery"), { ssr: false });
const MediaCardSlider = dynamicImport(() => import("@/app/components/general/media-card-slider"), { ssr: false });

// Disable static generation to prevent SSR issues with DOMMatrix
export const dynamic = 'force-dynamic';

if (typeof window !== 'undefined') {

}

export default function Alumini() {
  const videoItems = [
    {
      id: 1,
      name: "Video 1",
      title: "Ms. Vaishali Baghel",

      videoUrl: "https://cdn.kalingauniversity.ac.in/alumini/Vaishali+Baghel+Reel.mp4",
      thumbnail: "https://cdn.kalingauniversity.ac.in/alumini/image-test-2.webp",
    },
    {
      id: 2,
      name: "Video 2",
      title: "Ms. Kajal Pandey",
      thumbnail: "https://cdn.kalingauniversity.ac.in/alumini/Kajal+Pandey_01.webp",
      videoUrl: "https://cdn.kalingauniversity.ac.in/alumini/kajal+Pandey+Final.mp4",
    },
    {
      id: 3,
      name: "Video 3",
      title: "Mr. Ayush Khare",

      videoUrl: "https://cdn.kalingauniversity.ac.in/alumini/Mr.+Ayush+Khare+Reel.mp4",
      thumbnail: "https://cdn.kalingauniversity.ac.in/alumini/Ayush+Khare_01.webp",
    },


  ];
  const testimonials = [{
    id: 1,
    name: "Shubham Sharma",
    year: "B.Tech (2015-19)",
    role: "Senior Software Developer,Oracle India Pvt. Ltd",
    quote: "Shubham Sharma, an alumnus of Kalinga University, was a passionate engineering student, and his placement at Oracle India Pvt. Ltd. as a Senior Software Developer is truly inspiring. He was always attentive in the classroom and cleared all his doubts with the professors immediately. He even used to participate in workshops and hands-on training programs, which made him an expert in his field. His dedication to learning something new every day made him successful in his career.",
    image: "https://cdn.kalingauniversity.ac.in/alumini/Shubham+Sharma.webp",
    theme: "orange"
  },
  {
    id: 2,
    name: "Nitin Yadav",
    year: "MBA (2021-23)",
    role: "Wanfeng Aluminum Wheels Ltd. as Executive HR",
    quote: "By pursuing an MBA from Kalinga, Nitin developed excellent communication skills and a strong understanding of people, which made him land his dream job at Wanfeng Aluminum Wheels Ltd as an executive HR. He was always active in the classroom and participated in different industry training programs and workshops, which gave him valuable networking opportunities. We are proud of his achievements and wish him continued success.",
    image: "https://cdn.kalingauniversity.ac.in/alumini/Nitin+Yadav.webp",
    theme: "orange"
  },
  {
    id: 3,
    name: "Kajal Pandey",
    year: "LLM (2022-24)",
    role: "Awarded the Golden Globe Eminence Award for Holding 13 World Records ",
    quote: "Kajal was always known for her unstoppable determination. During her time at the University, she explored new ideas and took up challenges that helped her achieve the Golden Globe Eminence Award for holding 13 World Records. She created history with her hard work, confidence, and self-belief, and set a benchmark for other students. We proudly celebrate her success and wish her all the best in her career.",
    image: "https://cdn.kalingauniversity.ac.in/alumini/Kajal+Pandey_01.webp",
    theme: "orange"
  },
  {
    id: 4,
    name: "Nitish Rana ",
    year: "BA (2013-16)",
    role: "Indian Cricketer, IPL, Player of Team KKR",
    quote: "Nitish, our former student, had always shown a passion for cricket apart from his academic studies. His never-give-up attitude and love for cricket made him stand out as a player in the IPL Match. Through rigorous practice and training sessions, he refined his skills and became an outstanding player. He became an inspiration for other students, and we are proud of his accomplishments.",
    image: "https://cdn.kalingauniversity.ac.in/alumini/NITISH+RANA.webp",
    theme: "orange"
  },
  {
    id: 5,
    name: "Prateek Singh Thakur",
    year: "MBA (2016-18)",
    role: "International Medalist in Wushu & Kickboxing (National and European Championships) ",
    quote: "Prateek Singh Thakur, an MBA alumnus of Kalinga University, has won various medals in National and International competitions. His achievements include: Silver medal in Wako Senior National Kick Boxing Championship, Visakhapatnam (AP) 2017; Gold medal in the European International Wushu Championship at Yerevan, Armenia, 2017; Silver Medal in All India University Wushu Championship at Patiala (Punjab), 2016. With years of hard work and training, he proved that nothing is impossible and conquered every challenge. His commitment and strong willpower turned into an incredible achievement and an inspiration to young athletes.",
    image: "https://cdn.kalingauniversity.ac.in/alumini/PRATEEK+SINGH+THAKUR.webp",
    theme: "orange"
  },
  {
    id: 6,
    name: "Shreya Mallick ",
    year: "B.Tech (2015-19)",
    role: "First Prize Winner – International Dance Competition, Dubai (2017)",
    quote: "Apart from her engineering studies, Shreya has always followed her passion for Indian classical dance. With grace, expressions, and confidence, she won First Prize in the 2017 International Dance Competition held in Dubai. She has set a shining example for young artists, proving that passion for your hobby can take you to a global stage.",
    image: "https://cdn.kalingauniversity.ac.in/alumini/Shreya+Mallik.webp",
    theme: "orange"
  },
  {
    id: 7,
    name: "Sumit Nagal",
    year: "BA (2017-20)",
    role: "Indian Tennis Player – Selected to Represent India in Men’s Singles at the Tokyo Olympics",
    quote: "From the classroom to the global tennis court, Sumit has proved what true dedication and spirit can achieve. With his intensive Tennis training, he was selected in the Indian Team for the Tokyo Olympics in 2021. He achieved his career-best world No. 68 in tennis singles rankings in 2024. He saw every challenge as an opportunity and fought every tournament until he achieved his dream. We are proud of his phenomenal achievement and the honour he brought to our institute. ",
    image: "https://cdn.kalingauniversity.ac.in/alumini/Sumit+Nagal.webp",
    theme: "orange"
  },
  {
    id: 8,
    name: "Pallavi Bareth ",
    year: "B.Sc. FD (2018-21)",
    role: "Assistant Costume Designer & Stylist – The Kapil Sharma Show",
    quote: "An innovative fashion artist and trendsetter, Pallavi, our Fashion Designing alumna, has beaten all the odds and was selected as an Assistant Costume Designer and Stylist in the popular TV Program, The Kapil Sharma Show. She has always come up with unique ideas and concepts, which kept her at the forefront among other FD students. During her academic year, she was always involved in hands-on learning programs & developed new skills, which took her to national television.",
    image: "https://cdn.kalingauniversity.ac.in/alumini/Pallvi+Bareth.webp",
    theme: "orange"
  },
  {
    id: 9,
    name: "Vaishali Baghel",
    year: "LLB (2022-24)",
    role: "Cleared the Chhattisgarh Judiciary Exam",
    quote: "Vaishali Baghel was a dedicated student of her batch and during her academic year, she developed a strong understanding of Law and its principles. With her focus on in-depth learning of every legal concept and live practice in the moot court of Kalinga, she cleared the Chhattisgarh Judiciary Examination. Her achievement is an inspiring milestone, and we proudly recognise her success. ",
    image: "https://cdn.kalingauniversity.ac.in/alumini/Vaishali++baghel.webp",
    theme: "orange"
  },
  {
    id: 10,
    name: "Ayush Khare",
    year: "M.Tech (2018-20)",
    role: "Selected in UPSC - 2019, Rank 267",
    quote: "From the beginning, Ayush, our M.Tech alumnus, was a dedicated student who balanced his academic studies along with government exam preparation and secured an outstanding rank in the UPSC exam in 2019. He mastered every concept and cleared his doubts with the dedicated professors. With proper planning and preparation, he has achieved an impeccable score in one of India’s toughest examinations. We feel honoured that he is a part of our University.",
    image: "https://cdn.kalingauniversity.ac.in/alumini/Ayush+Khare_01.webp",
    theme: "orange"
  },
  {
    id: 11,
    name: "Ashita Verma",
    year: "LLB (2018-20)",
    role: "Senior Manager at Zepto ",
    quote: "Ashita has carved a niche for herself in the corporate world. From the beginning, her vision and goal were clear. With constant determination and analytical skills, she achieved a Master of Law and secured a reputable position as a Senior Manager at Zepto. She developed practical skills in our University's moot court sessions, and we are proud of her successful career.",
    image: "https://cdn.kalingauniversity.ac.in/alumini/Ashita+Verma.webp",
    theme: "orange"
  },
  {
    id: 12,
    name: "Shringee Sharma",
    year: "MBA (2019-21)",
    role: "Represented India at the World Cup Woodball Championship 2019, Uganda (5th Place)",
    quote: "Shringee’s journey at Kalinga University was filled with determination and competitive spirit. While pursuing his MBA, he also practiced Woodball and prepared to compete on the global stage. His discipline and hard work earned him the honour of representing India in the World Cup Woodball Championship - 2019, Uganda, and he became the first male representative of Chhattisgarh. We are proud of his outstanding accomplishment and the inspiration he brings to young athletes.",
    image: "https://cdn.kalingauniversity.ac.in/alumini/Shringee+Sharma.webp",
    theme: "orange"
  }
  ]
  const data = [
    {
      id: 1,
      name: "Ravi Kumar",
      title: "Senior Software Engineer, Infosys",
    },
    {
      id: 2,
      name: "Ananya Singh",
      title: "Product Manager, TCS",
    },
    {
      id: 3,
      name: "Mohit Verma",
      title: "Data Analyst, Deloitte",
    },
  ];
  const columns = [
    {
      id: 1,
      key: "name",
      label: "Name of member",
      width: "w-48",
    },
    {
      id: 2,
      key: "title",
      label: "Title",
      width: "w-48",
    },
  ];

  const newsConferences = [
    {
      id: 1,
      title: "Inspiring Career Guidance Session by Diksha",
      date: "December 14 · 2025",
      category: "Career Development & Entrepreneurship",
      description: "Diksha conducted an inspiring session for the students of Kalinga University and shared key insights and industry trends, helping students achieve their career goals. She explained that apart from academic learning, they need to develop practical knowledge of the subject as well through internships and project work. She also emphasised the importance of communication skills, networking skills, and confidence required to clear different interview rounds. Her session was not just focused on corporate jobs, but on how students can start their own startup venture. Students actively participated in her session and asked queries about their career goals. ",
      image: "https://cdn.kalingauniversity.ac.in/alumini/Alumni+Talk%2C+Ms.+Diksha+Bhimte.png"
    },
    {
      id: 2,
      title: "Career Guidance Session by Nabodita Sarma",
      date: "December 16 · 2025",
      category: "Engineering Career Development",
      description: "Nabodita Sarma conducted an insightful session for the students of Kalinga University on how they build a successful career in the engineering field. She shared practical tips on how to focus on skill development by attending workshops, conferences, hands-on training programs, classroom activities, internships, and self-exploration. She shared her personal experience and highlighted the importance of continuous learning for both academic and professional growth. Her session clarified the doubts of the budding engineers, and they also learned tips and tricks on how to prepare effective resumes and crack job interviews at big companies.",
      image: "https://cdn.kalingauniversity.ac.in/alumini/Alumni+Talk%2C+MS.+NABODITA+SARMAs.png"
    }

  ];
  const centres = [
    {
      id: 1,
      name: "VC as Vice Chancellor as Ex officio Patron",
      title: "Rapid prototyping & mentoring",
    },
    {
      id: 2,
      name: "Alumni as President",
      title: "Rapid prototyping & mentoring",
    },
    {
      id: 3,
      name: "Alumni as Vice President",
      title: "Rapid prototyping & mentoring",
    },
    {
      id: 4,
      name: "Two Alumni as Members",
      title: "Rapid prototyping & mentoring",
    },
    {
      id: 5,
      name: "Registrar as Ex officio Secretary",
      title: "Rapid prototyping & mentoring",
    },
  ];
  const galleryImages = [
    {
      id: 1,
      image: "https://cdn.kalingauniversity.ac.in/alumini/alumni-Glimpse1.webp",
      alt: "alumni-Glimpse1",
    },
    {
      id: 1,
      image: "https://cdn.kalingauniversity.ac.in/alumini/alumni-Glimpse2.webp",
      alt: "alumni-Glimpse2",
    },
    {
      id: 3,
      image: "https://cdn.kalingauniversity.ac.in/alumini/alumni-Glimpse3.webp",
      alt: "alumni-Glimpse3",
    },
    {
      id: 4,
      image: "https://cdn.kalingauniversity.ac.in/alumini/alumni-Glimpse4.webp",
      alt: "alumni-Glimpse4",
    },
    {
      id: 5,
      image: "https://cdn.kalingauniversity.ac.in/alumini/alumini-Glimpse5.webp",
      alt: "alumni-Glimpse4",
    },
    {
      id: 6,
      image: "https://cdn.kalingauniversity.ac.in/alumini/alumini-Glimpse6.webp",
      alt: "alumni-Glimpse4",
    },
    {
      id: 7,
      image: "https://cdn.kalingauniversity.ac.in/alumini/alumini-Glimpse7.webp",
      alt: "alumni-Glimpse4",
    },

    {
      id: 8,
      image: "https://cdn.kalingauniversity.ac.in/alumini/alumini-Glimpse9.webp",
      alt: "alumni-Glimpse4",
    },

  ];
  // const AlumniMeetImages = [
  //   {
  //     id: 1,
  //     image: "https://cdn.kalingauniversity.ac.in/alumini/Alumni+Talk%2C+MS.+NABODITA+SARMAs.png",
  //     alt: "Alumni Talk, Ms. Nabodita Sarma",
  //   },
  //   {
  //     id: 2,
  //     image: "https://cdn.kalingauniversity.ac.in/alumini/Alumni+Talk%2C+Ms.+Diksha+Bhimte.png",
  //     alt: "Alumni Talk, Ms. Diksha Bhimte",
  //   }

  // ];
  const Items = [
    {
      id: 1,
      text: "To share knowledge and experiences with current students and support them in their professional journey."
    },
    {
      id: 2,
      text: "To organise mentorship programs and alumni talks to prepare students for future careers."
    },
    {
      id: 3,
      text: "To recognise the academic and professional achievements of alumni."
    },
    {
      id: 4,
      text: "To encourage the students to always be involved in research work, workshops, startups, and social and cultural events for an all-around development."
    },
    {
      id: 5,
      text: "To encourage alumni to participate in events and share ideas and expertise for the continuous growth of students."
    },
    {
      id: 6,
      text: "To inspire students to get involved in community development projects and social service actively."
    }
  ]

  const visionMissionData = [{
    visionTitle: "Vision",
    missionTitle: "Mission",
    visionText: "To create an alumni community that empowers current students towards academic and professional excellence.",
    missionText:
      "To actively engage our alumni and current students through events and programs, while supporting knowledge exchange, academic and professional growth, and lifelong learning. ",
    imageAlt: "Vision and Mission",
    className: "",
    showImage: false,
  }];

  return (
    <div>

      <ImageContent postTitle="Continuing the Legacy of Success Together" subtitleclassName="!hidden" titleClassName="!hidden" imageSrc="https://cdn.kalingauniversity.ac.in/alumini/Alumni+1+1.webp" title="About the KU Alumni Association" description="The Kalinga University’s alumni network is an open platform where our students share their experiences and build lifelong connections. More than creating a network, our current students and alumni from different academic backgrounds share their experiences from their professional journey, offer tips and tricks on how to crack any job interview, and motivate candidates. Through alumni talks, collaborations, and mentorship programs, our current students learn about industry insights and new-age skills so that they can stand out in job interviews. The association's members also stay informed about the latest university achievements and activities. " />
      <ImageListItem
        items={Items}
        description=""
        imageSrc="https://cdn.kalingauniversity.ac.in/placement/placement-intro.jpg"
        title="Objectives"
        className="!bg-[var(--white)]"
        headingClassName="!text-[var(--black)]"
        textClassName="!text-[var(--black)]"
      />
      <VisionMission data={visionMissionData} showImg={false} />
      <Testimonials
        testimonials={testimonials}
        className="bg-[var(--dark-blue)]"
        subtitle="Alumni Success Stories"
        title="Proudly Presenting the Remarkable Achievements of Kalinga University Alumni"
        titleClassName="!text-white"
        subtitleClassName="!text-white"
        subtitleTextColor="!text-white"
      />
      <OrganogramOfKalinga
        title="Become a Member Now"
        description="The Kalinga University Alumni Network is built on trust, connection, and shared mission. Become a part of the KU Alumni Association and avail exclusive opportunities."
        buttonLabel="Explore Now"
        href="https://cdn.kalingauniversity.ac.in/alumini/Alumni.pdf"
        useContainer={true}

      />
      <Gallery title="Glimpses" images={galleryImages} />

      <MediaCardSlider
        categoryTitle=""
        title="Hear From Our Alumni"
        videoItems={videoItems}
        cardBgClass="bg-white"
        nameTextClass="text-[var(--button-red)]"
        descriptionTextClass=""
        swiperClassName="ccrc-video-slider"
      />



      <UpcomingConferences
        conferences={newsConferences}
        title="Alumni Talks"
        href="/contact-us"
        description="Their Powerful Session Inspired Every Student to Achieve Their Dreams."
      />
      <OrganogramOfKalinga
        title="Alumni Members"
        description=""
        buttonLabel="Explore Now"
        href="https://cdn.kalingauniversity.ac.in/alumini/alumni-details.pdf"
        useContainer={true}

      />
      {/* <Gallery title="Alumini talk" images={AlumniMeetImages} /> */}
      {/* <CenterOfExcellence
        centres={centres}
        title=" Alumni Cell"
        nameOnly={true}
        showDescription={false}
      /> */}
      {/* <div className="py-16">
        <SectionHeading
          title="Members of Our Alumni Association"
          titleClassName="text-center py-5"
        />
        <DataTable
          data={data}
          columns={columns}
          className=""
        />
      </div> */}
      <AlumniForm />
      <ContactSection
        title="Contact Us"
        mail="cif@kalingauniversity.ac.in"
        phone="+91 7880135440"
        phone2="+91 7024116966"
        address="Central Instrumentation Facility, Kalinga University, Kotni, Near Mantralaya, Naya Raipur, CG - 492101"
      />



      <AdmissionCareer />
    </div>
  );
}