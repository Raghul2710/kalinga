"use client";

import React from "react";
import FeatureCards from "@/app/components/home/featurecard";

const cards = [
  {
    id: 1,
    title: "Dantewada",
    body: "Places To Visit - Samlur Shiva Temple, Danteshwari Temple, Bacheli, Barsur - An Archaeological Treasure, Fulpad Waterfalls, Dholkal Ganesh",
  },
  {
    id: 2,
    title: "Kawardha",
    body: "Places To Visit - Bhoramdeo Temple, Kawardha Palace, Saroda Reservoir, Madwa Mahal, Radha Krishna Temple",
  },
  {
    id: 3,
    title: "Bijapur",
    body: "Places To Visit - Lankapalli Waterfall, Tirathgarh Falls, Nambi Waterfall, Neelam Sarai Waterfall, Matti Marka",
  },
  {
    id: 4,
    title: "Jagdalpur",
    body: "Places To Visit - Kailash and Kotumsar Cave, Kanger Valley National Park,  Chitradhara Falls, Chitrakote Waterfalls, Bastar Palace, Tribal Villages, Dalpat Sagar Lake, Anthropological Museum, Venkateshwara Swamy Temple, Mavli Temple, Bastar Dussehra (A 75-day tribal celebration), Kondagaon, Dhudmaras ",
  },
  {
    id: 5,
    title: "Bilaspur",
    body: "Places To Visit -  Achanakmar Wildlife Sanctuary, Kutaghat Dam, Kanan Pendari Zoo Park,  Deorani-Jethani Temple, Rama Magneto - The Mall, City Mall 36,  Madku Dweep, Mahamaya Devi Temple, Didneswari Temple, Ratanpur, Malhar",
  },
  {
    id: 6,
    title: "Dhamtari",
    body: "Places To Visit - Gangrel Dam, Sitanandi Wildlife Sanctuary, Sihawa Hills, Jabrra - Eco Tourism, Murrum Silli Dam, Nahara Waterfall, Bova Beach",
  },
  {
    id: 7,
    title: "Bhilai",
    body: "Places To Visit - Bhilai Steel Plant, Civic Centre, Shiva Temple Deobaloda, Shree Shirdi Saibaba Temple, Surya Treasure Island Mall, Maitri Baag Zoo, Nehru Art Gallery, St Vincent Pallotti Church, Jama Masjid, Uwasaggharam Parshwa Tirth",
  },
  {
    id: 8,
    title: "Kanker",
    body: "Places To Visit - Charre-Marre Falls, Kanker Palace, Gadiya Mountain, Malajkudum Waterfall, Keshkal Valley, Mata Mahalaxmi Shakti Peeth Temple, The Jogi Cave, Manjhingarh Hill, Tatamari Hill",
  },
  {
    id: 9,
    title: "Korba",
    body: "Places To Visit - Chaithurgarh Fort, Golden Island, Bango Dam, Kendai Waterfall, Madwarani Temple, Kudurmal, Pali, Mata Sarvamangala Temple, Sitamani, Dev-Pahari Waterfall, Tuman, Kosagaigarh",
  },
  {
    id: 10,
    title: "Raipur ",
    body: "Places To Visit -  Magneto - The Mall, Ambuja City Center Mall, City Center Mall, ISKCON Temple, Naya Raipur Central Park, Kevalya Dham Jain Temple, ZORA The Mall, Urja Park, Purkhouti Muktangan, Shahid Veer Narayan Singh International Cricket Stadium, MM Fun City, Jungle Safari, Nandan Van Zoo, Shree Hatkeshwar Mahadev, Chhattisgarh Regional Science Centre, Marine Drive, Mahant Ghasidas Memorial Museum",
  },
  {
    id: 11,
    title: "Sirpur ",
    body: "Places To Visit - Lakshman Temple, Teevardev Mahavihara, Surang Tila, Baleshwar Shiv Temple, Gandheshwar Temple, The Budh Vihar"
  },
  {
    id: 12,
    title: "Champaran",
    body: "Places To Visit - Shri Vallabhacharya Temple, Mahanadi River",
  },
  {
    id: 13,
    title: "Ambikapur",
    body: "Places To Visit - Ghaghi Waterfalls, Thinthini Patthar, Mahamaya Temple, Oxygen Park, Jogimara and Sitabenga Caves, Surguja Palace, Baanki Dam, Local Handicraft & Textile Markets",
  },
  {
    id: 14,
    title: "Mainpat",
    body: "Places To Visit - Dhakpo Monastery, Tibet Refugee Camp, Tiger Point, Machali Point, Bouncing Land, Tatapani, Jogimara Caves, Parpatiya Sunset Point, Dev Pravah, Fish Point, Bhutahi Jalprapat",
  },
  {
    id: 15,
    title: "Dongarhgarh",
    body: "Places To Visit - Maa Bambleshwari Temple, Pragyagiri, Hajra Fall",
  },
  {
    id: 16,
    title: "Rajim",
    body: "Places To Visit - Rajim Bazaar, Rajim Kumbh Mela, Triveni Sangam, Shree Rajiv Lochan Temple, Ramchandra Temple",
  },
  {
    id: 17,
    title: "Rajnandgaon",
    body: "Places To Visit -  Mangata Wildlife Park, Mata Patal Bhairavi Temple, Adventure Park, Maa Karela Bhawani Temple, Chuna Gota Waterfall, Aqua Village",
  },
  {
    id: 18,
    title: "Durg",
    body: "Places To Visit - Maitri Bagh, Shri Uwassaggaharam Parshwa Tirth, Nagpura",
  },
  {
    id: 19,
    title: "Barnawapara",
    body: "Places To Visit - Barnawapara Wildlife Sanctuary",
  },
  {
    id: 20,
    title: "Janjgir - Champa",
    body: "Places To Visit - Crocodile Park, Pithampur Road Shiv Temple, Shivrinarayan, Shri Vishnu Temple, Damau Dhara Waterfall, Dewar Ghata",
  },
  {
    id: 21,
    title: "Bhatapara",
    body: "Places To Visit - Chuiha Dam, Somnath Temple, Boating Point, Turturiya Dam, Mauli Mata Temple, Singarpur, Damakheda – Kabeer Panth Aashram, Turturiya (Balmiki Ashram and Birthplace of Lav-Kush), Mawali Mata Temple, Siddheshwar Temple",
  },
  {
    id: 22,
    title: "Manendragarh-Chirmiri-Bharatpur",
    body: "Places To Visit - Amritdhara Waterfall, Ramdaha Falls, Siddh Baba Mountain, National Marine Gondwana Fossils Park, Chang Devi Temple, Jatashankar Cave",
  },
  {
    id: 23,
    title: "Raigarh",
    body: "Places To Visit - Moti Mahal Palace, Raigarh Fort, Ram Jharna, Gomarda Wildlife Sanctuary, Kelo Dam, Ghatarani Waterfalls, Parsada Jharna, Singhanpur Caves, Gaurishankar Temple, Botalda Waterfall",
  },
  {
    id: 24,
    title: "Jashpur",
    body: "Places To Visit - Rani Dah Waterfall, Danpuri Waterfall, Rajpuri Waterfall, Badalkhol Wildlife Sanctuary, Gullu Waterfall, Khuriarani Cave, Kinkel Valley, Dangari Waterfall, Makarbhaja Waterfall",
  },
  {
    id: 25,
    title: "Gariaband",
    body: "Places To Visit - Jatmayi Temple, Ghatarani Temple and Waterfall, Udanti Sitanadi Tiger Reserve, Bhuteshwarnath Temple, Devdhara Waterfall",
  },
  {
    id: 26,
    title: "Balod",
    body: "Places To Visit - Siyadevi Waterfall, Tandula Dam and Lake, Gondali Dam, Markatola Valley Selfie Point, Jamdipath Dam, Deori Picnic Spot",
  },
  {
    id: 27,
    title: "Narayanpur",
    body: "Places To Visit - Chirchiri Waterfall, Gullu Waterfall, Baghmara Waterfall, Benjora Waterfall, Rajpuri Waterfall, Badalkhol Wildlife Sanctuary, Kinkel Valley",
  },
  {
    id: 28,
    title: "Korea",
    body: "Places To Visit - Guru Ghasidas National Park, Satrenga, Baniyadhara Waterfall, Guru Ghasidas-Tamor Pingla Tiger Reserve, Gaurghat Waterfall, Jhumka Dam, Ghunghutta Dam",
  },
  {
    id: 29,
    title: "Bijapur",
    body: "Places To Visit - Indravati National Park, Bhairamgarh Wildlife Sanctuary, Nambi Waterfalls, Neelam Sarai Waterfall, Lankapalli Waterfall, Muchnar River Beach, Bijapur Fort, Gagan Mahal, Citadel, Bhairamdev Temple",
  }



];
const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/contact-us/contact-us-banner.webp",
  pageTitle: "Chhattisgarh",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Chhattisgarh", href: "/chhattisgarh" },
  ],
};

// Register breadcrumb data globally
if (typeof window !== "undefined") {
  window.__breadcrumbData = breadcrumbData;
}

export default function Chhattisgarh() {
  return (
    <div>
      <FeatureCards
        title="Popular Tourist Attractions"
        subtitle="Discover Chhattisgarh"
        description="Located in the heart of India and also known as the ‘Rice Bowl of India’, Chhattisgarh is known for its popular temples, waterfalls, and historical sites. It has become a hub for students, researchers, travellers, and entrepreneurs due to growing opportunities in education, sustainable development, innovation, and exploration. It is famous for its Dhokra (bell metal) art, terracotta sculptures, and bamboo crafts that are admired globally for their detailing and precision. Chhattisgarh offers an inspiring learning environment and lifestyle. "
        cards={cards.map((card) => ({
          ...card,
          body: card.body.startsWith("Places To Visit") ? (
            <span>
              <b>Places To Visit</b>
              {card.body.substring("Places To Visit".length)}
            </span>
          ) : (
            card.body
          ),
        }))}
        cardMinHeight="180px"
        cardLineClamp={3}
      />
    </div>
  );
}