import Image from "next/image";
import GlobalArrowButton from "../general/global-arrow_button";

const activities = [
  {
    id: 1,
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/image+15.png",
    imageAlt: "Student Activities",
    title: "Lorem ipsum dolor sit amet, consectetur",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText: "Read More",
    date: "August 25 - 2025"
  },
  {
    id: 2,
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/image+15.png",
    imageAlt: "Student Activities",
    title: "Lorem ipsum dolor sit amet, consectetur",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText: "Read More",
    date: "August 25 - 2025"
  },
  {
    id: 3,
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/image+15.png",
    imageAlt: "Student Activities",
    title: "Lorem ipsum dolor sit amet, consectetur",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText: "Read More",
    date: "August 25 - 2025"
  }
];

export default function StudentActivities() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h5 className="text-center mb-10"><span className="text-[var(--button-red)]">Student Activities</span></h5>
        <h2 className="text-center mb-10">Lorem ipsum dolor sit amet, consectetur</h2>
      </div>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <div key={activity.id} className="bg-[var(--light-gray)] rounded-lg p-5">
              <div className="relative">
                <Image 
                  src={activity.imageSrc} 
                  alt={activity.imageAlt} 
                  width={500} 
                  height={500} 
                  className="rounded-lg object-cover w-full" 
                />
                {activity.date && (
                  <div className="absolute bottom-3 right-3 bg-[var(--dark-orange-red-light)] px-3 py-1.5 rounded text-[#000] text-sm font-medium">
                    {activity.date}
                  </div>
                )}
              </div>
              <h3 className="text-left mt-5 mb-2">{activity.title}</h3>
              <p className="text-left">{activity.description}</p>
              <GlobalArrowButton
                className="w-fit mt-1 !bg-[var(--light-gray)] !shadow-none hover:!shadow-none gap-3 !px-0"
                textClassName="!text-[var(--button-red)] !text-base !ml-0 !px-0"
                arrowClassName="p-[3px] !px-1 mr-2 !py-1 !bg-[var(--button-red)]"
                arrowIconClassName="!text-white"
              >
                {activity.buttonText}
              </GlobalArrowButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}