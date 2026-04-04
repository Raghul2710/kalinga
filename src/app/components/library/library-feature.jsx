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
          title: "Research Publications",
          value: "4700+",
          description: "Scholarly research publications by faculty and researchers.",
        },

        {
          title: "E-Books",
          value: "86L+",
          description: "Digital books accessible anytime through the university portal.",
        },
        {
          title: "E-Journals",
          value: "1.5L+",
          description: "Online journals covering diverse research domains.",
        },
        {
          title: "Journals",
          value: "20+",
          description: "National and international journals supporting academic research.",
        },
      ]}
    />
  );
}
