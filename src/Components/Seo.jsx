import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import products from "../data/products.js";

const SITE_NAME = "Pinnacle Expo";
const SITE_URL = "https://www.pinnacleexpo.com";
const DEFAULT_IMAGE =
  "https://res.cloudinary.com/dljubulyn/image/upload/v1779085728/pinnacleexpo/logo.png";

const routeMeta = {
  "/": {
    title: "Pinnacle Expo Mohali | Export Rice, Lubricants & London Colognes India",
    description:
      "Pinnacle Expo (Pinnacle Group Mohali Phase 11) is Chandigarh Tricity's leading export supplier of Indian basmati rice, Thai jasmine rice, premium engine lubricants, and London Colognes. Buy single or bulk orders locally in Mohali & Chandigarh.",
    keywords:
      "Pinnacle Expo Mohali, perfumes, chandigarh most famous perfumes, fashion accessories in chandigarh, mohali, Pinnacle Group Chandigarh, export rice supplier India, basmati rice Mohali, engine lubricants Chandigarh, London Colognes Chandigarh, wholesale perfumes Punjab, buy perfumes Mohali, single and bulk orders tricity, import export companies Mohali Phase 11",
  },
  "/about": {
    title: "About Pinnacle Expo | Export Company in Mohali Chandigarh",
    description:
      "Learn about Pinnacle Expo (Pinnacle Group), your trusted export & local supply partner based in SCF 124 Phase 11 Mohali, servicing Chandigarh Tricity and global markets with rice, lubricants, and fragrances.",
    keywords:
      "about Pinnacle Expo, export company Mohali, perfumes, chandigarh most famous perfumes, fashion accessories in chandigarh, mohali, Pinnacle Group Punjab, Chandigarh tricity exporters, rice exporter India, lubricant supplier Punjab, perfume supplier Mohali",
  },
  "/contact": {
    title: "Contact Pinnacle Expo Mohali | Chandigarh Sales Office",
    description:
      "Contact Pinnacle Expo in Phase 11 Mohali. Call +91 92163 99808 for export enquiries, bulk basmati rice, engine lubricants distribution, and local or wholesale London Colognes fragrance booking in Chandigarh tricity.",
    keywords:
      "contact Pinnacle Expo, export company contact Mohali, office phase 11 Mohali, perfumes, chandigarh most famous perfumes, fashion accessories in chandigarh, mohali, Chandigarh tricity import export, rice export enquiry, lubricant distribution Punjab, London Colognes wholesale Mohali",
  },
  "/products": {
    title: "Buy Premium Products in Mohali Chandigarh | Pinnacle Expo",
    description:
      "Shop premium Indian basmati rice, Thai jasmine rice, engine oils, and London Colognes. Available for single home delivery in Mohali/Chandigarh and bulk export containers.",
    keywords:
      "perfumes, chandigarh most famous perfumes, fashion accessories in chandigarh, mohali, buy perfumes Mohali, buy rice Chandigarh, lubricants distributor Punjab, export products India, Thai jasmine rice bulk, Indian basmati rice wholesale, London Colognes retail Mohali",
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
    const pathname = location.pathname;

    let pageTitle = "";
    let description = "";
    let keywords = "";
    let canonicalPath = pathname;

    // Detect if we are on a perfume detail page
    const perfumeMatch = pathname.match(/^\/london-colognes\/([^/]+)/);
    const isLondonColognesBrandPage = pathname === "/london-colognes";
    const isIndianRicePage = pathname === "/indian-rice";
    const isJasmineRicePage = pathname === "/jasmine-rice";
    const isLubricantsPage = pathname === "/lubricants";

    let activePerfume = null;

    if (perfumeMatch) {
      const perfumeSlug = perfumeMatch[1];
      activePerfume = products.find(
        (p) => p.slug === perfumeSlug && p.category === "London Colognes"
      );
    }

    if (activePerfume) {
      pageTitle = `Buy ${activePerfume.name} Perfume in Mohali Chandigarh | London Colognes`;
      description = `Buy ${activePerfume.name} by London Colognes in Mohali, Chandigarh, and across India. 40% oil concentration Extrait de Parfum with 10-12 hours of longevity. Perfect for personal use, gifting, or retail resale.`;
      keywords = `${activePerfume.slug} perfume mohali, buy ${activePerfume.slug} chandigarh, perfumes, chandigarh most famous perfumes, fashion accessories in chandigarh, mohali, luxury perfumes chandigarh, best perfume shop in mohali, designer fragrances panchkula, top perfume brands in chandigarh, unisex fragrances chandigarh, gifting items in chandigarh, premium perfume store mohali, custom fragrance gifting india, import export perfumes punjab, perfume distributor mohali phase 11, wholesale perfume supplier chandigarh, original perfumes online india, perfume gift packs chandigarh, scent boutique mohali, attar and perfumes chandigarh, luxury lifestyle accessories mohali, wedding gifts chandigarh tricity, corporate gifts mohali, extrait de parfum india online, long lasting fragrance shop chandigarh, branded scents mohali, luxury perfume gifts punjab, french perfumes chandigarh, london colognes price india, mens cologne shop chandigarh, womens perfume boutique mohali, luxury fragrance wholesale india, perfumes shop in phase 11 mohali, premium scents chandigarh, fashion trends chandigarh tricity`;
    } else if (isLondonColognesBrandPage) {
      pageTitle = `London Colognes Mohali Chandigarh | Buy Luxury Perfumes`;
      description = `Buy London Colognes for personal wear, retail resale, or bulk export distribution in Mohali Phase 11 & Chandigarh. Find long-lasting 40% Extrait de Parfum in India.`;
      keywords = `perfumes, chandigarh most famous perfumes, fashion accessories in chandigarh, mohali, london colognes mohali, perfumes chandigarh, buy perfume online mohali, luxury perfumes tricity, long lasting scents chandigarh, sensory perfume mohali, floral perfume chandigarh, untamed cologne mohali, affection cologne punjab, wholesale luxury perfumes, perfume export india, bulk colognes, luxury perfumes chandigarh, best perfume shop in mohali, designer fragrances panchkula, top perfume brands in chandigarh, unisex fragrances chandigarh, gifting items in chandigarh, premium perfume store mohali, custom fragrance gifting india, import export perfumes punjab, perfume distributor mohali phase 11, wholesale perfume supplier chandigarh, original perfumes online india, perfume gift packs chandigarh, scent boutique mohali, attar and perfumes chandigarh, luxury lifestyle accessories mohali, wedding gifts chandigarh tricity, corporate gifts mohali, extrait de parfum india online, long lasting fragrance shop chandigarh, branded scents mohali, luxury perfume gifts punjab, french perfumes chandigarh, london colognes price india, mens cologne shop chandigarh, womens perfume boutique mohali, luxury fragrance wholesale india, perfumes shop in phase 11 mohali, premium scents chandigarh, fashion trends chandigarh tricity`;
    } else if (isIndianRicePage) {
      pageTitle = `Indian Basmati Rice Exporter Mohali | Pinnacle Expo`;
      description = `Authorized exporter and supplier of high-quality Indian Basmati (1121, 1509, 1718, Pusa) and Non-Basmati (Sugandha, Sona Masoori, PR11) rice. Bulk container shipments and regional distribution from Mohali, Punjab.`;
      keywords = `basmati rice supplier punjab, indian basmati rice exporter mohali, basmati 1121 wholesale chandigarh, sona masoori supplier, sharbati rice bulk, Indian rice exporter, Pinnacle Expo Mohali`;
    } else if (isJasmineRicePage) {
      pageTitle = `Jasmine Rice Importer & Supplier Mohali Chandigarh | Pinnacle Expo`;
      description = `Premium aromatic Thai Jasmine rice sourced for international export and local distribution in Chandigarh tricity. Top-grade fragrant rice for bulk supply or retail.`;
      keywords = `jasmine rice supplier mohali, jasmine rice wholesale chandigarh, premium fragrant rice supplier, aromatic jasmine rice bulk, Pinnacle Expo jasmine rice`;
    } else if (isLubricantsPage) {
      pageTitle = `Engine Lubricants Distributor Mohali Chandigarh | Pinnacle Expo`;
      description = `Automotive and industrial engine lubricants supplier in Mohali, Punjab. Premium synthetic motor oil, ATF gear oils, and OEM lubricants for regional distribution and export.`;
      keywords = `lubricants distributor mohali, engine oil supplier chandigarh, synthetic motor oil exporter, industrial lubricants wholesale, atf oil bulk, Pinnacle Expo lubricants`;
    } else if (pathname === "/products" && item) {
      const productName = item
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      pageTitle = `Buy ${productName} in Mohali Chandigarh | ${SITE_NAME}`;
      description = `Buy premium ${productName.toLowerCase()} online at ${SITE_NAME} Mohali. Available for single and bulk export orders across India with regional distribution.`;
      keywords = `${productName.toLowerCase()} mohali, buy ${productName.toLowerCase()} chandigarh, ${productName.toLowerCase()} wholesale, bulk ${productName.toLowerCase()}, export ${productName.toLowerCase()}, Pinnacle Expo Mohali`;
      canonicalPath = `${pathname}?item=${item}`;
    } else {
      const route = routeMeta[pathname] ?? routeMeta["/"];
      pageTitle = route.title;
      description = route.description;
      keywords = route.keywords;
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

    const isLondonColognes = isLondonColognesBrandPage || Boolean(activePerfume);

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
          ? `${SITE_URL}/london-colognes/#localbusiness`
          : `${SITE_URL}/#localbusiness`,
        name: isLondonColognes ? "London Colognes" : SITE_NAME,
        url: isLondonColognes ? `${SITE_URL}/london-colognes` : SITE_URL,
        logo: DEFAULT_IMAGE,
        image: DEFAULT_IMAGE,
        description: isLondonColognes
          ? "London Colognes offers premium, long-lasting fragrances designed to evoke elegance, sophistication, and raw energy."
          : "Pinnacle Expo is a premium global exporter of high-quality Indian & Thai rice, engine lubricants, and luxury fragrances.",
        telephone: "+91 9216399808",
        priceRange: "$$",
        areaServed: [
          { "@type": "AdministrativeArea", "name": "Mohali" },
          { "@type": "AdministrativeArea", "name": "Chandigarh" },
          { "@type": "AdministrativeArea", "name": "Panchkula" },
          { "@type": "Country", "name": "India" }
        ],
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

    if (activePerfume) {
      // Add Product Schema
      graph.push({
        "@context": "https://schema.org",
        "@type": "Product",
        "@id": `${SITE_URL}${canonicalPath}/#product`,
        name: activePerfume.name,
        image: activePerfume.image,
        description: activePerfume.description,
        brand: {
          "@type": "Brand",
          name: "London Colognes",
        },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "INR",
          lowPrice: "1999",
          highPrice: "3499",
          offerCount: "1",
          offers: [
            {
              "@type": "Offer",
              url: `${SITE_URL}/contact`,
              itemCondition: "https://schema.org/NewCondition",
              availability: "https://schema.org/InStock",
            }
          ]
        }
      });

      // Add FAQ Schema
      graph.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${SITE_URL}${canonicalPath}/#faq`,
        mainEntity: activePerfume.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      });

      // Add Breadcrumb List
      graph.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}${canonicalPath}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "London Colognes",
            item: `${SITE_URL}/london-colognes`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: activePerfume.name,
            item: `${SITE_URL}${canonicalPath}`,
          },
        ],
      });
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
