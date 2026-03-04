/**
 * Returns a same-origin proxy URL for CDN PDFs so react-pdf/flipbook work
 * without CORS on localhost and kalingauniversity.ac.in.
 * Only proxies URLs from allowed CDN; others are returned as-is.
 */
const CDN_ORIGIN = "https://cdn.kalingauniversity.ac.in";

export function getProxyPdfUrl(url) {
  if (!url || typeof url !== "string") return url;
  if (!url.startsWith(CDN_ORIGIN + "/")) return url;
  return "/api/proxy-pdf?url=" + encodeURIComponent(url);
}
