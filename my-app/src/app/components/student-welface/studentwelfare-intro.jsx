"use client";

import MainIntro from "../about/main_intro";

export default function ResearchWelfareIntro() {
  return (
    <section className="research-welfare-intro">
      {/* Scoped CSS override for description text */}
      <style jsx>{`
        /* Justify ONLY the description text */
        .research-welfare-intro :global(p) {
          text-align: justify !important;
        }
      `}</style>

      <MainIntro
        title="Student Welfare Services"
        subtitle=""
        description={[
          "The Department of Student Welfare (DSW) at KU works for the welfare of its students so that they can get the best university experience. It is a student-centric department that facilitates an inspirational learning environment where they can develop their hobbies and interests and even participate in other in-house programs apart from academic learning.",

          "The welfare team organises various activities, events, exhibitions, fests, competitions, and cultural programs that create a balanced educational environment. Students should never feel bored at any time, and their happiness is our top priority. They are always encouraged to not just participate in classroom activities but to step out of their comfort zone and get involved in various events organised by DSW. The department helps students shake off their academic stress by promoting a culture of self-growth and the development of real-life skills. It fulfils their academic accomplishments and makes them a perfect all-around individual.",
        ]}
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png"
        imageAlt="Student Welfare Services"
        readMoreLabel="Read More"
        readLessLabel="Show Less"
        initialVisibleParagraphs={1}
        showKnowMore={true}
      />
    </section>
  );
}
