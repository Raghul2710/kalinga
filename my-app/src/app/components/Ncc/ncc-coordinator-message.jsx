"use client";

import MentorIntro from "@/app/components/department/dept_head_intro";

const nccCoordinatorText =
  "Books alone cannot make students well-rounded individuals, but co-curricular activities like NCC also play an important role in building leadership, discipline, and a sense of social responsibility. We welcome all students to actively participate in our NCC camps and make a positive contribution to our society and nation. It helps them learn real-life skills, experience new challenges,  develop resilience and teamwork spirit, and form lifelong friendships. Become a part of this extraordinary journey of self-growth and discover your true potential. This is your chance to serve the nation and take the first step towards creating a meaningful impact.";

export default function NccHeadMessage({
  imageSrc = "https://kalinga-university.s3.ap-south-1.amazonaws.com/ncc/Ncc-Coordinator-Image.webp",
  subtitle = "A Message From NCC Coordinator",
  name = "Lt Vibha Chandrakar",
  designation = "NCC Coordinator",
  quote = "Leadership begins with discipline, and NCC is where that discipline is forged.",

}) {
  const items = [
    {
      id: 1,
      subtitle,
      title: name,
      department: designation,
      imageSrc,
      imageAlt: name,
      message: [nccCoordinatorText],
      quote,
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
