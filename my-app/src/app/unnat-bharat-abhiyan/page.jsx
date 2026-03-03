"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/general/tab";
import FAQ from "../components/general/faq";
import ImageContent from "@/app/components/ccrc/imagecontent";
import MainIntro from "../components/about/main_intro";
import VisionMission from "../components/about/vision-mission";
import ImageListItem from "../components/ccrc/imagelistitem";

import DataTable from "@/app/components/general/data-table";
import ContactSection from '../components/cif/contact_section';
import AdmissionSteps from "../components/admissions/admission-steps";
import SectionHeading from "../components/general/SectionHeading";
import Gallery from "../components/general/gallery";
const ubaSteps = [
  {
    id: 1,
    stepNumber: "01",
    title: "Palaud",
    description: "",
    backDescription: "",
    icon: "https://cdn.kalingauniversity.ac.in/unnat-bharat-abhiyan/check-box.png",
  },
  {
    id: 2,
    stepNumber: "02",
    title: "Kotni",
    description: "",
    backDescription: "",
    icon: "https://cdn.kalingauniversity.ac.in/unnat-bharat-abhiyan/check-box.png",
  },
  {
    id: 3,
    stepNumber: "03",
    title: "Tandul",
    description: "",
    backDescription: "",
    icon: "https://cdn.kalingauniversity.ac.in/unnat-bharat-abhiyan/check-box.png",
  },
  {
    id: 4,
    stepNumber: "04",
    title: "Kuhera",
    description: "",
    backDescription: "",
    icon: "https://cdn.kalingauniversity.ac.in/unnat-bharat-abhiyan/check-box.png",
  },
  {
    id: 5,
    stepNumber: "05",
    title: "Parsada",
    description: "",
    backDescription: "",
    icon: "https://cdn.kalingauniversity.ac.in/unnat-bharat-abhiyan/check-box.png",
  },
  {
    id: 6,
    stepNumber: "06",
    title: "Kotara Bhantha",
    description: "",
    backDescription: "",
    icon: "https://cdn.kalingauniversity.ac.in/unnat-bharat-abhiyan/check-box.png",
  },
];

/* ---------------- Vision & Mission ---------------- */
const visionMissionData = [
  {
    visionTitle: "Vision",
    missionTitle: "Mission",
    visionText:
      "Unnat Bharat Abhiyan is inspired by the vision of transformational change in rural development processes by leveraging knowledge institutions to help build the architecture of an Inclusive India.",
    missionText:
      "The Mission of Unnat Bharat Abhiyan is to enable higher educational institutions to work with the people of rural India in identifying development challenges and evolving appropriate solutions for accelerating sustainable growth. It also aims to create a virtuous cycle between society and an inclusive academic system by providing knowledge and practices for emerging professions and to upgrade the capabilities of both the public and the private sectors in responding to the development needs of rural India.",
    showImage: false,
  },
];

/* ---------------- Goals ---------------- */
const objectives = [
  { text: "To build an understanding of the development agenda within institutions of Higher Education and an institutional capacity and training relevant to national needs, especially those of rural India." },
  { text: "To re-emphasise the need for field work, stakeholder interactions and design for societal objectives as the basis of higher education." },
  { text: "To stress rigorous reporting and useful outputs as central to developing new professions." },
  { text: "To provide rural India and regional agencies with access to the professional resources of the institutes of higher education, especially those that have acquired academic excellence in the fields of science, engineering, technology, and management." },
  { text: "To improve development outcomes as a consequence of this research. To develop new professions and new processes to sustain and absorb the outcomes of research." },
  { text: "To foster a new dialogue within the larger community on science, society, and the environment, and to develop a sense of dignity and collective destiny." },
];


/* ---------------- UBA Contact ---------------- */
const ubaContact = [
  {
    imageSrc:
      "https://cdn.kalingauniversity.ac.in/unnat-bharat-abhiyan/chart+(1).png",
    title: "Dr. Sandeep Gandhi",
    subtitle: "UBA Principal Investigator (Coordinator)",
    department: "Registrar, Kalinga University",
    email: "registrar@kalingauniversity.ac.in",
    phone: "+91-9303097043",

  },
];


