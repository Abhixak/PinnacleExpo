import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_NAME = "Pinnacle Expo";
const SITE_URL = "https://www.pinnacleexpo.com";
const DEFAULT_IMAGE =
  "https://res.cloudinary.com/dljubulyn/image/upload/v1779085728/pinnacleexpo/logo.png";

const routeMeta = {
  "/": {
    title: "Export Rice & Lubricants",
    description:
      "Export rice supplier in India offering Thai jasmine rice, Indian rice varieties, and Saudi-sourced engine lubricants for distributors and bulk buyers.",
    keywords:
      "export rice supplier India, Thai jasmine rice exporter, Indian rice wholesaler, engine lubricants supplier, Saudi lubricants, bulk export",
  },
  "/about": {
    title: "About Us",
    description:
      "Learn about Pinnacle Expo, a trusted export partner for rice and engine lubricants with a focus on quality sourcing, transparent communication, and reliable supply.",
    keywords:
      "about Pinnacle Expo, export company India, rice exporter, lubricant supplier",
  },
  "/contact": {
    title: "Contact Us",
    description:
      "Contact Pinnacle Expo for export enquiries, bulk rice supply, Thai jasmine rice, Indian rice, and engine lubricant distribution.",
    keywords:
      "contact export company, rice export enquiry, lubricant distribution contact, Pinnacle Expo contact",
  },
  "/products": {
    title: "Products",
    description:
      "Browse Indian rice, Thai jasmine rice, and engine lubricants from Pinnacle Expo for export, wholesale, and bulk supply requirements.",
    keywords:
      "export products, Thai jasmine rice, Indian rice varieties, engine lubricants, wholesale rice supplier",
  },
};

const upsertMeta = ({ name, property, content }) => {
  const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
  let tag = document.head.querySelector(selector);

  if (!tag) {
    tag = document.createElement("meta");
    if (name) tag.setAttribute("name", name);
    if (property) tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
};

const Seo = () => {
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const item = searchParams.get("item");
    const route = routeMeta[location.pathname] ?? routeMeta["/"];

    let pageTitle = `${route.title} | ${SITE_NAME}`;
    let description = route.description;
    let keywords = route.keywords;
    let canonicalPath = location.pathname;

    if (location.pathname === "/products" && item) {
      const productName = item
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      pageTitle = `${productName} | ${SITE_NAME}`;
      description = `Browse ${productName.toLowerCase()} at ${SITE_NAME}. Trusted export sourcing for Indian buyers, traders, and bulk orders.`;
      keywords = `${productName.toLowerCase()}, export products, rice supplier India, engine lubricants`;
      canonicalPath = `${location.pathname}?item=${item}`;
    }

    document.title = pageTitle;

    upsertMeta({ name: "description", content: description });
    upsertMeta({ name: "keywords", content: keywords });
    upsertMeta({ name: "robots", content: "index,follow,max-image-preview:large" });
    upsertMeta({ name: "theme-color", content: "#10233b" });
    upsertMeta({ property: "og:site_name", content: SITE_NAME });
    upsertMeta({ property: "og:type", content: "website" });
    upsertMeta({ property: "og:title", content: pageTitle });
    upsertMeta({ property: "og:description", content: description });
    upsertMeta({ property: "og:url", content: `${SITE_URL}${canonicalPath}` });
    upsertMeta({ property: "og:image", content: DEFAULT_IMAGE });
    upsertMeta({ name: "twitter:card", content: "summary_large_image" });
    upsertMeta({ name: "twitter:title", content: pageTitle });
    upsertMeta({ name: "twitter:description", content: description });
    upsertMeta({ name: "twitter:image", content: DEFAULT_IMAGE });

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${SITE_URL}${canonicalPath}`);

    let schema = document.getElementById("seo-schema");
    if (!schema) {
      schema = document.createElement("script");
      schema.id = "seo-schema";
      schema.type = "application/ld+json";
      document.head.appendChild(schema);
    }

    schema.textContent = JSON.stringify(
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
        logo: DEFAULT_IMAGE,
        description,
        sameAs: [],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+91 92163 99808",
            contactType: "sales",
            areaServed: "IN",
            availableLanguage: ["English", "Hindi"],
          },
        ],
      },
      null,
      2
    );
  }, [location.pathname, location.search]);

  return null;
};

export default Seo;
