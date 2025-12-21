// API utility functions
import { getApiUrl, API_CONFIG } from '../config/api';

/**
 * Fetches complete course details from the API
 * @param {number} courseId - The course ID
 * @returns {Promise<Object>} Course data
 */
export async function fetchCourseCompleteDetail(courseId) {
  try {
    const url = getApiUrl(API_CONFIG.courses.completeDetail(courseId));
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Cache control for client-side fetching
      cache: 'no-store', // Always fetch fresh data, or use 'default' for browser caching
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching course details:', error);
    throw error;
  }
}

/**
 * Fetches complete department details from the API
 * @param {number} departmentId - The department ID
 * @returns {Promise<Object>} Department data
 */
export async function fetchDepartmentCompleteDetail(departmentId) {
  try {
    const url = getApiUrl(API_CONFIG.departments.completeDetail(departmentId));
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Cache control for client-side fetching
      cache: 'no-store', // Always fetch fresh data, or use 'default' for browser caching
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching department details:', error);
    throw error;
  }
}

/**
 * Fetches courses for a department from the API
 * @param {string|number} slugOrId - The department slug or ID
 * @returns {Promise<Array>} Array of course objects
 */
export async function fetchDepartmentCourses(slugOrId) {
  try {
    const url = getApiUrl(API_CONFIG.departments.courses(slugOrId));
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching department courses:', error);
    throw error;
  }
}

/**
 * Helper function to parse HTML content to plain text paragraphs
 * @param {string} htmlContent - HTML string from API
 * @returns {string[]} Array of paragraph strings
 */
export function parseHtmlToParagraphs(htmlContent) {
  if (!htmlContent) return [];
  
  // Remove HTML tags and split by paragraph breaks
  const text = htmlContent
    .replace(/<p>/g, '')
    .replace(/<\/p>/g, '\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .trim();
  
  // Split by newlines and filter out empty strings
  return text
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0);
}

/**
 * Helper function to convert HTML content to plain text (single string)
 * @param {string} htmlContent - HTML string from API
 * @returns {string} Plain text string
 */
export function parseHtmlToText(htmlContent) {
  if (!htmlContent) return '';
  
  // Remove HTML tags and decode entities
  const text = htmlContent
    .replace(/<[^>]*>/g, '') // Remove all HTML tags
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    .trim();
  
  return text;
}

/**
 * Helper function to parse HTML list items into an array of HTML strings
 * Extracts content from <li> tags, preserving HTML inside
 * @param {string} htmlContent - HTML string containing <ul> or <ol> with <li> items
 * @returns {string[]} Array of HTML strings (one per list item)
 */
export function parseHtmlListItems(htmlContent) {
  if (!htmlContent) return [];
  
  // Match all <li>...</li> tags and extract their inner content
  const liMatches = htmlContent.match(/<li[^>]*>([\s\S]*?)<\/li>/gi);
  
  if (!liMatches) return [];
  
  return liMatches.map(li => {
    // Extract the inner content of the <li> tag
    const innerMatch = li.match(/<li[^>]*>([\s\S]*?)<\/li>/i);
    if (innerMatch && innerMatch[1]) {
      // Clean up whitespace but preserve HTML structure
      return innerMatch[1].trim();
    }
    return '';
  }).filter(item => item.length > 0);
}
