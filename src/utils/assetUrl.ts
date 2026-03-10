/**
 * Returns the base URL for static assets (public folder).
 * On GitHub Pages (e.g. /developer-portfolio/) we need this prefix; locally we use "/".
 */
export function getAssetBase(): string {
  if (typeof window === "undefined") return import.meta.env.BASE_URL || "/";
  const path = window.location.pathname;
  if (path === "/" || path === "" || path === "/index.html") return "/";
  const match = path.match(/^\/([^/]+)/);
  return match ? `/${match[1]}/` : "/";
}

/** Build full URL for a public asset path (e.g. "images/figma.png"). */
export function getAssetUrl(relativePath: string): string {
  const base = getAssetBase();
  const path = relativePath.startsWith("/") ? relativePath.slice(1) : relativePath;
  return base === "/" ? `/${path}` : `${base}${path}`;
}
