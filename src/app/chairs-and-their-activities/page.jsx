"use client";
import React from "react";
import MainIntro from "@/app/components/about/main_intro";
import FAQ from "@/app/components/general/faq";
import Gallery from "@/app/components/general/gallery";

export default function ChairsPage() {
    const chairsData = [
        { slNo: 1, chair: "Shaheed Veer Narayan Singh Chair", inCharge: "Dr. Ajay Shukla" },
        { slNo: 2, chair: "Amartya Sen Chair", inCharge: "Dr. Chandra Bhooshan Singh" },
        { slNo: 3, chair: "Weng Ming Hui Chair", inCharge: "Dr. Kali doss" },
    ];

    const activitiesData = [
        {
            slNo: 1,
            title: "Role of Industrial Sector in Viksit Bharat",
            coordinator: "Dr. Chandra Bhooshan Singh",
            date: "31-01-2025",
            time: "2:30 P.M. to 03:30 P.M.",
            type: "Guest Lecture",
            venue: "Kalinga University, Naya Raipur",
            objective: "To enable participants understand the role of the industrial sector in achieving sustainable economic growth and development; To enable students understand the contribution of the industrial sector in innovation, infrastructure development, and economic progress, aligned with SDG - 9; To introduce students to industrial policies, advancements, challenges, and best practices; To offer a platform where they can share their ideas, ask questions, and exchange ideas related to the future of industrial development",
            outcome: "Developed an in-depth understanding of the industrial sector’s role in Viksit Bharat; Students learned about the real-world industrial challenges and opportunities; Developed analytical thinking abilities through interactive discussions and insights; Students understand the economic growth strategies and industrial policies"
        },
        {
            slNo: 2,
            title: "Poverty, Inequality, and Social Justice in India",
            coordinator: "Dr. Chandra Bhooshan Singh",
            date: "25-08-2023",
            time: "11:00 A.M. to 01:30 P.M.",
            type: "Debate Competition",
            venue: "Kalinga University, Naya Raipur",
            objective: "To encourage students to evaluate poverty, inequality, and social justice from economic, political, and ethical perspectives; To provide a platform for students where they can practice public speaking, persuasion, and argumentation skills; To complement classroom learning with participative activities and encourage students' involvement",
            outcome: "Enhanced analytical reasoning and evidence-based argumentation skills; Strengthened public speaking, confidence, and communication skills; Increased awareness about social justice and its role in nation-building"
        },
        {
            slNo: 3,
            title: "Invest-Verse Certification - Certification Sponsored by HDFC Mutual Fund",
            coordinator: "Dr. Komal Gupta",
            date: "11-11-2022",
            time: "10:30 A.M. to 01:30 P.M.",
            type: "Workshop",
            venue: "Kalinga University, Naya Raipur",
            objective: "To introduce students to investment planning, mutual funds, and wealth creation strategies; To provide a hands-on learning experience sponsored by HDFC Mutual Fund and facilitated by NSE Academy; To motivate students to explore responsible investment practices",
            outcome: "Participants learned real-life investment strategies and financial decision-making skills through practical training; Provided industry-level certificates to participants to strengthen employability"
        }
    ];


    const activitiesData1 = [
        {
            slNo: 1,
            title: "हिन्दी दिवस समारोह – “वर्तमान परिदृश्य में हिन्दी भाषा और साहित्य की भूमिका",
            coordinator: "हिंदी विभाग",
            date: "12-09-2025",
            time: "निर्धारित कार्यक्रमानुसार",
            type: "समारोह",
            venue: "ऑडिटोरियम, कलिंगा विश्वविद्यालय, नया रायपुर",
            objective: [
                "विद्यार्थियों को हिन्दी भाषा के महत्व और उसके राष्ट्रीय विकास में योगदान से अवगत कराना",
                "हिन्दी भाषा और साहित्य की वर्तमान समय में प्रासंगिकता को समझाना",
                "मातृभाषा के प्रयोग और संरक्षण के प्रति जागरूकता विकसित करना",
                "छात्रों को संवाद, अभिव्यक्ति और सांस्कृतिक गतिविधियों के माध्यम से जोड़ना"
            ],
            outcome: [
                "विद्यार्थियों में हिन्दी भाषा के प्रति जागरूकता और सम्मान की भावना विकसित हुई",
                "भाषा और साहित्य के माध्यम से सामाजिक एवं राष्ट्रीय मुद्दों की समझ बढ़ी",
                "छात्रों के संवाद और अभिव्यक्ति कौशल में सुधार हुआ",
                "सांस्कृतिक प्रस्तुतियों के माध्यम से छात्रों की सहभागिता और आत्मविश्वास में वृद्धि हुई"
            ]
        },
        {
            slNo: 2,
            title: "One-Day National Seminar on “From Vachanas to Vision: Mahatma Basaveshwara’s Ideas in Contemporary Society",
            coordinator: "कला एवं मानविकी संकाय",
            date: "25-08-2025",
            time: "निर्धारित कार्यक्रमानुसार",
            type: "संगोष्ठी",
            venue: "ऑडिटोरियम, कलिंगा विश्वविद्यालय, नया रायपुर",
            objective: [
                "छात्रों और शोधार्थियों को महात्मा बसवेश्वर के विचारों और वचनों से परिचित कराना",
                "समकालीन समाज में उनके विचारों की प्रासंगिकता को समझाना",
                "सामाजिक समानता, महिला सशक्तिकरण और जाति-व्यवस्था के विरोध जैसे विषयों पर जागरूकता बढ़ाना",
                "शोधार्थियों को अपने शोध कार्य प्रस्तुत करने और अकादमिक संवाद के लिए मंच प्रदान करना"
            ],
            outcome: [
                "प्रतिभागियों में बसवेश्वर के विचारों और दर्शन की गहरी समझ विकसित हुई",
                "सामाजिक मुद्दों जैसे समानता, लोकतंत्र और महिला सशक्तिकरण पर दृष्टिकोण मजबूत हुआ",
                "शोध प्रस्तुतिकरण के माध्यम से छात्रों के अकादमिक और प्रस्तुतीकरण कौशल में वृद्धि हुई",
                "विभिन्न विश्वविद्यालयों के प्रतिभागियों के बीच ज्ञान का आदान-प्रदान और नेटवर्किंग बढ़ी"
            ]
        },
        {
            slNo: 3,
            title: "प्रेमचंद जयंती - 2024 पर संवाद संगोष्ठी “प्रेमचंद और समकालीन समय",
            coordinator: "हिंदी विभाग",
            date: "31-07-2024",
            time: "11:00 A.M. onwards",
            type: "संगोष्ठी",
            venue: "कलिंगा विश्वविद्यालय, नया रायपुर (बोर्ड रूम, मुख्य भवन)",
            objective: [
                "छात्रों को मुंशी प्रेमचंद के साहित्य और उनके सामाजिक विचारों से परिचित कराना",
                "समकालीन समाज में प्रेमचंद की प्रासंगिकता को समझाना",
                "साहित्य के माध्यम से सामाजिक, आर्थिक और सांस्कृतिक मुद्दों पर जागरूकता विकसित करना",
                "छात्रों को विचार-विमर्श और अभिव्यक्ति के लिए मंच प्रदान करना"
            ],
            outcome: [
                "छात्रों में हिंदी साहित्य के प्रति रुचि और समझ विकसित हुई",
                "प्रेमचंद के विचारों और उनके सामाजिक दृष्टिकोण की गहरी समझ बनी",
                "छात्रों की विश्लेषणात्मक सोच और अभिव्यक्ति कौशल में वृद्धि हुई",
                "समकालीन सामाजिक मुद्दों को साहित्य के माध्यम से समझने की क्षमता विकसित हुई"
            ]
        }
    ];

    const chairGalleryData = [
        {
            id: 1,
            image: "https://cdn.kalingauniversity.ac.in/chairs-and-their-activities/chair-activties-images-1.webp",
            alt: "Chairs Activity 1"
        },
        {
            id: 2,
            image: "https://cdn.kalingauniversity.ac.in/chairs-and-their-activities/chair-activties-images-2.webp",
            alt: "Chairs Activity 2"
        },
        {
            id: 3,
            image: "https://cdn.kalingauniversity.ac.in/chairs-and-their-activities/chair-activties-images-3.webp",
            alt: "Chairs Activity 3"
        },
        {
            id: 4,
            image: "https://cdn.kalingauniversity.ac.in/chairs-and-their-activities/chair-activties-images-4.webp",
            alt: "Chairs Activity 4"
        },
        {
            id: 5,
            image: "https://cdn.kalingauniversity.ac.in/chairs-and-their-activities/chair-activties-images-5.webp",
            alt: "Chairs Activity 5"
        }
    ];

    const tableSections = [
        {
            id: 1,
            title: "Chairs",
            data: chairsData,
            columns: [
                { key: "slNo", label: "S.No.", width: "w-16" },
                { key: "chair", label: "Chair", width: "w-1/2" },
                { key: "inCharge", label: "In-charge", width: "w-1/3" },
            ]
        },
        {
            id: 2,
            title: "Details & Activities",
            answer: `
        <div class="space-y-4">
          <h4 class="font-bold text-lg">Amartya Sen Chair</h4>
          <p><strong>About the Chair -</strong> In collaboration with Hira Group, the Faculty of Commerce and Management at Kalinga University established the Amartya Sen Chair to promote research, activities and programs, capacity building, and collaboration.</p>
          
          <h5 class="font-bold">Objective of the Chair -</h5>
          <ul class="list-disc pl-5 space-y-1">
            <li>To promote high-quality research work in areas like economics, finance, taxation, corporate governance, management, and more</li>
            <li>To organize workshops, seminars, guest lectures, and conferences for research scholars, commerce and management students, and entrepreneurs</li>
            <li>To align academic research with corporate and societal needs</li>
            <li>To publish high-impact research papers, policy briefs, case studies, and books</li>
            <li>To improve student employability and skill development through industry-linked programs</li>
          </ul>
        </div>
      `
        },
        {
            id: 3,
            title: "Activities",
            data: activitiesData,
            columns: [
                { key: "slNo", label: "S.No", width: "w-12" },
                { key: "title", label: "Title of Program", width: "min-w-[200px]" },
                { key: "coordinator", label: "Faculty Coordinator", width: "min-w-[150px]" },
                { key: "date", label: "Date of Event", width: "min-w-[100px]" },
                { key: "time", label: "Time of Event", width: "min-w-[150px]" },
                { key: "type", label: "Event Type", width: "min-w-[120px]" },
                { key: "venue", label: "Venue", width: "min-w-[150px]" },
                { key: "objective", label: "Objective", width: "min-w-[300px]" },
                { key: "outcome", label: "Program Outcome", width: "min-w-[300px]" },
            ]
        },
        {
            id: 4,
            title: "Shaheed Veer Narayan Singh Chair",
            answer: `
        <div class="space-y-4">
          <h4 class="font-bold text-lg">चेयर के बारे में </h4>
          <p>कलिंगा विश्वविद्यालय में शहीद वीर नारायण सिंह चेयर की स्थापना छत्तीसगढ़ के महान स्वतंत्रता सेनानी के सम्मान में की गई है। इस चेयर का उद्देश्य छात्रों को छत्तीसगढ़ की जनजातीय समाज, कला, संस्कृति, परंपराओं और व्यक्तित्व से परिचित कराना है। इसके माध्यम से विश्वविद्यालय में विभिन्न सांस्कृतिक कार्यक्रम जैसे नृत्य, संगीत और अन्य गतिविधियों का आयोजन किया जाता है, जिससे छात्रों की सक्रिय भागीदारी बढ़े। साथ ही, अतिथि व्याख्यानों के जरिए विशेषज्ञों और प्रतिष्ठित व्यक्तियों द्वारा छात्रों को छत्तीसगढ़ के इतिहास, संस्कृति और सामाजिक मूल्यों की जानकारी दी जाती है। यह चेयर छात्रों में शोध की रुचि विकसित करने के साथ-साथ क्षेत्रीय विरासत के संरक्षण और प्रसार में भी महत्वपूर्ण भूमिका निभाती है।</p>
          
          <h5 class="font-bold">चेयर के उद्देश्य</h5>
          <ul class="list-disc pl-5 space-y-1">
            <li>छत्तीसगढ़ के इतिहास, कला, संस्कृति एवं लोकसाहित्य के विशेषज्ञों की उपस्थिति में संगोष्ठियों का आयोजन करना।</li>
            <li>शहीद वीरनारायण सिंह की जयंती एवं पुण्यतिथि पर विभिन्न रचनात्मक प्रतियोगिताओं का आयोजन करना।</li>
            <li>छत्तीसगढ़ की कला, संस्कृति एवं साहित्य से संबंधित अंतविश्वविद्यालयिन स्तर पर शोध कार्य को प्रोत्साहित करने हेतु विभिन्न कार्यक्रमों का आयोजन करना।</li>
            <li>शहीद वीरनारायण सिंह शोध संस्थान की स्थापना करना, जिसके माध्यम से छत्तीसगढ़ के राष्ट्रीय स्वतंत्रता संग्राम सेनानियों से जुड़े तथ्यों पर नवीन शोध कार्य करना।</li>
            <li>विश्वविद्यालय के विद्यार्थियों के लिए निबंध लेखन, भाषण, वाद-विवाद एवं अन्य सांस्कृतिक प्रतियोगिताओं का आयोजन करना।</li>
          </ul>
        </div>
      `
        },
        {
            id: 5,
            title: "कार्यक्रम एवं गतिविधियाँ",
            data: activitiesData1,
            columns: [
                { key: "slNo", label: "S.No", width: "w-12" },
                { key: "title", label: "Title of Program", width: "min-w-[200px]" },
                { key: "coordinator", label: "Faculty Coordinator", width: "min-w-[150px]" },
                { key: "date", label: "Date of Event", width: "min-w-[100px]" },
                { key: "time", label: "Time of Event", width: "min-w-[150px]" },
                { key: "type", label: "Event Type", width: "min-w-[120px]" },
                { key: "venue", label: "Venue", width: "min-w-[150px]" },
                { key: "objective", label: "Objective", width: "min-w-[300px]" },
                { key: "outcome", label: "Program Outcome", width: "min-w-[300px]" },
            ]
        },

    ];

    return (
        <>
            <MainIntro
                title="Chairs and Their Activities"
                description={[
                    "At the heart of Kalinga University’s research and innovation, our distinguished chairs play a crucial role in knowledge advancement in different areas and in creating solutions that remove societal challenges.",
                    "The chairs offer a platform to students, faculty members, researchers, and experts where they can share their unique ideas and conduct project works, presentations, competitions, guest lectures, training, and workshops. They not only contribute to the growth of the institution but also to the overall betterment of society."
                ]}
                imageUrl="https://cdn.kalingauniversity.ac.in/admission/library.webp"
                imageAlt="Kalinga University Library"
                showKnowMore={false}
            />

            <FAQ
                variant="table-display"
                tableSections={tableSections}
                items={[]}
                title="Overview"
                subtitle=""
                showHeading={false}
                pyClassName="pb-16"
            />
            <Gallery
                images={chairGalleryData}
                title="Glimpses" paddingClassName="py-16" />
        </>
    );
}
