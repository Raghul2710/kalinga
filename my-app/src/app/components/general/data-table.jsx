"use client"
import React from 'react'

/**
 * DataTable Component
 * A reusable table component with customizable columns, rows, widths, and optional horizontal scroll
 * 
 * @param {Array} columns - Array of column definitions: 
 *   [{ key: string, label: string, width?: string (Tailwind class), widthPx?: number (pixel width) }]
 * @param {Array} data - Array of row data objects matching the column keys
 * @param {boolean} overflowX - Enable horizontal scroll when content overflows (default: false)
 * @param {string} className - Additional CSS classes for the table container
 * @param {string} headerBgColor - Background color for header row (default: "bg-[#1e3a8a]")
 * @param {string} headerTextColor - Text color for header row (default: "text-white")
 * @param {string} evenRowBg - Background color for even rows (default: "bg-gray-50")
 * @param {string} oddRowBg - Background color for odd rows (default: "bg-white")
 * @param {string} borderColor - Border color class (default: "border-gray-300")
 * 
 * @example
 * <DataTable
 *   columns={[
 *     { key: "slNo", label: "Sl. No", width: "w-20" },
 *     { key: "name", label: "Name", widthPx: 200 },
 *     { key: "designation", label: "Designation", width: "flex-1" }
 *   ]}
 *   data={[
 *     { slNo: 1, name: "John", designation: "Professor" },
 *     { slNo: 2, name: "Jane", designation: "Assistant" }
 *   ]}
 *   overflowX={true}
 * />
 */
const DataTable = ({
  columns = [],
  data = [],
  overflowX = false,
  className = "",
  headerBgColor = "bg-[var(--dark-blue)]",
  headerTextColor = "text-white",
  evenRowBg = "bg-gray-50",
  oddRowBg = "bg-white",
  borderColor = "border-gray-300",
  title = "",
  disableContainer = false,
  maxHeight = ""
}) => {
  // If no columns provided, create default structure
  const tableColumns = columns.length > 0
    ? columns
    : [
      { key: "slNo", label: "Sl. No", width: "w-20" },
      { key: "name", label: "Name of member", width: "w-48" },
      { key: "designation", label: "Designation", width: "flex-1" },
      { key: "category", label: "Category", width: "w-40" }
    ]

  // If no data provided, use empty array
  const tableData = data || []

  return (
    <div className={`${disableContainer ? "w-full" : "container mx-auto"} rounded-lg ${className}`}>
      {title && (
        <h3 className="text-2xl pt-6 mb-4">{title}</h3>
      )}
      <div className={`${overflowX ? "overflow-x-auto" : "overflow-hidden"} ${maxHeight ? `${maxHeight} overflow-y-auto` : ""} rounded-lg`}>
        <table className={`${overflowX ? "min-w-full w-max" : "w-full"}`} style={{ borderSpacing: 0, borderCollapse: 'separate' }}>
          <thead>
            <tr className={headerBgColor}>
              {tableColumns.map((column, idx) => (
                <th
                  key={column.key || idx}
                  className={`
                    ${borderColor} border-b border-r border-t p-3 text-left font-plus-jakarta-sans font-semibold text-sm
                    ${headerTextColor}
                    ${column.widthPx ? "" : (column.width || "")}
                    ${idx === 0 ? "border-l rounded-tl-lg" : ""}
                    ${idx === tableColumns.length - 1 ? "rounded-tr-lg" : ""}
                  `}
                  style={column.widthPx ? { width: `${column.widthPx}px` } : {}}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.length === 0 ? (
              <tr>
                <td
                  colSpan={tableColumns.length}
                  className={`${borderColor} border-b border-r border-l p-8 text-center text-gray-500 font-plus-jakarta-sans rounded-b-lg`}
                >
                  No data available
                </td>
              </tr>
            ) : (
              tableData.map((row, rowIdx) => (
                <tr
                  key={rowIdx}
                  className={rowIdx % 2 === 0 ? oddRowBg : evenRowBg}
                >
                  {tableColumns.map((column, colIdx) => {
                    const cellValue = row[column.key] !== undefined
                      ? row[column.key]
                      : (column.key === "slNo" ? rowIdx + 1 : "-")

                    // Check if this row has listItems and we're rendering the description column
                    const hasListItems = row.listItems && Array.isArray(row.listItems) && column.key === 'description'

                    // Check if this is the last row
                    const isLastRow = rowIdx === tableData.length - 1

                    // Check if this cell should be merged (colSpan support)
                    const cellColSpan = row.colSpan && row.colSpan[column.key] !== undefined ? row.colSpan[column.key] : 1
                    const shouldSkipColCell = cellColSpan === 0

                    // Check if this cell should be merged (rowSpan support)
                    const cellRowSpan = row.rowSpan && row.rowSpan[column.key] !== undefined ? row.rowSpan[column.key] : 1
                    const shouldSkipRowCell = cellRowSpan === 0

                    // Skip rendering if this cell is merged into previous cell (row or col)
                    if (shouldSkipColCell || shouldSkipRowCell) {
                      return null
                    }

                    // Calculate actual column index after accounting for skipped cells
                    let actualColIdx = colIdx
                    if (row.colSpan) {
                      let skippedCount = 0
                      for (let i = 0; i < colIdx; i++) {
                        if (row.colSpan[tableColumns[i].key] === 0) {
                          skippedCount++
                        }
                      }
                      actualColIdx = colIdx - skippedCount
                    }

                    return (
                      <td
                        key={column.key || colIdx}
                        colSpan={cellColSpan > 1 ? cellColSpan : undefined}
                        rowSpan={cellRowSpan > 1 ? cellRowSpan : undefined}
                        className={`
                          ${borderColor} border-b border-r p-3 text-gray-700 font-plus-jakarta-sans text-sm
                          ${column.widthPx ? "" : (column.width || "")}
                          ${actualColIdx === 0 ? "border-l" : ""}
                          ${isLastRow && actualColIdx === 0 ? "rounded-bl-lg" : ""}
                          ${isLastRow && actualColIdx === (tableColumns.length - 1 - (row.colSpan ? Object.values(row.colSpan).filter(v => v === 0).length : 0)) ? "rounded-br-lg" : ""}
                          ${cellRowSpan > 1 ? "align-middle text-center" : ""}
                        `}
                        style={column.widthPx ? { width: `${column.widthPx}px` } : {}}
                      >
                        {hasListItems ? (
                          <div>
                            <p className="mb-2">{cellValue}</p>
                            <ul className="list-disc list-inside space-y-1 ml-2">
                              {row.listItems.map((item, idx) => (
                                <li key={idx} className="text-sm">{item}</li>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          cellValue || ""
                        )}
                      </td>
                    )
                  }).filter(Boolean)}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DataTable
