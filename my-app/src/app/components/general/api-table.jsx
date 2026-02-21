"use client";

import React, { useState, useEffect } from 'react';
import DataTable from './data-table';
import { fetchTableData } from '@/app/lib/api';

/**
 * APITable Component
 * Fetches and displays table data from the Kalinga University API
 * 
 * @param {string} tableId - The table ID or slug to fetch (required)
 * @param {string} title - Optional section title (overrides API title)
 * @param {boolean} showTableTitle - Show table title from API (default: false)
 * @param {string} className - Additional CSS classes for the container
 * @param {boolean} overflowX - Enable horizontal scroll (default: true)
 * @param {string} headerBgColor - Header background color (default: "bg-[var(--dark-blue)]")
 * @param {string} headerTextColor - Header text color (default: "text-white")
 * @param {string} evenRowBg - Even row background (default: "bg-gray-50")
 * @param {string} oddRowBg - Odd row background (default: "bg-white")
 * @param {string} borderColor - Border color (default: "border-gray-300")
 * @param {string} fallback - 'hide' or 'show' - Hide section if no data (default: 'show')
 * 
 * @example
 * <APITable tableId="mou" />
 * <APITable tableId="7" title="MOU List" overflowX={true} />
 */
const APITable = (props) => {
    const {
        tableId,
        title = '',
        showTableTitle = false,
        className = '',
        overflowX = true,
        headerBgColor = 'bg-[var(--dark-blue)]',
        headerTextColor = 'text-white',
        evenRowBg = 'bg-gray-50',
        oddRowBg = 'bg-white',
        borderColor = 'border-gray-300',
        fallback = 'show',
    } = props;

    // New prop
    const nested = props.nested || false;
    const maxHeight = props.maxHeight || "";
    const excludeColumns = props.excludeColumns || [];

    const [tableData, setTableData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadTableData = async () => {
            if (!tableId) {
                setError('Table ID is required');
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                setError(null);

                const data = await fetchTableData(tableId);

                if (!data) {
                    setError('Table not found');
                    setLoading(false);
                    return;
                }

                setTableData(data);
            } catch (err) {
                console.error('Error loading table data:', err);
                setError(err.message || 'Failed to load table data');
            } finally {
                setLoading(false);
            }
        };

        loadTableData();
    }, [tableId]);

    // Container wrapper helper
    const Wrapper = ({ children }) => {
        if (nested) return <>{children}</>;
        return (
            <section className={`py-8 ${className}`}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {children}
                </div>
            </section>
        );
    };

    // Hide section if fallback is 'hide' and there's an error or no data
    if (fallback === 'hide' && (error || !tableData)) {
        return null;
    }

    // Loading state
    if (loading) {
        return (
            <Wrapper>
                <div className="text-center text-gray-500">Loading table data...</div>
            </Wrapper>
        );
    }

    // Error state
    if (error) {
        return (
            <Wrapper>
                <div className="text-center text-red-500">Error: {error}</div>
            </Wrapper>
        );
    }

    // No data state
    if (!tableData || !tableData.headers || !tableData.rows) {
        return (
            <Wrapper>
                <div className="text-center text-gray-500">No table data available</div>
            </Wrapper>
        );
    }

    // Transform API data to DataTable format
    const columns = tableData.headers.map((header, index) => ({
        key: `col_${index}`,
        label: header,
        widthPx: tableData.column_widths && tableData.column_widths[index]
            ? tableData.column_widths[index]
            : undefined,
    })).filter(col => !excludeColumns.includes(col.label));

    const data = tableData.rows
        .filter(row => row.some(cell => cell !== null && cell !== undefined && String(cell).trim() !== ""))
        .map((row) => {
            const rowObj = {};
            row.forEach((cell, index) => {
                let value = cell;

                // Format numeric values like "1.0" or 1.0 to "1"
                if (cell !== null && cell !== undefined) {
                    const num = parseFloat(cell);
                    if (!isNaN(num) && Number.isInteger(num)) {
                        const cellStr = String(cell).trim();
                        // Only convert if it matches the pattern of a number (possibly with .0)
                        if (/^\d+(\.0+)?$/.test(cellStr)) {
                            value = num.toString();
                        }
                    }
                }

                rowObj[`col_${index}`] = value;
            });
            return rowObj;
        });

    // Determine the display title
    const displayTitle = title || (showTableTitle && tableData.title ? tableData.title : '');

    return (
        <Wrapper>
            <DataTable
                columns={columns}
                data={data}
                title={displayTitle}
                overflowX={overflowX}
                headerBgColor={headerBgColor}
                headerTextColor={headerTextColor}
                evenRowBg={evenRowBg}
                oddRowBg={oddRowBg}
                borderColor={props.borderColor || borderColor}
                disableContainer={nested}
                className={nested ? className : ''}
                maxHeight={maxHeight}
            />
        </Wrapper>
    );
};

export default APITable;
