"use client";

import MentorIntro from "../department/dept_head_intro";

const swDeanText =
  "From my perspective, students should be heard, and their opinions matter the most. They should always feel valued so that they can share their academic goals and personal aspirations. To meet this, our DSW department works closely with every student and develops innovative solutions to provide our students with an extraordinary college experience. The main aim of our department is to bring a smile to their face by lowering their academic pressure through various co-curricular and extracurricular initiatives. As the Dean of Students’ Welfare, we are always committed to delivering the highest form of student comfort and satisfaction, and we continuously schedule and organise events and programs that empower each student to follow their passion and talent by creating lifelong memories.";

export default function SwdeanIntro({
  imageSrc = "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png", // replace with actual image
  subtitle = "A Message From the Dean of Students’ Welfare",
  name = "Lt Vibha Chandrakar",
  designation = "Dean of Student Welfare",
  quote = swDeanText,
}) {
  const items = [
    {
      id: 1,
      subtitle,          // small heading (red)
      title: name,       // main name
      department: designation,
      imageSrc,
      imageAlt: name,
      message: [quote], // popup content
    },
  ];

  return (
    <section className="sw-dean-wrapper bg-[#F3F4F6] mt-12 md:mt-16 mb-8 md:mb-12 rounded-xl">
      {/* Scoped overrides – identical behavior to NCC Head Message */}
      <style jsx>{`
        /* Remove inner white background so wrapper bg shows */
        .sw-dean-wrapper :global(section.bg-white) {
          background: transparent !important;
          padding-top: 3rem !important;
          padding-bottom: 3rem !important;
        }

        /* Align cards to top */
        .sw-dean-wrapper :global(.grid) {
          align-items: flex-start !important;
        }

        /* Remove desktop push-down padding inside MentorCard */
        @media (min-width: 1024px) {
          .sw-dean-wrapper :global(.lg\\:pt-20) {
            padding-top: 0 !important;
          }
        }

        /* Ensure image starts from top */
        .sw-dean-wrapper :global(img) {
          object-position: top;
        }

        /* Center popup modal */
        .sw-dean-wrapper
          :global(.fixed.inset-0.flex.items-end.justify-center) {
          align-items: center !important;
        }
      `}</style>

      <MentorIntro items={items} />
    </section>
  );
}
