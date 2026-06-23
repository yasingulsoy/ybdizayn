const BASE_URL = "https://ybdizayn.com";

const SAME_AS = [
  "https://www.facebook.com/p/YB-Dizayn-100068664020648/",
  "https://www.instagram.com/ybdizaynn/",
];

/**
 * Site-wide structured data graph (Organization + WebSite + LocalBusiness),
 * cross-referenced via @id so search engines and AI assistants resolve them
 * as a single business entity. Rendered once in the root layout.
 *
 * Only fields verifiable from the site are included. Opening hours and
 * aggregateRating are intentionally omitted (do not fabricate). priceRange
 * is a soft estimate — adjust if needed.
 */
export const siteStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "YB Dizayn",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        "@id": `${BASE_URL}/#logo`,
        url: `${BASE_URL}/logon.png`,
        contentUrl: `${BASE_URL}/logon.png`,
        caption: "YB Dizayn",
      },
      image: { "@id": `${BASE_URL}/#logo` },
      email: "info@ybdizayn.com",
      telephone: "+905302407161",
      sameAs: SAME_AS,
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "YB Dizayn",
      description:
        "Ümraniye/İstanbul merkezli dijital baskı duvar kağıdı üretimi ve uygulama hizmetleri.",
      publisher: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "tr-TR",
    },
    {
      "@type": ["LocalBusiness", "HomeGoodsStore"],
      "@id": `${BASE_URL}/#localbusiness`,
      name: "YB Dizayn",
      url: BASE_URL,
      image: `${BASE_URL}/wp/blog-1.jpg`,
      logo: `${BASE_URL}/logon.png`,
      description:
        "Konut, otel, hastane ve kurumsal mekanlar için dijital baskı duvar kağıdı üretimi, tasarımı ve uygulaması.",
      telephone: "+905302407161",
      email: "info@ybdizayn.com",
      priceRange: "₺₺",
      currenciesAccepted: "TRY",
      parentOrganization: { "@id": `${BASE_URL}/#organization` },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Adem Yavuz Mah. Barışık Sk. No:6",
        addressLocality: "Ümraniye",
        addressRegion: "İstanbul",
        postalCode: "34773",
        addressCountry: "TR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 41.0177819,
        longitude: 29.1555283,
      },
      areaServed: [
        { "@type": "City", name: "İstanbul" },
        { "@type": "Country", name: "Türkiye" },
      ],
      sameAs: SAME_AS,
    },
  ],
};
