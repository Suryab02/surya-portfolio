import { useEffect } from "react";

export const SITE_URL = "https://surya-portfolio-mu.vercel.app";
const DEFAULT_IMAGE = `${SITE_URL}/og.png`;

function setMeta(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
}

export default function PageMeta({
  title,
  description,
  path = "/",
  type = "website",
  image = DEFAULT_IMAGE,
  noindex = false,
  structuredData,
}) {
  useEffect(() => {
    const url = new URL(path, SITE_URL).toString();
    document.title = title;

    setMeta('meta[name="description"]', { name: "description", content: description });
    setMeta('meta[name="robots"]', { name: "robots", content: noindex ? "noindex, nofollow" : "index, follow" });
    setMeta('meta[property="og:type"]', { property: "og:type", content: type });
    setMeta('meta[property="og:title"]', { property: "og:title", content: title });
    setMeta('meta[property="og:description"]', { property: "og:description", content: description });
    setMeta('meta[property="og:url"]', { property: "og:url", content: url });
    setMeta('meta[property="og:image"]', { property: "og:image", content: image });
    setMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
    setMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description });
    setMeta('meta[name="twitter:image"]', { name: "twitter:image", content: image });

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    let schema = document.head.querySelector('script[data-page-schema="true"]');
    if (structuredData) {
      if (!schema) {
        schema = document.createElement("script");
        schema.type = "application/ld+json";
        schema.dataset.pageSchema = "true";
        document.head.appendChild(schema);
      }
      schema.textContent = JSON.stringify(structuredData);
    } else {
      schema?.remove();
    }
  }, [description, image, noindex, path, structuredData, title, type]);

  return null;
}
