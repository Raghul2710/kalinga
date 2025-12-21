'use client'

import { useState, useRef, useLayoutEffect, useEffect } from "react"
import GlobalRedPlainButton from "../general/global-red_plain_button"
import GlobalArrowButton from "../general/global-arrow_button"

export default function CareerApplicationForm({
  /** Heading text for the form */
  heading = "Career Application Form",
  /** Description text shown under the heading */
  description = "Join a dynamic community of educators, researchers, and professionals shaping the future of learning at Kalinga University. Please fill in your details below to apply for a suitable position. Our HR team will review your application and contact you if your profile matches our current openings.",
  /** Background color class for the section */
  backgroundClass = "bg-[var(--dark-blue)]",
  /** If true, hides the tabs and underline - useful for Alumni form variant */
  hideTabs = false,
  /** Submit button label */
  submitLabel = "Submit",
  /** Use arrow-style global button instead of plain red button */
  useArrowSubmitButton = false,
  /** Variant to use for arrow submit button */
  arrowSubmitVariant = "white",
  /** Optional submit handler */
  onSubmit,
}) {

  const [activeTab, setActiveTab] = useState("personal")
  const tabRefs = useRef({})
  const tabsContainerRef = useRef(null)
  const [underlineStyle, setUnderlineStyle] = useState({ width: 0, x: 0 })

  const tabs = [
    { id: "personal", label: "Personal Information" },
    { id: "academic", label: "Academic Details" },
    { id: "position", label: "Position Details" },
    { id: "experience", label: "Professional Experience" },
    { id: "documents", label: "Upload Documents" }
  ]

  const updateUnderline = () => {
    const container = tabsContainerRef.current
    const currentEl = tabRefs.current[activeTab]

    if (!container || !currentEl) return

    const containerRect = container.getBoundingClientRect()
    const elRect = currentEl.getBoundingClientRect()

    setUnderlineStyle({
      width: Math.round(elRect.width),
      x: Math.round(elRect.left - containerRect.left + container.scrollLeft)
    })
  }

  useLayoutEffect(() => {
    if (!hideTabs) {
      updateUnderline()
    }
  }, [activeTab, hideTabs])

  useEffect(() => {
    if (hideTabs) return

    const ro = new ResizeObserver(updateUnderline)
    const c = tabsContainerRef.current
    if (c) ro.observe(c)
    return () => ro.disconnect()
  }, [hideTabs])

  const submitAlignClass = hideTabs ? "justify-center" : "justify-end";

  return (
    <section className={`w-[calc(100%-1rem)] ${backgroundClass} py-16 rounded-xl mx-2`}>
      <div className="container mx-auto">
      <h2 className="text-[var(--background)] text-center text-3xl sm:text-[40px] font-light">
        {heading}
      </h2>

      <p className="text-center text-[var(--background)]/70 max-w-6xl mx-auto mt-4 text-sm sm:text-base">
        {description}
      </p>

      {/* TABS - hidden for Alumni variant */}
      {!hideTabs && (
        <div className="relative mt-10 pb-2 border-b border-[var(--background)]/30">
          <style jsx>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
          <div
            ref={tabsContainerRef}
            className="flex gap-4 sm:gap-6 md:gap-10 justify-start sm:justify-center overflow-x-auto scrollbar-hide px-2 sm:px-0"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                ref={(el) => (tabRefs.current[tab.id] = el)}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 pb-3 text-xs sm:text-sm md:text-base whitespace-nowrap px-2 sm:px-0 ${
                  activeTab === tab.id ? "text-[var(--dark-orange-red-light)] font-medium" : "text-[var(--background)]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <span
            className="absolute bottom-0 h-[3px] bg-[var(--dark-orange-red-light)] transition-all duration-300"
            style={{
              width: underlineStyle.width,
              transform: `translateX(${underlineStyle.x}px)`
            }}
          />

        </div>
      )}

      {/* FORM */}
      <div className="mt-10 rounded-xl">
        
        <div className="grid sm:grid-cols-2 gap-10">

          <div>
            <label className="text-[var(--background)] text-xl">Full Name</label>
            <input className="w-full mt-2 bg-transparent border-b border-[var(--background)]/40 text-[var(--background)] py-2 focus:border-[var(--dark-orange-red-light)]" />
          </div>

          <div>
            <label className="text-[var(--background)] text-xl">Email Address</label>
            <input className="w-full mt-2 bg-transparent border-b border-[var(--background)]/40 text-[var(--background)] py-2 focus:border-[var(--dark-orange-red-light)]" />
          </div>

          <div>
            <label className="text-[var(--background)] text-xl">Mobile Number</label>
            <input className="w-full mt-2 bg-transparent border-b border-[var(--background)]/40 text-[var(--background)] py-2 focus:border-[var(--dark-orange-red-light)]" />
          </div>

          <div>
            <label className="text-[var(--background)] text-xl">Date of Birth</label>
            <input type="date" className="w-full mt-2 bg-transparent border-b border-[var(--background)]/40 text-[var(--background)] py-2 focus:border-[var(--dark-orange-red-light)]" />
          </div>

          <div>
            <label className="text-[var(--background)] text-xl">Gender</label>
            <select className="w-full mt-2 bg-transparent border-b border-[var(--background)]/40 text-[var(--background)] py-2 focus:border-[var(--dark-orange-red-light)]">
              <option className="text-[var(--foreground)]">Select</option>
              <option className="text-[var(--foreground)]">Male</option>
              <option className="text-[var(--foreground)]">Female</option>
            </select>
          </div>

          <div>
            <label className="text-[var(--background)] text-xl">Nationality</label>
            <input className="w-full mt-2 bg-transparent border-b border-[var(--background)]/40 text-[var(--background)] py-2 focus:border-[var(--dark-orange-red-light)]" />
          </div>

        </div>

        <div className={`flex ${submitAlignClass} mt-12`}>
          {useArrowSubmitButton ? (
            <GlobalArrowButton
              variant={arrowSubmitVariant}
              onClick={onSubmit}
            >
              {submitLabel}
            </GlobalArrowButton>
          ) : (
            <GlobalRedPlainButton onClick={onSubmit}>
              {submitLabel}
            </GlobalRedPlainButton>
          )}
        </div>

      </div>
      </div>
    </section>
  );
}