/* ---------------- UBA Team ---------------- */
const ubaTeamTable = [
  { slNo: 1, name: "Dr. Vijayalaxmi Biradar", designation: "Director IQAC", role: "Member" },
  { slNo: 2, name: "Dr. Smita Premanand", designation: "Assistant Professor, NSS Program Officer", role: "Member" },
  { slNo: 3, name: "Mr. Anup Kumar Jana", designation: "Assistant Professor", role: "Member" },
  { slNo: 4, name: "Mr. Sarat Chandra Mohanty", designation: "Assistant Professor", role: "Member" },
  { slNo: 5, name: "Dr. Anu G Pillai", designation: "Assistant Professor", role: "Member" },
  { slNo: 6, name: "Dr. Anita Verma", designation: "Assistant Professor", role: "Member" },
  { slNo: 7, name: "Ms. Rupal Gupta", designation: "Research Associate", role: "Member" },
  { slNo: 8, name: "Mr. Ashwan Kumar Sahu", designation: "IQAC Office Assistant", role: "Member" },
  { slNo: 9, name: "Mr. Hemant Kumar Sahu", designation: "IQAC Office Assistant", role: "Member" },
];


// CTCD common styles (reuse for UBA tabs)

const CARD_TEXT_CLASSNAME = "mt-[10px] text-[var(--foreground)]";
const SECTION_TITLE_CLASSNAME = "font-stix text-1xl md:text-[30px] text-[var(--foreground)]";

/* ---------------- UBA Slider Images ---------------- */
const ubaImages = [
  { id: 1, image: "https://cdn.kalingauniversity.ac.in/unnat-bharat-abhiyan/1.jpg", alt: "UBA Activity 1" },
  { id: 2, image: "https://cdn.kalingauniversity.ac.in/unnat-bharat-abhiyan/2.jpg", alt: "UBA Activity 2" },
  { id: 3, image: "https://cdn.kalingauniversity.ac.in/unnat-bharat-abhiyan/3.jpg", alt: "UBA Activity 3" },
  { id: 4, image: "https://cdn.kalingauniversity.ac.in/unnat-bharat-abhiyan/4.jpg", alt: "UBA Activity 4" },
  { id: 5, image: "https://cdn.kalingauniversity.ac.in/unnat-bharat-abhiyan/5.jpg", alt: "UBA Activity 5" },
  { id: 6, image: "https://cdn.kalingauniversity.ac.in/unnat-bharat-abhiyan/6.jpg", alt: "UBA Activity 6" },
  { id: 7, image: "https://cdn.kalingauniversity.ac.in/unnat-bharat-abhiyan/7.jpg", alt: "UBA Activity 7" },
  { id: 8, image: "https://cdn.kalingauniversity.ac.in/unnat-bharat-abhiyan/8.jpg", alt: "UBA Activity 8" },
  { id: 9, image: "https://cdn.kalingauniversity.ac.in/unnat-bharat-abhiyan/9.jpg", alt: "UBA Activity 9" },
  { id: 10, image: "https://cdn.kalingauniversity.ac.in/unnat-bharat-abhiyan/10.jpg", alt: "UBA Activity 10" },
  { id: 11, image: "https://cdn.kalingauniversity.ac.in/unnat-bharat-abhiyan/11.jpg", alt: "UBA Activity 11" },
];

