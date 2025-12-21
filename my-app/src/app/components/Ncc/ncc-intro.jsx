"use client";

import MainIntro from "../about/main_intro";

const nccIntroContent = {
  imageUrl:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
  title: "About NCC Cell",
  subtitle: "National Cadet Corps",
  description: [
    "The National Cadet Corps Cell at KU unites students from different states of our country and makes them disciplined and responsible citizens of our Nation. Our campus provides an ideal space for students to engage in team-building activities and physical training sessions. It provides opportunities to develop a sense of commitment, leadership skills, discipline, dedication, and moral values. Its training programs shape the overall development of our young cadets, preparing them to serve for the betterment of society. NCC cadets are allowed to participate in adventure activities, including Mountain Treks and Expeditions, Trekking, Parasailing, Sailing, Scuba Diving, Kayaking, Camel Safari, and many more.",
    "Students of Kalinga University have the option to join 8CG Girls Battalions (only for Girls) and several training aspects of NCC, like Drill, Weapon Training, Annual Training Camps, etc.",
  ],
};

export default function NccIntro() {
  return (
    <section className="ncc-intro-wrapper">
      {/* Scoped CSS to justify description text */}
      <style jsx>{`
        .ncc-intro-wrapper :global(p) {
          text-align: justify;
        }
      `}</style>

      <MainIntro
        title={nccIntroContent.title}
        subtitle={nccIntroContent.subtitle}
        description={nccIntroContent.description}
        imageUrl={nccIntroContent.imageUrl}
        readMoreLabel="Read More"
        readLessLabel="Read Less"
        showKnowMore={true}
        initialVisibleParagraphs={1}
      />
    </section>
  );
}
