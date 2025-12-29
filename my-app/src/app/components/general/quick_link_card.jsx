"use client"
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const QuickLinkCard = ({
  icon,
  title,
  description,
  cardBackgroundColor = "bg-[var(--lite-sand)]",
  showReadMore = true, // default is false, can set to true inline if needed
  href = null
}) => {
  const isImageUrl = typeof icon === 'string' && (icon.startsWith('http') || icon.startsWith('/'))
  const [isExpanded, setIsExpanded] = useState(false)
  const [showReadMoreButton, setShowReadMoreButton] = useState(false)
  const descriptionRef = useRef(null)

  useEffect(() => {
    const checkOverflow = () => {
      if (descriptionRef.current) {
        const element = descriptionRef.current
        // Create a clone to measure full height without line-clamp
        const clone = element.cloneNode(true)
        clone.style.position = 'absolute'
        clone.style.visibility = 'hidden'
        clone.style.height = 'auto'
        clone.style.maxHeight = 'none'
        clone.classList.remove('line-clamp-4')
        clone.style.width = element.offsetWidth + 'px'
        document.body.appendChild(clone)
        
        const fullHeight = clone.offsetHeight
        const lineHeight = parseFloat(window.getComputedStyle(element).lineHeight) || 20
        const maxHeight = lineHeight * 4
        
        document.body.removeChild(clone)
        setShowReadMoreButton(fullHeight > maxHeight)
      }
    }

    // Use setTimeout to ensure DOM is rendered
    const timer = setTimeout(checkOverflow, 0)
    window.addEventListener('resize', checkOverflow)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', checkOverflow)
    }
  }, [description])

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div
      className={`${cardBackgroundColor} rounded-lg p-5 sm:p-6 shadow-lg flex flex-col h-full`}
    >
      {/* Icon */}
      <div className="mb-8">
        {isImageUrl ? (
          <div className="relative w-12 h-12 sm:w-14 sm:h-14">
            <Image
              src={icon}
              alt={title}
              fill
              className="object-contain"
            />
          </div>
        ) : (
          <div className="text-[var(--button-red)] text-3xl sm:text-4xl">
            {icon}
          </div>
        )}
      </div>

      {/* Title */}
      <h3 className="text-xl mb-2 pb-2 border-b border-gray-700 text-[var(--foreground)]">
        {title}
      </h3>

      {/* Description */}
      <div className="flex-grow mb-4 sm:mb-6">
        <p 
          ref={descriptionRef}
          className={`text-sm font-plus-jakarta-sans ${
            !isExpanded && showReadMoreButton ? 'line-clamp-4' : ''
          }`}
        >
          {description}
        </p>
        {showReadMoreButton && (
          <button
            onClick={toggleExpand}
            className="text-[var(--button-red)] text-sm font-semibold mt-2 hover:underline"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        )}
      </div>
      {showReadMore && (
        <div className="flex justify-end mt-auto">
          {href ? (
            <Link href={href} className="inline-flex">
              <button className="cursor-pointer w-7 h-7 sm:w-8 sm:h-8 rounded bg-[var(--button-red)] text-white flex items-center justify-center shadow-sm hover:bg-[#a2a2a2] transition-colors">
                <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 text-[var(--background)]"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      d="M4 12L12 4M12 4H6M12 4V10"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                  />
                </svg>
              </button>
            </Link>
          ) : (
            <button className="cursor-pointer w-7 h-7 sm:w-8 sm:h-8 rounded bg-[var(--button-red)] text-white flex items-center justify-center shadow-sm hover:bg-[#a2a2a2] transition-colors">
              <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 text-[var(--background)]"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M4 12L12 4M12 4H6M12 4V10"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default QuickLinkCard

