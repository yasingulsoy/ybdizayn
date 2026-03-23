import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getAllArticles, getArticleBySlug, getCommonFaqs } from "@/lib/articles";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

const BASE_URL = "https://ybdizayn.com";
const DEFAULT_OG_IMAGES = [
  `${BASE_URL}/wp/blog-1.jpg`,
  `${BASE_URL}/wp/blog-2.jpg`,
  `${BASE_URL}/wp/blog-3.jpg`,
];

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Makale Bulunamadı - YB Dizayn",
      description: "Aradığınız makale bulunamadı.",
    };
  }

  const canonical = `${BASE_URL}/${article.slug}`;
  const socialImage =
    DEFAULT_OG_IMAGES[Math.abs(article.slug.length) % DEFAULT_OG_IMAGES.length];

  return {
    title: `${article.title} | YB Dizayn`,
    description: article.description,
    keywords: article.keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url: canonical,
      siteName: "YB Dizayn",
      locale: "tr_TR",
      type: "article",
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [socialImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  const allArticles = getAllArticles();

  if (!article) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishDate,
    dateModified: article.publishDate,
    inLanguage: "tr-TR",
    image: `${BASE_URL}/wp/blog-1.jpg`,
    author: {
      "@type": "Organization",
      name: "YB Dizayn",
    },
    publisher: {
      "@type": "Organization",
      name: "YB Dizayn",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logon.png`,
      },
    },
    mainEntityOfPage: `${BASE_URL}/${article.slug}`,
    keywords: article.keywords.join(", "),
  };
  const commonFaqs = getCommonFaqs().slice(0, 10);
  const relatedArticles = allArticles
    .filter((item) => item.slug !== article.slug)
    .slice(0, 4);
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: commonFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <Header />
      <main className="bg-[#f8f6f5] pb-16">
        <section className="bg-[#3c3531] text-white py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="text-xs uppercase tracking-[0.2em] text-white/70 mb-4">
              <Link href="/" className="hover:text-[#a47c58] transition-colors">
                Anasayfa
              </Link>
              {" / "}
              <Link href="/makaleler" className="hover:text-[#a47c58] transition-colors">
                Makaleler
              </Link>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">{article.title}</h1>
            <p className="mt-5 text-white/85 max-w-3xl">{article.description}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/75">
              <span>Yayın: {article.publishDate}</span>
              <span>•</span>
              <span>Okuma: {article.readTime}</span>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 sm:px-6 py-10 md:py-14">
          <article className="rounded-2xl bg-white p-6 md:p-10 border border-[#3c3531]/10 shadow-sm">
            <div className="mb-8 flex flex-wrap gap-2">
              {article.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full bg-[#a47c58]/15 px-3 py-1 text-xs font-medium text-[#3c3531]"
                >
                  {keyword}
                </span>
              ))}
            </div>

            <div className="space-y-10 text-[#3c3531]/90 leading-8">
              {article.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl font-semibold text-[#3c3531] mb-4">{section.heading}</h2>
                  <div className="space-y-4">
                    {section.paragraphs.map((paragraph, idx) => (
                      <p key={`${section.heading}-${idx}`}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bullets && (
                    <ul className="mt-5 list-disc pl-6 space-y-2">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            <section className="mt-10 rounded-xl border border-[#3c3531]/15 bg-[#fcfbfb] p-5">
              <h3 className="text-2xl font-semibold text-[#3c3531] mb-4">
                Uygulama Oncesi Kontrol Listesi
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-[#3c3531]/90">
                <li>Duvar olculeri netlestirildi ve fire payi eklendi.</li>
                <li>Yuzey temizligi, astar ve gerekli tamirat tamamlandi.</li>
                <li>Desen yonu ve ek yeri plani onceden cizildi.</li>
                <li>
                  Mekana uygun {article.keywords[0]} ve {article.keywords[1]} secimi yapildi.
                </li>
              </ul>
              <p className="mt-4 text-[#3c3531]/85">
                Dogru planlama ile duvar kagidi uygulamasinda hem estetik kalite hem de uzun
                omurlu kullanim elde edilir. Profesyonel yaklasim, toplam maliyeti uzun vadede
                dusurur.
              </p>
            </section>

            <div className="mt-10 rounded-xl border border-[#a47c58]/40 bg-[#f8f6f5] p-5">
              <h3 className="text-lg font-semibold text-[#3c3531] mb-2">Ek Kaynak</h3>
              <p className="text-[#3c3531]/85">
                Dekorasyon trendlerini takip etmek için{" "}
                <a
                  href="https://dekoartizan.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a47c58] font-semibold hover:underline"
                >
                  dekoartizan.com
                </a>{" "}
                sitesine de göz atabilirsiniz.
              </p>
            </div>

            <section className="mt-10">
              <h3 className="text-2xl font-semibold text-[#3c3531] mb-4">Sikca Sorulan Sorular</h3>
              <div className="space-y-3">
                {commonFaqs.map((item) => (
                  <details
                    key={item.question}
                    className="rounded-xl border border-[#3c3531]/15 bg-white p-4"
                  >
                    <summary className="cursor-pointer font-semibold text-[#3c3531]">
                      {item.question}
                    </summary>
                    <p className="mt-3 text-[#3c3531]/85">{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="mt-10">
              <h3 className="text-2xl font-semibold text-[#3c3531] mb-4">Benzer Makaleler</h3>
              <div className="grid gap-3 md:grid-cols-2">
                {relatedArticles.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/${item.slug}`}
                    className="rounded-xl border border-[#3c3531]/15 bg-white p-4 hover:border-[#a47c58]/45 transition-colors"
                  >
                    <p className="text-sm text-[#a47c58] mb-1">{item.publishDate}</p>
                    <p className="font-semibold text-[#3c3531]">{item.title}</p>
                  </Link>
                ))}
              </div>
            </section>
          </article>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </main>
      <NewsletterSection />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
