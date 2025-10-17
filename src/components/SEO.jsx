import { useEffect } from "react";

/* Ajoute ou met à jour une balise <meta> */
function upsertMeta(attrName, attrValue, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/* Ajoute ou met à jour une balise <link> */
function upsertLink(rel, href) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

// Base URL du site
const siteUrl = import.meta.env.VITE_SITE_URL ?? window.location.origin;

/* Transforme un chemin relatif en URL absolue basée sur siteUrl */
function toAbsolute(urlOrPath) {
  if (!urlOrPath) return undefined;
  if (/^https?:\/\//i.test(urlOrPath)) return urlOrPath;
  return `${siteUrl}${urlOrPath.startsWith("/") ? urlOrPath : `/${urlOrPath}`}`;
}

/**
 * SEO component (Open Graph uniquement)
 * @param {object} props
 * @param {string} [props.title]
 * @param {string} [props.description]
 * @param {string} [props.canonical]
 * @param {string} [props.image]
 */
export default function SEO({
  title,
  description = "Portfolio de Mohamed Guerroui, développeur Front-End (React, Redux, Tailwind). Projets concrets, accessibilité et performance.",
  canonical,
  image = "/og-cover.png",
}) {
  useEffect(() => {
    const siteName = "Portfolio – Mohamed Guerroui";
    const fullTitle = title ? `${title} | ${siteName}` : siteName;

    // Title & description
    document.title = fullTitle;
    upsertMeta("name", "description", description);

    // Canonical absolu
    const canonicalAbs = toAbsolute(canonical) || siteUrl;
    upsertLink("canonical", canonicalAbs);

    // Open Graph
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", "Mohamed Guerroui");
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonicalAbs);
    upsertMeta("property", "og:image", toAbsolute(image));
  }, [title, description, canonical, image]);

  return null;
}
