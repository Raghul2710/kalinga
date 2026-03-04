import ResearchResourcesClient from "./ResearchResourcesClient";

export const metadata = {
  title: "Research Resources | Academic Toolkit | Kalinga University",
  description: "Access a wide range of research resources at Kalinga University, including library access, SPSS software, high-performance computing, and seed money for innovation.",
  keywords: "research resources Kalinga University, academic toolkit Raipur, university research facilities Chhattisgarh, library access university India",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/research-resources",
  },
};

const Items = [
  {
    id: 1,
    text: "Library access to thousands of books, journals, magazines, research papers, dissertations, e-catalogues, online search tools, newspapers, and rare publications."
  },
  {
    id: 2,
    text: "SPSS software support for academic and research work."
  },
  {
    id: 3,
    text: "Online study materials including DELNET, NPTEL, National Digital Library, J-Gate (Social Science and Science & Technology), INSPEC by Elsevier, and Web of Science."
  },
  {
    id: 4,
    text: "CIF labs equipped with advanced instruments such as X-Ray Diffractometer, Viscometer, Scanning Electron Microscope, Digital pH Meter, 3D Printer, and more."
  },
  {
    id: 5,
    text: "Computer labs with high-performance computing systems and pre-installed software."
  },
  {
    id: 6,
    text: "Centres of Excellence including IBM Innovation Centre for Education, IamSMEofIndia, EBLU, BDS Education, IIoT, BOSCH, and JustAuto."
  },
  {
    id: 7,
    text: "Publication support for writing, editing, indexing, and publishing papers in UGC-CARE and Scopus-listed journals."
  },
  {
    id: 8,
    text: "IPR Support Cell assisting with patent filing, copyright support, ethics compliance, and plagiarism detection."
  },
  {
    id: 9,
    text: "Incubation Centre through Kalinga Incubation Foundation supporting startup ideas, business models, mentorship, and fund generation."
  },
  {
    id: 10,
    text: "Workshops, seminars, and competitions to showcase talent to a larger audience."
  },
  {
    id: 11,
    text: "Research grants and funding guidance for applying to grants and fellowships."
  }
];

export default function ResearchResources() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Research Resources - Kalinga University",
    "description": "State-of-the-art resources supporting academic research and innovation at Kalinga University.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
        { "@type": "ListItem", "position": 2, "name": "Research Resources", "item": "https://kalingauniversity.ac.in/research-resources" }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ResearchResourcesClient items={Items} />
    </>
  );
}