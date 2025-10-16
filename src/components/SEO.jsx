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

    // Domaine courant 
    const origin = window.location.origin;
    const base = origin.endsWith("/") ? origin : `${origin}/`;

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
    const cleanCanonical = canonical ? canonical.replace(/^\/+/, "") : "";
    const url = `${base}${cleanCanonical}`;
    upsertLink("canonical", url);

    // OpenGraph / Twitter
    const ogImage = `${base}og-cover.png`;
    upsertMeta("property", "og:site_name", siteName);
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", ogImage);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta("name", "twitter:image", ogImage);

    return () => {
      document.title = prevTitle || siteName;
    };
  }, [title, description, canonical]);

  return null;
}
