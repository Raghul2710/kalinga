"use client";

import React, { useState } from "react";
import ProgramCard from "../general/program-card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../general/tab";

export default function ProgramsTabs() {
  const [activeTab, setActiveTab] = useState("45Days");

  const programs45Days = [
    { id: 1, title: "Biotech Tools & Techniques", specialization: "Start Date: May | End Date: July", duration: "45 Days" },
    { id: 2, title: "Zoological Tools & Techniques", specialization: "Start Date: May | End Date: July", duration: "45 Days" },
    { id: 3, title: "Physics Tools & Techniques", specialization: "Start Date: May | End Date: July", duration: "45 Days" },
    { id: 4, title: "Pharmaceutical Techniques", specialization: "Start Date: May | End Date: July", duration: "45 Days" },
    { id: 5, title: "Applied Business Management", specialization: "Start Date: May | End Date: July", duration: "45 Days" },
    { id: 6, title: "Botany & Microbiology Tools & Techniques", specialization: "Start Date: May | End Date: July", duration: "45 Days" },
    { id: 7, title: "Chemistry Tools & Techniques", specialization: "Start Date: May | End Date: July", duration: "45 Days" },
    { id: 8, title: "Artificial Intelligence & Machine Learning (AI & ML)", specialization: "Start Date: May | End Date: July", duration: "45 Days" },
    { id: 9, title: "Python and R Programming", specialization: "Start Date: May | End Date: July", duration: "45 Days" },
    { id: 10, title: "E-Vehicle", specialization: "Start Date: May | End Date: July", duration: "45 Days" },
    { id: 11, title: "Forensic Science", specialization: "Start Date: May | End Date: July", duration: "45 Days" }
  ];

  const programs6Months = [
    { id: 1, title: "Zoological Techniques", specialization: "Start Date: Jan | End Date: June", duration: "6 Months" },
    { id: 2, title: "Physics", specialization: "Start Date: Jan | End Date: June", duration: "6 Months" },
    { id: 3, title: "Pharmaceutical Sciences", specialization: "Start Date: Jan | End Date: June", duration: "6 Months" },
    { id: 4, title: "Interior Design", specialization: "Start Date: Jan | End Date: June", duration: "6 Months" },
    { id: 5, title: "Fashion Design", specialization: "Start Date: Jan | End Date: June", duration: "6 Months" },
    { id: 6, title: "Data Science Using R Programming", specialization: "Start Date: Jan | End Date: June", duration: "6 Months" },
    { id: 7, title: "Chemistry", specialization: "Start Date: Jan | End Date: June", duration: "6 Months" },
    { id: 8, title: "Botany & Microbiology", specialization: "Start Date: Jan | End Date: June", duration: "6 Months" },
    { id: 9, title: "Biotechnology", specialization: "Start Date: Jan | End Date: June", duration: "6 Months" }
  ];

  return (
    <section className="bg-white">
      <div className="px-2">
        {/* Tabs Container */}
        <div className="bg-[var(--dark-blue)] rounded-2xl py-16">
          <div className="container mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-8 flex-wrap justify-center">
              <TabsTrigger value="45Days" className="flex-1 min-w-[calc(50%-7px)] md:min-w-[200px]">
                45 Days Internship Program
              </TabsTrigger>
              <TabsTrigger value="6Months" className="flex-1 min-w-[calc(50%-7px)] md:min-w-[200px]">
                6 Months Internship Program
              </TabsTrigger>
            </TabsList>

            {/* Tab Content */}
            <TabsContent value="45Days" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {programs45Days.map((program) => (
                  <ProgramCard
                    key={program.id}
                    program={program}
                    onCheckEligibility={(program) => console.log('Check Eligibility', program)}
                    onApplyNow={(program) => console.log('Apply Now', program)}
                    onScholarshipsClick={(program) => console.log('Scholarships', program)}
                    onExploreProgramClick={(program) => console.log('Explore Program', program)}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="6Months" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {programs6Months.map((program) => (
                  <ProgramCard
                    key={program.id}
                    program={program}
                    onCheckEligibility={(program) => console.log('Check Eligibility', program)}
                    onApplyNow={(program) => console.log('Apply Now', program)}
                    onScholarshipsClick={(program) => console.log('Scholarships', program)}
                    onExploreProgramClick={(program) => console.log('Explore Program', program)}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}

