import GlobalArrowButton from "../general/global-arrow_button";

const buttons = [
  {
    id: 1,
    text: "Research, Consultancy & IPR Policy",
  },
  {
    id: 2,
    text: "Research Advisory Committee",
  },
  {
    id: 3,
    text: "Ethics Committee Constitution",
  },
  {
    id: 4,
    text: "Plagiarism Policy",
  },
  {
    id: 5,
    text: "Software used for Plagiarism",
  },
  {
    id: 6,
    text: "Ph.D. Admissions",
  },
];

export default function ResearchSixGridButtons() {
  return (
    <section className="pt-16 pb-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {buttons.map((button) => (
            <GlobalArrowButton
              key={button.id}
              className="!w-full h-[60px]"
              arrowClassName="p-[3px] !px-2 mr-2 !py-1"
              arrowSize={29}
            >
              {button.text}
            </GlobalArrowButton>
          ))}
        </div>
      </div>
    </section>
  );
}

