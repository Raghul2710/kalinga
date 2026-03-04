/**
 * Centralized utility to handle PDF URL transformation for proxying.
 * This helps bypass CORS issues when fetching PDFs from the university CDN.
 */

const CDN_HOSTNAME = 'cdn.kalingauniversity.ac.in';
const PROXY_PATH = '/pdf-proxy';

/**
 * Transforms a CDN URL into a proxied URL.
 * @param {string} url - The original URL
 * @returns {string} - The proxied URL if it matches the CDN, otherwise the original
 */
export const getProxiedPdfUrl = (url) => {
    if (!url || typeof url !== 'string') return url;

    // Check if the URL points to the university CDN
    if (url.includes(CDN_HOSTNAME)) {
        // Handle both http and https, and replace with relative proxy path
        // This regex captures the protocol and hostname to replace it
        return url.replace(/^https?:\/\/cdn\.kalingauniversity\.ac\.in/, PROXY_PATH);
    }

    return url;
};
