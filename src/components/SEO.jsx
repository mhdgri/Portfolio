// src/components/SEO.jsx
import { useEffect } from "react";

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

export default function SEO({ title, description, canonical }) {
  useEffect(() => {
    const siteName = "Portfolio – Mohamed Guerroui";
    const fullTitle = title ? `${title} | ${siteName}` : siteName;

    // Title
    const prevTitle = document.title;
    document.title = fullTitle;

    // Description
    if (description) {
      upsertMeta("name", "description", description);
      upsertMeta("property", "og:description", description);
      upsertMeta("name", "twitter:description", description);
    }

    // Canonical
    const base = "https://ton-portfolio.vercel.app";
    const url = canonical ? `${base}${canonical}` : base;
    upsertLink("canonical", url);

    // OpenGraph / Twitter
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", "/og-cover.png");

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta("name", "twitter:image", "/og-cover.png");

    // Cleanup title on unmount (facultatif)
    return () => {
      document.title = prevTitle || siteName;
    };
  }, [title, description, canonical]);

  return null; // rien à rendre, on agit sur le <head>
}
