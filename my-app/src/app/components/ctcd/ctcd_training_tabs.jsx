"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "../general/tab";
import { AccordionItem } from "../general/accordion";
import Gallery from "../general/gallery";
import SectionHeading from "../general/SectionHeading";


function BulletList({ items }) {
    return (
        <ul className="mt-3 space-y-2 pl-4">
            {items.map((item, idx) => (
                <li
                    key={idx}
                    className="relative text-[var(--foreground)] text-[14px] md:text-[16px]"
                >
                    <p className="absolute -left-4 top-[10px] h-[6px] w-[6px] rounded-full bg-[var(--foreground)]"></p>
                    {item}
                </li>
            ))}
        </ul>
    );
}

const trainingGlimpse = [
    // Replace these URLs with your actual CTCD images (same as Figma)
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
];

// Transform trainingGlimpse to Gallery component format
const transformToGalleryImages = (images) => {
    return images.map((src, idx) => ({
        id: idx + 1,
        image: src,
        alt: `Training glimpse ${idx + 1}`
    }));
};

// Constants for Gallery component
const GALLERY_TITLE = "Training Glimpse";
const GALLERY_TITLE_CLASSNAME = "font-stix text-[28px] leading-[44px] text-[var(--foreground)] mb-[14px] text-left";
const GALLERY_IMAGES = transformToGalleryImages(trainingGlimpse);

// Training Projects Gallery Images
const trainingProjectsImages = [
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/training-projects.webp",
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/training-projects-2.webp",
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/training-projects-3.webp",
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/training-projects-4.webp",
];
const TRAINING_PROJECTS_GALLERY_IMAGES = transformToGalleryImages(trainingProjectsImages);

// Training Domain Gallery Images
const trainingDomainImages = [
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/training-domain-1.webp",
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/training-domain-2.webp",
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/training-domain-3.webp",
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/training-domain-4.webp",
];
const TRAINING_DOMAIN_GALLERY_IMAGES = transformToGalleryImages(trainingDomainImages);

// Training Details Gallery Images
const trainingDetailsImages = [
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/training-domain-5.webp",
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/training-domain-6.webp",
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/training-domain-7.webp",
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/training-domain-8.webp",
];
const TRAINING_DETAILS_GALLERY_IMAGES = transformToGalleryImages(trainingDetailsImages);

// Common classNames
const CARD_CLASSNAME = "rounded-[16px] bg-[var(--card-sandal)] p-[22px] md:p-[26px]";
const CARD_TITLE_CLASSNAME = "font-plus-jakarta-sans text-[24px] leading-[30px] text-[var(--button-red)]";
const CARD_TEXT_CLASSNAME = "mt-[10px] text-[var(--foreground)]";
const SECTION_TITLE_CLASSNAME = "font-stix text-[var(--foreground)]";
const ACCORDION_TITLE_CLASSNAME = "font-plus-jakarta-sans text-[18px] md:text-[24px] leading-[30px] text-[var(--button-red)]";

// Reusable Training Glimpse Gallery component
function TrainingGlimpseGallery() {
    return (
        <div className="mt-[28px]">
            <Gallery
                images={GALLERY_IMAGES}
                title={GALLERY_TITLE}
                backgroundColor="bg-transparent"
                paddingClassName="py-0"
                titleClassName={GALLERY_TITLE_CLASSNAME}
                forceSliderOnMobile={true}
            />
        </div>
    );
}

