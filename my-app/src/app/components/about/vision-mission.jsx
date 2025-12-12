import Image from "next/image";

const defaultVision = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
  esse cillum dolore eu fugiat nulla pariatur.
`.trim();

const defaultMission = defaultVision;

export default function VisionMission({
  data,
  visionTitle = "Vision",
  missionTitle = "Mission",
  visionText = defaultVision,
  missionText = defaultMission,
  imageSrc = "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/person-standing-1.png",
  imageAlt = "Vision and Mission",
  showImage = true,
  className = "",
}) {
  // Support data prop (array of objects) or individual props
  const entries = Array.isArray(data) && data.length > 0 
    ? data 
    : [{
        visionTitle,
        missionTitle,
        visionText,
        missionText,
        imageSrc,
        imageAlt,
        showImage,
        className,
      }];

  return (
    <>
      {entries.map((entry, idx) => {
        const {
          visionTitle: vt = "Vision",
          missionTitle: mt = "Mission",
          visionText: vtxt = defaultVision,
          missionText: mtxt = defaultMission,
          imageSrc: imgSrc = "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/person-standing-1.png",
          imageAlt: imgAlt = "Vision and Mission",
          showImage: showImg = true,
          className: cls = "",
        } = entry;

        const gridCols = showImg ? "lg:grid-cols-12" : "lg:grid-cols-2";
        const visionCol = showImg
          ? "order-1 lg:order-1 lg:col-span-5"
          : "order-1 lg:order-1";
        const missionCol = showImg
          ? "order-2 lg:order-3 lg:col-span-5"
          : "order-2 lg:order-2";

        // Helper function to render text - supports both string and array
        const renderText = (text) => {
          if (Array.isArray(text)) {
            return (
              <ul className="space-y-2">
                {text.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 rounded">
                   <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black bg-white p-1 flex-shrink-0 group-hover:text-white rounded-md "><path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"></path></svg>

                    <span className="text-[var(--foreground)] leading-relaxed text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            );
          }
          return <p className="text-[var(--foreground)] leading-relaxed">{text}</p>;
        };

        return (
          <section key={idx} className={`pt-16 lg:pt-24 bg-white ${cls}`}>
            <div className="container mx-auto px-4 lg:px-5">
              <div className={`grid grid-cols-1 ${gridCols} gap-8 lg:gap-6 items-stretch`}>
                {/* Left - Vision Box */}
                <div className={`${visionCol} flex`}>
                  <div className="bg-[var(--dark-skin)] p-6 lg:p-8 rounded-2xl shadow-lg transform-3d-slant-mirror w-full flex flex-col">
                    <h3 className="font-stix text-[var(--foreground)] mb-4 text-center">
                      {vt}
                    </h3>
                    <div className="flex-1">
                      {renderText(vtxt)}
                    </div>
                  </div>
                </div>

                {/* Center - Person Image */}
                {showImg && (
                  <div className="order-3 lg:order-2 lg:col-span-2 flex justify-center">
                    <div className="relative w-full max-w-[250px] lg:max-w-[300px]">
                      <Image
                        src={imgSrc}
                        alt={imgAlt}
                        width={400}
                        height={600}
                        className="w-full h-auto object-contain"
                        priority
                      />
                    </div>
                  </div>
                )}

                {/* Right - Mission Box */}
                <div className={`${missionCol} flex`}>
                  <div className="bg-[var(--dark-skin)] p-6 lg:p-8 rounded-2xl shadow-lg transform-3d-slant w-full flex flex-col">
                    <h3 className="font-stix text-[var(--foreground)] mb-4 text-center">
                      {mt}
                    </h3>
                    <div className="flex-1">
                      {renderText(mtxt)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}

