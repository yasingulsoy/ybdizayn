/** Kapak görselleri: public/blog-assets (eski products klasörü). SEO için kısa, açıklayıcı alt metinler. */

const base = "/blog-assets";

/** Liste ve kartlarda kapak yoksa kullanılan yedek görsel */
export const fallbackArticleCoverSrc = `${base}/klasik-sepya-tonlu-orman-ve-nehir-manzarasi-duvar-kaplamasi/klasik-sepya-tonlu-orman-ve-nehir-manzarasi-duvar-kaplamasi-1.webp`;

export type ArticleCover = {
  src: string;
  alt: string;
};

export const articleCovers: Record<string, ArticleCover> = {
  "duvar-kagidinizi-kendiniz-yapin": {
    src: `${base}/klasik-sepya-tonlu-orman-ve-nehir-manzarasi-duvar-kaplamasi/klasik-sepya-tonlu-orman-ve-nehir-manzarasi-duvar-kaplamasi-1.webp`,
    alt: "Sepya tonlu orman ve nehir temalı duvar kaplaması — profesyonel duvar kağıdı uygulaması ilhamı",
  },
  "dijital-duvar-kagidi-secim-rehberi": {
    src: `${base}/klasik-italyan-bahcesi-manzarali-duvar-kagidi/klasik-italyan-bahcesi-manzarali-duvar-kagidi-1.webp`,
    alt: "Klasik İtalyan bahçesi manzaralı duvar kağıdı — mekana uygun desen seçimi",
  },
  "duvar-kagidi-renk-uyumu-nasil-yapilir": {
    src: `${base}/pastel-tonlu-botanik-muz-yapraklari-duvar-kagidi/pastel-tonlu-botanik-muz-yapraklari-duvar-kagidi-1.webp`,
    alt: "Pastel tonlu botanik muz yaprakları desenli duvar kağıdı — renk uyumu örneği",
  },
  "dijital-duvar-kagidi-ile-kucuk-odalar-buyuk-gorunsun": {
    src: `${base}/mavi-beyaz-dag-manzarali-manzarali-duvar-posteri/mavi-beyaz-dag-manzarali-manzarali-duvar-posteri-1.webp`,
    alt: "Mavi beyaz dağ manzaralı duvar posteri — küçük odada derinlik etkisi",
  },
  "duvar-kagidi-bakimi-ve-uzun-omurlu-kullanim": {
    src: `${base}/monokrom-palmiye-ve-botanik-cizim-duvar-kagidi/monokrom-palmiye-ve-botanik-cizim-duvar-kagidi-1.webp`,
    alt: "Monokrom palmiye ve botanik çizim duvar kağıdı — uzun ömürlü modern yüzey",
  },
  "ofislerde-duvar-kagidi-kullanimi": {
    src: `${base}/modern-buyuk-yaprakli-egzotik-duvar-kagidi/modern-buyuk-yaprakli-egzotik-duvar-kagidi-1.webp`,
    alt: "Modern büyük yapraklı egzotik duvar kağıdı — ofis ve kurumsal mekanlar",
  },
  "oteller-icin-dijital-duvar-kagidi-cozumleri": {
    src: `${base}/vintage-saray-manzarali-nostaljik-duvar-kagidi/vintage-saray-manzarali-nostaljik-duvar-kagidi-1.webp`,
    alt: "Vintage saray manzaralı nostaljik duvar kağıdı — otel ve lobi uygulaması",
  },
  "cocuk-odasi-duvar-kagidi-fikirleri": {
    src: `${base}/pastel-tonlu-sevimli-hayvanlar-ve-ucan-balonlar-cocuk-odasi-duvar-posteri/pastel-tonlu-sevimli-hayvanlar-ve-ucan-balonlar-cocuk-odasi-duvar-posteri-1.webp`,
    alt: "Pastel tonlu sevimli hayvanlar ve uçan balonlar — çocuk odası duvar posteri",
  },
  "duvar-kagidi-trendleri-2026": {
    src: `${base}/buyuk-pembe-kasimpati-ve-yaprak-desenli-duvar-kagidi/buyuk-pembe-kasimpati-ve-yaprak-desenli-duvar-kagidi-1.webp`,
    alt: "Büyük pembe kasımpatı ve yaprak desenli duvar kağıdı — 2026 dekorasyon trendi",
  },
  "duvar-kagidi-fiyatlarini-etkileyen-faktorler": {
    src: `${base}/klasik-mimari-ve-doga-temali-fresk-duvar-posteri/klasik-mimari-ve-doga-temali-fresk-duvar-posteri-1.webp`,
    alt: "Klasik mimari ve doğa temalı fresk duvar posteri — özel baskı kalitesi",
  },
  "duvar-kagidi-uygulamasinda-sik-yapilan-hatalar": {
    src: `${base}/antik-botanik-bahcesi-duvar-kagidi/antik-botanik-bahcesi-duvar-kagidi-1.webp`,
    alt: "Antik botanik bahçesi temalı duvar kağıdı — doğru ölçü ve uygulama",
  },
  "dijital-duvar-kagidi-mi-boya-mi": {
    src: `${base}/tropikal-botanik-orman-dekoratif-duvar-kagidi/tropikal-botanik-orman-dekoratif-duvar-kagidi-1.webp`,
    alt: "Tropikal botanik orman desenli dekoratif duvar kağıdı — boyaya göre yüzey seçenekleri",
  },
  "duvar-kagidi-olcu-alma-rehberi": {
    src: `${base}/klasik-saksida-botanik-bitkiler-ve-kus-motifli-duvar-kagidi/klasik-saksida-botanik-bitkiler-ve-kus-motifli-duvar-kagidi-1.webp`,
    alt: "Klasik saksıda botanik bitkiler ve kuş motifli duvar kağıdı — desen hizası ve metraj",
  },
  "salon-icin-duvar-kagidi-fikirleri": {
    src: `${base}/vintage-stil-krem-tonlu-botanik-bahce-manzarali-duvar-poster/vintage-stil-krem-tonlu-botanik-bahce-manzarali-duvar-poster-1.webp`,
    alt: "Vintage stil krem tonlu botanik bahçe manzaralı duvar posteri — salon dekorasyonu",
  },
  "yatak-odasi-icin-duvar-kagidi-onerileri": {
    src: `${base}/bej-ve-yesil-tonlu-tropikal-botanik-yapraklar-duvar-kagidi-poster/bej-ve-yesil-tonlu-tropikal-botanik-yapraklar-duvar-kagidi-poster-1.webp`,
    alt: "Bej ve yeşil tonlu tropikal botanik yapraklar — huzurlu yatak odası duvar kağıdı",
  },
};

export function getArticleCover(slug: string): ArticleCover | undefined {
  return articleCovers[slug];
}
