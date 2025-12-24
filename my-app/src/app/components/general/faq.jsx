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
  allowMultipleOpen = false,
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
  // For button variant
  buttons = []
}) => {
  const [openItems, setOpenItems] = useState(new Set())
  const [faqItems, setFaqItems] = useState(items)
  // Initialize with all sections collapsed except the first one for button variant
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
    console.log('FAQ toggle clicked for id:', id)
    setOpenItems(prev => {
      console.log('Previous openItems:', Array.from(prev))
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
        console.log('Closing item:', id)
      } else {
        if (!allowMultipleOpen) {
          newSet.clear()
        }
        newSet.add(id)
        console.log('Opening item:', id)
      }
      console.log('New openItems:', Array.from(newSet))
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
  const toggleSection = (id) => {
    setCollapsedSections(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
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
    
    return (
      <Wrapper className={`${backgroundColor} py-16`}>
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
          
          {/* Regular FAQ Items (lists, etc.) */}
          {regularItems.length > 0 && (
            <div className="w-full max-w-6xl mx-auto space-y-4 mb-8">
              {regularItems.map((item) => {
                const isOpen = openItems.has(item.id)
                return (
                  <div
                    key={item.id}
                    className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
                  >
                    <button
                      onClick={() => toggleItem(item.id)}
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
                              <li key={idx}>{listItem}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-gray-700 text-sm leading-relaxed font-plus-jakarta-sans">
                            {item.answer}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
          
          {/* Table Sections */}
          {tableSectionsList.map((section, index) => {
            const sectionId = `section-${section.id || index}`
            const isCollapsed = collapsedSections.has(sectionId)
            
            return (
              <div key={section.id || index} className="w-full max-w-6xl mx-auto mb-6 rounded-lg overflow-hidden shadow-md">
                <button
                  onClick={() => toggleSection(sectionId)}
                  className={`w-full flex items-center justify-between p-4 rounded-t-lg transition-colors ${
                    isCollapsed
                      ? 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      : 'bg-[var(--button-red)] text-white hover:bg-[var(--button-red)]/90'
                  }`}
                >
                  <h3 className="text-lg font-plus-jakarta-sans font-semibold">
                    {section.title}
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
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isCollapsed ? 'max-h-0' : 'max-h-[600px]'
                  }`}
                >
                  <div className="bg-[var(--lite-sand)] p-4 max-h-[600px] overflow-y-auto overflow-x-auto">
                    <DataTable
                      columns={section.columns || tableColumns}
                      data={section.data}
                      overflowX={true}
                      className="shadow-none"
                    />
                  </div>
                </div>
              </div>
            )
          })}
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
      <Wrapper className={`${backgroundColor} py-16`}>
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
      <Wrapper className={`${backgroundColor} py-16`}>
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
    <Wrapper className={`${backgroundColor} py-16`}>
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
                          <li key={idx}>{listItem}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-700 text-sm leading-relaxed font-plus-jakarta-sans">
                        {item.answer}
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

