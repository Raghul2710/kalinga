"use client";

import React, { useState, useEffect } from "react";
import SectionHeading from "../components/general/SectionHeading";
import GlobalArrowButton from "../components/general/global-arrow_button";
import CenterOfExcellence from "../components/about/center_of_excellence";

export default function Page() {

  /* -------- Media Grid Images -------- */
  const mediaImages = [

    "https://cdn.kalingauniversity.ac.in/media/WORKSHOP+FOR+SCIENCE+%26+KOLLOTICS+8TH+DECEMBER%2C+2015.jpg",
    "https://cdn.kalingauniversity.ac.in/media/Dainik+Bhaskar-24.07.17.jpg",
    "https://cdn.kalingauniversity.ac.in/media/kalingaaug172021.jpeg",
    "https://cdn.kalingauniversity.ac.in/media/dainik_bhaskar_26_09_2017.jpg",

    "https://cdn.kalingauniversity.ac.in/media/WhatsApp+Image+2020-11-25+at+11.44.38+(2).jpeg",
    "https://cdn.kalingauniversity.ac.in/media/TREE+PLANTATION+BY+KALING+STUDENTS%2C+JUNE%2C+2015_1.jpg",
    "https://cdn.kalingauniversity.ac.in/media/WhatsApp+Image+2020-10-24+at+11.44.31+(1).jpeg",
    "https://cdn.kalingauniversity.ac.in/media/INDUCTION+SESSION+OF+NEW+STUDENTS+2015-16+JULY%2C+2015.jpg",
    "https://cdn.kalingauniversity.ac.in/media/WhatsApp+Image+2020-10-19+at+09.06.35.jpeg",
    "https://cdn.kalingauniversity.ac.in/media/WhatsApp+Image+2020-11-25+at+11.44.39.jpeg",
    "https://cdn.kalingauniversity.ac.in/media/WhatsApp+Image+2020-10-24+at+11.44.31.jpeg",
    "https://cdn.kalingauniversity.ac.in/media/WhatsApp+Image+2020-10-15+at+10.01.10.jpeg",
    "https://cdn.kalingauniversity.ac.in/media/WhatsApp+Image+2020-10-23+at+11.41.34.jpeg",
    "https://cdn.kalingauniversity.ac.in/media/WhatsApp+Image+2020-10-07+at+10.36.37.jpeg",
    "https://cdn.kalingauniversity.ac.in/media/WhatsApp+Image+2020-10-15+at+10.02.04.jpeg",
    "https://cdn.kalingauniversity.ac.in/media/NCC+CAMP+20TH+JULY+TO+29TH+JULY%2C+2015_2.jpg",
    "https://cdn.kalingauniversity.ac.in/media/National_Seminar_at_Kalinga_University_24-25_Feb_2018.jpg",
    "https://cdn.kalingauniversity.ac.in/media/FRESHER'S+PARTY+-+2015+20TH+NOVEMBER%2C+2015_1.jpg",
    "https://cdn.kalingauniversity.ac.in/media/FRESHER'S+PARTY+-+2015+20TH+NOVEMBER%2C+2015_1+(1).jpg",
    "https://cdn.kalingauniversity.ac.in/media/New+Doc+2018-08_03_dainik_bhaskar.jpg",
    "https://cdn.kalingauniversity.ac.in/media/WhatsApp+Image+2020-09-21+at+15.16.32.jpeg",
    "https://cdn.kalingauniversity.ac.in/media/National_Seminar_at_Kalinga_University_24-25_Feb_2018.jpg",
    "https://cdn.kalingauniversity.ac.in/media/National_Seminar_at_Kalinga_University_24-25_Feb_2018.jpg",
    "https://cdn.kalingauniversity.ac.in/media/WhatsApp+Image+2020-10-23+at+11.41.33+(3).jpeg",
    "https://cdn.kalingauniversity.ac.in/media/8july2021-1.jpeg",
    "https://cdn.kalingauniversity.ac.in/media/8july2021-2.jpeg",
    "https://cdn.kalingauniversity.ac.in/media/TREE+PLANTATION+BY+KALINGA+STUDENTS+JUNE%2C+2015_2.jpg",
    "https://cdn.kalingauniversity.ac.in/media/8july2021-3.jpeg",
    "https://cdn.kalingauniversity.ac.in/media/WhatsApp+Image+2020-11-24+at+18.47.25.jpeg",
    "https://cdn.kalingauniversity.ac.in/media/WORKSHOP+FOR+CITIZEN+COP+APP+2ND+DECEMBER%2C+2015_3.jpg",
    "https://cdn.kalingauniversity.ac.in/media/8july2021-4.jpeg",
    "https://cdn.kalingauniversity.ac.in/media/CAREER+GUIDANCE+SEMINAR+20TH+NOVEMBER%2C+2015.jpg",
    "https://cdn.kalingauniversity.ac.in/media/FACULTY+DEVELOPMENT+PROGRAM+13TH+JUNE%2C+2015_3.jpg",
    "https://cdn.kalingauniversity.ac.in/media/adv_kalinga.jpg",
    "https://cdn.kalingauniversity.ac.in/media/DAINIK+BHASKAR+03.08.2018.jpg",
    "https://cdn.kalingauniversity.ac.in/media/New+Doc+2018-08-03_haribhumi.jpg",
    "https://cdn.kalingauniversity.ac.in/media/FACULTY+DEVELOPMENT+PROGRAM+13TH+JUNE%2C+2015_2+(1).jpg",
    "https://cdn.kalingauniversity.ac.in/media/Discussions_on_Pharmaceutical_Industry.jpg",

    "https://cdn.kalingauniversity.ac.in/media/Patrika_BEd._Induction_Day_Kalinga_University.jpg",
    "https://cdn.kalingauniversity.ac.in/media/5+(1).jpg",
    "https://cdn.kalingauniversity.ac.in/media/WhatsApp+Image+2020-09-22+at+08.50.06.jpeg",

    "https://cdn.kalingauniversity.ac.in/media/WORKSHOP+FOR+CITIZEN+COP+APP+2ND+DECEMBER%2C+2015_2.jpg",
    "https://cdn.kalingauniversity.ac.in/media/4+(1).jpg",
    "https://cdn.kalingauniversity.ac.in/media/3+(1).jpg",
    "https://cdn.kalingauniversity.ac.in/media/FACULTY+DEVELOPMENT+PROGRAM+13TH+JUNE%2C+2015_1.jpg",
    "https://cdn.kalingauniversity.ac.in/media/New+Doc+2018-08_03_dainik_bhaskar+(1).jpg",
    "https://cdn.kalingauniversity.ac.in/media/New+Doc+2018-08-03Naiduniya.jpg",
    "https://cdn.kalingauniversity.ac.in/media/FACULTY+DEVELOPMENT+PROGRAM+27TH+JUNE%2C+2015.jpg",
    "https://cdn.kalingauniversity.ac.in/media/2+(1).jpg",
    "https://cdn.kalingauniversity.ac.in/media/5k.jpg",
    "https://cdn.kalingauniversity.ac.in/media/PTARIKA+02.08.2018.jpg",
    "https://cdn.kalingauniversity.ac.in/media/4k.jpg",
    "https://cdn.kalingauniversity.ac.in/media/Law_Students_Participate_in_National_Moot_Court_Competition.jpg",
    "https://cdn.kalingauniversity.ac.in/media/3k.jpg",
    "https://cdn.kalingauniversity.ac.in/media/patrika-24.07.17.jpg",
    "https://cdn.kalingauniversity.ac.in/media/FACULTY+DEVELOPMENT+PROGRAM+20TH+JUNE+2015_2.jpg",
    "https://cdn.kalingauniversity.ac.in/media/FRESHER'S+PARTY+-+2015+20TH+NOVEMBER%2C+2015_3.jpg",
    "https://cdn.kalingauniversity.ac.in/media/National_Seminar_at_Kalinga_University_24-25_Feb_2018+(1).jpg",
    "https://cdn.kalingauniversity.ac.in/media/2k.jpg",
    "https://cdn.kalingauniversity.ac.in/media/WhatsApp+Image+2020-09-16+at+12.36.37.jpeg",
    "https://cdn.kalingauniversity.ac.in/media/6k.jpeg",
    "https://cdn.kalingauniversity.ac.in/media/Law_Students_Participate_in_National_Moot_Court_Competition.jpg",
    "https://cdn.kalingauniversity.ac.in/media/WORKSHOP+FOR+CITIZEN+COP+APP+2ND+DECEMBER%2C+2015_4.jpg",
    "https://cdn.kalingauniversity.ac.in/media/NewEvents+2+(1).jpg",
    "https://cdn.kalingauniversity.ac.in/media/NewEvents+1.jpg",
    "https://cdn.kalingauniversity.ac.in/media/NewEvents+16.jpg",
    "https://cdn.kalingauniversity.ac.in/media/New_Doc_2018-08-29_2N.jpg",
    "https://cdn.kalingauniversity.ac.in/media/haribhumi_11_08_2018+(1).jpg",
    "https://cdn.kalingauniversity.ac.in/media/NewEvents+10.jpg",
    "https://cdn.kalingauniversity.ac.in/media/PATRIKA+03.08.2018+(1).jpg",
    "https://cdn.kalingauniversity.ac.in/media/NewEvents+11.jpg",
    "https://cdn.kalingauniversity.ac.in/media/Patrika_11_April.jpg",
    "https://cdn.kalingauniversity.ac.in/media/COMMENCEMENT+OF+NEW+SESSION+OF+2015-16+BY+HAVAN+AND+BHANDARA.jpg",
    "https://cdn.kalingauniversity.ac.in/media/dainik_vis_parivar_11_08_2018+(1).jpg",
    "https://cdn.kalingauniversity.ac.in/media/New_Doc_2018-08-29_1N.jpg",
    "https://cdn.kalingauniversity.ac.in/media/05_dainikbaskar_10_07_16_aarambh_2016_completion.jpg",
    "https://cdn.kalingauniversity.ac.in/media/NewEvents+12.jpg",
    "https://cdn.kalingauniversity.ac.in/media/01_navbharat_05_07_16_five_days_aarambh_2016_the_beginning.jpg",
    "https://cdn.kalingauniversity.ac.in/media/NewEvents+14.jpg",
    "https://cdn.kalingauniversity.ac.in/media/thehitavada_11_08_2018+(2).jpg",
    "https://cdn.kalingauniversity.ac.in/media/Cityline_11_April.jpg",
    "https://cdn.kalingauniversity.ac.in/media/NewEvents+15.jpg",
    "https://cdn.kalingauniversity.ac.in/media/naidunia_11_08_2018+(1).jpg",
    "https://cdn.kalingauniversity.ac.in/media/03_haribhumi_07_07_16_fresher_welcome.jpg",
    "https://cdn.kalingauniversity.ac.in/media/New_Doc_2018-09-11_1+(1).jpg",
    "https://cdn.kalingauniversity.ac.in/media/02_naidunia_05_07_16_new_students_welcome.jpg",
    "https://cdn.kalingauniversity.ac.in/media/New_Doc_2018-09-11_1+(1).jpg",
    "https://cdn.kalingauniversity.ac.in/media/01_nabharat_05_07_16_five_days_aarambh_2016_the_beginning+(1).jpg",
    "https://cdn.kalingauniversity.ac.in/media/NewEvents+18.jpg",
    "https://cdn.kalingauniversity.ac.in/media/01_nabharat_05_07_16_five_days_aarambh_2016_the_beginning.jpg",
    "https://cdn.kalingauniversity.ac.in/media/teacher_day_celebration_new+(2).jpg",
    "https://cdn.kalingauniversity.ac.in/media/teacher_day_celebration_new+(1).jpg",
    "https://cdn.kalingauniversity.ac.in/media/NewEvents+17.jpg",
    "https://cdn.kalingauniversity.ac.in/media/dainikbaskar_09_02_17.jpg",
    "https://cdn.kalingauniversity.ac.in/media/07_patrika_15_07_16_seminar_on_career.jpg",
    "https://cdn.kalingauniversity.ac.in/media/Pharmacy+(1).jpg",
    "https://cdn.kalingauniversity.ac.in/media/adv_kalinga+(2).jpg",
    "https://cdn.kalingauniversity.ac.in/media/NewEvents+2.jpg",
    "https://cdn.kalingauniversity.ac.in/media/07_patrika_15_07_16_seminar_on_career.jpg",
    "https://cdn.kalingauniversity.ac.in/media/navbharat_09_02_1711.jpg",
    "https://cdn.kalingauniversity.ac.in/media/navbharat_09_02_1711.jpg",
    "https://cdn.kalingauniversity.ac.in/media/New+Doc+2018-09-27+10.13.29_3_1.jpg",
    "https://cdn.kalingauniversity.ac.in/media/NewEvents+21.jpg",
    "https://cdn.kalingauniversity.ac.in/media/navbharat_08_02_17.jpg",
    "https://cdn.kalingauniversity.ac.in/media/navbharat_25_02_17.jpg",
    "https://cdn.kalingauniversity.ac.in/media/NewEvents+22.jpg",
    "https://cdn.kalingauniversity.ac.in/media/PATRIKA+30.08.17.jpg",
    "https://cdn.kalingauniversity.ac.in/media/Silver_medal_young.jpg",
    "https://cdn.kalingauniversity.ac.in/media/NewEvents+24.jpg",
    "https://cdn.kalingauniversity.ac.in/media/PATRIKA+03.08.2018.jpg",
    "https://cdn.kalingauniversity.ac.in/media/HARIBHOOOMI+01.09.17.jpg",
    "https://cdn.kalingauniversity.ac.in/media/thehitavada_11_08_2018+(1).jpg",
    "https://cdn.kalingauniversity.ac.in/media/thehitavada_11_08_2018.jpg",
    "https://cdn.kalingauniversity.ac.in/media/NewEvents+25.jpg",
    "https://cdn.kalingauniversity.ac.in/media/thehitavada_11_08_2018+(1).jpg",
    "https://cdn.kalingauniversity.ac.in/media/HARIBHOOMI+30.08.17.jpg",
    "https://cdn.kalingauniversity.ac.in/media/New+Doc+2018-08_03_dainik_bhaskar+(2).jpg",
    "https://cdn.kalingauniversity.ac.in/media/PATRIKA+30.08.17.jpg",
    "https://cdn.kalingauniversity.ac.in/media/Patrika_BEd._Induction_Day_Kalinga_University+(1).jpg",
    "https://cdn.kalingauniversity.ac.in/media/NAVBHARAT+01.09.17.jpg",
    "https://cdn.kalingauniversity.ac.in/media/NewEvents+19.jpg",
    "https://cdn.kalingauniversity.ac.in/media/HARIBHOOMI+21.08.17.jpg",
    "https://cdn.kalingauniversity.ac.in/media/NewEvents+5.jpg",
    "https://cdn.kalingauniversity.ac.in/media/NewEvents+3.jpg",
    "https://cdn.kalingauniversity.ac.in/media/BHASKAR+30.08.17.jpg",
    "https://cdn.kalingauniversity.ac.in/media/NewEvents+6.jpg",
    "https://cdn.kalingauniversity.ac.in/media/haribhumi_11_08_2018.jpg",
    "https://cdn.kalingauniversity.ac.in/media/Pharmacy.jpg",
    "https://cdn.kalingauniversity.ac.in/media/BHASKAR+21.08.17.jpg",
    "https://cdn.kalingauniversity.ac.in/media/teacher_day_celebration_new.jpg",
    "https://cdn.kalingauniversity.ac.in/media/BHASKAR+02.09.17.jpg",
    "https://cdn.kalingauniversity.ac.in/media/patrika_003.jpg",
    "https://cdn.kalingauniversity.ac.in/media/patrika_22_11_2017+(1).jpg",
    "https://cdn.kalingauniversity.ac.in/media/Job_Fair_at_Kalinga_University_27-28-04-2018+(1).jpg",
    "https://cdn.kalingauniversity.ac.in/media/nvbharat_+26_03_2017_001.jpg",
    "https://cdn.kalingauniversity.ac.in/media/Law_Students_Participate_in_National_Moot_Court_Competition+(2).jpg",
    "https://cdn.kalingauniversity.ac.in/media/NewEvents+9.jpg",
    "https://cdn.kalingauniversity.ac.in/media/NewEvents+8.jpg",
    "https://cdn.kalingauniversity.ac.in/media/Law_Students_Participate_in_National_Moot_Court_Competition+(1).jpg",
    "https://cdn.kalingauniversity.ac.in/media/Discussions_on_Pharmaceutical_Industry+(1).jpg",
    "https://cdn.kalingauniversity.ac.in/media/NaiDuniya_26_03_2017_002.jpg",
    "https://cdn.kalingauniversity.ac.in/media/NewEvents+26.jpg",
    "https://cdn.kalingauniversity.ac.in/media/NewEvents+27.jpg",
    "https://cdn.kalingauniversity.ac.in/media/DAINIK+BHASKAR+03.08.2018+(1).jpg",
    "https://cdn.kalingauniversity.ac.in/media/New+Doc+2018-08-03Naiduniya+(1).jpg",
    "https://cdn.kalingauniversity.ac.in/media/NaiDuniya_26_03_2017_002.jpg",
    "https://cdn.kalingauniversity.ac.in/media/New+Doc+2018-08-03Naiduniya+(1).jpg",
    "https://cdn.kalingauniversity.ac.in/media/NewEvents+28.jpg",
    "https://cdn.kalingauniversity.ac.in/media/dainik_vis_parivar_11_08_2018.jpg",
    "https://cdn.kalingauniversity.ac.in/media/NewEvents+28.jpg",
    "https://cdn.kalingauniversity.ac.in/media/CAREER+GUIDANCE+SEMINAR+20TH+DECEMBER%2C+2015.jpg",
    "https://cdn.kalingauniversity.ac.in/media/thehitavada_22_11_2017.jpg",
    "https://cdn.kalingauniversity.ac.in/media/naidunia_11_08_2018.jpg",
    "https://cdn.kalingauniversity.ac.in/media/hindi_diwas_celebrated_Kalinga_University.jpg",
    "https://cdn.kalingauniversity.ac.in/media/patrika_22_11_2017.jpg",
    "https://cdn.kalingauniversity.ac.in/media/COMMENCEMENT+OF+NEW+SESSION+OF+2015-16+BY+HAVAN+AND+BHANDARA+JULY%2C+2015_2.jpg",
    "https://cdn.kalingauniversity.ac.in/media/patrika_22_11_2017.jpg",
    "https://cdn.kalingauniversity.ac.in/media/COMMENCEMENT+OF+NEW+SESSION+OF+2015-16+BY+HAVAN+AND+BHANDARA+JULY%2C+2015_2.jpg",
    "https://cdn.kalingauniversity.ac.in/media/COMMENCEMENT+OF+NEW+SESSION+OF+2015-16+BY+HAVAN+AND+BHANDARA%2C+JULY+2015_1.jpg",
  ];

  /* -------- Slider Images (Centre of Excellence) -------- */
  const excellenceImages = [
    {
      id: 1,
      name: "Pratibha Samman – 2018",
      title: "Awarded to Dr. Sandip Arora, Kalinga University",
      image: "https://cdn.kalingauniversity.ac.in/media/34.jpg",
    },
    {
      id: 2,
      name: "MoU Exchange Ceremony",
      title: "Kalinga University with Government Officials",
      image: "https://cdn.kalingauniversity.ac.in/media/awards.jpg",
    },
    {
      id: 3,
      name: "Notable Networker Award",
      title: "BNI – In Recognition of Outstanding Performance",
      image: "https://cdn.kalingauniversity.ac.in/media/1.jpg",
    },
    {
      id: 4,
      name: "Abhinandan Patra – 2018",
      title: "Miss India Khadi Uttar Pradesh Fashion Show",
      image: "https://cdn.kalingauniversity.ac.in/media/2.jpg",
    },
    {
      id: 5,
      name: "Guest of Honour Award",
      title: "Durg District VTP’s Association",
      image: "https://cdn.kalingauniversity.ac.in/media/35.jpg",
    },
    {
      id: 6,
      name: " ",
      title: " ",
      image: "https://cdn.kalingauniversity.ac.in/media/3.jpg",
    },
    {
      id: 7,
      name: " ",
      title: " ",
      image: "https://cdn.kalingauniversity.ac.in/media/36.jpg"
    },
    {
      id: 8,
      name: " ",
      title: " ",
      image: "https://cdn.kalingauniversity.ac.in/media/4.jpg",
    },


    { id: 9, name: "", title: "", image: "https://cdn.kalingauniversity.ac.in/media/56.jpg" },
    { id: 10, name: "", title: "", image: "https://cdn.kalingauniversity.ac.in/media/30.jpg" },
    { id: 11, name: "", title: "", image: "https://cdn.kalingauniversity.ac.in/media/31.jpg" },
    { id: 12, name: "", title: "", image: "https://cdn.kalingauniversity.ac.in/media/53.jpg" },
    { id: 13, name: "", title: "", image: "https://cdn.kalingauniversity.ac.in/media/54.jpg" },
    { id: 14, name: "", title: "", image: "https://cdn.kalingauniversity.ac.in/media/33.jpg" },
    { id: 15, name: "", title: "", image: "https://cdn.kalingauniversity.ac.in/media/54+(1).jpg" },
    { id: 16, name: "", title: "", image: "https://cdn.kalingauniversity.ac.in/media/55.jpg" },
    { id: 17, name: "", title: "", image: "https://cdn.kalingauniversity.ac.in/media/32+(1).jpg" },
    { id: 18, name: "", title: "", image: "https://cdn.kalingauniversity.ac.in/media/32.jpg" },

    { id: 19, name: "", title: "", image: "https://cdn.kalingauniversity.ac.in/media/52.jpg" },
    { id: 20, name: "", title: "", image: "https://cdn.kalingauniversity.ac.in/media/51.jpg" },
    { id: 21, name: "", title: "", image: "https://cdn.kalingauniversity.ac.in/media/27.jpg" },
    { id: 22, name: "", title: "", image: "https://cdn.kalingauniversity.ac.in/media/49.jpg" },
    { id: 23, name: "", title: "", image: "https://cdn.kalingauniversity.ac.in/media/28.jpg" },
    { id: 24, name: "", title: "", image: "https://cdn.kalingauniversity.ac.in/media/29.jpg" },
    { id: 25, name: "", title: "", image: "https://cdn.kalingauniversity.ac.in/media/50.jpg" },
    { id: 26, name: "", title: "", image: "https://cdn.kalingauniversity.ac.in/media/48.jpg" },
    { id: 27, name: "", title: "", image: "https://cdn.kalingauniversity.ac.in/media/26.jpg" },
    { id: 28, name: "", title: "", image: "https://cdn.kalingauniversity.ac.in/media/25.jpg" },

    { id: 29, name: "", title: "", image: "https://cdn.kalingauniversity.ac.in/media/47.jpg" },
    { id: 30, name: "", title: "", image: "https://cdn.kalingauniversity.ac.in/media/23.jpg" },
    { id: 31, name: "", title: "", image: "https://cdn.kalingauniversity.ac.in/media/24.jpg" },
    { id: 32, name: "", title: "", image: "https://cdn.kalingauniversity.ac.in/media/46.jpg" },
    { id: 33, name: "", title: "", image: "https://cdn.kalingauniversity.ac.in/media/22.jpg" },
    { id: 34, name: "", title: "", image: "https://cdn.kalingauniversity.ac.in/media/20.jpg" },
    { id: 35, name: "", title: "", image: "https://cdn.kalingauniversity.ac.in/media/45.jpg" },
    { id: 36, name: "", title: "", image: "https://cdn.kalingauniversity.ac.in/media/21.jpg" },
    { id: 37, name: "", title: "", image: "https://cdn.kalingauniversity.ac.in/media/19.jpg" },
    { id: 38, name: "", title: "", image: "https://cdn.kalingauniversity.ac.in/media/44.jpg" },

    { id: 39, name: "", title: "", image: "https://cdn.kalingauniversity.ac.in/media/18.jpg" },
    { id: 40, name: "", title: "", image: "https://cdn.kalingauniversity.ac.in/media/16.jpg" },
    { id: 41, name: "", title: "", image: "https://cdn.kalingauniversity.ac.in/media/43.jpg" },
    { id: 42, name: "", title: "", image: "https://cdn.kalingauniversity.ac.in/media/14.jpg" },
    { id: 43, name: "", title: "", image: "https://cdn.kalingauniversity.ac.in/media/42.jpg" },
    { id: 44, name: "", title: "", image: "https://cdn.kalingauniversity.ac.in/media/13.jpg" },
    { id: 45, name: "", title: "", image: "https://cdn.kalingauniversity.ac.in/media/15.jpg" },
    { id: 46, name: "", title: "", image: "https://cdn.kalingauniversity.ac.in/media/17.jpg" },
    {
      id: 47,
      name: " ",
      title: " ",
      image: "https://cdn.kalingauniversity.ac.in/media/5.jpg",
    },
    { id: 48, name: "", title: "", image: "https://cdn.kalingauniversity.ac.in/media/41.jpg" },
    { id: 49, name: "", title: "", image: "https://cdn.kalingauniversity.ac.in/media/40.jpg" },
    { id: 50, name: "", title: "", image: "https://cdn.kalingauniversity.ac.in/media/11.jpg" },
    { id: 51, name: "", title: "", image: "https://cdn.kalingauniversity.ac.in/media/9.jpg" },
    { id: 52, name: "", title: "", image: "https://cdn.kalingauniversity.ac.in/media/12.jpg" },
    { id: 53, name: "", title: "", image: "https://cdn.kalingauniversity.ac.in/media/8.jpg" },
    { id: 54, name: "", title: "", image: "https://cdn.kalingauniversity.ac.in/media/10.jpg" },
    { id: 55, name: "", title: "", image: "https://cdn.kalingauniversity.ac.in/media/39.jpg" },
    { id: 56, name: "", title: "", image: "https://cdn.kalingauniversity.ac.in/media/38.jpg" },
    { id: 57, name: "", title: "", image: "https://cdn.kalingauniversity.ac.in/media/7.jpg" },
    { id: 58, name: "", title: "", image: "https://cdn.kalingauniversity.ac.in/media/37.jpg" },
    { id: 59, name: "", title: "", image: "https://cdn.kalingauniversity.ac.in/media/6.jpg" },
  ];

  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const visibleImages = showAll ? mediaImages : mediaImages.slice(0, 9);

  const openImageModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  // Close modal on ESC key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        closeImageModal();
      }
    };
    if (selectedImage) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  return (
    <>
      <SectionHeading
        title={
          <>
            Media Coverage
          </>
        }
        titleClassName="text-center text-2xl md:text-5xl font-stix mt-20"
      />

      {/* -------- Media Grid -------- */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {visibleImages.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 bg-white cursor-pointer"
              onClick={() => openImageModal(img)}
            >
              <img
                src={img}
                alt={`media-${index}`}
                className="w-full h-[300px] object-cover"
              />
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="flex justify-center mt-12">
            <GlobalArrowButton onClick={() => setShowAll(true)}>
              Read More
            </GlobalArrowButton>
          </div>
        )}
      </section>

      {/* -------- Center Of Excellence Slider -------- */}
      <CenterOfExcellence
        centres={excellenceImages}
        title="Awards"
        description={false}
        nameOnly={false}
      />

      {/* -------- Image Modal Popup -------- */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={closeImageModal}
        >
          <div className="relative max-w-7xl max-h-[80vh] w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70"
              aria-label="Close modal"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </button>

            {/* Full Image */}
            <img
              src={selectedImage}
              alt="Full size media"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}
