import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import products from "../data/products.js";

const SITE_NAME = "Pinnacle Expo";
const SITE_URL = "https://www.pinnacleexpo.com";
const DEFAULT_IMAGE =
  "https://res.cloudinary.com/dljubulyn/image/upload/v1779085728/pinnacleexpo/logo.png";

const routeMeta = {
  "/": {
    title: "Pinnacle Expo | Export Rice, Engine Lubricants & London Colognes",
    description:
      "Pinnacle Expo (Pinnacle Group Mohali) is a leading export supplier of Indian basmati rice, Thai jasmine rice, premium engine lubricants, and London Colognes perfumes for single or bulk orders.",
    keywords:
      "Pinnacle Expo Mohali, Pinnacle Group, export rice supplier India, Thai jasmine rice exporter, Indian basmati rice, engine lubricants supplier, London Colognes perfumes, wholesale perfumes, bulk perfume orders, single and bulk orders India",
  },
  "/about": {
    title: "About Us | Pinnacle Expo",
    description:
      "Learn about Pinnacle Expo (Pinnacle Group), your trusted export partner in Mohali, India, for premium rice, engine lubricants, and London Colognes fragrances with a focus on global wholesale supply.",
    keywords:
      "about Pinnacle Expo, export company Mohali, Pinnacle Group Punjab, rice exporter India, lubricant supplier, perfume supplier",
  },
  "/contact": {
    title: "Contact Us | Pinnacle Expo",
    description:
      "Get in touch with Pinnacle Expo in Mohali, India, for export enquiries, bulk rice supply, Thai jasmine rice, engine lubricants distribution, and London Colognes wholesale/bulk orders.",
    keywords:
      "contact Pinnacle Expo, export company contact Mohali, rice export enquiry, lubricant distribution, London Colognes wholesale, Pinnacle Expo phone number",
  },
  "/products": {
    title: "Our Products | Pinnacle Expo",
    description:
      "Explore premium Indian basmati rice, Thai jasmine rice, engine lubricants, and London Colognes fragrances available for single or bulk export orders from Pinnacle Expo.",
    keywords:
      "export products, Thai jasmine rice bulk, Indian basmati rice wholesale, engine lubricants, London Colognes perfumes, single and bulk order fragrances",
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

    let pageTitle = route.title;
    let description = route.description;
    let keywords = route.keywords;
    let canonicalPath = location.pathname;
    let productName = "";

    if (location.pathname === "/products" && item) {
      productName = item
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      pageTitle = `${productName} | ${SITE_NAME}`;
      description = `Buy premium ${productName.toLowerCase()} online at ${SITE_NAME}. Available for single and bulk export orders with worldwide shipping.`;
      keywords = `${productName.toLowerCase()} wholesale, bulk ${productName.toLowerCase()}, export ${productName.toLowerCase()}, Pinnacle Expo Mohali, engine lubricants, London Colognes`;
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

    const isLondonColognes = location.pathname === "/products" && item === "london-colognes";

    const graph = [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: DEFAULT_IMAGE,
        description: description,
        sameAs: [
          "https://instagram.com/londoncolognes",
          "https://www.facebook.com/share/1HojJAz8xj/"
        ],
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
      {
        "@type": "LocalBusiness",
        "@id": isLondonColognes 
          ? `${SITE_URL}${canonicalPath}/#localbusiness`
          : `${SITE_URL}/#localbusiness`,
        name: isLondonColognes ? "London Colognes" : "Pinnacle Group",
        url: isLondonColognes ? `${SITE_URL}${canonicalPath}` : SITE_URL,
        logo: DEFAULT_IMAGE,
        image: DEFAULT_IMAGE,
        description: isLondonColognes
          ? "London Colognes offers premium, long-lasting fragrances designed to evoke elegance, sophistication, and raw energy."
          : "Pinnacle Group (Pinnacle Expo) is a premium global exporter of high-quality Indian & Thai rice, engine lubricants, and luxury fragrances.",
        telephone: "+91 9216399808",
        priceRange: "$$",
        hasMap: "https://maps.app.goo.gl/p1RB4rmxT3u5guAr9",
        sameAs: [
          "https://maps.app.goo.gl/p1RB4rmxT3u5guAr9"
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "SCF 124, First Floor, Phase 11",
          addressLocality: "Mohali",
          addressRegion: "Punjab",
          postalCode: "160062",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 30.678038,
          longitude: 76.745471,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "10:00",
            closes: "19:00",
          },
        ],
      }
    ];

    if (location.pathname === "/products" && item) {
      const categoryName = item.replace(/-/g, " ");
      const categoryProducts = products.filter(
        (p) => p.category.toLowerCase() === categoryName.toLowerCase()
      );

      if (categoryProducts.length > 0) {
        graph.push({
          "@type": "ItemList",
          "@id": `${SITE_URL}${canonicalPath}/#itemlist`,
          name: `${productName} Sourced Products`,
          description: `List of premium ${productName.toLowerCase()} products offered by Pinnacle Expo.`,
          numberOfItems: categoryProducts.length,
          itemListElement: categoryProducts.map((prod, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            item: {
              "@type": "Product",
              name: prod.name,
              image: prod.image,
              description: prod.description,
              category: prod.category,
              offers: {
                "@type": "AggregateOffer",
                priceCurrency: "INR",
                offers: [
                  {
                    "@type": "Offer",
                    url: `${SITE_URL}/contact`,
                    itemCondition: "https://schema.org/NewCondition",
                    availability: "https://schema.org/InStock",
                  }
                ]
              }
            }
          }))
        });
      }
    }

    schema.textContent = JSON.stringify(
      {
        "@context": "https://schema.org",
        "@graph": graph,
      },
      null,
      2
    );
  }, [location.pathname, location.search]);

  return null;
};

export default Seo;
