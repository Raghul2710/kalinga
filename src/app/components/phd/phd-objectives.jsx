import ImageListItem from "../ccrc/imagelistitem";

export default function PhdObjectivesPanel({
  title = "Objectives of Our Research Cell",
  subtitle = "",
  subtitle1 = "",
  phdObjectives = [],
  imageSrc = "https://cdn.kalingauniversity.ac.in/phd/Phd-Objectives.webp"
}) {
  const defaultItems = [
    {
      text: "Develop and implement university guidelines, policies, and ordinances according to the standards set by the statutory regulatory bodies to promote a world-class research environment.",
    },
    {
      text: "Continuously track and evaluate the quality of research and development activities.",
    },
    {
      text: "Maintain advanced research infrastructure for research facilitation.",
    },
    {
      text: "Overseeing every stage of the PhD process from admission to awarding the doctoral degree.",
    },
    {
      text: "Manage and support the publication of research work in scientific journals.",
    },
    {
      text: "Establish and manage partnerships through Memorandum of Understanding (MoU) with national and international institutions.",
    },
    {
      text: "Strengthen the reputation of the university by producing high-quality research outcomes.",
    },
    {
      text: "Conduct workshops, seminars, and hands-on training programs to develop interest in research work among students and faculty members.",
    },
    {
      text: "Strictly adhere to ethical research practices and university guidelines.",
    },
  ];

  const displayItems = phdObjectives.length > 0 
    ? phdObjectives.map(obj => ({ text: obj.item })) 
    : defaultItems;

  return (
    <ImageListItem
      imageSrc={imageSrc}
      imageAlt={title}
      description=""
      title={title}
      subtitle={subtitle}
      subtitle1={subtitle1}
      items={displayItems}
    />
  );
}