export default function CtcdTrainingTabs() {
    return (
        <section className="w-full">
            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
            {/* Outer dark-blue container */}
            <div className="rounded-xl  bg-[var(--dark-blue)] py-16 mx-2">
                {/* Top tabs row (4 buttons) */}
                <div className="container mx-auto">
                <Tabs defaultValue="domains">
                    <TabsList className="!flex !gap-4 md:!gap-5 !bg-transparent !rounded-none !p-0 !overflow-x-auto !overflow-y-visible scrollbar-hide !px-2 md:!px-0 !pb-2 md:!pb-0">
                        <TabsTrigger value="domains" className="flex-shrink-0 min-w-[200px] md:min-w-[170px] md:flex-1 break-words whitespace-nowrap">
                            Training Domains
                        </TabsTrigger>

                        <TabsTrigger value="details" className="flex-shrink-0 min-w-[180px] md:min-w-[160px] md:flex-1 break-words whitespace-nowrap">
                            Training Details
                        </TabsTrigger>

                        <TabsTrigger value="assessments" className="flex-shrink-0 min-w-[280px] md:min-w-[360px] md:flex-1 break-words whitespace-nowrap">
                            Our Behavioural and Psychometric Assessments
                        </TabsTrigger>

                        <TabsTrigger value="projects" className="flex-shrink-0 min-w-[240px] md:min-w-[280px] md:flex-1 break-words whitespace-nowrap">
                            Our Corporate Training Projects
                        </TabsTrigger>
                    </TabsList>

                    {/* White inner panel */}
                    <div className="mt-[16px] rounded-[18px] bg-white px-3 py-[22px] md:px-[36px] md:py-[28px]">
                        {/* TAB 1 — Training Domains (FULL pixel layout like screenshot) */}
                        <TabsContent value="domains">
                            <SectionHeading 
                                title="Training Domains"
                                titleClassName={SECTION_TITLE_CLASSNAME}
                            />

                            <p className="mt-[10px] max-w-[980px] text-[var(--foreground)]">
                                Our training programs are designed based on one mission, i.e., empowering organisations to utilise their PEOPLE effectively.
                                CTCD covers a wide range of training domains under behavioural and technical competencies. Through our customised modules,
                                we aim to build professionals who not only understand PROCESSES but also PEOPLE. They will be ready to meet the changing
                                demands of the industries and adapt to new business challenges.
                            </p>

                            {/* Two beige cards */}
                            <div className="mt-[26px] grid gap-[22px] md:grid-cols-2">
                                <div className={CARD_CLASSNAME}>
                                    <h3 className={CARD_TITLE_CLASSNAME}>
                                        Behavioural Topics
                                    </h3>
                                    <p className={CARD_TEXT_CLASSNAME}>
                                        Our behavioural training programs focus on building skills like creativity, teamwork, communication, stress management,
                                        leadership, emotional intelligence, and professionalism. The sessions include real-world case studies where participants
                                        learn how to build a mindset of adaptability and performance excellence that boosts organisational growth.
                                    </p>
                                </div>

                                <div className={CARD_CLASSNAME}>
                                    <h3 className={CARD_TITLE_CLASSNAME}>
                                        Technical Topics
                                    </h3>
                                    <p className={CARD_TEXT_CLASSNAME}>
                                        Our technical training programs emphasise skill development that is required to perform tasks smoothly and efficiently.
                                        Participants get practical training in automation tools, artificial intelligence, robotics, sustainable manufacturing practices,
                                        advanced manufacturing techniques, data analysis, and much more. They don’t just learn but build technical precision that drives
                                        operational excellence.
                                    </p>
                                </div>
                            </div>

                            {/* Training Domain Gallery */}
                            <div className="mt-[28px]">
                                <Gallery
                                    images={TRAINING_DOMAIN_GALLERY_IMAGES}
                                    title={GALLERY_TITLE}
                                    backgroundColor="bg-transparent"
                                    paddingClassName="py-0"
                                    titleClassName={GALLERY_TITLE_CLASSNAME}
                                    forceSliderOnMobile={true}
                                />
                            </div>
                        </TabsContent>

                        {/* TAB 2 */}
                        <TabsContent value="details">
                            <SectionHeading 
                                title="Training Details"
                                titleClassName={SECTION_TITLE_CLASSNAME}
                            />
                            {/* Four beige cards */}
                            <div className="mt-[26px] grid gap-[22px] md:grid-cols-1">


                                {/* Training Duration */}
                                <AccordionItem title="Training Duration" defaultOpen titleClassName={ACCORDION_TITLE_CLASSNAME}>
                                    <p className="mt-[10px] text-[var(--foreground)]">
                                        The duration of all proposed training programs largely depends on the training objectives of the organisation.
                                    </p>

                                    <BulletList
                                        items={[
                                            "Full Days (6 Hours)",
                                            "Half Days (4 Hours)",
                                            "A session of two hours per day",
                                        ]}
                                    />

                                    <p className="mt-4 text-[var(--foreground)]">
                                        Certain training programs are delivered on a nomination basis from organisations for a prescheduled calendar.
                                        Training can also be delivered before and after office hours.
                                    </p>
                                </AccordionItem>

                                {/* Training Venue */}
                                <AccordionItem title="Training Venue" titleClassName={ACCORDION_TITLE_CLASSNAME}>
                                    <p className="mt-[10px] text-[var(--foreground)]">
                                        The training venue can be mutually decided. It can be delivered at our end, at your end, or at third-party venues like a hotel or a resort, depending upon the client's choice.

                                        If the training is conducted at our end, at the Kalinga Campus at Naya Raipur, we will be providing:

                                    </p>

                                    <BulletList
                                        items={[
                                            "Auditorium ( Having a capacity of 150 )",
                                            "Board Room - 1 - Having a capacity of 20",
                                            "Board Room - 2 - Having a capacity of 25",
                                            "Board Room - 3 - Having a capacity of 10",
                                            "Board Room - 4 - Having a capacity of 30",
                                        ]}
                                    />

                                    <p className="mt-4 text-[var(--foreground)]">
                                        All of the above are equipped with air conditioning, Interactive Panels for projection, and soundproofing compliant.
                                    </p>

                                    <BulletList
                                        items={[
                                            "Computers and Laptops (if the training requires the use of computers)",
                                            "Training Kit",
                                            "Lush Green Gardens for outdoor activities",
                                            "Tea / Coffee / Light Snacks and Lunch",
                                            "Parking",
                                        ]}
                                    />

                                    <p className="mt-4 text-[var(--foreground)]">

                                        If the Training is conducted at your end or a third venue, you have to provide:

                                    </p>

                                    <BulletList
                                        items={[
                                            "Training Hall or Board Room with sufficient capacity",
                                            "Projection Device (Projector or TV, or Interactive Panel)*",
                                            "White Board or Glass Board and Marker*",
                                            "Air-conditioning",
                                            "Tea/Coffee and Lunch for the trainer",
                                        ]}
                                    />
                                    <p className="mt-[3px] text-[var(--foreground)]">

                                        * If not available, can be hired and installed at your venue.

                                    </p>

                                    <p className="mt-4 text-[var(--foreground)]">

                                        To be provided by us if the training is conducted at your end

                                    </p>

                                    <BulletList
                                        items={[
                                            "Trainer",
                                            "Training Kits",
                                        ]}
                                    />
                                </AccordionItem>

                                {/* Trainers Profile */}
                                <AccordionItem title="Trainers Profile" titleClassName={ACCORDION_TITLE_CLASSNAME}>
                                    <p className="mt-[10px]">
                                        We offer trainers who have rich experience and knowledge, and considerable training experience.

                                        Depending upon the training objectives, the trainer profile will be shared, and a discussion with the trainer will be conducted offline or online if desired by the client.

                                        Only after the approval of the trainer will the training be initiated.
                                    </p>
                                </AccordionItem>

                                {/* Training Cost */}
                                <AccordionItem title="Training Cost" titleClassName={ACCORDION_TITLE_CLASSNAME}>

                                    <p className="mt-[10px] text-[var(--foreground)]">
                                        The training cost is dependent upon the Trainer, duration of the training, venue and training aids availability, which can be mutually discussed.
                                    </p>
                                </AccordionItem>

                                {/* Government Trainings */}
                                <AccordionItem title="Government Trainings" titleClassName={ACCORDION_TITLE_CLASSNAME}>
                                    <h3 className="mt-[10px] font-plus-jakarta-sans text-[20px] leading-[26px] text-[var(--foreground)] font-semibold mb-3">
                                        Police Training Initiatives:
                                    </h3>
                                    <p className="text-[var(--foreground)]">
                                        It is a matter of immense pride and honour to contribute to the strengthening of our nation's law enforcement system and State Administration Body. We have collaborated with the Police Training School, Mana and the Police Training Academy, Chaudkhuri. In our inspiring sessions with officers, including Deputy Superintendents of Police (DSPs), Platoon Commandants, Subedars, Sub Inspectors, and newly recruited constables, we witness not just uniforms but their stories of sacrifice and responsibility.
                                    </p>
                                    <p className="mt-4 text-[var(--foreground)]">
                                        Our government training modules are based on leadership, conflict resolution, stress management, team building, and police-society relations. With interactive sessions and experiential activities, we help officers develop emotional balance and calm in chaos, making them an emotionally intelligent police workforce.
                                    </p>
                                </AccordionItem>

                            </div>

                            {/* Training Details Gallery */}
                            <div className="mt-[28px]">
                                <Gallery
                                    images={TRAINING_DETAILS_GALLERY_IMAGES}
                                    title={GALLERY_TITLE}
                                    backgroundColor="bg-transparent"
                                    paddingClassName="py-0"
                                    titleClassName={GALLERY_TITLE_CLASSNAME}
                                    forceSliderOnMobile={true}
                                />
                            </div>
                        </TabsContent>

                        {/* TAB 3 */}
                        <TabsContent value="assessments">
                            <SectionHeading 
                                title="Our Behavioural and Psychometric Assessments"
                                titleClassName="font-stix text-[var(--foreground)]"
                            />
                            {/* Two beige cards */}
                            <div className="mt-[26px] grid gap-[22px] md:grid-cols-1">
                                <div className={CARD_CLASSNAME}>
                                    <p className={CARD_TEXT_CLASSNAME}>
                                        A Comprehensive Analysis of Learning Styles, Behavioural (Attitude + Aptitude), and 15 Emotional Intelligence Dimensions Indicative of Personality Strengths and Areas of Improvement.
                                    </p>

                                    <p className="mt-4 text-[var(--foreground)]">
                                        Topics Covered:
                                    </p>

                                    <BulletList
                                        items={[
                                            "System Orientation",
                                            "People Orientation",
                                            "Adaptability",
                                            "Readiness to Change",
                                            "Knowledge",
                                            "Learning Styles",
                                            "Emotional Quotient",
                                        ]}
                                    />
                                </div>
                            </div>

                            {/* Training Domain Gallery */}
                            <div className="mt-[28px]">
                                <Gallery
                                    images={TRAINING_DOMAIN_GALLERY_IMAGES}
                                    title={GALLERY_TITLE}
                                    backgroundColor="bg-transparent"
                                    paddingClassName="py-0"
                                    titleClassName={GALLERY_TITLE_CLASSNAME}
                                    forceSliderOnMobile={true}
                                />
                            </div>
                        </TabsContent>

                        {/* TAB 4 */}
                        <TabsContent value="projects">
                            <SectionHeading 
                                title="Our Corporate Training Projects"
                                titleClassName={SECTION_TITLE_CLASSNAME}
                            />
                            
                            {/* Projects Table */}
                            <div className="mt-[26px] overflow-x-auto overflow-y-auto max-h-[600px] border border-gray-200 rounded-lg">
                                <table className="w-full border-collapse min-w-[800px]">
                                    <thead className="sticky top-0 z-10">
                                        <tr className="bg-[var(--dark-blue)] text-white">
                                            <th className="px-4 py-3 text-left font-plus-jakarta-sans text-sm md:text-base font-semibold whitespace-nowrap">
                                                S.No.
                                            </th>
                                            <th className="px-4 py-3 text-left font-plus-jakarta-sans text-sm md:text-base font-semibold whitespace-nowrap">
                                                Client Name
                                            </th>
                                            <th className="px-4 py-3 text-left font-plus-jakarta-sans text-sm md:text-base font-semibold whitespace-nowrap">
                                                Project Title
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                            <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">1</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Entrepreneurship Development Institute of India (EDII)</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Trainers Training Program</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                            <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">2</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Robot India</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Training on Google Apps for the Employees of Robot India</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                            <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">3</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">ADORE WELDING</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Team Productivity, Self-Management, and Problem-Solving Training</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                            <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">4</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Real Ispat and Power Ltd</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Soft Skills and Workplace Behaviour, Communication and Team Collaboration, Leadership Development, and Process Improvement & Productivity Enhancement.</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                            <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">5</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Utkarsh Small Finance Bank</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Sales Training for the Employees of Utkarsh Bank</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                            <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">6</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Singhal Enterprises Pvt Ltd</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Training on Employee Wellness, Communication & Change Management</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                            <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">7</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Techno Blast Mining</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">HR Star Program</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                            <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">8</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Kalpataru Projects International Ltd</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Training Report on Supervisor Skills Training</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                            <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">9</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Sarda Energy & Minerals Ltd</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Management Development Program (Sarda Outbound Training)at Sarda Energy & Minerals Ltd</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                            <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">10</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Sarda Energy & Minerals Ltd</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Psychometric, Functional Assessment & Post Assessment for the Employees of Sarda (Talent Xibit-2)</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                            <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">11</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Sarda Energy & Minerals Ltd</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Psychometric, Functional Assessment & Post Assessment for the Employees of Sarda (Talent Xibit-1)</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                            <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">12</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Rajkiya Engineering College, Sonbhadra</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">3P Power Placement Process at Rajkiya Engineering College, Sonbhadra</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                            <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">13</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">WANFENG Aluminium Wheel (INDIA) Pvt. Ltd.</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Employability Enhancement Training Program (Communication Skill & Team Building Workshop)</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                            <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">14</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Adarsh Vidyalaya Group of Schools</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Capacity Building Programme for Adarsh Vidyalaya Teachers</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                            <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">15</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Jayaswal Neco</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Utilising AI to enhance team productivity</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                            <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">16</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Robertshaw Controls Pvt Ltd</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Training on Problem Solving and Advanced Communication Skills</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                            <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">17</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Suryodaya Bank</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Training on Customer Centricity for Credit Officers & Business Excellence.</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                            <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">18</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Goeld Frozen Foods</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Developing Managerial Skills and Capabilities</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                            <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">19</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">SIMBA Group</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Management Development Program</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                            <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">20</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Ramkrishna Care Hospitals</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Patient-Centred Communication, Conflict Resolution among Staff, Emotional Well-Being, and Stress Management</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                            <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">21</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Sai Baba Hospital</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">To Reinforce Existing Skills and Competencies so that Employees become more Productive.</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                            <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">22</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Central Bank Of India</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Probationary Officers Training Program</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                            <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">23</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">GIET Ghangapatna Bhubaneswar</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Aptitude Trainer</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                            <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">24</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Kusum Smelters Pvt. Ltd.</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Leadership & Skills Development Training Program</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                            <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">25</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Godawari Power & Ispat</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Employee Development Training</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                            <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">26</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Police Training Academy Chandkhuri</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">SI & DSP Training</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                            <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">27</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Real Group</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Training for Security & Housekeeping Staff</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                            <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">28</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Shree Shankara Senior Sec. School Raipur</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Faculty Development Program</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                            <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">29</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Thakur Pyarelal State Institute of Panchayat & Rural Development (TPIPRD) in Nimora</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Time & Stress Management Training</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                            <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">30</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Police Training School Mana</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">SI & Constable Training</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                            <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">31</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Rajasthan Global Security Pvt. Ltd.</td>
                                            <td className="px-4 py-3 text-[var(--foreground)]">Skill Development and Industry-Aligned Training Initiative</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Training Projects Gallery */}
                            <div className="mt-[28px]">
                                <Gallery
                                    images={TRAINING_PROJECTS_GALLERY_IMAGES}
                                    title={GALLERY_TITLE}
                                    backgroundColor="bg-transparent"
                                    paddingClassName="py-0"
                                    titleClassName={GALLERY_TITLE_CLASSNAME}
                                    forceSliderOnMobile={true}
                                />
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
                </div>
            </div >
        </section >
    );
}
