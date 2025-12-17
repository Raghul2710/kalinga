"use client";

import { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import SectionHeading from "../general/SectionHeading";

const locations = [ 
  {
    id: 1,
    name: "THAILAND",
    flag: "https://flagcdn.com/w40/th.png",
    coordinates: { top: "42%", left: "75%" }
  },

  {
    id: 2,
    name: "NEPAL",
    flag: "https://flagcdn.com/w40/np.png",
    coordinates: { top: "38%", left: "71%" }
  },
  {
    id: 3,
    name: "SRI LANKA",
    flag: "https://flagcdn.com/w40/lk.png",
    coordinates: { top: "48%", left: "72%" }
  },
  {
    id: 4,
    name: "USA",
    flag: "https://flagcdn.com/w40/us.png",
    coordinates: { top: "35%", left: "23%" }
  },
  {
    id: 5,
    name: "ITALY",
    flag: "https://flagcdn.com/w40/it.png",
    coordinates: { top: "33%", left: "52%" }
  },
  {
    id: 6,
    name: "CHINA",
    flag: "https://flagcdn.com/w40/cn.png",
    coordinates: { top: "35%", left: "77%" }
  },
  {
    id: 7,
    name: "SLOVENIA",
    flag: "https://flagcdn.com/w40/si.png",
    coordinates: { top: "32%", left: "53%" }
  },
  {
    id: 8,
    name: "BANGLADESH",
    flag: "https://flagcdn.com/w40/bd.png",
    coordinates: { top: "40%", left: "74%" }
  },
  {
    id: 9,
    name: "AFRICA",
    flag: "https://flagcdn.com/w40/za.png",
    coordinates: { top: "40%", left: "52%" }
  },
  {
    id: 10,
    name: "TURKEY",
    flag: "https://flagcdn.com/w40/tr.png",
    coordinates: { top: "34%", left: "66%" }
  },
  {
    id: 11,
    name: "VIETNAM",
    flag: "https://flagcdn.com/w40/vn.png",
    coordinates: { top: "43%", left: "80%" }
  },
  {
    id: 12,
    name: "JAPAN",
    flag: "https://flagcdn.com/w40/jp.png",
    coordinates: { top: "35%", left: "82%" }
  }
];

// GlowingBox Component
function GlowingBox({ children, borderColor = "var(--dark-blue)", style = {}, className = "", ...props }) {
  const boxRef = useRef(null);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!boxRef.current) return;
      
      const box = boxRef.current;
      const rect = box.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - rect.width / 2;
      const mouseY = e.clientY - rect.top - rect.height / 2;
      
      let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
      angle = (angle + 360) % 360;
      
      box.style.setProperty("--start", angle + 60);
      box.style.setProperty("--border-color", borderColor);
    };
    
    const box = boxRef.current;
    if (box) {
      box.addEventListener("mousemove", handleMouseMove);
    }
    
    return () => {
      if (box) {
        box.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [borderColor]);

  const defaultStyle = {
    position: 'relative',
    zIndex: 1,
    overflow: 'hidden',
    ...style
  };

  return (
    <div 
      ref={boxRef} 
      className={`glowing-box ${className}`}
      style={defaultStyle}
      {...props}
    >
      {children}
      
      <style dangerouslySetInnerHTML={{__html: `
        .glowing-box {
          --start: 0;
          --border-color: ${borderColor};
        }
        
        .glowing-box::before {
          position: absolute;
          content: "";
          width: 100%;
          height: 100%;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          border-radius: inherit;
          border: 4px solid transparent;
          background: var(--border-color);
          mask: linear-gradient(#0000, #0000), conic-gradient(from calc((
                      var(--start) - (20 * 1.1)
                  ) * 1deg), #ffffff1f 0deg, white, #ffffff00 100deg);
          mask-composite: intersect;
          mask-clip: padding-box, border-box;
          opacity: 0;
          transition: 0.5s ease;
          z-index: 10;
        }
        
        .glowing-box:hover::before {
          opacity: 1;
        }
      `}} />
    </div>
  );
}

export default function Map() {
  const [activeLocation, setActiveLocation] = useState(null);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 relative">
        <SectionHeading 
          subtitle="Global Scale"
          title="Expanding Horizons Through Global Partnerships"
          subtitleClassName="mb-2 text-center"
          titleClassName="mb-8 text-center"
          subtitleTextColor="!text-[var(--button-red)]"
        />
        <p className="text-center">Kalinga University is home to students from 29+ countries, fostering a truly international learning environment. Through academic exchange programs, research collaborations, and strategic global alliances, the University prepares students to become globally competent professionals and leaders.</p>
        <div className="relative">
          <Image 
            src="https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/globe-skin-color.png"
            alt="Global Presence Map" 
            width={1000} 
            height={500} 
            className="w-full opacity-80 pt-10"
            unoptimized
          />
          
          {/* Location Points */}
          {locations.map((location) => (
            <div
              key={location.id}
              className={`absolute transition-all duration-300 group ${
                activeLocation === null || activeLocation === location.id 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-0'
              }`}
              style={{
                top: location.coordinates.top,
                left: location.coordinates.left,
              }}
            >
              <svg 
                className="text-[var(--dark-blue)] text-4xl animate-bounce w-10 h-10" 
                fill="currentColor" 
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-8 bg-white text-primary px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
                {location.name}
              </span>
            </div>
          ))}
        </div>
        
        {/* Legend - Horizontal under image */}
        <div className="w-full rounded-[20px] bg-[#D9D9D975] backdrop-blur-md">
          <GlowingBox borderColor="var(--button-red)" className="p-6 rounded-[20px]">
            <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-6 z-20 relative text-sm">
              {locations.map((location) => (
                <li 
                  key={location.id} 
                  className={`flex items-center gap-2 md:gap-3 cursor-pointer transition-colors whitespace-nowrap ${
                    activeLocation === location.id ? 'underline underline-offset-4' : ''
                  }`}
                  onClick={() => setActiveLocation(
                    activeLocation === location.id ? null : location.id
                  )}
                >
                  <Image src={location.flag} alt={location.name} width={30} height={30} />
                  <span>{location.name}</span>
                </li>
              ))}
            </ul>
          </GlowingBox>
        </div>
      </div>
    </section>
  );
}
