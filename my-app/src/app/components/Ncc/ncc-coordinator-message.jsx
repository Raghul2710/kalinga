"use client";

import MentorIntro from "@/app/components/department/dept_head_intro";

const nccCoordinatorText =
  "We believe that books just don’t make students all-rounded individuals, but co-curricular activities like NCC also play a vital role in making them strong and mindful citizens. We welcome all students to actively participate in our NCC camps and make a positive contribution to our society and nation. Become a part of this extraordinary journey of self-growth and discover your actual potential.";

export default function NccHeadMessage({
  imageSrc = "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
  subtitle = "A Message From NCC Coordinator",
  name = "Lt Vibha Chandrakar",
  designation = "NCC Coordinator",
  quote = nccCoordinatorText,
}) {
  const items = [
    {
      id: 1,
      subtitle,
      title: name,
      department: designation,
      imageSrc,
      imageAlt: name,
      message: [quote],
    },
  ];

  return (
    <section className="ncc-head-wrapper bg-[#F3F4F6] mt-12 md:mt-16 mb-8 md:mb-12 rounded-xl">
      {/* Scoped overrides */}
      <style jsx>{`
        /* Remove inner white background so wrapper bg shows */
        .ncc-head-wrapper :global(section.bg-white) {
          background: transparent !important;
          padding-top: 3rem !important;
          padding-bottom: 3rem !important;
        }

        /* Align cards to top */
        .ncc-head-wrapper :global(.grid) {
          align-items: flex-start !important;
        }

        /* Remove desktop push-down padding */
        @media (min-width: 1024px) {
          .ncc-head-wrapper :global(.lg\\:pt-20) {
            padding-top: 0 !important;
          }
        }

        /* Ensure image aligns from top */
        .ncc-head-wrapper :global(img) {
          object-position: top;
        }

        /* Center popup modal */
        .ncc-head-wrapper
          :global(.fixed.inset-0.flex.items-end.justify-center) {
          align-items: center !important;
        }
      `}</style>

      <MentorIntro items={items} />
    </section>
  );
}
