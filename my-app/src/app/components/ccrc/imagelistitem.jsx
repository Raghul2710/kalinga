import Image from "next/image";
import SectionHeading from "../general/SectionHeading";

export default function ImageListItem({
    imageSrc = "/images/ccrc/ccrc-banner.png",
    imageAlt = "CCRC Banner",
    imageWidth = 600,
    imageHeight = 400,
    title = "About CCRC",
    subtitle = "Career and Corporate Resource Centre",
    description = "The Career and Corporate Resource Centre (CCRC) of Kalinga University bridges academic learning and industrial knowledge through collaborations and customised solutions. Our services include: Corporate Trainings & Psychometric Analysis, Consultancy Services: 360 Degree PMS & HRIS.",
    buttonText = "Apply for CCRC",
    onButtonClick,
    items = [],
    className = "",
}) {
  return (
    <section className={` bg-[var(--dark-blue)] my-16 rounded-xl mx-5   md:p-12 mb-0 p-6  ${className}`}>
    <div className="container mx-auto">
    <div className="grid md:grid-cols-12 grid-cols-6 items-center gap-10">
      
      <Image 
        src={imageSrc} 
        alt={imageAlt} 
        width={imageWidth} 
        height={imageHeight}
        className="col-span-6 "
      />

      <div className="col-span-6 gap-5 items-center">
          <SectionHeading  title={title}  titleClassName="!py-2 text-white" />
      {/* Example list data; replace or receive as props as needed */}
      <ul className="space-y-3 py-2">
        {items && Array.isArray(items) && items.length > 0 && items.map((item, idx) => (
          <li key={idx} className="flex items-center space-x-3 space-y-2">
<svg fill="none" height="24" className="md:h-6 md:w-6 h-6 w-9   bg-[var(--card-skin)] fill-black rounded-md p-1" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" id="fi_16777580"><path d="m19 5.50049v10.99951c0 .2761-.2239.5-.5.5s-.5-.2239-.5-.5v-9.79289l-12.14645 12.14649c-.19526.1952-.51184.1952-.7071 0-.19527-.1953-.19527-.5119 0-.7072l12.14645-12.1464h-9.7929c-.27614 0-.5-.22386-.5-.5s.22386-.5.5-.5h11c.1316 0 .2578.05186.3514.14426l.0022.00219c.0879.0879.1397.20518.1458.32876.0004.00824.0006.01699.0006.02528z" ></path></svg>
            <span className="text-sm text-white">{item.text}</span>
          </li>
        ))}
      </ul>


      </div>
      </div>
    </div>
   
  </section>
  );
}