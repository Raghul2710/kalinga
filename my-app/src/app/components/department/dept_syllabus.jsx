import Image from "next/image";
import GlobalArrowButton from "../general/global-arrow_button";

export default function DeptSyllabus() {
  return (
    <section className="py-16 pb-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Students Image with Overlay Cards */}
        <div className="relative">
          <Image
            src="https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/bg-course.webp"
            alt="Students collaborating"
            width={1200}
            height={500}
            className="w-full h-[600px] md:h-[400px] lg:h-[500px] object-cover rounded-2xl"
          />
          
          {/* Two Cards Overlaying the Image */}
          <div className="absolute bottom-0 left-0 right-0 px-4 md:px-6 lg:px-10 pb-4 md:pb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* Left Card - Program & Syllabus */}
              <div className="bg-[var(--dark-orange-red)] rounded-xl p-4 md:p-6 lg:p-8 flex flex-col justify-between min-h-[160px] md:min-h-[180px] lg:min-h-[200px]">
                <div>
                  <h3 className="text-white text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-6">
                    Program & Syllabus
                  </h3>
                </div>
                <div>
                  <GlobalArrowButton
                    className="!bg-white !text-[#000] !w-full md:!w-auto whitespace-nowrap text-sm md:text-base"
                    arrowClassName="!bg-[var(--button-red)]"
                    arrowIconClassName="!text-white"
                    textClassName="!font-bold"
                  >
                    Download Syllabus
                  </GlobalArrowButton>
                </div>
              </div>

              {/* Right Card - Course Materials */}
              <div className="bg-[var(--button-red)] rounded-xl p-4 md:p-6 lg:p-8 flex flex-col justify-between min-h-[160px] md:min-h-[180px] lg:min-h-[200px]">
                <div>
                  <h3 className="text-white text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-6">
                    Course Materials
                  </h3>
                </div>
                <div>
                  <GlobalArrowButton
                    className="!bg-white !text-[#000] !w-full md:!w-auto whitespace-nowrap text-sm md:text-base"
                    arrowClassName="!bg-[var(--dark-orange-red)]"
                    arrowIconClassName="!text-white"
                    textClassName="!font-bold"
                  >
                    Explore Courses
                  </GlobalArrowButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

