/**
 * Proxies PDF requests from allowed CDN origins to avoid CORS when loading in
 * react-pdf / flipbook on localhost or kalingauniversity.ac.in.
 * Only allows cdn.kalingauniversity.ac.in.
 */
const ALLOWED_ORIGINS = [
  "https://cdn.kalingauniversity.ac.in",
];

function isAllowedUrl(url) {
  try {
    const parsed = new URL(url);
    return ALLOWED_ORIGINS.some((origin) => parsed.origin === origin);
  } catch {
    return false;
  }
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (!url) {
    return new Response("Missing url query", { status: 400 });
  }

  if (!isAllowedUrl(url)) {
    return new Response("URL not allowed", { status: 403 });
  }

  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": request.headers.get("user-agent") || "Kalinga-Proxy/1.0",
      },
    });

    if (!res.ok) {
      return new Response(`Upstream error: ${res.status}`, { status: res.status });
    }

    const contentType = res.headers.get("content-type") || "application/pdf";
    const contentLength = res.headers.get("content-length");
    const forceDownload = searchParams.get("download") === "1" || searchParams.get("download") === "true";
    const filename = searchParams.get("filename");

    const headers = new Headers();
    headers.set("Content-Type", contentType);
    if (contentLength) headers.set("Content-Length", contentLength);
    headers.set("Cache-Control", "public, max-age=3600");
    // Allow localhost and production so preview/flipbook work everywhere
    headers.set("Access-Control-Allow-Origin", "*");
    if (forceDownload) {
      const downloadFilename = (filename || "document.pdf").replace(/"/g, "");
      headers.set("Content-Disposition", `attachment; filename="${downloadFilename}"`);
    }

    return new Response(res.body, {
      status: 200,
      headers,
    });
  } catch (err) {
    console.error("[proxy-pdf]", err);
    return new Response("Failed to fetch PDF", { status: 502 });
  }
}
