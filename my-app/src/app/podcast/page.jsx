"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import MainIntro from "@/app/components/about/main_intro";
import MediaCardSlider from '../components/general/media-card-slider';

const videoItems = [
  {
    id: 1,
    title: "Dr. Sunayana Shukla",
    description: "ICF Certified Coach, NLP Trainer, Child Psychologist, Career Counsellor",
    videoUrl: "https://www.youtube.com/watch?v=WdKMix0cahA",
    thumbnail: "https://cdn.kalingauniversity.ac.in/podcast/podcast-2.png",
  },
  {
    id: 2,
    title: "Dr. Sandeep Gandhi",
    description: "Registrar, Kalinga University",
    videoUrl: "https://www.youtube.com/watch?v=eSTWPTAJ-N8",
    thumbnail: "https://cdn.kalingauniversity.ac.in/podcast/podcast-3.png",
  },
  {
    id: 3,
    title: "Saurabh Banwar",
    description: "Manager, CTCD",
    videoUrl: "https://www.youtube.com/watch?v=gwcT3TN_5iM",
    thumbnail: "https://cdn.kalingauniversity.ac.in/podcast/podcast-4.png",
  },
]

const Podcast = () => {
  const pathname = usePathname();


  return (
    <div>
      <MainIntro
        title="An Initiative By Kalinga University"
        subtitle=""
        description={[
          <>
            <strong>Big Ideas, Bold Voices, and Conversations that Inspire</strong> - Welcome to Kalinga Podcast!
          </>,
          "A platform that shapes the voice of our students, faculty members, alumni, and industry leaders. From inspiring talks to engaging conversations, experience a whole new vibe at our podcast studio. Our students don’t just learn by listening, but they also learn how to create and host their own podcasts. ",
          "So, plug in your earphones and discover new stories and ideas that will inspire you.",
        ]}
        imageUrl="https://cdn.kalingauniversity.ac.in/common/podcast.webp"
        imageAlt="Kalinga University Podcast"
        showKnowMore={false}
        showButton={false}
        initialVisibleParagraphs={5}
        disableClipPath={false}
      />

      <MediaCardSlider
        categoryTitle=""
        title="Our Podcasts"
        description=""
        videoItems={videoItems}
        cardBgClass="bg-white"
        nameTextClass="text-[var(--button-red)]"
        descriptionTextClass=""
        swiperClassName="ccrc-video-slider"
      />
    </div>
  );
};

export default Podcast; 