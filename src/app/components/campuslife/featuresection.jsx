"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import GlobalArrowButton from "../general/global-arrow_button";

export default function Page() {
  const imageSets = [
    // Academics
    ["https://cdn.kalingauniversity.ac.in/campus-life/Infrastructure1.webp", "https://cdn.kalingauniversity.ac.in/campus-life/Infrastructure2.webp", "https://cdn.kalingauniversity.ac.in/campus-life/Infrastructure3.webp"],
    // Research
    ["https://cdn.kalingauniversity.ac.in/campus-life/Pic1+(1).jpeg", "https://cdn.kalingauniversity.ac.in/research-facilities/researchfacilities-labimage.webp", "https://cdn.kalingauniversity.ac.in/academic-facilities/modernlabrotary.webp"],
    // Celebrations
    ["https://cdn.kalingauniversity.ac.in/campus-life/student-dance.webp", "https://cdn.kalingauniversity.ac.in/campus-life/gallery2.webp", "https://cdn.kalingauniversity.ac.in/campus-life/gallery3.webp"],
    // Sports
    ["https://cdn.kalingauniversity.ac.in/sports/sportsmain.webp", "https://cdn.kalingauniversity.ac.in/sports/cricket.webp", "https://cdn.kalingauniversity.ac.in/sports/gym1.webp"],
    // Events & Activities
    ["https://cdn.kalingauniversity.ac.in/campus-life/gallery1.webp", "https://cdn.kalingauniversity.ac.in/campus-life/gallery4.webp", "https://cdn.kalingauniversity.ac.in/Home/about-kalinga.webp"],
    // Networking Opportunities
    ["https://cdn.kalingauniversity.ac.in/alumini/alimini-meet1.webp", "https://cdn.kalingauniversity.ac.in/kalinga_backend/files/news_events/images/Pic4.webp", "https://cdn.kalingauniversity.ac.in/kalinga_backend/files/news_events/images/PIC211.JPE"],
    // Community Service
    ["https://cdn.kalingauniversity.ac.in/unnat-bharat-abhiyan/1.jpg", "https://cdn.kalingauniversity.ac.in/unnat-bharat-abhiyan/2.jpg", "https://cdn.kalingauniversity.ac.in/unnat-bharat-abhiyan/3.jpg"],
    // Internships and Placement Drives
    ["https://cdn.kalingauniversity.ac.in/Home/placements-silder-1.webp", "https://cdn.kalingauniversity.ac.in/placement/placement-training-cell/placemnt-intro.webp"],
    // Recreation Corners
    ["https://cdn.kalingauniversity.ac.in/campus-facilities/recreation.webp", "https://cdn.kalingauniversity.ac.in/facilities/canteen.webp", "https://cdn.kalingauniversity.ac.in/campus-facilities/selfiepoints.webp"],
    // Eco-Friendly Campus
    ["https://cdn.kalingauniversity.ac.in/Home/campus/1.webp", "https://cdn.kalingauniversity.ac.in/Home/campus/3.webp", "https://cdn.kalingauniversity.ac.in/Home/campus/4.webp"],
    // Hostel Life
    ["https://cdn.kalingauniversity.ac.in/hostel/occupancy.webp", "https://cdn.kalingauniversity.ac.in/hostel/Acnonac.webp", "https://cdn.kalingauniversity.ac.in/facilities/canteen+mess.webp"],
    // Multicultural Learning Environment
    ["https://cdn.kalingauniversity.ac.in/common/student.jpg", "https://cdn.kalingauniversity.ac.in/common/students-3.jpg", "https://cdn.kalingauniversity.ac.in/common/kalinga-students-2.jpg"]
  ];

  const [indexes, setIndexes] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    const t = setInterval(() => {
      setIndexes((prev) =>
        prev.map((val, i) => (val + 1) % imageSets[i].length)
      );
    }, 3000);
    return () => clearInterval(t);
  }, []);


  return (
    <div className="container mx-auto py-16 md:pb-25 px-2 flex flex-col md:gap-35 gap-12 items-stretch">

      {[
        { type: "sandal", title: "Academics", subtitle: "Future-ready learning, right from day one", desc: "Academics at KU are all about practical knowledge and experiential learning that enable students become confident and ready to take up real-world challenges. Through interactive lectures, industry-oriented curriculum, digital classrooms, a resource-rich library, and supportive faculty, students learn to apply every concept in real life.", link: "/academic-facilities" },
        { type: "red", title: "Research", subtitle: "Turning their curiosity into innovation", desc: "Experience a research-driven learning culture where students are encouraged to explore beyond textbooks and make an impactful contribution. At KU, students learn to apply their theoretical knowledge in laboratory work and gain confidence to explore new possibilities. Students are actively involved in discoveries that actually matter.", link: "/research" },
        { type: "sandal", title: "Celebrations", subtitle: "Keeping the campus vibe alive", desc: "From festivals and cultural days celebrations to achieving University milestones, we make every moment count. Students come together to perform, celebrate, and create unforgettable memories. Music, dance, colours, and smiles all around fill the campus with excitement and joy, turning every moment into lifelong friendships.", link: "/campuslife" },
        { type: "red", title: "Sports", subtitle: "Fueling spirit, performance, and teamwork", desc: "KU aims to make every student active and energised by promoting a balance between academics and sports. Indoor and outdoor games, a gymnasium, and yoga help students build confidence and focus better on studies. Regular participation reduces their stress while strengthening them physically and mentally.", link: "/sports-and-wellness-centre" },
        { type: "sandal", title: "Events & Activities", subtitle: "Always buzzing with something exciting", desc: "Kalinga Utsav, Sports Day, Anand Mela, Induction Programs, Convocation Ceremony, Ideathon (Business Plan Competition), Hackathon (Coding Competition), Industrial Visits, Workshops, International Tours, and more add energy to campus life. Students get endless opportunities to participate, compete, and showcase their talents.", link: "/news-and-events" },
        { type: "red", title: "Networking Opportunities", subtitle: "Turning new connections into opportunities", desc: "Guest lectures, alumni meets, seminars, and global conferences bring industry exposure right to the campus. Every interaction adds value to students' professional journey. They discover new horizons, gain industrial insights, and learn to make smarter career decisions.", link: "/about-us" },
        { type: "sandal", title: "Community Service", subtitle: "Learning empathy beyond classrooms", desc: "Through our NCC and NSS departments, students are encouraged to give back while learning teamwork, discipline, and leadership qualities. Through cleanliness drives, blood donation camps, awareness campaigns, social and sustainable initiatives, and rural outreach, students develop a deeper understanding of social responsibility.", link: "/student-clubs" },
        { type: "red", title: "Internships and Placement Drives", subtitle: "Turning their dreams into impactful careers", desc: "Career preparation at KU starts early through internship programs (on-campus and off-campus), enabling students gain confidence and industry experience. Our training and placement cell provides 360-degree training to students, preparing them for on-campus placement drives.", link: "/training-and-placement-cell" },
        { type: "sandal", title: "Recreation Corners", subtitle: "Your chill zones are right on campus", desc: "Need a break? Recreation corners across campus give students a place to relax, recharge, and hang out with friends. These chill-out spots are perfect for short breaks to improve productivity and social bonding.", link: "/campus-facilities" },
        { type: "red", title: "Eco-Friendly Campus", subtitle: "Learning in harmony with nature", desc: "Kalinga's green campus promotes sustainable practices and develops a sense of awareness and responsibility among young students. It is a space where students learn the importance of protecting the environment while enjoying a calm and refreshing atmosphere that supports their mental and physical well-being.", link: "/campus-facilities" },
        { type: "sandal", title: "Hostel Life", subtitle: "Comfort, safety, and a home-like vibe", desc: "Hostel life at KU is all about convenience and lifelong bonds. CCTV cameras, 24/7 security, comfortable accommodation for both boys and girls, a hygienic mess facility, and a mini-market ensure students get everything they need under one roof. It's a place where students share experiences and learn to support each other like a family.", link: "/campus-facilities" },
        { type: "red", title: "Multicultural Learning Environment", subtitle: "Where cultures meet, and friendships grow", desc: "Students at KU experience a vibrant multicultural environment where they learn and grow alongside their peers from across India and around the globe. Daily interactions introduce them to new languages and perspectives. They celebrate diversity, build new connections, and exchange ideas as they prepare for a global career.", link: "/international-students" },
      ].map((sec, index) => (

        <div
          key={index}
          className="relative w-full h-auto md:h-[400px]
                     flex flex-col md:block"
        >

          {sec.type === "sandal" ? (
            // IMAGE RIGHT
            <div
              className="
                md:absolute md:bottom-[75px] md:right-[0px] md:w-[55%]
                w-full mb-4 md:mb-0
              "
            >
              <div className="relative h-[220px] md:h-[350px] rounded-2xl overflow-hidden shadow-lg w-full z-10">
                <img
                  src={imageSets[index][indexes[index]]}
                  alt={`${sec.title} at Kalinga University`}
                  className="w-full h-full object-cover transition-all duration-700 object-center"
                />
              </div>

              <div className="mt-3 w-full flex justify-center gap-2 z-20">
                {imageSets[index].map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 rounded-full ${i === indexes[index]
                      ? "bg-[var(--dark-orange-red-light)] w-12"
                      : "bg-[var(--light-gray)] w-4"
                      }`}
                  ></div>
                ))}
              </div>
            </div>
          ) : (
            // IMAGE LEFT
            <div
              className="
                md:absolute md:top-10 md:left-[0px] md:w-[55%] md:z-20
                w-full mb-4 md:mb-0
              "
            >
              <div className="relative h-[220px] md:h-[300px] rounded-2xl overflow-hidden shadow-lg w-full">
                <img
                  src={imageSets[index][indexes[index]]}
                  alt={`${sec.title} at Kalinga University`}
                  className="w-full h-full object-cover transition-all duration-700 object-top"
                />
              </div>

              <div className="mt-3 w-full flex justify-center gap-2">
                {imageSets[index].map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 rounded-full ${i === indexes[index]
                      ? "bg-[var(--dark-orange-red-light)] w-12"
                      : "bg-[var(--light-gray)] w-4"
                      }`}
                  ></div>
                ))}
              </div>
            </div>
          )}

          {/* CONTENT BOXES */}
          {sec.type === "sandal" ? (
            <div
              className="
              bg-[var(--card-sandal)] rounded-2xl p-6 md:p-8 shadow-md w-full md:w-[55%] 
              md:min-h-[330px]
              md:absolute md:left-[0] md:top-[100px] flex flex-col justify-center
            "
            >
              <h1 className="text-xl md:text-2xl font-regular mb-2">{sec.title}</h1>
              {sec.subtitle && <p className="text-sm font-medium text-[var(--foreground)]/80 mb-3">{sec.subtitle}</p>}
              <p className="text-sm text-[var(--foreground)]/70 leading-relaxed mb-4 md:w-3/4 w-full">{sec.desc}</p>
              {/* <Link href={sec.link}>
                <GlobalArrowButton className="hover:!bg-[var(--background)]">Know More</GlobalArrowButton>
              </Link> */}
            </div>
          ) : (
            <div
              className="
              bg-[var(--button-red)] text-white rounded-2xl p-6 md:p-8 shadow-md 
              w-full md:w-[55%] md:min-h-[330px]
              md:absolute md:right-[0px] md:top-[100px] flex flex-col justify-center
            "
            >
              <h2 className="text-xl md:text-2xl font-regular mb-2 md:pl-[140px]">
                {sec.title}
              </h2>
              {sec.subtitle && <p className="text-sm font-medium mb-3  md:pl-[140px] text-white/90">{sec.subtitle}</p>}
              <p className="text-sm leading-relaxed mb-4 md:pl-[140px] w-full">
                {sec.desc}
              </p>
              {/* <div className="md:pl-[140px] flex gap-3 md:gap-4 flex-wrap">
                <Link href={sec.link}>
                  <GlobalArrowButton 
                    className="!bg-white !text-[var(--foreground)]"
                    variant="transparent"
                    arrowClassName="bg-[var(--brown)]"
                  >
                    Know More
                  </GlobalArrowButton>
                </Link>
                {sec.feesLink && (
                  <Link href={sec.feesLink}>
                    <GlobalArrowButton 
                      className="!bg-[var(--dark-orange-red)] !border-[1px] !border-white !text-white hover:!bg-[var(--dark-orange-red-light)]"
                      arrowClassName="!bg-white"
                      arrowIconClassName="!text-[var(--dark-orange-red)]"
                    >
                      Check fees
                    </GlobalArrowButton>
                  </Link>
                )}
              </div> */}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