/* ---------------- Page ---------------- */
export default function UnnatBharatAbhiyanPage() {
  const pathname = usePathname();




  return (

    <div className="bg-white">

      <ImageContent
        title="Unnat Bharat Abhiyan"
        description="Unnat Bharat Abhiyan (UBA) was launched by the Ministry of Education in 2014, which aims to address pressing challenges of rural India and connect them with higher education institutions for their holistic growth and development. Inspired by Gandhiji’s vision in Hind Swaraj, UBA supports the growth of self-sustained villages using eco-friendly and community-based technologies. The conceptualisation of Unnat Bharat Abhiyan started with the initiative of a group of dedicated faculty members of the Indian Institute of Technology (IIT) Delhi, working for a long time in the area of rural development and appropriate technology. India’s 70% of the population lives in rural areas, and this initiative will meet their needs of life, like food, energy, sanitation, education, health, and livelihood, reducing their migration towards their cities and improving growth and job opportunities in their areas."
        imageSrc="https://cdn.kalingauniversity.ac.in/unnat-bharat-abhiyan/news-6047.webp"
        readmore={false}
        subtitle={false}
      />

      <MainIntro
        title="Our Commitment Towards Rural Transformation"
        description={[
          "Kalinga University proudly participates in the Unnat Bharat Abhiyan as a voluntary organisation by contributing towards rural progress. It has received approval on 07-10-2022. The university has taken significant measures to promote sustainable solutions and improve its infrastructure and lifestyle. Through fieldwork and surveys, it encourages rural empowerment by bridging the knowledge with the real community needs.",
        ]}
        imageUrl="https://cdn.kalingauniversity.ac.in/common/students-3.jpg"
      />

      <VisionMission data={visionMissionData} showImg={false} />

      <ImageListItem
        items={objectives}
        imageSrc="https://cdn.kalingauniversity.ac.in/common/kalinga-students-2.jpg"
        title="Goals of Unnat Bharat Abhiyan"
        description={false}
      />
      <AdmissionSteps
        steps={ubaSteps}
        bgColor="bg-white"
        title="Villages We Adopted Under the UBA Scheme"
        showReadMore={false}
        showIcon={true}
        subtitle=""
        showHeaderButton={false}
      />
      <div className="container mx-auto px-4 mt-5">
        <div className="grid grid-cols-1  lg:grid-cols-12 items-center gap-8">

          {/* IMAGE */}
          <div className="lg:col-span-4 flex justify-center mb-2 lg:mb-25 lg:justify-start relative z-20 lg:translate-x-6">


            <div className="bg-[var(--lite-sand)] rounded-2xl  p-2 w-[280px] sm:w-[320px] md:w-full max-w-[380px]">
              <img
                src="https://cdn.kalingauniversity.ac.in/unnat-bharat-abhiyan/chart+(1).png"
                alt="Dr. Sandeep Gandhi"
                className="w-full h-[300px] md:h-[380px]   object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* BLUE CARD */}
          <div className="lg:col-span-8 relative mt-0 lg:mt-40 lg:left-[-40px] z-10">

            <div className="bg-[var(--dark-blue)] rounded-xl p-6 sm:p-10 md:p-14 lg:pl-16">

              {/* NAME */}
              <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-stix mb-2">
                Dr. Sandeep Gandhi
              </h3>

              {/* DESIGNATION */}
              <p className="text-white/80 text-sm sm:text-base mb-6 leading-relaxed">
                UBA Principal Investigator (Coordinator)<br />
                Registrar, Kalinga University
              </p>

              {/* CONTACT */}
              <div className="space-y-5 text-white/80">

                {/* EMAIL */}
                <div className="flex items-center gap-3 break-all">
                  <svg className="w-5 h-5 text-[var(--dark-orange-red)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a href="mailto:registrar@kalingauniversity.ac.in" className="underline">
                    registrar@kalingauniversity.ac.in
                  </a>
                </div>

                {/* PHONE */}
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--dark-orange-red)] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+91-9303097043</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="container mx-auto mt-16">
        {/* Title */}
        <h2 className="font-stix text-2xl md:text-[36px] text-center text-[var(--foreground)] mb-6">
          UBA Committee
        </h2>

        {/* Table Wrapper */}
        <div className="overflow-x-auto">
          <DataTable
            columns={[
              { key: "slNo", label: "S. No.", width: "w-24" },
              { key: "name", label: "Name", width: "w-72" },
              { key: "designation", label: "Designation", width: "w-80" },
              { key: "role", label: "Role in UBA", width: "w-40" },
            ]}
            data={ubaTeamTable}
            overflowX={true}
            className="shadow-none"
            headerBgColor="bg-[var(--button-red)]"
            headerTextColor="text-white"
            evenRowBg="bg-white"
            oddRowBg="bg-gray-50"
          />
        </div>
      </div>


      <SectionHeading
        title="Activities Organised by KU"
        titleClassName="mt-20 text-center"
      />
      {/* ================== UBA ACTIVITIES TABS ================== */}


      <div className="mt-20 mx-2 rounded-xl bg-[var(--dark-blue)] py-16">
        <div className="container mx-auto">
          <Tabs defaultValue="infra">
            <TabsList className="mb-8 justify-center">
              <TabsTrigger value="infra">
                Infrastructure Development
              </TabsTrigger>

              <TabsTrigger value="survey">
                Village Survey
              </TabsTrigger>

              <TabsTrigger value="garbage">
                Smart Garbage Monitoring
              </TabsTrigger>
            </TabsList>


            <div className="mt-6 rounded-xl bg-white p-8">

              {/* TAB 1 */}
              <TabsContent value="infra">
                {/* ================= INFRASTRUCTURE DEVELOPMENT ================= */}
                <div className="space-y-6">

                  <h2 className={SECTION_TITLE_CLASSNAME}>

                    Infrastructure (Basic Amenities) Development of Government Schools
                  </h2>
                  <p className={CARD_TEXT_CLASSNAME}>


                    An infrastructure development program for Government schools in rural areas
                    of Naya Raipur was conducted by the National Service Scheme (NSS) unit and
                    Internal Quality Assurance Cell (IQAC) of Kalinga University from 22-08-2022 to
                    27-08-2022. This program aimed to provide basic amenities to Government schools
                    present in rural areas to develop their infrastructure. In total,
                    <strong> 6 faculty members</strong> and <strong>30 students</strong> participated
                    in the event.
                  </p>

                  <p className={CARD_TEXT_CLASSNAME}>


                    During the program, a team from the NSS unit and the IQAC cell of Kalinga
                    University visited the following seven schools:
                  </p>

                  <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)]">
                    <li>Govt. Primary School, Kotni</li>
                    <li>Govt. Primary School, Palaud</li>
                    <li>Govt. Primary School, Kuhera</li>
                    <li>Govt. Primary School, Parsada</li>
                    <li>Govt. Middle School, Kotni</li>
                    <li>Govt. Middle School, Tandul</li>
                    <li>Govt. Middle School, Kuhera</li>
                  </ul>

                  <p className={CARD_TEXT_CLASSNAME}>


                    Initially, a survey was carried out to fetch the requirements of the Government
                    schools, and based on this, various amenities like Green Board, Carpet,
                    Dustbin, Almira, Book Rack, wheel chair, etc., were distributed to the above
                    Government schools of Naya Raipur. This initiative brought a smile to the
                    faces of the students and teachers of the schools. Finally, the Head
                    Master/Mistress appreciated this initiative of Kalinga University by
                    providing an appreciation certificate.
                  </p>

                  <div className="mt-8">
                    <Gallery
                      title="Glimpses"
                      images={ubaImages}
                      backgroundColor="bg-white"
                    />
                  </div>

                </div>

              </TabsContent>

              {/* TAB 2 */}
              <TabsContent value="survey">
                {/* ================= VILLAGE / HOUSEHOLD SURVEY ================= */}
                <div className="space-y-6">

                  <h2 className={SECTION_TITLE_CLASSNAME}>

                    Village / Household Surveys in the Kalinga University UBA Adopted Villages
                  </h2>


                  {/* ===== TABLE ===== */}
                  <div className="overflow-x-auto rounded-xl border border-gray-300">

                    <table className="w-full border-collapse text-left">

                      <thead className="bg-[var(--dark-blue)] text-white">
                        <tr>
                          <th className="border border-gray-300 px-4 py-3">S. No.</th>
                          <th className="border border-gray-300 px-4 py-3">Date of Visit</th>
                          <th className="border border-gray-300 px-4 py-3">Village Name</th>
                          <th className="border border-gray-300 px-4 py-3 text-center">Houses Surveyed</th>
                        </tr>
                      </thead>

                      <tbody className="bg-white">


                        <tr>
                          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">1</td>
                          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">03-11-2022</td>
                          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">Palaud</td>
                          <td className="border border-gray-300 px-4 py-3 text-center text-[var(--foreground)]">52</td>
                        </tr>

                        <tr>
                          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">2</td>
                          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">04-11-2022</td>
                          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">Kotni</td>
                          <td className="border border-gray-300 px-4 py-3 text-center text-[var(--foreground)]">52</td>
                        </tr>

                        <tr>
                          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">3</td>
                          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">05-11-2022</td>
                          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">Tandul</td>
                          <td className="border border-gray-300 px-4 py-3 text-center text-[var(--foreground)]">52</td>
                        </tr>

                        <tr>
                          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">4</td>
                          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">07-11-2022</td>
                          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">Kuhera</td>
                          <td className="border border-gray-300 px-4 py-3 text-center text-[var(--foreground)]">49</td>
                        </tr>

                        <tr>
                          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">5</td>
                          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">08-11-2022</td>
                          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">Parsada</td>
                          <td className="border border-gray-300 px-4 py-3 text-center text-[var(--foreground)]">60</td>
                        </tr>

                        <tr>
                          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">6</td>
                          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">09-11-2022</td>
                          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">Kotara Bhata</td>
                          <td className="border border-gray-300 px-4 py-3 text-center text-[var(--foreground)]">54</td>
                        </tr>

                        {/* TOTAL */}
                        <tr className="font-semibold bg-gray-50">
                          <td colSpan="3" className="border border-gray-300 px-4 py-3 text-center text-[var(--foreground)] ">
                            Total Number of Houses Surveyed
                          </td>
                          <td className="border border-gray-300 px-4 py-3 text-center text-[var(--foreground)]">319</td>
                        </tr>

                      </tbody>
                    </table>
                  </div>

                  {/* ===== BELOW TABLE CONTENT ===== */}
                  <p className={CARD_TEXT_CLASSNAME}>


                    Under the UBA scheme, Kalinga University, Raipur, has adopted six villages, and
                    in these villages, separate teams were assigned to collect data from every
                    house in that area. A meeting was conducted with the village Sarpanch, and
                    basic information related to the village, like village infrastructure,
                    amenities/services availability, details of the land, forest, and horticulture
                    field in the village, was collected.
                  </p>

                  <p className={CARD_TEXT_CLASSNAME}>


                    Along with this, the requirements of the common electrical appliances for the
                    village were also discussed. The household survey started from
                    <strong> 3<sup>rd</sup> November 2022</strong> and was completed on
                    <strong> 9<sup>th</sup> November 2022</strong>.
                  </p>

                </div>

              </TabsContent>

              {/* TAB 3 */}
              <TabsContent value="garbage">
                {/* ================= SMART GARBAGE MONITORING ================= */}
                <div className="space-y-6">

                  <h2 className={SECTION_TITLE_CLASSNAME}>

                    Smart Garbage Monitoring System in Government Schools
                  </h2>



                  {/* ===== TABLE ===== */}
                  <div className="overflow-x-auto rounded-xl border border-gray-300">

                    <table className="w-full border-collapse text-left">

                      <thead className="bg-[var(--dark-blue)] text-white">
                        <tr>
                          <th className="border border-gray-300 px-4 py-3">S. No.</th>
                          <th className="border border-gray-300 px-4 py-3">Date of Visit</th>
                          <th className="border border-gray-300 px-4 py-3">Village / School Name</th>
                          <th className="border border-gray-300 px-4 py-3 text-center">No. of Students Attended</th>
                        </tr>
                      </thead>

                      <tbody className="bg-white">

                        <tr>
                          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">1</td>
                          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">03-10-2023</td>
                          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">Government Middle School, Kuhera</td>
                          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)] text-center">53</td>
                        </tr>

                        <tr>
                          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">2</td>
                          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">04-10-2023</td>
                          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">Government Middle School, Tandul</td>
                          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)] text-center">57</td>
                        </tr>

                        <tr>
                          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">3</td>
                          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">05-10-2023</td>
                          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">Government Middle School, Palaud</td>
                          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]  text-center">64</td>
                        </tr>

                        <tr>
                          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">4</td>
                          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">06-10-2023</td>
                          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">Mahatma Vidya Pith School, Palaud</td>
                          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)] text-center">42</td>
                        </tr>

                        <tr>
                          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">5</td>
                          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">07-10-2023</td>
                          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">Government Middle School, Kotara Bhata</td>
                          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)] text-center">52</td>
                        </tr>

                        {/* TOTAL ROW */}
                        <tr className="font-semibold bg-gray-50">
                          <td colSpan="3" className="border border-gray-300 px-4 py-3 text-[var(--foreground)] text-center">
                            Total Number of Students Attended
                          </td>
                          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)] text-center">268</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* ===== BELOW TABLE CONTENT ===== */}
                  <p className={CARD_TEXT_CLASSNAME}>


                    Government schools often struggle with maintaining a clean and hygienic
                    environment. Improper garbage disposal can lead to unclean surroundings,
                    attracting pests and causing health issues for students and staff members.
                    Implementing a smart garbage monitoring system in government schools can have
                    several benefits and impacts, leading to improved hygiene, sustainability,
                    and cost-efficiency. With real-time monitoring and alerts, the system can
                    ensure that garbage bins are emptied promptly, reducing the risk of litter
                    and unhygienic conditions.
                  </p>

                  <p className={CARD_TEXT_CLASSNAME}>


                    Keeping this into consideration, a proposal was submitted to the IEEE Signal
                    Processing Society (SPS) and the IEEE Humanitarian Activities Committee (HAC).
                    In response to this, IEEE Kalinga University Student Branch (IEEE KU SB)
                    received a sanctioned amount of <strong>USD 1,000.00</strong> for the project
                    named “Smart Garbage Monitoring System” with project code and grant reference
                    number: <strong>22-SPSHAC-07</strong>. The visit was scheduled from
                    <strong> 3<sup>rd</sup> October 2023 to 7<sup>th</sup> October 2023</strong>.
                  </p>

                </div>

              </TabsContent>

            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}     