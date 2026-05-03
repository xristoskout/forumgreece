const ALLOWED_MAP_DOMAINS = [
  "www.google.com",
  "maps.google.com",
  "mapsengine.google.com",
];

export function sanitizeIframeHTML(html: string): string | null {
  const iframeMatch = html.match(/<iframe[^>]*src=["']([^"']*)["'][^>]*>/i);

  if (!iframeMatch) return null;

  const src = iframeMatch[1];

  try {
    const url = new URL(src);

    if (!ALLOWED_MAP_DOMAINS.includes(url.hostname)) {
      console.warn(`Blocked iframe from untrusted domain: ${url.hostname}`);
      return null;
    }

    if (url.protocol !== "https:") {
      console.warn(`Blocked non-HTTPS iframe: ${url.protocol}`);
      return null;
    }
  } catch {
    console.warn(`Invalid iframe URL: ${src}`);
    return null;
  }

  return html.replace(/on\w+\s*=/gi, "data-blocked=");
}
