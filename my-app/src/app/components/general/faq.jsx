"use client"
import React, { useState, useEffect } from 'react'
import SectionHeading from './SectionHeading'
import DataTable from './data-table'
import GlobalArrowButton from './global-arrow_button'

const defaultFAQItems = [
  {
    id: 1,
    question: "What is the admission process?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
  },
  {
    id: 2,
    question: "What are the eligibility criteria?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
  },
  {
    id: 3,
    question: "What documents are required?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
  },
  {
    id: 4,
    question: "How can I apply for scholarships?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
  },
  {
    id: 5,
    question: "What is the fee structure?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
  }
]

const FAQ = ({
  items = defaultFAQItems,
  title = "Frequently Asked Questions",
  subtitle = "FAQ",
  backgroundColor = "bg-white",
  allowMultipleOpen = false, // Always false - only one accordion can be open at a time
  subtitleClassName = "",
  showHeading = true, // Optional prop to enable/disable heading
  titleClassName = "text-center", // Optional prop for title styling
  noSection = false, // Optional prop to render without section wrapper
  variant = "default", // "default" | "editable" | "table" | "table-display" | "button"
  // For table-display variant
  tableColumns = [
    { key: "slNo", label: "Sl. No", width: "w-20" },
    { key: "name", label: "Name of member", width: "w-48" },
    { key: "designation", label: "Designation", width: "flex-1" },
    { key: "category", label: "Category", width: "w-40" }
  ],
  tableData = [],
  tableSections = [], // Array of { id, title, data } for multiple sections
  overflowX = false,
  pyClassName = "py-16",
  // For button variant
  buttons = []
}) => {
  // Initialize with first item open for default variant
  const [openItems, setOpenItems] = useState(() => {
    if (variant === "default" && items.length > 0) {
      return new Set([items[0].id !== undefined ? items[0].id : 1])
    }
    return new Set()
  })
  const [faqItems, setFaqItems] = useState(items)
  // Initialize with all sections collapsed except the first one for button variant and table-display variant
  const [collapsedSections, setCollapsedSections] = useState(() => {
    if (variant === "button" && buttons.length > 0) {
      const initialSet = new Set()
      buttons.forEach((item, index) => {
        if (index > 0) { // Skip first item (index 0) - keep it open
          initialSet.add(`button-section-${item.id || index}`)
        }
      })
      return initialSet
    }
    if (variant === "table-display" && tableSections.length > 0) {
      const initialSet = new Set()
      tableSections.forEach((section, index) => {
        if (index > 0) { // Skip first section (index 0) - keep it open
          initialSet.add(`section-${section.id || index}`)
        }
      })
      return initialSet
    }
    return new Set()
  })

  // Update faqItems state when items prop changes (only for editable variant)
  useEffect(() => {
    if (variant === "editable") {
      setFaqItems(items)
    }
  }, [items, variant])
  const [editableTableData, setEditableTableData] = useState(
    variant === "table" 
      ? items.map((item, index) => ({
          id: item.id,
          row: Math.floor(index / 2) + 1,
          col: (index % 2) + 1,
          question: item.question,
          answer: item.answer
        }))
      : []
  )

  const toggleItem = (id) => {
    setOpenItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        // If clicking the same item, close it
        newSet.delete(id)
      } else {
        // Always close all others first (single open mode)
        newSet.clear()
        newSet.add(id)
      }
      return newSet
    })
  }

  // Editable variant functions
  const addFAQItem = () => {
    const newId = Math.max(...faqItems.map(item => item.id), 0) + 1
    setFaqItems([...faqItems, {
      id: newId,
      question: "New Question",
      answer: "New Answer"
    }])
  }

  const updateFAQItem = (id, field, value) => {
    setFaqItems(faqItems.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ))
  }

  const deleteFAQItem = (id) => {
    setFaqItems(faqItems.filter(item => item.id !== id))
  }

  // Table variant functions
  const addTableRow = () => {
    const maxRow = editableTableData.length > 0 ? Math.max(...editableTableData.map(item => item.row), 0) : 0
    const newId = editableTableData.length > 0 ? Math.max(...editableTableData.map(item => item.id), 0) + 1 : 1
    setEditableTableData([...editableTableData, {
      id: newId,
      row: maxRow + 1,
      col: 1,
      question: "New Question",
      answer: "New Answer"
    }])
  }

  const addTableColumn = () => {
    const maxCol = editableTableData.length > 0 ? Math.max(...editableTableData.map(item => item.col), 0) : 0
    const maxRow = editableTableData.length > 0 ? Math.max(...editableTableData.map(item => item.row), 0) : 0
    const newItems = []
    
    // Add a new column to each existing row
    for (let row = 1; row <= maxRow; row++) {
      const newId = editableTableData.length > 0 ? Math.max(...editableTableData.map(item => item.id), 0) + row : row
      newItems.push({
        id: newId,
        row: row,
        col: maxCol + 1,
        question: "New Question",
        answer: "New Answer"
      })
    }
    setEditableTableData([...editableTableData, ...newItems])
  }

  const updateTableItem = (id, field, value) => {
    setEditableTableData(editableTableData.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ))
  }

  const deleteTableItem = (id) => {
    setEditableTableData(editableTableData.filter(item => item.id !== id))
  }

  // Toggle section collapse for table-display and button variants
  // Always close other sections when opening a new one (single open mode)
  const toggleSection = (id) => {
    setCollapsedSections(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        // Section is currently closed, so open it
        newSet.delete(id)
        // Always close all other sections (single open mode)
        let allSectionIds = []
        if (variant === "button") {
          const buttonItems = buttons.length > 0 ? buttons : items
          allSectionIds = buttonItems.map((item, idx) => `button-section-${item.id || idx}`)
        } else if (variant === "table-display") {
          const sections = tableSections.length > 0 ? tableSections : items
          allSectionIds = sections.map((section, idx) => `section-${section.id || idx}`)
        }
        // Close all other sections
        allSectionIds.forEach(sectionId => {
          if (sectionId !== id) {
            newSet.add(sectionId)
          }
        })
      } else {
        // Section is currently open, so close it
        newSet.add(id)
      }
      return newSet
    })
  }

  // Get items to render based on variant and ensure they have IDs
  const itemsToRender = (variant === "editable" ? faqItems : items).map((item, index) => ({
    ...item,
    id: item.id !== undefined ? item.id : index + 1
  }))

  // Helper function to convert text with phone numbers, emails, and URLs to clickable links
  const renderTextWithLinks = (text) => {
    if (!text || typeof text !== 'string') return text
    
    // Pattern for phone numbers - more specific to avoid matching years
    // Must have at least 10 digits total and not be a standalone 4-digit year
    // Supports formats like +91-9303097012, +91 9303097012, 9303097012
    const phonePattern = /(\+?\d{1,4}[-.\s]?)?\(?\d{2,4}\)?[-.\s]?\d{3,4}[-.\s]?\d{3,4}[-.\s]?\d{3,4}/g
    // Pattern for email addresses
    const emailPattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g
    // Pattern for URLs (http/https)
    const urlPattern = /(https?:\/\/[^\s]+)/g
    
    let result = text
    const parts = []
    let lastIndex = 0
    
    // Find all matches (phones, emails, URLs)
    const matches = []
    
    // Find phone numbers - exclude if it's a 4-digit year (like 2013, 2015)
    let match
    while ((match = phonePattern.exec(text)) !== null) {
      const phoneText = match[0].replace(/[-.\s()]/g, '')
      // Skip if it's just a 4-digit number (likely a year) or less than 10 digits
      if (phoneText.length >= 10 && phoneText.length !== 4) {
        matches.push({
          type: 'phone',
          text: match[0],
          index: match.index,
          length: match[0].length
        })
      }
    }
    
    // Find email addresses
    emailPattern.lastIndex = 0
    while ((match = emailPattern.exec(text)) !== null) {
      matches.push({
        type: 'email',
        text: match[0],
        index: match.index,
        length: match[0].length
      })
    }
    
    // Find URLs
    urlPattern.lastIndex = 0
    while ((match = urlPattern.exec(text)) !== null) {
      matches.push({
        type: 'url',
        text: match[0],
        index: match.index,
        length: match[0].length
      })
    }
    
    // Sort matches by index
    matches.sort((a, b) => a.index - b.index)
    
    // Remove overlapping matches (prioritize URLs > emails > phones)
    const filteredMatches = []
    for (let i = 0; i < matches.length; i++) {
      const current = matches[i]
      let overlap = false
      for (let j = 0; j < filteredMatches.length; j++) {
        const existing = filteredMatches[j]
        if (
          (current.index >= existing.index && current.index < existing.index + existing.length) ||
          (existing.index >= current.index && existing.index < current.index + current.length)
        ) {
          overlap = true
          // Prioritize: URL > Email > Phone
          if (
            (current.type === 'url' && existing.type !== 'url') ||
            (current.type === 'email' && existing.type === 'phone')
          ) {
            filteredMatches[j] = current
          }
          break
        }
      }
      if (!overlap) {
        filteredMatches.push(current)
      }
    }
    
    // Build the result with links
    filteredMatches.forEach((match) => {
      if (match.index > lastIndex) {
        const textBeforeMatch = text.substring(lastIndex, match.index)
        
        // Check if URL comes after a colon (pattern: "Text: https://...")
        if (match.type === 'url' && textBeforeMatch.trim().endsWith(':')) {
          // Find the start of the label (text before the colon)
          const colonIndex = textBeforeMatch.lastIndexOf(':')
          const labelText = textBeforeMatch.substring(0, colonIndex).trim()
          
          // Add text before the label if any (shouldn't happen in this case, but just in case)
          const beforeLabel = text.substring(lastIndex, lastIndex + colonIndex - labelText.length)
          if (beforeLabel) {
            parts.push(beforeLabel)
          }
          
          // Make the label clickable, hide the URL
          parts.push(
            <a
              key={`${match.type}-${match.index}`}
              href={match.text}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              {labelText}
            </a>
          )
          
          lastIndex = match.index + match.length
        } else {
          // Normal handling - show the match text
          parts.push(textBeforeMatch)
          
          let href, linkText
          if (match.type === 'phone') {
            const phoneNumber = match.text.replace(/[-.\s()]/g, '')
            href = `tel:${phoneNumber}`
            linkText = match.text
          } else if (match.type === 'email') {
            href = `mailto:${match.text}`
            linkText = match.text
          } else if (match.type === 'url') {
            href = match.text
            linkText = match.text
          }
          
          parts.push(
            <a
              key={`${match.type}-${match.index}`}
              href={href}
              target={match.type === 'url' ? '_blank' : undefined}
              rel={match.type === 'url' ? 'noopener noreferrer' : undefined}
              className="text-blue-600 hover:text-blue-800 underline break-all"
            >
              {linkText}
            </a>
          )
          
          lastIndex = match.index + match.length
        }
      } else {
        // Match starts right after previous match
        let href, linkText
        if (match.type === 'phone') {
          const phoneNumber = match.text.replace(/[-.\s()]/g, '')
          href = `tel:${phoneNumber}`
          linkText = match.text
        } else if (match.type === 'email') {
          href = `mailto:${match.text}`
          linkText = match.text
        } else if (match.type === 'url') {
          href = match.text
          linkText = match.text
        }
        
        parts.push(
          <a
            key={`${match.type}-${match.index}`}
            href={href}
            target={match.type === 'url' ? '_blank' : undefined}
            rel={match.type === 'url' ? 'noopener noreferrer' : undefined}
            className="text-blue-600 hover:text-blue-800 underline break-all"
          >
            {linkText}
          </a>
        )
        
        lastIndex = match.index + match.length
      }
    })
    
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex))
    }
    
    return parts.length > 0 ? <>{parts}</> : text
  }

  // Wrapper component that conditionally renders with or without section
  const Wrapper = ({ children, className = "" }) => {
    if (noSection) {
      return <div className={className}>{children}</div>
    }
    return <section className={className}>{children}</section>
  }

  // Render Table Display Variant (like first image)
  if (variant === "table-display") {
    // Separate items into table sections and regular FAQ items
    const tableSectionsList = tableSections.length > 0
      ? tableSections
      : items
          .filter(item => item.answer && typeof item.answer === 'object' && item.answer.type === 'table')
          .map(item => ({
            id: item.id,
            title: item.question,
            data: item.answer.rows,
            columns: item.answer.headers ? [
              { key: "id", label: item.answer.headers[0] || "S.No", width: "w-20" },
              { key: "name", label: item.answer.headers[1] || "Name", width: "flex-1" }
            ] : undefined
          }))
    
    // Regular FAQ items (non-table) - ensure they have IDs
    const regularItems = items
      .filter(item => 
        !(item.answer && typeof item.answer === 'object' && item.answer.type === 'table')
      )
      .map((item, index) => ({
        ...item,
        id: item.id !== undefined ? item.id : index + 1
      }))
    
    // Unified state for both regular items and table sections
    // Use a single state to track which accordion is open
    const [unifiedOpenId, setUnifiedOpenId] = useState(() => {
      // Determine which should be open first: table sections come first, then regular items
      if (tableSectionsList.length > 0) {
        return `table-${tableSectionsList[0].id || 0}`
      } else if (regularItems.length > 0) {
        return `regular-${regularItems[0].id}`
      }
      return null
    })
    
    // Unified toggle function for both types - only one can be open at a time
    const toggleUnified = (id, type) => {
      const fullId = `${type}-${id}`
      setUnifiedOpenId(prev => prev === fullId ? null : fullId)
    }
    
    return (
      <Wrapper className={`${backgroundColor} ${pyClassName}`}>
        <div className="container mx-auto px-2">
          {showHeading && (
            <div className="mb-5">
              <SectionHeading 
                title={title} 
                subtitle={subtitle}
                titleClassName={titleClassName}
                subtitleClassName={`text-center ${subtitleClassName}`}
              />
            </div>
          )}
          
          {/* Combined: Table Sections first, then Regular FAQ Items - Single Accordion System */}
          <div className="w-full max-w-6xl mx-auto space-y-4">
            {/* Table Sections */}
            {tableSectionsList.map((section, index) => {
              const sectionId = section.id || index
              const fullId = `table-${sectionId}`
              const isOpen = unifiedOpenId === fullId
              
              return (
                <div key={section.id || index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                  <button
                    onClick={() => toggleUnified(sectionId, 'table')}
                    className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <h3 className="text-left text-lg font-plus-jakarta-sans font-semibold text-gray-800">
                      {section.title}
                    </h3>
                    <svg
                      className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-4 sm:p-5 md:p-6 bg-[var(--lite-sand)]">
                      <div className="overflow-x-auto">
                        <DataTable
                          columns={section.columns || tableColumns}
                          data={section.data}
                          overflowX={true}
                          className="shadow-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
            
            {/* Regular FAQ Items */}
            {regularItems.map((item) => {
              const fullId = `regular-${item.id}`
              const isOpen = unifiedOpenId === fullId
              
              return (
                <div
                  key={item.id}
                  className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => toggleUnified(item.id, 'regular')}
                    className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <h3 className="text-left text-lg font-plus-jakarta-sans font-semibold text-gray-800">
                      {item.question}
                    </h3>
                    <svg
                      className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-4 sm:p-5 md:p-6 bg-[var(--lite-sand)]">
                      {Array.isArray(item.answer) ? (
                        <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm leading-relaxed font-plus-jakarta-sans">
                          {item.answer.map((listItem, idx) => (
                            <li key={idx}>{renderTextWithLinks(listItem)}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-700 text-sm leading-relaxed font-plus-jakarta-sans">
                          {renderTextWithLinks(item.answer)}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Wrapper>
    )
  }

  // Render Button Variant (like second image)
  if (variant === "button") {
    const buttonItems = buttons.length > 0 ? buttons : items.map((item, index) => ({
      id: item.id || index,
      title: item.question || `Section ${index + 1}`,
      description: item.answer || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      buttons: item.buttons || [
        { label: "Annual Reports", onClick: () => window.location.href = "/annual-reports" },
        { label: "Placement Details", onClick: () => window.location.href = "/placements" }
      ]
    }))
    
    return (
      <Wrapper className={`${backgroundColor} ${pyClassName}`}>
        <div className="container mx-auto px-2">
          {showHeading && (
            <SectionHeading 
              title={title} 
              subtitle={subtitle}
              titleClassName={titleClassName}
              subtitleClassName={`text-center ${subtitleClassName}`}
            />
          )}
          {buttonItems.map((item, index) => {
            const sectionId = `button-section-${item.id || index}`
            const isCollapsed = collapsedSections.has(sectionId)
            
            return (
              <div key={item.id || index} className="mb-6 rounded-lg overflow-hidden shadow-md mt-5">
                {/* Header - Entire header is clickable */}
                <button
                  onClick={() => toggleSection(sectionId)}
                  className={`w-full flex items-center justify-between p-4 rounded-t-lg transition-colors ${
                    isCollapsed
                      ? 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      : 'bg-[var(--button-red)] text-white hover:bg-[var(--button-red)]/90'
                  }`}
                >
                  <h3 className="text-lg font-plus-jakarta-sans font-semibold">
                    {item.title}
                  </h3>
                  <div className={`rounded-lg p-2 transition-transform duration-300 ${
                    isCollapsed ? 'bg-white' : 'bg-white'
                  }`}>
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isCollapsed 
                          ? 'text-[var(--button-red)] rotate-180' 
                          : 'text-[var(--button-red)]'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </div>
                </button>
                
                {/* Content with Buttons */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isCollapsed ? 'max-h-0' : 'max-h-[2000px]'
                  }`}
                >
                  <div className="bg-[var(--lite-sand)] p-6">
                    <p className="text-gray-700 text-sm leading-relaxed font-plus-jakarta-sans mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {item.buttons.map((btn, btnIdx) => (
                        <GlobalArrowButton
                          key={btnIdx}
                          onClick={btn.onClick}
                          variant="default"
                        >
                          {btn.label}
                        </GlobalArrowButton>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Wrapper>
    )
  }

  // Render Table Variant (editable)
  if (variant === "table") {
    const maxRow = editableTableData.length > 0 ? Math.max(...editableTableData.map(item => item.row), 0) : 0
    const maxCol = editableTableData.length > 0 ? Math.max(...editableTableData.map(item => item.col), 0) : 0
    
    return (
      <Wrapper className={`${backgroundColor} ${pyClassName}`}>
        <div className="container mx-auto px-2">
          {showHeading && (
            <SectionHeading 
              title={title} 
              subtitle={subtitle}
              titleClassName={titleClassName}
              subtitleClassName={`text-center ${subtitleClassName}`}
            />
          )}

          <div className={`max-w-6xl mx-auto ${showHeading ? 'mt-5' : ''}`}>
            {/* Action Buttons */}
            <div className="flex gap-3 mb-4 justify-end">
              <button
                onClick={addTableRow}
                className="px-4 py-2 bg-[var(--button-red)] text-white rounded-lg hover:bg-[var(--button-red)]/90 transition-colors font-plus-jakarta-sans flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Row
              </button>
              <button
                onClick={addTableColumn}
                className="px-4 py-2 bg-[var(--button-red)] text-white rounded-lg hover:bg-[var(--button-red)]/90 transition-colors font-plus-jakarta-sans flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Column
              </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto border border-gray-200 rounded-lg">
              {maxRow === 0 && maxCol === 0 ? (
                <div className="p-8 text-center text-gray-500 font-plus-jakarta-sans">
                  Table is empty. Click "Add Row" or "Add Column" to get started.
                </div>
              ) : (
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      {Array.from({ length: Math.max(maxCol, 1) }, (_, colIndex) => (
                        <th key={colIndex} className="border border-gray-300 p-4 text-left font-plus-jakarta-sans font-semibold">
                          Column {colIndex + 1}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: Math.max(maxRow, 1) }, (_, rowIndex) => (
                      <tr key={rowIndex}>
                        {Array.from({ length: Math.max(maxCol, 1) }, (_, colIndex) => {
                        const cellData = editableTableData.find(
                          item => item.row === rowIndex + 1 && item.col === colIndex + 1
                        )
                        return (
                          <td key={colIndex} className="border border-gray-300 p-4 align-top">
                            {cellData ? (
                              <div className="space-y-2">
                                <input
                                  type="text"
                                  value={cellData.question}
                                  onChange={(e) => updateTableItem(cellData.id, 'question', e.target.value)}
                                  className="w-full p-2 border border-gray-300 rounded font-plus-jakarta-sans font-semibold text-lg"
                                  placeholder="Question"
                                />
                                <textarea
                                  value={cellData.answer}
                                  onChange={(e) => updateTableItem(cellData.id, 'answer', e.target.value)}
                                  className="w-full p-2 border border-gray-300 rounded font-plus-jakarta-sans text-sm min-h-[80px]"
                                  placeholder="Answer"
                                />
                                <button
                                  onClick={() => deleteTableItem(cellData.id)}
                                  className="text-red-600 hover:text-red-800 text-sm font-plus-jakarta-sans"
                                >
                                  Delete
                                </button>
                              </div>
                            ) : (
                              <div className="text-gray-400 text-sm">Empty</div>
                            )}
                          </td>
                        )
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
              )}
            </div>
          </div>
        </div>
      </Wrapper>
    )
  }

  // Render Default or Editable Variant
  return (
    <Wrapper className={`${backgroundColor} ${pyClassName}`}>
      <div className="container mx-auto px-2">
        {showHeading && (
          <SectionHeading 
            title={title} 
            subtitle={subtitle}
            titleClassName={titleClassName}
            subtitleClassName={`text-center ${subtitleClassName}`}
          />
        )}

        {/* Add Button for Editable Variant */}
        {variant === "editable" && (
          <div className="max-w-4xl mx-auto mt-5 mb-4">
            <button
              onClick={addFAQItem}
              className="px-4 py-2 bg-[var(--button-red)] text-white rounded-lg hover:bg-[var(--button-red)]/90 transition-colors font-plus-jakarta-sans flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add FAQ Item
            </button>
          </div>
        )}

        {/* FAQ Items */}
        <div className="space-y-4 mt-10">
          {itemsToRender.map((item) => {
            const isOpen = openItems.has(item.id)
            return (
              <div
                key={item.id}
                className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
              >
                {/* Question Header */}
                {variant === "editable" ? (
                  <div className="w-full flex items-center justify-between p-4 bg-gray-100">
                    <input
                      type="text"
                      value={item.question}
                      onChange={(e) => updateFAQItem(item.id, 'question', e.target.value)}
                      className="flex-1 text-left text-xl pr-4 font-plus-jakarta-sans bg-transparent border-none outline-none"
                      placeholder="Enter question"
                    />
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleItem(item.id)}
                        className="flex-shrink-0"
                      >
                        <div className={`rounded-lg p-1.5 sm:p-2 transition-all duration-300 ${
                          isOpen 
                            ? 'bg-white' 
                            : 'bg-[var(--button-red)]'
                        }`}>
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d={isOpen ? "M12 4L6 12M12 4L18 12M12 4L12 20" : "M6 10L12 16L18 10"}
                              fill="none"
                              stroke={isOpen ? "var(--button-red)" : "white"}
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </button>
                      <button
                        onClick={() => deleteFAQItem(item.id)}
                        className="text-red-600 hover:text-red-800 p-2"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => toggleItem(item.id)}
                    className={`w-full flex items-center justify-between p-4 transition-colors ${
                      isOpen 
                        ? 'bg-[var(--button-red)] text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                    aria-expanded={isOpen}
                  >
                    <h3 className="text-left text-[14px] leading-[20px] md:leading-[24px] md:text-xl pr-4 font-plus-jakarta-sans">
                      {item.question}
                    </h3>
                    <div className="flex-shrink-0">
                      <div className={`rounded-lg p-1.5 sm:p-2 transition-all duration-300 ${
                        isOpen 
                          ? 'bg-white' 
                          : 'bg-[var(--button-red)]'
                      }`}>
                        <svg
                          className="w-4 h-4 sm:w-6 sm:h-6"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d={isOpen ? "M12 4L6 12M12 4L18 12M12 4L12 20" : "M6 10L12 16L18 10"}
                            fill="none"
                            stroke={isOpen ? "var(--button-red)" : "white"}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </button>
                )}

                {/* Answer Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-4 sm:p-5 md:p-6 bg-[var(--lite-sand)]">
                    {variant === "editable" ? (
                      <textarea
                        value={item.answer}
                        onChange={(e) => updateFAQItem(item.id, 'answer', e.target.value)}
                        className="w-full text-gray-700 text-sm leading-relaxed font-plus-jakarta-sans bg-transparent border border-gray-300 rounded p-2 min-h-[100px]"
                        placeholder="Enter answer"
                      />
                    ) : item.answer && typeof item.answer === 'object' && item.answer.type === 'table' ? (
                      <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
                        <DataTable
                          columns={
                            item.answer.headers && item.answer.headers.length === 3
                              ? [
                                  { key: "id", label: item.answer.headers[0] || "S.No", widthPx: 80 },
                                  { key: "program", label: item.answer.headers[1] || "Program Name", widthPx: 300 },
                                  { key: "description", label: item.answer.headers[2] || "CSR Initiatives", widthPx: 500 }
                                ]
                              : item.answer.headers
                                ? [
                                    { key: "id", label: item.answer.headers[0] || "S.No", widthPx: 80 },
                                    { key: "name", label: item.answer.headers[1] || "Name", widthPx: 400 }
                                  ]
                                : tableColumns
                          }
                          data={item.answer.rows}
                          overflowX={true}
                          className="shadow-none"
                        />
                      </div>
                    ) : Array.isArray(item.answer) ? (
                      <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm leading-relaxed font-plus-jakarta-sans">
                        {item.answer.map((listItem, idx) => (
                          <li key={idx}>{renderTextWithLinks(listItem)}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-700 text-sm leading-relaxed font-plus-jakarta-sans">
                        {renderTextWithLinks(item.answer)}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

export default FAQ

