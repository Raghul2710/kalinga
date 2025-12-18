"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import GlobalArrowButton from "../general/global-arrow_button";

const defaultResources = [
  {
    id: 1,
    title: "SCOPUS",
    category: "E-Resources",
    description:
      "Scopus is a comprehensive abstract and citation database used for academic research across various disciplines. Developed by Elsevier, it is widely utilized by researchers, academics, and institutions to access a broad range of scientific literature and track research impact. A total of 49,037 journals from various disciplines are indexed in this database.",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
    href: "https://www.elsevier.com/en-in/products/scopus",
    buttonText: "Open Link",
  },
  {
    id: 2,
    title: "LexisNexis",
    category: "E-Resources",
    description:
      "LexisNexis is a global provider of information and analytics solutions for professionals in the legal, risk management, corporate, government, and academic sectors, offering content-enabled workflows, data analytics, and AI-powered tools to enhance decision-making and productivity. LexisNexis pioneered the electronic accessibility of legal documents and has since evolved into a comprehensive database offering a vast range of resources such as legal resources, legal news, business and company information, IPR, Taxation and Labour Law etc.",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
    href: "https://www.lexisnexis.com/community/insights/professional/resources",
    buttonText: "Open Link",
  },
  {
    id: 3,
    title: "DELNET",
    category: "E-Resources",
    description:
      "DELNET was started at the India International Centre Library in January 1988 and was registered as a society in 1992. It was initially supported by the National Information System for Science and Technology (NISSAT), Department of Scientific and Industrial Research, Government of India. It was subsequently supported by the National Informatics Centre, Department of Information Technology, Ministry of Communications and Information Technology, Government of India and the Ministry of Culture, Government of India.",
   image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
    href: "https://www.delnet.in/",
    buttonText: "Open Link",
  },
  {
    id: 4,
    title: "DRILLBIT",
    category: "E-Resources",
    description:
      "Drillbit is a cloud-based tool designed to assist educators and students in managing and improving academic writing skills. Drillbit is designed to enhance the writing process, providing tools and resources that support better writing practices and academic integrity. Its focus on grammar, style, and feedback makes it a valuable resource for both students looking to improve their writing and educators aiming to support their students’ development.",
   image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
    href: "https://www.drillbitplagiarism.com/",
    buttonText: "Open Link",
  },
  {
    id: 5,
    title: "TURNITIN",
    category: "E-Resources",
    description:
      "Turnitin is widely used across educational institutions to maintain academic integrity and improve the quality of scholarly work. It’s important to note that while Turnitin is a powerful tool, it should be used as part of a broader approach to teaching academic integrity and writing skills.",
   image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
    href: "https://www.turnitin.com/",
    buttonText: "Open Link",
  },
  {
    id: 6,
    title: "National Programme on Technology Enhanced Learning (NPTEL)",
    category: "E-Resources",
    description:
      "Initiated by seven Indian Institutes of Technology. The main goal of NPTEL Phase II was to build on the engineering and core science courses launched previously in NPTEL Phase I. An additional 600 web and video courses were created in all major branches of engineering, physical sciences at the undergraduate and postgraduate levels and management courses at the postgraduate level. Several improvements such as indexing of all video and web courses and keyword search were implemented 3000+Courses Available for Self-study.",
   image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
    href: "https://nptel.ac.in/",
    buttonText: "Open Link",
  },
  {
    id: 7,
    title: "National Digital Library of India (NDLI)",
    category: "E-Resources",
    description:
      "NDLI is a project under Ministry of Human Resource Development, India. The objective is to collect and collate metadata and provide full text index from several national and international digital libraries, as well as other relevant sources. It is a digital repository containing textbooks, articles, videos, audio books, lectures, simulations, fiction and all other kinds of learning media. The NDLI provides access to many books in English and various Indian languages NDL host over 4,58,715+ Item in Repository.",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
    href: "https://club.ndl.iitkgp.ac.in/club-home",
    buttonText: "Open Link",
  },
  {
    id: 8,
    title: "IRINS",
    category: "E-Resources",
    description:
      "IRINS is web-based Research Information Management (RIM) service developed by the Information and Library Network (INFLIBNET) Centre. The portal facilitates academic, R&D organizations and faculty members, scientists to collect, curate and showcase scholarly communication activities and provide an opportunity to create the scholarly network. The IRINS is available as free software-as-service to the academic and R&D organizations in India. The IRINS would support to integrate the existing research management system such as HR system, course management, grant management system, institutional repository, open and commercial citation databases, scholarly publishers, etc. It has integrated with academic identity such as ORCID ID, ScopusID, Research ID, Microsoft Academic ID, Google Scholar ID for ingesting the scholarly publication from various sources.",
  image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
    href: "https://irins.org/",
    buttonText: "Open Link",
  },
  {
    id: 9,
    title: "INFEED",
    category: "E-Resources",
    description:
      "INDIAN Access Management Federation (INFED), the first Federation in India, has adopted Shibboleth, a standard-based open-source software, for authenticating authorized users from colleges and universities and provide them seamless access to e-resources from anywhere, anytime. The INFLIBNET Centre, as one of its core mandates, provides access to scholarly e-resource to universities and colleges in India under the e-ShodhSindhu. The INFED is being set-up as a centralized agency to coordinate with member institutions in the process of implementation of user authentication and access control mechanism distributed across participating institutions using standardized rules and metadata for exchange of attributes.",
   image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
    href: "https://infeed.in/",
    buttonText: "Open Link",
  },
];

export default function LibraryResource({
  title = "E-Resources",
  subtitle = "Obtain access to premier libraries through your ERP portal.",
  resources = defaultResources,
  backgroundColor = "bg-[var(--light-gray)]",
  backgroundColorcard = "bg-white",
  imageWidth = 420,
  imageHeight = 230,
  imageContainerClass = "w-full md:w-2/5",
}) {
  return (
    <section className={`${backgroundColor} pt-8 pb-16`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-6">
          <h2 className="mb-2">{title}</h2>
          {subtitle && (
            <p className="text-[var(--light-text-gray)] max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <Swiper
          modules={[Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          grabCursor
          pagination={{
            clickable: true,
            el: ".library-resource-pagination",
          }}
          onSwiper={(swiper) => {
            swiper.pagination.init();
            swiper.pagination.render();
            swiper.pagination.update();
          }}
        >
          {resources.map((res) => (
            <SwiperSlide key={res.id}>
              <div className={`${backgroundColorcard} rounded-2xl shadow-sm flex flex-col md:flex-row gap-4 md:gap-8 items-center`}>
                <div className={imageContainerClass}>
                  <Image
                    src={res.image}
                    alt={res.title}
                    width={imageWidth}
                    height={imageHeight}
                    className="rounded-xl object-cover w-full h-full"
                  />
                </div>

                <div className="w-full md:w-3/5 flex flex-col gap-5 px-5 py-8">
                  <div className="flex justify-end">
                    <span className="px-3 py-1 rounded-lg bg-[var(--dark-blue)] text-white text-xs">
                      {res.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="!text-3xl md:!text-4xl mb-3">{res.title}</h3>
                    <p className="text-[var(--light-text-gray)] text-sm">
                      {res.description}
                    </p>
                  </div>

                  <a href={res.href} target="_blank" rel="noreferrer" className="w-fit">
                    <GlobalArrowButton className="w-fit mt-1 text-sm">
                      {res.buttonText}
                    </GlobalArrowButton>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="library-resource-pagination flex justify-center gap-3 mt-6" />
      </div>
    </section>
  );
}
