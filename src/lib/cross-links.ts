/**
 * Per-article editorial links to dekoartizan.com (a sister site).
 *
 * Each article gets its own destination, anchor text and surrounding sentence.
 * This replaces the previous identical boilerplate link that appeared on all 15
 * articles — a sitewide duplicate external link is a link-scheme footprint that
 * search engines discount, and it wasted the topical relevance each article has.
 *
 * Deliberately targets dekoartizan's commercial/catalogue pages only, never its
 * city landing pages (/umraniye-duvar-kagidi etc.). YB Dizayn is itself an
 * Ümraniye/İstanbul local business, so linking to those would put the two sites
 * in competition for the same local queries instead of complementing each other:
 * ybdizayn = local manufacturing/service, dekoartizan = product catalogue.
 */
export type CrossLink = {
  href: string;
  anchor: string;
  before: string;
  after: string;
};

const DEKO = "https://dekoartizan.com";

export const crossLinks: Record<string, CrossLink> = {
  "duvar-kagidinizi-kendiniz-yapin": {
    href: `${DEKO}/tekstil-duvar-kagidi-uygulama`,
    anchor: "tekstil duvar kağıdı uygulama adımları",
    before: "Kendi uygulamanızı profesyonel montaj yöntemiyle karşılaştırmak isterseniz ",
    after: " sayfasındaki anlatım, özellikle ek yeri ve desen hizası konusunda yol gösterir.",
  },
  "dijital-duvar-kagidi-secim-rehberi": {
    href: `${DEKO}/kategorilerimiz`,
    anchor: "duvar kağıdı kategorileri",
    before: "Aradığınız temayı daraltmak için ",
    after: " listesini gezerek mekanınıza uygun desen ailesini belirleyebilirsiniz.",
  },
  "duvar-kagidi-renk-uyumu-nasil-yapilir": {
    href: `${DEKO}/yeni-tasarimlar`,
    anchor: "yeni çıkan duvar kağıdı tasarımları",
    before: "Renk paletinizi belirledikten sonra ",
    after: " arasından paletinize oturan bir desen seçmek işi kolaylaştırır.",
  },
  "dijital-duvar-kagidi-ile-kucuk-odalar-buyuk-gorunsun": {
    href: `${DEKO}/urunlerimiz`,
    anchor: "panoramik duvar kağıdı modelleri",
    before: "Küçük mekanlarda derinlik hissi veren geniş açılı desenler için ",
    after: " koleksiyonu iyi bir başlangıç noktasıdır.",
  },
  "duvar-kagidi-bakimi-ve-uzun-omurlu-kullanim": {
    href: `${DEKO}/urunlerimiz`,
    anchor: "silinebilir yüzeyli duvar kağıdı seçenekleri",
    before: "Yoğun kullanılan alanlarda temizlik kolaylığı önemliyse ",
    after: " arasından dayanıklı yüzeyli bir model tercih edebilirsiniz.",
  },
  "ofislerde-duvar-kagidi-kullanimi": {
    href: `${DEKO}/duvar-kagidi-imalati`,
    anchor: "özel ölçü duvar kağıdı imalatı",
    before: "Kurumsal projelerde ölçüye göre üretim ve toplu sipariş gerekiyorsa ",
    after: " sürecini incelemek planlamanızı hızlandırır.",
  },
  "oteller-icin-dijital-duvar-kagidi-cozumleri": {
    href: `${DEKO}/duvar-kagidi-imalati`,
    anchor: "proje bazlı duvar kağıdı üretimi",
    before: "Çok odalı otel projelerinde tekrarlanabilir desen ve stok sürekliliği için ",
    after: " başlığı altındaki bilgiler işinize yarayabilir.",
  },
  "cocuk-odasi-duvar-kagidi-fikirleri": {
    href: `${DEKO}/kategorilerimiz`,
    anchor: "çocuk odası desen kategorileri",
    before: "Yaşa uygun temaları bir arada görmek için ",
    after: " bölümünden ilham alabilirsiniz.",
  },
  "duvar-kagidi-trendleri-2026": {
    href: `${DEKO}/yeni-tasarimlar`,
    anchor: "sezonun yeni duvar kağıdı desenleri",
    before: "Bu başlıklarda öne çıkan güncel desenleri görmek isterseniz ",
    after: " sayfası sezonun güncel seçkisini derliyor.",
  },
  "duvar-kagidi-fiyatlarini-etkileyen-faktorler": {
    href: `${DEKO}/cok-satanlar`,
    anchor: "çok satan duvar kağıdı modelleri",
    before: "Fiyat–performans dengesi kurmak için ",
    after: " arasındaki tercih edilen ürünleri karşılaştırmak fikir verir.",
  },
  "duvar-kagidi-uygulamasinda-sik-yapilan-hatalar": {
    href: `${DEKO}/tekstil-duvar-kagidi-uygulama`,
    anchor: "doğru duvar kağıdı uygulama tekniği",
    before: "Bu hataların çoğu doğru teknikle önlenebilir; ",
    after: " anlatımı adım adım referans olarak kullanılabilir.",
  },
  "dijital-duvar-kagidi-mi-boya-mi": {
    href: `${DEKO}/musteri-yorumlari`,
    anchor: "kullanıcı deneyimleri",
    before: "Karar aşamasındaysanız ",
    after: " bölümündeki gerçek geri bildirimler iki seçenek arasında fikir verebilir.",
  },
  "duvar-kagidi-olcu-alma-rehberi": {
    href: `${DEKO}/tekstil-duvar-kagidi-uygulama`,
    anchor: "uygulama ve ölçü hazırlığı",
    before: "Ölçüleri çıkardıktan sonraki adımlar için ",
    after: " sayfasındaki hazırlık listesi kontrol amaçlı kullanılabilir.",
  },
  "salon-icin-duvar-kagidi-fikirleri": {
    href: `${DEKO}/kategorilerimiz`,
    anchor: "salon duvar kağıdı temaları",
    before: "Oturma alanınızın karakterine uygun bir yön belirlemek için ",
    after: " içinden birkaç temayı kısa listeye alabilirsiniz.",
  },
  "yatak-odasi-icin-duvar-kagidi-onerileri": {
    href: `${DEKO}/blog`,
    anchor: "dekorasyon yazıları",
    before: "Dinlendirici mekan kurgusu üzerine daha fazla örnek için ",
    after: " bölümündeki içerikler farklı yaklaşımlar sunuyor.",
  },
};

export function getCrossLink(slug: string): CrossLink | undefined {
  return crossLinks[slug];
}
