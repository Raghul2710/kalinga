import React from 'react';
import DataTable from "@/app/components/general/data-table";
import GlobalArrowButton from "@/app/components/general/global-arrow_button";
import Link from 'next/link';

export const lawFaqs = [
  {
    id: "advisory-board",
    question: "Advisory Board",
    component: (
      <div className="space-y-4">
        <DataTable
          columns={[
            { key: "name", label: "Name", width: "w-1/3" },
            { key: "designation", label: "Designation", width: "flex-1" }
          ]}
          data={[
            { name: "Justice Saleem Marsoof", designation: "Hon’ble Non-Resident Judge of the Supreme Court of Fiji and Former Acting Chief Justice of the Supreme Court of Sri Lanka, Sri Lanka" },
            { name: "Prof. (Dr.) Garry Fehr", designation: "Associate Vice President, Research, Engagement and Graduate Studies, University of Fraser Valley, Canada" },
            { name: "Justice U.C. Dhyani", designation: "Hon’ble Former Judge, High Court of Uttarakhand and Chairman, Uttarakhand Public Service Tribunal, India" },
            { name: "Prof. (Dr.) R. Venkata Rao", designation: "Vice-Chancellor, India International University of Legal Education and Research (IIULER), Goa, India" },
            { name: "Prof. (Dr.) V.C. Vivekanandam", designation: "Vice-Chancellor, Hidayatullah National Law University, Naya Raipur, (C.G.), India" },
            { name: "Prof. (Dr.) Manoj Kumar Sinha", designation: "Vice-Chancellor, Dharmashastra National Law University, Jabalpur, (M.P.), India" },
            { name: "Prof. (Dr.) V.K. Ahuja", designation: "Director, Indian Law Institute, New Delhi, India" },
            { name: "Prof. (Dr.) Tabrez Ahmad", designation: "Founding Dean & Professor, Department of Law, MAANU, Hyderabad, Telangana, India" },
            { name: "Prof. (Dr.) S. Sreejith", designation: "Professor & Executive Dean, Jindal Global Law School, Sonipat, India" },
            { name: "Mr. Tariq Khan", designation: "Registrar, International Arbitration and Mediation Centre, Hyderabad, Telangana, India" },
            { name: "Dr. Naresh C Sharma", designation: "Advocate & President, Dwarka Court Bar Association, New Delhi" }
          ]}
          headerBgColor="bg-[var(--dark-blue)]"
          overflowX={true}
          disableContainer={true}
        />
      </div>
    )
  },
  {
    id: "journal-law-ai",
    question: "Journal Of Law And Artificial Intelligence",
    component: (
      <div className="flex flex-col gap-4">
        <p className="text-gray-700">Explore our Journal Of Law And Artificial Intelligence:</p>
        <GlobalArrowButton
          as="a"
          href="https://kalingauniversity.ac.in/journal-of-law-and-artificial-intelligence/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Journal
        </GlobalArrowButton>
      </div>
    )
  },
  {
    id: "student-achievements",
    question: "Students Achievement",
    component: (
      <div className="w-full">
        <DataTable
          columns={[
            { key: "year", label: "Year", width: "w-20" },
            { key: "award", label: "Award/Medal", width: "w-64" },
            { key: "team", label: "Team/Individual", width: "w-40" },
            { key: "level", label: "Level", width: "w-40" },
            { key: "category", label: "Category", width: "w-32" },
            { key: "student", label: "Student", width: "flex-1" }
          ]}
          data={[
            { year: "2022", award: "Business Achievers of Chhattisgarh Event", team: "Individual", level: "NGO", category: "Cultural", student: "Ms. Khyati Solanki (BA LLB 8th Sem)" },
            { year: "2022", award: "Essay Writing Competition", team: "Individual", level: "DLA, GOI", category: "Cultural", student: "Ms. Swarnim Sahu (BA LLB 4th Sem)" },
            { year: "2022", award: "Certificate of Participation", team: "Team", level: "Faculty of Law, DU", category: "Cultural", student: "Mr. Pranav Pratik, Ms. Dhruti Dewangan & Mr. Anmol Singh" },
            { year: "2022", award: "Debate Competition (2nd Position)", team: "Individual", level: "AMU", category: "Cultural", student: "Ms. Khyati Solanki (BA LLB 8th Sem)" },
            { year: "2022", award: "Legal Article Writing (Special Mention)", team: "Individual", level: "G.D. Goenka University", category: "Cultural", student: "Ms. Megha Bindal (BA LLB 8th Sem)" },
            { year: "2022", award: "Client Counseling Competition \"Lex-Bonanza\"", team: "Team", level: "Indore Institute of Law", category: "Cultural", student: "Ms. Kajal Pandey & Mr. Manjeet Saha" },
            { year: "2022", award: "Intra-client counselling competition", team: "Individual", level: "Kalinga University", category: "Cultural", student: "Rishabh Kumar Joshi (BA LLB 5th Sem)" },
            { year: "2022", award: "Webinar - Bridging The Justice Gap", team: "Individual", level: "Kalinga University", category: "Cultural", student: "Rishabh Kumar Joshi (BA LLB 5th Sem)" },
            { year: "2022", award: "Intra-Debate Competition", team: "Individual", level: "Kalinga University", category: "Cultural", student: "Rishabh Kumar Joshi (BA LLB 5th Sem)" },
            { year: "2022", award: "Rights of Differently-Abled Persons", team: "Individual", level: "Kalinga University", category: "Cultural", student: "Rishabh Kumar Joshi (BA LLB 5th Sem)" },
            { year: "2022", award: "Pro-Bono Club Participation", team: "Individual", level: "Kalinga University", category: "Cultural", student: "Rishabh Kumar Joshi (BA LLB 5th Sem)" },
            { year: "2022", award: "3rd National Moot Court Competition", team: "Individual", level: "Kalinga University", category: "Cultural", student: "Rishabh Kumar Joshi (BA LLB 5th Sem)" },
            { year: "2022", award: "International Seminar on GOVERNOR", team: "Individual", level: "GLC Thiruvananthapuram", category: "Cultural", student: "Ms. Kajal Pandey (LLM 3rd Sem)" },
            { year: "2022", award: "National Conference on Rights of Differently-Abled", team: "Individual", level: "Kalinga University", category: "Cultural", student: "Ms. Kajal Pandey (LLM 3rd Sem)" },
            { year: "2022", award: "Intra-debate competition", team: "Individual", level: "Kalinga University", category: "Cultural", student: "Ms. Jeeya Singh" },
            { year: "2022", award: "Legge Rhythms International MUN", team: "Individual", level: "Raipur", category: "Cultural", student: "Ms. Jeeya Singh" },
            { year: "2022", award: "Domestic and Sexual Violence Against Women - Seminar", team: "Individual", level: "Geeta Institute of Law", category: "Cultural", student: "Mr. Devansh Kumar (LLM 3rd Sem)" },
            { year: "2022", award: "National Legal Writing Competition", team: "Individual", level: "Kalinga University", category: "Cultural", student: "Ms. Vamini Dhruw" },
            { year: "2022", award: "Webinar on Wayam Portal", team: "Individual", level: "Kalinga University", category: "Cultural", student: "Ms. Vamini Dhruw" },
            { year: "2022", award: "Rights of Differently Abled Persons - Conference", team: "Individual", level: "Kalinga University", category: "Cultural", student: "Ms. Dhruti Dewangan" },
            { year: "2022", award: "Intra-Debate Competition", team: "Individual", level: "Kalinga University", category: "Cultural", student: "Ms. Dhruti Dewangan" },
            { year: "2022", award: "Manuscript Publication in IOSR Journal", team: "Individual", level: "IOSR Journals", category: "Cultural", student: "Ms. Dhruti Dewangan" },
            { year: "2022", award: "Pro Bono Club Certificate", team: "Individual", level: "Kalinga University", category: "Cultural", student: "Ms. Afsba Anjum" },
            { year: "2022", award: "Intra-Debate Competition", team: "Individual", level: "Kalinga University", category: "Cultural", student: "Ms. Afsba Anjum" },
            { year: "2022", award: "Rights of Differently Abled Persons - Conference", team: "Individual", level: "Kalinga University", category: "Cultural", student: "Ms. Afsba Anjum" },
            { year: "2022", award: "Pro-Bono Club Contribution", team: "Individual", level: "Kalinga University", category: "Cultural", student: "Ms. Samta Dewangan (BA LLB 8th Sem)" },
            { year: "2022", award: "Intra-Client Counselling (2nd Position)", team: "Individual", level: "Kalinga University", category: "Cultural", student: "Ms. Samta Dewangan (BA LLB 8th Sem)" },
            { year: "2022", award: "3-Week Internship on Legal Service", team: "Individual", level: "SLSA Bilaspur", category: "Cultural", student: "Ms. Samta Dewangan (BA LLB 8th Sem)" },
            { year: "2022", award: "Internship Programme", team: "Individual", level: "DLA, Ministry of Law", category: "Cultural", student: "Mr. Sudhir Tiwari" },
            { year: "2022", award: "Internship Programme", team: "Individual", level: "UP SLSA", category: "Cultural", student: "Mr. Sudhir Tiwari" },
            { year: "2023", award: "Legal Drafting Online Course", team: "Individual", level: "Kalinga University", category: "Cultural", student: "Ms. Shree Shubhangi" },
            { year: "2023", award: "AI on IPR Webinar", team: "Individual", level: "Kalinga University", category: "Cultural", student: "Ms. Shree Shubhangi" },
            { year: "2023", award: "Relay Race 100x4 (1st Position)", team: "Individual", level: "Kalinga University", category: "Sports", student: "Ms. Samta Dewangan (BA LLB 8th Sem)" },
            { year: "2023", award: "100m Race (1st Position)", team: "Individual", level: "Kalinga University", category: "Sports", student: "Ms. Samta Dewangan (BA LLB 8th Sem)" },
            { year: "2023", award: "Public Interest Litigation Webinar", team: "Individual", level: "Kalinga University", category: "Cultural", student: "Ms. Nancy Nanda" },
            { year: "2023", award: "Paper publication in Gradiva Review", team: "Individual", level: "Gradiva Review", category: "Cultural", student: "Ms. Mahima Tandon (LLM 3rd Sem)" },
            { year: "2023", award: "Legal Drafting Certificate", team: "Individual", level: "Kalinga University", category: "Cultural", student: "Ms. Aditi Agarwal" },
            { year: "2023", award: "Paper Publication \"Use of Armed Forces\"", team: "Individual", level: "IJLRA", category: "Cultural", student: "Ms. Dhruti Dewangan" },
            { year: "2023", award: "Psychology Course", team: "Individual", level: "Alison Education", category: "Cultural", student: "Mr. Ashutosh Singh (BA LLB 3rd Sem)" },
            { year: "2023", award: "Legal Laws Course", team: "Individual", level: "Kalinga University", category: "Cultural", student: "Mr. Ashutosh Singh (BA LLB 3rd Sem)" },
            { year: "2024", award: "Intersection of AI and Law Conference", team: "Individual", level: "AMU", category: "Academics", student: "Divya Maheshwari" },
            { year: "2024", award: "Cyber Crimes Paper Publication", team: "Individual", level: "IJCS & SS", category: "Academics", student: "Devansh Kumar" },
            { year: "2024", award: "Pragmatic Knowledge on RTI skilled", team: "Individual", level: "GGSIPU", category: "Academics", student: "Deepanshu Tembre" },
            { year: "2024", award: "Quiz Competition on Muslim Law", team: "Individual", level: "Lawminds", category: "Academics", student: "Deepanshu Tembre" },
            { year: "2024", award: "International Humanitarian Law Course", team: "Individual", level: "RGNUL Patiala", category: "Academics", student: "Deepanshu Tembre" },
            { year: "2024", award: "National Legal Essay Writing", team: "Individual", level: "Kalinga University", category: "Academics", student: "Shaheen Khan" },
            { year: "2024", award: "Article Publication \"Prisons of India\"", team: "Individual", level: "Vidhi Lekh", category: "Academics", student: "Sanskriti A. Sahu" },
            { year: "2024", award: "Rashtraneeti Diplomacy Summit", team: "Individual", level: "ITM University", category: "Cultural", student: "Cheenu Jain" },
            { year: "2024", award: "Rashtraneeti Diplomacy Summit 2024", team: "Individual", level: "ITM University", category: "Cultural", student: "Sanskriti A. Sahu" },
            { year: "2024", award: "IBC Code Course", team: "Individual", level: "Kalinga University", category: "Academics", student: "Mona Agrawal" },
            { year: "2024", award: "MUN Conference 3.0 2024", team: "Individual", level: "IIIT Naya Raipur", category: "Cultural", student: "Cheenu Jain, Asna Jabi, Masood Ahmed, Sanskriti Sahu, Divya Maheshwari" },
            { year: "2024", award: "Quiz on Indian Constitutional Law", team: "Individual", level: "LawFoyer", category: "Academics", student: "Shaheen Khan" },
            { year: "2024", award: "Workshop on IPR", team: "Individual", level: "Amity University", category: "Academics", student: "Deepanshu Tembre" },
            { year: "2024", award: "Yuva Sankalp MUN", team: "Individual", level: "Great Indian School", category: "Cultural", student: "Swarnim" },
            { year: "2024", award: "Space Laws Webinar", team: "Individual", level: "Jus Corpus", category: "Academics", student: "Deepanshu Tembre" },
            { year: "2021", award: "Virtual National Client Counseling (Winners)", team: "Team", level: "Subharti University", category: "Cultural", student: "Ms. Khyati Solanki & Mr. Rishabh Joshi" },
            { year: "2021", award: "Mediation Competition (Runners-up)", team: "Team", level: "MAIMS, Delhi", category: "Cultural", student: "Ms. Khyati Solanki & Mr. Rishabh Joshi" },
            { year: "2020", award: "National Moot Court Competition (1st Position)", team: "Team", level: "IMS Unison Univ, Dehradun", category: "Cultural", student: "Team Kalinga" },
            { year: "2019", award: "Youth Festival \"AAGAZ\" (Winner)", team: "Individual", level: "State level", category: "Cultural", student: "Ms. Tanushree" },
            { year: "2018", award: "National Moot Court (Best Researcher)", team: "Individual", level: "School of Law, ITM", category: "Cultural", student: "Mr. R. Mani Kumar" }
          ]}
          headerBgColor="bg-[var(--dark-blue)]"
          overflowX={true}
          disableContainer={true}
        />
      </div>
    )
  },
  {
    id: "bci-approval",
    question: "BCI Approval - Session 2025-26",
    component: (
      <div className="flex flex-col gap-4">
        <p className="text-gray-700">View BCI Approval for Session 2025-26:</p>
        <GlobalArrowButton
          as="a"
          href="https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/departments/Faculty+of+Law/BCI+Approval+-+Session+2025-26.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          View PDF Document
        </GlobalArrowButton>
      </div>
    )
  },
  {
    id: "newsletters-law",
    question: "Newsletters",
    component: (
      <div className="flex flex-col gap-4">
        <p className="text-gray-700">View Faculty of Law Newsletters:</p>
        <GlobalArrowButton
          as="a"
          href="https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/departments/Faculty+of+Law/Law+-+Newsletter_compressed.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Newsletters PDF
        </GlobalArrowButton>
      </div>
    )
  },
];
