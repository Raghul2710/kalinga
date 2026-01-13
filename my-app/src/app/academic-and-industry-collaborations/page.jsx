"use client";

import AdmissionCareer from "../components/general/admission_cta";
import CenterOfExcellence from "../components/about/center_of_excellence";

/* ---------------- Breadcrumb ---------------- */
const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/campuslife.webp",
  pageTitle: "Academic and Industry Collaborations",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    {
      label: "Academic and Industry Collaborations",
      href: "academic-and-industry-collaborations",
    },
  ],
};

if (typeof window !== "undefined") {
  window.__breadcrumbData = breadcrumbData;
}

/* ---------------- DATA (Easy to Update) ---------------- */
const clubSections = [
  {
    id: 1,
    title: "MOU Partners",
    clubs: [
      {
        name: "Profsys Softwares Pvt. Ltd.",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/Academic-and-Industry-Collaborations/Profsys+Softwares+Pvt.+Ltd..webp",
      },

      {
        name: "LG Electronics India Pvt. Ltd.",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/Academic-and-Industry-Collaborations/LG+Electronics+India+Pvt.+Ltd..webp",
      },

      {
        name: "Kalpataru Power Transmission Ltd.",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/Academic-and-Industry-Collaborations/Kalpataru+Power+Transmission+Ltd..webp",
      },

      {
        name: "Network computer",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/Academic-and-Industry-Collaborations/Network+company.webp",
      },
      {
        name: "Primeone Workforce Pvt.Ltd",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/Academic-and-Industry-Collaborations/Primeone+Workforce+Pvt.+Ltd..webp",
      },

      {
        name: "A1 Galaxy Trademark Pvt. Ltd.",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/Academic-and-Industry-Collaborations/A1+Galaxy+Trademark+Pvt.+Ltd..webp",
      },
      {
        name: "R.R. Ispat",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/Academic-and-Industry-Collaborations/R.R.+Ispat.webp",
      },
      {
        name: "JV Realty",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/Academic-and-Industry-Collaborations/JV+Realty.webp",
      },

      {
        name: "Globecorp Microfinance Foundation",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/Academic-and-Industry-Collaborations/Globecorp+Microfinance+Foundation.webp",
      },
      {
        name: "Saubhagya Ventures Pvt. Ltd.",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/Academic-and-Industry-Collaborations/Saubhagya+Ventures+Pvt.+Ltd..webp",
      },
      {
        name: "Patidar Furniture House",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/Academic-and-Industry-Collaborations/Patidar+Furniture+House.webp",
      },
      {
        name: "CAD Academy",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/Academic-and-Industry-Collaborations/cad.webp",
      },
      {
        name: "Magic Color Planet",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/Academic-and-Industry-Collaborations/Magic+Color+Planet.webp",
      },
      {
        name: " Lucintel Services India Pvt. Ltd.",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/Academic-and-Industry-Collaborations/Lucintel+Services+India+Pvt.+Ltd..webp",
      },
      {
        name: "Krishna Holidays",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/Academic-and-Industry-Collaborations/Krishna+Holidays.webp",
      },
      {
        name: "Param Web Info",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/Academic-and-Industry-Collaborations/Param+Web+Info.webp",
      },
      {
        name: "Just Dial Ltd.",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/Academic-and-Industry-Collaborations/Just+Dial+Ltd..webp",
      },
      {
        name: "Adecco Group India",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/Academic-and-Industry-Collaborations/Adecco+Group+India.webp",
      },
      {
        name: "Globussoft Pvt. Ltd.",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/Academic-and-Industry-Collaborations/Globussoft+Pvt.+Ltd..webp",
      },
      {
        name: "Globecorp Skill Council Services Pvt. Ltd.",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/Academic-and-Industry-Collaborations/Globecorp+Skill+Council+Services+Pvt.+Ltd..webp",
      },
      {
        name: "Construction Industry Development Council (CIDC)",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/Academic-and-Industry-Collaborations/Construction+Industry+Development+Council+(CIDC).webp",
      },
      {
        name: "Bansod Realtors",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/Academic-and-Industry-Collaborations/Bansod+Realtors.webp",
      },
      {
        name: " Saluja Graphix",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/Academic-and-Industry-Collaborations/Saluja+Graphix.webp",
      },
      {
        name: "Swastik Group",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/Academic-and-Industry-Collaborations/Swastik+Group.webp",
      },
      {
        name: "Tata Power",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/Academic-and-Industry-Collaborations/Tata+Power.webp",
      },
      {
        name: " SaiSun Outsourcing Services Pvt. Ltd.",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/Academic-and-Industry-Collaborations/SaiSun+Outsourcing+Services+Pvt.+Ltd..webp",
      },
      {
        name: " 195 Holidays",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/Academic-and-Industry-Collaborations/195+Holidays.webp",
      },
      {
        name: " 3S Inc.",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/Academic-and-Industry-Collaborations/3S+Inc.webp",
      },
      {
        name: "Cytogene Research & Development",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/Academic-and-Industry-Collaborations/Cytogene+Research+%26+Development.webp",
      },
      {
        name: "Eiffcon",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/Academic-and-Industry-Collaborations/Eiffcon.webp",
      },

    ],
  },
  {
    id: 2,
    title: "Certificates  ",
    clubs: [
      {
        name: "IICCI – Gold",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/Academic-and-Industry-Collaborations/IICCI+-Gold1.webp",
      },
      {
        name: "PHD Chamber",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/Academic-and-Industry-Collaborations/PHD-Chamber.webp",
      },
      {
        name: "BNI – 2019",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/Academic-and-Industry-Collaborations/BNI+-+2019.webp",
      },
      {
        name: "BNI – 2018",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/Academic-and-Industry-Collaborations/BNI+-+2018.webp",
      },
      {
        name: "EDU-CLOUD",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/Academic-and-Industry-Collaborations/certificate-1.webp",
      },

    ],
  },
  {
    id: 3,
    title: "Partnership with National Academic Institutes",
    clubs: [
      { name: "Dr. Radhabai Govt. Naveen Girls College, Raipur – Chhattisgarh", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Academic-and-Industry-Collaborations/Dr.+Radhabai+Govt.+Naveen+Girls+College%2C+Raipur+%E2%80%93+Chhattisgarh.webp" },
      { name: "Rajamahendri Institute of Engineering & Technology – Andhra Pradesh", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Academic-and-Industry-Collaborations/Rajamahendri+Institute+of+Engineering+%26+Technology+%E2%80%93+Andhra+Pradesh.webp" },
      { name: "Sathyabama Institute of Science & Technology – Chennai, Tamil Nadu", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Academic-and-Industry-Collaborations/Sathyabama+Institute+of+Science+%26+Technology+%E2%80%93+Chennai%2C+Tamil+Nadu.webp" },
      { name: "Mgm's college of engineering Nanded-Maharashtra", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Academic-and-Industry-Collaborations/Mgm's+college+of+engineering+Nanded-Maharashtra.webp" },
      { name: "Rajiv Gandhi National University of Law, Punjab", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Academic-and-Industry-Collaborations/Rajiv+Gandhi+National+University+of+Law%2C+Punjab.webp" },
      { name: "Govt. Digvijay PG Autonomous College, Rajnandgaon – Chhattisgarh", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Academic-and-Industry-Collaborations/Govt.+Digvijay+PG+Autonomous+College%2C+Rajnandgaon+%E2%80%93+Chhattisgarh.webp" },

    ],
  },
  {
    id: 4,
    title: "Partnership with International Academic Institutions",
    clubs: [
      { name: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Academic-and-Industry-Collaborations/international-institutions-1.webp" },
      { name: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Academic-and-Industry-Collaborations/international-institutions-2.webp" },
      { name: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Academic-and-Industry-Collaborations/international-institutions-3.webp" },
      { name: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Academic-and-Industry-Collaborations/international-institutions-4.webp" },
      { name: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Academic-and-Industry-Collaborations/international-institutions-5.webp" },
      { name: "", image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Academic-and-Industry-Collaborations/international-institutions-6.webp" },

    ],
  },
];

/* ---------------- PAGE ---------------- */
export default function Page() {
  return (
    <>
      {/* Breadcrumb */}


      {/* Dynamic Sections */}
      {clubSections.map((section) => (
        <CenterOfExcellence
          key={section.id}
          title={section.title}
          description=""
          showDescription={false}
          centres={section.clubs.map((club, index) => ({
            id: index + 1,
            name: club.name || " ",
            title: "",
            image: club.image || "/placeholder-logo.svg",
          }))}
        />
      ))}

      {/* CTA */}
      <AdmissionCareer />
    </>
  );
}
