const BASE_URL = "https://ybdizayn.com";

const SAME_AS = [
  "https://www.facebook.com/p/YB-Dizayn-100068664020648/",
  "https://www.instagram.com/ybdizaynn/",
];

/**
 * Site-wide structured data (Organization + WebSite), rendered once in the root
 * layout.
 *
 * NOTE — no LocalBusiness node, on purpose. YB Dizayn shares the same physical
 * address and landline (+90 216 651 61 63) as its sister site dekoartizan.com.
 * To avoid local-pack cannibalization, dekoartizan is the designated local /
 * Google Business Profile entity, so this site presents only as a brand
 * Organization — no address / geo / areaServed that would make it compete for
 * the "Ümraniye duvar kağıdı" local pack. See cross-links.ts for the sister-site
 * linking strategy.
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
  ],
};
