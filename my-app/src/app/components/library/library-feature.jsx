"use client";

import PublicationGrid from "../research/publication-grid"; 


export default function LibraryGrid() {
  return (
    <PublicationGrid
      stats={[
        {
          title: "Books",
          value: "94K+",
          description: "Extensive collection of printed books across all disciplines.",
        },
        {
          title: "Journals",
          value: "20+",
          description: "National and international journals supporting academic research.",
        },
        {
          title: "E-Books",
          value: "8683K+",
          description: "Digital books accessible anytime through the university portal.",
        },
        {
          title: "E-Journals",
          value: "159K+",
          description: "Online journals covering diverse research domains.",
        },
        {
          title: "Research Publications",
          value: "3360+",
          description: "Scholarly research publications by faculty and researchers.",
        },
      ]}
    />
  );
}
